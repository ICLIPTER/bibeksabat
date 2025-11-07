export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "sambalpur",
      degree: "Bachelor's of Computer Application",
      institution: "Sambalpur University",
      location: "Sambalpur, Odisha",
      startDate: "November 2020",
      endDate: "May 2023"
    },
    {
      id: "coursera",
      degree: " Graphics Designing",
      institution: "Coursera",
      location: "Odisha, India",
      startDate: "October 2020",
      endDate: "May 2022",
      gpa: "9.3/10.00"
    }
  ];