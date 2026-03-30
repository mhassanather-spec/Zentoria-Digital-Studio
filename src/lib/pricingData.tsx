
import { Rocket, Layout as LayoutIcon, Code, Globe } from 'lucide-react';


export const servicePlans = [
  {
    category: "Marketing & SEO",
    icon: <Rocket size={20} />,
    plans: [
      { name: "Starter Reach", price: "$995/mo", features: ["Targeted Keyword Research", "On-page Optimization", "Weekly Performance Report"] },
      { name: "Market Surge", price: "$1,995/mo", features: ["Full SEO Suite", "4 Strategic Content Posts", "Link Building Campaign"] },
      { name: "Elite Dominance", price: "$3,495/mo", features: ["Competitive Takeover", "PR & Guest Posting", "Daily Analytics Tracking"] }
    ]
  },
  {
    category: "Design & UX",
    icon: <LayoutIcon size={20} />,
    plans: [
      { name: "Impact UI", price: "$2,495", features: ["Modern Brand Identity", "Essential UI Framework", "3 Unique Concepts"] },
      { name: "Conversion UX", price: "$4,995", features: ["High-Fidelity Mockups", "Interactive Prototypes", "User Journey Strategy"] },
      { name: "Full Ecosystem", price: "$9,995", features: ["Bespoke Design System", "Custom Visual Assets", "Ongoing Brand Support"] }
    ]
  },
  {
    category: "Web & App Dev",
    icon: <Code size={20} />,
    plans: [
      { name: "Agile MVP", price: "$4,995", features: ["React / Next.js Stack", "Basic CMS Integration", "Blazing Fast Performance"] },
      { name: "Fluid Product", price: "$9,995", features: ["Full-Stack Architecture", "Custom API Development", "User Authentication"] },
      { name: "Enterprise Gear", price: "Custom", features: ["Complex Data Systems", "Cloud Infrastructure", "Long-term Maintenance"] }
    ]
  },
  {
    category: "Specialized Tech",
    icon: <Globe size={20} />,
    plans: [
      { name: "Basic Sync", price: "$1,495", features: ["E-commerce Setup", "Automation Webhooks", "CRM Data Sync"] },
      { name: "Tech Advantage", price: "$4,495", features: ["AI Integration", "Custom Plugin Dev", "Scalable Microservices"] },
      { name: "Core Innovation", price: "Bespoke", features: ["Custom Algorithms", "Proprietary Software", "Strategic R&D"] }
    ]
  }
];
