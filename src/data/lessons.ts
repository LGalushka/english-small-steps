import lesson1Image from "../assets/lesson-1-small.webp";
import lesson2Image from "../assets/lesson-2-small.webp";
import lesson3Image from "../assets/lesson-3-small.webp";
import lesson4Image from "../assets/lesson-4-small.webp";
import lesson5Image from "../assets/lesson-5-small.webp";
import lesson6Image from "../assets/lesson-6-small.webp";

export type Lesson = {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  category: LessonCategory;
};

export type LessonCategory = "Грамматика" | "Разговорные фразы" | "Слова в контексте";

export type LessonFilterValue = LessonCategory | "Все уроки";

export const lessons: Lesson[] = [
  {
    id: 1,
    image: lesson1Image,
    title: "Как представиться",
    description: "Учимся называть своё имя и рассказывать о себе",
    url: "https://t.me/english_small_steps_lab/4",
    category: "Разговорные фразы",
  },
  {
    id: 2,
    image: lesson2Image,
    title: "Что сказать, если не понял",
    description: "Не обязательно понимать каждое слово с первого раза. Можно попросить собеседника повторить или объяснить",
    url: "https://t.me/english_small_steps_lab/6",
    category: "Разговорные фразы",
  },
  {
    id: 3,
    image: lesson3Image,
    title: "Как рассказать о привычках",
    description: "Present Simple помогает говорить о том, что мы делаем обычно или регулярно",
    url: "https://t.me/english_small_steps_lab/7",
    category: "Грамматика",
  },
  {
    id: 4,
    image: lesson4Image,
    title: "Как рассказать о вчерашнем дне",
    description: "Для завершённых действий в прошлом часто используют Past Simple",
    url: "https://t.me/english_small_steps_lab/8",
    category: "Грамматика",
  },
  {
    id: 5,
    image: lesson5Image,
    title: "Мой день: учим слова в сочетаниях",
    description: "Целые сочетания помогают быстрее строить предложения",
    url: "https://t.me/english_small_steps_lab/9",
    category: "Слова в контексте",
  },
  {
    id: 6,
    image: lesson6Image,
    title: "Покупки в магазине",
    description: "Несколько сочетаний, которые пригодятся в магазине",
    url: "https://t.me/english_small_steps_lab/10",
    category: "Слова в контексте",
  },
];
