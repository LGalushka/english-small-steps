import "./LessonCard.css";
import type { LessonCategory } from "../../data/lessons";

type LessonCardProps = {
  image: string;
  title: string;
  description: string;
  url: string;
  category: LessonCategory;
};

function LessonCard({ image, title, description, url, category }: LessonCardProps) {
  return (
    <article className="lesson-card">
      <img className="lesson-card__image" src={image} alt="" />
      <div className="lesson-card__content">
        <span className="lesson-card__category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="lesson-card__link" href={url}>
          Открыть урок <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default LessonCard;
