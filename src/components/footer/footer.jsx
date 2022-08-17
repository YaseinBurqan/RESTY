import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <section className="footer-info">
          <section className="footer-social-top">
            <a href="https://jo.linkedin.com/in/yaseinburqan" rel="noreferrer noopener" target="_blank">
              Linkedin
            </a>
            <a href="https://github.com/YaseinBurqan?tab=repositories" rel="noreferrer noopener" target="_blank">
              GITHUB
            </a>
          </section>

          <section className="footer-info-left">
            <section className="footer-info-name">Web Developer</section>
          </section>
          <section className="footer-info-center">
            <section className="footer-info-email">mr.yasein@gmail.com</section>
            <section className="footer-info-terms">Copyright &copy; 2022 by Yasein's Company</section>
          </section>
          <section className="footer-info-right">
            <section className="footer-info-number">+962799123681</section>
            <section className="footer-info-number">+Thanks for you</section>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
