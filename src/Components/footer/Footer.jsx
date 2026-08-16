import "./styleFooter.css";
export default function Footer() {
  const linksContent = (
    <ul className="ul-footer">
      <li>
        <a href="#Home">Home</a>
      </li>
      <li>
        <a href="Services">Services</a>
      </li>
      <li>
        <a href="#Resume">Resume</a>
      </li>
      <li>
        <a href="#Work">Work</a>
      </li>
      <li>
        <a href="#Contact">Contact</a>
      </li>
    </ul>
  );
  return (
    <div className="pairant">
      {/* <div className="container"> */}
      {/* القسم العلوي */}
      <div className="box-top">
        <div className="footer">
          <div className="about-me">
            <a className="name" href="#Home">
              Obada Eid Dalal
            </a>
            <p>
              IT Professional passionate about blending technology with
              creativity. From AI development to guitar melodies, I bring
              innovation to every project.
            </p>
            <div className="icons">
              <div className="icon">
                <a href="https://www.facebook.com/Obada Dl">
                  <i className="fa-brands fa-facebook facebook"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/">
                  <i className="fa-brands fa-github github"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://wa.me/+963947584270">
                  <i className="fa-brands fa-whatsapp whatsapp"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/obadadl">
                  <i className="fa-brands fa-instagram instagram"></i>
                </a>
              </div>
            </div>
            {/* <div className="footer-icons"></div> */}
          </div>
          <div className="quick-links">
            <p>Quick Links</p>
            {linksContent}
          </div>
          {/* <div className="Services">
            <h3>Services</h3>
            <ul>
              <li>
                <p>serv 1</p>
              </li>
              <li>
                <p>serv 2</p>
              </li>
              <li>
                <p>serv 3</p>
              </li>
              <li>
                <p>serv 4</p>
              </li>
              <li>
                <p>serv 5</p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <hr className="custom-hr" />
      {/* القسم السفلي */}
      <div className="box-down">
        <div className="copywrite">
          {/* <marquee direction="left" scrollamount="5"> */}
          <div className="marquee">
            <span>© 2025 Obada Eid Dalal. All rights reserved.</span>
            <span> • </span>
            <span>Made with {"\u2764\uFE0F"}</span>
          </div>
          <div className="Policy ">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Policy</span>
          </div>
          {/* </marquee> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
