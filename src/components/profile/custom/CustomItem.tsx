
import { Calendar, ExternalLink, Trash2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomItemType } from "./types";
import { format } from "date-fns";
import * as Icons from "lucide-react";

interface CustomItemProps {
  item: CustomItemType;
  onRemove: (id: string) => void;
}

export default function CustomItem({ item, onRemove }: CustomItemProps) {
  // Get the icon component safely
  let IconComponent: typeof FileText = FileText;
  if (item.icon && item.icon in Icons) {
    IconComponent = Icons[item.icon as keyof typeof Icons] as typeof FileText;
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    try {
      return format(new Date(dateString), "MMM yyyy");
    } catch (error) {
      return dateString;
    }
  };

  const startDate = formatDate(item.startDate);
  const endDate = formatDate(item.endDate);

  return (
    <Card className="group">
      <CardHeader className="space-y-0 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconComponent size={18} className="text-muted-foreground" />
            <CardTitle className="text-base">{item.label}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
        {(startDate || endDate) && (
          <CardDescription className="flex items-center gap-1 mt-1 text-xs">
            <Calendar size={12} />
            {startDate} {endDate && startDate && "–"} {endDate}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {item.description && <p className="text-sm mb-3">{item.description}</p>}
        
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-primary hover:underline mb-3"
          >
            <ExternalLink size={12} />
            {item.url}
          </a>
        )}
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
