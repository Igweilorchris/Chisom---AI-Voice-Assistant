import { motion } from 'motion/react';
import { Mic2, BrainCircuit, Languages, Clock, ShoppingBag, ShoppingCart } from 'lucide-react';

const features = [
  {
    title: 'Voice-powered interaction',
    description: 'Natural, hands-free control for browsing and buying. Just speak, Chisom listens.',
    icon: Mic2,
    color: 'blue'
  },
  {
    title: 'Smart AI Assistant',
    description: 'Powered by advanced Large Language Models to handle complex queries and advice.',
    icon: BrainCircuit,
    color: 'purple'
  },
  {
    title: 'Multilingual Support',
    description: 'Speaks English, Pidgin, and Igbo. Cultural resonance in every conversation.',
    icon: Languages,
    color: 'pink'
  },
  {
    title: 'Real-time Responses',
    description: 'Zero-latency interactions. Get answers and complete tasks instantly.',
    icon: Clock,
    color: 'cyan'
  },
  {
    title: 'Smart Shopping Assistant',
    description: 'Personalized product recommendations based on your preferences and history.',
    icon: ShoppingBag,
    color: 'orange'
  },
  {
    title: 'Seamless Add-to-Cart',
    description: 'Integrate directly with your checkout flow. Commerce as simple as saying "Nne, I want this".',
    icon: ShoppingCart,
    color: 'green'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Designed for the <span className="gradient-text">modern</span> user.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to transform your digital experience with the power of voice and cultural intelligence.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-10 rounded-[32px] bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-${feature.color}-500/10 group-hover:scale-110 transition-transform duration-500`}>
              <feature.icon className={`w-7 h-7 text-${feature.color}-500`} />
            </div>
            <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h4>
            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
