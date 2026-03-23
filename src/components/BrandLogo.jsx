import logo from '../assets/africa-neno-logo.svg';
import { studioName } from '../data/site';

export default function BrandLogo({ className = '', imageClassName = '' }) {
  return (
    <div
      className={`inline-flex items-center rounded-[24px] border border-white/12 bg-[linear-gradient(135deg,rgba(11,51,23,0.98),rgba(20,81,38,0.94))] px-4 py-2.5 shadow-soft ${className}`}
    >
      <img
        src={logo}
        alt={`${studioName} logo`}
        className={`w-auto max-w-full object-contain ${imageClassName || 'h-12 sm:h-14'}`}
      />
    </div>
  );
}
