AOS.init();

// Work experience cards
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Full-stack Developer",
    place: "WORLDSOURCE INNOVATIONS PRIVATE LIMITED",
    time: "Dec 2023 - Apr 2024 · 5 mos",
    desp: "<li>Worked on developing and maintaining full-stack applications.</li><li>Implemented various features and fixed bugs based on client requirements.</li><li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>",
  },
  {
    title: "Project Intern",
    place: "Skill Vertex",
    time: "Feb 2023 - Mar 2023 · 2 mos",
    desp: "<li>Assisted in various projects, contributing to both front-end and back-end development.</li><li>Gained hands-on experience in industry-standard tools and practices.</li><li>Worked in a hybrid environment, balancing in-office and remote work efficiently.</li>",
  },
  {
    title: "Website Developer",
    place: "Truelancer.com",
    time: "Mar 2020 - Dec 2022 · 2 yrs 10 mos",
    desp: "<li>Developed and maintained websites for various clients.</li><li>Ensured responsive design and optimized performance across different devices.</li><li>Worked as a freelancer, managing multiple projects and deadlines independently.</li>",
  },
  {
    title: "Developer",
    place: "Caze Labs Pvt. Ltd.",
    time: "Currently",
    desp: "<li>Contributing to open source projects and supporting technical activities.</li><li>Collaborated with a team of skilled professionals on various innovative projects.</li><li>Received a Certificate of Appreciation at the Open Source India 2023 conference.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards
const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Open Source Society Contribution",
    description:
      "Honored to receive a Certificate of Appreciation from Caze Labs Private Limited at the Open Source India 2023 conference in Bangalore. Provided support for the events and technical activities.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
          <div class="content">
              <h2 class="volunteerTitle">${title}</h2><br>
              <p class="copy">${description}</p>
          </div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section
const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
};
document.addEventListener("DOMContentLoaded", showCards3);
