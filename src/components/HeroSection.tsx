

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            <span className="font-thin">Ing.</span> Jakub Michna
          </h1>
          <p className="text-xl lg:text-2xl text-blue-200 mb-8 font-light">
            Mathematical Engineering Graduate & Technology Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-wide text-slate-300">
            <span>Machine Learning</span>
            <span className="text-blue-400">•</span>
            <span>Business Development</span>
            <span className="text-blue-400">•</span>
            <span>Data Science</span>
            <span className="text-blue-400">•</span>
            <span>Team Leadership</span>
          </div>
        </div>
      </div>
    </section>
  );
};

