import React from "react";
import ClassNames from "classnames";
import { Footer, LoginForm, Feed } from "../../components";
import { selectUser } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";
import "./Home.css";

function Home() {
  const user = useSelector(selectUser);
  const [activeImage, setActiveImage] = React.useState(4);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((a) => a + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homePage">
      {!user ? (
        <div className="homePage__formWrapper">
          <div className="homePage__form">
            <div className="homePage__phone">
              <div className="homePage__phoneWrapper">
                <img
                  key={0}
                  className={ClassNames(
                    "screenImage",
                    activeImage % 5 === 0
                      ? "active"
                      : (activeImage + 1) % 5 === 0
                      ? "nextActive"
                      : ""
                  )}
                  src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
                  alt=""
                />
                <img
                  key={1}
                  className={ClassNames(
                    "screenImage",
                    activeImage % 5 === 1
                      ? "active"
                      : (activeImage + 1) % 5 === 1
                      ? "nextActive"
                      : ""
                  )}
                  src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/2d9d7248af43.jpg"
                  alt=""
                />
                <img
                  key={2}
                  className={ClassNames(
                    "screenImage",
                    activeImage % 5 === 2
                      ? "active"
                      : (activeImage + 1) % 5 === 2
                      ? "nextActive"
                      : ""
                  )}
                  src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/aafd8c6b005d.jpg"
                  alt=""
                />
                <img
                  key={3}
                  className={ClassNames(
                    "screenImage",
                    activeImage % 5 === 3
                      ? "active"
                      : (activeImage + 1) % 5 === 3
                      ? "nextActive"
                      : ""
                  )}
                  src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/629d23a3c7b2.jpg"
                  alt=""
                />
                <img
                  key={4}
                  className={ClassNames(
                    "screenImage",
                    activeImage % 5 === 4
                      ? "active"
                      : (activeImage + 1) % 5 === 4
                      ? "nextActive"
                      : ""
                  )}
                  src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/001bc33056c1.jpg"
                  alt=""
                />
              </div>
            </div>
            <LoginForm className="homePage__loginForm" />
          </div>
        </div>
      ) : (
        <Feed />
      )}
      <Footer extended className="homePage__footer" />
    </div>
  );
}

export default Home;
