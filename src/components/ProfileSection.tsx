
export const ProfileSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-blue-100 flex-shrink-0">
          <img 
            src="/lovable-uploads/2d89ab98-bf9d-46d6-bfcb-20839389678e.png" 
            alt="Jakub Michna" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-slate-900 mb-1">Professional Profile</h2>
          <p className="text-slate-600 mb-3">Who I am and what drives me</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>Born: June 7, 2001</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>Currently in Prague</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          As a <strong>Mathematical Engineering graduate</strong> with a passion for cutting-edge technology, 
          I bridge the gap between complex mathematical concepts and real-world business applications. 
          My journey spans from <em>algorithm development</em> and <em>machine learning</em> to 
          <em>business development</em> and <em>team leadership</em>.
        </p>
        
        <p className="text-base leading-relaxed text-slate-600">
          I excel in analytical thinking and systematic problem-solving approaches, with particular 
          expertise in modern technologies, programming, and data science. My experience ranges from 
          developing automated trading systems using reinforcement learning to leading technical teams 
          and optimizing business processes.
        </p>
      </div>
    </section>
  );
};
