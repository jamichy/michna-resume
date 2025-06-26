
export const ProfileSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-lg">JM</span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Professional Profile</h2>
          <p className="text-slate-600">Who I am and what drives me</p>
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
