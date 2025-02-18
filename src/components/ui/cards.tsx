import React from 'react';
import { ChevronRight } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl">
      <Icon className="w-8 h-8 text-green-400 mb-4" />
      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl hover:border-green-400/30 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-green-500/20 rounded-lg floating">
          <Icon className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

interface WhyJoinCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
}

export function WhyJoinCard({ icon: Icon, title, description, buttonText }: WhyJoinCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-green-600/20 to-green-800/20 p-8 rounded-3xl border border-green-500/20 hover:border-green-400/30 transition-all duration-300">
      <div className="absolute top-6 right-6">
        <div className="p-3 bg-green-500/20 rounded-full backdrop-blur-sm">
          <Icon className="w-6 h-6 text-green-400" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mt-8">{title}</h3>
        <p className="text-gray-400 min-h-[80px]">{description}</p>
        <button className="inline-flex items-center px-6 py-3 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
          {buttonText}
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  role: string;
  testimonial: string;
}

export function TestimonialCard({ imageSrc, name, role, testimonial }: TestimonialCardProps) {
  return (
    <div className="glass-effect p-8 rounded-xl hover:border-green-400/30 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-green-500/20 rounded-full">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-16 h-16 rounded-full border-2 border-green-400/20"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-green-400">{role}</p>
        </div>
        <p className="text-gray-400 leading-relaxed">{testimonial}</p>
      </div>
    </div>
  );
} 
