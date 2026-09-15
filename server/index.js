import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT || 3000)
const allowedOrigins = (process.env.FRONTEND_ORIGINS || 'https://emmhanbantolin.me')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(cors({ origin: allowedOrigins }))
app.use(express.json({ limit: '10kb' }))

app.get('/health', (_request, response) => response.json({ status: 'ok' }))

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
    console.error('Contact email failed:', error)
    return response.status(500).json({ error: 'Unable to send your message right now.' })
  }
})

app.listen(port, () => console.log(`Contact backend listening on port ${port}`))