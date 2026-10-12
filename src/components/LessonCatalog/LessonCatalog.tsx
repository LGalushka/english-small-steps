import "./LessonCatalog.css";
import { useState } from "react";
import LessonSearch from "../LessonSearch/LessonSearch";
import LessonList from "../LessonList/LessonList";
import LessonFilter from "../LessonFilter/LessonFilter";
import { lessons } from "../../data/lessons";
import type { LessonFilterValue } from "../../data/lessons";

function LessonCatalog() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<LessonFilterValue>("Все уроки");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesQuery = lesson.title.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = selectedCategory === "Все уроки" || lesson.category == selectedCategory;

    return matchesQuery && matchesCategory;
  });

  const amount = filteredLessons.length;

  return (
    <section id="lessons">
      <LessonSearch query={query} onQueryChange={setQuery} />
      <LessonFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      <div className="lesson-catalog__title">
        <h2>Каталог уроков</h2>
        <p>Найдено: {amount} уроков</p>
      </div>
      {filteredLessons.length > 0 ? (
        <LessonList lessons={filteredLessons} />
      ) : (
        <p className="lesson-catalog__empty">Уроки не найдены. Попробуйте другой запрос.</p>
      )}
    </section>
  );
}

export default LessonCatalog;
