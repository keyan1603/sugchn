// SUG Chennai - Master Data File
// Complete data with all events and webinars
// YouTube IDs and Speaker LinkedIn URLs extracted from original content
// Events are webinars added as events (as requested for duplication)

const SUGData = {
  events: [
   {
    id: "emn51iz8r",
    title: "From JSS to Content SDK: Modernizing XM Cloud Development with Next.js App Router",
    date: "2025-12-05",
    time: "5:00 PM - 6:00 PM IST",
    venue: "Online",
    description: "A guide to transitioning from JSS to the Content SDK and adopting Next.js App Router for modern XM Cloud development.",
    registerLink: "https://forms.gle/Ffnz8gtoyaacFeqo8",
    speakers: [
      {
        name: "Kamatchi Manoharan",
        linkedin: "https://www.linkedin.com/in/kamatchi-manoharan-b3770233/"
      }
    ],
    tags: [
      "XM Cloud",
      "Content SDK"
    ],
    status: "completed"
  },
  {
    id: "emn51g9m4",
    title: "Using Sitecore AI Embedded Personalization with Content SDK",
    date: "2025-11-26",
    time: "5:00 PM - 6:00 PM IST",
    venue: "Online",
    description: "An overview of leveraging Sitecore AI personalization features through the Content SDK for tailored digital experiences.",
    registerLink: "https://forms.gle/Ffnz8gtoyaacFeqo8",
    speakers: [
      {
        name: "Varalakshmi MD",
        linkedin: "https://www.linkedin.com/in/varalakshmi-md-sitecore/"
      },
      {
        name: "Debtanu Biswas",
        linkedin: "https://www.linkedin.com/in/debtanu-biswas-92287596/"
      }
    ],
    tags: [
      "Sitecore AI",
      "Content SDK",
      "AIPersonalization"
    ],
    status: "completed"
  },
  {
    id: "emn51aihu",
    title: "Working with Custom Fields in Sitecore XM Cloud via Marketplace App",
    date: "2025-10-31",
    time: "5:00 PM - 6:00 PM IST",
    venue: "Online",
    description: "A practical guide to creating and managing custom fields in Sitecore XM Cloud using the Marketplace App.",
    registerLink: "https://forms.gle/Ffnz8gtoyaacFeqo8",
    speakers: [
      {
        name: "Sumit Bhatia",
        linkedin: "https://www.linkedin.com/in/sbhatia209/"
      }
    ],
    tags: [
      "XM Cloud",
      "Sitecore Marketplace"
    ],
    status: "completed"
  },
    {
      id: 1,
      date: "2025-06-06",
      title: "WEBINAR on Sitecore XM Cloud Embedded Personalize: Out-of-the-box",
      description: "Learn about the out-of-the-box capabilities of Embedded Personalize in XM Cloud.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      tags: ["XM Cloud", "Personalization", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 2,
      date: "2025-05-23",
      title: "WEBINAR on Better Sitecore XM/XP deployments with Kubernetes",
      description: "Explore best practices for deploying Sitecore XM and XP using Kubernetes.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Peter Procházka", linkedin: "https://www.linkedin.com/in/chorpo/" }
      ],
      tags: ["Kubernetes", "Deployment", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 3,
      date: "2025-01-24",
      title: "WEBINAR on Paths Forward on Sitecore: XM headless or XM Cloud?",
      description: "Compare and contrast XM headless and XM Cloud approaches.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Jason St-Cyr", linkedin: "https://www.linkedin.com/in/jasonstcyr/" }
      ],
      tags: ["XM Cloud", "Headless", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 4,
      date: "2024-11-15",
      title: "WEBINAR on Component Builder in XM Cloud",
      description: "Deep dive into Component Builder functionality in XM Cloud.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Varalakshmi MD", linkedin: "https://www.linkedin.com/in/varalakshmi-md-sitecore/" }
      ],
      tags: ["XM Cloud", "Components", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 5,
      date: "2024-09-13",
      title: "WEBINAR on A Starter's Roadmap to Navigating XM Cloud",
      description: "A comprehensive roadmap for beginners to get started with XM Cloud.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Nikita Vashisht", linkedin: "https://www.linkedin.com/in/nikita-vashisht/" }
      ],
      tags: ["XM Cloud", "Getting Started", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 6,
      date: "2024-08-23",
      title: "WEBINAR on Seamless Integration: Sitecore Search Strategies on Textual Relevance, Filtering, Faceting, Personalization and More",
      description: "Comprehensive guide to Sitecore Search integration strategies.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Syed Akhtar", linkedin: "https://www.linkedin.com/in/syedakhtar/" }
      ],
      tags: ["Sitecore Search", "Integration", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 7,
      date: "2024-07-26",
      title: "WEBINAR on Content Hub One - Lightweight & lightning-fast",
      description: "Explore the capabilities of lightweight Content Hub One.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Yamini Punyavathi Muttevi", linkedin: "https://www.linkedin.com/in/yamini-punyavathi-muttevi-15514213a/" }
      ],
      tags: ["Content Hub One", "Lightweight", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 8,
      date: "2024-06-21",
      title: "WEBINAR on Future-Proofing Your Digital Transformation with Sitecore Headless Services",
      description: "Learn how to future-proof your digital transformation with headless Sitecore.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      tags: ["Headless", "Digital Transformation", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 9,
      date: "2024-05-24",
      title: "WEBINAR on Sitecore Content Cloud: The multiple faces of Content Authoring",
      description: "Explore different approaches to content authoring in Sitecore Content Cloud.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      tags: ["Content Cloud", "Content Authoring", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 10,
      date: "2024-03-29",
      title: "WEBINAR on Composable Architectures in Sitecore",
      description: "Deep dive into composable architecture patterns in Sitecore.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://nl.linkedin.com/in/robhabraken" }
      ],
      tags: ["Composable", "Architecture", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 11,
      date: "2023-10-27",
      title: "WEBINAR on Learnings of going XM Cloud",
      description: "Real-world learnings and insights from migrating to XM Cloud.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://nl.linkedin.com/in/robhabraken" }
      ],
      tags: ["XM Cloud", "Migration", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 12,
      date: "2023-09-26",
      title: "WEBINAR on Sitecore Search and Sitecore Discover: What, Why and How",
      description: "Complete guide to Sitecore Search and Discover capabilities.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      tags: ["Sitecore Search", "Discover", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 13,
      date: "2023-08-22",
      title: "WEBINAR on Working with Sitecore's ASP.NET Core Rendering SDK",
      description: "Learn how to work with Sitecore's ASP.NET Core Rendering SDK.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Anindita Bhattacharya", linkedin: "https://www.linkedin.com/in/aceanindita/" }
      ],
      tags: ["ASP.NET Core", "Rendering SDK", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 14,
      date: "2023-07-27",
      title: "WEBINAR on Migrating to XM Cloud",
      description: "Comprehensive guide to migrating your Sitecore instance to XM Cloud.",
      time: "6:00 PM - 7:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Jason St-Cyr", linkedin: "https://www.linkedin.com/in/jasonstcyr/" }
      ],
      tags: ["XM Cloud", "Migration", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 15,
      date: "2023-05-22",
      title: "WEBINAR on How to work with Sitecore Forms with JSS + React",
      description: "Working with Sitecore Forms in JSS and React applications.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Peter Procházka", linkedin: "https://www.linkedin.com/in/chorpo/" }
      ],
      tags: ["Forms", "JSS", "React", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 16,
      date: "2023-04-21",
      title: "WEBINAR on Migrating your Sitecore DXP to XM Cloud",
      description: "Step-by-step guide to migrating from DXP to XM Cloud.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://nl.linkedin.com/in/robhabraken" }
      ],
      tags: ["XM Cloud", "DXP", "Migration", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 17,
      date: "2023-03-22",
      title: "WEBINAR On Getting Started With Sitecore Experience Edge",
      description: "Introduction and getting started guide for Sitecore Experience Edge.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      tags: ["Experience Edge", "Getting Started", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 18,
      date: "2023-02-23",
      title: "WEBINAR On Sitecore Headless CMS: Content Hub One",
      description: "Explore Sitecore's headless CMS approach with Content Hub One.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      tags: ["Headless CMS", "Content Hub One", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 19,
      date: "2022-08-29",
      title: "Webinar on Extend Analytics Reporting with Sitecore xDB Data",
      description: "Extend your analytics reporting using Sitecore xDB data.",
      time: "7:00 PM - 8:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      tags: ["Analytics", "xDB", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 20,
      date: "2022-07-13",
      title: "WEBINAR on A developer introduction to Content Hub",
      description: "Developer-focused introduction to Sitecore Content Hub.",
      time: "7:00 PM - 8:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://nl.linkedin.com/in/robhabraken" }
      ],
      tags: ["Content Hub", "Development", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 21,
      date: "2022-05-25",
      title: "WEBINAR On Disaster Recovery and High availability with Sitecore Managed Cloud",
      description: "Learn about disaster recovery and high availability in Sitecore Managed Cloud.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Jitendra Soni", linkedin: "https://www.linkedin.com/in/jitendra-soni-58985317/" }
      ],
      tags: ["Disaster Recovery", "High Availability", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 22,
      date: "2022-04-26",
      title: "WEBINAR on Are frameworks or accelerators evil? Should you care about SXA or JSS?",
      description: "Discuss the role of frameworks and accelerators in Sitecore development.",
      time: "5:00 PM - 6:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Peter Procházka", linkedin: "https://www.linkedin.com/in/chorpo/" }
      ],
      tags: ["SXA", "JSS", "Frameworks", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 23,
      date: "2022-02-24",
      title: "WEBINAR on Tips and Tricks for building accessible Sitecore Solutions",
      description: "Best practices for building accessible Sitecore solutions.",
      time: "6:00 PM - 7:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      tags: ["Accessibility", "Best Practices", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 24,
      date: "2021-09-30",
      title: "WEBINAR on Sitecore Docker-Zero to Hero - Part 1",
      description: "Introduction to Docker for Sitecore - Part 1 of the series.",
      time: "6:00 PM - 7:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Mohamed Nizarudeen", linkedin: "https://in.linkedin.com/in/nizarmd2" }
      ],
      tags: ["Docker", "Introduction", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 25,
      date: "2021-08-30",
      title: "WEBINAR on Centralize the Email Preferences of your customers",
      description: "Implement centralized email preference management in Sitecore.",
      time: "6:00 PM - 7:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      tags: ["Email Preferences", "EXM", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 26,
      date: "2021-06-29",
      title: "WEBINAR on Sitecore SXA Best Practices and Secrets",
      description: "Advanced best practices and insider secrets for Sitecore SXA.",
      time: "6:00 PM - 7:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Jitendra Soni", linkedin: "https://www.linkedin.com/in/jitendra-soni-58985317/" }
      ],
      tags: ["SXA", "Best Practices", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 27,
      date: "2021-02-23",
      title: "WEBINAR on Sitecore Horizon",
      description: "Introduction to Sitecore Horizon next-generation authoring experience.",
      time: "6:00 PM - 7:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      tags: ["Horizon", "Authoring", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 28,
      date: "2020-09-23",
      title: "WEBINAR on Integrate with Sitecore Content Hub from an external application",
      description: "Learn how to integrate Sitecore Content Hub from external applications.",
      time: "7:00 PM - 8:00 PM IST",
      venue: "Online",
      speakers: [
        { name: "Akshay Sura", linkedin: "https://www.linkedin.com/in/akshaysura/" }
      ],
      tags: ["Content Hub", "Integration", "Webinar"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    },
    {
      id: 29,
      date: "2019-08-31",
      title: "Meet Up of SUG CHENNAI",
      description: "In-person meetup of Sitecore User Group Chennai community.",
      time: "10:00 AM - 1:00 PM IST",
      venue: "Amexx Technologies, Chennai",
      speakers: [
        { name: "Community", linkedin: "" }
      ],
      tags: ["Meetup", "Community"],
      status: "completed",
      registerLink: "https://forms.gle/mnNefUYWEunT3SGh9"
    }
  ],

  webinars: [
    {
    id: "wmn51qttj",
    title: "From JSS to Content SDK: Modernizing XM Cloud Development with Next.js App Router",
    date: "2025-12-05",
    time: "5:00 PM - 6:00 PM IST",
    duration: "41 mins",
    youtubeId: "2GPpuFajmKk",
    speakers: [
      {
        name: "Kamatchi Manoharan",
        linkedin: "https://www.linkedin.com/in/kamatchi-manoharan-b3770233/"
      }
    ],
    description: "A guide to transitioning from JSS to the Content SDK and adopting Next.js App Router for modern XM Cloud development.",
    tags: [
      "XM Cloud",
      "Content SDK"
    ],
    status: "completed"
  },
  {
    id: "wmn51oz9n",
    title: "Using Sitecore AI Embedded Personalization with Content SDK",
    date: "2025-11-26",
    time: "5:00 PM - 6:00 PM IST",
    duration: "30 mins",
    youtubeId: "KxAc4G-aloo",
    speakers: [
      {
        name: "Varalakshmi MD",
        linkedin: "https://www.linkedin.com/in/varalakshmi-md-sitecore/"
      },
      {
        name: "Debtanu Biswas",
        linkedin: "https://www.linkedin.com/in/debtanu-biswas-92287596/"
      }
    ],
    description: "An overview of leveraging Sitecore AI personalization features through the Content SDK for tailored digital experiences.",
    tags: [
      "Sitecore AI",
      "Content SDK",
      "AIPersonalization"
    ],
    status: "completed"
  },
  {
    id: "wmn51n8ax",
    title: "Working with Custom Fields in Sitecore XM Cloud via Marketplace App",
    date: "2025-10-31",
    time: "5:00 PM - 6:00 PM IST",
    duration: "42 mins",
    youtubeId: "ySOmu_upNKQ",
    speakers: [
      {
        name: "Sumit Bhatia",
        linkedin: "https://www.linkedin.com/in/sbhatia209/"
      }
    ],
    description: "A practical guide to creating and managing custom fields in Sitecore XM Cloud using the Marketplace App.",
    tags: [
      "XM Cloud", "Sitecore Marketplace"
    ],
    status: "completed"
  },
    {
      id: 1,
      title: "Getting Started with Sitecore Stream",
      description: "An introduction to Sitecore Stream capabilities and getting started guide.",
      speakers: [
        { name: "Nikita Vashisht", linkedin: "https://www.linkedin.com/in/nikita-vashisht/" },
        { name: "Shreyansh Nahata", linkedin: "https://www.linkedin.com/in/shreyanshnahata27/" }
      ],
      youtubeId: "K6n4McOZ7So",
      date: "2025-09-12",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Sitecore Stream", "Getting Started"],
      duration: "60 mins",
      status: "completed"
    },
    {
      id: 2,
      title: "Sitecore XM Cloud Embedded Personalize: Out-of-the-box",
      description: "Learn about the out-of-the-box capabilities of Embedded Personalize in XM Cloud.",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      youtubeId: "9O_8QBZqpO0",
      date: "2024-06-06",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["XM Cloud", "Personalization"],
      duration: "58 mins",
      status: "completed"
    },
    {
      id: 3,
      title: "Better Sitecore XM/XP deployments with Kubernetes",
      description: "Explore best practices for deploying Sitecore XM and XP using Kubernetes.",
      speakers: [
        { name: "Peter Procházka", linkedin: "https://www.linkedin.com/in/chorpo/" }
      ],
      youtubeId: "NW_S9EHbFJE",
      date: "2024-05-23",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Kubernetes", "Deployment"],
      duration: "52 mins",
      status: "completed"
    },
    {
      id: 4,
      title: "Paths Forward on Sitecore: XM headless or XM Cloud?",
      description: "Compare and contrast XM headless and XM Cloud approaches.",
      speakers: [
        { name: "Jason St-Cyr", linkedin: "https://www.linkedin.com/in/jasonstcyr/" }
      ],
      youtubeId: "fYsTUeZxdts",
      date: "2025-01-24",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["XM Cloud", "Headless"],
      duration: "45 mins",
      status: "completed"
    },
    {
      id: 5,
      title: "Component Builder in XM Cloud",
      description: "Deep dive into Component Builder functionality in XM Cloud.",
      speakers: [
        { name: "Varalakshmi MD", linkedin: "https://www.linkedin.com/in/varalakshmi-md-sitecore/" },
        { name: "Debtanu Biswas", linkedin: "https://www.linkedin.com/in/debtanu-biswas-92287596/" }
      ],
      youtubeId: "JVoruC0iWuE",
      date: "2024-11-15",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["XM Cloud", "Components"],
      duration: "48 mins",
      status: "completed"
    },
    {
      id: 6,
      title: "A Starter's Roadmap to Navigating XM Cloud",
      description: "A comprehensive roadmap for beginners to get started with XM Cloud.",
      speakers: [
        { name: "Nikita Vashisht", linkedin: "https://www.linkedin.com/in/nikita-vashisht/" },
        { name: "Shreyansh Nahata", linkedin: "https://www.linkedin.com/in/shreyanshnahata27/" }
      ],
      youtubeId: "8XHkT1HaV7E",
      date: "2024-09-13",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["XM Cloud", "Getting Started"],
      duration: "62 mins",
      status: "completed"
    },
    {
      id: 7,
      title: "Seamless Integration: Sitecore Search Strategies on Textual Relevance, Filtering, Faceting, Personalization and More",
      description: "Comprehensive guide to Sitecore Search integration strategies.",
      speakers: [
        { name: "Syed Akhtar", linkedin: "https://www.linkedin.com/in/syedakhtar/" }
      ],
      youtubeId: "NqDKgIbldyM",
      date: "2024-08-23",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Sitecore Search", "Integration"],
      duration: "55 mins",
      status: "completed"
    },
    {
      id: 8,
      title: "Content Hub One - Lightweight & lightning-fast",
      description: "Explore the capabilities of lightweight Content Hub One.",
      speakers: [
        { name: "Yamini Punyavathi Muttevi", linkedin: "https://www.linkedin.com/in/yamini-punyavathi-muttevi-15514213a/" }
      ],
      youtubeId: "ZskVSn-4Mtk",
      date: "2024-07-26",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Content Hub One", "Lightweight"],
      duration: "51 mins",
      status: "completed"
    },
    {
      id: 9,
      title: "Future-Proofing Your Digital Transformation with Sitecore Headless Services",
      description: "Learn how to future-proof your digital transformation with headless Sitecore.",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      youtubeId: "vfGjGQ5ziUQ",
      date: "2024-06-21",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Headless", "Digital Transformation"],
      duration: "44 mins",
      status: "completed"
    },
    {
      id: 10,
      title: "Sitecore Content Cloud: The multiple faces of Content Authoring",
      description: "Explore different approaches to content authoring in Sitecore Content Cloud.",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      youtubeId: "E1Wn8IUJPYU",
      date: "2024-05-24",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Content Cloud", "Content Authoring"],
      duration: "57 mins",
      status: "completed"
    },
    {
      id: 11,
      title: "Composable Architectures in Sitecore",
      description: "Deep dive into composable architecture patterns in Sitecore.",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://www.linkedin.com/in/robhabraken/" }
      ],
      youtubeId: "kLPZt-Sj7NE",
      date: "2024-03-29",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Composable", "Architecture"],
      duration: "49 mins",
      status: "completed"
    },
    {
      id: 12,
      title: "Learnings of going XM Cloud",
      description: "Real-world learnings and insights from migrating to XM Cloud.",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://www.linkedin.com/in/robhabraken/" }
      ],
      youtubeId: "S-mjHxIojm8",
      date: "2023-10-27",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["XM Cloud", "Migration"],
      duration: "53 mins",
      status: "completed"
    },
    {
      id: 13,
      title: "Sitecore Search and Sitecore Discover: What, Why and How",
      description: "Complete guide to Sitecore Search and Discover capabilities.",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      youtubeId: "lwI3LUSatEc",
      date: "2023-09-26",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Sitecore Search", "Discover"],
      duration: "46 mins",
      status: "completed"
    },
    {
      id: 14,
      title: "Working with Sitecore's ASP.NET Core Rendering SDK",
      description: "Learn how to work with Sitecore's ASP.NET Core Rendering SDK.",
      speakers: [
        { name: "Anindita Bhattacharya", linkedin: "https://www.linkedin.com/in/aceanindita/" }
      ],
      youtubeId: "tE_nNXeSoRE",
      date: "2023-08-22",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["ASP.NET Core", "Rendering SDK"],
      duration: "50 mins",
      status: "completed"
    },
    {
      id: 15,
      title: "Migrating to XM Cloud",
      description: "Comprehensive guide to migrating your Sitecore instance to XM Cloud.",
      speakers: [
        { name: "Jason St-Cyr", linkedin: "https://www.linkedin.com/in/jasonstcyr/" }
      ],
      youtubeId: "Fby5gUk_a8M",
      date: "2023-07-27",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["XM Cloud", "Migration"],
      duration: "48 mins",
      status: "completed"
    },
    {
      id: 16,
      title: "How to work with Sitecore Forms with JSS + React",
      description: "Working with Sitecore Forms in JSS and React applications.",
      speakers: [
        { name: "Peter Procházka", linkedin: "https://www.linkedin.com/in/chorpo/" }
      ],
      youtubeId: "kb1OrGITEr8",
      date: "2023-05-22",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Forms", "JSS", "React"],
      duration: "60 mins",
      status: "completed"
    },
    {
      id: 17,
      title: "Migrating your Sitecore DXP to XM Cloud",
      description: "Step-by-step guide to migrating from DXP to XM Cloud.",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://www.linkedin.com/in/robhabraken/" }
      ],
      youtubeId: "EMxyJG6gyZc",
      date: "2023-04-21",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["XM Cloud", "DXP", "Migration"],
      duration: "54 mins",
      status: "completed"
    },
    {
      id: 18,
      title: "Getting Started With Sitecore Experience Edge",
      description: "Introduction and getting started guide for Sitecore Experience Edge.",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      youtubeId: "taOAMi3GCZQ",
      date: "2023-03-22",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Experience Edge", "Getting Started"],
      duration: "43 mins",
      status: "completed"
    },
    {
      id: 19,
      title: "Sitecore Headless CMS: Content Hub One",
      description: "Explore Sitecore's headless CMS approach with Content Hub One.",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      youtubeId: "WpbTE0YaEQY",
      date: "2023-02-23",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Headless CMS", "Content Hub One"],
      duration: "47 mins",
      status: "completed"
    },
    {
      id: 20,
      title: "Setting up CI CD for Sitecore Managed Cloud",
      description: "Best practices for CI/CD setup in Sitecore Managed Cloud.",
      speakers: [
        { name: "Anindita Bhattacharya", linkedin: "https://www.linkedin.com/in/aceanindita/" }
      ],
      youtubeId: "3ZN1eXwEF4U",
      date: "2022-10-21",
      time: "5:00 PM - 5:45 PM IST",
      tags: ["CI/CD", "Managed Cloud"],
      duration: "45 mins",
      status: "completed"
    },
    {
      id: 21,
      title: "Extend Analytics Reporting with Sitecore xDB Data",
      description: "Extend your analytics reporting using Sitecore xDB data.",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      youtubeId: "ALvrsgeWYX4",
      date: "2022-08-29",
      time: "7:00 PM - 8:00 PM IST",
      tags: ["Analytics", "xDB"],
      duration: "56 mins",
      status: "completed"
    },
    {
      id: 22,
      title: "A developer introduction to Content Hub",
      description: "Developer-focused introduction to Sitecore Content Hub.",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://www.linkedin.com/in/robhabraken/" }
      ],
      youtubeId: "K-xJEGXlO7k",
      date: "2022-07-13",
      time: "7:00 PM - 8:00 PM IST",
      tags: ["Content Hub", "Development"],
      duration: "59 mins",
      status: "completed"
    },
    {
      id: 23,
      title: "Disaster Recovery and High availability with Sitecore Managed Cloud",
      description: "Learn about disaster recovery and high availability in Sitecore Managed Cloud.",
      speakers: [
        { name: "Jitendra Soni", linkedin: "https://www.linkedin.com/in/jitendra-soni-58985317/" }
      ],
      youtubeId: "GNJ9_0pgprg",
      date: "2022-05-25",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Disaster Recovery", "High Availability"],
      duration: "51 mins",
      status: "completed"
    },
    {
      id: 24,
      title: "Are frameworks or accelerators evil? Should you care about SXA or JSS?",
      description: "Discuss the role of frameworks and accelerators in Sitecore development.",
      speakers: [
        { name: "Peter Procházka", linkedin: "https://www.linkedin.com/in/chorpo/" }
      ],
      youtubeId: "8vVU6JlVLyI",
      date: "2022-04-26",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["SXA", "JSS", "Frameworks"],
      duration: "53 mins",
      status: "completed"
    },
    {
      id: 25,
      title: "Tips and Tricks for building accessible Sitecore Solutions",
      description: "Best practices for building accessible Sitecore solutions.",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      youtubeId: "1qZoLu1tJKQ",
      date: "2022-02-24",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["Accessibility", "Best Practices"],
      duration: "58 mins",
      status: "completed"
    },
    {
      id: 26,
      title: "Sitecore Docker-Zero to Hero - Part 2",
      description: "Advanced Docker concepts for Sitecore - Part 2 of the series.",
      speakers: [
        { name: "Mohamed Nizarudeen", linkedin: "https://in.linkedin.com/in/nizarmd2" }
      ],
      youtubeId: "swcs7heaBBs",
      date: "2021-11-25",
      time: "1:00 PM - 2:00 PM IST",
      tags: ["Docker", "Advanced"],
      duration: "47 mins",
      status: "completed"
    },
    {
      id: 27,
      title: "Sitecore Docker-Zero to Hero - Part 1",
      description: "Introduction to Docker for Sitecore - Part 1 of the series.",
      speakers: [
        { name: "Mohamed Nizarudeen", linkedin: "https://in.linkedin.com/in/nizarmd2" }
      ],
      youtubeId: "9a7gAwqrh_w",
      date: "2021-09-30",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["Docker", "Introduction"],
      duration: "55 mins",
      status: "completed"
    },
    {
      id: 28,
      title: "Centralize the Email Preferences of your customers",
      description: "Implement centralized email preference management in Sitecore.",
      speakers: [
        { name: "Amit Kumar", linkedin: "https://www.linkedin.com/in/kumaramitkumar/" }
      ],
      youtubeId: "XT38-6RRjL0",
      date: "2021-08-30",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["Email Preferences", "EXM"],
      duration: "52 mins",
      status: "completed"
    },
    {
      id: 29,
      title: "Sitecore SXA Best Practices and Secrets",
      description: "Advanced best practices and insider secrets for Sitecore SXA.",
      speakers: [
        { name: "Jitendra Soni", linkedin: "https://www.linkedin.com/in/jitendra-soni-58985317/" }
      ],
      youtubeId: "NJXfo-SoIqU",
      date: "2021-06-29",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["SXA", "Best Practices"],
      duration: "49 mins",
      status: "completed"
    },
    {
      id: 30,
      title: "Heads-up Front-End Developers for Sitecore!",
      description: "Front-end development considerations for Sitecore projects.",
      speakers: [
        { name: "Anindita Bhattacharya", linkedin: "https://www.linkedin.com/in/aceanindita/" }
      ],
      youtubeId: "q8EdLre-Iwg",
      date: "2021-05-21",
      time: "5:00 PM - 6:00 PM IST",
      tags: ["Front-End", "Development"],
      duration: "46 mins",
      status: "completed"
    },
    {
      id: 31,
      title: "Sitecore JSS - From Hero to Zero and Back to Hero",
      description: "Comprehensive guide to Sitecore JSS journey and best practices.",
      speakers: [
        { name: "Peter Procházka", linkedin: "https://www.linkedin.com/in/chorpo/" }
      ],
      youtubeId: "SW2t5XA9y7U",
      date: "2021-04-29",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["JSS", "JavaScript"],
      duration: "50 mins",
      status: "completed"
    },
    {
      id: 32,
      title: "True Omnichannel Content Delivery with Sitecore Experience Edge",
      description: "Omnichannel content delivery strategies using Sitecore Experience Edge.",
      speakers: [
        { name: "Mark Van Aalst", linkedin: "https://www.linkedin.com/in/markvanaalst/" },
        { name: "Pieter Brinkman", linkedin: "https://www.linkedin.com/in/pbrink/" }
      ],
      youtubeId: "65XDriWz6ps",
      date: "2021-03-12",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["Omnichannel", "Experience Edge"],
      duration: "48 mins",
      status: "completed"
    },
    {
      id: 33,
      title: "Sitecore Horizon",
      description: "Introduction to Sitecore Horizon next-generation authoring experience.",
      speakers: [
        { name: "Ishraq Al Fataftah", linkedin: "https://www.linkedin.com/in/ishraq-al-fataftah-a35b8b15/" }
      ],
      youtubeId: "D-mj5PYUR7k",
      date: "2021-02-23",
      time: "6:00 PM - 7:00 PM IST",
      tags: ["Horizon", "Authoring"],
      duration: "45 mins",
      status: "completed"
    },
    {
      id: 34,
      title: "Integrated DevOps in a Sitecore Landscape",
      description: "DevOps best practices and integration strategies for Sitecore.",
      speakers: [
        { name: "Rob Habraken", linkedin: "https://www.linkedin.com/in/robhabraken/" }
      ],
      youtubeId: "i99zBaacWZw",
      date: "2020-11-19",
      time: "7:00 PM - 8:00 PM IST",
      tags: ["DevOps", "Integration"],
      duration: "54 mins",
      status: "completed"
    }
  ],

  team: [
    {
      name: "Kishore Yatheendra",
      role: "Founder",
      title: "Delivery Director",
      image: "images/team/kishore.jpg",
      linkedin: "https://www.linkedin.com/in/ty-kishore-2399564/",
      twitter: "https://twitter.com/kishore_ty"
    },
    {
      name: "Mohamed Nizarudeen",
      role: "Co-Founder",
      title: "Sitecore MVP & Main Organizer",
      image: "images/team/Nizarudeen.jpg",
      linkedin: "https://www.linkedin.com/in/nizarmd2/",
      twitter: "https://twitter.com/nizarmd2",
      web: "https://meerannizar.wordpress.com/about-me/"
    },
    {
      name: "Gopikrishna Reddy Gujjula",
      role: "SUG Advisor",
      title: "Sitecore MVP 2019",
      image: "images/team/gopikrishna.jpg",
      linkedin: "https://www.linkedin.com/in/gopigujjula/",
      twitter: "https://twitter.com/gopigujjula"
    },
    {
      name: "Debi Prasanna Bej",
      role: "Founding Member",
      title: "Sitecore Certified Professional",
      image: "images/team/prasanna.jpg",
      linkedin: "http://www.linkedin.com/in/debiprasannabej"
    },
    {
      name: "Sujita Chandran",
      role: "Core Committee Member",
      title: "Sitecore Certified Professional",
      image: "images/team/sujita.jpg",
      linkedin: "https://www.linkedin.com/in/sujita-chandran-0a30803b/"
    },
    {
      name: "Vinothini Durairaj",
      role: "Member",
      title: "Sitecore Certified Professional",
      image: "images/team/vinothini.jpg",
      linkedin: "https://www.linkedin.com/in/vinothini-durairaj-27a4a979/"
    },
    {
      name: "Vikash Raaj",
      role: "Committee Member",
      title: "Sitecore Certified Professional",
      image: "images/team/vikash_raaj.jpg",
      linkedin: "https://www.linkedin.com/in/vikash-raaj/",
      twitter: "https://twitter.com/VIKASHRAAJB"
    },
    {
      name: "Karthikeyan Manickavasagam",
      role: "Committee Member & Organizer",
      title: "Sitecore Certified Professional",
      image: "images/team/KarthikeyanManickavasagam.jpg",
      linkedin: "https://www.linkedin.com/in/karthikeyan-manickavasagam-31661534/",
      web: "https://karthiksolution.wordpress.com/",
      bluesky: "https://bsky.app/profile/keyan16.bsky.social"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SUGData;
}
