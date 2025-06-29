
import { Trophy, Target, Heart } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      place: "1st",
      competition: "Regional Economics Olympiad",
      year: "2019/2020",
      type: "academic"
    },
    {
      place: "4th",
      competition: "Internet Mathematical Olympiad (Czech Republic)",
      year: "2019/2020",
      type: "academic"
    },
    {
      place: "2nd",
      competition: "Scientific Tetrathlon, Ostrava-Zábřeh",
      year: "2019/2020",
      type: "academic"
    },
    {
      place: "6th",
      competition: "Physics Brawl International, Senior Category",
      year: "2019/2020",
      type: "international"
    },
    {
      place: "2nd",
      competition: "International Competition DUEL 2018, Category B",
      year: "2018",
      type: "international"
    }
  ];

  const interests = [
    { 
      name: "Programming", 
      icon: "💻"
    },
    { 
      name: "Mathematics", 
      icon: "📊"
    },
    { 
      name: "Economics", 
      icon: "📈"
    },
    { 
      name: "Rock Climbing", 
      icon: "🧗"
    },
    { 
      name: "High Mountain Hiking", 
      icon: "🏔️"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Achievements */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Achievements & Recognition</h2>
            <p className="text-slate-600">Competition results and academic honors</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-yellow-50 transition-colors">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                  achievement.place === '1st' ? 'bg-yellow-500' :
                  achievement.place === '2nd' ? 'bg-slate-400' :
                  achievement.place === '3rd' ? 'bg-amber-600' :
                  'bg-blue-500'
                }`}>
                  {achievement.place}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900 mb-1">{achievement.competition}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">{achievement.year}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    achievement.type === 'international' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {achievement.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-yellow-600" />
            <h3 className="font-semibold text-slate-900">Special Recognition</h3>
          </div>
          <p className="text-slate-700">
            <strong>Student of the Year</strong> – City of Bílovec (2018)
          </p>
        </div>
      </section>

      {/* Interests */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Personal Interests</h2>
            <p className="text-slate-600">What drives me beyond work</p>
          </div>
        </div>

        <div className="grid gap-4">
          {interests.map((interest, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-indigo-50 transition-colors group">
              <span className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">{interest.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{interest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
