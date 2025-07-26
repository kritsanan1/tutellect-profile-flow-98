
import { useState } from "react";
import ProfilePageLayout from "@/components/profile/ProfilePageLayout";
import ProfilePageHeader from "@/components/profile/ProfilePageHeader";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Summary from "@/components/profile/Summary";
import ContactSection from "@/components/profile/ContactSection";
import LinksSection from "@/components/profile/LinksSection";
import Education from "@/components/profile/Education";
import Skills from "@/components/profile/Skills";
import Interests from "@/components/profile/Interests";
import Experience from "@/components/profile/Experience";
import Projects from "@/components/profile/Projects";
import Certifications from "@/components/profile/Certifications";
import Languages from "@/components/profile/Languages";
import Achievements from "@/components/profile/Achievements";
import Awards from "@/components/profile/Awards";
import WorkFlow from "@/components/profile/workflow/WorkFlow";
import Custom from "@/components/profile/Custom";
import ProfileSectionGrid from "@/components/profile/ProfileSectionGrid";

export default function Profile() {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    avatar: ""
  });

  const [links, setLinks] = useState<{ id: string; url: string }[]>([
    { id: "1", url: "https://github.com/johndoe" },
    { id: "2", url: "https://linkedin.com/in/johndoe" }
  ]);

  const addLink = (url: string) => {
    const newLink = { id: Date.now().toString(), url };
    setLinks([...links, newLink]);
  };

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const contactInfo = {
    phone: "+1 (555) 123-4567",
    phone2: "",
    email: "john.doe@example.com",
    email2: "",
    location: "San Francisco, CA"
  };

  const handleContactUpdate = (updatedContactInfo: typeof contactInfo) => {
    // Implement contact update logic
    console.log("Updated contact info:", updatedContactInfo);
  };

  const handleProfileUpdate = (data: { name?: string, avatar?: string }) => {
    setUserProfile(prev => ({
      ...prev,
      ...data
    }));
  };

  return (
    <ProfilePageLayout>
      <ProfilePageHeader />
      
      {/* Profile Header */}
      <div className="mb-6">
        <ProfileHeader 
          userProfile={userProfile}
          handleProfileUpdate={handleProfileUpdate}
        />
      </div>

      {/* Summary */}
      <div className="mb-6">
        <Summary />
      </div>

      {/* Contact and Links in 2 columns */}
      <ProfileSectionGrid columns={2}>
        <ContactSection 
          contactInfo={contactInfo} 
          handleContactUpdate={handleContactUpdate} 
        />
        
        <LinksSection 
          links={links} 
          addLink={addLink} 
          removeLink={removeLink} 
        />
      </ProfileSectionGrid>

      {/* Education */}
      <div className="mb-6">
        <Education />
      </div>

      {/* Skills and Interests */}
      <ProfileSectionGrid>
        <Skills />
        <Interests />
      </ProfileSectionGrid>

      {/* Experience */}
      <div className="mb-6">
        <Experience />
      </div>

      {/* Projects */}
      <div className="mb-6">
        <Projects />
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <Certifications />
      </div>

      {/* Languages */}
      <div className="mb-6">
        <Languages />
      </div>
      
      {/* Achievements */}
      <div className="mb-6">
        <Achievements />
      </div>
      
      {/* Awards */}
      <div className="mb-6">
        <Awards />
      </div>
      
      {/* Work Flow */}
      <div className="mb-6">
        <WorkFlow />
      </div>

      {/* Custom */}
      <div className="mb-6">
        <Custom />
      </div>
    </ProfilePageLayout>
  );
}
