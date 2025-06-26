
import { Phone, Mail, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ContactInfo = () => {
  return (
    <Card className="inline-block p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-wrap justify-center gap-6 text-slate-700">
        <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Phone size={18} />
          <span className="font-medium">+420 704 737 745</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Mail size={18} />
          <a href="mailto:jmichna5@gmail.com" className="font-medium hover:underline">
            jmichna5@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Linkedin size={18} />
          <a href="https://cz.linkedin.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </Card>
  );
};
