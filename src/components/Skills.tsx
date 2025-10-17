import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        "C", "C++", "Python", "JavaScript", 
        "HTML5", "CSS3"
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        "React", "Bootstrap", "Responsive Design"
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        "Firebase", "Google API"
      ]
    },
    {
      category: "Tools & Design",
      skills: [
        "Git", "Figma", "UI/UX Design"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">ทักษะและความสามารถ</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            เทคโนโลยีและเครื่องมือที่ผมใช้ในการพัฒนาโปรเจกต์ต่างๆ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-slate-900 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
