export default function SectionWrapper({
  children,
  className = '',
  tone = 'dark',
  id,
  containerClassName = '',
}) {
  const toneClass =
    tone === 'light'
      ? 'bg-ivory text-charcoal'
      : 'bg-[linear-gradient(180deg,#0d3919_0%,#082712_100%)] text-white';

  return (
    <section id={id} className={`page-pad ${toneClass} ${className}`}>
      <div className={`section-shell ${containerClassName}`}>{children}</div>
    </section>
  );
}
