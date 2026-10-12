import "./Header.css";
import telegramIcon from "../../assets/telergam.svg";
import channelLogo from "../../assets/channel-logo-small.png";

function Header() {
  return (
    <header className="site-header">
      <div id="lessons" className="site-header__inner">
        <div className="site-header__brand">
          <img src={channelLogo} alt="аватал телеграмм канала" width="40" height="40" />
          <span>Английский маленькими шагами</span>
        </div>

        <nav aria-label="Основная навигация">
          <a href="#lessons" className="site-header__link">
            Уроки
          </a>
          <a className="site-header__telegram" href="https://t.me/english_small_steps_lab">
            <img src={telegramIcon} alt="иконка для Телеграмм" width="20" height="20" />
            Наш Telegram
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
