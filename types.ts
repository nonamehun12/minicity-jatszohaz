import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  special?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface PricingTier {
  title: string;
  price: string;
  details: string[];
  highlight?: boolean;
  note?: string;
}
