import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "../data/projects";
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden bg-linear-to-b from-background via-background to-primary/5"
    >
      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden ponter-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5= rounded-full  blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className=" container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Below are some of my projects. I am still learning and would like to
            update this section as often as I can.
          </p>
        </div>
        {/* Projects Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group realtive bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2x"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 overflow-hidden bg-linear-to-br from-primary/20 to-primary/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 "></div>
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <a
                    href={project.url}
                    target="_blank"
                    className="p-2.5 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    className="p-2.5 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Bottom Accent Line */}
              <div className="h-1 bg-linear-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <a
            href="https://github.com/Gcvishwas"
            target="_blank"
            className="cosmic-button w-fit flex items-center gap-2"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/Gcvishwas"
            target="_blank"
            className="cosmic-button flex items-center  gap-2"
          >
            Check My Linkedinf
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
