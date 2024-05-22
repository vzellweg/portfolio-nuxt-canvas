import { Resend } from 'resend'
import type { H3Event } from 'h3'
import type { ContactEmail } from '~/types/ContactEmail'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail
    const { email, subject, message, phone, fullname } = body
    return await resend.emails.send({
      from: 'VZ Portfolio <no-reply@zellweger.dev>',
      to: ['vazellweg@gmail.com'],
      subject: 'New Message from Victor\'s Portfolio Contact Form',
      html: `
      <p>A new message has been sent from the VZ Folio contact form.</p>
      <p>Here are the message details:</p>
      <ul>
        <li>Name : ${fullname}</li>
        <li>Email : ${email}</li>
        <li>Phone : ${phone}</li>
        <li>Subject : ${subject}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    return { error }
  }
})
