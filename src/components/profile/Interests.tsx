
import { Heart, Tag, Plus, X } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProfileSectionModal from "../common/ProfileSectionModal";
import { Card } from "../ui/card";

interface InterestsState {
  hobbies: string[];
  interests: string[];
}

export default function Interests() {
  const [tags, setTags] = useState<InterestsState>({
    hobbies: ["Photography", "Hiking", "Reading", "Chess"],
    interests: ["Artificial Intelligence", "Web Development", "Data Science", "UX Design"]
  });

  const addTag = (category: keyof InterestsState, tag: string) => {
    if (tag.trim() && !tags[category].includes(tag.trim())) {
      setTags({
        ...tags,
        [category]: [...tags[category], tag.trim()]
      });
    }
  };

  const removeTag = (category: keyof InterestsState, tag: string) => {
    setTags({
      ...tags,
      [category]: tags[category].filter(t => t !== tag)
    });
  };

  const TagsForm = ({ category }: { category: keyof InterestsState }) => {
    const [newTag, setNewTag] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addTag(category, newTag);
      setNewTag("");
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 pt-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`new-${category}`}>
              Add New {category.charAt(0).toUpperCase() + category.slice(1)}
            </Label>
            <div className="flex gap-2">
              <Input 
                id={`new-${category}`} 
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder={`e.g. ${category === 'hobbies' ? 'Photography' : 'Machine Learning'}`}
              />
              <Button type="submit" disabled={!newTag.trim()}>
                Add
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Current {category.charAt(0).toUpperCase() + category.slice(1)}</Label>
            <div className="flex flex-wrap gap-2">
              {tags[category].map(tag => (
                <div 
                  key={tag} 
                  className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  <span>{tag}</span>
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 rounded-full hover:bg-secondary-foreground/20" 
                    onClick={() => removeTag(category, tag)}
                  >
                    <X size={12} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Button type="submit" className="primary-gradient w-full text-white hover:opacity-90">
          Save {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      </form>
    );
  };

  // Hobbies Card
  const HobbiesCard = () => (
    <Card className="transition-all duration-300 hover:shadow-md dark:hover:shadow-none hover:border-primary/30">
      <div className="flex flex-row items-center justify-between p-6">
        <h3 className="flex items-center gap-2 text-xl font-semibold leading-none tracking-tight">
          <Heart size={18} />
          Hobbies
        </h3>
        <ProfileSectionModal
          title="Edit Hobbies"
          triggerText=""
          icon={<Plus size={16} className="transition-all duration-300 hover:scale-110" />}
        >
          <TagsForm category="hobbies" />
        </ProfileSectionModal>
      </div>
      
      <div className="p-6 pt-0">
        {tags.hobbies.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.hobbies.map(hobby => (
              <div 
                key={hobby}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
              >
                {hobby}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Heart size={48} className="text-muted-foreground/50 mb-4" />
            <h4 className="text-lg font-medium mb-1">No Hobbies Added</h4>
            <p className="text-muted-foreground mb-4">Add your hobbies</p>
          </div>
        )}
      </div>
    </Card>
  );

  // Interests Card
  const InterestsCard = () => (
    <Card className="transition-all duration-300 hover:shadow-md dark:hover:shadow-none hover:border-primary/30">
      <div className="flex flex-row items-center justify-between p-6">
        <h3 className="flex items-center gap-2 text-xl font-semibold leading-none tracking-tight">
          <Tag size={18} />
          Interests
        </h3>
        <ProfileSectionModal
          title="Edit Interests"
          triggerText=""
          icon={<Plus size={16} className="transition-all duration-300 hover:scale-110" />}
        >
          <TagsForm category="interests" />
        </ProfileSectionModal>
      </div>
      
      <div className="p-6 pt-0">
        {tags.interests.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.interests.map(interest => (
              <div 
                key={interest}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
              >
                {interest}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Tag size={48} className="text-muted-foreground/50 mb-4" />
            <h4 className="text-lg font-medium mb-1">No Interests Added</h4>
            <p className="text-muted-foreground mb-4">Add your professional interests</p>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      <HobbiesCard />
      <InterestsCard />
    </div>
  );
}
