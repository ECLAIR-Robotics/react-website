import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  useReveal();

  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const name  = formRef.current.querySelector<HTMLInputElement>('#name')?.value;
    const email = formRef.current.querySelector<HTMLInputElement>('#email')?.value;

    if (!name || !email) {
      setError('Please fill out all required fields.');
      return;
    }

    setSending(true);
    setError('');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );
      setSent(true);
    } catch (err) {
      setError('Something went wrong. Please email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-wrapper">
      <section className="contact-section">

        <div className="section-tag">Reach Out</div>
        <h1 className="section-h2 reveal">Get In Touch</h1>

        <div className="contact-grid">

          {/* Left — info */}
          <div className="contact-info reveal reveal-delay-1">
            <h3>Join us. Build with us.<br />Support us.</h3>
            <p>
              Whether you're a student looking to get involved, a company interested
              in partnering, or just curious about what we're building — we want to
              hear from you.
            </p>

            <div className="contact-links">
              <a href="mailto:eclairrobotics@gmail.com" className="contact-link">
                <div className="contact-link-icon">✉</div>
                eclairrobotics@gmail.com
              </a>
              <a
                href="https://www.instagram.com/eclairrobotics/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">◈</div>
                @eclairrobotics
              </a>
              <a
                href="https://discord.gg/tgbvpCjNgV"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">⬡</div>
                Join our Discord
              </a>
              <a
                href="https://github.com/ECLAIR-Robotics"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">⌥</div>
                github.com/ECLAIR-Robotics
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap reveal reveal-delay-2">
            {sent ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <div className="form-success-text">Message sent successfully.</div>
                <div className="form-success-sub">We'll get back to you soon.</div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="What's on your mind?"
                  />
                </div>
                {error && <div className="form-error">{error}</div>}
                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
