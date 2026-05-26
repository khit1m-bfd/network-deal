'use client';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-7"
          style={{
            background: 'rgba(0, 212, 255, 0.07)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            color: '#00d4ff',
            letterSpacing: '0.12em',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }}
          />
          {eyebrow}
        </div>
      )}

      <h2
        className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-black leading-[1.02] tracking-tight mb-6"
        style={{ color: 'white' }}
      >
        {title}{' '}
        {highlight && (
          <span
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
          style={{
            color: 'rgba(255,255,255,0.48)',
            marginLeft: center ? 'auto' : undefined,
            marginRight: center ? 'auto' : undefined,
            lineHeight: '1.75',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
