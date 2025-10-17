import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-slate-900">Pichchakorn Kongmai</h1>
            <h2 className="text-blue-600">Computer Science Student & Web Developer</h2>
          </div>
          
          <p className="text-slate-600">
            นักศึกษาวิทยาการคอมพิวเตอร์ที่หลงใหลในเกม เทคโนโลยี และนวัตกรรม 
            มีทักษะการบริหารเวลาที่ดี ทำงานภายใต้ความกดดันได้ดี และพร้อมที่จะเรียนรู้สิ่งใหม่ๆ เสมอ
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/Pichchakorn" target="_blank" rel="noopener noreferrer" 
               className="text-slate-600 hover:text-slate-900 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:p1chchakorn.pb@gmail.com"
               className="text-slate-600 hover:text-slate-900 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <ImageWithFallback
                src="src/components/img/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
