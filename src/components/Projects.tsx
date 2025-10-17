import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "VocabBoost - Vocab Learning Platform",
      description: "แพลตฟอร์มเว็บแอปพลิเคชันแบบอินเทอร์แอคทีฟสำหรับเรียนรู้และฝึกฝนคำศัพท์ภาษาอังกฤษจากบริบทของข้อสอบจริง มีระบบแบบฝึกหัดแบบเกมมิฟิเคชันและการติดตามความก้าวหน้า",
      image: "https://images.unsplash.com/photo-1588912914017-923900a34710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2NhYnVsYXJ5JTIwbGVhcm5pbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzYwNzEyNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Firebase", "Google API", "Figma"],
      liveUrl: "https://vocabboost-30a9c.web.app/",
      githubUrl: "https://github.com/Pichchakorn"
    },
    {
      title: "DZQ Clinic - Healthcare Management System",
      description: "ระบบจัดการคลินิกที่ครบวงจร สำหรับจัดการข้อมูลผู้ป่วย การนัดหมาย และบริการทางการแพทย์ ออกแบบมาเพื่อเพิ่มประสิทธิภาพการทำงานของคลินิกและปรับปรุงประสบการณ์ของผู้ใช้บริการ",
      image: "https://images.unsplash.com/photo-1666886573452-9dc8ce8f5cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjA3MTMyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Firebase", "Healthcare", "UI/UX"],
      liveUrl: "https://dzq-clinic.web.app/",
      githubUrl: "https://github.com/Pichchakorn"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">ผลงานของฉัน</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            โปรเจกต์ที่ผมได้พัฒนา แสดงถึงความสามารถและประสบการณ์ในด้านการพัฒนาเว็บแอปพลิเคชัน
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
