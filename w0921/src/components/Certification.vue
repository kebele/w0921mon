<template>
  <v-container>
    <div class="slider">
      <div class="slide current">
        <div class="content">
          <h1>Slide One</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Two</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Three</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Four</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Five</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Six</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button id="prev"><i class="fas fa-arrow-left"></i></button>
      <button id="next"><i class="fas fa-arrow-right"></i></button>
    </div>
  </v-container>
</template>

<script>
// import slide from "../assets/js/slide";
export default {
  mounted() {
    // slide;
    const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 3000;

let slideInterval;

const nextSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for next slide
  if (current.nextElementSibling) {
    //add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for prev slide
  if (current.previousElementSibling) {
    //add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// button events

next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//auto slide
if (auto) {
  //run next slide at internal time
  slideInterval = setInterval(nextSlide, intervalTime);
}

  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  background: #333;
  color: #fff;
  line-height: 1.6;
}

.slider {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.slide.current {
  opacity: 1;
}

.slide .content {
  position: absolute;
  bottom: 70px;
  left: -600px;
  opacity: 0;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 25px;
}

.slide .content h1 {
  margin-bottom: 10px;
}

.slide.current .content {
  opacity: 1;
  transform: translateX(600px);
  transition: all 0.7s ease-in-out 0.3s;
}

.buttons button#next {
  position: absolute;
  top: 40%;
  right: 15px;
}

.buttons button#prev {
  position: absolute;
  top: 40%;
  left: 15px;
}

.buttons button {
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  padding: 13px 15px;
  border-radius: 50%;
  outline: none;
}

.buttons button:hover {
  background-color: #fff;
  color: #333;
}

@media (max-width: 500px) {
  .slide .content {
    bottom: -300px;
    left: 0;
    width: 100%;
  }

  .slide.current .content {
    transform: translateY(-300px);
  }
}


.slide:first-child {
    background : url('../assets/images/certifications/20_web_projects_kebele.jpg') no-repeat center top/cover;
}
.slide:nth-child(2) {
    background : url('../assets/images/certifications/data_visualization.png' ) no-repeat center top/cover;
}
.slide:nth-child(3) {
    background : url('../assets/images/certifications/fcc_frontend_certificate.png' ) no-repeat center top/cover;
}
.slide:nth-child(4) {
    background : url('../assets/images/certifications/front_end_libraries.png' ) no-repeat center top/cover;
}
.slide:nth-child(5) {
    background : url('../assets/images/certifications/javascript_algorithms_n_data_structures.png' ) no-repeat center top/cover;
}
.slide:nth-child(6) {
    background : url('../assets/images/certifications/responsive_web_design.png' ) no-repeat center center/cover;
}
.slide:nth-child(7) {
    background : url('../assets/images/certifications/vuejs_certificate_kebele.jpg' ) no-repeat center center/cover;
}
</style>
