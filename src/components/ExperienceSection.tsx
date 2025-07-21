import { Briefcase, Calendar, ArrowRight, ExternalLink } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Business Development Manager",
      company: "Textilkvalitne.cz", 
      companyUrl: "https://www.textilkvalitne.cz",
      period: "July 2022 - July 2025",
      description: "Leading international business expansion and process optimization",
      achievements: [
        "Developed and maintained strategic international business relationships",
        "Implemented process optimization strategies that improved operational efficiency",
        "Led cross-functional initiatives to streamline internal company workflows"
      ]
    },
    {
      title: "Data Processing Team Leader",
      company: "Renturi s.r.o.",
      companyUrl: "https://renturi.cz",
      period: "July 2020 – September 2020",
      description: "Coordinated data analytics team and workflow optimization",
      achievements: [
        "Managed and coordinated a team of data analysts",
        "Organized and streamlined data processing workflows"
      ]
    },
    {
      title: "Mathematical Seminar Manager",
      company: "KoKoS Organization",
      companyUrl: "http://kokos.gmk.cz/uvod",
      period: "September 2016 – June 2020",
      description: "Educational program leadership and content development",
      achievements: [
        "Organized competitive mathematical series and training camps",
        "Led educational teams and developed problem-solving content",
        "Mentored young mathematicians and competitive programmers"
      ]
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Professional Experience</h2>
          <p className="text-slate-600">Career progression and key achievements</p>
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {index < experiences.length - 1 && (
              <div className="absolute left-6 top-20 bottom-0 w-px bg-slate-200"></div>
            )}
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                  {exp.companyUrl && (
                    <>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-green-600">{exp.company}</span>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-green-600 hover:text-green-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </>
                  )}
                  {!exp.companyUrl && (
                    <>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                      <span className="text-lg font-medium text-green-600">{exp.company}</span>
                    </>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-600">{exp.period}</span>
                </div>
                
                <p className="text-slate-700 mb-4 italic">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
