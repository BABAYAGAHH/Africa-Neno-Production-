export default function SectionWrapper({
  children,
  className = '',
  tone = 'light',
  id,
  containerClassName = '',
}) {
  const isLight = tone === 'light';

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden page-pad ${isLight ? 'text-charcoal' : 'text-white'} ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${
          isLight
            ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.42)_44%,rgba(255,255,255,0)_100%)]'
            : 'bg-[linear-gradient(180deg,#103019_0%,#0b2111_100%)]'
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${
          isLight
            ? 'bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.11),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(32,77,29,0.06),transparent_24%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_24%)]'
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${
          isLight
            ? 'bg-[radial-gradient(rgba(16,35,22,0.03)_0.65px,transparent_0.65px)] [background-size:20px_20px] opacity-35'
            : 'bg-[radial-gradient(rgba(255,255,255,0.03)_0.65px,transparent_0.65px)] [background-size:20px_20px] opacity-30'
        }`}
      />
      <div className={`section-shell relative ${containerClassName}`}>{children}</div>
    </section>
  );
}
