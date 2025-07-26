
import { useState } from "react";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

interface TagsFieldProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export default function TagsField({ tags, setTags }: TagsFieldProps) {
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-2">
      <FormLabel>Tags</FormLabel>
      <div className="flex items-center">
        <Input
          placeholder="Add tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddTag();
            }
          }}
        />
        <Button 
          type="button" 
          variant="outline" 
          className="ml-2" 
          onClick={handleAddTag}
        >
          <Plus size={16} />
        </Button>
      </div>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="group">
              {tag}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 p-0 hover:bg-transparent"
                onClick={() => handleRemoveTag(tag)}
              >
                <X size={12} />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
