import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title"> Mallouli </h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link"> About </a>   
                    </li>

                    <li>
                        <a href="#skills" className="footer__link"> Skills </a>   
                    </li>

                    <li>
                        <a href="#contact" className="footer__link"> Contact </a>   
                    </li>
                </ul>

                <div className="footer__social">
                

            <a href="https://linkedin.com/" className="footer__social-link" target ="_blank">
            <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/" className="footer__social-link" target ="_blank">
            <i class="uil uil-github-alt"></i>
            </a>

            <a href="https://twitter.com/" className="footer__social-link" target ="_blank">
            <i class="uil uil-twitter"></i>
            </a>
                </div>

                <span className="footer__copy"> &#169; MallouliYahya. Allrights reserved </span>
            </div>
        </footer>
    )
}

export default Footer ;