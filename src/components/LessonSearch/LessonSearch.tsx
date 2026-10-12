import "./LessonSearch.css";
import searchIcon from "../../assets/search.svg";

type LessonSearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

function LessonSearch({ query, onQueryChange }: LessonSearchProps) {
  return (
    <div className="lesson-search">
      <img src={searchIcon} alt="" width="20" height="20" />
      <input
        className="lesson-search__input"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        type="search"
        placeholder="Найти урок"
        aria-label="Поиск уроков"
      />
    </div>
  );
}

export default LessonSearch;
