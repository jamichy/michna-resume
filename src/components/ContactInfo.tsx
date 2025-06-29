
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
    <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-xl text-blue-200 font-light">
            Ready to connect and collaborate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-blue-200 uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-lg font-medium text-white">{item.value}</p>
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
    </section>
  );
};
