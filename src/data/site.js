export const studioName = 'Africa Neno Production';
export const tagline = "Premium photography for life's most meaningful moments.";
export const phone = '+234 800 000 0000';
export const email = 'hello@africanenoproduction.com';
export const address = 'Studio address coming soon, Lagos, Nigeria';
export const whatsappNumber = '2348000000000';
export const whatsappMessage = 'Hello, I would like to book a photography session.';
export const seoDescription =
  'Premium photography studio offering portraits, weddings, events, family photography, and custom visual storytelling.';

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Booking', to: '/booking' },
  { label: 'Contact', to: '/contact' },
];

export const heroContent = {
  title: 'Capturing Moments. Creating Timeless Memories.',
  subtitle:
    'Professional photography studio for portraits, weddings, events, family sessions, and premium visual storytelling.',
  primaryCta: 'View Portfolio',
  secondaryCta: 'Book a Session',
};

export const ctaContent = {
  title: 'Ready to Capture Your Next Special Moment?',
  primary: 'Book Now',
  secondary: 'Contact Studio',
};

export const aboutShortCopy =
  'Our studio is dedicated to creating timeless, expressive, and professionally crafted images. We combine creativity, technical excellence, and a smooth client experience in every session.';

export const servicesShortCopy =
  "Whether it's a portrait, wedding, family session, event, or commercial shoot, we capture every detail with elegance and intention.";

export const brandHighlights = [
  {
    title: 'Professional Studio Experience',
    description:
      'A calm, guided studio process shaped around lighting, direction, and premium presentation.',
  },
  {
    title: 'High-Quality Edited Photos',
    description:
      'Every delivered gallery is polished with elegant color, clean retouching, and intentional curation.',
  },
  {
    title: 'Indoor & Outdoor Sessions',
    description:
      'From controlled studio scenes to natural-light outdoor storytelling, each session is tailored to you.',
  },
  {
    title: 'Personalized Packages',
    description:
      'Flexible options for portraits, events, weddings, and custom concepts with clear value and polish.',
  },
];

export const stats = [
  { label: 'Sessions Completed', value: '120+' },
  { label: 'Happy Clients', value: '75+' },
  { label: 'Fast Delivery', value: '72hrs' },
  { label: 'Premium Retouching', value: 'Included' },
];

export const whyChooseUs = [
  {
    title: 'Creative Direction',
    description: 'We guide posing, mood, composition, and styling so the final work feels intentional.',
    icon: 'Sparkles',
  },
  {
    title: 'Professional Editing',
    description: 'Refined post-production keeps your gallery clean, cinematic, and beautifully consistent.',
    icon: 'Aperture',
  },
  {
    title: 'Timely Delivery',
    description: 'Clear timelines and a streamlined workflow help you receive your images on schedule.',
    icon: 'Clock3',
  },
  {
    title: 'Client-Centered Experience',
    description: 'We create a relaxed environment that helps clients feel confident and comfortable.',
    icon: 'Heart',
  },
  {
    title: 'Flexible Packages',
    description: 'Choose from polished packages or request a custom quote built around your needs.',
    icon: 'Layers3',
  },
  {
    title: 'Quality Imagery',
    description: 'Every gallery is designed to feel premium, timeless, and ready to share proudly.',
    icon: 'BadgeCheck',
  },
];

export const mission =
  "To provide premium photography services that preserve life's most important moments with creativity, professionalism, and excellence.";

export const vision =
  'To become a trusted photography brand known for timeless imagery, exceptional client experience, and artistic storytelling.';

export const coreValues = [
  'Creativity',
  'Excellence',
  'Professionalism',
  'Reliability',
  'Attention to Detail',
];

export const teamMembers = [
  {
    name: 'Lead Photographer',
    role: 'Directs sessions and captures the signature Africa Neno Production visual tone.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Creative Director',
    role: 'Shapes mood, concept, styling direction, and overall brand polish.',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Editor / Retoucher',
    role: 'Refines every image with balanced color, detail work, and premium finishing.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
];

export const businessHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'By appointment' },
];

export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export function setPageMeta(title, description = seoDescription) {
  document.title = title;

  let metaTag = document.querySelector('meta[name="description"]');

  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.name = 'description';
    document.head.appendChild(metaTag);
  }

  metaTag.content = description;
}
