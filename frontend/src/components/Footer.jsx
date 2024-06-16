import React from "react";

const Footer = () => {
  const showMail = (id, email) => {
    const mailElement = document.getElementById(id);
    mailElement.innerHTML = email;
    mailElement.style.display = "block";
  };

  const hideMail = (id) => {
    const mailElement = document.getElementById(id);
    mailElement.innerHTML = "";
    mailElement.style.display = "none";
  };

  return (
    <div>
      <footer
        style={{ backgroundColor: "#526D82" }}
        className="text-center text-white"
      >
        {/* <!-- Grid container --> */}
        <div className="p-4">
          {/* <!-- Section WT project --> */}
          <h3 className="mx-auto mb-4">GRAM URJA</h3>
          {/* <!-- Section: Text --> */}
          <section className="mb-4">
            <p>
              We aim to create self-reliant villages by empowering grassroots
              communities through education, livelihood support, and governance.
              Our mission is to drive sustainable progress and enable
              communities to thrive independently, fostering resilience and
              prosperity for the future.
            </p>
          </section>
          {/* <!-- Section: Text --> */}

          {/* <!-- Section A Project By --> */}
          <h3 className="mx-auto mb-4">Major Operational Sectors :</h3>
          {/* <!-- Section: Links --> */}

          <section className="">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Beed</h5>
                <a
                  className="btn btn-outline-light btn-floating m-1 position-relative"
                  role="button"
                  onMouseOver={() =>
                    showMail("beed", "beed.gramurja@gmail.com")
                  }
                  onMouseLeave={() => hideMail("beed")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <div id="beed" className="email-display"></div>
                </a>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Dharashiv</h5>
                <a
                  className="btn btn-outline-light btn-floating m-1 position-relative"
                  role="button"
                  onMouseOver={() =>
                    showMail("dharashiv", "dharashiv.gramurja@gmail.com")
                  }
                  onMouseLeave={() => hideMail("dharashiv")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <div id="dharashiv" className="email-display"></div>
                </a>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Latur</h5>
                <a
                  className="btn btn-outline-light btn-floating m-1 position-relative"
                  role="button"
                  onMouseOver={() =>
                    showMail("latur", "latur.gramurja@gmail.com")
                  }
                  onMouseLeave={() => hideMail("latur")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <div id="latur" className="email-display"></div>
                </a>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3">
          © 2023 Copyright |
          <a className="text-white" href="https://mdbootstrap.com/">
            Gram Urja NGO
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
