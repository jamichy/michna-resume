
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProfileSection = () => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 leading-relaxed text-lg">
          Ambitious mathematical engineering graduate with experience in business development, 
          team leadership, and technical project management. I excel in analytical thinking, 
          systematic problem-solving approaches, and have a keen interest in modern technologies, 
          programming, and data science.
        </p>
      </CardContent>
    </Card>
  );
};
