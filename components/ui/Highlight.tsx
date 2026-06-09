export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="text-orange-700">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 10"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-1.5 left-0 w-full overflow-visible"
      >
        <path
          d="M 3 7 C 45 1, 90 9.5, 135 5 C 160 2, 185 8, 197 5"
          stroke="#C2410C"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
