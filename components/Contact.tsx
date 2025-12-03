'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '21c32e35-4ba9-4826-98b6-e59ddfc4a6d2',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Mail className="text-white" size={24} />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">ysmaelnoche02@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Phone className="text-white" size={24} />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+63 9690493331</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <MapPin className="text-white" size={24} />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Sitio De Asis, Barangay San Martin De Porres, Parañaque City, Philippines</p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/ysmaelnoche"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-blue-400 transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/MaelPanget"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-blue-400 transition-all"
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold mb-2 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    ✓ Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    ✗ Failed - Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-600 dark:text-green-400 text-center font-medium"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-600 dark:text-red-400 text-center font-medium"
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-600"
      >
        <p> 2025 Ysmael Noche. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
