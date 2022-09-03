import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    english: {
      translation: {
        "Box": "Box",
        "Pipe": "Pipe",

        // Box
        "Box Volume Calculator": "Box Volume Calculator",

        "Depth (cm)": "Depth (cm)",
        "Length (cm)": "Length (cm)",
        "Height (cm)": "Height (cm)",
        "How many boxes? (Qty)": "How many boxes? (Qty)",

        Calculate: "Calculate",
        Reset: "Reset",

        "TOTAL volume is: ": "TOTAL volume is: ",

        // Pipe
        "Pipe Volume Calculator": "Pipe Volume Calculator",
        "Diameter (cm)": "Diameter (cm)",
        // "Length (cm)": "Length (cm)",
        "How many pipes? (Qty)": "How many pipes? (Qty)",

        // Calculate: "Calculate",
        // Reset: "Reset",

        // "TOTAL volume is: ": "TOTAL volume is: ",

        "mᶟ": "mᶟ",
      },
    },

    russian: {
      translation: {
        "Box": "Коробка",
        "Pipe": "Труба",

        "Box Volume Calculator": "Расчет объема коробки",

        "Depth (cm)": "Глубина (см)",
        "Length (cm)": "Длина (см)",
        "Height (cm)": "Высота (см)",
        "How many boxes? (Qty)": "Количество коробок? (кол-во)",

        Calculate: "Рассчитать",
        Reset: "Сброс",

        "TOTAL volume is: ": "Общий объем: ",

        // Pipe
        "Pipe Volume Calculator": "Расчет объема труб",
        "Diameter (cm)": "Диаметр (см)",
        // "Length (cm)": "Length (см)",
        "How many pipes? (Qty)": "Количество труб? (кол-во)",

        // Calculate: "Calculate",
        // Reset: "Reset",

        // "TOTAL volume is: ": "TOTAL volume is: ",

        "mᶟ": "м³",
      },
    },

    chinese: {
      translation: {
        "Box": "箱子",
        "Pipe": "管道",

        "Box Volume Calculator": "箱子体积计算器",

        "Depth (cm)": "宽度 (cm)",
        "Length (cm)": "长度 (cm)",
        "Height (cm)": "高度 (cm)",
        "How many boxes? (Qty)": "箱子数量？",

        Calculate: "计算",
        Reset: "清除",

        "TOTAL volume is: ": "总体积: ",

        // Pipe
        "Pipe Volume Calculator": "管道体积计算器",
        "Diameter (cm)": "直径 (cm)",
        // "Length (cm)": "Length (cm)",
        "How many pipes? (Qty)": "管道数量?",

        // Calculate: "Calculate",
        // Reset: "Reset",

        // "TOTAL volume is: ": "TOTAL volume is: ",

        "mᶟ": "mᶟ",
      },
    },
  },
  lng: localStorage.getItem("lng") || "russian",
});

export default i18n;
