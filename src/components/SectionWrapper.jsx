export default function SectionWrapper({
  children,
  className = '',
  tone = 'light',
  id,
  containerClassName = '',
}) {
  const toneClass =
    tone === 'light'
      ? 'bg-transparent text-charcoal'
      : 'bg-[linear-gradient(180deg,#103019_0%,#0b2111_100%)] text-white';

  return (
    <section id={id} className={`page-pad ${toneClass} ${className}`}>
      <div className={`section-shell ${containerClassName}`}>{children}</div>
    </section>
  );
}
