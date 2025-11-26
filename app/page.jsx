'use client';
// FIX: Kikapcsolja a TypeScript szigorú típusellenőrzését.
// @ts-nocheck 

import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, TrendingUp, ClipboardList, Users, FileCheck, Rocket, Phone, FileSignature, Layers, Code, ShieldCheck, ArrowLeft, Mail, Loader2, Send } from 'lucide-react';

// --- SEO HELPER KOMPONENSEK & KONFIGURÁCIÓ ---

const SITE_URL = "https://szoftvernavigator.hu"; // Feltételezett éles domain
const SITE_NAME = "SzoftverNavigátor";

/**
 * Ez a komponens felel a <head> tartalmának dinamikus frissítéséért.
 * Next.js App Router és sima React környezetben is működik kliens oldalon.
 */
const SEOMetadata = ({ title, description, path }) => {
  useEffect(() => {
    // Title frissítése
    document.title = `${title} | ${SITE_NAME}`;
    
    // Meta description frissítése vagy létrehozása
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Canonical URL kezelése (fontos a duplikáció elkerülése végett)
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = `${SITE_URL}${path || ''}`;

  }, [title, description, path]);

  return null;
};

/**
 * Strukturált adat (JSON-LD) generálása AI keresők (Google, ChatGPT) számára.
 * Ez segít a gépeknek megérteni, hogy ez egy "Szolgáltatás".
 */
const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SzoftverNavigátor - ERP és MES Rendszerek",
    "image": `${SITE_URL}/hatter.png`,
    "description": "Megtaláljuk Önnek a tökéletes Vállalatirányítási (ERP) és Gyártásirányítási (MES) szoftvert a legjobb piaci áron. Ingyenes közvetítés és tanácsadás.",
    "url": SITE_URL,
    "telephone": "+36204209501",
    "email": "laszlo.turoczi@gmail.com",
    "priceRange": "Ingyenes",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "HU"
    },
    "areaServed": "HU",
    "sameAs": [
       // Ide jöhetne Facebook/LinkedIn link ha van
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "HUF",
      "description": "Ingyenes szoftver kiválasztási tanácsadás és versenyeztetés."
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// --- ALOLDAL KOMPONENSEK ---

const ContactPage = ({ onBack }) => (
  <article className="min-h-screen bg-slate-50 text-slate-800 font-sans p-8">
    <SEOMetadata 
      title="Kapcsolat és Ügyfélszolgálat" 
      description="Lépjen kapcsolatba velünk! Telefonos ügyfélszolgálat és email elérhetőség ERP és MES szoftver tanácsadáshoz."
      path="/kapcsolat"
    />
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative z-10">
      <button 
        type="button"
        onClick={onBack} 
        aria-label="Vissza a főoldalra"
        // FIX: Megnövelt érintési terület (p-3) és negatív margó a vizuális igazításhoz
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium p-3 -ml-3 rounded-lg hover:bg-blue-50 touch-manipulation"
      >
        <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" /> Vissza a főoldalra
      </button>
      
      <h1 className="text-3xl font-bold mb-8 text-slate-900 border-b pb-4">Kapcsolat</h1>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Phone className="w-6 h-6 text-blue-600" aria-hidden="true" />
          </div>
          <div itemScope itemType="http://schema.org/ContactPoint">
            <h3 className="font-bold text-lg mb-1">Telefonos Ügyfélszolgálat</h3>
            <p className="text-gray-600 mb-2">Hívjon minket bizalommal hétköznap 9:00 és 17:00 között.</p>
            <a href="tel:+36204209501" itemProp="telephone" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors inline-block py-2">
              +36 20 420 9501
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 opacity-75">
          <div className="bg-gray-100 p-3 rounded-full">
            <Mail className="w-6 h-6 text-gray-500" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-gray-600">laszlo.turoczi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </article>
);

const PrivacyPage = ({ onBack }) => (
  <article className="min-h-screen bg-slate-50 text-slate-800 font-sans p-8">
    <SEOMetadata 
      title="Adatkezelési Tájékoztató" 
      description="Ismerje meg, hogyan kezeljük személyes adatait a szoftvernavigátor szolgáltatás használata során. GDPR konform adatvédelem."
      path="/adatvedelem"
    />
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative z-10">
      <button 
        type="button"
        onClick={onBack} 
        aria-label="Vissza a főoldalra"
        // FIX: Megnövelt érintési terület (p-3)
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium p-3 -ml-3 rounded-lg hover:bg-blue-50 touch-manipulation"
      >
        <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" /> Vissza a főoldalra
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
  </article>
);

const TermsPage = ({ onBack }) => (
  <article className="min-h-screen bg-slate-50 text-slate-800 font-sans p-8">
    <SEOMetadata 
      title="Általános Szerződési Feltételek" 
      description="Ismerje meg szolgáltatásunk Általános Szerződési Feltételeit (ÁSZF). Díjmentes szoftver-közvetítés feltételei."
      path="/aszf"
    />
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative z-10">
      <button 
        type="button"
        onClick={onBack} 
        aria-label="Vissza a főoldalra"
        // FIX: Megnövelt érintési terület (p-3)
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium p-3 -ml-3 rounded-lg hover:bg-blue-50 touch-manipulation"
      >
        <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" /> Vissza a főoldalra
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
  </article>
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

            _autoresponse: 
              "Köszönjük megkeresését!\nÜzenete és adatai sikeresen megérkeztek rendszerünkbe.\nBiztosítjuk, hogy az Ön által megadott adatokat bizalmasan kezeljük, és harmadik félnek csak az Ön előzetes jóváhagyásával adjuk át.\nSzakértő kollégánk hamarosan (általában 24 órán belül) felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén, hogy egyeztesse Önnel a részleteket.\n\nÜdvözlettel:\nA szoftvernavigator.hu csapata"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', interest: 'Vállalatirányítás (ERP)', message: '' });
        // Conversion tracking eventet ide lehetne beszúrni (pl. Google Ads, Facebook Pixel)
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
      <div className="max-w-3xl mx-auto bg-white text-slate-800 rounded-xl shadow-2xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-300 relative z-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Köszönjük megkeresését!</h2>
        <p className="text-lg text-slate-600 mb-8">
          Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken (általában 24 órán belül).
        </p>
        <button 
          type="button"
          onClick={() => setStatus('idle')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 focus:ring-4 focus:ring-orange-300 touch-manipulation"
        >
          Új üzenet küldése
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white text-slate-800 rounded-xl shadow-2xl p-8 md:p-12 relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
        Kérjen ajánlatot kötelezettségek nélkül!
      </h2>

      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/laszlo.turoczi@gmail.com"
        method="POST"
        className="space-y-6 relative"
        aria-label="Ajánlatkérő űrlap"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <input
          type="hidden"
          name="_autoresponse"
          value={
"Köszönjük megkeresését!\nÜzenete és adatai sikeresen megérkeztek rendszerünkbe.\nBiztosítjuk, hogy az Ön által megadott adatokat bizalmasan kezeljük, és harmadik félnek csak az Ön előzetes jóváhagyásával adjuk át.\nSzakértő kollégánk hamarosan (általában 24 órán belül) felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén, hogy egyeztesse Önnel a részleteket.\n\nÜdvözlettel:\nA szoftvernavigator.hu csapata"
          }
        />

        <input
          type="hidden"
          name="_subject"
          value="Új érdeklődő érkezett a weboldalról"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">Név*</label>
            <input 
              id="name"
              required
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
              placeholder="Az Ön neve"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-bold mb-2">Cégnév*</label>
            <input 
              id="company"
              required
              name="company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
              placeholder="Vállalkozás neve"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email cím*</label>
            <input 
              id="email"
              required
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
              placeholder="pelda@email.hu"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-bold mb-2">Melyik megoldás érdekli?</label>
            <select 
              id="interest"
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
          <label htmlFor="phone" className="block text-sm font-bold mb-2">Telefonszám*</label>
          <input 
            id="phone"
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="+36 20 123 4567"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold mb-2">Rövid üzenet</label>
          <textarea 
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="Írja le röviden igényeit..."
          ></textarea>
        </div>

        {status === 'error' && (
            <div role="alert" className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
              Hiba történt a küldés során. Kérjük, próbálja újra, vagy hívjon minket telefonon!
            </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded text-lg transition duration-300 shadow-md flex items-center justify-center gap-2 focus:ring-4 focus:ring-orange-300 touch-manipulation"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
              Küldés folyamatban...
            </>
          ) : (
            <>
              Visszahívás kérése
              <Send className="w-5 h-5" aria-hidden="true" />
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

  const handleScrollAndPageChange = (target, page) => {
    // Eseménykövetés (Analytics) helye lehet itt
    if (target) {
        window.location.hash = target;
    }
    if (page) {
        setActivePage(page);
    }
  };

  const goHome = () => setActivePage('landing');
  
  if (activePage === 'contact') return <ContactPage onBack={goHome} />;
  if (activePage === 'privacy') return <PrivacyPage onBack={goHome} />;
  if (activePage === 'terms') return <TermsPage onBack={goHome} />;

  return (
    // Szemantikus main wrapper a fő tartalomnak
    // FIX: relative és z-index hozzáadása a fő tárolóhoz a biztonság kedvéért
    <main className="min-h-screen bg-white text-slate-800 font-sans relative z-10">
      
      {/* DINAMIKUS SEO META ADATOK BETÖLTÉSE */}
      <SEOMetadata 
        title="ERP és MES Szoftver Tanácsadás | Legjobb Árak" 
        description="Vállalatirányítási (ERP) és Gyártásirányítási (MES) szoftverek kiválasztása, versenyeztetése és pályázati források felkutatása díjmentesen."
        path="/"
      />
      <StructuredData />

      {/* HERO SZEKCIÓ */}
      <header className="relative text-white py-32 px-4 overflow-hidden" role="banner">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          // A background image CSS-ben van, de SEO szempontból jobb lenne egy valódi <img className="absolute inset-0 z-0 object-cover w-full h-full" ... />
          // Mivel a design nem változhat, ezt így hagyjuk, de a szöveges tartalom kompenzálja.
          style={{ backgroundImage: "url('hatter.png')" }}
          aria-hidden="true"
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
          >
            Megtaláljuk Önnek a tökéletes Vállalatirányítási és Gyártásirányítási szoftvert <br/>
            <span className="text-blue-300">A legjobb piaci áron</span>
          </h1>
          
          <p 
            className="text-xl text-white mb-10 max-w-2xl font-medium"
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}
          >
            Kiterjedt partnerhálózatunk versenyez az Ön projektjéért, hogy garantáltan a legjobb megoldást kapja.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="#kapcsolat-urlap"
              onClick={(e) => { e.preventDefault(); handleScrollAndPageChange('kapcsolat-urlap', null); }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl shadow-orange-500/20 text-lg text-center touch-manipulation"
              aria-label="Ugrás az ingyenes konzultáció űrlaphoz"
            >
              Ingyenes Konzultáció Kérése
            </a>
            
            <a 
              href="tel:+36204209501"
              // FIX: p-2 padding hozzáadva a telefonszám linkhez mobilon
              className="flex items-center gap-2 text-white hover:text-orange-100 transition-colors cursor-pointer mt-4 p-2 rounded-lg"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
            >
              <Phone className="w-6 h-6" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} aria-hidden="true" />
              <span className="font-bold text-xl">+36 20 420 9501</span>
            </a>
          </div>
        </div>
      </header>

      {/* MIÉRT VÁLASSZON MINKET? */}
      <section className="py-16 px-4 bg-blue-50 relative z-10" aria-label="Előnyeink">
        <div className="max-w-7xl mx-auto text-center"> 
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Miért válasszon minket?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <TrendingUp className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-xl mb-2">Legjobb ár-érték arány</h3>
              <p className="text-gray-600 text-sm">
                Versenyztetjük a partnereket, így Ön garantáltan a legjobb ajánlatot kapja.
              </p>
            </article>

            <article className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <CheckCircle className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-xl mb-2">Tökéletes illeszkedés</h3>
              <p className="text-gray-600 text-sm">
                Pontosan az Ön iparágára és méretére szabott megoldásokat szállítunk.
              </p>
            </article>

            <article className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Clock className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-xl mb-2">Időmegtakarítás</h3>
              <p className="text-gray-600 text-sm">
                Levesszük a terhet a válláról a piackutatástól a kiválasztásig.
              </p>
            </article>

            <article className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Layers className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-xl mb-2">Komplex Szolgáltatás</h3>
              <p className="text-gray-600 text-sm">
                Nemcsak szoftvert, hanem a bevezetéshez szükséges pályázati forrást is segítünk megszerezni.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* FÓKUSZTERÜLETEK */}
      <section className="py-16 px-4 bg-red-50 relative z-10" aria-label="Szolgáltatások">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Fókuszterületek</h2>
          
          <div className="grid md:grid-cols-4 gap-8">

            {/* Egyedi Szoftverek */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Egyedi Szoftverek
              </div>
              <div className="p-0">
                 <img 
                    src="egyedi.png" 
                    alt="Egyedi Szoftverfejlesztés illusztráció és kódolás" 
                    className="w-full h-56 object-cover" 
                    loading="lazy"
                 />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                 <div className="mb-3">
                   <Code className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Testreszabott Megoldások</h3>
                <p className="text-gray-600 text-sm mb-6">Teljesen az Ön üzleti folyamataira szabott szoftverek, amikor a dobozos megoldás nem elég.</p>
                <div className="mt-auto w-full relative z-20">
                  <a href="#kapcsolat-urlap" onClick={(e) => { e.preventDefault(); handleScrollAndPageChange('kapcsolat-urlap', null); }} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors inline-block touch-manipulation">
                    Érdekel
                  </a>
                </div>
              </div>
            </article>

            {/* ERP */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Vállalatirányítás (ERP)
              </div>
              <div className="p-0">
                <img 
                    src="erp.png" 
                    alt="Vállalatirányítási rendszer (ERP) szoftver felület dashboard" 
                    className="w-full h-56 object-cover" 
                    loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="mb-3">
                   <ClipboardList className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Teljes körű integráció</h3>
                <p className="text-gray-600 text-sm mb-6">Pénzügy, készletkezelés, beszerzés és HR folyamatok egyetlen átlátható rendszerben.</p>
                <div className="mt-auto w-full relative z-20">
                  <a href="#kapcsolat-urlap" onClick={(e) => { e.preventDefault(); handleScrollAndPageChange('kapcsolat-urlap', null); }} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors inline-block touch-manipulation">
                    Érdekel
                  </a>
                </div>
              </div>
            </article>

            {/* MES */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Gyártásirányítás (MES)
              </div>
              <div className="p-0">
                 <img 
                    src="mes.png" 
                    alt="Gyártásirányítási rendszer (MES) termeléskövetés monitoron" 
                    className="w-full h-56 object-cover" 
                    loading="lazy"
                 />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                 <div className="mb-3">
                   <Rocket className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Termelésoptimalizálás</h3>
                <p className="text-gray-600 text-sm mb-6">Valós idejű termeléskövetés, gépkihasználtság (OEE) mérés és minőségbiztosítás.</p>
                <div className="mt-auto w-full relative z-20">
                  <a href="#kapcsolat-urlap" onClick={(e) => { e.preventDefault(); handleScrollAndPageChange('kapcsolat-urlap', null); }} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors inline-block touch-manipulation">
                    Érdekel
                  </a>
                </div>
              </div>
            </article>

            {/* Pályázatírás */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="bg-blue-900 text-white py-4 text-center font-bold text-lg">
                Pályázatírás
              </div>
              <div className="p-0">
                 <img 
                    src="palyazat.png" 
                    alt="Sikeres pályázatírás és dokumentáció készítés digitális eszközökkel" 
                    className="w-full h-56 object-cover" 
                    loading="lazy"
                 />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow p-6">
                 <div className="mb-3">
                   <FileSignature className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold mb-2 text-xl">Forrásteremtés</h3>
                <p className="text-gray-600 text-sm mb-6">Szakértő segítség pályázati források felkutatásában és a teljes dokumentáció összeállításában.</p>
                <div className="mt-auto w-full relative z-20">
                  <a href="#kapcsolat-urlap" onClick={(e) => { e.preventDefault(); handleScrollAndPageChange('kapcsolat-urlap', null); }} className="w-full py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors inline-block touch-manipulation">
                    Érdekel
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

           {/* HOGYAN DOLGOZUNK? */}
      <section className="py-16 px-4 bg-white relative z-10" aria-label="Munkafolyamat">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">Hogyan dolgozunk?</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center text-center px-4">
            <div className="hidden md:block absolute top-1/3 left-0 w-full h-1 bg-gray-200 -z-10" aria-hidden="true"></div>

            <article className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">1</div>
              <ClipboardList className="w-8 h-8 mx-auto text-blue-600 mb-2" aria-hidden="true" />
              <h3 className="font-bold text-lg">Igényfelmérés</h3>
              <p className="text-sm text-gray-500 mt-2">Felmérjük vállalata pontos igényeit és folyamatait.</p>
            </article>

            <article className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">2</div>
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" aria-hidden="true" />
              <h3 className="font-bold text-lg">Versenyeztetés</h3>
              <p className="text-sm text-gray-500 mt-2">Megkeressük a legalkalmasabb szolgáltatókat a piacon.</p>
            </article>

            <article className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">3</div>
              <FileCheck className="w-8 h-8 mx-auto text-blue-600 mb-2" aria-hidden="true" />
              <h3 className="font-bold text-lg">Legjobb Ajánlatok</h3>
              <p className="text-sm text-gray-500 mt-2">Bemutatjuk Önnek a megszűrt, legjobb ár-érték arányú opciókat.</p>
            </article>

            <article className="mb-8 md:mb-0 bg-white p-4 w-full md:w-1/4">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">4</div>
              <Rocket className="w-8 h-8 mx-auto text-blue-600 mb-2" aria-hidden="true" />
              <h3 className="font-bold text-lg">Megvalósítás</h3>
              <p className="text-sm text-gray-500 mt-2">Támogatjuk a bevezetést a sikeres átadásig.</p>
            </article>
          </div>
        </div>
      </section>


      {/* MENNYIBE KERÜL? */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200 relative z-10" aria-label="Árazás">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-green-600" aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Mennyibe kerül ez Önnek?</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-green-600 mb-4">A szolgáltatásunk Önnek teljesen DÍJMENTES.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Biztos lehet benne, hogy nincsenek rejtett költségek. Munkadíjunkat és jutalékunkat kizárólag a szoftvergyártó partnereink fizetik a sikeres közvetítés után.
            </p>
            <div className="my-6 w-16 h-1 bg-green-200 mx-auto rounded-full" aria-hidden="true"></div>
            <p className="text-base text-slate-500">
              Ez a modell garantálja, hogy Ön <span className="font-bold text-slate-700">ugyanazt az árat</span> (vagy partnkedvezményeink révén gyakran még kedvezőbbet) kapja, mintha közvetlenül a gyártót keresné fel – miközben megspórolja a kutatással és versenyeztetéssel töltött heteket.
            </p>
          </div>
        </div>
      </section>

      {/* KAPCSOLATI ŰRLAP */}
      <section id="kapcsolat-urlap" className="py-16 px-4 bg-blue-900 text-white relative z-10" aria-label="Kapcsolatfelvétel">
        <LeadForm />
      </section>

      {/* LÁBLÉC */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800 relative z-20" role="contentinfo">
        <nav className="flex justify-center gap-6 mb-4 relative z-[9999] pointer-events-auto" aria-label="Lábléc menü">
          <button
            type="button"
            onClick={() => handleScrollAndPageChange(null, 'contact')} 
            // FIX: Padding növelése mobilos kattintáshoz
            className="hover:text-white transition-colors cursor-pointer p-3 rounded-lg touch-manipulation"
          >
            Kapcsolat
          </button>
          <button 
            type="button"
            onClick={() => handleScrollAndPageChange(null, 'privacy')} 
            // FIX: Padding növelése mobilos kattintáshoz
            className="hover:text-white transition-colors cursor-pointer p-3 rounded-lg touch-manipulation"
          >
            Adatvédelem
          </button>
          <button 
            type="button"
            onClick={() => handleScrollAndPageChange(null, 'terms')} 
            // FIX: Padding növelése mobilos kattintáshoz
            className="hover:text-white transition-colors cursor-pointer p-3 rounded-lg touch-manipulation"
          >
            ÁSZF
          </button>
        </nav>
        <p>&copy; 2025 ERP & MES Solutions. Minden jog fenntartva.</p>
      </footer>

    </main>
  );
}
