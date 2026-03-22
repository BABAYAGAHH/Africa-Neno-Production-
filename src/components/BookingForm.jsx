import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { whatsappLink } from '../data/site';

const initialForm = {
  fullName: '',
  phoneNumber: '',
  emailAddress: '',
  serviceType: 'Portrait Session',
  preferredDate: '',
  preferredLocation: '',
  packageType: 'Basic',
  message: '',
};

const serviceOptions = [
  'Portrait Session',
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Family Session',
  'Event Coverage',
  'Product Photography',
  'Studio Session',
  'Outdoor Session',
  'Custom Request',
];

const packageOptions = ['Basic', 'Standard', 'Premium', 'Custom'];

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
    <div className="glass-panel p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Booking Form</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Reserve your session</h2>
        </div>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary gap-2 self-start">
          <MessageCircle size={16} />
          Quick Book
        </a>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/70">
            <span>Full Name</span>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="field-input" required placeholder="Your full name" />
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Phone Number</span>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="field-input" required placeholder="Your phone number" />
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Email Address</span>
            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="field-input" required placeholder="Your email address" />
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Service Type</span>
            <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="field-input">
              {serviceOptions.map((option) => (
                <option key={option} value={option} className="bg-charcoal text-white">
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Preferred Date</span>
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="field-input" required />
          </label>
          <label className="space-y-2 text-sm text-white/70">
            <span>Preferred Location</span>
            <input type="text" name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} className="field-input" required placeholder="Studio or preferred location" />
          </label>
          <label className="space-y-2 text-sm text-white/70 sm:col-span-2">
            <span>Package</span>
            <select name="packageType" value={formData.packageType} onChange={handleChange} className="field-input">
              {packageOptions.map((option) => (
                <option key={option} value={option} className="bg-charcoal text-white">
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-white/70 sm:col-span-2">
            <span>Message / Special Request</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="field-input resize-none" placeholder="Tell us about your session and what you need." />
          </label>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-white/55">We usually respond to booking requests within 24 hours.</p>
          <button type="submit" className="btn-primary border-0">Submit Booking Request</button>
        </div>
      </form>
      {submitted ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm text-emerald-100">
          <CheckCircle2 size={18} className="mt-0.5 text-emerald-300" />
          <p>Your booking request has been submitted. We will contact you shortly.</p>
        </motion.div>
      ) : null}
    </div>
  );
}
