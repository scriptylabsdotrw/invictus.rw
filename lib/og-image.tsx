import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Invictus — Loan Management System for Microfinance & SACCOs'

export async function renderOgImage() {
  const iconData = await readFile(
    join(process.cwd(), 'public/logos/icons/Invictus_IconSquare_WhiteOrange_on_Emerald_1024.png')
  )
  const iconSrc = `data:image/png;base64,${iconData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #022C22 0%, #065F46 100%)',
        }}
      >
        {/* fine grid texture, matches the site hero */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: -140,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 720,
            height: 360,
            borderRadius: '9999px',
            background: 'rgba(16,185,129,0.35)',
            filter: 'blur(120px)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 24, zIndex: 1 }}>
          <img src={iconSrc} width={92} height={92} style={{ borderRadius: 22 }} />
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: -2,
            }}
          >
            Invictus
          </span>
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 36,
            fontWeight: 600,
            color: '#C2410C',
            letterSpacing: -0.5,
            zIndex: 1,
          }}
        >
          Loan Management for Modern Institutions
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 25,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 860,
            textAlign: 'center',
            display: 'flex',
            zIndex: 1,
          }}
        >
          Manage the complete loan lifecycle for microfinance institutions, SACCOs & lenders across Rwanda and East Africa
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            display: 'flex',
            background: 'linear-gradient(90deg, #C2410C, #EA580C, #C2410C)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
