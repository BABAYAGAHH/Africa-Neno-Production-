export const studioName = 'AFRICA NENO PRODUCTION';
export const yearEstablished = '14/12/2025';
export const phone = '09039760469';
export const email = 'Africanenoprodtv@gmail.com';
export const address = 'No. 183 Old Lagos Asaba Rd, beside Access Bank, Agbor, Delta State, Nigeria.';
export const locationLabel = 'Agbor, Delta State';
export const brandSignature = 'Agbor, Delta State • Portraits, Weddings & Events';
export const whatsappNumber = '2349061293510';
export const whatsappDisplay = '0906 129 3510';
export const whatsappMessage = 'Hello, I would like to plan a session with AFRICA NENO PRODUCTION.';
export const tagline = 'Premium portrait, wedding, event, and brand photography studio based in Agbor, Delta State, serving modern Nigerian clients with polished visual storytelling and calm creative direction.';
export const seoDescription =
  'AFRICA NENO PRODUCTION is a premium photography studio based in Agbor, Delta State, Nigeria, creating portraits, weddings, events, families, and polished brand visuals across the country.';

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/africanenoprodtv?igsh=MXBtOHNpYjExbDc2eg==',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@africanenoprodtv?_r=1&_t=ZS-94VokavQgVg',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CGG9cm6Up/?mibextid=wwXIfr',
  },
];

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Reviews', to: '/testimonials' },
  { label: 'Book', to: '/booking' },
  { label: 'Contact', to: '/contact' },
];

export const heroContent = {
  title: 'Nigerian stories, photographed with elegance and intention.',
  subtitle:
    'From Agbor portraits and weddings to refined event and brand imagery across Nigeria, we create polished visuals with calm direction, premium finishing, and a client experience that feels beautifully organised from start to finish.',
  primaryCta: 'View Portfolio',
  secondaryCta: 'Book A Session',
};

export const ctaContent = {
  title: 'Start planning a session that feels elevated from the first conversation to the final gallery.',
  primary: 'Book A Session',
  secondary: 'Contact Studio',
};

export const aboutShortCopy =
  'AFRICA NENO PRODUCTION is a premium photography studio based in Agbor, Delta State, creating portraits, weddings, events, family sessions, and polished brand visuals for Nigerian clients who value clarity, style, and intentional storytelling.';

export const servicesShortCopy =
  'We deliver studio, outdoor, wedding, event, family, and brand photography with calm creative direction, reliable communication, and beautifully refined finishing.';

export const brandHighlights = [
  {
    title: 'Delta State Studio Presence',
    description:
      'Every session is shaped with strong art direction, clean posing guidance, and a locally relevant sense of style rooted in the Nigerian market.',
  },
  {
    title: 'Premium Retouching Standards',
    description:
      'Skin tones, colour balance, and finishing are handled with care so the final gallery feels rich, natural, and consistent.',
  },
  {
    title: 'Structured Client Experience',
    description:
      'From inquiry to delivery, our workflow is calm, responsive, and built to keep every project organised.',
  },
  {
    title: 'Coverage Across Nigeria',
    description:
      'We work from Agbor and support portrait, wedding, event, and commercial assignments across key Nigerian cities.',
  },
];

export const stats = [
  { label: 'Established', value: '2025' },
  { label: 'Studio Base', value: 'Agbor' },
  { label: 'Reply Time', value: '24hrs' },
  { label: 'Coverage', value: 'Nationwide' },
];

export const whyChooseUs = [
  {
    title: 'Clear Art Direction',
    description: 'We guide posture, expression, movement, and framing so clients feel confident on camera.',
    icon: 'Sparkles',
  },
  {
    title: 'Refined Colour Work',
    description: 'Your gallery is finished with balanced skin tones, elegant contrast, and premium retouching restraint.',
    icon: 'Aperture',
  },
  {
    title: 'Reliable Delivery',
    description: 'Timelines are communicated clearly so you always know what happens next and when to expect it.',
    icon: 'Clock3',
  },
  {
    title: 'Comfortable Experience',
    description: 'Our sessions are calm, respectful, and paced to help people relax and look their best.',
    icon: 'Heart',
  },
  {
    title: 'Flexible Coverage',
    description: 'Choose a streamlined package or ask us to tailor coverage for a bigger event or brand need.',
    icon: 'Layers3',
  },
  {
    title: 'Business-Class Presentation',
    description: 'Every touchpoint, from inquiry forms to final galleries, is designed to feel polished and trustworthy.',
    icon: 'BadgeCheck',
  },
];

export const mission =
  'To produce refined Nigerian photography experiences that combine creative excellence, organised delivery, and imagery clients are proud to keep, print, and share.';

export const vision =
  'To become one of the most trusted premium photography studios in Nigeria for elegant storytelling, strong client care, and timeless visual quality.';

export const coreValues = ['Craft', 'Calm', 'Clarity', 'Taste', 'Reliability'];

export const teamMembers = [
  {
    name: 'Lead Photographer',
    role: 'Directs portrait, wedding, and event coverage with confident composition and calm client guidance.',
  },
  {
    name: 'Creative Producer',
    role: 'Shapes styling, mood boards, scheduling, and visual continuity so each session feels considered.',
  },
  {
    name: 'Retouch & Delivery',
    role: 'Handles clean retouching, gallery preparation, and polished final presentation for every client delivery.',
  },
];

export const businessHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Consultation by appointment' },
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