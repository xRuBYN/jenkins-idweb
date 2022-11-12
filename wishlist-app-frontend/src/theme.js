const theme = {
  colors: {
    black: "#292929",
    green: "#1BA345",
    white: "#FAFAFA",
    gold: "#FF9F2B",
    lightBlue: "#39ABEB",
    grey: "#808080",
    red: "#F70F1C",
    hoverRed: "#de131e",
    homeGradient:
      "linear-gradient(180deg, rgba(255, 179, 65, 0.71) 0%, #FF971D 100%)",
  },

  // desktop global padding - 15 (9rem)
  // mobile global padding - 5 (1rem)
  space: [
    "0rem",
    ".25rem",
    ".5rem",
    ".7rem",
    ".75rem",
    "1rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "7rem",
    "8rem",
    "9rem",
    "10rem",
  ],

  breakpoints: [
    "0px", // 0
    "320px", // 1
    "376px", // 2
    "576px", // 3
    "768px", // 4
    "992px", // 5
    "1200px", // 6
    "1600px", // 7
    "2000px", // 8
    "1440px", // 9
  ],
  heightBreakpoints: ["670px", "1025px"],
}

theme.breakpoints.xs = theme.breakpoints[0]
theme.breakpoints.xss = theme.breakpoints[1]
theme.breakpoints.hs = theme.breakpoints[2]
theme.breakpoints.sm = theme.breakpoints[3]
theme.breakpoints.md = theme.breakpoints[4]
theme.breakpoints.lg = theme.breakpoints[5]
theme.breakpoints.xl = theme.breakpoints[6]
theme.breakpoints.xxl = theme.breakpoints[7]
theme.breakpoints.xxxl = theme.breakpoints[8]
theme.breakpoints.laptop = theme.breakpoints[9]

theme.heightBreakpoints.iphoneUpTo8 = theme.heightBreakpoints[0]
theme.heightBreakpoints.tablet = theme.heightBreakpoints[1]

export default theme
