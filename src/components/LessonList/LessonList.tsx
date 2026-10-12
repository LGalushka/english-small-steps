import type { Lesson } from "../../data/lessons";
import "./LesdonList.css";
import LessonCard from "../LessonCard/LessonCard";

type LessonListProps = {
  lessons: Lesson[];
};

function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="lesson-list">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          image={lesson.image}
          category={lesson.category}
          title={lesson.title}
          description={lesson.description}
          url={lesson.url}
        />
      ))}
    </div>
  );
}

export default LessonList;
