'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, TrendingUp, ClipboardList, Users, FileCheck, Rocket, Phone, FileSignature, Layers, Code, ShieldCheck, ArrowLeft, Mail, Loader2, Send } from 'lucide-react';

// --- PROP TYPE (új sor) ---
type PageWithBackProps = { onBack: () => void };

// --- ALOLDAL KOMPONENSEK ---

const ContactPage = ({ onBack }: PageWithBackProps) => (
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

const PrivacyPage = ({ onBack }: PageWithBackProps) => (
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
            Jelen Adatkezelési Tájékoztató célja, hogy tájékoztatást nyújtson arról, hogyan kezeljük és védjük az Ön személyes adatait.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Kezelt adatok köre</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Név</li>
            <li>Cégnév</li>
            <li>Email cím</li>
            <li>Telefonszám</li>
            <li>Üzenet tartalma</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Jogalap</h2>
          <p>Az adatkezelés jogalapja az Ön hozzájárulása.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Adattovábbítás</h2>
          <p>Partnereinknek csak hozzájárulással továbbítjuk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Jogok</h2>
          <p>Bármikor kérheti az adatok törlését vagy módosítását.</p>
        </section>
      </div>
    </div>
  </div>
);

const TermsPage = ({ onBack }: PageWithBackProps) => (
  <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-8">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
      <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium">
        <ArrowLeft className="w-5 h-5 mr-2" /> Vissza a főoldalra
      </button>
      
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Általános Szerződési Feltételek (ÁSZF)</h1>
      
      <div className="prose prose-slate max-w-none text-gray-600 space-y-6">

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Általános rendelkezések</h2>
          <p>A weboldal használatával Ön elfogadja a jelen feltételeket.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. A szolgáltatás tárgya</h2>
          <p>Közvetítői tevékenység vállalatirányítási és gyártásirányítási rendszerek kiválasztásához.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Díjazás</h2>
          <p>A szolgáltatás az ajánlatkérőnek teljesen díjmentes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Felelősségkorlátozás</h2>
          <p>A partnerek szolgáltatásaiért nem vállalunk felelősséget.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Vegyes rendelkezések</h2>
          <p>A feltételek bármikor módosulhatnak.</p>
        </section>

      </div>
    </div>
  </div>
);

// --- ŰRLAP LOGIKA ---

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Vállalatirányítás (ERP)',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/laszlo.turoczi@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            interest: formData.interest,
            message: formData.message,
            _subject: `Új érdeklődő: ${formData.name}`,
            _template: 'table',
            _captcha: 'false', 
            _autoresponse: "Köszönjük megkeresését!"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', interest: 'Vállalatirányítás (ERP)', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-3xl mx-auto bg-white text-slate-800 rounded-xl shadow-2xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Köszönjük megkeresését!</h2>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full"
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
              className="w-full p-3 border border-gray-300 rounded"
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
              className="w-full p-3 border border-gray-300 rounded"
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
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Megoldás</label>
            <select 
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded bg-white"
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
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Üzenet</label>
          <textarea 
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded text-lg shadow-md flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Küldés...
            </>
          ) : (
            <>
              Visszahívás kérése
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        {status === 'error' && (
          <div className="bg-red-50 text-red-600 p-3 text-center rounded">
            Hiba történt, próbálja újra.
          </div>
        )}

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

  const scrollToForm = () => {
    if (activePage !== 'landing') {
      setActivePage('landing');
      setTimeout(() => {
        const el = document.getElementById('kapcsolat-urlap');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('kapcsolat-urlap');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => setActivePage('landing');

  if (activePage === 'contact') return <ContactPage onBack={goHome} />;
  if (activePage === 'privacy') return <PrivacyPage onBack={goHome} />;
  if (activePage === 'terms') return <TermsPage onBack={goHome} />;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* HERO */}
      <header className="relative text-white py-32 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('hatter.png')" }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
          >
            Megtaláljuk Önnek a tökéletes vállalatirányítási vagy gyártásirányítási szoftvert
            <br/>
            <span className="text-blue-300">A legjobb piaci áron</span>
          </h1>
          
          <p 
            className="text-2xl text-white mb-10 max-w-2xl font-medium mx-auto"
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}
          >
            Kiterjedt partnerhálózatunk versenyez az Ön projektjéért.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-xl text-lg"
          >
            Ingyenes konzultáció kérése
          </button>

        </div>
      </header>

      {/* MIÉRT MINKET */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">Miért válasszon minket?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Legjobb ár-érték arány</h3>
              <p className="text-gray-600 text-sm">
                Versenyeztetjük a partnereket.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Tökéletes illeszkedés</h3>
              <p className="text-gray-600 text-sm">
                Szoftverek az Ön igényeire szabva.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Időmegtakarítás</h3>
              <p className="text-gray-600 text-sm">
                Nem kell heteket kutatni.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Komplex szolgáltatás</h3>
              <p className="text-gray-600 text-sm">
                Szoftver + pályázati támogatás.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FÓKUSZTERÜLETEK */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">Fókuszterületek</h2>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Egyedi Szoftver */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Egyedi Szoftverek
              </div>
              <img src="egyedi.png" className="w-full h-56 object-cover" />
              <div className="p-6 text-center flex flex-col items-center">
                <Code className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-xl mb-2">Testreszabott megoldások</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Ha a dobozos megoldás nem elég.
                </p>
                <button onClick={scrollToForm} className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-lg">
                  Érdekel
                </button>
              </div>
            </div>

            {/* ERP */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Vállalatirányítás (ERP)
              </div>
              <img src="erp.png" className="w-full h-56 object-cover" />
              <div className="p-6 text-center flex flex-col items-center">
                <ClipboardList className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-xl mb-2">Teljes körű integráció</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Készlet, pénzügy, HR egy rendszerben.
                </p>
                <button onClick={scrollToForm} className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-lg">
                  Érdekel
                </button>
              </div>
            </div>

            {/* MES */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Gyártásirányítás (MES)
              </div>
              <img src="mes.png" className="w-full h-56 object-cover" />
              <div className="p-6 text-center flex flex-col items-center">
                <Rocket className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-xl mb-2">Termelés optimalizálás</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Valós idejű termeléskövetés.
                </p>
                <button onClick={scrollToForm} className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-lg">
                  Érdekel
                </button>
              </div>
            </div>

            {/* Pályázatírás */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Pályázatírás
              </div>
              <img src="palyazat.png" className="w-full h-56 object-cover" />
              <div className="p-6 text-center flex flex-col items-center">
                <FileSignature className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-xl mb-2">Forrásteremtés</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Segítünk megtalálni a forrásokat.
                </p>
                <button onClick={scrollToForm} className="w-full border-2 border-orange-500 text-orange-500 py-2 rounded-lg">
                  Érdekel
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HOGYAN DOLGOZUNK */}
      <section className="py-16 px-4 bg-white">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Hogyan dolgozunk?</h2>

          <div className="flex flex-col md:flex-row justify-between text-center relative">

            <div className="hidden md:block absolute top-1/3 left-0 w-full h-1 bg-gray-200"></div>

            <div className="bg-white p-4 w-full md:w-1/4 mb-8 md:mb-0">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <ClipboardList className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Igényfelmérés</h4>
              <p className="text-sm text-gray-500">Megértjük a működését.</p>
            </div>

            <div className="bg-white p-4 w-full md:w-1/4 mb-8 md:mb-0">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Versenyeztetés</h4>
              <p className="text-sm text-gray-500">Kiválasztjuk a legjobb gyártókat.</p>
            </div>

            <div className="bg-white p-4 w-full md:w-1/4 mb-8 md:mb-0">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <FileCheck className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Legjobb ajánlatok</h4>
              <p className="text-sm text-gray-500">Csak bevált partnerekkel dolgozunk.</p>
            </div>

            <div className="bg-white p-4 w-full md:w-1/4 mb-8 md:mb-0">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <Rocket className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <h4 className="font-bold text-lg">Megvalósítás</h4>
              <p className="text-sm text-gray-500">Támogatjuk a bevezetést.</p>
            </div>

          </div>

        </div>
      </section>

      {/* MENNYIBE KERÜL */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">

        <div className="max-w-4xl mx-auto text-center">

          <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
            <ShieldCheck className="w-12 h-12 text-green-600" />
          </div>

          <h2 className="text-3xl font-bold mb-6">Mennyibe kerül ez Önnek?</h2>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">

            <h3 className="text-2xl font-bold text-green-600 mb-4">A szolgáltatás teljesen díjmentes.</h3>

            <p className="text-lg text-slate-600">
              Nincs rejtett költség. A jutalékot a partnerek fizetik.
            </p>

            <div className="my-6 w-16 h-1 bg-green-200 mx-auto rounded-full"></div>

            <p className="text-base text-slate-500">
              Ön ugyanazt az árat (vagy kedvezőbbet) kapja, mintha közvetlenül a gyártót keresné fel.
            </p>

          </div>

        </div>
      </section>

      {/* KAPCSOLAT FORM */}
      <section id="kapcsolat-urlap" className="py-16 px-4 bg-blue-900 text-white">
        <LeadForm />
      </section>

      {/* LÁBLÉC */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">

        <div className="flex justify-center gap-6 mb-4">
          <button onClick={() => setActivePage('contact')} className="hover:text-white">
            Kapcsolat
          </button>
          <button onClick={() => setActivePage('privacy')} className="hover:text-white">
            Adatvédelem
          </button>
          <button onClick={() => setActivePage('terms')} className="hover:text-white">
            ÁSZF
          </button>
        </div>

        <p>&copy; 2025 ERP & MES Solutions. Minden jog fenntartva.</p>

      </footer>

    </div>
  );
}
