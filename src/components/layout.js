import React from "react"
import PropTypes from "prop-types"

import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    shades: {
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    red: {
      m50: "#FFEBEE",
      m100: "#FFCDD2",
      m200: "#EF9A9A",
      m300: "#E57373",
      m400: "#EF5350",
      m500: "#F44336",
      m600: "#E53935",
      m700: "#D32F2F",
      m800: "#C62828",
      m900: "#B71C1C",
      a100: "#FF8A80",
      a200: "#FF5252",
      a400: "#FF1744",
      a700: "#D50000",
    },
    pink: {
      m50: "#fce4ec",
      m100: "#f8bbd0",
      m200: "#f48fb1",
      m300: "#f06292",
      m400: "#ec407a",
      m500: "#e91e63",
      m600: "#d81b60",
      m700: "#c2185b",
      m800: "#ad1457",
      m900: "#880e4f",
      a100: "#ff80ab",
      a200: "#ff4081",
      a400: "#f50057",
      a700: "#c51162",
    },
    purple: {
      m50: "#f3e5f5",
      m100: "#e1bee7",
      m200: "#ce93d8",
      m300: "#ba68c8",
      m400: "#ab47bc",
      m500: "#9c27b0",
      m600: "#8e24aa",
      m700: "#7b1fa2",
      m800: "#6a1b9a",
      m900: "#4a148c",
      a100: "#ea80fc",
      a200: "#e040fb",
      a400: "#d500f9",
      a700: "#aa00ff",
    },
    deepPurple: {
      m50: "#ede7f6",
      m100: "#d1c4e9",
      m200: "#b39ddb",
      m300: "#9575cd",
      m400: "#7e57c2",
      m500: "#673ab7",
      m600: "#5e35b1",
      m700: "#512da8",
      m800: "#4527a0",
      m900: "#311b92",
      a100: "#b388ff",
      a200: "#7c4dff",
      a400: "#651fff",
      a700: "#6200ea",
    },
    indigo: {
      m50: "#e8eaf6",
      m100: "#c5cae9",
      m200: "#9fa8da",
      m300: "#7986cb",
      m400: "#5c6bc0",
      m500: "#3f51b5",
      m600: "#3949ab",
      m700: "#303f9f",
      m800: "#283593",
      m900: "#1a237e",
      a100: "#8c9eff",
      a200: "#536dfe",
      a400: "#3d5afe",
      a700: "#304ffe",
    },
    blue: {
      m50: "#E3F2FD",
      m100: "#BBDEFB",
      m200: "#90CAF9",
      m300: "#64B5F6",
      m400: "#42A5F5",
      m500: "#2196F3",
      m600: "#1E88E5",
      m700: "#1976D2",
      m800: "#1565C0",
      m900: "#0D47A1",
      a100: "#82B1FF",
      a200: "#448AFF",
      a400: "#2979FF",
      a700: "#2962FF",
    },
    lightBlue: {
      m50: "#e1f5fe",
      m100: "#b3e5fc",
      m200: "#81d4fa",
      m300: "#4fc3f7",
      m400: "#29b6f6",
      m500: "#03a9f4",
      m600: "#039be5",
      m700: "#0288d1",
      m800: "#0277bd",
      m900: "#01579b",
      a100: "#80d8ff",
      a200: "#40c4ff",
      a400: "#00b0ff",
      a700: "#0091ea",
    },
    cyan: {
      m50: "#e0f7fa",
      m100: "#b2ebf2",
      m200: "#80deea",
      m300: "#4dd0e1",
      m400: "#26c6da",
      m500: "#00bcd4",
      m600: "#00acc1",
      m700: "#0097a7",
      m800: "#00838f",
      m900: "#006064",
      a100: "#84ffff",
      a200: "#18ffff",
      a400: "#00e5ff",
      a700: "#00b8d4",
    },
    teal: {
      m50: "#e0f2f1",
      m100: "#b2dfdb",
      m200: "#80cbc4",
      m300: "#4db6ac",
      m400: "#26a69a",
      m500: "#009688",
      m600: "#00897b",
      m700: "#00796b",
      m800: "#00695c",
      m900: "#004d40",
      a100: "#a7ffeb",
      a200: "#64ffda",
      a400: "#1de9b6",
      a700: "#00bfa5",
    },
    green: {
      m50: "#E8F5E9",
      m100: "#C8E6C9",
      m200: "#A5D6A7",
      m300: "#81C784",
      m400: "#66BB6A",
      m500: "#4CAF50",
      m600: "#43A047",
      m700: "#388E3C",
      m800: "#2E7D32",
      m900: "#1B5E20",
      a100: "#B9F6CA",
      a200: "#69F0AE",
      a400: "#00E676",
      a700: "#00C853",
    },
    lightGreen: {
      m50: "#f1f8e9",
      m100: "#dcedc8",
      m200: "#c5e1a5",
      m300: "#aed581",
      m400: "#9ccc65",
      m500: "#8bc34a",
      m600: "#7cb342",
      m700: "#689f38",
      m800: "#558b2f",
      m900: "#33691e",
      a100: "#ccff90",
      a200: "#b2ff59",
      a400: "#76ff03",
      a700: "#64dd17",
    },
    lime: {
      m50: "#f9fbe7",
      m100: "#f0f4c3",
      m200: "#e6ee9c",
      m300: "#dce775",
      m400: "#d4e157",
      m500: "#cddc39",
      m600: "#c0ca33",
      m700: "#afb42b",
      m800: "#9e9d24",
      m900: "#827717",
      a100: "#f4ff81",
      a200: "#eeff41",
      a400: "#c6ff00",
      a700: "#aeea00",
    },
    yellow: {
      m50: "#fffde7",
      m100: "#fff9c4",
      m200: "#fff59d",
      m300: "#fff176",
      m400: "#ffee58",
      m500: "#ffeb3b",
      m600: "#fdd835",
      m700: "#fbc02d",
      m800: "#f9a825",
      m900: "#f57f17",
      a100: "#ffff8d",
      a200: "#ffff00",
      a400: "#ffea00",
      a700: "#ffd600",
    },
    amber: {
      m50: "#fff8e1",
      m100: "#ffecb3",
      m200: "#ffe082",
      m300: "#ffd54f",
      m400: "#ffca28",
      m500: "#ffc107",
      m600: "#ffb300",
      m700: "#ffa000",
      m800: "#ff8f00",
      m900: "#ff6f00",
      a100: "#ffe57f",
      a200: "#ffd740",
      a400: "#ffc400",
      a700: "#ffab00",
    },
    orange: {
      m50: "#fff3e0",
      m100: "#ffe0b2",
      m200: "#ffcc80",
      m300: "#ffb74d",
      m400: "#ffa726",
      m500: "#ff9800",
      m600: "#fb8c00",
      m700: "#f57c00",
      m800: "#ef6c00",
      m900: "#e65100",
      a100: "#ffd180",
      a200: "#ffab40",
      a400: "#ff9100",
      a700: "#ff6d00",
    },
    deepOrange: {
      m50: "#fbe9e7",
      m100: "#ffccbc",
      m200: "#ffab91",
      m300: "#ff8a65",
      m400: "#ff7043",
      m500: "#ff5722",
      m600: "#f4511e",
      m700: "#e64a19",
      m800: "#d84315",
      m900: "#bf360c",
      a100: "#ff9e80",
      a200: "#ff6e40",
      a400: "#ff3d00",
      a700: "#dd2c00",
    },
    brown: {
      m50: "#efebe9",
      m100: "#d7ccc8",
      m200: "#bcaaa4",
      m300: "#a1887f",
      m400: "#8d6e63",
      m500: "#795548",
      m600: "#6d4c41",
      m700: "#5d4037",
      m800: "#4e342e",
      m900: "#3e2723",
    },
    blueGrey: {
      m50: "#eceff1",
      m100: "#cfd8dc",
      m200: "#b0bec5",
      m300: "#90a4ae",
      m400: "#78909c",
      m500: "#607d8b",
      m600: "#546e7a",
      m700: "#455a64",
      m800: "#37474f",
      m900: "#263238",
    },
    grey: {
      m50: "#fafafa",
      m100: "#f5f5f5",
      m200: "#eeeeee",
      m300: "#e0e0e0",
      m400: "#bdbdbd",
      m500: "#9e9e9e",
      m600: "#757575",
      m700: "#616161",
      m800: "#424242",
      m900: "#212121",
    },
  },
}

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
