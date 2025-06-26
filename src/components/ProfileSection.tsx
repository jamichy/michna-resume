
export const ProfileSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-blue-100">
          <img 
            src="/lovable-uploads/2d89ab98-bf9d-46d6-bfcb-20839389678e.png" 
            alt="Jakub Michna" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Professional Profile</h2>
          <p className="text-slate-600">Who I am and what drives me</p>
        </div>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          Jako <strong>absolvent matematického inženýrství</strong> s vášní pro špičkové technologie 
          propojuji složité matematické koncepty s praktickými obchodními aplikacemi. 
          Moje cesta zahrnuje <em>vývoj algoritmů</em> a <em>strojové učení</em> až po 
          <em>obchodní rozvoj</em> a <em>vedení týmů</em>.
        </p>
        
        <p className="text-base leading-relaxed text-slate-600">
          Vynikám v analytickém myšlení a systematických přístupech k řešení problémů, 
          se specializací na moderní technologie, programování a datovou vědu. Moje zkušenosti 
          sahají od vyvíjení automatizovaných obchodních systémů pomocí reinforcement learning 
          až po vedení technických týmů a optimalizaci obchodních procesů.
        </p>
      </div>
    </section>
  );
};
