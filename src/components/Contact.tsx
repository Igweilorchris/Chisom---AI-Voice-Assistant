import { motion } from 'motion/react';
import { Mail, MessageSquare, Twitter, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[48px] overflow-hidden border border-slate-700/50 shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-20 bg-blue-600 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's talk <span className="text-blue-200">culture</span> & tech</h3>
                <p className="text-blue-100 text-lg mb-12 opacity-80 leading-relaxed">
                  Have questions about integrating Chisom into your platform? 
                  Reach out and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Email Us</div>
                      <div className="font-semibold">hello@chisom.ai</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Support</div>
                      <div className="font-semibold">support.chisom.ai</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-6">
                <a href="#" className="hover:scale-110 transition-transform"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Github className="w-6 h-6" /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>

            <div className="p-12 md:p-20 bg-slate-900">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                  <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-xl">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
