
import { Award, Star, User, Folder, BookOpen, Briefcase, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Personal Information",
    description: "Easily manage your core personal details in one place"
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "Showcase your career progression and achievements"
  },
  {
    icon: Award,
    title: "Skills & Expertise",
    description: "Highlight your skills with customizable proficiency levels"
  },
  {
    icon: Folder,
    title: "Project Portfolio",
    description: "Create an impressive portfolio of your best projects"
  },
  {
    icon: BookOpen,
    title: "Certifications",
    description: "Display your professional certifications and credentials"
  },
  {
    icon: Star,
    title: "Education",
    description: "Present your educational background and achievements"
  },
  {
    icon: Globe,
    title: "Languages",
    description: "Showcase language proficiency with detailed levels"
  },
  {
    icon: Heart,
    title: "Interests & Hobbies",
    description: "Share your personality beyond professional skills"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Comprehensive <span className="accent-text-gradient">Profile Management</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Create a complete professional profile with all the sections you need to stand out
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md border border-border bg-secondary/50">
                  <feature.icon 
                    size={24} 
                    className="group-hover:primary-text-gradient group-hover:animate-text-gradient"
                  />
                </div>
                <h3 className="font-display font-semibold text-xl group-hover:primary-text-gradient group-hover:animate-text-gradient transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground ml-11">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
