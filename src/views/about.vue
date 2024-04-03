<template>
  <div class="Abouts">
      <div v-for="(group, index) in abouts" :key="index" class="topContainer">
        <h1>{{ group.heading }}</h1>
        <div v-for="(about, aboutIndex) in group.abouts" :key="aboutIndex" >

          <div class="about-description">
            <!-- <h3>{{ about.title }}</h3> -->
            <!-- <img :src="skill.imageSrc" alt="Skill Image" /> -->
            <p>{{ about.description }}</p>
          </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    
      abouts: [
      {
        heading: "About Me",
        abouts: [
          {
            description: "Quick and motivated learner with a passion for programming and problem solving. I am a recent graduate in Computer Programming & Analysis. I am currently enhancing my skills through various projects that find a need and fill it. My hobbies include 3D printing, CAD design, and PC building.",
            // imageSrc: "project1.jpg",
            // Other project details
          },

        ],
      },
      ]
    };
  },
};
</script>
<style lang="scss" scoped>

.Abouts {
  display: flex;
  justify-content: center;
  width: 750px;
  aspect-ratio: 4 / 3;
  // height: 478px;
  // aspect-ratio: 19.5 / 9;
  // aspect-ratio: 9 / 19.5;
  // height: 550px;
  background: rgba( 255, 255, 255, 0.025); 
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  background: var(--componentBG);
  box-shadow: var(--componentShadow);
  filter: var(--componentFilter);
  border-radius: var(--componentRadius);
  border-radius: 1rem;
  @supports (backdrop-filter: blur(1rem)) or (-webkit-backdrop-filter: blur(1rem)) {
    backdrop-filter: blur(42px); 
    -webkit-backdrop-filter: blur(42px); 
  }
  padding: 2rem;
  // border: 1px solid rgba(255, 255, 255, 0.5);
  // border-top: 1px solid rgba(255, 255, 255, 0.45);
  // border-left: 1px solid rgba(255, 255, 255, 0.075);
  // border-right: 1px solid rgba(255, 255, 255, 0.075);
  // margin: auto;
  // border-radius: 8px; 
  // width: 59vw; 
  // height: 100%;
}

.topContainer {
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  justify-content: space-evenly;
  align-items: center;
  // padding: 1rem;
  // gap: 1rem;
}

.about-description {
  display: flex;
  align-content: center;
  justify-content: center;
  padding-bottom: 2rem;
  /* margin-left: auto;
  margin-right: auto; */
  // margin-left: 25%;
  // margin-right: 25%;
  // margin-left: 8vw;
  // margin-right: 8vw;
  // margin-left: 0%;
  // margin-right: 10%;
  // margin-right: 8rem;
  // margin-left: 2rem;
  // padding: 0 3rem 0 0rem;
}

.about-description p {
  font-size: 21px;
  width: 65%;
  text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px;
  font-family: "Satoshi";
  font-feature-settings: "salt";
  font-variation-settings: "wght" 410, 'opsz' 28;
  letter-spacing: -.21px;
  line-height: 1.55;
  font-size-adjust: 0.525;
  // text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05); 
  // font-family: "Poppins";
  // font-variation-settings: "wght" 310, 'opsz' 28;
  // padding-bottom: 3rem;
}

h1 {
  margin-top: -1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  // padding: 0px;
  // padding: 1rem;
  // margin-bottom: 2rem;
}

h2 {
    
  font-size: 36px;
  color: #363636;
  text-shadow: rgba(255, 255, 255, 0.8) 0px 1px 1px;
  -webkit-font-smoothing: subpixel-antialiased;
  font-variation-settings: "wght" 700, 'opsz' 14;
  font-feature-settings: "salt";
  font-size-adjust: 0.525;
  letter-spacing: -0.55px;
  // font-feature-settings: "cv06", "cv13";
}

@media (max-width: 520px) {
	.Abouts {
		display: grid;
		align-items: center;
		justify-self: start; 
    align-self: center;
		justify-content: center;
		min-width: 90vw;
    // text-align: left;
    // margin: 0vw;
    // padding: 0vw;
	}

}


</style>