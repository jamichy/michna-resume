
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EducationSection = () => {
  const education = [
    {
      degree: "Master's Degree (Ing.)",
      field: "Mathematical Engineering – Mathematical Modeling",
      school: "Czech Technical University in Prague – Faculty of Nuclear Sciences and Physical Engineering",
      period: "2020–2023",
      thesis: "Solution of the phase problem in crystallography by machine learning methods"
    },
    {
      degree: "Bachelor's Degree (Bc.)",
      field: "Mathematical Engineering",
      school: "Czech Technical University in Prague – Faculty of Nuclear Sciences and Physical Engineering",
      period: "2020–2023",
      thesis: "Automatic stock exchange trading based on fundamental data and reinforcement learning algorithms"
    },
    {
      degree: "High School Diploma",
      field: "General Education",
      school: "Mikuláš Koperník Grammar School in Bílovec",
      period: "2016–2020",
      thesis: null
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
          <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
          Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-slate-200 pl-6 hover:border-purple-500 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-slate-800">{edu.degree}</h3>
                <Badge variant="outline" className="text-slate-600">
                  {edu.period}
                </Badge>
              </div>
              <p className="text-lg text-purple-600 font-medium mb-2">{edu.field}</p>
              <p className="text-slate-700 mb-2">{edu.school}</p>
              {edu.thesis && (
                <p className="text-sm text-slate-600 italic">
                  <strong>Thesis:</strong> {edu.thesis}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
