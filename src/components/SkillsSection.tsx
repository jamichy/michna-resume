
import { Code, Brain, BarChart3, Globe, Users } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: ["Python", "C/C++", "MATLAB", "TensorFlow", "PyTorch"]
    },
    {
      category: "AI & ML",
      icon: Brain,
      color: "from-green-500 to-green-600",
      skills: ["Deep Learning", "Neural Networks", "Reinforcement Learning", "Computer Vision"]
    },
    {
      category: "Data Science",
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      skills: ["Statistical Analysis", "Data Visualization", "Time Series", "Pandas"]
    },
    {
      category: "Languages",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
      skills: ["Czech (Native)", "English (B2)", "German (B1)"]
    },
    {
      category: "Leadership",
      icon: Users,
      color: "from-red-500 to-red-600",
      skills: ["Team Management", "Project Leadership", "Process Optimization", "Mentoring"]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Core Competencies</h2>
        <p className="text-sm text-slate-600">Technical skills and expertise</p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-medium text-slate-900">{category.category}</h3>
              </div>
              
              <div className="pl-11 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span className="text-sm text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
