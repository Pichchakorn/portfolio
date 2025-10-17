import { Card } from "./ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "พัฒนาเว็บแอปพลิเคชันด้วย React และเทคโนโลยีสมัยใหม่"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "ออกแบบส่วนติดต่อผู้ใช้ที่สวยงามด้วย Figma"
    },
    {
      icon: Rocket,
      title: "Quick Learner",
      description: "พร้อมเรียนรู้และปรับตัวกับเทคโนโลยีใหม่ๆ"
    },
    {
      icon: Users,
      title: "Teaching & Sharing",
      description: "สอนการพัฒนาเว็บและแบ่งปันความรู้ให้ผู้อื่น"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">เกี่ยวกับฉัน</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            นักศึกษาวิทยาการคอมพิวเตอร์ที่หลงใหลในเกม เทคโนโลยี และนวัตกรรม 
            มีทักษะในการบริหารเวลาที่ดี สามารถทำงานภายใต้ความกดดันได้ดี 
            และมีทัศนคติเชิงบวกต่อการเรียนรู้และพัฒนาตนเอง
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-slate-900 mb-4">ประวัติการศึกษา</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-slate-900">ปริญญาตรี วิทยาการคอมพิวเตอร์</h4>
              <p className="text-slate-600">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)</p>
              <p className="text-slate-600">คณะวิทยาศาสตร์ประยุกต์ | 2021 - ปัจจุบัน | GPAX: 2.51</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
