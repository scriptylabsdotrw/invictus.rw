import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587)

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,           // 465 = SSL, 587 = STARTTLS
  requireTLS: SMTP_PORT === 587,       // force STARTTLS upgrade on 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,         // accept self-signed certs on shared hosting
  },
  connectionTimeout: 20_000,
  greetingTimeout: 20_000,
  socketTimeout: 20_000,
})

const FROM      = `Invictus <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`
const NOTIFY_TO = process.env.DEMO_NOTIFY_EMAIL ?? 'demo@invictus.rw'
const SITE_URL  = 'https://invictus.rw'
const LOGO_URL  = `${SITE_URL}/logos/full_logos/Invictus_FullLogo_WhiteOrange_on_Emerald.png`

// ─── shared helpers ──────────────────────────────────────────────────────────

const fonts = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
`

const base = `
  font-family:'Space Grotesk',Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  margin:0;padding:0;background:#F1F5F9;
`

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;color:#64748B;font-size:13px;font-weight:500;width:130px;vertical-align:top">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;color:#0F172A;font-size:14px;font-weight:600;vertical-align:top">${value}</td>
    </tr>
  `
}

// ─── notification email (to the team) ────────────────────────────────────────

function notifyHtml(d: {
  accountType: string; fullName: string; orgName: string; email: string
  phone: string; category: string; staff: string; demoDate: string; demoTime: string; message: string
}) {
  const isBusiness = d.accountType === 'business'
  const displayName = isBusiness ? `${d.fullName} · ${d.orgName}` : d.fullName
  const typeBadge = isBusiness ? 'Business' : 'Individual'

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>New Demo Request — ${isBusiness ? d.orgName : d.fullName}</title>
  ${fonts}
</head>
<body style="${base}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#022C22 0%,#065F46 100%);border-radius:16px 16px 0 0;padding:32px 40px 28px">
            <img src="${LOGO_URL}" alt="Invictus" height="44" style="display:block;height:44px;border:0">
            <div style="margin-top:20px;display:inline-flex;gap:8px;align-items:center">
              <span style="display:inline-block;background:rgba(212,175,55,0.18);border:1px solid rgba(212,175,55,0.4);border-radius:999px;padding:5px 14px;color:#D4AF37;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">New Demo Request</span>
              <span style="display:inline-block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);border-radius:999px;padding:5px 14px;color:#fff;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">${typeBadge}</span>
            </div>
            <h1 style="margin:10px 0 0;color:#FFFFFF;font-size:22px;font-weight:700;letter-spacing:-0.02em;line-height:1.3">${displayName}</h1>
          </td>
        </tr>

        <!-- GOLD ACCENT LINE -->
        <tr><td style="height:3px;background:linear-gradient(90deg,#D4AF37,#E5C76B,#D4AF37)"></td></tr>

        <!-- BODY -->
        <tr>
          <td style="background:#FFFFFF;padding:36px 40px;border-radius:0 0 16px 16px">

            <!-- Demo slot highlight -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              <tr>
                <td style="width:50%;padding-right:8px">
                  <div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:12px;padding:16px 20px;text-align:center">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#047857">Preferred Date</p>
                    <p style="margin:0;font-size:16px;font-weight:700;color:#022C22">${d.demoDate}</p>
                  </div>
                </td>
                <td style="width:50%;padding-left:8px">
                  <div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:12px;padding:16px 20px;text-align:center">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#047857">Preferred Time</p>
                    <p style="margin:0;font-size:16px;font-weight:700;color:#022C22">${d.demoTime} <span style="font-size:11px;font-weight:500;color:#64748B">CAT</span></p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Lead details card -->
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:24px 28px;margin-bottom:28px">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#94A3B8">Contact details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('Full name', d.fullName)}
                ${isBusiness ? row('Organisation', d.orgName) : ''}
                ${row('Type', d.category)}
                ${row('Email', `<a href="mailto:${d.email}" style="color:#065F46;text-decoration:none">${d.email}</a>`)}
                ${row('Phone', d.phone || '—')}
                ${isBusiness ? row('Staff count', d.staff || '—') : ''}
              </table>
            </div>

            <!-- Message -->
            ${d.message ? `
            <div style="margin-bottom:28px">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#94A3B8">Message</p>
              <div style="background:#F8FAFC;border-left:3px solid #D4AF37;border-radius:0 10px 10px 0;padding:16px 20px;font-size:14px;line-height:1.7;color:#0F172A">${d.message}</div>
            </div>
            ` : ''}

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:999px;background:#065F46">
                  <a href="mailto:${d.email}?subject=Re%3A%20Your%20Invictus%20Demo%20Request" style="display:inline-block;padding:13px 28px;color:#FFFFFF;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:-0.01em">
                    Reply to ${d.fullName} &rarr;
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="padding:24px 40px;text-align:center">
            <p style="margin:0;font-size:12px;color:#94A3B8">
              <a href="${SITE_URL}" style="color:#065F46;text-decoration:none;font-weight:600">invictus.rw</a>
              &nbsp;·&nbsp; A product of ScriptyLabs Inc
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// ─── confirmation email (to the submitter) ───────────────────────────────────

function confirmHtml(d: { fullName: string; orgName: string; demoDate: string; demoTime: string }) {
  const steps = [
    { n: '01', title: 'Review',   text: 'Our team reviews your request and prepares a walkthrough tailored to your institution.' },
    { n: '02', title: 'Reach out', text: 'We will contact you within 1 business day to schedule your private demo session.' },
    { n: '03', title: 'Demo',     text: 'A product specialist walks you through Invictus live — no slides, just the real platform.' },
  ]

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Your Invictus demo request was received</title>
  ${fonts}
</head>
<body style="${base}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#022C22 0%,#065F46 100%);border-radius:16px 16px 0 0;padding:32px 40px 28px;text-align:center">
            <img src="${LOGO_URL}" alt="Invictus" height="44" style="display:block;height:44px;margin:0 auto;border:0">
          </td>
        </tr>

        <!-- GOLD ACCENT LINE -->
        <tr><td style="height:3px;background:linear-gradient(90deg,#D4AF37,#E5C76B,#D4AF37)"></td></tr>

        <!-- BODY -->
        <tr>
          <td style="background:#FFFFFF;padding:40px 40px 36px;border-radius:0 0 16px 16px">

            <!-- Greeting -->
            <h1 style="margin:0 0 8px;font-size:26px;font-weight:700;color:#0F172A;letter-spacing:-0.02em;line-height:1.25">
              We got your request, ${d.fullName.split(' ')[0]}
            </h1>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#64748B">
              Thanks for reaching out. We&rsquo;re excited to show you what Invictus can do${d.orgName ? ` for <strong style="color:#0F172A">${d.orgName}</strong>` : ''}.
            </p>

            <!-- Booked slot -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              <tr>
                <td style="width:50%;padding-right:8px">
                  <div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:12px;padding:14px 18px;text-align:center">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#047857">Your Date</p>
                    <p style="margin:0;font-size:15px;font-weight:700;color:#022C22">${d.demoDate}</p>
                  </div>
                </td>
                <td style="width:50%;padding-left:8px">
                  <div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:12px;padding:14px 18px;text-align:center">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#047857">Your Time</p>
                    <p style="margin:0;font-size:15px;font-weight:700;color:#022C22">${d.demoTime} <span style="font-size:10px;color:#64748B">CAT</span></p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <div style="height:1px;background:#E2E8F0;margin-bottom:32px"></div>

            <!-- What happens next -->
            <p style="margin:0 0 20px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#94A3B8">What happens next</p>

            ${steps.map(s => `
            <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:20px">
              <tr>
                <td style="width:44px;vertical-align:top;padding-right:16px">
                  <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#022C22,#065F46);display:flex;align-items:center;justify-content:center">
                    <span style="color:#D4AF37;font-size:12px;font-weight:700;line-height:40px;text-align:center;display:block;width:40px">${s.n}</span>
                  </div>
                </td>
                <td style="vertical-align:top;padding-top:4px">
                  <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#0F172A">${s.title}</p>
                  <p style="margin:0;font-size:13px;line-height:1.6;color:#64748B">${s.text}</p>
                </td>
              </tr>
            </table>
            `).join('')}

            <!-- Divider -->
            <div style="height:1px;background:#E2E8F0;margin:32px 0"></div>

            <!-- Explore -->
            <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#64748B">
              While you wait, feel free to explore the platform:
            </p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px">
                  <a href="${SITE_URL}/features" style="display:inline-block;padding:10px 20px;border-radius:999px;border:1px solid #E2E8F0;background:#F8FAFC;color:#065F46;font-size:13px;font-weight:600;text-decoration:none">
                    View Features
                  </a>
                </td>
                <td>
                  <a href="${SITE_URL}/pricing" style="display:inline-block;padding:10px 20px;border-radius:999px;border:1px solid #E2E8F0;background:#F8FAFC;color:#065F46;font-size:13px;font-weight:600;text-decoration:none">
                    See Pricing
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="padding:24px 40px;text-align:center">
            <p style="margin:0 0 6px;font-size:12px;color:#94A3B8">
              <a href="${SITE_URL}" style="color:#065F46;text-decoration:none;font-weight:600">invictus.rw</a>
              &nbsp;·&nbsp; Kigali, Rwanda
            </p>
            <p style="margin:0;font-size:11px;color:#CBD5E1">
              A product of ScriptyLabs Inc &nbsp;&middot;&nbsp; You received this because you submitted a demo request.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// ─── route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { accountType, fullName, orgName, email, phone, category, staff, demoDate, demoTime, message } = body

  if (!fullName || !email || !category || !demoDate || !demoTime) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 422 })
  }
  if (accountType === 'business' && !orgName) {
    return NextResponse.json({ error: 'Organisation name is required.' }, { status: 422 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 422 })
  }

  const orgLabel = orgName || fullName
  const notifySubject = `New Demo Request — ${orgLabel} (${category})`
  const confirmSubject = 'Your Invictus demo request was received'

  try {
    await Promise.all([
      transporter.sendMail({
        from: FROM,
        to: NOTIFY_TO,
        replyTo: email,
        subject: notifySubject,
        html: notifyHtml({ accountType, fullName, orgName, email, phone, category, staff, demoDate, demoTime, message }),
      }),
      transporter.sendMail({
        from: FROM,
        to: email,
        subject: confirmSubject,
        html: confirmHtml({ fullName, orgName, demoDate, demoTime }),
      }),
    ])

    console.log('[contact/route] Emails sent — team:', NOTIFY_TO, '| user:', email)
    return NextResponse.json({ ok: true })
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err)
    console.error('[contact/route] SMTP error:', detail)
    return NextResponse.json({ error: `SMTP: ${detail}` }, { status: 500 })
  }
}
