
import { FolderGit2 } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import ProfileSectionModal from "../common/ProfileSectionModal";
import ProjectForm from "./projects/ProjectForm";
import ProjectItemComponent from "./projects/ProjectItem";
import EmptyState from "./projects/EmptyState";
import { ProjectItem } from "./projects/types";

export default function Projects() {
  const [projectsList, setProjectsList] = useState<ProjectItem[]>([
    {
      id: "1",
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB.",
      url: "https://github.com/johndoe/ecommerce",
      startMonth: "January",
      startYear: "2022",
      endMonth: "June",
      endYear: "2022",
      current: false
    },
    {
      id: "2",
      name: "Machine Learning Model",
      description: "Developed a machine learning model for predicting customer behavior.",
      url: "https://github.com/johndoe/ml-project",
      startMonth: "October",
      startYear: "2021",
      endMonth: "December",
      endYear: "2021",
      current: false
    }
  ]);

  const addProject = (newProject: Omit<ProjectItem, "id">) => {
    const id = Date.now().toString();
    setProjectsList([...projectsList, { ...newProject, id }]);
  };

  const updateProject = (updatedProject: ProjectItem) => {
    setProjectsList(projectsList.map(item => 
      item.id === updatedProject.id ? updatedProject : item
    ));
  };

  const removeProject = (id: string) => {
    setProjectsList(projectsList.filter(item => item.id !== id));
  };

  return (
    <SectionCard
      title="Projects"
      icon={<FolderGit2 size={18} />}
      isEmpty={projectsList.length === 0}
      form={<ProjectForm onSubmit={addProject} />}
    >
      {projectsList.length > 0 ? (
        <div className="space-y-6">
          {projectsList.map(project => (
            <ProjectItemComponent
              key={project.id}
              project={project}
              onUpdate={updateProject}
              onDelete={removeProject}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
