const config = {
  title: "Daiyan Idris Haryanto | Beginner & IoT Developer",
  description: {
    long: "Explore the portfolio of Daiyan Idris Haryanto, a student developer learning full-stack and IoT development through real projects — POS systems, an IoT hydroponics dashboard, a language-learning LMS, and a QRIS security scanner. Let's build something amazing together!",
    short:
      "Discover the portfolio of Daiyan Idris Haryanto, a student developer building POS systems, IoT dashboards, and web apps.",
  },
  keywords: [
    "Daiyan Idris Haryanto",
    "portfolio",
    "beginner developer",
    "IoT developer",
    "student developer",
    "web development",
    "point of sale system",
    "IoT dashboard",
    "web design",
    "React",
    "Next.js",
  ],
  author: "Daiyan Idris Haryanto",
  email: "myide@idrishubs.com",
  site: "https://idrishubs.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagram: "https://www.instagram.com/dyn_idrs",
    youtube: "https://www.youtube.com/@Yan-gc9pb",
    github: "https://github.com/24Developer",
  },
};
export { config };
