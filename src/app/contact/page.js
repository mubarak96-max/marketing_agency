'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export const metadata = {
    title: 'Contact Us - Nexus Digital | Get in Touch',
    description: 'Contact Nexus Digital for your digital transformation needs. Based in Dubai, serving businesses across the UAE.',
    keywords: 'contact digital agency Dubai, digital agency contact UAE',
};

const services = [
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'Social Media Management',
    'Custom Solutions'
];

const budgetRanges = [
    'AED 5,000 - 10,000',
    'AED 10,000 - 25,000',
    'AED 25,000 - 50,000',
    'AED 50,000+'
];

const timelines = [
    'Within 1 month',
    '1-2 months',
    '2-3 months',
    '3+ months'
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
        message: ''
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
            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                timeline: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <div className="min-h-screen bg-luxury-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-dubai-dark text-luxury-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Let's discuss how we can help transform your business
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-dubai-dark mb-6">
                                Send Us a Message
                            </h2>

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
                                    placeholder="+971"
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
                                    {services.map(service => (
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
                                    {budgetRanges.map(range => (
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
                                    {timelines.map(timeline => (
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
                                        Thank you for your message! We'll get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-dubai-dark mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-dubai-gold mt-1" />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-dubai-dark">Our Office</h3>
                                        <p className="text-gray-600">
                                            Dubai Internet City<br />
                                            Dubai, United Arab Emirates
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-dubai-gold mt-1" />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-dubai-dark">Phone</h3>
                                        <p className="text-gray-600">+971 4 XXX XXXX</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-dubai-gold mt-1" />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-dubai-dark">Email</h3>
                                        <p className="text-gray-600">info@nexusdigital.ae</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MessageCircle className="w-6 h-6 text-dubai-gold mt-1" />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-dubai-dark">WhatsApp</h3>
                                        <a
                                            href="https://wa.me/971XXXXXXXX"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-dubai-gold hover:underline"
                                        >
                                            Chat with us
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Placeholder */}
                            <div className="mt-8 bg-dubai-light/5 rounded-lg p-4 h-64 flex items-center justify-center">
                                <p className="text-gray-500">Google Maps Integration</p>
                            </div>

                            {/* Business Hours */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-dubai-dark mb-3">
                                    Business Hours
                                </h3>
                                <p className="text-gray-600">
                                    Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                                    Friday - Saturday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
