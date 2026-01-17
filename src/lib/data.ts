import type { Service } from './definitions';
import {
  Smartphone,
  ShieldCheck,
  Network,
  Cpu,
  AirVent,
  Flame,
  Sun,
} from 'lucide-react';

export const services: Service[] = [
  {
    title: 'Smart Control & Automation',
    description: 'Integrate and automate your home or business environment for seamless control over lighting, climate, and more.',
    icon: Smartphone,
  },
  {
    title: 'Smart Security & Surveillance',
    description: 'Advanced security solutions including smart cameras, alarms, and access control for peace of mind.',
    icon: ShieldCheck,
  },
  {
    title: 'Networks & IP Telephony',
    description: 'Robust networking infrastructure and modern IP telephony systems for reliable communication.',
    icon: Network,
  },
  {
    title: 'Digital Solutions & Technology Services',
    description: 'Custom software, cloud services, and IT consulting to drive your digital transformation.',
    icon: Cpu,
  },
  {
    title: 'HVAC',
    description: 'Intelligent heating, ventilation, and air conditioning systems for optimal comfort and energy efficiency.',
    icon: AirVent,
  },
  {
    title: 'Precision Fire Protection',
    description: 'State-of-the-art fire detection and suppression systems to protect your assets and personnel.',
    icon: Flame,
  },
  {
    title: 'Solar Power Systems & Energy Optimization',
    description: 'Sustainable solar energy solutions and optimization strategies to reduce costs and environmental impact.',
    icon: Sun,
  },
];
