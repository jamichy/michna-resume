
export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            <span className="font-thin">Ing.</span> 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Jakub Michna</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-200 mb-8 font-light">
            Mathematical Engineering
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-wide text-slate-300 mb-8">
            <span className="px-3 py-1 bg-blue-500/20 rounded-full">Machine Learning</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Business Development</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full">Data Science</span>
            <span className="px-3 py-1 bg-green-500/20 rounded-full">Team Leadership</span>
          </div>
          <div className="text-lg text-blue-100 font-light">
            Bridging analytical thinking with practical business solutions
          </div>
        </div>
      </div>
    </section>
  );
};
