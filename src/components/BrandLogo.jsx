import logo from '../assets/africa-neno-logo.svg';
import { brandSignature, studioName } from '../data/site';

export default function BrandLogo({
  className = '',
  imageClassName = '',
  showName = false,
  showSubtitle = false,
  subtitle = brandSignature,
  nameClassName = '',
  subtitleClassName = '',
}) {
  return (
    <div className={`inline-flex min-w-0 items-center gap-3 sm:gap-4 ${className}`}>
      <img
        src={logo}
        alt={`${studioName} logo`}
        className={`w-auto max-w-full shrink-0 object-contain drop-shadow-[0_10px_20px_rgba(14,44,22,0.12)] ${imageClassName || 'h-12 sm:h-14'}`}
      />
      {showName ? (
        <div className="min-w-0 max-w-[15.5rem] sm:max-w-none">
          <p
            className={`truncate font-display text-lg uppercase leading-none tracking-[0.14em] sm:text-2xl ${nameClassName}`}
          >
            {studioName}
          </p>
          {showSubtitle ? (
            <p
              className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-[11px] ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
