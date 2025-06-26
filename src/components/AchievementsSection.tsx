
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AchievementsSection = () => {
  const achievements = [
    {
      place: "1st",
      competition: "Regional Economics Olympiad",
      year: "2019/2020",
      medal: "🥇"
    },
    {
      place: "4th",
      competition: "Internet Mathematical Olympiad (Czech Republic)",
      year: "2019/2020",
      medal: "🏅"
    },
    {
      place: "2nd",
      competition: "Scientific Tetrathlon, Ostrava-Zábřeh",
      year: "2019/2020",
      medal: "🥈"
    },
    {
      place: "6th",
      competition: "Physics Brawl International, Senior Category",
      year: "2019/2020",
      medal: "🌍"
    },
    {
      place: "2nd",
      competition: "International Competition DUEL 2018, Category B",
      year: "2018",
      medal: "🥈"
    },
    {
      place: "3rd",
      competition: "Regional Mathematical Olympiad, 67th Edition, Category B",
      year: "Various years",
      medal: "🥉"
    }
  ];

  const interests = [
    "Programming", "Mathematics", "Economics", "Rock Climbing", "High-altitude Hiking"
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
            <div className="w-1 h-8 bg-yellow-500 rounded-full"></div>
            Competitions & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <span className="text-2xl">{achievement.medal}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-yellow-700 border-yellow-300">
                      {achievement.place} place
                    </Badge>
                    <span className="text-sm text-slate-500">{achievement.year}</span>
                  </div>
                  <p className="text-slate-700 font-medium">{achievement.competition}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-slate-700 font-semibold mb-2">🏆 Special Recognition:</p>
            <p className="text-slate-600">Student of the Year - City of Bílovec (2018)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            Interests & Hobbies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-indigo-700 bg-indigo-100 hover:scale-105 transition-transform">
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
