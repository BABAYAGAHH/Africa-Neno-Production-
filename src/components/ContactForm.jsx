import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
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
      <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Contact Form</p>
      <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Let's plan your session</h2>
      <p className="mt-3 text-sm leading-7 text-white/65">
        Tell us about your session, event, or the kind of imagery you would love us to create.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/78">
            <span>Full Name</span>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="field-input" required placeholder="Your full name" />
          </label>
          <label className="space-y-2 text-sm text-white/78">
            <span>Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="field-input" required placeholder="Your email address" />
          </label>
          <label className="space-y-2 text-sm text-white/78">
            <span>Phone</span>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="field-input" placeholder="Your phone number" />
          </label>
          <label className="space-y-2 text-sm text-white/78">
            <span>Subject</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="field-input" required placeholder="What would you like to discuss?" />
          </label>
          <label className="space-y-2 text-sm text-white/78 sm:col-span-2">
            <span>Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" className="field-input resize-none" required placeholder="Share your inquiry, date, event details, or custom request." />
          </label>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-white/58">You can also contact the studio directly via WhatsApp for faster replies.</p>
          <button type="submit" className="btn-primary border-0">Send Message</button>
        </div>
      </form>
      {submitted ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/12 p-4 text-sm text-emerald-50">
          <CheckCircle2 size={18} className="mt-0.5 text-emerald-200" />
          <p>Thank you for reaching out. We will reply as soon as possible.</p>
        </motion.div>
      ) : null}
    </div>
  );
}
