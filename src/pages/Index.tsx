
import { ContactInfo } from "@/components/ContactInfo";
import { ProfileSection } from "@/components/ProfileSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header with name and contact */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Ing. Jakub Michna
          </h1>
          <div className="text-xl text-slate-600 mb-8">
            Mathematical Engineering Graduate & Business Development Professional
          </div>
          <ContactInfo />
        </div>

        <div className="space-y-12">
          {/* Profile Section */}
          <section className="animate-fade-in">
            <ProfileSection />
          </section>

          <Separator className="my-8" />

          {/* Experience Section */}
          <section className="animate-fade-in">
            <ExperienceSection />
          </section>

          <Separator className="my-8" />

          {/* Education Section */}
          <section className="animate-fade-in">
            <EducationSection />
          </section>

          <Separator className="my-8" />

          {/* Skills Section */}
          <section className="animate-fade-in">
            <SkillsSection />
          </section>

          <Separator className="my-8" />

          {/* Achievements Section */}
          <section className="animate-fade-in">
            <AchievementsSection />
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>© 2024 Jakub Michna. This resume demonstrates modern web development skills.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
