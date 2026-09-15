import nodemailer from 'nodemailer'

const allowedOrigin = 'https://emmhanbantolin.me'

export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (request.method === 'OPTIONS') return response.status(204).end()
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })

  const { name, email, message } = request.body || {}
  if (!name || !email || !message) return response.status(400).json({ error: 'Please complete all fields.' })

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

    return response.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact email failed:', error)
    return response.status(500).json({ error: 'Unable to send your message right now.' })
  }
}