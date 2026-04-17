import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Languages', value: '3+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Response Time', value: '<50ms' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/chisom-tech/800/800" 
              alt="AI Technology" 
              className="rounded-[32px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl max-w-xs transition-transform hover:translate-y-[-5px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                </div>
                <span className="font-bold text-lg">Secure & Private</span>
              </div>
              <p className="text-sm text-slate-400">
                End-to-end encrypted voice sessions ensuring your data stays yours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">The Chisom Mission</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Bridging the gap between <span className="gradient-text">technology</span> and culture.
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We started with a simple belief: technology should speak your language. 
              Chisom isn't just another voice assistant; she's a companion designed 
              to understand the nuances of Nigerian culture, business, and commerce.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="bg-blue-500/10 p-3 rounded-xl h-fit">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Cultural Intelligence</h4>
                  <p className="text-slate-400">Deep understanding of local dialects and shopping habits.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-500/10 p-3 rounded-xl h-fit">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Instant Infrastructure</h4>
                  <p className="text-slate-400">Seamless integration with global e-commerce platforms like Shopify and Magento.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-800">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
