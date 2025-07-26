
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MONTHS, YEARS } from "../education/educationFormUtils";
import { CertificationItem } from "./types";

interface CertificationFormProps {
  currentCertification: CertificationItem | null;
  isEditing: boolean;
  onSubmit: (certificationData: Omit<CertificationItem, "id"> & { id?: string }) => void;
}

export default function CertificationForm({
  currentCertification,
  isEditing,
  onSubmit
}: CertificationFormProps) {
  const [name, setName] = useState(currentCertification?.name || "");
  const [organization, setOrganization] = useState(currentCertification?.organization || "");
  const [description, setDescription] = useState(currentCertification?.description || "");
  const [issueMonth, setIssueMonth] = useState(currentCertification?.issueMonth || "");
  const [issueYear, setIssueYear] = useState(currentCertification?.issueYear || "");
  const [expiryMonth, setExpiryMonth] = useState(currentCertification?.expiryMonth || "");
  const [expiryYear, setExpiryYear] = useState(currentCertification?.expiryYear || "");
  const [credentialId, setCredentialId] = useState(currentCertification?.credentialId || "");
  const [credentialUrl, setCredentialUrl] = useState(currentCertification?.credentialUrl || "");
  const [neverExpires, setNeverExpires] = useState(currentCertification?.neverExpires || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const certificationData = {
      ...(currentCertification?.id ? { id: currentCertification.id } : {}),
      name,
      organization,
      description,
      issueMonth,
      issueYear,
      ...(neverExpires ? { neverExpires } : { expiryMonth, expiryYear }),
      ...(credentialId ? { credentialId } : {}),
      ...(credentialUrl ? { credentialUrl } : {})
    };
    
    onSubmit(certificationData);
  };

  return (
    <form className="space-y-6 pt-4" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Certification Name</Label>
          <Input 
            id="name" 
            placeholder="e.g. AWS Certified Solutions Architect" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="organization">Issuing Organization</Label>
          <Input 
            id="organization" 
            placeholder="e.g. Amazon Web Services" 
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Issue Date</Label>
            <div className="grid grid-cols-2 gap-2">
              <Select 
                value={issueMonth} 
                onValueChange={setIssueMonth}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map(month => (
                    <SelectItem key={month} value={month}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select 
                value={issueYear} 
                onValueChange={setIssueYear}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {YEARS.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Expiry Date</Label>
            <div className={`grid grid-cols-2 gap-2 ${neverExpires ? 'opacity-50' : ''}`}>
              <Select 
                value={expiryMonth} 
                onValueChange={setExpiryMonth}
                disabled={neverExpires}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map(month => (
                    <SelectItem key={month} value={month}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select 
                value={expiryYear} 
                onValueChange={setExpiryYear}
                disabled={neverExpires}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {YEARS.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 pt-1">
          <Checkbox 
            id="neverExpires" 
            checked={neverExpires} 
            onCheckedChange={(checked) => setNeverExpires(checked === true)}
          />
          <Label htmlFor="neverExpires" className="text-sm font-normal cursor-pointer">
            This certification doesn't expire
          </Label>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="credentialId">Credential ID (optional)</Label>
          <Input 
            id="credentialId" 
            placeholder="e.g. AWS-1234567" 
            value={credentialId}
            onChange={(e) => setCredentialId(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="credentialUrl">Credential URL (optional)</Label>
          <Input 
            id="credentialUrl" 
            placeholder="e.g. https://verify.example.com" 
            value={credentialUrl}
            onChange={(e) => setCredentialUrl(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description (optional)</Label>
          <Textarea 
            id="description" 
            placeholder="Describe your certification and skills gained" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </div>
      
      <Button type="submit" className="primary-gradient w-full text-white hover:opacity-90">
        {isEditing ? 'Update Certification' : 'Add Certification'}
      </Button>
    </form>
  );
}
