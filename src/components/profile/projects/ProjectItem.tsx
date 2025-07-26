
import { Calendar, Link2, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileSectionModal from "@/components/common/ProfileSectionModal";
import ProjectForm from "./ProjectForm";
import { ProjectItem as ProjectItemType } from "./types";
import { formatDate } from "./types";

interface ProjectItemProps {
  project: ProjectItemType;
  onUpdate: (project: ProjectItemType) => void;
  onDelete: (id: string) => void;
}

export default function ProjectItem({ project, onUpdate, onDelete }: ProjectItemProps) {
  return (
    <div className="border-b border-border last:border-0 pb-4 last:pb-0">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{project.name}</h4>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            {formatDate(project.startMonth, project.startYear)}
            {project.current 
              ? " - Present" 
              : project.endMonth && project.endYear 
                ? ` - ${formatDate(project.endMonth, project.endYear)}` 
                : ""
            }
          </div>
          <p className="mt-2 text-sm">{project.description}</p>
          
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 text-sm flex items-center gap-1 text-primary hover:underline"
            >
              <Link2 size={14} />
              Project Link
            </a>
          )}
        </div>
        <div className="flex space-x-1">
          <ProfileSectionModal
            title="Edit Project"
            triggerText=""
            icon={<Pencil size={16} />}
          >
            <ProjectForm 
              initialData={project} 
              onSubmit={onUpdate}
            />
          </ProfileSectionModal>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-destructive" 
            onClick={() => onDelete(project.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
