
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Phone, MapPin, Instagram, Menu, X, PlusCircle, Trash2, 
  MessageCircle, Upload, Image as ImageIcon, Lock, 
  KeyRound, LogOut, ChevronRight, Star, Scissors, 
  Sparkles, Heart, LayoutDashboard, Settings
} from 'lucide-react';
import { CONTACT_DATA, INITIAL_SERVICES } from './constants';
import { ServiceProduct } from './types';

// Password ya kuingia
const OWNER_PASSWORD = "dasmine2025";

// Safisha namba ya simu kwa ajili ya WhatsApp
const cleanNumber = (num: string) => (num ? num.replace(/[^0-9]/g, '') : '');

// --- UI Components ---

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <span className="text-pink-600 font-semibold tracking-[0.3em] uppercase text-xs mb-3 block">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">{title}</h2>
    <div className="w-20 h-1 bg-pink-300 mx-auto mt-6"></div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isOwnerPage = location.pathname === '/owner';

  return (
    <nav className="fixed w-full z-50 glass-effect shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tighter">
              <span className="text-pink-600">DASMINE</span> <span className="text-stone-800">BEAUTY</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-stone-600">
            <Link to="/" className="hover:text-pink-600 transition-colors">Nyumbani</Link>
            <a href="#huduma" className="hover:text-pink-600 transition-colors">Huduma</a>
            <a href="#kuhusu" className="hover:text-pink-600 transition-colors">Kuhusu</a>
            <a href="#mawasiliano" className="hover:text-pink-600 transition-colors">Mawasiliano</a>
            <Link to="/owner" className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${isOwnerPage ? 'bg-pink-600 text-white' : 'bg-stone-900 text-white hover:bg-pink-600'}`}>
              <Lock size={14} /> {isOwnerPage ? 'Dashboard' : 'Mwenye Saloon'}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-4 text-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif">Nyumbani</Link>
            <a href="#huduma" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif">Huduma</a>
            <a href="#kuhusu" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif">Kuhusu</a>
            <a href="#mawasiliano" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif">Mawasiliano</a>
            <Link to="/owner" onClick={() => setIsOpen(false)} className="block py-4 bg-pink-600 text-white rounded-xl font-bold">Mwenye Saloon</Link>
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
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Beauty Salon"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <div className="flex justify-center mb-6 animate-in fade-in duration-1000">
            <Sparkles className="text-pink-400" size={40} />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-10 duration-1000">
            Gundua Urembo <br/> <span className="italic font-normal text-pink-300">Uliofichika</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Dasmine Beauty Saloon ni kitovu cha urembo kinachotoa huduma za kisasa kwa ajili ya muonekano wako wa kipekee.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#huduma" className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-5 rounded-full font-bold transition-all text-lg shadow-2xl hover:-translate-y-1">
              Gundua Huduma
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="glass-effect text-stone-900 px-12 py-5 rounded-full font-bold transition-all text-lg flex items-center gap-3 hover:bg-white">
              <MessageCircle size={24} /> Weka Miadi
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Scissors className="text-pink-500" />, title: "Wataalamu Waliobobea", desc: "Timu yetu ina uzoefu wa miaka mingi katika sanaa ya urembo." },
            { icon: <Sparkles className="text-pink-500" />, title: "Bidhaa Bora", desc: "Tunatumia bidhaa za kimataifa zinazojali afya ya ngozi na nywele zako." },
            { icon: <Heart className="text-pink-500" />, title: "Huduma kwa Upendo", desc: "Kila mteja kwetu ni wa pekee, tunakuhudumia kwa tabasamu na heshima." }
          ].map((f, i) => (
            <div key={i} className="text-center p-8 rounded-3xl hover:bg-stone-50 transition-colors">
              <div className="bg-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-stone-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="huduma" className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Huduma Zetu za Kifahari" subtitle="Luxury Services" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm leading-relaxed">{service.description}</p>
                  </div>
                  {service.price && (
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-5 py-2 rounded-full text-pink-600 font-bold text-sm shadow-xl">
                      {service.price}
                    </div>
                  )}
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-2xl font-serif font-bold mb-6 group-hover:text-pink-600 transition-colors">{service.title}</h3>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Habari Dasmine, nahitaji huduma ya ' + service.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-stone-900 font-bold border-b-2 border-pink-300 pb-1 hover:border-pink-600 transition-all uppercase text-xs tracking-widest"
                  >
                    Weka Miadi <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="kuhusu" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full aspect-[4/5] object-cover" 
                alt="About Dasmine"
              />
              <div className="absolute -bottom-10 -right-10 bg-pink-600 text-white p-10 rounded-[2rem] z-20 shadow-2xl hidden md:block">
                <p className="text-4xl font-serif font-bold mb-2">10+</p>
                <p className="text-xs uppercase tracking-widest font-bold">Miaka ya Uzoefu</p>
              </div>
            </div>
            <div>
              <SectionHeading title="Kuhusu Dasmine Saloon" subtitle="Our Story" />
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Tangu kuanzishwa kwetu, Dasmine Beauty Saloon imekuwa kimbilio la wanawake na wanaume wanaothamini urembo wa asili na huduma za kiwango cha juu. 
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-10">
                Lengo letu ni kutoa huduma inayozidi matarajio yako, tukitumia ubunifu na teknolojia ya kisasa ya urembo huku tukihakikisha mazingira yetu ni tulivu na yenye kukurudishia amani ya moyo.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-600"><Star size={20} /></div>
                  <span className="font-bold text-stone-800">Huduma Bora</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-600"><Sparkles size={20} /></div>
                  <span className="font-bold text-stone-800">Makeup za Kisasa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="mawasiliano" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Tufikie Saloon</h2>
              <p className="text-stone-400 mb-12 text-lg">Tunapatikana katika eneo tulivu la Mlimani City, tukiwa na maegesho ya kutosha na usalama kwa ajili yako.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-pink-600 transition-colors"><MapPin size={24} /></div>
                  <div><p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Mahali</p><p className="font-bold">{CONTACT_DATA.location}</p></div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-pink-600 transition-colors"><Phone size={24} /></div>
                  <div><p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Simu</p><p className="font-bold">{CONTACT_DATA.phone}</p></div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-pink-600 transition-colors"><Instagram size={24} /></div>
                  <div><p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Instagram</p><p className="font-bold">{CONTACT_DATA.instagram}</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden border-[12px] border-white/5 h-[500px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
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
      setError('Password unayoingiza si sahihi. Jaribu tena.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Punguza kabisa ukubwa wa picha (Image Compression simplified)
    if (file.size > 800 * 1024) {
      alert("Samahani, picha hii ni kubwa sana (izidi 800KB). Tafadhali chagua picha ndogo au upunguze ukubwa wake kwanza.");
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc || !image) return alert('Tafadhali jaza jina la huduma, maelezo na uweke picha.');
    
    try {
      onAddService({ id: Date.now().toString(), title, description: desc, imageUrl: image, price });
      setTitle(''); setDesc(''); setPrice(''); setImage('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      alert("Hongera! Huduma mpya imepakiwa na inaonekana sasa kwenye website.");
    } catch (err) {
      alert("Kushindwa kuhifadhi! Hifadhi ya browser yako labda imejaa. Futa baadhi ya huduma za zamani ili upate nafasi.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#faf9f6] pt-40 pb-24 flex items-center justify-center px-4">
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-stone-100 max-w-md w-full text-center">
          <div className="bg-pink-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-pink-600 shadow-inner">
            <Lock size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">Ingia Kwenye Mfumo</h2>
          <p className="text-stone-500 mb-8 font-light">Eneo hili ni kwa ajili ya mmiliki pekee.</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <KeyRound className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="password" 
                value={passwordInput} 
                onChange={(e) => setPasswordInput(e.target.value)} 
                placeholder="Ingiza Password..." 
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-14 pr-6 py-5 focus:ring-2 focus:ring-pink-500 outline-none transition-all text-lg" 
                autoFocus 
              />
            </div>
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <button type="submit" className="w-full bg-stone-900 hover:bg-pink-600 text-white font-bold py-5 rounded-2xl shadow-xl transition-all active:scale-95">
              Fungua Mfumo
            </button>
            <Link to="/" className="block text-stone-400 hover:text-stone-600 text-sm mt-6 underline">Rudi Nyumbani</Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfbf9] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900">Usimamizi wa Mfumo</h2>
            <p className="text-stone-500">Karibu tena, hapa unaweza kubadilisha picha na huduma zako.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
              <Sparkles className="text-pink-500" size={20} />
              <span className="font-bold text-stone-800">{services.length} Huduma</span>
            </div>
            <button 
              onClick={() => { sessionStorage.removeItem('dasmine_auth'); setIsAuthenticated(false); }} 
              className="bg-red-50 text-red-600 p-3 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
              title="Logout"
            >
              <LogOut size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-stone-100 sticky top-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-600 p-2 rounded-lg text-white"><PlusCircle size={20} /></div>
                <h3 className="text-xl font-bold">Ongeza Huduma</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Picha ya Huduma</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()} 
                    className={`relative aspect-video rounded-3xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${image ? 'border-pink-500' : 'border-stone-200 bg-stone-50 hover:bg-stone-100'}`}
                  >
                    {image ? (
                      <>
                        <img src={image} className="w-full h-full object-cover" alt="Preview" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white text-xs font-bold">Badilisha Picha</p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-6">
                        {isUploading ? (
                          <div className="animate-spin h-10 w-10 border-b-2 border-pink-500 mx-auto"></div>
                        ) : (
                          <>
                            <Upload size={40} className="text-stone-300 mx-auto mb-3" />
                            <p className="text-xs text-stone-500">Bofya kupakia (Chini ya 800KB)</p>
                          </>
                        )}
                      </div>
                    )}
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                  </div>
                </div>

                <div className="space-y-4">
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Jina la Huduma (Mfano: Bridal Makeup)" className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
                  <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Bei (Mfano: TSh 50,000)" className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-pink-500 outline-none" />
                  <textarea rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Maelezo mafupi ya huduma hii..." className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-pink-500 outline-none resize-none"></textarea>
                </div>

                <button type="submit" disabled={isUploading} className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-5 rounded-2xl shadow-lg transition-all disabled:bg-stone-200">
                  Pakia Kwenye Website
                </button>
              </form>
            </div>
          </div>

          {/* List Side */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map(s => (
                <div key={s.id} className="bg-white p-5 rounded-[2rem] shadow-sm border border-stone-100 group relative hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-100">
                    <img src={s.imageUrl} className="w-full h-full object-cover" alt={s.title} />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-stone-800 text-xl">{s.title}</h4>
                    {s.price && <span className="text-pink-600 font-bold text-sm">{s.price}</span>}
                  </div>
                  <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed mb-6">{s.description}</p>
                  
                  <button 
                    onClick={() => onDeleteService(s.id)} 
                    className="flex items-center gap-2 text-red-500 hover:text-red-700 font-bold text-xs uppercase tracking-widest border-t border-stone-50 pt-4 w-full justify-center transition-colors"
                  >
                    <Trash2 size={14} /> Futa Huduma
                  </button>
                </div>
              ))}

              {services.length === 0 && (
                <div className="col-span-full text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-stone-200">
                  <ImageIcon size={64} className="text-stone-200 mx-auto mb-6" />
                  <p className="text-stone-400 font-light text-xl">Hakuna huduma iliyopakiwa bado.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-stone-100 py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 tracking-tighter">DASMINE BEAUTY SALOON</h2>
      <div className="flex justify-center space-x-10 mb-12">
        <a href="#huduma" className="text-stone-400 hover:text-pink-600 uppercase text-[11px] font-bold tracking-widest transition-colors">Huduma</a>
        <a href="#kuhusu" className="text-stone-400 hover:text-pink-600 uppercase text-[11px] font-bold tracking-widest transition-colors">Kuhusu</a>
        <a href="#mawasiliano" className="text-stone-400 hover:text-pink-600 uppercase text-[11px] font-bold tracking-widest transition-colors">Mawasiliano</a>
      </div>
      <div className="flex justify-center space-x-6 mb-12">
        <a href={`https://wa.me/${cleanNumber(CONTACT_DATA.whatsapp)}`} className="bg-stone-50 p-4 rounded-full text-stone-600 hover:bg-pink-600 hover:text-white transition-all"><MessageCircle size={20} /></a>
        <a href="#" className="bg-stone-50 p-4 rounded-full text-stone-600 hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} /></a>
        <a href={`tel:${cleanNumber(CONTACT_DATA.phone)}`} className="bg-stone-50 p-4 rounded-full text-stone-600 hover:bg-pink-600 hover:text-white transition-all"><Phone size={20} /></a>
      </div>
      <div className="w-20 h-0.5 bg-pink-100 mx-auto mb-12"></div>
      <p className="text-stone-400 text-xs tracking-widest uppercase">&copy; {new Date().getFullYear()} Dasmine Beauty Saloon. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  const [services, setServices] = useState<ServiceProduct[]>(() => {
    try {
      const saved = localStorage.getItem('dasmine_services');
      return saved ? JSON.parse(saved) : INITIAL_SERVICES;
    } catch (e) {
      return INITIAL_SERVICES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dasmine_services', JSON.stringify(services));
    } catch (e) {
      console.warn("Hifadhi imejaa!");
    }
  }, [services]);

  const addService = (newService: ServiceProduct) => {
    setServices(prev => [newService, ...prev]);
  };

  const deleteService = (id: string) => {
    if (confirm('Je, unataka kufuta huduma hii kabisa kwenye website yako?')) {
      setServices(prev => prev.filter(s => s.id !== id));
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#faf9f6] flex flex-col selection:bg-pink-100 selection:text-pink-600">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage services={services} />} />
            <Route path="/owner" element={<OwnerPanel services={services} onAddService={addService} onDeleteService={deleteService} />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Floating WhatsApp Action */}
        <a 
          href={`https://wa.me/${cleanNumber(CONTACT_DATA.whatsapp)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all animate-bounce"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </Router>
  );
}
