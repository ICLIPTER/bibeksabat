// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'research' | 'education' | 'leadership';
}

export const experiences: Experience[] = [
  // Work Experience
  {
    id: "full-stack-dev",
    title: "Full Stack Web Developer",
    company: "Mentech",
    location: "Odisha, India",
    startDate: "April 2020",
    endDate: "May 2025",
    description:
      "Engineered high-performance, scalable full-stack applications for diverse clients, combining technical precision with seamless user experiences.",
    achievements: [
      "Built and deployed applications using React.js, Next.js, Node.js, Java, Python, AWS, and MongoDB, ensuring robust architecture and efficient delivery.",
      "Designed adaptive, responsive interfaces that reduced load times by 60% and improved cross-device performance.",
      "Developed integrated collaboration tools with task tracking, document sharing, and fine-grained access control, boosting team productivity.",
      "Automated grading and evaluation workflows, achieving a 75% improvement in accuracy and 50% faster processing.",
      "Optimized front-end performance through code refactoring and caching, delivering a 50% faster user experience.",
      "Partnered directly with clients to capture requirements and deliver high-impact, tailored solutions with a 95% satisfaction rate.",
      "Integrated third-party APIs and cloud services to enhance functionality and streamline operations.",
    ],
    type: 'work',
  },

  {
    id: "freelance",
    title: "Freelance Graphics Designer • 2D & 3D Artist • Animator • Web Developer",
    company: "Freelance",
    location: "Odisha, India",
    startDate: "October 2019",
    endDate: "Present",
    description:
      "Delivered end-to-end creative and technical solutions across design, animation, and web development — blending artistic vision with engineering precision.",
    achievements: [
      "Designed and animated high-fidelity 2D and 3D characters, environments, and assets for games and interactive experiences.",
      "Created immersive visual worlds that enhanced storytelling and player engagement.",
      "Produced cinematic motion graphics and animation sequences for branding, promotional videos, and game intros.",
      "Developed responsive, modern web designs combining aesthetics with functional UX principles.",
      "Collaborated with clients to translate ideas into visually striking and technically sound deliverables.",
      "Leveraged tools like Blender, Adobe Suite, and modern web frameworks to bridge design and development seamlessly.",
    ],
    type: 'work',
  },

  // Research Experience
  {
    id: "deep-fake-detection",
    title: "DeepFake Detection Using Deep Learning",
    company: "Sambalpur University",
    location: "Odisha, India",
    startDate: "August 2022",
    endDate: "February 2023",
    description:
      "Researched deep learning methodologies to detect AI-generated facial forgeries, focusing on robust models for media authenticity and misinformation prevention.",
    achievements: [
      "Explored CNN and transfer learning architectures for high-precision DeepFake detection.",
      "Analyzed diverse datasets of real and synthetic faces to identify subtle inconsistencies and model vulnerabilities.",
      "Proposed an optimized CNN framework that improved detection accuracy and reduced false positives.",
      "Applied interpretability techniques, including Grad-CAM visualizations, to enhance model transparency.",
      "Contributed to research on media forensics and ethical AI by evaluating societal impacts of DeepFake detection.",
    ],
    type: 'research',
  },

  {
    id: "ai-health-chat-analysis",
    title: "AI-Powered Mental Health Chat Analysis",
    company: "Sambalpur University",
    location: "Odisha, India",
    startDate: "June 2021",
    endDate: "July 2022",
    description:
      "Developed AI-driven models to analyze text-based mental health conversations, providing insights into emotional states, stress levels, and intervention needs.",
    achievements: [
      "Designed NLP models to classify sentiment, detect stress, and identify conversational patterns.",
      "Applied transformer-based architectures (e.g., BERT) for context-aware understanding.",
      "Implemented data anonymization and ethical safeguards to ensure privacy compliance.",
      "Developed dashboards and visualization tools summarizing insights for researchers and mental health professionals.",
      "Optimized model performance, improving accuracy while minimizing false positives.",
      "Contributed to research on AI-assisted mental health monitoring and interventions.",
    ],
    type: 'research',
  },

  // Leadership & Student Council
  {
    id: "student-council-vp",
    title: "Vice President",
    company: "Student Council, Sambalpur University",
    location: "Odisha, India",
    startDate: "April 2022",
    endDate: "May 2023",
    description:
      "Led strategic initiatives and managed cross-functional teams to enhance student engagement, campus programs, and organizational effectiveness.",
    achievements: [
      "Coordinated and executed campus-wide events, workshops, and initiatives, increasing student participation.",
      "Managed student leadership teams, delegating responsibilities and fostering collaboration.",
      "Implemented structured communication and project tracking systems to streamline operations.",
      "Represented the student body in university discussions, advocating for student interests.",
      "Mentored council members to promote leadership development and professional growth.",
    ],
    type: 'leadership',
  },

  {
    id: "student-council-technical-exec",
    title: "Technical Executive",
    company: "Student Council, Sambalpur University",
    location: "Odisha, India",
    startDate: "April 2021",
    endDate: "May 2022",
    description:
      "Contributed to student council initiatives as a technical and organizational lead, supporting events and digital solutions.",
    achievements: [
      "Played a pivotal role in organizing and executing student events.",
      "Collaborated effectively with peers and faculty to ensure smooth operations.",
      "Enhanced student experience through careful planning and coordination.",
      "Contributed to website development and technical infrastructure for programs.",
    ],
    type: 'leadership',
  },

  {
    id: "student-council-affiliate",
    title: "Affiliate Member",
    company: "Student Council, Sambalpur University",
    location: "Odisha, India",
    startDate: "November 2020",
    endDate: "April 2021",
    description:
      "Supported council initiatives as an affiliate member, assisting in events, digital content, and student engagement activities.",
    achievements: [
      "Assisted in organizing and executing student events.",
      "Supported the technical team with website and digital content.",
      "Contributed to planning and logistics for university programs.",
      "Participated in student engagement and feedback activities.",
    ],
    type: 'leadership',
  },

  {
    id: "student-council-secretary",
    title: "Secretary",
    company: "Student Council, Rotary Public School",
    location: "Odisha, India",
    startDate: "May 2019",
    endDate: "April 2020",
    description:
      "Oversaw organizational operations, communications, and event coordination to ensure smooth functioning of student council activities.",
    achievements: [
      "Managed documentation, meeting minutes, and internal communications, improving transparency.",
      "Coordinated school events and activities, ensuring timely execution and participation.",
      "Supported leadership in planning and implementing initiatives, fostering a positive school culture.",
      "Maintained organized records of projects, tasks, and student engagement metrics.",
      "Facilitated collaboration between students, teachers, and council members to achieve objectives.",
    ],
    type: 'leadership',
  },
];
