import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Chisom<span className="text-blue-500">AI</span></span>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4 text-sm">
              <span className="font-bold text-slate-100 uppercase tracking-widest text-[10px]">Product</span>
              <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-slate-400 hover:text-white transition-colors">Interactive Demo</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <span className="font-bold text-slate-100 uppercase tracking-widest text-[10px]">Company</span>
              <a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold uppercase tracking-widest pt-8 border-t border-slate-800/50">
          <div>© 2026 Chisom AI Technologies. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
