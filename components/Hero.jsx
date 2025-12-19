'use client';

import { MessageCircle, Star, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden ">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 right-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 animate-float-delayed"></div>
      </div>

      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-32 lg:py-20 relative z-10">
        <div className="max-w-xl w-full space-y-8">
          <div className="inline-block opacity-0 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-bold shadow-sm border border-blue-200/50 tracking-wide">
              ✨ 7 Years of Excellence in South Florida
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight opacity-0 animate-fade-in-up delay-100">
            Expert Cleaning & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 animate-gradient-x bg-[length:200%_auto]">
              Organization
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fade-in-up delay-200">
            Professional cleaning services with superior quality, ensuring spotless, safe, and well-maintained environments for your home or business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-300">
            <a href="sms:9546546628">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                <MessageCircle className="w-6 h-6 mr-3" />
                Message Now
              </Button>
            </a>
            <a href="https://wa.me/19546546628" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-lg px-8 py-6 h-auto">
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 opacity-0 animate-fade-in-up delay-300">
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 origin-left">7+</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Years Experience</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 origin-left">100%</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Satisfaction</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 origin-left">500+</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Layered Composition */}
      <div className="flex-1 relative min-h-[350px] lg:min-h-[600px] lg:h-auto flex items-center justify-center lg:justify-end lg:pr-12 mt-12 lg:mt-0">
        <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[600px] aspect-square mx-auto lg:mx-0">
         
          {/* Main Image (Image 1) */}
          <div className="absolute top-0 max-md:-top-35 right-0 lg:right-0 w-[90%] lg:w-[100%] aspect-[6/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10 animate-float-delayed group">
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
            <Image
              src="/1.webp"
              alt="Professional organization - before and after"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 90vw, 50vw"
              priority
            />
          </div>

          {/* Secondary Image (Image 2) */}
          <div className="absolute bottom-0 left-0 max-md:bottom-25 lg:left-auto lg:-bottom-20 lg:right-60 w-[90%] lg:w-[100%] aspect-[6/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20 animate-float group">
            <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay z-10"></div>
            <Image
              src="/2.webp"
              alt="Organized closet and storage solutions"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 max-md:bottom-20 right-4 lg:bottom-24 lg:right-12 z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 lg:p-4 border border-white/50 animate-bounce-slow max-w-[200px] lg:max-w-none">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden relative border border-gray-100 shadow-sm flex-shrink-0">
                <Image
                  src="/hero-logo.jpeg"
                  alt="COS Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-900 leading-tight text-sm lg:text-base">Top Rated</div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <span className="whitespace-nowrap">5-Star</span>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
