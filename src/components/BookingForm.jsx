import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { whatsappLink } from '../data/site';

const initialForm = {
  fullName: '',
  phoneNumber: '',
  emailAddress: '',
  serviceType: 'Portrait Photography',
  preferredDate: '',
  preferredLocation: 'Lagos',
  packageType: 'Signature Story',
  message: '',
};

const serviceOptions = [
  'Portrait Photography',
  'Wedding Photography',
  'Pre-Wedding Sessions',
  'Family Photography',
  'Event Coverage',
  'Product Photography',
  'Studio Photography',
  'Outdoor Photography',
  'Custom Request',
];

const packageOptions = ['Essential Session', 'Signature Story', 'Full Production Coverage', 'Custom Quote'];

export default function BookingForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="light-panel p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep/52">Booking Request</p>
          <h2 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">Reserve your date</h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-charcoal/66">
            Tell us the session type, timing, and location so we can shape the right package or custom recommendation.
          </p>
        </div>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary self-start">
          <MessageCircle size={16} />
          WhatsApp Booking
        </a>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-5 border-b border-brand-deep/8 pb-6 sm:grid-cols-2">
          <label className="field-label">
            <span>Full Name</span>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="field-input-light" required placeholder="Your full name" />
          </label>
          <label className="field-label">
            <span>Phone Number</span>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="field-input-light" required placeholder="0803 000 0000" />
          </label>
          <label className="field-label">
            <span>Email Address</span>
            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="field-input-light" required placeholder="you@example.com" />
          </label>
          <label className="field-label">
            <span>Service Type</span>
            <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="field-input-light">
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-5 border-b border-brand-deep/8 pb-6 sm:grid-cols-2">
          <label className="field-label">
            <span>Preferred Date</span>
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="field-input-light" required />
          </label>
          <label className="field-label">
            <span>Preferred Location</span>
            <input type="text" name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} className="field-input-light" required placeholder="Lagos, studio, or event venue" />
          </label>
          <label className="field-label sm:col-span-2">
            <span>Preferred Package</span>
            <select name="packageType" value={formData.packageType} onChange={handleChange} className="field-input-light">
              {packageOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="space-y-5">
          <label className="field-label">
            <span>Brief or Special Request</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="field-input-light resize-none" placeholder="Tell us about your event, image style, guest count, wardrobe direction, or any custom coverage you need." />
          </label>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="field-hint">We usually reply to booking requests within 24 hours.</p>
            <button type="submit" className="btn-primary border-0">Submit Request</button>
          </div>
        </div>
      </form>
      {submitted ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex items-start gap-3 rounded-[22px] border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-900">
          <CheckCircle2 size={18} className="mt-0.5 text-emerald-700" />
          <p>Your booking request has been received. We will contact you shortly.</p>
        </motion.div>
      ) : null}
    </div>
  );
}
