
export const ProfileSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 p-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">JM</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-1">Proč zrovna já?</h2>
            <p className="text-slate-600 text-lg">Co dělám jinak než ostatní</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                🎯 <span>Můj unikátní přístup</span>
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Kombinuji <strong>matematickou preciznost</strong> s <strong>obchodním myšlením</strong>. 
                Netvořím jen algoritmy - vytvářím řešení, která skutečně <em>vydělávají peníze</em> a 
                <em>šetří čas</em>. Mám zkušenosti s automatizovanými trading systémy, které generovaly 
                skutečné zisky.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                💪 <span>Proč jsem efektivní</span>
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Nejsem jen programátor ani jen manažer. Rozumím <strong>celému procesu</strong> - 
                od analýzy dat přes vývoj algoritmů až po implementaci v reálném prostředí. 
                Umím vést týmy a zároveň "si zamotat ruce".
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                🚀 <span>Konkrétní výsledky</span>
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Vytvořil jsem trading bot s pozitivním ROI pomocí reinforcement learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Optimalizoval jsem obchodní procesy a zvýšil efektivitu týmů</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Vedl jsem technické týmy a úspěšně dodával komplexní projekty</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                🎓 <span>Moje filosofie</span>
              </h3>
              <p className="text-slate-700 leading-relaxed italic">
                "Nejlepší technologie je ta, která <strong>funguje v praxi</strong> a přináší 
                <strong>měřitelné výsledky</strong>. Nezajímá mě jen to, jak něco funguje, 
                ale především <em>proč</em> to má smysl dělat."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
