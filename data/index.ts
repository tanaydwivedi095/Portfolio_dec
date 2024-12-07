import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Publications", link: "#publications" },
  { name: "Experiences", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "I constantly try to improve my",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast trying to push past limits.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Large Language Model.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b4.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Story Generator",
    des: "AI-driven story generator creating endless, interactive, unique narratives.",
    img: "/myp1.png",
    iconLists: ["/pytorch.svg", "/gpt.webp", "/python.png", "/gradio.png"],
    link: "//github.com/tanaydwivedi095/storyGenerator",
  },
  {
    id: 2,
    title: "Movie Subtitle Generator",
    des: "AI-powered tool generating accurate, real-time movie subtitles.",
    img: "/myp2.png",
    iconLists: ["/pytorch.svg", "/gpt.webp", "/python.png", "/streamlit.png"],
    link: "//github.com/tanaydwivedi095/movieSubtitleGenerator",
  },
  {
    id: 3,
    title: "Skin Cancer Classification System",
    des: "AI-driven skin cancer classifier using transfer learning and transformers.",
    img: "/myp3.png",
    iconLists: ["/python.png", "/pytorch.svg", "/streamlit.png", "/tensorflow.svg", "/sklearn.svg"],
    link: "//github.com/tanaydwivedi095/Streamlit-UI-for-Skin-Cancer-Predictions",
  },
  {
    id: 4,
    title: "Stock Price Predictor",
    des: "Predictive system using machine learning to forecast stock prices.",
    img: "/myp4.png",
    iconLists: ["/python.png", "/tensorflow.svg", "/sklearn.svg"],
    link: "//github.com/tanaydwivedi095/Stock-Price-Prediction-Algorithm",
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    des: "Personalized movie recommendation system delivering tailored suggestions.",
    img: "/myp5.png",
    iconLists: ["/python.png", "/sklearn.svg"],
    link: "//github.com/tanaydwivedi095/Project-Movie-Recommendation-System",
  },
];

export const testimonials = [
  {
    quote:
      "Skin cancer, including melanoma, affects millions globally, and early detection is crucial. Our research presents a lightweight B-16 Vision Image Transformer (LViT) model for accurately classifying skin lesions. Achieving up to 95.82% accuracy, the LViT model is efficient, resource-friendly, and performs well on both small and large datasets, offering an effective solution for skin cancer diagnosis. The work was published in the Springer International Journal of System Assurance Engineering and Management.",
    name: "LViT Model for Skin Cancer Classification.",
    title: "Oct 2023 to Sept 2024",
    link: "https://link.springer.com/article/10.1007/s13198-024-02521-6"
  },
  {
    quote:
      "Skin cancer is the leading cause of cancer-related deaths, requiring early detection for effective treatment. We propose a hybrid CNN model with transfer learning and a random forest classifier to enhance skin cancer detection. Tested on benign and malignant skin mole datasets, the model achieved up to 90.11% accuracy, demonstrating its effectiveness for skin cancer classification. The work was published in the Springer Medical and Biological Engineering and Computing.",
    name: "A hybrid CNN with transfer learning for skin cancer disease detection",
    title: "June 2023 to May 2024",
    link: "https://link.springer.com/article/10.1007/s11517-024-03115-x"
  },
];

export const companies = [
  {
    id: 1,
    name: "PyTorch",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Big Data Engineer - Accenture",
    desc: "Deriving insights from big data streams using Hive, PySpark, Kafka, SQL and Python.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    duration: "Sept 2024 - Current"
  },
  {
    id: 2,
    title: "Machine Learning Intern at Acmegrade",
    desc: "Assisted in the development of a AI-based platform using PyTorch, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    duration: "July 2022 - Sept 2022"
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tanaydwivedi095"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tanaydwivedi095/"
  },
];