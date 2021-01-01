import React from "react";
import "./Footer.css";

function Footer({ extended }) {
  return (
    <div className="footer">
      <div className="footer__basic">
        <a href="https://about.instagram.com/" className="footer__link">
          Информация
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Блог
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Вакансии
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Помощь
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          API
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Конфиденциальность
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Условия
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Популярные аккаунты
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Хэштеги
        </a>
        <a href="https://about.instagram.com/" className="footer__link">
          Места
        </a>
        {extended ? (
          <>
            <a href="https://about.instagram.com/" className="footer__link">
              Красота
            </a>
            <a href="https://about.instagram.com/" className="footer__link">
              Танцы и выступления
            </a>
            <a href="https://about.instagram.com/" className="footer__link">
              Фитнес
            </a>
            <a href="https://about.instagram.com/" className="footer__link">
              Еда и напитки
            </a>
            <a href="https://about.instagram.com/" className="footer__link">
              Дом и сад
            </a>
            <a href="https://about.instagram.com/" className="footer__link">
              Музыка
            </a>
            <a href="https://about.instagram.com/" className="footer__link">
              Изобразительное исскуство
            </a>
          </>
        ) : (
          ""
        )}
      </div>
      <p className="insFromFacebook">© Instagram от Facebook, 2021</p>
    </div>
  );
}

export default Footer;
