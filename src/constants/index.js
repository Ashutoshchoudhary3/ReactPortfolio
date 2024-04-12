import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  /* {
    name: "TypeScript",
    icon: typescript,
  }, */
  {
    name: "React JS",
    icon: reactjs,
  },
  /* {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  /*  {
    name: "MongoDB",
    icon: mongodb,
  }, */
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  /*  {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Smart India Hackathon",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2023 - september 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      /*"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",*/
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "web Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using Html, Css, JavaScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      /* "Participating in code reviews and providing constructive feedback to other developers.",*/
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Google Hackathon",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Developing AI web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  } /*
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/,
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ashu proved me wrong.",
    name: "Aakash Rawat",
    designation: "Student",
    company: "KEC",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHsXbaZJazc4g/profile-displayphoto-shrink_800_800/0/1707809948499?e=1718236800&v=beta&t=3JNw_JxV0KDs35Ogj8WTKLLqOA4LO3-iwlKksBcRN84",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ashu does.",
    name: "Mayank Kumar",
    designation: "Student",
    company: "KEC",
    image:
      "https://media.licdn.com/dms/image/D5603AQEDzCets0b_rw/profile-displayphoto-shrink_800_800/0/1712559679933?e=1718236800&v=beta&t=6LsEbKIuR0co0EQeAeEV8HJcSns7cH3kT0kWvm61nYQ",
  },
  {
    testimonial:
      "After Ashu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mimanshu Choudhary",
    designation: "Student",
    company: "KEC",
    image:
      "https://media.licdn.com/dms/image/D5635AQHPRp0a7XWzEg/profile-framedphoto-shrink_400_400/0/1711473179802?e=1713168000&v=beta&t=KJ7m1wR79alnTewn-VcHDRpo106vzd1QSqCFipYAAEI",
  },
];

const projects = [
  {
    name: "KharidLo",
    description:
      "Web-based platform that allows users to search electronic, home goods and customers can shop from various products, providing a convenient and efficient solution for shopping needs.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ashutoshchoudhary3.github.io/Kharidlo/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Simple Portfolio",
    description:
      "A comprehensive Portfolio platform that allows users to know about my skills in HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ashutoshchoudhary3.github.io/portfolio/",
  },
];

export { services, technologies, experiences, testimonials, projects };
