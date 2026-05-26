interface KaizenLogoProps {
  size?: number;
  color?: string;
  glowColor?: string;
}

export default function KaizenLogo({ size = 80, color = "#2979FF" }: KaizenLogoProps) {
  const h = Math.round(size * 0.42);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 80 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kaizen logo"
    >
      {/* Left outer plate */}
      <rect x="1" y="4" width="10" height="26" rx="2.5" fill={color} />
      {/* Left inner collar */}
      <rect x="11" y="9" width="5" height="16" rx="1.5" fill={color} opacity="0.7" />
      {/* Bar */}
      <rect x="16" y="15" width="48" height="4" rx="2" fill={color} />
      {/* Right inner collar */}
      <rect x="64" y="9" width="5" height="16" rx="1.5" fill={color} opacity="0.7" />
      {/* Right outer plate */}
      <rect x="69" y="4" width="10" height="26" rx="2.5" fill={color} />
    </svg>
  );
}
