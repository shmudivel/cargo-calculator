import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    english: {
      translation: {
        "Please enter a valid parameters!": "Please enter a valid parameters!",
        Box: "Box",
        Pipe: "Pipe",

        // Box
        " Box Volume Calculator ": "Box Volume Calculator",

        "Depth (cm)": "Depth (cm)",
        "Length (cm)": "Length (cm)",
        "Height (cm)": "Height (cm)",
        "How many boxes? (Qty)": "How many boxes? (Qty)",
        "Price per 1mᶟ": "Price per 1mᶟ",

        // Pipe
        "Pipe Volume Calculator": "Pipe Volume Calculator",
        "Diameter (cm)": "Diameter (cm)",
        "How many pipes? (Qty)": "How many pipes? (Qty)",

        Calculate: "Calculate",
        Reset: "Reset",

        "TOTAL volume is: ": "TOTAL volume is: ",
        "TOTAL sum is: ": "TOTAL sum is: ",

        mᶟ: "mᶟ",
      },
    },

    russian: {
      translation: {
        "Please enter a valid parameters!":
          "Пожалуйста, введите правильные параметры!",

        Box: "Коробка",
        Pipe: "Труба",

        " Box Volume Calculator ": "Расчет объема коробки",

        "Depth (cm)": "Глубина (см)",
        "Length (cm)": "Длина (см)",
        "Height (cm)": "Высота (см)",
        "How many boxes? (Qty)": "Количество коробок? (кол-во)",
        "Price per 1mᶟ": "Стоимость за 1 мᶟ",

        // Pipe
        "Pipe Volume Calculator": "Расчет объема труб",
        "Diameter (cm)": "Диаметр (см)",
        "How many pipes? (Qty)": "Количество труб? (кол-во)",

        Calculate: "Рассчитать",
        Reset: "Сброс",

        "TOTAL volume is: ": "Общий объем: ",
        "TOTAL sum is: ": "Общая сумма: ",

        mᶟ: "м³",
      },
    },

    chinese: {
      translation: {
        "Please enter a valid parameters!": "请输入有效的参数!",
        Box: "箱子",
        Pipe: "管道",

        " Box Volume Calculator ": "箱子体积计算器",

        "Depth (cm)": "宽度 (cm)",
        "Length (cm)": "长度 (cm)",
        "Height (cm)": "高度 (cm)",
        "How many boxes? (Qty)": "箱子数量？",
        "Price per 1mᶟ": "一立方米价格",

        // Pipe
        "Pipe Volume Calculator": "管道体积计算器",
        "Diameter (cm)": "直径 (cm)",
        "How many pipes? (Qty)": "管道数量?",

        Calculate: "计算",
        Reset: "清除",

        "TOTAL volume is: ": "总体积: ",
        "TOTAL sum is: ": "总金额为: ",

        mᶟ: "mᶟ",
      },
    },
  },
  lng: localStorage.getItem("lng") || "russian",
});

export default i18n;
