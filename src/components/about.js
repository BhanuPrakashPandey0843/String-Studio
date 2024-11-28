import React from 'react';  


const about = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">About String_Studio Project</h1>
              <p className="card-text">
                String_Studio is an innovative project designed to transform the way musicians interact with their instruments. Our mission is to provide a seamless and intuitive platform for string musicians to practice, compose, and share their music with the world.
              </p>
              <h3 className="mt-4">Key Features</h3>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">Real-time audio feedback for practice sessions</li>
                <li className="list-group-item">Advanced composition tools with notation support</li>
                <li className="list-group-item">Integrated social platform for sharing and collaborating</li>
                <li className="list-group-item">Extensive library of tutorials and resources</li>
              </ul>
              <h3 className="mt-4">Our Vision</h3>
              <p>
                At String_Studio, we believe that music is a universal language that connects people across the globe. Our vision is to create a community where musicians of all levels can come together to learn, inspire, and grow. We are committed to providing the best tools and resources to help you achieve your musical goals.
              </p>
              <h3 className="mt-4">Meet the Team</h3>
              <p>
                Our team consists of passionate musicians and experienced software developers who are dedicated to making String_Studio the best platform for string musicians. We work tirelessly to improve our features and provide you with the support you need to succeed.
              </p>
              <h3 className="mt-4">Contact Us</h3>
              <p>
                We would love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us at <a href="mailto:support@stringstudio.com">support@stringstudio.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
