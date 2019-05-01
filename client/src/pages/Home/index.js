import React from "react";
import NavbarHome from "../../components/Navbars/NavbarHome";
import "./style.scss";

function Home() {
  return (
    <>
      <NavbarHome />
      <section id="home-section">
        <div>
          <h1 id="home-title">Cup of Sugar</h1>
          <h2>Bringing Neighbors Closer</h2>
          <div id="about">
            <p>
              Cup of Sugar helps you share household items or favors with your neighbors!
              Need a cup of sugar? A lawnmower? A shovel? Check with your
            neighbors! <br />
              <br />
              You know what they say, you get as much as you give. Sign up or login and post an item or
              two that you'd like to offer to the community should they need it.
              Is that leafblower getting cobwebs? Share it! Your neighbors are probably
              in need.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
