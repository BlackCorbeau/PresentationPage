export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  skills: {
    hard: string[];
    soft: string[];
  };
  experience: string[];
  teamRole: string;
}