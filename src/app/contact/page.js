'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/data/site';

const services = [
  'Website Development',
  'Mobile App Development',
  'Digital Marketing',
  'PPC & Google Ads',
  'Custom Business Systems',
];

const budgetRanges = [
  'UGX 2M - 5M',
  'UGX 5M - 15M',
  'UGX 15M - 40M',
  'UGX 40M+',
];

const timelines = [
  'Within 1 month',
  '1-2 months',
  '2-3 months',
  '3+ months',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-luxury-white">
      <section className="relative py-20 bg-dubai-dark text-luxury-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us what you need and we&apos;ll help you choose the right website, app, PPC, or digital marketing approach for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-dubai-dark mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+256"
                />

                <Input
                  label="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />

                <Input
                  label="Service Interest"
                  type="select"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </Input>

                <Input
                  label="Project Budget"
                  type="select"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </Input>

                <Input
                  label="Project Timeline"
                  type="select"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </Input>

                <Input
                  label="Message"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  Send Message
                </Button>

                {submitSuccess && (
                  <div className="text-green-600 text-center mt-4">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dubai-dark mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-dubai-gold mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-dubai-dark">Our Office</h3>
                    <p className="text-gray-600">
                      {siteConfig.streetAddress}
                      <br />
                      {siteConfig.city}, {siteConfig.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-dubai-gold mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-dubai-dark">Phone</h3>
                    <p className="text-gray-600">{siteConfig.phoneDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-dubai-gold mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-dubai-dark">Email</h3>
                    <p className="text-gray-600">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-dubai-gold mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-dubai-dark">WhatsApp</h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dubai-gold hover:underline"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-dubai-light/5 rounded-lg p-4 h-64 flex items-center justify-center">
                <p className="text-gray-500">Google Maps Integration</p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-dubai-dark mb-3">Business Hours</h3>
                <p className="text-gray-600">
                  {siteConfig.businessHours.map((item, index) => (
                    <span key={item}>
                      {item}
                      {index < siteConfig.businessHours.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
