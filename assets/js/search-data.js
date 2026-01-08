// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "research team, RACOON team and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "projects-thoravis",
          title: 'THORAVIS',
          description: "Learning shared image–text representations for thoracic radiology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project_.html";
            },},{id: "projects-stoned",
          title: 'STONED',
          description: "Spectral photon-counting CT for material discrimination of renal stones",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project.html";
            },},{id: "projects-tsapdos",
          title: 'TSAPDOS',
          description: "Tissue-specific dosimetry using additively manufactured anthropomorphic phantoms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_RACOON.html";
            },},{id: "projects-mineral",
          title: 'MINERAL',
          description: "Spectral CT validation of virtual monoenergetic imaging for bone mineral density assessment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-traject",
          title: 'TRAJECT',
          description: "AI-driven analysis of longitudinal patient trajectories across radiology and radiotherapy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-dentect",
          title: 'DENTECT',
          description: "Automated detection and evaluation of dental findings using photon-counting CT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-pedihdact",
          title: 'PEDIHDACT',
          description: "Spectral photon-counting CT for anthropomorphic pediatric phantom evaluation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-graded",
          title: 'GRADED',
          description: "Monte Carlo CT dose modelling with deep-learning acceleration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-adipodose",
          title: 'ADIPODOSE',
          description: "Quantifying the impact of body fat on patient-specific SSDE in CT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-thermex",
          title: 'THERMEX',
          description: "Spectral CT-based thermometry from temperature-dependent attenuation changes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-thoraclass",
          title: 'THORACLASS',
          description: "Report-guided image classification of thoracic CT examinations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%6B%6C%61%73.%61%6E%64%72%65.%6C%61%63%6B%6E%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/niklas-a-lackner-ab37b614b", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vwzlypEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
