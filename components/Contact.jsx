'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { IMaskInput } from 'react-imask';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string()
    .min(14, 'Please enter a valid phone number')
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or ready to schedule a cleaning? Contact us today and let us know how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We are here to help and answer any questions you may have.
              </p>
            </div>

            <div className="space-y-6">
              {/* Message */}
              <a
                href="sms:9546546628"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <MessageCircle className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Message</div>
                  <div className="text-gray-600">Text us: (954) 654-6628</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/19546546628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                  <MessageCircle className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                  <div className="text-gray-600">Message us: (954) 654-6628</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:cleaningorganizationsolutions@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600 break-all">cleaningorganizationsolutions@gmail.com</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Service Area</div>
                  <div className="text-gray-600">South Florida</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                placeholder="Your full name"
                error={errors.name?.message}
                {...register('name')}
              />

              <Input
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                error={errors.email?.message}
                {...register('email')}
              />

              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <IMaskInput
                      mask="(000) 000-0000"
                      value={field.value}
                      onAccept={(value) => field.onChange(value)}
                      onBlur={field.onBlur}
                      placeholder="(954) 654-6628"
                      type="tel"
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.phone ? 'border-red-500 focus:ring-red-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                )}
              />

              <Input
                label="Subject"
                placeholder="How can we help you?"
                error={errors.subject?.message}
                {...register('subject')}
              />

              <Textarea
                label="Message"
                placeholder="Tell us more about your cleaning needs..."
                rows={5}
                error={errors.message?.message}
                {...register('message')}
              />

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  Oops! Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
