import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function HomePage() {
  return (
    <div>
      <Header />

      <section class="white-section" id="features">
        <div class="row feature-row">
          <div class="col-lg-4 feature">
            <i class="fas fa-check-circle feature-icon"></i>
            <h3 class="feature-title">Easy to use.</h3>
            <p>Set up with ease, and wait to be contacted by our volunteers.</p>
          </div>

          <div class="col-lg-4 feature">
            <i class="fas fa-bullseye feature-icon"></i>
            <h3 class="feature-title">Get help fast.</h3>
            <p>
              Whatever your difficulty, we aim to help you as fast as we can.
            </p>
          </div>

          <div class="col-lg-4 feature">
            <i class="fas fa-heart feature-icon"></i>
            <h3 class="feature-title">Loving Community.</h3>
            <p>
              Connect with kind souls all over the world, who can't wait to help
              you out.
            </p>
          </div>
        </div>
      </section>

      <section class="colored-section" id="cta">
        <h3 class="big-heading">
          Find help and support from our loving volunteers today.
        </h3>
        <button class="btn btn-dark btn-lg download-button" type="button">
          Get Involved Now!
        </button>
        <button class="btn btn-light btn-lg download-button" type="button">
          Become a Volunteer!
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
