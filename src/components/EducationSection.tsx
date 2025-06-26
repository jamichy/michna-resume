
import { GraduationCap, BookOpen, Award, ExternalLink } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Master's Degree (Ing.)",
      field: "Mathematical Engineering",
      school: "Czech Technical University in Prague",
      faculty: "Faculty of Nuclear Sciences and Physical Engineering",
      period: "2023–2025",
      thesis: "Solution of the phase problem in crystallography by machine learning methods",
      supervisor: "Ing. Pavel Strachota, Ph.D.",
      thesisLink: "https://dspace.cvut.cz/handle/10467/123414"
    },
    {
      degree: "Bachelor's Degree (Bc.)",
      field: "Mathematical Engineering – Mathematical Modeling",
      school: "Czech Technical University in Prague",
      faculty: "Faculty of Nuclear Sciences and Physical Engineering",
      period: "2020–2023",
      thesis: "Automatic stock exchange trading based on fundamental data and reinforcement learning algorithms",
      supervisor: "Ing. Pavel Strachota, Ph.D.",
      thesisLink: "https://dspace.cvut.cz/handle/10467/111459"
    },
    {
      degree: "High School Diploma",
      field: "General Education",
      school: "Mikuláš Koperník Grammar School",
      location: "Bílovec",
      period: "2016–2020",
      thesis: null
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Academic Background</h2>
          <p className="text-slate-600">Educational foundation and research focus</p>
        </div>
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-purple-200 pl-6 hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  {index === 0 ? <Award className="w-4 h-4 text-purple-600" /> : 
                   index === 1 ? <BookOpen className="w-4 h-4 text-purple-600" /> : 
                   <GraduationCap className="w-4 h-4 text-purple-600" />}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{edu.degree}</h3>
              </div>
              <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                {edu.period}
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-lg font-medium text-purple-600 mb-1">{edu.field}</p>
              <p className="text-slate-700 font-medium">{edu.school}</p>
              {edu.faculty && (
                <p className="text-slate-600 text-sm">{edu.faculty}</p>
              )}
              {edu.location && (
                <p className="text-slate-600 text-sm">{edu.location}</p>
              )}
            </div>
            
            {edu.thesis && (
              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-slate-700 mb-1">Thesis:</p>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 italic mb-2">{edu.thesis}</p>
                    {edu.supervisor && (
                      <p className="text-xs text-slate-500">Supervisor: {edu.supervisor}</p>
                    )}
                  </div>
                  {edu.thesisLink && (
                    <a
                      href={edu.thesisLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-xs font-medium transition-colors flex-shrink-0"
                    >
                      View Thesis
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
