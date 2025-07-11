
import { User, MapPin, Calendar, Briefcase, Search } from "lucide-react";

export const ProfileSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 lg:p-8">
      <div className="space-y-6 lg:space-y-8">
        {/* Top Section: Image and Brief Info */}
        <div className="flex flex-col sm:flex-row lg:flex-row gap-6 lg:gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0 self-center sm:self-start">
            <div className="w-[180px] h-[240px] sm:w-[190px] sm:h-[250px] lg:w-[210px] lg:h-[280px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden shadow-lg mx-auto sm:mx-0">
              <img src="/lovable-uploads/2d89ab98-bf9d-46d6-bfcb-20839389678e.png" alt="Jakub Michna" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Brief Professional Info */}
          <div className="flex-1 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Professional Profile</h2>
                  <p className="text-sm sm:text-base text-slate-600">Who I am and what drives me</p>
                </div>
              </div>
              
              <div className="space-y-2 text-slate-700">
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Born: June 7, 2001</span>
                </p>
              </div>

              {/* Currently Looking for Opportunities - Mobile Optimized */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 text-sm sm:text-base">Currently Looking for New Opportunities</h3>
                    <p className="text-green-700 text-xs sm:text-sm mt-1">
                      Open to full-time positions in tech, data science, and business development roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-slate-700 text-sm sm:text-base space-y-3 sm:space-y-4">
              <p>
                As a Mathematical Engineering graduate with a strong foundation in analytical thinking and problem-solving, I bridge the gap between complex mathematical concepts and practical business applications.
              </p>
              <p>
                My experience spans from leading data processing teams to driving international business development, 
                always with a focus on leveraging mathematical models and technological innovation to create value.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Info Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
              <p className="text-sm font-medium text-slate-900">Prague, Czech Republic</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Experience</p>
              <p className="text-sm font-medium text-slate-900">4+ Years</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Current Role</p>
              <p className="text-sm font-medium text-slate-900">Looking for New Opportunities</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Education</p>
              <p className="text-sm font-medium text-slate-900">Mathematical Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
