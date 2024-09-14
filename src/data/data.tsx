import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
/* import TwitterIcon from '../components/Icon/TwitterIcon'; */
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: ` Hi i am Harshavarthan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a INDIA Based <strong className="text-stone-100">HUMAN</strong>, currently Final Year
        at <strong className="text-stone-100">PMIST</strong> BTech CSE With Specialization In Data science.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Sprinting and Jumping </strong>,
         I like to do <strong className="text-stone-100">new things</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">INDIA</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1Cjnw9DcFzvcDr5ch-Vn8uAE46Hd6-O4L/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am Harshavarthan, and I am pursuing a bachelor's degree in computer science and engineering with a concentration in data science.
I really love coding and software development. I am skilled
in both SQL, R, Python, and C, among other types of
computer languages. It's way satisfying the moment I'm called upon to try and make sense out of complex datasets to deduce
meaningful findings. Very good at problem solving,
I can thus build very dependable algorithms and user-friendly applications.

I actively take part in hackathons and coding contests, so it has been way better for me to keep co-relating with the professional network and keep my knowledge updated these and professional relation. I perform well in cooperative settings with outstanding communication skills, thus being able to contribute to any team. I am looking forward to using my abilities in contributing to the area of development and coding`,
  aboutItems: [
    {label: 'Location', text: 'Thanjavur,Tamilnadu,India', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Running,Boxing,Exploring', Icon: SparklesIcon},
    {label: 'Study', text: 'Periyar Maniammai University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Currently FreeLancing', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Tamil',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name:"Django",
        level:6,
      },
    ],
  },
  {
    name:'Data science',
    skills:[
      {
        name:'Python-Advanced',
        level:9,

      },
      {
        name:'R',
        level:9,

      },
      {
        name:'Tableau',
        level:8,

      },
      {
        name:'Data Analytics',
        level:7,
      },

    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021-2025',
    location: 'Periyar Maniammai University,vallam,Thanjavur,Tamilnadu,India',
    title: 'BTech Computer Science With Specialization In Data Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },

];

export const experience: TimelineItem[] = [
  {
    date: ' November 2023 - March 2024 ',
    location: 'Sunflex Global Limited',
    title: 'System Admin',
    content: (
      <p>
        ※Developed the udp and tcp protocols for the website<br />
        ※Managed the network traffic and traffic analysis<br />
        ※Website resume automation and resume filter software development<br /> 
        ※Website layer protection and other network layer protections<br />
      </p>
    ),
  },
  {
    date: 'june 2023 -July 2023  ',
    location: 'Hyundai Motors India Limited',
    title: 'Data Engineer Intern',
    content: (
      <p>
        ※ineered an Automatic Ticket Management System using Ignition, MS SQL, and Python.<br />
        ※Developed a user-centric frontend with Ignition for intuitive error reporting and tracking. <br />
        ※Orchestrated the backend infrastructure, integrating MS SQL and Python to ensure seamless data handling and robust automation.<br />
        ※Employed Qlik Sense for in-depth data analysis, uncovering valuable insights into manufacturing processes. <br />
        ※Explored PLC and LADAR programming firsthand during engaging plant visits, deepening understanding of modern manufacturing technologies.<br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Text here to Reach Me out',
  items: [
    {
      type: ContactType.Email,
      text: 'sj.harsha2382003@gmail.com',
      href: 'mailto:sj.harsha2382003@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Thanjavur,Tamilnadu,India',
      href: 'https://maps.app.goo.gl/vga6drEkS5difDWA6',
    },
    {
      type: ContactType.Instagram,
      text: '@harshh_a__',
      href: 'https://www.instagram.com/harshh_a__',
    },
    {
      type: ContactType.Github,
      text: '@Harshav',
      href: 'https://github.com/harshav111',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/harshav111'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22100289/harshavarthan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'www.linkedin.com/in/harsha-varthan-b243ba21a'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/harshh_a__'},
];
