import channelLogo from "../../assets/channel-logo-small.png";
import telegramIcon from "../../assets/telergam.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <img src={channelLogo} alt="аватар телеграмм канала" width="40" height="40" />
          <span>Английский маленькими шагами </span>
        </div>
        <a className="site-footer__telegram" href="https://t.me/english_small_steps_lab">
          <img src={telegramIcon} width="20" height="20" />
          Наш Telegram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
