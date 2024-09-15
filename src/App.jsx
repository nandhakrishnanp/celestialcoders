import React from "react";
import poster from "../asset/poster.png";
import achitecure from "../asset/Architecture.png";
import techstack from "../asset/image.png";
import monish from "../asset/monish.jpg";
import navven from "../asset/naveen.jpg";
import pooja from "../asset/pooja.jpg";
import nanba from "../asset/nanba.jpg";
const App = () => {
  return (
    <main>
      <header className=" flex flex-wrap items-center justify-center w-full gap-6">
        <p className=" text-xl p-2 ">Team Celestial Coders</p>
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold">Smart India Hackathon 2024</h1>
        </div>
      </header>
      <div className=" flex  h-[80vh] max-md:flex-wrap flex-row items-center justify-center  p-2">
        <div className="p-11">
          <h2 className=" text-2xl font-bold ">Our Abstract </h2>
          <div className="">
            <p className=" md:text-lg  p-2">
              Our advanced tyre maintenance system harnesses IIoT technology for
              real-time monitoring and optimization of Dump Trucks performance.
              The solution integrates a <b>Pressure Sensing Unit (PSU)</b> and{" "}
              <b>a Data Transmission Unit (DTU)</b>, which captures and
              transmits tyre pressure data using a{" "}
              <b>Round Robin scheduling protocol</b> via RF. Data from six tyres
              is collected and merged with vehicle load, speed, and location
              metrics, then sent to the cloud through{" "}
              <b>HTTP for remote access.</b>
              The backend, <b> built with Node.js </b> , interfaces with a{" "}
              <b> MongoDB database </b> to handle data storage and processing,
              with <b>Lllmaa 3.1</b> for Maintance Suggestion , while the
              frontend is developed using{" "}
              <b>React Native to provide a seamless </b> , cross-platform user
              experience. This architecture enables operators to monitor Tyre
              health in real time and leverage predictive maintenance to ensure
              optimal performance and safety.
            </p>
          </div>
        </div>

        <img src={poster} className="max-md:hidden" alt="banner with mobile" />
      </div>

      <div className="bg-gray-950  w-full h-screen flex flex-col items-center ">
        <h2 className="text-4xl text-white text-center p-2 ">
          Our Product Architecture
        </h2>
        <img
          src={achitecure}
          className="w-[70%] object-contain max-md:w-[80%] rounded-md h-[80%] "
          alt="architecture img"
        />
      </div>

      {/* <div>
      <h2 className="text-4xl text-black text-center p-2 ">
          Explanation and Demonstation of our Solution
        </h2>
        

      </div> */}

      <div className=" ">
        <h2 className=" text-3xl p-3 text-center">The Parameters We Collect</h2>
        <div className="flex items-center justify-center p-4">
        <ul className=" text-xl font-bold ">
    <li>1 . Tyre Pressure (from each of the  tyres)</li>
    <li>2 . Load Data (from the payload monitoring system)</li>
    <li>3 . Vehicle Speed (from GPS data)</li>
    <li>4 . Location (GPS coordinates)</li>
    <li>5 . Timestamp (for each data entry)</li>
    <li>6 . Tyre Temperature </li>
    <li>7 . Battery Status (for the pressure sensing units)</li>
    <li>8 . Tyre ID (for tracking specific tyres)</li>
    <li>9 . Signal Strength (RF signal quality)</li>
    <li>10 .Operational Status (active/inactive status of each sensor )</li>
</ul>

        </div>
      </div>
     
      <div className=" p-5 bg-black">
        <h2 className=" text-3xl p-3 text-center text-white">Our Tech Stack</h2>
        <div className="flex items-center justify-center p-4 ">
              <img src={techstack} className=" rounded-md" alt="" />
        </div>
           
      </div>
    
       <div className="p-5 ">
       <h2 className=" text-3xl p-3  text-center text-black">Our Team</h2>
             <div className=" flex flex-wrap gap-4 items-center justify-center p-2">
               
               <article className=" flex flex-col items-center justify-center ">
                   <img src="data:image/jpeg;base64,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" alt="" className="w-32 h-32 object-cover rounded-full" />
                   <h3 className="font-bold">Nandhakrishnan P</h3>
                   <p>Team Leader | Fullstack Developer</p>
               </article>
               <article className=" flex flex-col items-center justify-center">
                   <img src={pooja} alt="" className="w-32 h-32 object-contain rounded-full" />
                   <h3 className="font-bold">Pooja Sri S</h3>
                   <p>Presentation | Design</p>
               </article>
               <article className=" flex flex-col items-center justify-center">
                   <img src={monish} alt="" className="w-32 h-32 object-cover rounded-full" />
                   <h3 className="font-bold">Monish R</h3>
                   <p>Hardware Lead</p>
               </article>
               <article className=" flex flex-col items-center justify-center">
                   <img src="https://media.licdn.com/dms/image/v2/D5603AQGFBHvGffkCBg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722257565195?e=1731542400&v=beta&t=NDJmOeESMDWvtf24LcDRXIEXddrUn-5utZYb8gP_4ts" alt="" className="w-32 h-32 object-cover rounded-full" />
                   <h3 className="font-bold">Navithsanjay</h3>
                   <p>Electricals | 3d_modelling</p>
               </article>
              
            
               <article className=" flex flex-col items-center justify-center">
                   <img src={navven} alt="" className="w-32 h-32 object-cover rounded-full" />
                   <h3 className="font-bold">Naveen Ragavendra</h3>
                   <p>R&D</p>
               </article>
               <article className=" flex flex-col items-center justify-center">
                   <img src={nanba} alt="" className="w-32 h-32 object-cover rounded-full" />
                   <h3 className="font-bold">Mohan Raj C</h3>
                   <p>R&D | Hardware</p>
               </article>

             </div>
       </div>

    </main>
  );
};

export default App;
