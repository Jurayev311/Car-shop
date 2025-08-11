import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Orb from '../../reactbits/orb/Orb';
import ShinyText from '../../reactbits/shinyText/ShinyTex';
import { Send } from 'lucide-react';
import knowledgeBase from './chat.json';
import TopScroll from '../../components/top-scroll/top-scroll';
import { IoChevronBackCircleSharp, IoReloadCircleSharp } from "react-icons/io5";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);

    const lowerInput = input.toLowerCase();

    const found = knowledgeBase.find(item =>
      item.keywords.some(keyword => lowerInput.includes(keyword.toLowerCase()))
    );

    let botText = '';
    if (found) {
      botText = found.answer;
    } else {
      const suggestions = ` \n\n•Keng tanlov haqida ma'lumot ber,\n•Shaffof narx,\n•Tez va oson ijara qanday bo‘ladi?,\n•Sifatli xizmat\n•ijara foydasi`;
      botText = `Kechirasiz, bu haqda ma’lumot topilmadi.\nSiz so‘rashingiz mumkin bo‘lgan savollar: ${suggestions}`;
    }

    const botMsg = { role: 'AI', text: botText };

    setIsAnswering(true);
    setMessages(prev => [...prev, botMsg]);
    setInput('');

    setTimeout(() => setIsAnswering(false), 2000);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <div className="pt-[50px] min-h-screen bg-white flex flex-col items-center relative">
        {/* Orqaga qaytish tugmasi */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow-md transition"
          title="back"
        >
          <IoChevronBackCircleSharp className='text-xl' />
        </button>
        <button
          onClick={() => window.location.reload()}
          className="absolute top-14 left-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow-md transition"
          title="restart"
        >
          <IoReloadCircleSharp className='text-xl' />
        </button>

        {/* Sarlavha */}
        <div className="text-center">
          <ShinyText text="Auto Deals AI" disabled={false} speed={5} />
        </div>

        {/* Orb */}
        <div style={{ width: '100%', height: '300px', position: 'relative' }}>
          <Orb
            hoverIntensity={isAnswering ? 1 : 0.5}
            rotateOnHover={true}
            hue={isAnswering ? 200 : 0}
            forceHoverState={isAnswering}
          />
        </div>

        {/* Chat oynasi */}
        <div className="mb-10 w-full max-w-md px-4 flex flex-col flex-grow">
          <div
            className="overflow-y-auto bg-slate-100 border border-slate-700 rounded-lg p-4 mb-4 chat-box"
            style={{ height: '220px' }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 ${m.role === 'user' ? 'text-blue-400 text-right' : 'text-green-400 text-left'}`}
              >
                <span className="block whitespace-pre-line">
                  {m.role === 'user' ? 'Siz: ' : 'AI: '}
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center bg-slate-100 border border-slate-700 rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              placeholder="Savolingizni yozing..."
              className="flex-1 bg-transparent text-black placeholder-gray-400 px-4 py-2 outline-none"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full m-1 transition"
              title="Yuborish"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      <TopScroll />
    </>
  );
};

export default React.memo(Chat);
