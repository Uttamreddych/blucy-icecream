import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, AlertCircle, RefreshCw } from 'lucide-react';

interface EnquiryFormProps {
  initialModel?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialModel = '', className = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    enquiryType: 'franchise',
    preferredFormat: initialModel || '40-lakh-model',
    budgetTier: initialModel ? 'custom' : '20-40-lakh',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.city.trim()) errs.city = 'Please specify your city & state';

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean client-side submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      enquiryType: 'franchise',
      preferredFormat: '40-lakh-model',
      budgetTier: '20-40-lakh',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={`blucy-card p-8 sm:p-10 bg-white border-2 border-blucy-blue/30 text-center ${className}`}>
        <div className="w-16 h-16 bg-blucy-softpink text-blucy-pink rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-blucy-pink bg-blucy-softpink px-3 py-1 rounded-full">
          Enquiry Received
        </span>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy mt-3">
          Thank You, {formData.fullName}!
        </h3>
        <p className="text-sm text-blucy-muted mt-2 max-w-md mx-auto leading-relaxed">
          Your enquiry for <span className="font-semibold text-blucy-navy">{formData.preferredFormat}</span> in <span className="font-semibold text-blucy-navy">{formData.city}</span> has been captured.
        </p>

        {/* Static Prototype Notice */}
        <div className="my-6 p-4 bg-blucy-ice/80 rounded-2xl border border-blucy-blue/20 text-xs text-blucy-navy/90 text-left max-w-lg mx-auto space-y-2">
          <p className="font-semibold flex items-center gap-1.5 text-blucy-blue">
            <AlertCircle className="w-4 h-4 shrink-0" />
            Static Website Client-Side Notice:
          </p>
          <p className="text-blucy-muted">
            This enquiry form demonstrates full frontend validation. To transmit live leads directly to the Blucy management inbox, connect this form handler to an email gateway (e.g. EmailJS, Resend, Formspree, or your backend API endpoint).
          </p>
        </div>

        {/* Immediate Direct Contact Links */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:8686448825"
            className="btn-primary text-xs sm:text-sm py-2.5 px-6 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Directly: 8686448825</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary text-xs sm:text-sm py-2.5 px-6 flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`blucy-card p-6 sm:p-10 bg-white border border-blucy-sky/25 ${className}`} noValidate>
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-blucy-navy">
          Franchise & Business Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-blucy-muted mt-1">
          Fill in your details below to discuss business formats, investment models, and territory availability with the Blucy team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-blucy-navy mb-1">
            Full Name <span className="text-blucy-pink">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-blucy-navy placeholder-blucy-muted/60 focus:outline-none focus:ring-2 focus:ring-blucy-blue/30 transition-all ${
              errors.fullName ? 'border-red-400 bg-red-50/40' : 'border-blucy-sky/30 bg-white'
            }`}
          />
          {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-blucy-navy mb-1">
            Phone Number <span className="text-blucy-pink">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 9876543210"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-blucy-navy placeholder-blucy-muted/60 focus:outline-none focus:ring-2 focus:ring-blucy-blue/30 transition-all ${
              errors.phone ? 'border-red-400 bg-red-50/40' : 'border-blucy-sky/30 bg-white'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-blucy-navy mb-1">
            Email Address <span className="text-blucy-pink">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. name@example.com"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-blucy-navy placeholder-blucy-muted/60 focus:outline-none focus:ring-2 focus:ring-blucy-blue/30 transition-all ${
              errors.email ? 'border-red-400 bg-red-50/40' : 'border-blucy-sky/30 bg-white'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* City & State */}
        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-blucy-navy mb-1">
            Target City & State <span className="text-blucy-pink">*</span>
          </label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Hyderabad, Telangana"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-blucy-navy placeholder-blucy-muted/60 focus:outline-none focus:ring-2 focus:ring-blucy-blue/30 transition-all ${
              errors.city ? 'border-red-400 bg-red-50/40' : 'border-blucy-sky/30 bg-white'
            }`}
          />
          {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
        </div>

        {/* Preferred Business Format */}
        <div>
          <label htmlFor="preferredFormat" className="block text-xs font-semibold text-blucy-navy mb-1">
            Preferred Business Format
          </label>
          <select
            id="preferredFormat"
            value={formData.preferredFormat}
            onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-blucy-sky/30 bg-white text-sm text-blucy-navy focus:outline-none focus:ring-2 focus:ring-blucy-blue/30"
          >
            <option value="40-lakh-model">₹40 Lakh Model — Complete Multi-Format Setup</option>
            <option value="30-lakh-model">₹30 Lakh Model — High Reach Model</option>
            <option value="24-lakh-model">₹24 Lakh Model — Growth Focused Model</option>
            <option value="20-lakh-model">₹20 Lakh Model — Compact & Profitable</option>
            <option value="12-lakh-model">₹12 Lakh Model — Entry Level</option>
            <option value="shops">Individual Ice Cream Shop (250 Sq. Ft.)</option>
            <option value="food-truck">Food Truck Format</option>
            <option value="cycle-carts">Cycle Carts</option>
            <option value="mini-carts">Mini Carts</option>
            <option value="event-cart">Event Carts (Catering & Weddings)</option>
            <option value="mini-kiosk">Mini Kiosk Format</option>
            <option value="general-franchise">General Franchise Partnership</option>
          </select>
        </div>

        {/* Budget Tier */}
        <div>
          <label htmlFor="budgetTier" className="block text-xs font-semibold text-blucy-navy mb-1">
            Investment Budget Range
          </label>
          <select
            id="budgetTier"
            value={formData.budgetTier}
            onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-blucy-sky/30 bg-white text-sm text-blucy-navy focus:outline-none focus:ring-2 focus:ring-blucy-blue/30"
          >
            <option value="12-lakh">₹12 Lakh – ₹15 Lakh</option>
            <option value="15-20-lakh">₹15 Lakh – ₹20 Lakh</option>
            <option value="20-30-lakh">₹20 Lakh – ₹30 Lakh</option>
            <option value="40-lakh-plus">₹40 Lakh+ (Multi-Format Cluster)</option>
            <option value="custom">Other / Flexible</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-4">
        <label htmlFor="message" className="block text-xs font-semibold text-blucy-navy mb-1">
          Additional Details or Questions (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your business background, intended location or any specific questions..."
          className="w-full px-4 py-2.5 rounded-xl border border-blucy-sky/30 bg-white text-sm text-blucy-navy placeholder-blucy-muted/60 focus:outline-none focus:ring-2 focus:ring-blucy-blue/30"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-pink w-full sm:w-auto px-8 py-3 text-sm font-semibold flex items-center justify-center gap-2 shadow-brand-pink"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Franchise Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
