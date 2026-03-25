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
    <div className="light-panel p-6 sm:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep/52">Contact Form</p>
      <h2 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">Tell us what you need</h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-charcoal/66">
        Share the kind of shoot, your preferred timing, and any specific goals so we can respond with the right next step.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            <span>Full Name</span>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="field-input-light" required placeholder="Your full name" />
          </label>
          <label className="field-label">
            <span>Email Address</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="field-input-light" required placeholder="you@example.com" />
          </label>
          <label className="field-label">
            <span>Phone Number</span>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="field-input-light" placeholder="0803 000 0000" />
          </label>
          <label className="field-label">
            <span>Subject</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="field-input-light" required placeholder="What would you like to discuss?" />
          </label>
          <label className="field-label sm:col-span-2">
            <span>Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" className="field-input-light resize-none" required placeholder="Tell us about your session, event, or visual brief." />
          </label>
        </div>
        <div className="flex flex-col gap-4 border-t border-brand-deep/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="field-hint">If you need a faster reply, WhatsApp is usually the quickest route.</p>
          <button type="submit" className="btn-primary border-0">Send Inquiry</button>
        </div>
      </form>
      {submitted ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex items-start gap-3 rounded-[22px] border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-900">
          <CheckCircle2 size={18} className="mt-0.5 text-emerald-700" />
          <p>Thank you for reaching out. We will respond as soon as possible.</p>
        </motion.div>
      ) : null}
    </div>
  );
}
