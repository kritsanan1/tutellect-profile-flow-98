
import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import Summary from "./Summary";
import ContactSection from "./ContactSection";
import LinksSection from "./LinksSection";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Languages from "./Languages";
import Certifications from "./Certifications";
import Interests from "./Interests";
import Awards from "./Awards";
import Achievements from "./Achievements";
import WorkFlow from "./workflow/WorkFlow";
import Custom from "./Custom";

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    avatar: "https://placehold.co/400x400/EEE/31343C?text=JD"
  });

  const [contactInfo, setContactInfo] = useState({
    phone: "+1 (555) 123-4567",
    phone2: "",
    email: "john.doe@example.com",
    email2: "",
    location: "Anytown, CA, USA"
  });

  const [links, setLinks] = useState([
    { id: "1", url: "https://linkedin.com/in/johndoe" },
    { id: "2", url: "https://github.com/johndoe" },
    { id: "3", url: "https://johndoe.com" }
  ]);

  const [summaryText, setSummaryText] = useState(
    "Experienced software developer with a passion for creating elegant solutions to complex problems. Proficient in multiple programming languages and frameworks with a strong focus on user experience and clean code."
  );

  const handleProfileUpdate = (data: { name?: string; avatar?: string }) => {
    setUserProfile({
      ...userProfile,
      ...data
    });
  };

  const handleContactUpdate = (data: any) => {
    setContactInfo({
      ...contactInfo,
      ...data
    });
  };

  const addLink = (url: string) => {
    const id = Date.now().toString();
    setLinks([...links, { id, url }]);
  };

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const updateSummary = (text: string) => {
    setSummaryText(text);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2">
          My <span className="primary-text-gradient">Profile</span>
        </h1>
        <p className="text-muted-foreground md:text-lg mb-4">
          Showcase your skills, experience, and achievements
        </p>
      </div>
      
      <ProfileHeader userProfile={userProfile} handleProfileUpdate={handleProfileUpdate} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Summary />
        <ContactSection contactInfo={contactInfo} handleContactUpdate={handleContactUpdate} />
      </div>
      
      <div className="mb-6">
        <LinksSection links={links} addLink={addLink} removeLink={removeLink} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Experience />
        <Education />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Skills />
        <Projects />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Certifications />
        <Languages />
      </div>
      
      <div className="mb-6">
        <Interests />
      </div>
      
      <div className="mb-6">
        <Achievements />
      </div>
      
      <div className="mb-6">
        <Awards />
      </div>
      
      <div className="mb-6">
        <WorkFlow />
      </div>
      
      <div className="mb-6">
        <Custom />
      </div>
    </div>
  );
}
