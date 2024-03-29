import React from "react";
import Claire from "../Images/Claire.png";
import Austin from "../Images/Austin.png";
import Keith from "../Images/Keith.png";
import Connor from "../Images/Connor.png";
import Greta from "../Images/Greta.png";
import Dwaylan from "../Images/Dwaylan.png"
// import Logo from "../Images/OurLogo.png";
import "./About.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
</style>;

const About = () => {
  return (
    <div className="about">
      <body>
        <div className="container">
          <p>
            Welcome to the Medical Assistant Program, your number one source for
            searching a job in your field. We're dedicated to giving you the
            very best when looking for your new role in the Medical Assistance
            field, with a focus on your dream Medical Assistance job. Founded in
            2021 by Claire Sheek, Austin Skrobarczyk, Connor Yates, Keith
            Kritselis, Dwaylan Applewhite and Greta Sepulveda. Medical Assistant
            Job Search has come a long way from it's beginnings in Austin,
            Texas. When we the founders first started out, our passion for
            Medical Job Assistance it drove us to action we quit our day jobs,
            did tons of research, so that Medical Assistance Job Search can
            offer you competitive Medical Assistance position. We now serve
            clients all over Central Texas and are thrilled that we're able to
            turn our passion into our own website. We hope you enjoy our Medical
            Assistance job search website as much as we enjoy offering it to
            you. If you have any questions or comments, please don't hesitate to
            contact us. All the best, Medical Assistance team
          </p>
        </div>
      </body>




      <div className ="Gallery">
         <img src={Claire} alt="Claire"/>
         <img src={Austin} alt="Austin"/>
         <img src={Keith}  alt="Keith"/>
         <img src={Connor} alt="Connor"/>
         <img src={Dwaylan} alt="Dwaylan"/>
         <img src={Greta} alt ="Greta"/>
       </div>
      
</div>



   
  );
};

export default About;
