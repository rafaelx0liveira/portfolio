
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Rafael.</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer-link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer-link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/rafael-oliveira-44351b18a/" className="footer-social-link" target="_blank">
                        <i className="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/rafaelx0liveira" className="footer-social-link" target="_blank">
                        <i className="uil uil-github"></i>
                    </a>
                </div>

                <span className="footer-copy">
                    &#169; Rafael. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer