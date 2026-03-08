import "./AppHeader.css";
import LogoSvg from "../../assets/images/air_logo.svg";
import { AppPages } from "../../assets/definitions/constants";

export const AppHeader = (props) => {
  return (
    <header className="toolbar">
      <div className="top">
        {/* Left side items */}
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="left-side">
            <img
              src={LogoSvg}
              alt="Activists in Resistance Logo"
              className="logo"
            />
            <h2 className="title">
              <p className="title-text">Activists</p>
              <p className="title-text" style={{ color: "#EF002B" }}>
                In
              </p>
              <p className="title-text">Resistance</p>
            </h2>
          </div>
        </a>
      </div>
      <div className="bottom">
        <div style={{ borderLeft: "2px solid rgba(0, 0, 0, 0.5)" }}>
          <button
            className="button"
            disabled={props.currentPage === AppPages.Home}
            onClick={() => props.setPage(AppPages.Home)}
          >
            <h3>Home</h3>
          </button>
          <button
            className="button"
            disabled={props.currentPage === AppPages.Missing}
            onClick={() => props.setPage(AppPages.Missing)}
          >
            <h3>Mission</h3>
          </button>
          <button
            className="button"
            disabled={props.currentPage === AppPages.AboutUs}
            onClick={() => props.setPage(AppPages.AboutUs)}
          >
            <h3>About us</h3>
          </button>
          <button
            className="button"
            disabled={props.currentPage === AppPages.ContactUs}
            onClick={() => props.setPage(AppPages.ContactUs)}
          >
            <h3>Contact us</h3>
          </button>
        </div>
      </div>
    </header>
  );
};
