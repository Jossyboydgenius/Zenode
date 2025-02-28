import React from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-green-500/20 rounded-lg">
          <Icon className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl">
      <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

interface WhyJoinCardProps {
  icon: LucideIcon;
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
    <div className="glass-effect p-6 rounded-xl">
      <div className="flex items-center space-x-4 mb-4">
        <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </div>
      <p className="text-gray-400">{testimonial}</p>
    </div>
  );
}
