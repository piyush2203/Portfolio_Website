import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Goonj-Dramatic Society",
    description:
      "Managed the team of 35 members as the Head Acting & Writing Coordinator at the Dramatic society of AKGEC",
    image: "/projects/goonj.png", // Update with your actual image path
    tags: ["React", "TailwindCSS", "Supabase", "Redux", "AI", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Speed Club of AKGEC",
    description:
      "Student Excellence group of 20 members by college, organizes different Technical Labs and Programs",
    image: "/projects/spped.png", 
    tags: ["React", "Redux", "TailwindCSS", "TMDB API", "Vercel"],
    demoUrl: "#", 
    githubUrl: "#", 
  },

  {
  id: 3,
  title: "Training & Placement Cell",
  description:
    "Managed event, placement data management & campus recruitment activities as TNP Coordinator",
  image: "/projects/tnp.png", // replace with your actual image path
  tags: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "Shadcn UI"
  ],
  demoUrl: "#",      // add your live demo link
  githubUrl: "#",    // add your GitHub repo link
},

  
];

export const Extra = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Extra <span className="text-primary"> Curricular </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          More Than a Developer – A Creator at Heart. 
          <br />
          My Journey Outside the Tech Track.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-slate-600 rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                

                <h3 className="text-xl font-semibold mb-5"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
