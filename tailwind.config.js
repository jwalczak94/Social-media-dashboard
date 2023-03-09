module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebookColor: "hsl(208, 92%, 53%)",
        twitterColor: "hsl(203, 89%, 53%)",
        instagramColor1: "hsl(37, 97%, 70%)",
        instagramColor2: "hsl(329, 70%, 58%)",
        youTubeColor: "hsl(348, 97%, 39%)",

        backgroundDark: "hsl(230, 17%, 14%)",
        backgroundTopDark: "hsl(232, 19%, 15%)",
        cardDark: "hsl(228, 28%, 20%)",
        textBlueDark: "hsl(228, 34%, 66%)",
        whiteFont: "hsl(0, 0%, 100%)",

        backgroundTopLight: "hsl(225, 100%, 98%)",
        cardLight: "hsl(227, 47%, 96%)",
        textGreyLight: "hsl(228, 12%, 44%)",
        textBlueLight: "hsl(230, 17%, 14%)",

        themeUnabled: "hsl(230, 22%, 74%)",
        cardHover: "hsla(228, 33%, 91%, 1)",

        gradientStart: "hsl(210, 78%, 56%)",
        gradientEnd: "hsl(146, 68%, 55%)",
      },
      gridTemplateColumns: {
        4: "repeat(4, 1fr)",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "550px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
