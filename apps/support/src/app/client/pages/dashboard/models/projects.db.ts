export interface Project {
    id: string;
    projectName?: string;
    size?: string;
    status?: string;
    location?: string;
    completionDate?: string;
    isActive?: boolean;
    stage?: string;
    dataFile?: string;
    widgets?: Array<any>;
    projectPhotoURL?: string,
    projectHeaderURL?: string,
}
  
  export const projects: Project[] = [
    {
        id: '2348u23489sdg834',
        projectName: "SFO Terminal 3 West Modernization",
        status: "Postponed",
        size: "558997",
        completionDate: "03/17/2021",
        location: "San Francisco, CA",
        isActive: true,
        stage: "100% CD Design",
        dataFile: "./apps/dist/...",
        widgets: [],
        projectPhotoURL: "assets/images/projects/t3w.jpg",
        projectHeaderURL: "http://somephoto.com/pic.jpeg",
      },

      {
        id: '2348u2dfsdfdg8764',
        projectName: "BART Controls Modernization",
        status: "Programming",
        size: "1,158,997 LFT",
        completionDate: "03/17/2024",
        location: "Hayward, CA",
        isActive: true,
        stage: "Programming",
        dataFile: "./apps/dist/...",
        widgets: [],
        projectPhotoURL: "assets/images/projects/bart.jpg",
        projectHeaderURL: "http://somephoto.com/pic.jpeg",
      },
      {
        id: '324234',
        projectName: "SF Crime & Forensics Lab",
        status: "Construction",
        size: "158,997",
        completionDate: "11/17/2020",
        location: "San Francisco, CA",
        isActive: true,
        stage: "Construction",
        dataFile: "./apps/dist/...",
        widgets: [],
        projectPhotoURL: "assets/images/projects/sfcrimelab.jpg",
        projectHeaderURL: "http://somephoto.com/pic.jpeg",
      },
      {
        id: '32422ds34241fgd34',
        projectName: "Long-Baseline Neutrino Facility",
        status: "Construction",
        size: "258,997",
        completionDate: "11/17/2023",
        location: "Lead, SD",
        isActive: true,
        stage: "Procurement",
        dataFile: "./apps/dist/...",
        widgets: [],
        projectPhotoURL: "assets/images/projects/lbnf.jpg",
        projectHeaderURL: "http://somephoto.com/pic.jpeg",
      },
      {
        id: '65876567534',
        projectName: "Golden Gate Tennis Center",
        status: "Construction",
        size: "558997",
        completionDate: "03/17/2021",
        location: "San Francisco, CA",
        isActive: true,
        stage: "Closeout",
        dataFile: "./apps/dist/...",
        widgets: [],
        projectPhotoURL: "assets/images/projects/sftc.jpg",
        projectHeaderURL: "http://somephoto.com/pic.jpeg",
      },

      {
        id: '32t76578656648h',
        projectName: "Gilead NB 357 Pilot Lab",
        status: "Complete",
        size: "558997",
        completionDate: "03/17/2021",
        location: "San Francisco, CA",
        isActive: false,
        stage: "Operations & Maintenance",
        dataFile: "./apps/dist/...",
        widgets: [],
        projectPhotoURL: "assets/images/projects/gilead.jpg",
        projectHeaderURL: "http://somephoto.com/pic.jpeg",
      },
  ];
  