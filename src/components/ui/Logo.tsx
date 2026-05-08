interface LogoProps {
  size?: number;
  showText?: boolean;
  textSize?: string;
}

export default function Logo({ size = 44, showText = true, textSize = 'text-lg' }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="ndLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#29b6f6" />
            <stop offset="60%" stopColor="#039be5" />
            <stop offset="100%" stopColor="#0277bd" />
          </linearGradient>
          <filter id="ndShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0288d1" floodOpacity="0.35" />
          </filter>
        </defs>
        {/* Diamond shape */}
        <path
          d="M50 5 L93 50 L50 95 L7 50 Z"
          fill="url(#ndLogoGrad)"
          filter="url(#ndShadow)"
        />
        {/* Network nodes */}
        <circle cx="50" cy="27" r="4.8" fill="white" fillOpacity="0.95" />
        <circle cx="30" cy="52" r="4.8" fill="white" fillOpacity="0.95" />
        <circle cx="63" cy="57" r="4.8" fill="white" fillOpacity="0.95" />
        <circle cx="50" cy="75" r="4.8" fill="white" fillOpacity="0.95" />
        <circle cx="73" cy="38" r="4.8" fill="white" fillOpacity="0.95" />
        {/* Connection lines */}
        <line x1="50" y1="27" x2="30" y2="52" stroke="white" strokeWidth="2.3" strokeOpacity="0.88" strokeLinecap="round" />
        <line x1="50" y1="27" x2="73" y2="38" stroke="white" strokeWidth="2.3" strokeOpacity="0.88" strokeLinecap="round" />
        <line x1="73" y1="38" x2="63" y2="57" stroke="white" strokeWidth="2.3" strokeOpacity="0.88" strokeLinecap="round" />
        <line x1="30" y1="52" x2="63" y2="57" stroke="white" strokeWidth="2.3" strokeOpacity="0.88" strokeLinecap="round" />
        <line x1="63" y1="57" x2="50" y2="75" stroke="white" strokeWidth="2.3" strokeOpacity="0.88" strokeLinecap="round" />
        <line x1="30" y1="52" x2="50" y2="75" stroke="white" strokeWidth="2.3" strokeOpacity="0.88" strokeLinecap="round" />
      </svg>

      {showText && (
        <div>
          <span className={`text-white font-bold ${textSize} tracking-tight`}>Network</span>
          <span className={`font-bold ${textSize} tracking-tight`} style={{ color: '#00d4ff' }}> Deal</span>
        </div>
      )}
    </div>
  );
}
