import React from "react";
import { Button } from "../../components";
import "./RegisterForm.css";
import ClassNames from "classnames";

function RegisterForm() {
  const [emailOrPhone, setEmailOrPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [login, setLogin] = React.useState("");

  return (
    <div className="registerForm">
      <div className="registerForm__header">
        <div className="registerForm__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
            alt="registerForm__insta_logo"
          />
        </div>
        <div className="registerForm__description">
          <p>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</p>
        </div>
        <div className="registerForm__logInWithFaceBook">
          <Button
            name={"Войти через Facebook"}
            image={
              "https://www.flaticon.com/svg/static/icons/svg/733/733547.svg"
            }
          />
        </div>
        <div className="registerForm__decorativeOr">
          <span className="registerForm__decorativeBar"></span>
          <span className="registerForm__or">ИЛИ</span>
          <span className="registerForm__decorativeBar"></span>
        </div>
        <div className="registerForm__form">
          <div className="registerForm__inputField">
            <label>
              <span
                className={ClassNames("span", emailOrPhone ? "active" : "")}
              >
                Моб. телефон или эл.адрес
              </span>
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className={ClassNames(emailOrPhone ? "active" : "")}
              />
            </label>
          </div>
          <div className="registerForm__inputField">
            <label>
              <span className={ClassNames("span", name ? "active" : "")}>
                Имя и Фамилия
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={ClassNames(name ? "active" : "")}
              />
            </label>
          </div>
          <div className="registerForm__inputField">
            <label>
              <span className={ClassNames("span", login ? "active" : "")}>
                Имя пользователя
              </span>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className={ClassNames(login ? "active" : "")}
              />
            </label>
          </div>
          <div className="registerForm__inputField">
            <label>
              <span className={ClassNames("span", password ? "active" : "")}>
                Пароль
              </span>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={ClassNames(password ? "active" : "")}
              />
            </label>
          </div>
          <Button name="Зарегистрироваться" />
        </div>
        <div className="registerForm__policy">
          <p>
            Регистрируясь, вы принимаете наши{" "}
            <strong>Условия, Политику использования данных</strong> и{" "}
            <strong>Политику в отношении файлов cookie</strong>.
          </p>
        </div>
      </div>
      <div className="registerForm__haveAccount">
        <p>Есть аккаунт?</p>
        <a
          href="http://localhost:3000/accounts/login"
          className="registerForm__goToRegister"
        >
          Вход
        </a>
      </div>
      <div className="installApplication">
        <p>Установите приложение.</p>
        <div className="installApplication__links">
          <div className="installApplication__link">
            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_russian-ru.png/bfba6d0fd6bd.png"
                alt=""
              />
            </a>
          </div>
          <div className="installApplication__link">
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D716B1138-8D64-4938-9CA3-1C8F09C81A91%26utm_content%3Dlo%26utm_medium%3Dbadge">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_russian-ru.png/4c70948c09f3.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
