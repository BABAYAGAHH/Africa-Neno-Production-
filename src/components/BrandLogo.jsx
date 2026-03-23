import logo from '../assets/africa-neno-logo.svg';
import { studioName } from '../data/site';

export default function BrandLogo({
  className = '',
  imageClassName = '',
  showName = false,
  showSubtitle = false,
  nameClassName = '',
  subtitleClassName = '',
}) {
  return (
    <div className={`inline-flex items-center gap-3 sm:gap-4 ${className}`}>
      <img
        src={logo}
        alt={`${studioName} logo`}
        className={`w-auto max-w-full shrink-0 object-contain ${imageClassName || 'h-14 sm:h-16'}`}
      />
      {showName ? (
        <div className="min-w-0 max-w-[13rem] sm:max-w-none">
          <p
            className={`font-display text-lg leading-[0.95] tracking-[0.14em] uppercase sm:text-2xl ${nameClassName}`}
          >
            {studioName}
          </p>
          {showSubtitle ? (
            <p
              className={`mt-1 text-[10px] font-medium uppercase tracking-[0.28em] sm:text-[11px] ${subtitleClassName}`}
            >
              Professional Photography Studio
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
