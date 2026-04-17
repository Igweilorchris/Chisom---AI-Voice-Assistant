import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Tunde Afolayan',
    role: 'Merchant, Lagos',
    text: 'Chisom changed the way I interact with my customers. The Pidgin support is a game changer for my local buyers.',
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    name: 'Chioma Okeke',
    role: 'UX Designer',
    text: 'The voice recognition is incredibly sharp. It understands local product names that other AI systems usually fail at.',
    avatar: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    name: 'Musa Ibrahim',
    role: 'Tech Enthusiast',
    text: 'Smart, responsive, and culturally aware. This is the future of the Nigerian digital economy.',
    avatar: 'https://picsum.photos/seed/user3/100/100'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Voice of the People</h2>
          <h3 className="text-4xl md:text-5xl font-bold">What they say <span className="gradient-text">about</span> her</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-[32px] border border-slate-700/50 flex flex-col hover:border-blue-500/20 transition-all group"
            >
              <Quote className="w-10 h-10 text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors" />
              <p className="text-slate-300 mb-8 italic flex-1 leading-relaxed">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500 font-semibold">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5 text-yellow-500/50">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
