
export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
            <span className="text-blue-200 text-sm font-medium">🚀 Dostupný pro nové příležitosti</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Ing. Jakub Michna
            </span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-blue-100 mb-6 font-light leading-relaxed max-w-4xl mx-auto">
            Transformuji <span className="text-yellow-300 font-medium">matematické koncepty</span> na 
            <span className="text-green-300 font-medium"> obchodní řešení</span> pomocí 
            <span className="text-purple-300 font-medium"> AI a strojového učení</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-base text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Machine Learning Engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <span>Business Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
              <span>Team Leader</span>
            </div>
          </div>
          
          <div className="text-lg text-blue-200/80 font-light">
            💡 Specializuji se na automatizované obchodní systémy a reinforcement learning
          </div>
        </div>
      </div>
    </section>
  );
};
