import React from "react";
import "./LoginForm.css";
import { Button } from "../../components";
import ClassNames from "classnames";

function LoginForm({ loginFunc }) {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginNotActive, setLoginNotActive] = React.useState(true);

  const checkActive = () => {
    if (login.length > 0 && password.length > 5) {
      setLoginNotActive(false);
    } else {
      setLoginNotActive(true);
    }
  };

  return (
    <div className="loginForm">
      <div className="loginForm__header">
        <div className="loginForm__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
            alt="loginForm__insta_logo"
          />
        </div>
        <form className="loginForm__form">
          <div className="loginForm__inputField">
            <label>
              <span className={ClassNames("span", login ? "active" : "")}>
                Номер телефона, имя пользователя или эл...
              </span>
              <input
                type="text"
                value={login}
                onChange={(e) => {
                  checkActive();
                  setLogin(e.target.value);
                }}
                className={ClassNames(login ? "active" : "")}
              />
            </label>
          </div>
          <div className="loginForm__inputField">
            <label>
              <span className={ClassNames("span", password ? "active" : "")}>
                Пароль
              </span>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  checkActive();
                  setPassword(e.target.value);
                }}
                className={ClassNames(password ? "active" : "")}
              />
            </label>
          </div>
          <Button
            name="Войти"
            onClick={(event) => loginFunc(event, login, password)}
            notActive={loginNotActive}
            className="login__button"
          />
        </form>
        <div className="loginForm__decorativeOr">
          <span className="loginForm__decorativeBar"></span>
          <span className="loginForm__or">ИЛИ</span>
          <span className="loginForm__decorativeBar"></span>
        </div>
        <div>
          <a
            className="loginForm__loginWithFaceBook"
            href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221jtovireqt7iej7hvlg1uto0pj18ikxkh1kuhe3om7lkiatvs3ue%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dru_RU%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D2251c3fa-6978-423f-9692-daa2c87ee2e1%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221jtovireqt7iej7hvlg1uto0pj18ikxkh1kuhe3om7lkiatvs3ue%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=ru_RU&pl_dbl=0"
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg"
              alt="facebook__logo"
            />
            <p>Войти через Facebook</p>
          </a>
        </div>
        <div className="loginForm__forgotPassword">
          <a href="https://www.instagram.com/accounts/password/reset/">
            Забыли пароль?
          </a>
        </div>
      </div>
      <div className="loginForm__offerRegister">
        <p>У вас ещё нет аккаунта?</p>
        <a
          href="http://localhost:3000/accounts/emailsignup/"
          className="loginForm__goToRegister"
        >
          Зарегистрироваться
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

export default LoginForm;
