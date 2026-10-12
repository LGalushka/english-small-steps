import "./LessonFilter.css";
import type { LessonFilterValue } from "../../data/lessons";

type LessonFilterProps = {
  selectedCategory: LessonFilterValue;
  onCategoryChange: (category: LessonFilterValue) => void;
};

function LessonFilter({ selectedCategory, onCategoryChange }: LessonFilterProps) {
  return (
    <div className="lesson-filter" role="group" aria-label="Категории уроков">
      <button type="button" onClick={() => onCategoryChange("Все уроки")} aria-pressed={selectedCategory === "Все уроки"}>
        Все уроки
      </button>
      <button type="button" onClick={() => onCategoryChange("Грамматика")} aria-pressed={selectedCategory === "Грамматика"}>
        Грамматика
      </button>
      <button type="button" onClick={() => onCategoryChange("Разговорные фразы")} aria-pressed={selectedCategory === "Разговорные фразы"}>
        Разговорные фразы
      </button>
      <button type="button" onClick={() => onCategoryChange("Слова в контексте")} aria-pressed={selectedCategory === "Слова в контексте"}>
        Слова в контексте
      </button>
    </div>
  );
}

export default LessonFilter;
