
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C/C++", "MATLAB"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Deep Learning", "Neural Networks"],
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Data Science",
      skills: ["Pandas", "Statistical Methods", "Data Visualization", "Time Series Analysis"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Languages",
      skills: ["English (B2)", "German (B1)", "Czech (Native)"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      category: "Business Skills",
      skills: ["Business Development", "Team Leadership", "Project Management", "Process Optimization"],
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
          <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
          Skills & Technologies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} className={`${category.color} hover:scale-105 transition-transform`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
