
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IdVerificationFormProps {
  governmentId: string;
  initialPhotoId: File | null;
  legalName: string;
}

export default function IdVerificationForm({ governmentId, initialPhotoId, legalName }: IdVerificationFormProps) {
  const [photoId, setPhotoId] = useState<File | null>(initialPhotoId);
  
  return (
    <form className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="legalName">Legal Name</Label>
          <Input id="legalName" type="text" defaultValue={legalName} />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Label htmlFor="governmentId">Government ID</Label>
            <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs px-2 py-0.5 rounded-full">Protected</div>
          </div>
          <Input id="governmentId" type="password" defaultValue={governmentId} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="photoId">Valid Photo ID</Label>
          <div className="border border-input rounded-md p-4">
            <Input
              id="photoId"
              type="file"
              accept="image/*"
              className="max-w-xs"
              onChange={(e) => e.target.files && setPhotoId(e.target.files[0])}
            />
            {photoId && <p className="text-sm text-muted-foreground mt-2">File: {photoId.name}</p>}
          </div>
        </div>
      </div>
      
      <Button className="primary-gradient w-full text-white hover:opacity-90">
        Save Changes
      </Button>
    </form>
  );
}
