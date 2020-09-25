<template>
  <!-- <v-container>
    <section class="skills section" id="certifications">
      <h2 class="section-title">certifications</h2>

      <div class="work__container bd-grid">
        <div class="work__img">
          <img
            src="../assets/images/certifications/responsive_web_design.png"
            alt=""
          />
        </div>
        <div class="work__img">
          <img
            src="../assets/images/certifications/javascript_algorithms_n_data_structures.png"
            alt=""
          />
        </div>
        <div class="work__img">
          <img
            src="../assets/images/certifications/front_end_libraries.png"
            alt=""
          />
        </div>
        <div class="work__img">
          <img
            src="../assets/images/certifications/fcc_frontend_certificate.png"
            alt=""
          />
        </div>
        <div class="work__img">
          <img
            src="../assets/images/certifications/data_visualization.png"
            alt=""
          />
        </div>
        <div class="work__img">
          <img
            src="../assets/images/certifications/vuejs_certificate_kebele.jpg"
            alt=""
          />
        </div>
        <div class="work__img">
          <img
            src="../assets/images/certifications/20_web_projects_kebele.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  </v-container> -->
  <v-container>
    
    <section>
      <div class="slide">
        <img
            src="../assets/images/certifications/20_web_projects_kebele.jpg"
            alt=""
          />
        <!-- <div class="content">
          <h2>slide one</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, placeat.</p>         
        </div> -->
        </div>
      <div class="slide">
        <img
            src="../assets/images/certifications/20_web_projects_kebele.jpg"
            alt=""
          />
        <!-- <p>vanilla</p>
        <div class="content">
          <h2>slide two</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, placeat.</p>
           
        </div> -->
        </div>
      <div class="slide">
        <img
            src="../assets/images/certifications/vuejs_certificate_kebele.jpg"
            alt=""
          />
        <!-- <div class="content">
          <h2>slide three</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, placeat.</p>
        </div> -->
        </div>
      <div class="slide">
        <img
            src="../assets/images/certifications/vuejs_certificate_kebele.jpg"
            alt=""
          />
        <!-- <div class="content">
          <h2>slide four</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, placeat.</p>
        </div> -->
        </div>
      <div class="slide">
        <img
            src="../assets/images/certifications/vuejs_certificate_kebele.jpg"
            alt=""
          />
        <!-- <div class="content">
          <h2>slide five</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, placeat.</p>
        </div> -->
        </div>
      <div class="slide">
        <img
            src="../assets/images/certifications/vuejs_certificate_kebele.jpg"
            alt=""
          />
        <!-- <div class="content">
          <h2>slide six</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, placeat.</p>
        </div> -->
      </div>
    </section>
    <section>
     <div> <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat libero modi ea voluptatibus harum impedit enim deserunt omnis nesciunt praesentium, voluptatum commodi unde similique, aut eum voluptate? Nulla, harum explicabo.</h4>
    </div>
    </section>
    
      
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
img{
     width : 100%;
    height : auto; 
   
}

* {
  margin: 0;padding: 0;box-sizing: border-box;
}

section {
  position: relative;
  width: 100%;
  /* height: 100vh; */
  display: flex;
  border: 2px solid black;
}

section .slide{
  position: relative;
  background: green;
  height: 100%;
  flex : 1;
  border-right: 2px solid black;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}
section .slide:last-child{
  border-right: none;
}
section .slide:hover{
  flex-grow: 10;
}
/* section .slide:nth-child(1){
  background-image: url(../assets/images/certifications/20_web_projects_kebele.jpg);
  background-position: center center;
  width: 100%;
  height: auto;

} */
section .slide .content{
  position: absolute;
  bottom: 0;
  margin: 40px;
  padding: 30px;
  background: black;
  color: whitesmoke;
  visibility: hidden;
  opacity: 0;
  transition: 0s;
  transform: translateY(100px);
}
section .slide:hover .content{
  visibility: visible;
  opacity: 1;
  transition: 0.5s;
  transition-delay: 0.5s;
  transform: translateY(0);
}
</style>
