import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Pichchakorn Kongmai</h3>
            <p className="text-slate-400">
              นักศึกษาวิทยาการคอมพิวเตอร์และนักพัฒนาเว็บที่หลงใหลในเทคโนโลยีและนวัตกรรม
            </p>
          </div>

          <div>
            <h3 className="mb-4">ลิงก์ด่วน</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-400 hover:text-white transition-colors">
                เกี่ยวกับ
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-white transition-colors">
                ผลงาน
              </a>
              <a href="#contact" className="block text-slate-400 hover:text-white transition-colors">
                ติดต่อ
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4">ติดตามฉัน</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Pichchakorn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:p1chchakorn.pb@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
