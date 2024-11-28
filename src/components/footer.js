import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca' }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', cursor: 'pointer', transition: 'transform 0.2s ease' }}>
        © 2024 Copyright:
        <a className="text-body" href="/">
          String_Studio by Bhanu Prakash Pandey
        </a>
      </div>
    </footer>
  );
};

export default Footer;
