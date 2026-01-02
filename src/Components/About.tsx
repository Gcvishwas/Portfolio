import { Code, Download, GraduationCap, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-background/30 py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Student & CS Enthusiast</h3>
            <p className="text-muted-foreground">
              I am currently an undergrauate student pursuing a degree in
              Computer Science & Information Technology.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating elegant solution to complex
              problems, and also learning new technologies and techniques to
              upscale myself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In touch
              </a>
              <a
                href="/Vishwas Gharti Chhetri.pdf"
                download="/Vishwas Gharti Chhetri.pdf"
                className="flex gap-2 items-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-lg">Web Development</h1>
                  <p className="text-muted-foreground">
                    Creating responsive websites and application with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-lg">Education</h1>
                  <p className="text-muted-foreground">
                    Undergraduate student pursuing B.Sc. CSIT under Tribhuvan
                    University, with a strong focus on computer science
                    fundamentals and practical skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-lg">Experience & Growth</h1>
                  <p className="text-muted-foreground">
                    Hands-on experience building real-world projects using
                    React, TypeScript, and modern web technologies, with a
                    mindset of continuous improvement.
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

export default About;
