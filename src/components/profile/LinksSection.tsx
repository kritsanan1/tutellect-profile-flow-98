
import { useState } from "react";
import { Link as LinkIcon, Trash2 } from "lucide-react";
import SectionCard from "./SectionCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Link {
  id: string;
  url: string;
}

interface LinksSectionProps {
  links: Link[];
  addLink: (url: string) => void;
  removeLink: (id: string) => void;
}

export default function LinksSection({ links, addLink, removeLink }: LinksSectionProps) {
  const LinksForm = () => {
    const [newLink, setNewLink] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addLink(newLink);
      setNewLink("");
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 pt-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newLink">Add New Link</Label>
            <div className="flex gap-2">
              <Input 
                id="newLink" 
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                placeholder="https://example.com"
              />
              <Button type="submit" disabled={!newLink.trim()}>
                Add
              </Button>
            </div>
          </div>
          
          {links.length > 0 && (
            <div>
              <Label>Current Links</Label>
              <div className="space-y-2 mt-2">
                {links.map(link => (
                  <div 
                    key={link.id} 
                    className="flex items-center justify-between p-2 border rounded-md"
                  >
                    <span className="truncate max-w-[80%]">{link.url}</span>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => removeLink(link.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </form>
    );
  };

  return (
    <SectionCard
      title="Links"
      icon={<LinkIcon size={18} />}
      isEmpty={links.length === 0}
      form={<LinksForm />}
    >
      {links.length > 0 ? (
        <div className="space-y-4">
          {links.map(link => (
            <div key={link.id} className="flex items-start justify-between border-b border-border last:border-0 pb-4 last:pb-0">
              <div className="flex items-center gap-3 overflow-hidden">
                <LinkIcon className="text-muted-foreground shrink-0" size={18} />
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium truncate hover:text-primary transition-colors"
                >
                  {link.url}
                </a>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-muted-foreground hover:text-destructive" 
                onClick={() => removeLink(link.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <LinkIcon size={48} className="text-muted-foreground/50 mb-4" />
          <h4 className="text-lg font-medium mb-1">No Links Added</h4>
          <p className="text-muted-foreground mb-4">Add your websites and social media links</p>
        </div>
      )}
    </SectionCard>
  );
}
