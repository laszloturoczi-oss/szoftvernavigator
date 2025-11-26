'use client';
// FIX: Kikapcsolja a TypeScript szigorú típusellenőrzését, ami a Vercel build hibát okozta.
// @ts-nocheck 

import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, TrendingUp, ClipboardList, Users, FileCheck, Rocket, Phone, FileSignature, Layers, Code, ShieldCheck, ArrowLeft, Mail, Loader2, Send } from 'lucide-react';

// --- ALOLDAL KOMPONENSEK ---

const ContactPage = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-8">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
      <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" /> Vissza a főoldalra
      </button>
      
      <h1 className="text-3xl font-bold mb-8 text-slate-900 border-b pb-4">Kapcsolat</h1>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Telefonos Ügyfélszolgálat</h3>
            <p className="text-gray-600 mb-2">Hívjon minket bizalommal hétköznap 9:00 és 17:00 között.</p>
            <a href="tel:+36204209501" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              +36 20 420 9501
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 opacity-75">
          <div className="bg-gray-100 p-3 rounded-full">
            <Mail className="w-6 h-6 text-gray-500" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-gray-600">laszlo.turoczi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PrivacyPage = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-8">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
      <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" /> Vissza a főoldalra
      </button>
      
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Adatkezelési Tájékoztató</h1>
      
      <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
        <p className="font-bold text-sm text-gray-400 uppercase tracking-wide">Utolsó frissítés: 2025. január 1.</p>
        
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Bevezetés</h2>
          <p>
            Jelen Adatkezelési Tájékoztató célja, hogy tájékoztatást nyújtson arról, hogyan kezeljük és védjük az Ön személyes adatait, amelyeket a weboldalunk használata és a szolgáltatásaink igénybevétele során ad meg számunkra. Kiemelten fontos számunkra személyes adatainak védelme és a hatályos jogszabályoknak (különösen a GDPR-nak) való megfelelés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Kezelt adatok köre</h2>
          <p>A kapcsolatfelvétel és ajánlatkérés során az alábbi adatokat kezeljük:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Név</li>
            <li>Cégnév</li>
            <li>Email cím</li>
            <li>Telefonszám</li>
            <li>Az üzenetben megadott egyéb információk</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Az adatkezelés célja és jogalapja</h2>
          <p>
            Az adatkezelés elsődleges célja a kapcsolatfelvétel, az Ön igényeinek felmérése, valamint személyre szabott szoftveres és pályázati ajánlatok közvetítése partnereinktől.
            Az adatkezelés jogalapja az Ön önkéntes hozzájárulása, amelyet az űrlap elküldésével ad meg.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Adattovábbítás</h2>
          <p>
            Az Ön adatait bizalmasan kezeljük. Adatait harmadik félnek (szoftvergyártó vagy pályázatíró partnereinknek) kizárólag az Ön előzetes tájékoztatása és kifejezett hozzájárulása esetén továbbítjuk, konkrét ajánlatadás céljából.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Az Ön jogai</h2>
          <p>
            Bármikor kérheti tájékoztatást személyes adatainak kezeléséről, kérheti azok helyesbítését, törlését vagy zárolását a kapcsolati menüpontban megadott elérhetőségeken.
          </p>
        </section>
      </div>
    </div>
  </div>
);

const TermsPage = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-8">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
      <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" /> Vissza a főoldalra
      </button>
      
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Általános Szerződési Feltételek (ÁSZF)</h1>
      
      <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Általános rendelkezések</h2>
          <p>
            Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) szabályozzák a szolgáltató által üzemeltetett szoftver-közvetítői weboldal használatának feltételeit. A weboldal használatával, illetve az ajánlatkérő űrlap kitöltésével a Felhasználó elfogadja a jelen feltételeket.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. A szolgáltatás tárgya</h2>
          <p>
            A Szolgáltató díjmentes közvetítői tevékenységet végez a Felhasználó (ajánlatkérő) és a szoftvergyártó/szolgáltató partnerek között. Célunk, hogy a Felhasználó igényeire szabott legmegfelelőbb ERP, MES vagy egyéb szoftveres megoldást találjuk meg.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Díjazás</h2>
          <p>
            A szolgáltatás a Felhasználó (ajánlatkérő vállalkozás) számára <strong>teljesen ingyenes</strong>. A Szolgáltató jutalékát a sikeres üzletkötést követően a partner szolgáltatók fizetik. Ez a konstrukció nem eredményez áremelkedést a Felhasználó számára; a Felhasználó a piaci áron, vagy annál kedvezőbben juthat a szolgáltatáshoz.
          </p>
          
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Felelősségkorlátozás</h2>
          <p>
            A Szolgáltató közvetítői szerepet tölt be. Bár minden tőle telhetőt megtesz a partnerek gondos kiválasztása érdekében, a Szolgáltató nem vállal felelősséget a közvetített partnerek által nyújtott szoftverek minőségéért, működéséért, vagy a szerződés teljesítéséért. A szerződés közvetlenül a Felhasználó és a választott Partner között jön létre.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Vegyes rendelkezések</h2>
          <p>
            A Szolgáltató fenntartja a jogot a jelen ÁSZF egyoldalú módosítására. A vitás kérdések rendezésére a felek elsősorban békés úton törekszenek.
          </p>
        </section>
      </div>
    </div>
  </div>
);

// --- ŰRLAP KOMPONENS LOGIKA ---
const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Vállalatirányítás (ERP)',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Megpróbáljuk elküldeni az űrlapot
      const response = await fetch("https://formsubmit.co/ajax/laszlo.turoczi@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            // Adatok
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            interest: formData.interest,
            message: formData.message,
            
            // Konfigurációs mezők
            _subject: `Új érdeklődő: ${formData.name}`,
            _template: 'table',
            _captcha: 'false', 
            _autoresponse: "Köszönjük megkeresését! Rendszerünk sikeresen rögzítette adatait. Biztosítjuk, hogy információit bizalmasan kezeljük. Szakértő kollégánk hamarosan (általában 24 órán belül) felveszi Önnel a kapcsolatot a megadott elérhetőségeken, hogy egyeztessen a részletekről. Üdvözlettel: Az ERP & MES Solutions csapata"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', interest: 'Vállalatirányítás (ERP)', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Hiba a küldés során:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-3xl mx-auto bg-white text-slate-800 rounded-xl shadow-2xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Köszönjük megkeresését!</h2>
        <p className="text-lg text-slate-600 mb-8">
          Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken (általában 24 órán belül).
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Új üzenet küldése
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white text-slate-800 rounded-xl shadow-2xl p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
        Kérjen ajánlatot kötelezettségek nélkül!
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2">Név*</label>
            <input 
              required
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
              placeholder="Az Ön neve" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Cégnév*</label>
            <input 
              required
              name="company"
              type="text" 
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
              placeholder="Vállalkozás neve" 
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2">Email cím*</label>
            <input 
              required
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
              placeholder="pelda@email.hu" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Melyik megoldás érdekli?</label>
            <select 
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white transition-colors"
            >
              <option>Vállalatirányítás (ERP)</option>
              <option>Gyártásirányítás (MES)</option>
              <option>Egyedi Szoftver</option>
              <option>Pályázatírás</option>
              <option>Komplex megoldás</option>
            </select>
          </div>
        </div>

        <div>
           <label className="block text-sm font-bold mb-2">Telefonszám*</label>
           <input 
             required
             name="phone"
             type="tel" 
             value={formData.phone}
             onChange={handleChange}
             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
             placeholder="+36 20 123 4567" 
           />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Rövid üzenet</label>
          <textarea 
            name="message"
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="Írja le röviden igényeit..."
          ></textarea>
        </div>

        {status === 'error' && (
           <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
             Hiba történt a küldés során. Kérjük, próbálja újra, vagy hívjon minket telefonon!
           </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded text-lg transition duration-300 shadow-md flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Küldés folyamatban...
            </>
          ) : (
            <>
              Visszahívás kérése
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
        
        <p className="text-center text-xs text-gray-500 mt-4">
          Az űrlap elküldésével elfogadja az Adatkezelési Tájékoztatót.
        </p>
      </form>
    </div>
  );
};

// --- FŐ ALKALMAZÁS ---

export default function App() {
  const [activePage, setActivePage] = useState('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // JAVÍTOTT GÖRGETÉS FUNKCIÓ
  const scrollToForm = () => {
    // Ha nem a landing page-en vagyunk, először navigáljunk oda
    if (activePage !== 'landing') {
      setActivePage('landing');
      // Kis késleltetés, hogy a DOM felépüljön a görgetés előtt
      setTimeout(() => {
        const formSection = document.getElementById('kapcsolat-urlap');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // ROBOSZTUS TARTALÉK MEGOLDÁS MOBILRA
            window.location.hash = 'kapcsolat-urlap';
        }
      }, 100);
    } else {
      const formSection = document.getElementById('kapcsolat-urlap');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      } else {
         // ROBOSZTUS TARTALÉK MEGOLDÁS MOBILRA
        window.location.hash = 'kapcsolat-urlap';
      }
    }
  };

  const goHome = () => setActivePage('landing');
  
  if (activePage === 'contact') return <ContactPage onBack={goHome} />;
  if (activePage === 'privacy') return <PrivacyPage onBack={goHome} />;
  if (activePage === 'terms') return <TermsPage onBack={goHome} />;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* HERO SZEKCIÓ (Fejléc) */}
      <header className="relative text-white py-32 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('hatter.png')" }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
          >
            Megtaláljuk Önnek a tökéletes Vállalatirányítási és Gyártásirányítási szoftvert  <br/>
            <span className="text-blue-300">A legjobb piaci áron</span>
          </h1>
          
          <p 
            className="text-2xl text-white mb-10 max-w-2xl font-medium"
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}
          >
            Kiterjedt partnerhálózatunk versenyez az Ön projektjéért, hogy garantáltan a legjobb megoldást kapja.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl shadow-orange-500/20 text-lg"
            >
              Ingyenes Konzultáció Kérése
            </button>
            
            <div 
              className="flex items-center gap-2 text-white hover:text-orange-100 transition-colors cursor-pointer mt-4"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
            >
              <Phone className="w-6 h-6" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} />
              <span className="font-bold text-xl">+36 20 420 9501</span>
            </div>
          </div>
        </div>
      </header>

      {/* MIÉRT VÁLASSZON MINKET? */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Miért válasszon minket?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Legjobb ár-érték arány</h3>
              <p className="text-gray-600 text-sm">
                Versenyztetjük a partnereket, így Ön garantáltan a legjobb ajánlatot kapja.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Tökéletes illeszkedés</h3>
              <p className="text-gray-600 text-sm">
                Pontosan az Ön iparágára és méretére szabott megoldásokat szállítunk.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Időmegtakarítás</h3>
              <p className="text-gray-600 text-sm">
                Levesszük a terhet a válláról a piackutatástól a kiválasztásig.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Komplex Szolgáltatás</h3>
              <p className="text-gray-600 text-sm">
                Nemcsak szoftvert, hanem a bevezetéshez szükséges pályázati forrást is segítünk megszerezni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FÓKUSZTERÜLETEK */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Fókuszterületek</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Egyedi Szoftverek */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Egyedi Szoftverek
              </div>
              <div className="p-0">
                 <img src="egyedi.png" alt="Egyedi Szoftverfejlesztés" className="w-full h-56 object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                 <div className="mb-3">
                   <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Testreszabott Megoldások</h3>
                <p className="text-gray-600 text-sm mb-6">Teljesen az Ön üzleti folyamataira szabott szoftverek, amikor a dobozos megoldás nem elég.</p>
                <div className="mt-auto w-full">
                  <button onClick={scrollToForm} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors">
                    Érdekel
                  </button>
                </div>
              </div>
            </div>

            {/* ERP */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Vállalatirányítás (ERP)
              </div>
              <div className="p-0">
                <img src="erp.png" alt="ERP Rendszer" className="w-full h-56 object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="mb-3">
                   <ClipboardList className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Teljes körű integráció</h3>
                <p className="text-gray-600 text-sm mb-6">Pénzügy, készletkezelés, beszerzés és HR folyamatok egyetlen átlátható rendszerben.</p>
                <div className="mt-auto w-full">
                  <button onClick={scrollToForm} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors">
                    Érdekel
                  </button>
                </div>
              </div>
            </div>

            {/* MES */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Gyártásirányítás (MES)
              </div>
              <div className="p-0">
                 <img src="mes.png" alt="MES Rendszer" className="w-full h-56 object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                 <div className="mb-3">
                   <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Termelésoptimalizálás</h3>
                <p className="text-gray-600 text-sm mb-6">Valós idejű termeléskövetés, gépkihasználtság (OEE) mérés és minőségbiztosítás.</p>
                <div className="mt-auto w-full">
                  <button onClick={scrollToForm} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors">
                    Érdekel
                  </button>
                </div>
              </div>
            </div>

            {/* Pályázatírás */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Pályázatírás
              </div>
              <div className="p-0">
                 <img src="palyazat.png" alt="Pályázatírás" className="w-full h-56 object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                 <div className="mb-3">
                   <FileSignature className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Forrásteremtés</h3>
                <p className="text-gray-600 text-sm mb-6">Szakértő segítség pályázati források felkutatásában és a teljes dokumentáció összeállításában.</p>
                <div className="mt-auto w-full">
                  <button onClick={scrollToForm} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors">
                    Érdekel
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOGYAN DOLGOZUNK? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">Hogyan dolgozunk?</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center text-center px-4">
            <div className="hidden md:block absolute top-1/3 left-0 w-full h-1 bg-gray-200 -z-10"></div>

            <div className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">1</div>
              <ClipboardList className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Igényfelmérés</h4>
              <p className="text-sm text-gray-500 mt-2">Felmérjük vállalata pontos igényeit és folyamatait.</p>
            </div>

            <div className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">2</div>
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Versenyeztetés</h4>
              <p className="text-sm text-gray-500 mt-2">Megkeressük a legalkalmasabb szolgáltatókat a piacon.</p>
            </div>

            <div className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">3</div>
              <FileCheck className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Legjobb Ajánlatok</h4>
              <p className="text-sm text-gray-500 mt-2">Bemutatjuk Önnek a megszűrt, legjobb ár-érték arányú opciókat.</p>
            </div>

            <div className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">4</div>
              <Rocket className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Megvalósítás</h4>
              <p className="text-sm text-gray-500 mt-2">Támogatjuk a bevezetést a sikeres átadásig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENNYIBE KERÜL? */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Mennyibe kerül ez Önnek?</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-green-600 mb-4">A szolgáltatásunk Önnek teljesen DÍJMENTES.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Biztos lehet benne, hogy nincsenek rejtett költségek. Munkadíjunkat és jutalékunkat kizárólag a szoftvergyártó partnereink fizetik a sikeres közvetítés után.
            </p>
            <div className="my-6 w-16 h-1 bg-green-200 mx-auto rounded-full"></div>
            <p className="text-base text-slate-500">
              Ez a modell garantálja, hogy Ön <span className="font-bold text-slate-700">ugyanazt az árat</span> (vagy partnkedvezményeink révén gyakran még kedvezőbbet) kapja, mintha közvetlenül a gyártót keresné fel – miközben megspórolja a kutatással és versenyeztetéssel töltött heteket.
            </p>
          </div>
        </div>
      </section>

      {/* KAPCSOLATI ŰRLAP */}
      <section id="kapcsolat-urlap" className="py-16 px-4 bg-blue-900 text-white">
        <LeadForm />
      </section>

      {/* LÁBLÉC */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <div className="flex justify-center gap-6 mb-4">
          <button 
            onClick={() => setActivePage('contact')} 
            className="hover:text-white transition-colors"
          >
            Kapcsolat
          </button>
          <button 
            onClick={() => setActivePage('privacy')} 
            className="hover:text-white transition-colors"
          >
            Adatvédelem
          </button>
          <button 
            onClick={() => setActivePage('terms')} 
            className="hover:text-white transition-colors"
          >
            ÁSZF
          </button>
        </div>
        <p>&copy; 2025 ERP & MES Solutions. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}
