export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/ICLIPTER",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "in.linkedin.com/in/bibeksabat",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:bibeksabat.dev@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+8144191165",
      icon: "phone"
    }
  ];