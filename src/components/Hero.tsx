import { motion } from 'motion/react';
import { Mic, ArrowRight, ShoppingCart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-columns-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 transition-all hover:bg-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Next-Gen Voice Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Meet <span className="gradient-text">Chisom</span>. Your Multi-Lingual AI Assistant.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Chisom speaks English, Pidgin, and Igbo. From smart shopping to real-time support, 
            experience the future of voice-powered commerce today.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#demo"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)]"
            >
              Start Conversation <Mic className="w-5 h-5" />
            </a>
            <a 
              href="#features"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold transition-all border border-slate-700"
            >
              View Features <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Trusted By Innovators</span>
            <div className="flex gap-8">
              <span className="font-display font-bold text-xl">VOICE+</span>
              <span className="font-display font-bold text-xl">Linguist.AI</span>
              <span className="font-display font-bold text-xl">Shopify-X</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 p-8 glass rounded-[40px] shadow-2xl overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-blue-500 to-purple-500" />
             <div className="flex justify-between items-center mb-10 text-slate-400 text-sm font-mono tracking-tighter">
               <span>VOICE_SESSION_01</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> LIVE</span>
             </div>
             
             <div className="space-y-6">
                <div className="flex justify-start">
                   <div className="bg-slate-700/50 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                     "Nne, how can I help you today? I see you like those vintage sneakers."
                   </div>
                </div>
                <div className="flex justify-end">
                   <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm text-white">
                     "Chisom, e be like say I want that blue one. Add am to my cart abeg."
                   </div>
                </div>
                <div className="flex justify-start">
                   <div className="bg-slate-700/50 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                     "Done! I've added the Ocean Blue Vintages to your cart. Anything else, my dear?"
                   </div>
                </div>
             </div>

             <div className="mt-10 pt-6 border-t border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white" />
                   </div>
                   <div className="space-y-0.5">
                      <div className="h-1.5 w-24 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3 animate-[shimmer_1s_infinite]"></div>
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Listening...</div>
                   </div>
                </div>
                <div className="bg-blue-500/10 p-2 rounded-lg">
                   <ShoppingCart className="w-5 h-5 text-blue-400" />
                </div>
             </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 border-4 border-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute -z-10 -top-10 -left-10 w-24 h-24 bg-purple-500/10 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700" />
        </motion.div>
      </div>
    </section>
  );
}
