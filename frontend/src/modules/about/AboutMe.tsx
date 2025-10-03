
const AboutMe = () => {
  
  return (
    <section className="py-20 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 fade-in  `}
        >
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid md:grid-cols-1 gap-12 lg:gap-20 items-start">
          {/* About Text */}
          <div
            className={`space-y-6 fade-in  `}
            style={{ animationDelay: "0.1s" }}
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Hi, I’m Saleheen Uddin Sakin
              </h3>
              <p className="body-text mb-4">
                I’m a passionate <strong>Full Stack Developer</strong> with
                hands-on experience in building modern web applications using{" "}
                <strong>React, Node.js, Express, and MongoDB</strong>. I enjoy
                solving real-world problems through clean, efficient, and
                scalable code.
              </p>
              <p className="body-text">
                I have worked on projects like <em>PaisaHiPaisa</em> (a digital
                wallet system),
                <em>Blood Lagbe</em> (a voluntary blood donation platform), and
                a <em>Library Management System</em>. My expertise includes REST
                APIs, JWT authentication, Redux Toolkit, TypeScript, and
                Database aggregation. Currently, I am pursuing my{" "}
                <strong>BSc. in CSE at KUET</strong>, with a CGPA of 3.49.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-sm text-text-light uppercase tracking-wide mb-1">
                  Name:
                </p>
                <p className="text-foreground font-medium">
                  Saleheen Uddin Sakin
                </p>
              </div>
              <div>
                <p className="text-sm text-text-light uppercase tracking-wide mb-1">
                  Email:
                </p>
                <p className="text-foreground font-medium">
                  saleheen.sakin@gmail.com
                </p>
              </div>
              <div>
                <p className="text-sm text-text-light uppercase tracking-wide mb-1">
                  From:
                </p>
                <p className="text-foreground font-medium">
                  Khulna, Bangladesh
                </p>
              </div>
              <div>
                <p className="text-sm text-text-light uppercase tracking-wide mb-1">
                  Github:
                </p>
                <a
                  href="https://github.com/sakincse21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-foreground font-medium">@sakincse21</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;