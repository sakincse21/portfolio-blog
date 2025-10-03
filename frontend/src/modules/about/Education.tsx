import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education = () => {
  

  const education = [
    {
      icon: GraduationCap,
      title: "B.Sc. in Computer Science & Engineering",
      description: "Khulna University of Engineering & Technology (KUET), 2022 – Present | Current CGPA: 3.49"
    },
    {
      icon: BookOpen,
      title: "Higher Secondary Certificate (HSC)",
      description: "Govt. Rajendra College, Faridpur | GPA: 5.00 | Science, 2021"
    },
    {
      icon: School,
      title: "Secondary School Certificate (SSC)",
      description: "Faridpur Zilla School | GPA: 5.00 | Science, 2019"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 fade-in  `}>
          <h2 className="section-heading">Education</h2>
          <p className="body-text max-w-2xl mx-auto">
            Here is a quick overview of my academic background.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {education.map((edu, index) => (
            <div
              key={edu.title}
              className={`bg-surface/80 rounded-xl cosmic-card p-6 hover-lift fade-in max-w-sm w-full sm:w-auto  `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-hero-accent/20 to-accent-warm/20 rounded-lg flex items-center justify-center mb-4">
                <edu.icon className="w-6 h-6 text-hero-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {edu.title}
              </h3>
              <p className="body-text text-sm">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;