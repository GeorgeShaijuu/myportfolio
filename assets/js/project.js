AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Roll Call - Attendance Management System",
    cardImage: "assets/images/project-page/Roll_Call.png", // Replace with actual image path
    description: "An attendance management system built using VB.NET and MySQL.",
    tagimg: "https://upload.wikimedia.org/wikipedia/commons/4/4f/VB.NET_Logo.svg", // VB.NET logo
    Previewlink: "", // Add if you have a live preview
    Githublink: "https://github.com/GeorgeShaijuu/RollCall", // Replace with actual link
  },
  {
    title: "Cyber Sentinels - Web Extension",
    cardImage: "assets/images/project-page/cyber-sentinels.jpg", // Replace with your actual image path
    description: "Cyber Sentinels is a browser extension that boosts web security by scanning and analyzing links in real-time using URLScan.io, Google Safe Browsing, and Generative AI. It features a cyber-themed UI, detailed threat reports, and auto-scan capabilities.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png", // Browser extension or cyber security icon
    Previewlink: "https://github.com/MrJi421/Cyber_Sentinels", // GitHub repo as preview for now
    Githublink: "https://github.com/MrJi421/Cyber_Sentinels",
  },
  {
    title: "GrooveWave - Music Streaming App",
    cardImage: "assets/images/project-page/groovewave.jpg", // Replace with your actual image path
    description: "A modern music player app built with Android Studio and Firebase, featuring user authentication, real-time music streaming, and a sleek Jetpack Compose UI.",
    tagimg: "https://developer.android.com/images/logos/android.svg", // Android logo
    Previewlink: "", // Add Firebase-hosted preview link if available
    Githublink: "https://github.com/GeorgeShaijuu/MusicApp", // Replace with your actual GitHub link
  },
  {
    title: "My Portfolio Website",
    cardImage: "assets/images/project-page/portfolio.jpg", // Replace with your actual image path
    description: "A personal portfolio website showcasing my projects, skills, and contact details. Based on an open-source template, customized with HTML, CSS, and JavaScript to be fully responsive and optimized for performance.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/732/732212.png", // HTML/CSS logo or something similar
    Previewlink: "/home", // Replace with your actual hosted link
    Githublink: "https://github.com/GeorgeShaijuu/myportfolio", // Replace with your actual GitHub link
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `
      <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
        <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          <div class="header">
          </div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
              </div>
              <ul class="menu-content"><br>
                <li><a href="${Previewlink}" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </a></li>
                <li><a href="${Githublink}" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < skillcard.length; i++) {
    if (
      skillcard[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
