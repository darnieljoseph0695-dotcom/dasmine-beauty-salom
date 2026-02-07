
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, Menu, X, PlusCircle, Trash2, MessageCircle, Upload, Image as ImageIcon, Lock, KeyRound, LogOut, AlertCircle } from 'lucide-react';
import { CONTACT_DATA, INITIAL_SERVICES } from './constants';
import { ServiceProduct } from './types';

// Password ya kuingia - Unaweza kuibadilisha hapa
const OWNER_PASSWORD = "dasmine2025";

// Safisha namba ya simu kwa ajili ya WhatsApp
const cleanNumber = (num: string) => (num ? num.replace(/[^0-9]/g, '') : '');

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-pink-600 tracking-tight">
              DASMINE <span className="text-stone-800">BEAUTY</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <Link to="/" className="hover:text-pink-500 transition-colors uppercase tracking-widest">Nyumbani</Link>
            <a href="#huduma" className="hover:text-pink-500 transition-colors uppercase tracking-widest">Huduma</a>
            <a href="#mawasiliano" className="hover:text-pink-500 transition-colors uppercase tracking-widest">Mawasiliano</a>
            <Link to="/owner" className="bg-stone-900 text-white px-5 py-2 rounded-full hover:bg-stone-800 transition-all uppercase tracking-widest text-xs flex items-center gap-2">
              <Lock size={14} /> Mwenye Saloon
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-pink-500 border-b border-stone-50">Nyumbani</Link>
            <a href="#huduma" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-pink-500 border-b border-stone-50">Huduma</a>
            <a href="#mawasiliano" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-pink-500 border-b border-stone-50">Mawasiliano</a>
            <Link to="/owner" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-pink-600 bg-pink-50">Panel ya Mwenye Saloon</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const HomePage = ({ services }: { services: ServiceProduct[] }) => {
  const whatsappNumber = cleanNumber(CONTACT_DATA.whatsapp);

  return (
    <main className="pt-20">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Beauty Salon"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Urembo na Fahari Yako <br/> <span className="text-pink-400">Tunasimamia Sisi</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-stone-200">
            Fika Dasmine Beauty Saloon kwa huduma bora za urembo na mitindo ya kisasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#huduma" className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full font-bold transition-all text-lg shadow-lg">
              Angalia Huduma Zetu
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold transition-all text-lg flex items-center justify-center gap-2">
              <MessageCircle size={24} /> WhatsApp Sasa
            </a>
          </div>
        </div>
      </section>

      <section id="huduma" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Huduma Zetu</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  {service.price && <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-pink-600 font-bold text-sm">{service.price}</div>}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed flex-grow">{service.description}</p>
                  <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Habari, nahitaji huduma ya ' + service.title)}`} target="_blank" rel="noopener noreferrer" className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md">
                    <MessageCircle size={18} /> Weka Miadi Sasa
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mawasiliano" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Wasiliana Nasi</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-600"><Phone size={24} /></div>
                  <div><h4 className="font-bold text-stone-900">Simu / WhatsApp</h4><p className="text-stone-600">{CONTACT_DATA.phone}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-600"><MapPin size={24} /></div>
                  <div><h4 className="font-bold text-stone-900">Mahali</h4><p className="text-stone-600">{CONTACT_DATA.location}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-600"><Instagram size={24} /></div>
                  <div><h4 className="font-bold text-stone-900">Instagram</h4><p className="text-stone-600">{CONTACT_DATA.instagram}</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-8 border-stone-50">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.461623910931!2d39.22019905202636!3d-6.786270599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4900a30141a7%3A0xe6759904d162002e!2sMlimani%20City!5e0!3m2!1sen!2stz!4v1714478423611!5m2!1sen!2stz" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const OwnerPanel = ({ services, onAddService, onDeleteService }: { services: ServiceProduct[], onAddService: (s: ServiceProduct) => void, onDeleteService: (id: string) => void }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('dasmine_auth') === 'true');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === OWNER_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('dasmine_auth', 'true');
      setError('');
    } else {
      setError('Password si sahihi!');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Angalia kama picha ni kubwa mno (>1MB ni salama zaidi kwa localStorage)
    if (file.size > 1024 * 1024) {
      alert("Picha hii ni kubwa sana (izidi 1MB). Tafadhali punguza ukubwa au chagua picha nyingine.");
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      setIsUploading(false);
    };
    reader.onerror = () => {
      alert("Imeshindwa kusoma picha. Jaribu tena.");
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc || !image) return alert('Jaza kila kitu na uweke picha.');
    
    try {
      onAddService({ id: Date.now().toString(), title, description: desc, imageUrl: image, price });
      setTitle(''); setDesc(''); setPrice(''); setImage('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      alert("Imepakiwa!");
    } catch (err) {
      alert("Kuna tatizo! Labda hifadhi imejaa. Futa picha kadhaa za zamani kwanza.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-40 pb-24 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-stone-100 max-w-md w-full">
          <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600"><KeyRound size={32} /></div>
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Ingia Panel ya Mmiliki</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder="Weka Password..." className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-pink-500 outline-none text-center" autoFocus />
            {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}
            <button type="submit" className="w-full bg-stone-900 text-white font-bold py-4 rounded-2xl shadow-lg">Fungua</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100 sticky top-32">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Ongeza Huduma</h2>
              <button onClick={() => { sessionStorage.removeItem('dasmine_auth'); setIsAuthenticated(false); }} className="text-stone-400 hover:text-red-500"><LogOut size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div onClick={() => fileInputRef.current?.click()} className={`relative aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${image ? 'border-pink-500' : 'border-stone-200 bg-stone-50'}`}>
                {image ? <img src={image} className="w-full h-full object-cover" alt="Preview" /> : <div className="text-center p-4">{isUploading ? <div className="animate-spin h-6 w-6 border-b-2 border-pink-500 mx-auto"></div> : <><Upload size={24} className="text-stone-300 mx-auto mb-1" /><p className="text-[10px] text-stone-400">Chagua Picha</p></>}</div>}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              </div>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Jina la Huduma" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm" />
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Bei (Mfano: TSh 50,000)" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm" />
              <textarea rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Maelezo..." className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm resize-none"></textarea>
              <button type="submit" disabled={isUploading} className="w-full bg-pink-600 text-white font-bold py-3 rounded-xl shadow-lg disabled:bg-stone-300">Pakia Sasa</button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-6">Huduma Zilizo Hewani ({services.length})</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(s => (
              <div key={s.id} className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 group relative">
                <div className="aspect-video rounded-xl overflow-hidden mb-3 bg-stone-100">
                  <img src={s.imageUrl} className="w-full h-full object-cover" alt={s.title} />
                </div>
                <h4 className="font-bold text-stone-800">{s.title}</h4>
                <p className="text-xs text-stone-500 line-clamp-2">{s.description}</p>
                <button onClick={() => onDeleteService(s.id)} className="absolute top-5 right-5 bg-red-500 text-white p-2 rounded-full shadow-lg"><Trash2 size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-white py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-serif font-bold text-pink-500">DASMINE BEAUTY SALOON</h2>
      <div className="flex justify-center space-x-6 my-6">
        <a href={`https://wa.me/${cleanNumber(CONTACT_DATA.whatsapp)}`} className="hover:text-pink-500"><MessageCircle /></a>
        <a href="#" className="hover:text-pink-500"><Instagram /></a>
      </div>
      <p className="text-stone-500 text-xs">&copy; {new Date().getFullYear()} Dasmine Beauty Saloon. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  const [services, setServices] = useState<ServiceProduct[]>(() => {
    try {
      const saved = localStorage.getItem('dasmine_services');
      return saved ? JSON.parse(saved) : INITIAL_SERVICES;
    } catch (e) {
      console.error("Error loading services", e);
      return INITIAL_SERVICES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dasmine_services', JSON.stringify(services));
    } catch (e) {
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
        console.warn("Storage is full!");
      }
    }
  }, [services]);

  const addService = (newService: ServiceProduct) => {
    setServices(prev => [newService, ...prev]);
  };

  const deleteService = (id: string) => {
    if (confirm('Je, unataka kufuta huduma hii?')) {
      setServices(prev => prev.filter(s => s.id !== id));
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage services={services} />} />
            <Route path="/owner" element={<OwnerPanel services={services} onAddService={addService} onDeleteService={deleteService} />} />
          </Routes>
        </div>
        <Footer />
        <a href={`https://wa.me/${cleanNumber(CONTACT_DATA.whatsapp)}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all">
          <MessageCircle size={32} />
        </a>
      </div>
    </Router>
  );
}
