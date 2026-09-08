import success from "../images/success.svg";
import warning from "../images/warning.svg";
import error from "../images/error.svg";
import neutral from "../images/neutral.svg";


export const colorBadges = [
  {
    id: "grey",
    bg: "#F3F4F6",
    font: "#1F2937"
  },
  {
    id: "red",
    bg: "#FEE2E2",
    font: "#991B1B"
  }, {
    id: "yellow",
    bg: "#FEF3C7",
    font: "#92400E"
  },
  {
    id: "green",
    bg: "#D1FAE5",
    font: "#065F46"
  }, {
    id: "blue",
    bg: "#DBEAFE",
    font: "#1E40AF"
  },
  {
    id: "indigo",
    bg: "#E0E7FF",
    font: "#3730A3"
  }, {
    id: "purple",
    bg: "#EDE9FE",
    font: "#5B21B6"
  },
  {
    id: "pink",
    bg: "#FCE7F3",
    font: "#9D174D"
  },
];

export const colorBannersToasts = [
  {
    id: "success",
    bg: "#ECFDF5",
    title: "congratulation",
    descrBanner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam",
    descrToast: "Your work has been saved",
    titleCol: "#065F46",
    descCol: "#047857",
    icon: success,
    alt: "Check icon for success"
  },
  {
    id: "warning",
    bg: "#FFFBEB",
    title: "attention",
    descrBanner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    descrToast: "A network error was detected",
    titleCol: "#92400E",
    descCol: "#B45309",
    icon: warning,
    alt: "Exclamation icon for warning"
  },
  {
    id: "error",
    bg: "#FEF2F2",
    title: "there is a problem with your application",
    descrBanner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    descrToast: "Please re-save your work again",
    titleCol: "#92400E",
    descCol: "#B45309",
    icon: error,
    alt: "X icon for error"
  },
  {
    id: "neutral",
    bg: "#EFF6FF",
    title: "update available",
    descrBanner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    descrToast: "Please read updated information",
    titleCol: "#1E40AF",
    descCol: "#1C51B9",
    icon: neutral,
    alt: "Infos icon for information"
  },

];

export const colorToolTips = [
  {
    class: "dark",
    bg: "#262626",
    title: "#FFFFFF",
    desc: "#C7C7C7",
    icon: "#C7C7C7"
  },
  {
    class: "dark",
    bg: "#1E40AF",
    title: "#FFFFFF",
    desc: "#E8EDFF",
    icon: "#7EA6F2"
  },
  {
    class: "dark",
    bg: "#A9229B",
    title: "#FFFFFF",
    desc: "#FFE9FD",
    icon: "#F462E6"
  },
  {
    class: "dark",
    bg: "#47AA5D",
    title: "#FFFFFF",
    desc: "#E3FFE9",
    icon: "#C1FFCF"
  },
  {
    class: "light",
    bg: "#FFFFFF",
    title: "#111827",
    desc: "#6B7280",
    icon: "#6B7280"
  },
  {
    class: "light",
    bg: "#E0E7FF",
    title: "#1E40AF",
    desc: "#1C51B9",
    icon: "#1C51B9"
  },
  {
    class: "light",
    bg: "#FFF3FC",
    title: "#A9229B",
    desc: "#C7369E",
    icon: "#C7369E"
  },
  {
    class: "light",
    bg: "#e7fff3",
    title: "#137A2A",
    desc: "#3C8C4E",
    icon: "#41A557"
  },
];

export const pages = ["badges", "banners", "cards", "testimonials", "tooltips", "toasts"];


