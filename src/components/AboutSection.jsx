import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Data Analyst | Web Developer | Research Intern | ML Engineer
            </h3>

            <p className="text-muted-foreground">
              I’m Varun Swaminathan, a pre-final year B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Data Analytics at Sri Ramachandra Institute of Higher Education and Research. I’m a motivated and responsible individual who works well both independently and in team settings. I’m always eager to learn new skills, explore new ideas in my field, and take part in research. I have a strong interest in building websites and integrating them with AI and other advanced tools.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating solutions to complex
              and daily life solutions, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/projects/varun resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    I create stellar web experiences with modern technologies. From code to UI, I build responsive, accessible, and user-centered websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Machine Learning Engineer </h4>
                  <p className="text-muted-foreground">
                    As a student researcher and ML developer, I specialize in translating academic insights into practical, scalable AI solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analyst</h4>
                  <p className="text-muted-foreground text-justify">
                    I turn data into decisions — building analytical dashboards, predictive models, and smart applications that deliver real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
