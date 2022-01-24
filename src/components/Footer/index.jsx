import s from "./Footer.module.scss";
import twitterIcon from "../../images/icons/twitter.svg";
import linkedinIcon from "../../images/icons/linkedin.svg";
import facebookIcon from "../../images/icons/facebook.svg";
import instagramIcon from "../../images/icons/instagram.svg";
import youtubeIcon from "../../images/icons/youtube.svg";
import whatsappIcon from "../../images/icons/whatsapp.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.infoLinks}>
          <div className={s.linksBlock}>
            <h2 className={s.title}>Другое</h2>
            <ul className={s.linksList}>
              <li className={s.linksItem}>
                <a href="#" className={s.link}>
                  Про Нас
                </a>
              </li>
              <li className={s.linksItem}>
                <a href="#" className={s.link}>
                  Блог
                </a>
              </li>
            </ul>
          </div>
          <div className={s.linksBlock}>
            <h2 className={s.title}>Сотрудничество с нами</h2>
            <ul className={s.linksList}>
              <li className={s.linksItem}>
                <a href="#" className={s.link}>
                  Реклама на сайте
                </a>
              </li>
              <li className={s.linksItem}>
                <a href="#" className={s.link}>
                  Партнерская программа
                </a>
              </li>
              <li className={s.linksItem}>
                <a href="#" className={s.link}>
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <ul className={s.socialsList}>
              <li className={s.socialsItem}>
                <a href="#" className="socialsLink">
                  <img src={twitterIcon} alt="" className="socialsIcon" />
                </a>
              </li>
              <li className={s.socialsItem}>
                <a href="#" className="socialsLink">
                  <img src={linkedinIcon} alt="" className="socialsIcon" />
                </a>
              </li>
              <li className={s.socialsItem}>
                <a href="#" className="socialsLink">
                  <img src={facebookIcon} alt="" className="socialsIcon" />
                </a>
              </li>
              <li className={s.socialsItem}>
                <a href="#" className="socialsLink">
                  <img src={instagramIcon} alt="" className="socialsIcon" />
                </a>
              </li>
              <li className={s.socialsItem}>
                <a href="#" className="socialsLink">
                  <img src={youtubeIcon} alt="" className="socialsIcon" />
                </a>
              </li>
              <li className={s.socialsItem}>
                <a href="#" className="socialsLink">
                  <img src={whatsappIcon} alt="" className="socialsIcon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.copyright}>
          <a href="#" className={`${s.copyrightLink} ${s.policy}`}>
            Privacy Policy
          </a>

          <a href="#" className={`${s.copyrightLink} ${s.terms}`}>
            Terms of Use
          </a>

          <p className={s.copyrightText}>© 2021 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
