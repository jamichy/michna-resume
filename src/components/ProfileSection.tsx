
import { User, MapPin, Calendar, Briefcase, Search } from "lucide-react";

export const ProfileSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="space-y-8">
        {/* Top Section: Image and Brief Info */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-[210px] h-[280px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/2d89ab98-bf9d-46d6-bfcb-20839389678e.png" 
                alt="Jakub Michna" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Brief Professional Info */}
          <div className="flex-1 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Professional Profile</h2>
                  <p className="text-slate-600">Who I am and what drives me</p>
                </div>
              </div>
              
              <div className="space-y-2 text-slate-700">
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Born: June 7, 2001</span>
                </p>
              </div>

              {/* Currently Looking for Opportunities */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Currently Looking for New Opportunities</h3>
                </div>
                <p className="text-green-700 mb-3">Seeking challenging positions in business development, data analytics, or technical leadership</p>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Available for immediate start</li>
                  <li>• Open to remote, hybrid, or on-site positions</li>
                  <li>• Interested in international opportunities</li>
                </ul>
              </div>
            </div>
            
            <div className="text-slate-700">
              <p>
                As a Mathematical Engineering graduate with a strong foundation in analytical thinking and problem-solving, I bridge the gap between complex mathematical concepts and practical business applications.
              </p>
              <p className="mt-4">
                My experience spans from leading data processing teams to driving international business development, 
                always with a focus on leveraging mathematical models and technological innovation to create value.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <MapPin className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
              <p className="text-sm font-medium text-slate-900">Prague, Czech Republic</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Calendar className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Experience</p>
              <p className="text-sm font-medium text-slate-900">4+ Years</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Briefcase className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Current Role</p>
              <p className="text-sm font-medium text-slate-900">Business Development Manager</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <User className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Education</p>
              <p className="text-sm font-medium text-slate-900">Mathematical Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
