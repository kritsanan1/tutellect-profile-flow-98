import { User, Calendar, Users, Building, Flag, MapPin, Activity } from "lucide-react";
interface PersonalInfoDisplayProps {
  name: string;
  birthDate: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  status: string;
}
export default function PersonalInfoDisplay({
  name,
  birthDate,
  gender,
  city,
  state,
  country,
  status
}: PersonalInfoDisplayProps) {
  return <div className="space-y-4">
      
      
      <div className="flex items-center gap-3">
        <Calendar className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Birth Date</p>
          <p className="font-medium">
            {new Date(birthDate).toLocaleDateString()}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Users className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Gender</p>
          <p className="font-medium">{gender}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Activity className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Status</p>
          <p className="font-medium">{status}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Building className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">City</p>
          <p className="font-medium">{city}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <MapPin className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">State</p>
          <p className="font-medium">{state}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Flag className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Country</p>
          <p className="font-medium">{country}</p>
        </div>
      </div>
    </div>;
}