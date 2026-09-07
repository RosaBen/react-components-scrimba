import success from "../images/success.svg";
import warning from "../images/warning.svg";
import error from "../images/error.svg";
import neutral from "../images/neutral.svg";
import cloudUpload from "../images/cloudUpload.svg";
import profil from "../images/profil.png";
import polygon from "../images/polygon.svg";
import closeBtn from "../images/close.svg";
import inbox from "../images/inbox.svg";
import workcation from "../images/workcation.svg";
import blockquote from "../images/blockquote.svg";

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
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam",
    titleCol: "#065F46",
    descCol: "#047857",
    icon: success,
    alt: "Check icon for success"
  },
  {
    id: "warning",
    bg: "#FFFBEB",
    title: "attention",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    titleCol: "#92400E",
    descCol: "#B45309",
    icon: warning,
    alt: "Exclamation icon for warning"
  },
  {
    id: "error",
    bg: "#FEF2F2",
    title: "there is a problem with your application",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    titleCol: "#92400E",
    descCol: "#B45309",
    icon: error,
    alt: "X icon for error"
  },
  {
    id: "neutral",
    bg: "#EFF6FF",
    title: "update available",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    titleCol: "#1E40AF",
    descCol: "#1C51B9",
    icon: neutral,
    alt: "Infos icon for information"
  },

];

export const colorToolTips = [
  {
    bg: "#262626",
    title: "#FFFFFF",
    desc: "#C7C7C7"
  },
  {
    bg: "#1E40AF",
    title: "#FFFFFF",
    desc: "#E8EDFF"
  },
  {
    bg: "#A9229B",
    title: "#FFFFFF",
    desc: "#FFE9FD"
  },
  {
    bg: "#47AA5D",
    title: "#FFFFFF",
    desc: "#E3FFE9"
  },
  {
    bg: "#FFFFFF",
    title: "#111827",
    desc: "#6B7280"
  },
  {
    bg: "#E0E7FF",
    title: "#1E40AF",
    desc: "#1C51B9"
  },
  {
    bg: "#FFF3FC",
    title: "#A9229B",
    desc: "#C7369E"
  },
  {
    bg: "#e7fff3",
    title: "#137A2A",
    desc: "#3C8C4E"
  },
];

export const pages = ["home", "badge", "banner", "card", "testimonial", "tooltip", "toast"];

export const imagesComponents = [
  {
    component: "card",
    img: [{
      icon: cloudUpload,
      alt: "cloud upload icon"
    }]
  },
  {
    component: "testimonial",
    img: [{
      icon: profil,
      alt: "smiling woman"
    },
    {
      icon: workcation,
      alt: "a house next to palm tree"
    },
    {
      icon: blockquote,
      alt: "open blockquote"
    }
    ]
  },
  {
    component: "tootip",
    img: [{
      icon: polygon,
      alt: "downward arrow"
    },
    {
      icon: closeBtn,
      alt: "close btn"
    },
    {
      icon: inbox,
      alt: "email inbox icon"
    }
    ]
  }
];