import { Card } from "./ui/card";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "LOGIN LEARNING CO., LTD.",
      period: "เมษายน 2025 - ปัจจุบัน",
      description: [
        "เริ่มต้นในตำแหน่ง Web Developer Intern (เมษายน - มิถุนายน 2025) และดำเนินต่อในตำแหน่ง Web Developer แบบ Full-time (กรกฎาคม 2025 - ปัจจุบัน)",
        "พัฒนาเว็บแอปพลิเคชันและสอนการสร้างโปรเจกต์เว็บให้กับนักศึกษาและผู้เชี่ยวชาญ (เช่น ระบบจองคิว)",
        "จัดเวิร์คช็อปเกี่ยวกับการเขียนโปรแกรมและพื้นฐาน IoT",
        "ปรับปรุงการออกแบบ Front-end และกระบวนการ Deployment สำหรับโปรเจกต์ของลูกค้า"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">ประสบการณ์การทำงาน</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ประสบการณ์ในสายงานพัฒนาเว็บแอปพลิเคชันและการสอน
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex gap-3 mb-2 md:mb-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900">{exp.title}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 ml-13">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-600 flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
