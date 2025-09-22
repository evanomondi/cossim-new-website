import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await req.json()
    
    // TODO: call Resend here in Phase 8 infra; for now just 204
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@cossim.co.ke',
    //   to: 'hello@cossim.co.ke',
    //   subject: 'New Contact Form Submission',
    //   html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Message: ${body.message}</p>`
    // })
    
    return new NextResponse(null, { status: 204 })
  } catch {
    return new NextResponse(null, { status: 400 })
  }
}