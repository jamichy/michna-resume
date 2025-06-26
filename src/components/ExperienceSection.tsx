
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Business Development Manager",
      company: "Textilkvalitne.cz (Pavel Michna)",
      period: "07/2022 – Present",
      responsibilities: [
        "Development of international business relationships",
        "Optimization of internal company processes"
      ]
    },
    {
      title: "Data Processing Team Leader",
      company: "Renturi s.r.o.",
      period: "07/2020 – 09/2020",
      responsibilities: [
        "Data team coordination",
        "Work process organization"
      ]
    },
    {
      title: "Chief Technician",
      company: "Student Festival Unplugged GMK",
      period: "09/2018 – 06/2020",
      responsibilities: [
        "Technical festival support",
        "Technical team leadership"
      ]
    },
    {
      title: "Mathematical Seminar Manager",
      company: "KoKoS",
      period: "09/2016 – 06/2020",
      responsibilities: [
        "Organization of competitive series and camps",
        "Team leadership and problem creation"
      ]
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
          <div className="w-1 h-8 bg-green-500 rounded-full"></div>
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-slate-200 pl-6 hover:border-green-500 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                <Badge variant="outline" className="text-slate-600">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-lg text-blue-600 font-medium mb-3">{exp.company}</p>
              <ul className="space-y-1">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
