/** Decorative hairline grid texture for opening headline sections. */
export default function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #09090b 1px, transparent 1px), linear-gradient(to bottom, #09090b 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />
  )
}
