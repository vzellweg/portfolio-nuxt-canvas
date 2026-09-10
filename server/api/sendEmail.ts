import { Resend } from 'resend'
import type { H3Event } from 'h3'
import type { ContactEmail } from '~/types/ContactEmail'

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
  }[char] as string))

export default defineEventHandler(async (event: H3Event) => {
  const { resendApiKey } = useRuntimeConfig(event)
  if (!resendApiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Email service is not configured' })
  }

  const body = await readBody<Partial<ContactEmail>>(event)
  const fullname = body?.fullname?.trim() ?? ''
  const email = body?.email?.trim() ?? ''
  const phone = body?.phone?.trim() ?? ''
  const subject = body?.subject?.trim() ?? ''
  const message = body?.message?.trim() ?? ''

  if (!fullname || !email || !subject || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const resend = new Resend(resendApiKey)
  const { data, error } = await resend.emails.send({
    from: 'VZ Portfolio <no-reply@zellweger.dev>',
    to: ['vazellweg@gmail.com'],
    replyTo: email,
    subject: 'New Message from Victor\'s Portfolio Contact Form',
    html: `
      <p>A new message has been sent from the VZ Folio contact form.</p>
      <p>Here are the message details:</p>
      <ul>
        <li>Name : ${escapeHtml(fullname)}</li>
        <li>Email : ${escapeHtml(email)}</li>
        <li>Phone : ${escapeHtml(phone)}</li>
        <li>Subject : ${escapeHtml(subject)}</li>
        <li>Message : ${escapeHtml(message)}</li>
      </ul>
    `,
  })

  if (error) {
    throw createError({ statusCode: 502, statusMessage: error.message })
  }

  return data
})
