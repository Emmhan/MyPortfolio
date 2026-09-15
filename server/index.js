import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT || 3000)
const configuredOrigins = (process.env.FRONTEND_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
const allowedOrigins = [...new Set([
  'https://emmhanbantolin.me',
  'https://www.emmhanbantolin.me',
  ...configuredOrigins,
])]

app.use((request, response, next) => {
  const origin = request.headers.origin
  if (origin && allowedOrigins.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin)
    response.setHeader('Vary', 'Origin')
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }
  if (request.method === 'OPTIONS') return response.status(204).end()
  next()
})
app.use(express.json({ limit: '10kb' }))

const smtpConfigured = Boolean(
  process.env.BREVO_SMTP_USER
  && process.env.BREVO_SMTP_KEY
  && process.env.BREVO_FROM_EMAIL
  && process.env.CONTACT_TO_EMAIL,
)

app.get('/', (_request, response) => response.json({ service: 'portfolio-contact-api', status: 'ok' }))
app.get('/health', (_request, response) => response.json({ status: 'ok', smtpConfigured }))

app.post('/api/contact', async (request, response) => {
  const { name, email, message } = request.body || {}
  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Please complete all fields.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
      port: Number(process.env.BREVO_SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
    })

    await transporter.sendMail({
      from: process.env.BREVO_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return response.json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact email failed:', {
      code: error.code,
      responseCode: error.responseCode,
      command: error.command,
      message: error.message,
    })
    return response.status(500).json({ error: 'Email service configuration or delivery failed. Check the backend environment variables.' })
  }
})

app.listen(port, () => console.log(`Contact backend listening on port ${port}`))