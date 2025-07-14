
import { ContactInfo } from "@/components/ContactInfo";
import { ProfileSection } from "@/components/ProfileSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-12">
            <ProfileSection />
            <ExperienceSection />
            <EducationSection />
            <AchievementsSection />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6 lg:space-y-8">
            <SkillsSection />
          </div>
        </div>
      </div>

      {/* Contact Section at the end */}
      <ContactInfo />
    </div>
  );
};

export default Index;
