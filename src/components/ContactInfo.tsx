
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

export const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "+420 704 737 745",
      href: "tel:+420704737745"
    },
    {
      icon: Mail,
      label: "Email",
      value: "jmichna5@gmail.com",
      href: "mailto:jmichna5@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Professional Profile",
      href: "https://cz.linkedin.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Czech Republic",
      href: null
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Get In Touch</h2>
        <p className="text-sm text-slate-600">Ready to connect and collaborate</p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Icon className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                <p className="text-sm font-medium text-slate-900 truncate">{item.value}</p>
              </div>
            </div>
          );

          return item.href ? (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </div>
  );
};
