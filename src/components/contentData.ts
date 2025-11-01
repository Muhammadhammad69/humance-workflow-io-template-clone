import { Service, BlogType, IOurTeam, IProjects } from "@/components/types"
const servicesDataInfo: Service[] = [
  {
    id: 1,
    t1: "Leadership",
    t2: "Hr Consulting",
    description: "Personalized career matching",
    image: "/our-services/bg-2.jpg",
    alt: "Hr Consulting",
    isClicked: false
  },
  {
    id: 2,
    t1: "Entrepreneurs",
    t2: "Job Analysis",
    description: "Personalized career matching",
    image: "/our-services/bg-3.jpg",
    alt: "Job Analysis",
    isClicked: false

  },
  {
    id: 3,
    t1: "Entrepreneurs",
    t2: "Reference Checks",
    description: "Personalized career matching",
    image: "/our-services/bg-4.jpg",
    alt: "Reference Checks",
    isClicked: false
  },
  {
    id: 4,
    t1: "Adviser",
    t2: "HR Outsourcing",
    description: "Personalized career matching",
    image: "/our-services/bg-5.jpg",
    alt: "HR Outsourcing",
    isClicked: false
  },
  {
    id: 5,
    t1: "Consultation",
    t2: "Assessment",
    description: "Personalized career matching",
    image: "/our-services/bg-6.jpg",
    alt: "Consultation",
    isClicked: false
  },
  {
    id: 6,
    t1: "Adviser",
    t2: "Improving Resource",
    description: "Personalized career matching",
    image: "/our-services/bg-7.jpg",
    alt: "Improving Resource",
    isClicked: false
  },
];

// Blog one data 

const blogData: BlogType[] = [
  {
    id: 1,
    image: "/blogs/blog-img-01.jpg",
    title: "Why should business payroll outsourcing",
    date: "07 mar 2025",
    category: "Leadership",
    department: "Admin",
    alt: "blog-img-01",
  },
  {
    id: 2,
    image: "/blogs/blog-img-02.jpg",
    title: "Guide to HR adviser and Clients lessening",
    date: "27 Feb 2025",
    category: "Entrepreneurs",
    department: "Admin",
    alt: "blog-img-02",
  },
  {
    id: 3,
    image: "/blogs/blog-img-03.jpg",
    title: "Design Hacks that Will Blow Your Mind",
    date: "20 jan 2025",
    category: "Entrepreneurs",
    department: "Admin",
    alt: "blog-img-03",
  },
  {
    id: 4,
    image: "/blogs/blog-img-04.jpg",
    title: "Are today's staff less prepared for work",
    date: "27 jan 2025",
    category: "Adviser",
    department: "Admin",
    alt: "blog-img-04",
  },
  {
    id: 5,
    image: "/blogs/blog-img-05.jpg",
    title: "The power of whole-person development",
    date: "27 Feb 2025",
    category: "Consultation",
    department: "Admin",
    alt: "blog-img-05",
  },
  {
    id: 6,
    image: "/blogs/blog-img-06.jpg",
    title: "HR Tech Spending to Hold Steady in 2025",
    date: "20 apr 2025",
    category: "Adviser",
    department: "Admin",
    alt: "blog-img-06",
  },
]
const ourTeamsInfo: IOurTeam[] = [
  {
    id: 1,
    name: "Robert Jhonson",
    designation: "CEO/Founder",
    image: "/our-team/team-img-01.jpg",
    email: "robert.jhonson@gmail.com",
    alt: "img-01",
  },
  {
    id: 2,
    name: "Brielle Milla",
    designation: "Investment Expert",
    image: "/our-team/team-img-02.jpg",
    email: "brielle.milla@gmail.com",
    alt: "img-02",
  },
  {
    id: 3,
    name: "Mark Donald",
    designation: "Client Manager",
    image: "/our-team/team-img-03.jpg",
    email: "mark.donald@gmail.com",
    alt: "img-03",
  },
  {
    id: 4,
    name: "Jamie Oliver",
    designation: "Stock Expert",
    image: "/our-team/team-img-04.jpg",
    email: "jamie.oliver@gmail.com",
    alt: "img-04",
  },
  {
    id: 5,
    name: "Connor Grimes",
    designation: "Managing Director",
    image: "/our-team/team-img-05.jpg",
    email: "conner.grimes@gmail.com",
    alt: "img-05",
  },
  {
    id: 6,
    name: "David Green",
    designation: "Accountancy Expert",
    image: "/our-team/team-img-06.jpg",
    email: "david.green@gmail.com",
    alt: "img-06",
  },
];

const projectsInfo: IProjects[] = [
  {
    id: 1,
    projectTitle: "Business Management",
    projectCategory: "Production",
    clientName: "Mark Donald",
    image: "/projects/project-img-01.jpg",
    alt: "project-img-01",
  },
  {
    id: 2,
    projectTitle: "Retention & Turnover",
    projectCategory: "Raelyn Esme",
    clientName: "Michelle Smith",
    image: "/projects/project-img-02.jpg",
    alt: "project-img-02"
  },
  {
    id: 3,
    projectTitle: "Diversity & Inclusion",
    projectCategory: "Management",
    clientName: "Michael Daniel",
    image: "/projects/project-img-03.jpg",
    alt: "project-img-03"
  },
  {
    id: 4,
    projectTitle: "Improve Onboarding",
    projectCategory: "Replace",
    clientName: "Tom Olson",
    image: "/projects/project-img-04.jpg",
    alt: "project-img-04"
  },
  {
    id: 5,
    projectTitle: "Industrial Relations",
    projectCategory: "Replace",
    clientName: "Manufacturing",
    image: "/projects/project-img-05.jpg",
    alt: "project-img-05"
  },
  {
    id: 6,
    projectTitle: "Research & Infographics",
    projectCategory: "Excavation",
    clientName: "Brielle Milla",
    image: "/projects/project-img-06.jpg",
    alt: "project-img-06"
  }

]

// const slug = (s: string) => {
//   return s
//     .trim()
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9-]/g, "");
// };
const slug = (s: string) => {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")         // replace spaces with hyphen
    .replace(/&/g, "and")         // optional: convert & → "and"
    .replace(/[^a-z0-9-]/g, "")   // remove unwanted chars
    .replace(/-+/g, "-")          // merge multiple hyphens into one
    .replace(/^-|-$/g, "");       // remove leading/trailing hyphens
};

// parse date string
const parseDateString = (
  dateStr: string,
  part: "day" | "month" | "year"
): string => {
  const [day, month, year] = dateStr.trim().split(/\s+/);
  switch (part) {
    case "day":
      return day;
    case "month":
      return month;
    case "year":
      return year;
    default:
      return "";
  }
}

//  get recent blogs

const parseDate = (dateStr: string): Date => {
  const normalized = dateStr.replace(/(\d+)\s+([A-Za-z]+)\s+(\d+)/, "$1 $2 $3");
  return new Date(normalized);
};

// 🔥 Get last 4 most recent blogs
const getRecentBlogs = (blogs: BlogType[], count: number = 4): BlogType[] => {
  return [...blogs]
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    .slice(0, count);
};
export { servicesDataInfo, blogData, ourTeamsInfo, slug, parseDateString, getRecentBlogs, projectsInfo };