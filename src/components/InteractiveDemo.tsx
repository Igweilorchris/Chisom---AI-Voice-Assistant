import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Send, ShoppingCart, User, Bot, Trash2 } from 'lucide-react';
import { getChisomResponse } from '../lib/gemini';

interface Message {
  role: 'user' | 'model';
  parts: [{ text: string }];
}

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function InteractiveDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await getChisomResponse(input, messages);
    setIsTyping(false);
    
    const botMessage: Message = { role: 'model', parts: [{ text: response || '' }] };
    setMessages((prev) => [...prev, botMessage]);

    // Simple logic trigger for "add to cart"
    if (input.toLowerCase().includes('add') && input.toLowerCase().includes('cart')) {
      const newItem = { id: Date.now(), name: 'Smart Sneakers', price: 120 };
      setCart(prev => [...prev, newItem]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section id="demo" className="py-24 bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Live Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Talk to <span className="gradient-text">Chisom</span> Now</h3>
          <p className="text-slate-400 mt-4">Ask her anything in English, Pidgin, or Igbo.</p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-8 h-[600px]">
          {/* Chat Container */}
          <div className="glass rounded-[32px] overflow-hidden flex flex-col border border-slate-700 shadow-2xl">
            <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">Chisom AI</div>
                  <div className="text-[10px] text-green-500 uppercase font-bold flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Online
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700"
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40 italic">
                  <Bot className="w-12 h-12 mb-4" />
                  <p>"Kedu! What can I help you find today?"</p>
                  <p className="text-sm mt-2 font-not-italic">Try: "Add some sneakers to my cart"</p>
                </div>
              )}
              
              <AnimatePresence>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                      m.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                    }`}>
                      {m.role === 'model' && <Bot className="w-5 h-5 shrink-0 mt-1 opacity-50" />}
                      <div>{m.parts[0].text}</div>
                      {m.role === 'user' && <User className="w-5 h-5 shrink-0 mt-1 opacity-50" />}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 transition-all">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-800/30 border-t border-slate-700">
              <div className="relative flex items-center gap-3">
                <button className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Chisom anything..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-full py-3 px-6 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Cart Container */}
          <div className="glass rounded-[32px] flex flex-col border border-slate-700 shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-slate-800/80 border-b border-slate-700 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-blue-500" />
              <span className="font-bold">Your Cart</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <AnimatePresence>
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 text-sm text-center">
                    <ShoppingCart className="w-8 h-8 mb-2 opacity-20" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 flex justify-between items-center group"
                    >
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className="text-xs text-blue-400">${item.price}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-slate-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
            {cart.length > 0 && (
              <div className="p-4 border-t border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-400">Total</span>
                  <span className="font-bold">${cart.reduce((s, i) => s + i.price, 0)}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
