import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // จัดการส่งฟอร์มที่นี่
    console.log("Form submitted:", formData);
    alert("ขอบคุณสำหรับข้อความของคุณ! (นี่เป็นเพียง demo)");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "อีเมล",
      content: "p1chchakorn.pb@gmail.com",
      link: "mailto:p1chchakorn.pb@gmail.com"
    },
    {
      icon: Phone,
      title: "โทรศัพท์",
      content: "(+66) 96-929-6846",
      link: "tel:+66969296846"
    },
    {
      icon: MapPin,
      title: "ที่อยู่",
      content: "Bangkok, Thailand",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">ติดต่อฉัน</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            หากคุณมีโปรเจกต์ที่น่าสนใจหรือต้องการคุยเรื่องงาน สามารถติดต่อฉันได้ทางช่องทางด้านล่าง
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              <a href={info.link} className="text-blue-600 hover:underline">
                {info.content}
              </a>
            ) : (
              <span className="text-slate-600">{info.content}</span>
            );

            return (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-slate-900 mb-2">{info.title}</h3>
                {content}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
