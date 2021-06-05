import React from 'react'
import './About.css'
import Author1Picture from './profile.jpg'
import Author2Picture from './Picture.jpeg'

//This component has details about the application  and
//the authors of this application.
class About extends React.Component {
  render() {
    return (
      //Main div which contains about the dashboard and the authors
      <div>
        <h3 className="text-center abouthead">
          <span className="border p-2">
            <b>About Us</b>
          </span>
        </h3>
        <br />
        <div className="row p">
          <div className="mx-auto col-md-4 col-lg-4 col-sm-12">
            <div className="d-flex justify-content-center">
              <div className="cardabout">
                <div className="card-body">
                  {/*Short Description about the dashboard */}
                  <div className="aboutname">
                    <p>
                      Weather dashboard allows us to know about the current
                      weather, hourly forecast for 24 hours and one week
                      forecast for both the current location or any location in
                      the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*This div describes about the authors */}
        <div className="about">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="mx-auto card">
                <div className="card-img">
                  <img
                    src={Author1Picture}
                    id="image1"
                    className="img-fluid"
                    alt="j profilepicture"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Jetha Harsha Sai Emandi</h4>
                  <p className="card-text">Computer Science Graduate Student</p>
                  <p className="info">
                    Specialization in Machine Learning, Artificial Intelligence
                    and Databases.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.linkedin.com/in/jetha-harsha-sai-emandi/"
                    className="card-link"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="mx-auto card">
                <div className="card-img">
                  <img
                    src={Author2Picture}
                    id="image1"
                    className="img-fluid"
                    alt="S profilepicture"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Sukanya Kothapally</h4>
                  <p className="card-text">Computer Science Graduate Student</p>
                  <p className="info">
                    Specialization in Software Engineering and Databases.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://www.linkedin.com/in/sukanyakothapally/"
                    className="card-link"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer for About page*/}
        <nav className="footer navbar justify-content-center">
          <small>© 2020 All rights reserved</small>
        </nav>
      </div>
    )
  }
}
export default About
