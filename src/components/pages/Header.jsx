import React from "react";
import titleImage from "../images/homepage_image_no_background.png";

export default function Header() {
  return (
    <section class="colored-section" id="title">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand">CovidTogether</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#footer">
                  Get Involved
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">
                  Become A Volunteer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#cta">
                  Help Us Improve
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="row">
          <div class="col-lg-6">
            <h1 class="big-heading">
              Feeling lost in the midst of the COVID-19 crisis? <br></br> Let us
              help you!
            </h1>
            {/* <button type="button" class="btn btn-dark btn-lg download-button">
            <i class="fab fa-apple"></i> Download
          </button> */}
            {/* <button
            type="button"
            class="btn btn-outline-light btn-lg download-button"
          >
            <i class="fab fa-google-play"></i> Download
          </button> */}
          </div>
          <div class="col-lg-6">
            <img
              class="title-image"
              src={titleImage}
              alt="old_person_with_young_person"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
