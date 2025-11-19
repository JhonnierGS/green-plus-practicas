export const COLORS = {
  // Neutral colors
  "neutral-50": "#FFFAF4",
  "neutral-100": "#FFFFFF",
  "neutral-1000": "#4C4C4C",
  "neutral-1100": "#333333",
  "neutral-1200": "#191919",
  // Primary colors 
  "primary-700": "#B6BD00",
  
  // Secondary colors
  "secondary-100": "#7FBE5E",
  "secondary-700": "#8EDD65",
  "secondary-900": "#69AA47",
  // Tertiary colors
  "tertiary-100": "#FFF0FA",
  "tertiary-200": "#F6DCEE",
  "tertiary-300": "#E6B3D5",
  "tertiary-400": "#D58BBD",
  "tertiary-500": "#C563A4",
  "tertiary-600": "#B43A8B",
  "tertiary-700": "#AC267F",
  "tertiary-800": "#941E6C",
  "tertiary-900": "#881B63",
  "tertiary-1000": "#701350",
  "tertiary-1100": "#570B3E",
  "tertiary-1200": "#3F042B",
  "tertiary-1300": "#330022",

  // Info colors
  "info-100": "#F0F7FF",
  "info-200": "#DAEAFC",
  "info-300": "#AFD1F7",
  "info-400": "#83B7F2",
  "info-500": "#589DED",
  "info-600": "#2D83E8",
  "info-700": "#1776E5",
  "info-800": "#1263C1",
  "info-900": "#105AB0",
  "info-1000": "#0C478C",
  "info-1100": "#073468",
  "info-1200": "#022145",
  "info-1300": "#001833",
  // Success colors
  "success-100": "#F5FFF5",
  "success-200": "#E0FAE0",
  "success-300": "#B8F0B8",
  "success-400": "#8FE68F",
  "success-500": "#66DB66",
  "success-600": "#52D652",
  "success-700": "#29CC29",
  "success-800": "#21AD21",
  "success-900": "#1D9E1D",
  "success-1000": "#148014",
  "success-1100": "#0C610C",
  "success-1200": "#044204",
  "success-1300": "#003300",

  // Warning colors
  "warning-100": "#FFFBF0",
  "warning-200": "#FDF3D8",
  "warning-300": "#F9E3A8",
  "warning-400": "#F4D378",
  "warning-500": "#F0C348",
  "warning-600": "#ECB318",
  "warning-700": "#EAAB00",
  "warning-800": "#D89E00",
  "warning-900": "#B38300",
  "warning-1000": "#8F6800",
  "warning-1100": "#6A4D00",
  "warning-1200": "#453300",
  "warning-1300": "#332500",

  // Error colors
  "error-100": "#FFF5F5",
  "error-200": "#FAE0E0",
  "error-300": "#F0B8B8",
  "error-400": "#E68F8F",
  "error-500": "#DB6666",
  "error-600": "#D65252",
  "error-700": "#CC2929",
  "error-800": "#AD2128",
  "error-900": "#9E1D27",
  "error-1000": "#801425",
  "error-1100": "#610C24",
  "error-1200": "#420423",
  "error-1300": "#330022",

  // Transparency white colors
  "whiten-4": "rgba(255, 255, 255, 0.04)",
  "whiten-8": "rgba(255, 255, 255, 0.08)",
  "whiten-16": "rgba(255, 255, 255, 0.16)",
  "whiten-32": "rgba(255, 255, 255, 0.32)",
  "whiten-48": "rgba(255, 255, 255, 0.48)",
  "whiten-64": "rgba(255, 255, 255, 0.64)",
  "whiten-80": "rgba(255, 255, 255, 0.80)",
  "whiten-96": "rgba(255, 255, 255, 0.96)",
  "whiten-white-29": "#FFFFFF29",
  // Transparency dark colors
  "darken-4": "rgba(0, 0, 0, 0.04)",
  "darken-8": "rgba(0, 0, 0, 0.08)",
  "darken-16": "rgba(0, 0, 0, 0.16)",
  "darken-black-29": "#00000029",
  "darken-32": "rgba(0, 0, 0, 0.32)",
  "darken-48": "rgba(0, 0, 0, 0.48)",
  "darken-64": "rgba(0, 0, 0, 0.64)",
  "darken-80": "rgba(0, 0, 0, 0.80)",
  "darken-96": "rgba(0, 0, 0, 0.96)",
  transparent: "transparent",
  

  // Text colors
  "secondary": "#69AA47",

  // Stroke colors
  "stroke-primary-dark": "#0000001F",
  "stroke-secondary-dark": "",
  "stroke-solid-dark": "",
  "stroke-primary-light": "#FFFFFF14",
  "stroke-secondary-light": "#FFFFFF29",
  "stroke-solid-light": "",
} as const;

export const FONT_SIZE = {
  "size-8": ["0.5rem", "1.2"],
  "size-10": ["0.625rem", "1.2"],
  "size-12": ["0.75rem", "1.2"],
  "size-14": ["0.875rem", "1.2"],
  "size-16": ["1rem", "1.2"],
  "size-20": ["1.25rem", "1.2"],
  "size-24": ["1.5rem", "1.2"],
  "size-28": ["1.75rem", "1.2"],
  "size-34": ["2.125rem", "1.2"],
  "size-40": ["2.5rem", "1.2"],
  "size-48": ["3rem", "1.2"],
  "size-58": ["3.625rem", "1.2"],
  "size-68": ["4.25rem", "1.2"],
  "size-82": ["5.125rem", "1.2"],
  "size-100": ["6.25rem", "1.2"],
  "size-118": ["7.375rem", "1.2"],
  "size-142": ["8.875rem", "1.2"],
  "size-172": ["10.75rem", "1.2"],
} as const;

export const FONT_FAMILY = {
  poppins: 'Poppins, ui-sans-serif, system-ui, sans-serif',
  montserrat: 'Montserrat, ui-sans-serif, system-ui, sans-serif',
  
} as const;

export const FONT_WEIGHT = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const LINE_HEIGHT = {
  100: "1",
  120: "1.2",
  140: "1.4",
  160: "1.6",
} as const;

export const LETTER_SPACING = {
  0.4: "-0.04em",
  0.2: "-0.02em",
  // 40% letter spacing -> 0.4em
  40: "0.4em",
};

export const BORDER_WIDTH = {
  0: "0",
  1: "1px",
  2: "2px",
} as const;

export const BORDER_RADIUS = {
  0: "0",
  4: "0.25rem",
  8: "0.5rem",
  16: "1rem",
  xl: "1.5rem",
  32: "2rem",
  max: "12.5rem",
  full: "50%",
};

export const BOX_SHADOW = {
  none: "none",
  sm: "0px 0px 16px 0px rgba(0, 0, 0, 0.02), 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
  md: "0px 0px 16px 0px rgba(0, 0, 0, 0.02), 0px 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 3px 0px rgba(0, 0, 0, 0.08)",
  lg: "0px 0px 16px 0px rgba(0, 0, 0, 0.02), 0px 0px 3px 0px rgba(0, 0, 0, 0.04), 0px 6px 6px 0px rgba(0, 0, 0, 0.08)",
  xl: "0px 0px 16px 0px rgba(0, 0, 0, 0.02), 0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 12px 12px 0px rgba(0, 0, 0, 0.08)",
};

export const uiConfig = {
  colors: {
    prefix: "text",
    values: COLORS,
  },
  fontSize: {
    prefix: "text",
    values: FONT_SIZE,
  },
  fontFamily: {
    prefix: "font",
    values: FONT_FAMILY,
  },
  fontWeight: {
    prefix: "font",
    values: FONT_WEIGHT,
  },
  lineHeight: {
    prefix: "leading",
    values: LINE_HEIGHT,
  },
  letterSpacing: {
    prefix: "tracking",
    values: LETTER_SPACING,
  },
  borderWidth: {
    prefix: "border",
    values: BORDER_WIDTH,
  },
  borderRadius: {
    prefix: "rounded",
    values: BORDER_RADIUS,
  },
  boxShadow: {
    prefix: "shadow",
    values: BOX_SHADOW,
  },
};

export const twConfig = Object.entries(uiConfig).reduce(
  (config, [key, { values }]) => {
    return {
      ...config,
      [key]: values,
    };
  },
  {}
);
