import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Swarnadeep Roy",
  initials: "SR",
  url: "https://dillion.io",
  location: "Kolkata, IND",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Frontend Devloper. I love building things and helping people.",
  summary:
    "I am self taught devloper . Currenetly , [I pursuing a degree in computer science](/#education), interned at big tech companies in diffrent cities, and competed different projects for fun.",
  avatarUrl: "",
  skills: [
    "React",
    "Tailwind CSS",
    "Javascript",
    "SQL",
    "NextAuth",
    "MongoDB",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "swarnadeeproy69@gmail.com",
    tel: "+917439732996",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/swarnadeep31",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/swarnadeep-roy-a8122622a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/swarnadeep.roy.90",
        icon: Icons.Facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "KIIT University",
      href: "https://kiit.ac.in/",
      degree: "Masters of Computer Aplication(MCA)",
      logoUrl: "/KIIT-Logo-Icon.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "University of Calcata",
      href: "https://www.caluniv.ac.in/",
      degree: "Bachelor's Degree of Computer Science (BSc)",
      logoUrl: "/download.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Eso Natak Shikhi",
      href: "https://www.esonatakshikhi.com/",
      dates: "Jun 2024 - April 2025",
      active: true,
      description:
        "Built a personal website for Dr. Tapas Das to showcase his drama school.Features include student profiles, teacher details, ongoing and upcoming event listings.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "APIs",
        "Tailwind Css",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.esonatakshikhi.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Image3.png",
      video: "",
    },
    {
      title: "Open Media",
      href: "https://youtube-clone-v21.netlify.app/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Online streming platfrom for watch videos online. You can find any kind of video you want",
      technologies: ["React", "Node.js", "Tailwind Css", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://youtube-clone-v21.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/image1.png",
      video: "",
    },
    {
      title: "Car Showcase",
      href: "https://cars-phi-nine.vercel.app/",
      dates: "Jan 2025 - Jan 2025",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: ["React", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://cars-phi-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/swarnadeep31/cars",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/image2.png",
      video: "",
    },
  ],
} as const;
