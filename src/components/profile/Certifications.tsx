
import { Award, Plus } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import CertificationForm from "./certifications/CertificationForm";
import { CertificationItem } from "./certifications/types";
import CertificationItemDisplay from "./certifications/CertificationItem";
import EmptyState from "./certifications/EmptyState";

export default function Certifications() {
  const [certificationsList, setCertificationsList] = useState<CertificationItem[]>([
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      description: "Certified professional with expertise in designing distributed systems on AWS",
      issueMonth: "March",
      issueYear: "2021",
      expiryMonth: "March",
      expiryYear: "2024",
      credentialId: "AWS-1234567",
      credentialUrl: "https://aws.amazon.com/verification"
    },
    {
      id: "2",
      name: "Certified Scrum Master",
      organization: "Scrum Alliance",
      issueMonth: "June",
      issueYear: "2020",
      credentialId: "CSM-123456",
      credentialUrl: "https://www.scrumalliance.org/certification",
      neverExpires: true
    }
  ]);

  const [currentCertification, setCurrentCertification] = useState<CertificationItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCertification = (newCertification: Omit<CertificationItem, "id">) => {
    const id = Date.now().toString();
    setCertificationsList([...certificationsList, { ...newCertification, id }]);
    setCurrentCertification(null);
    setIsModalOpen(false);
  };

  const updateCertification = (updatedCertification: CertificationItem) => {
    setCertificationsList(certificationsList.map(item => 
      item.id === updatedCertification.id ? updatedCertification : item
    ));
    setCurrentCertification(null);
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const removeCertification = (id: string) => {
    setCertificationsList(certificationsList.filter(item => item.id !== id));
  };

  const handleEditCertification = (certification: CertificationItem) => {
    setCurrentCertification({ ...certification });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setCurrentCertification(null);
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleSubmit = (certificationData: Omit<CertificationItem, "id"> & { id?: string }) => {
    if (isEditing && certificationData.id) {
      updateCertification(certificationData as CertificationItem);
    } else {
      addCertification(certificationData);
    }
  };

  return (
    <SectionCard
      title="Certifications"
      icon={<Award size={18} />}
      isEmpty={certificationsList.length === 0}
      form={<CertificationForm 
        currentCertification={currentCertification} 
        isEditing={isEditing} 
        onSubmit={handleSubmit}
      />}
      onAddClick={handleAddNew}
    >
      {certificationsList.length > 0 ? (
        <div className="space-y-6">
          {certificationsList.map(certification => (
            <CertificationItemDisplay 
              key={certification.id} 
              certification={certification} 
              onEdit={handleEditCertification} 
              onDelete={removeCertification}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
