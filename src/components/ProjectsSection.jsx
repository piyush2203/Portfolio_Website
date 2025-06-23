import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SensAI – AI Career Coach",
    description:
      "An AI-powered SaaS platform offering career guidance, skill assessments, and resume building with smart analytics.",
    image: "/projects/AI_Proejct.png", // Update with your actual image path
    tags: ["React", "TailwindCSS", "Supabase", "Redux", "AI", "Node.js"],
    demoUrl: "https://ai-career-coach-bay.vercel.app/",
    githubUrl: "https://github.com/piyush2203/AI-Career-Coach",
  },
  {
    id: 2,
    title: "PG-FilmyBook – Movie Review App",
    description:
      "A dynamic movie review and recommendation platform using TMDB API, with sleek UI and personalized discovery experience.",
    image: "/projects/movie.png", 
    tags: ["React", "Redux", "TailwindCSS", "TMDB API", "Vercel"],
    demoUrl: "https://pg-filmybook.vercel.app/", 
    githubUrl: "https://github.com/piyush2203/MovieBook-PGFB", 
  },

  {
  id: 3,
  title: "Weavoo – Social Media App",
  description:
    "A feature-rich MERN social platform featuring posts, likes, comments, profile management, plus real-time chat and notifications.",
  image: "/projects/social.png", // replace with your actual image path
  tags: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "Shadcn UI"
  ],
  demoUrl: "https://weavoo.onrender.com/login",      // add your live demo link
  githubUrl: "https://github.com/piyush2203/Weavoo-Social-Media-App--MERN",    // add your GitHub repo link
},

  {
    id: 4,
    title: "Ai Summarizer - Chrome Extension",
    image: "/projects/Project4.png",
    description:
      "Developed and published a Chrome extension on the Chrome Web Store that summarizes web content using AI, leveraging JavaScript, Chrome APIs, and a responsive popup UI.",
    tags: ["HTML", "CSS", "Javascript", "Gemini Flash Api"],
    demoUrl: "",
    githubUrl: "https://github.com/piyush2203/Chrome-Extension---Ai-Code-Summary",
  },
  {
    id: 5,
    title: "Lazarev Animation Website",
    image: "/projects/lazarev.png",
    description:
      "Built a high-fidelity clone of Lazarev.agency using HTML, CSS, JavaScript, and GSAP with smooth animations, scroll effects, and responsive design.",
    tags: ["HTML", "CSS", "Javascript", "GSAP Animation"],
    demoUrl: "https://lazarev-tau.vercel.app/",
    githubUrl: "https://github.com/piyush2203/Lazarev-Animated-Website",
  },
  {
    id: 5,
    title: "Devtube – YouTube Clone",
    image: "/projects/devtube.png",
    description:
      "Built a responsive YouTube clone using React and Tailwind CSS, featuring video playback, like/comment functionality, watch history page, and a clean, modern user interface."
,
    tags: ["HTML", "Tailwind CSS", "Javascript", "ReactJs"],
    demoUrl: "https://devtube-black.vercel.app/watch/7807",
    githubUrl: "https://github.com/piyush2203/Devtube-YoutubeFrontend",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    // eslint-disable-next-line react/jsx-key
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/piyush2203"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
