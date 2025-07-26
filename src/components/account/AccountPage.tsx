
import { useState } from "react";
import { User, Mail, IdCard, Activity } from "lucide-react";
import SectionCard from "@/components/profile/SectionCard";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import IdVerificationForm from "./forms/IdVerificationForm";
import PersonalInfoDisplay from "./displays/PersonalInfoDisplay";
import IdVerificationDisplay from "./displays/IdVerificationDisplay";
import SecuritySection from "./SecuritySection";
import PreferencesSection from "./PreferencesSection";

interface PersonalInfoData {
  name: string;
  birthDate: string;
  gender: string;
  status: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  governmentId: string;
  accountStatus: string;
  legalName: string;
}

export default function AccountPage() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({
    name: "John Doe",
    birthDate: "1990-01-01",
    gender: "Male",
    status: "I am a Working Professional",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    city: "Anytown",
    state: "CA",
    country: "USA",
    governmentId: "XXX-XX-XXXX",
    accountStatus: "Active",
    legalName: "John Michael Doe"
  });

  const [photoId, setPhotoId] = useState<File | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2">
          My <span className="primary-text-gradient">Account</span>
        </h1>
        <p className="text-muted-foreground md:text-lg mb-4">
          Manage your account information and preferences
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SectionCard
          title="Private Information"
          icon={<User size={18} />}
          isEmpty={false}
          form={<PersonalInfoForm personalInfo={personalInfo} />}
        >
          <PersonalInfoDisplay 
            name={personalInfo.name}
            birthDate={personalInfo.birthDate}
            gender={personalInfo.gender}
            city={personalInfo.city}
            state={personalInfo.state}
            country={personalInfo.country}
            status={personalInfo.status}
          />
        </SectionCard>
        
        <div className="space-y-6">
          <SectionCard
            title="ID Verification"
            icon={<IdCard size={18} />}
            isEmpty={false}
            form={<IdVerificationForm 
              governmentId={personalInfo.governmentId} 
              initialPhotoId={photoId} 
              legalName={personalInfo.legalName}
            />}
          >
            <IdVerificationDisplay 
              photoId={photoId}
              accountStatus={personalInfo.accountStatus}
              legalName={personalInfo.legalName}
            />
          </SectionCard>
          
          <SecuritySection />
        </div>
      </div>
      
      <div className="mt-8 mb-6">
        <PreferencesSection />
      </div>
    </div>
  );
}
