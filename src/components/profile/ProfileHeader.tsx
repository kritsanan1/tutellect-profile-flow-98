
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import ProfileSectionModal from "../common/ProfileSectionModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileHeaderProps {
  userProfile: {
    name: string;
    avatar: string;
  };
  handleProfileUpdate: (data: { name?: string, avatar?: string }) => void;
}

export default function ProfileHeader({ userProfile, handleProfileUpdate }: ProfileHeaderProps) {
  const ProfileForm = () => (
    <form className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="profileName">Full Name</Label>
          <Input 
            id="profileName" 
            defaultValue={userProfile.name}
            onChange={(e) => handleProfileUpdate({ name: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="profileAvatar">Avatar URL</Label>
          <Input 
            id="profileAvatar" 
            defaultValue={userProfile.avatar}
            placeholder="Enter image URL"
            onChange={(e) => handleProfileUpdate({ avatar: e.target.value })}
          />
        </div>
      </div>
      
      <Button className="primary-gradient w-full text-white hover:opacity-90">
        Save Profile
      </Button>
    </form>
  );

  return (
    <div className="mb-6 bg-gradient-to-r from-tutellect-primary-from/10 to-tutellect-primary-to/10 rounded-2xl p-8 relative">
      {/* Edit button positioned at top right */}
      <div className="absolute top-4 right-4">
        <ProfileSectionModal
          title="Edit Profile"
          triggerText=""
          icon={<Edit size={16} />}
        >
          <ProfileForm />
        </ProfileSectionModal>
      </div>

      <div className="flex flex-col items-center gap-6">
        <Avatar className="h-40 w-40 border-4 border-primary/20 shadow-xl relative group">
          <AvatarImage src={userProfile.avatar} />
          <AvatarFallback className="text-4xl font-medium">
            {userProfile.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ProfileSectionModal
              title="Edit Profile"
              triggerText=""
              icon={<Edit size={24} className="text-white" />}
            >
              <ProfileForm />
            </ProfileSectionModal>
          </div>
        </Avatar>
        
        <div className="text-center relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2">
            {userProfile.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
