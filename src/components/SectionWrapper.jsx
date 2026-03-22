export default function SectionWrapper({
  children,
  className = '',
  tone = 'dark',
  id,
  containerClassName = '',
}) {
  const toneClass =
    tone === 'light' ? 'bg-ivory text-charcoal' : 'bg-transparent text-ivory';

  return (
    <section id={id} className={`page-pad ${toneClass} ${className}`}>
      <div className={`section-shell ${containerClassName}`}>{children}</div>
    </section>
  );
}
