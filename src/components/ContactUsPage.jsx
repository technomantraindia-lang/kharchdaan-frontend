import React, { useState } from 'react';
import { 
  Home, ChevronRight, Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle2, Sparkles, ShieldCheck, Store, TrendingUp, 
  HeartHandshake, User, ArrowRight, HelpCircle, ChevronDown, 
  ExternalLink, RefreshCw, Award, Check
} from 'lucide-react';

export const ContactUsPage = ({ onNavigateHome, onOpenAuth, onShopClick }) => {
  const [activeDepartment, setActiveDepartment] = useState('general');
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    state: 'Gujarat',
    inquiryType: 'Consumer & Order Support',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const indianStates = [
    'Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 
    'Uttar Pradesh', 'Delhi NCR', 'Karnataka', 'Tamil Nadu', 
    'Telangana', 'West Bengal', 'Punjab', 'Haryana', 'Bihar', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instant secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const contactFaqs = [
    {
      q: 'What are the KharchDaan support working hours?',
      a: 'Our national customer care and direct selling leadership support desk is open Monday to Saturday from 9:00 AM to 8:00 PM IST, and Sunday from 10:00 AM to 4:00 PM IST.'
    },
    {
      q: 'How quickly will I receive a callback or response?',
      a: 'For WhatsApp and phone calls, our team responds almost instantly. For online contact form inquiries, our relationship managers guarantee a callback within 2 to 4 business hours.'
    },
    {
      q: 'How can I connect with a senior Direct Selling Leader in my city?',
      a: 'Simply submit your mobile number and city in the form above and select "Direct Selling Leader Support". Our Diamond & Platinum network leaders in your region will connect with you directly.'
    },
    {
      q: 'How can a neighbourhood Kirana store register as a KharchDaan partner?',
      a: 'Select "Kirana Merchant & Franchise Onboarding" in the form above or call +91 70434 21590. Our local merchant onboarding team will visit your shop for free QR setup and verification.'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      
      {/* 1. HERO HEADER SHOWCASE */}
      <section className="contact-hero-showcase">
        <div className="contact-hero-bg-glow" />
        <div className="container">
          
          {/* Breadcrumbs Navigation */}
          <div className="contact-breadcrumbs-row">
            <button className="breadcrumb-link" onClick={onNavigateHome}>
              <Home size={13} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Contact Us</span>
          </div>

          {/* Foundation Badge */}
          <div className="contact-top-badge-row">
            <div className="contact-foundation-pill">
              <span className="pill-om-symbol">ॐ</span>
              <span>AN INITIATIVE BY GEETA SEVASHRAM PRATISHTHAN FOUNDATION</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          {/* Heading & Slogan */}
          <div className="contact-hero-header-box">
            <h1 className="contact-hero-title">
              We’re Here to Guide Your Journey to <br />
              <span className="text-orange-gradient">Financial Dignity & Community Wealth</span>
            </h1>

            <div className="contact-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="contact-hero-slogan">
                “Tera Tujhko Arpan” (तेरा तुझको अर्पण क्या लागे मेरा)
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="contact-hero-description">
              Whether you have questions about your daily grocery cashback, 1:3 team matrix placement, instant UPI payouts, or want to register your local Kirana store, our Ahmedabad headquarters and nationwide leader desks are at your service.
            </p>
          </div>

          {/* 4 Direct Contact Channels Cards */}
          <div className="contact-channels-grid">
            
            {/* Card 1: Phone Helpline */}
            <a href="tel:7043421590" className="contact-channel-card">
              <div className="channel-icon-wrap orange">
                <Phone size={24} />
              </div>
              <div className="channel-info">
                <span className="channel-tag">TOLL-FREE & CALL DESK</span>
                <strong className="channel-val">+91 70434 21590</strong>
                <span className="channel-sub">Mon-Sat: 9:00 AM – 8:00 PM IST</span>
              </div>
              <div className="channel-action-arrow">
                <ChevronRight size={16} />
              </div>
            </a>

            {/* Card 2: WhatsApp Chat */}
            <a 
              href="https://wa.me/917043421590?text=Hello%20KharchDaan%20Team,%20I%20want%20to%20know%20more%20about%20the%20platform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-channel-card"
            >
              <div className="channel-icon-wrap green">
                <MessageSquare size={24} />
              </div>
              <div className="channel-info">
                <span className="channel-tag">INSTANT WHATSAPP CHAT</span>
                <strong className="channel-val">+91 70434 21590</strong>
                <span className="channel-sub">Quick 24x7 Leader Support</span>
              </div>
              <div className="channel-action-arrow">
                <ExternalLink size={16} />
              </div>
            </a>

            {/* Card 3: Email Desk */}
            <a href="mailto:info@kharchdaan.com" className="contact-channel-card">
              <div className="channel-icon-wrap purple">
                <Mail size={24} />
              </div>
              <div className="channel-info">
                <span className="channel-tag">OFFICIAL EMAIL DESK</span>
                <strong className="channel-val">info@kharchdaan.com</strong>
                <span className="channel-sub">support@kharchdaan.com</span>
              </div>
              <div className="channel-action-arrow">
                <ChevronRight size={16} />
              </div>
            </a>

            {/* Card 4: Head Office */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap gold">
                <MapPin size={24} />
              </div>
              <div className="channel-info">
                <span className="channel-tag">REGISTERED HEADQUARTERS</span>
                <strong className="channel-val">Vasna, Ahmedabad</strong>
                <span className="channel-sub">Gujarat - 380007, India</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. MAIN INTERACTIVE FORM & SUPPORT MATRIX SECTION */}
      <section className="contact-main-form-section">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Interactive Contact Form */}
            <div className="contact-form-container-card">
              <div className="form-card-header">
                <div className="hiw-badge-pill mini">
                  <Send size={13} className="text-orange" />
                  <span>DIRECT INQUIRY DESK</span>
                </div>
                <h2 className="form-title">Send Us a Message or Request a Callback</h2>
                <p className="form-subtitle">
                  Fill in your contact details and our senior relationship coordinator will call you back shortly.
                </p>
              </div>

              {submitted ? (
                <div className="contact-success-state">
                  <div className="success-icon-circle">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="success-title">Dhanyawaad! Your Message is Received</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.fullName}</strong>. Our support desk in Ahmedabad has received your inquiry regarding <em>{formData.inquiryType}</em>. We will call you on <strong>{formData.mobile}</strong> within 2-4 business hours.
                  </p>
                  <div className="success-action-row">
                    <button 
                      className="btn-primary" 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          mobile: '',
                          email: '',
                          state: 'Gujarat',
                          inquiryType: 'Consumer & Order Support',
                          subject: '',
                          message: ''
                        });
                      }}
                    >
                      <span>Send Another Inquiry</span>
                      <RefreshCw size={15} />
                    </button>
                    <button className="btn-secondary-outline" onClick={onShopClick}>
                      <span>Explore Daily Groceries</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-actual-form">
                  <div className="form-row-2col">
                    {/* Full Name */}
                    <div className="form-input-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName" 
                        required 
                        placeholder="e.g. Ramesh Patel" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="form-input-group">
                      <label htmlFor="mobile">Mobile Number (WhatsApp) *</label>
                      <input 
                        type="tel" 
                        id="mobile"
                        name="mobile" 
                        required 
                        placeholder="e.g. 98765 43210" 
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    {/* Email */}
                    <div className="form-input-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="e.g. ramesh@gmail.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* State */}
                    <div className="form-input-group">
                      <label htmlFor="state">Your State *</label>
                      <select 
                        id="state"
                        name="state" 
                        value={formData.state}
                        onChange={handleInputChange}
                      >
                        {indianStates.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Inquiry Category */}
                  <div className="form-input-group">
                    <label htmlFor="inquiryType">How can we assist you today? *</label>
                    <select 
                      id="inquiryType"
                      name="inquiryType" 
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                    >
                      <option value="Consumer & Order Support">🛒 Consumer & Order Support (Grocery Delivery / Cashback Wallet)</option>
                      <option value="Direct Selling Leader Support">🚀 Direct Selling Leader Support (1:3 Matrix, Spillovers, Royalties)</option>
                      <option value="Kirana Merchant & Franchise Onboarding">🏪 Kirana Merchant & Franchise Onboarding (Shop QR & Distribution)</option>
                      <option value="Geeta Sevashram Pratishthan">🌸 Geeta Sevashram Pratishthan (Foundation Seva & Community)</option>
                      <option value="General Question">❓ General Inquiry / App Feedback</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="form-input-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      placeholder="e.g. Want to join as a distributor in Surat" 
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="form-input-group">
                    <label htmlFor="message">Your Message / Questions *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      required 
                      rows={4} 
                      placeholder="Please write your query here in detail..." 
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-form-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={18} className="spinner-icon" />
                        <span>Submitting Your Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message & Request Callback</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <div className="form-trust-footer">
                    <ShieldCheck size={16} className="text-green" />
                    <span>Your contact details are 100% private and protected. Zero spam guarantee.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Specialized Support Desks & Foundation Box */}
            <div className="contact-sidebar-col">
              
              {/* Specialized Assistance Card 1 */}
              <div className="contact-department-card">
                <div className="dept-header-row">
                  <div className="dept-icon-box orange">
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <h3 className="dept-title">Direct Selling Leadership Desk</h3>
                    <span className="dept-subtitle">Compensation, 1:3 Matrix & Training</span>
                  </div>
                </div>
                <p className="dept-desc">
                  Connect with Diamond and Crown leaders for team strategy, spillover structuring, and offline meeting seminars across Gujarat & India.
                </p>
                <div className="dept-perks">
                  <span>✓ 1-on-1 Mentorship</span>
                  <span>✓ Daily Zoom Webinars</span>
                  <span>✓ Marketing Kits</span>
                </div>
              </div>

              {/* Specialized Assistance Card 2 */}
              <div className="contact-department-card">
                <div className="dept-header-row">
                  <div className="dept-icon-box green">
                    <Store size={22} />
                  </div>
                  <div>
                    <h3 className="dept-title">Kirana Merchant & Hub Desk</h3>
                    <span className="dept-subtitle">Neighborhood Store Onboarding</span>
                  </div>
                </div>
                <p className="dept-desc">
                  Are you a grocery store owner? Partner with KharchDaan to get recurring monthly buyers and earn retail commissions with instant QR billing.
                </p>
                <div className="dept-perks">
                  <span>✓ Free Merchant QR</span>
                  <span>✓ 0% Listing Charge</span>
                  <span>✓ Guaranteed Footfall</span>
                </div>
              </div>

              {/* Sacred Foundation Mission Card */}
              <div className="contact-foundation-box">
                <div className="foundation-box-header">
                  <span className="om-symbol-gold">ॐ</span>
                  <div className="foundation-box-title-wrap">
                    <span className="foundation-tag">SACRED INITIATIVE</span>
                    <h4 className="foundation-name">Geeta Sevashram Pratishthan</h4>
                  </div>
                </div>
                <p className="foundation-desc">
                  KharchDaan was established with the blessings of Geeta Sevashram Pratishthan to restore economic self-reliance and community dignity to Indian families through transparent commerce.
                </p>
                <div className="foundation-creed">
                  <span>“तेरा तुझको अर्पण क्या लागे मेरा”</span>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="contact-timings-card">
                <div className="timings-header">
                  <Clock size={18} className="text-orange" />
                  <strong>Operating Hours (IST)</strong>
                </div>
                <div className="timings-row">
                  <span>Monday – Saturday:</span>
                  <strong>9:00 AM – 8:00 PM</strong>
                </div>
                <div className="timings-row">
                  <span>Sunday:</span>
                  <strong>10:00 AM – 4:00 PM</strong>
                </div>
                <div className="timings-row note">
                  <span>WhatsApp Support:</span>
                  <strong className="text-green">24x7 Active</strong>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. HEADQUARTERS LOCATION & CONTACT FAQ */}
      <section className="contact-faq-location-section">
        <div className="container">
          
          <div className="contact-faq-header">
            <div className="hiw-badge-pill">
              <HelpCircle size={14} className="text-orange" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <div className="section-ornament-header">
              <span className="ornament-leaf">❧</span>
              <h2 className="section-title-exact">Need Quick Clarification?</h2>
              <span className="ornament-leaf">❧</span>
            </div>
          </div>

          <div className="contact-faq-accordion-wrap">
            {contactFaqs.map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className={`contact-faq-card ${openFaq === fIdx ? 'is-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === fIdx ? -1 : fIdx)}
              >
                <div className="faq-card-question">
                  <span className="faq-q-digit">0{fIdx + 1}</span>
                  <h4 className="faq-q-text">{faq.q}</h4>
                  <ChevronDown size={18} className="faq-chevron" />
                </div>
                {openFaq === fIdx && (
                  <div className="faq-card-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* End Contact Page Content */}
    </div>
  );
};
