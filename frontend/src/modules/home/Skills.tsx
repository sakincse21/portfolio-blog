import { Card } from "@/components/ui/card";
import { TiltEffect } from "@/components/ui/tilt-effect";
import Image from "next/image";

const Skills = () => {

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "HTML",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      title: "Technologies/Frameworks",
      skills: [
        {
          name: "ReactJS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "NodeJS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Express",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Redux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "JWT",
          logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Mongoose",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
        },
      ],
    },
    {
      title: "Academics",
      skills: [
        {
          name: "C",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "JavaFX",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Arduino",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
      ],
    },
  ];

  return (
    <section className="py-10 px-6 bg-surface/50 ">
      <div className="max-w-7xl mx-auto">
        {/* <div
          className={`text-center mb-16 fade-in`}
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="body-text max-w-2xl mx-auto">
          </p>
        </div> */}

        <div className="space-y-2 text-center py-10">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Skills & Technologies</h2>
            <p className="text-muted-foreground text-center mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My technical expertise that helps me bring ideas into life.
            </p>
          </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`fade-in`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Title */}
              <div className="text-center mb-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-hero-accent to-accent-warm mx-auto rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <TiltEffect key={skill.name}>
                    <Card className="cosmic-card group">
                      <div
                        className={`p-6 text-center transition-all duration-300 hover:scale-105 fade-in`}
                        style={{
                          animationDelay: `${
                            categoryIndex * 0.2 + skillIndex * 0.1
                          }s`,
                        }}
                      >
                        {/* Skill Logo */}
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                            width={48} height={48}
                            style={{
                              filter:
                                skill.name === "Express" || skill.name === "JWT"
                                  ? "invert(1) brightness(0.8)"
                                  : "none",
                            }}
                          />
                        </div>
                        {/* Skill Name */}
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-hero-accent transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </Card>
                  </TiltEffect>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        {/* <div
          className={`mt-20 text-center fade-in ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="cosmic-card p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="body-text">
              I'm constantly exploring new technologies and expanding my skill
              set. Currently diving deeper into advanced React patterns, cloud
              technologies, and modern development practices to stay at the
              forefront of web development.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;