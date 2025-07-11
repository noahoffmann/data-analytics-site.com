import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">DataAnalyticsauthorities</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Turning Data into Decisions with Precision & Insight.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At DataAnalyticsauthorities, we transform complex data into actionable insights that
              drive strategic business outcomes.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Professional working on PC setup"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, DataAnalyticsauthorities has grown into a trusted partner for
              organizations seeking to unlock the power of their data. Our team of experts brings
              years of experience and a passion for innovation.
            </p>
            <p className="text-lg text-gray-600 mb-6 italic">
              "Our mission is to turn complex data into clear, actionable insights that empower
              strategic decision-making."
            </p>
          </div>

          {/* Services */}
          <div
            id="services"
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <ServiceCard
              title="Data Visualization"
              icon={<ChartIcon />}
              description="Transform raw data into intuitive visual dashboards."
            />
            <ServiceCard
              title="Business Intelligence"
              icon={<GraphIcon />}
              description="Drive smarter decisions with powerful analytics tools."
            />
            <ServiceCard
              title="Machine Learning Consulting"
              icon={<BrainIcon />}
              description="Leverage AI to predict trends and optimize performance."
            />
            <ServiceCard
              title="Custom Dashboards"
              icon={<DashboardIcon />}
              description="Tailored solutions to monitor KPIs and business metrics."
            />
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Trusted by Industry Leaders
          </h2>
          <div className="flex justify-center space-x-10 mb-10">
            <img
              src="https://placehold.co/100x50/cccccc/999999?text=Client+1"
              alt="Client Logo"
              className="opacity-70 hover:opacity-100 transition"
            />
            <img
              src="https://placehold.co/100x50/cccccc/999999?text=Client+2"
              alt="Client Logo"
              className="opacity-70 hover:opacity-100 transition"
            />
            <img
              src="https://placehold.co/100x50/cccccc/999999?text=Client+3"
              alt="Client Logo"
              className="opacity-70 hover:opacity-100 transition"
            />
          </div>
          <div className="text-center text-gray-600">
            <p className="italic">We are committed to data security and GDPR compliance.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-4">
                Have questions or ready to start your next project? Reach out to us at:
              </p>
              <p className="text-blue-600 font-medium text-xl mb-2">
                contact@dataAnalyticsauthorities@aol.com
              </p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-600 mt-2">Office: 123 Insight Drive, Tech City, USA</p>
            </div>
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
                {submitted && (
                  <p className="text-green-500 text-center">Thank you! Your message was sent.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">DataAnalyticsauthorities</h3>
              <p className="text-gray-400">Turning data into clarity, insight, and impact.</p>
            </div>
            <div className="text-sm space-x-4 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                GitHub
              </a>
            </div>
            <div className="text-right">
              <p className="text-blue-400">contact@dataAnalyticsauthorities@aol.com</p>
              <p className="text-gray-400 text-sm mt-1">&copy; 2025 DataAnalyticsauthorities. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
      <div className="text-blue-600 mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Icons (simple SVG inline)

const ChartIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="M9 17v-6" />
    <path d="M13 17v-10" />
    <path d="M17 17v-4" />
  </svg>
);

const GraphIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 17 9 11 13 15 21 7" />
  </svg>
);

const BrainIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20v-4" />
    <path d="M16 12a4 4 0 01-8 0" />
    <path d="M12 4a4 4 0 018 8" />
  </svg>
);

const DashboardIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="4" />
    <rect x="14" y="12" width="7" height="9" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
