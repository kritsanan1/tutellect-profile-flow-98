
export interface CertificationItem {
  id: string;
  name: string;
  organization: string;
  description?: string;
  issueMonth: string;
  issueYear: string;
  expiryMonth?: string;
  expiryYear?: string;
  credentialId?: string;
  credentialUrl?: string;
  neverExpires?: boolean;
}
