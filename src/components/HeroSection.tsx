
export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 animate-pulse">
            <span className="text-blue-100 text-lg font-medium">🚀 Připraven změnit váš byznys</span>
          </div>
          
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-pulse">
              Ing. Jakub Michna
            </span>
          </h1>
          
          <div className="text-3xl lg:text-4xl mb-8 font-light leading-relaxed max-w-5xl mx-auto">
            <span className="text-white">Nevytvářím jen </span>
            <span className="text-yellow-300 font-semibold animate-pulse">algoritmy</span>
            <span className="text-white"> – vytvářím </span>
            <span className="text-green-300 font-semibold animate-pulse">peníze</span>
            <span className="text-white"> pomocí </span>
            <span className="text-purple-300 font-semibold animate-pulse">AI</span>
          </div>
          
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 mb-8 border border-red-400/30 max-w-4xl mx-auto">
            <p className="text-xl text-orange-100 font-medium">
              💰 Můj trading bot vydělal skutečné peníze. Vaše firma může být další.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-lg text-slate-300 mb-8">
            <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Machine Learning Engineer</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <span>Business Developer</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
              <span>Team Leader</span>
            </div>
          </div>
          
          <div className="text-xl text-blue-200 font-light bg-slate-800/30 rounded-lg p-4 inline-block">
            🎯 Specializace: <span className="text-yellow-300 font-medium">Automatizované obchodní systémy</span> & <span className="text-green-300 font-medium">Reinforcement Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};
