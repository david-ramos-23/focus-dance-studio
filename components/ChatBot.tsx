import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const FAQ_DATA = [
  { keywords: ['precio', 'tarifa', 'cuanto', 'cuesta', 'dinero'], answer: "Nuestras tarifas empiezan desde 15€ por clase suelta (Drop In). El pack más popular es el Focus Pack de 50€/mes por 4 clases. ¡Echa un vistazo a la sección de Tarifas!" },
  { keywords: ['donde', 'ubicacion', 'direccion', 'llegar', 'calle'], answer: "Estamos en Carrer de Pavia 50–52, 08028 Barcelona. ¡Te esperamos!" },
  { keywords: ['horario', 'clases', 'cuando', 'hora'], answer: "Tenemos clases de Lunes a Viernes a partir de las 18:00h, y clases matinales los Jueves. Puedes ver el calendario completo en la sección 'Horario'." },
  { keywords: ['nivel', 'principiante', 'empezar', 'cero'], answer: "Tenemos clases para todos los niveles, desde Iniciación (Bachata, Salsa) hasta grupos cerrados y avanzados. ¡Todos son bienvenidos!" },
  { keywords: ['reserva', 'apuntarse', 'inscribirse'], answer: "Puedes reservar tu plaza directamente desde nuestro portal de alumnos. Usa el botón 'Portal' en el menú superior." },
  { keywords: ['estilo', 'baile', 'tipo'], answer: "Ofrecemos Bachata, Salsa, Urbano/Reggaeton, Contemporáneo, Heels y Lady Style." },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: '¡Hola! Soy el asistente de Focus. ¿En qué puedo ayudarte hoy?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate thinking delay
    setTimeout(() => {
      const lowerInput = userMsg.text.toLowerCase();
      let botResponse = "Disculpa, no entendí bien tu pregunta. Puedes escribirnos a hola@focusdancestudio.com para atención personalizada.";

      const foundAnswer = FAQ_DATA.find(item =>
        item.keywords.some(keyword => lowerInput.includes(keyword))
      );

      if (foundAnswer) {
        botResponse = foundAnswer.answer;
      } else if (lowerInput.includes('hola') || lowerInput.includes('buenos')) {
        botResponse = "¡Hola! ¿Te gustaría saber sobre nuestros horarios, tarifas o dónde estamos?";
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot'
      }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-deepGreen text-white p-4 rounded-full shadow-2xl hover:bg-carbonBlack transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-50 w-80 md:w-96 bg-warmWhite dark:bg-neutral-900 rounded-sm shadow-2xl border border-neutralGrey/20 flex flex-col overflow-hidden max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-deepGreen p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                <span className="font-display font-bold text-xs">∞</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm">Focus Assistant</h3>
                <p className="text-xs text-white/70 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[350px] bg-white dark:bg-carbonBlack">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.sender === 'user' ? 'bg-neutralGrey' : 'bg-deepGreen'
                    }`}>
                    {msg.sender === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 text-sm rounded-lg ${msg.sender === 'user'
                        ? 'bg-neutralGrey/10 text-carbonBlack dark:text-warmWhite rounded-tr-none'
                        : 'bg-deepGreen/10 text-carbonBlack dark:text-warmWhite rounded-tl-none border border-deepGreen/20'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-warmWhite dark:bg-neutral-900 border-t border-neutralGrey/20 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu duda..."
                className="flex-1 bg-white dark:bg-black border border-neutralGrey/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-deepGreen text-carbonBlack dark:text-warmWhite"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 bg-deepGreen text-white rounded-sm hover:bg-carbonBlack disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;