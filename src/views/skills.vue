<template>

  <div class="Skills" id="Skills">
    <div v-for="(group, index) in skillSet" :key="index" class="animation-container">
      <h1>{{ group.title }}</h1>
      <div class="skillSet">
          <div class="skill-info-grid" ref="skillGrid">

            <div v-for="(skill, skillIndex) in group.skills" :key="skillIndex" class="skill-info">

            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >

  export default {
    data() {
      return {
      skillSet: [
      {
        title: "Skills",
        skills: [
          {
            heading: "Skill 1",
            description: "Skill 1",
          },
          {
            heading: "Skill 2",
            description: "Skill 2",
          },
          {
            heading: "Skill 3",
            description: "Skill 3",
          },
          {
            heading: "Skill 4",
            description: "Skill 4",
          },
          {
            heading: "Skill 5",
            description: "Skill 5",
          },
          {
            heading: "Skill 6",
            description: "Skill 6",
          },
          {
            heading: "Skill 7",
            description: "Skill 7",
          },
          {
            heading: "Skill 8",
            description: "Skill 8",
          },
          {
            heading: "Skill 9",
            description: "Skill 9",
          },
          {
            heading: "Skill 10",
            description: "Skill 10",
          },
          {
            heading: "Skill 11",
            description: "Skill 11",
          },

        ],
      },
    ]
    };
  },

  methods: {

    scrollAnimation(){
        scrollAnimation(); 
      },
},

  mounted(){
    this.scrollAnimation();
  }

};

</script>
<style lang="scss" scoped>

h1 {
  margin-bottom: 2.5rem;
  margin-right: 22vw;
  margin-left: 22vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  color: #363636;
}

.Skills {
  width: 870px;
  // height: 478px;
}

.animation-container {
  transition: opacity 0.5s, transform 0.5s;
}

.skill-info-grid {
  transform: translateZ(0);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  place-items: center;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  padding: 15px;
  border-radius: 20px;
  animation: moveAnimation 12s infinite;
}

.skill-info {
  transform: translateZ(0);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: 	#A2AAAD;
  margin: 5px;
  width: 140px; 
  height: 70px; 
  // background: #A2AAAD;
  background: rgba(255,255,255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.05);
  // border-radius: 1rem;
  // border-radius: 25% 25% 100% 100% / 25% 25% 50% 50%;
  // border-radius: 8rem 8rem 8rem 8rem / 1rem 1rem 1rem 1rem;
  // border-radius: 6px 6px 12px 12px / 6px 6px 6px 6px;
  // border-radius: 6px 6px 12px 12px / 1rem 1rem 1rem 1rem;
  // border-radius: 6px 6px 12px 12px / 1rem 1rem 1rem 1rem;
  // border-radius: 50% 50% 100% 100% / 50% 50% 45% 50%;
  // border-radius: 100% 100% 26% 38% / 42% 50% 52% 52%;
  // border-radius: 100% 100% 53% 59% / 42% 42% 52% 52%;
  // border-radius: 12% / 50%;
  // border-radius: 12% 12% 12% 12% / 45% 45% 50% 50%;

  // border-radius: 100% 100% 50% 59% / 42% 47% 52% 58%;
  // border-radius: 100% 91% 50% 59% / 42% 45% 58% 58%;
  // border-radius: 69% 69% 69% 69% / 30% 30% 30% 30%;

  border-radius: 30% / 30%  ;
  // border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.95);
  border-left: 1px solid rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  @supports (backdrop-filter: blur(1rem)) or (-webkit-backdrop-filter: blur(1rem)) {
      backdrop-filter: blur(40px); 
      -webkit-backdrop-filter: blur(40px);
    }
  animation: scaleAnimation 6s infinite;

  // box-shadow: var(--niceBoxShadow);

}

.skill-info:nth-child(1) {
  grid-column: 1 / span 2;
  grid-row: 1;
  // animation: ripple 1.5s ease-in-out infinite;
  // animation-delay: 0s; 
  animation-delay: 25ms;
}

.skill-info:nth-child(2) {
  grid-column: 3 / span 2;
  grid-row: 1;
  // animation: ripple 1.5s ease-in-out infinite;
  // animation-delay: 0.2s; 
  // animation-delay: 0.2s; 
  animation-delay: 125ms;
}

.skill-info:nth-child(3) {
  grid-column: 5 / span 2;
  grid-row: 1;
  // animation: ripple 1.5s ease-in-out infinite;
  // animation-delay: 0.15s; 
  // animation-delay: 0.4s; 
  // animation-delay: 0.35s;
  animation-delay: 250ms;

}

.skill-info:nth-child(4) {
  grid-column: 7 / span 2;
  grid-row: 1;
  // animation: ripple 1.5s ease-in-out infinite;
  // animation-delay: 0.2s; 
  // animation-delay: 0.6s; 
  // animation-delay: 0.4s; 
  animation-delay: 600ms;
}


.skill-info:nth-child(5) {
  grid-column: 2 / span 2;
  grid-row: 2;
  // animation: ripple 1.5s ease-in-out infinite;
  // animation-delay: 0.25s; 
  // animation-delay: 0.15s; 
  // animation-delay: 0.3s; 
  // animation-delay: 0.15s;
  animation-delay: 300ms;
}

.skill-info:nth-child(6) {
  grid-column: 4 / span 2;
  grid-row: 2;
  // animation-delay: 0.5s; 
  // animation-delay: 0.3s;
  animation-delay: 100ms;
}

.skill-info:nth-child(7) {
  grid-column: 6 / span 2;
  grid-row: 2;
  // animation-delay: 0.16s; 
  // animation-delay: 0.25s; 
  // animation-delay: 0.7s;
  // animation-delay: 0.625s; 
  animation-delay: 300ms; 

}

.skill-info:nth-child(8) {
  grid-column: 1 / span 2;
  grid-row: 3;
  // animation-delay: 0.07s; 
  // animation-delay: 0.15s;
  // animation-delay: 0.35s; 
  // animation-delay: 0.35s; 
  // animation-delay: 0.25s;
  animation-delay: 500ms;
}

.skill-info:nth-child(9) {
  grid-column: 3 / span 2;
  grid-row: 3;
  // animation-delay: 0.12s; 
  // animation-delay: 0.25s; 
  // animation-delay: 0.6s; 
  // animation-delay: 0.5s; 
  animation-delay: 300ms;
}

.skill-info:nth-child(10) {
  grid-column: 5 / span 2;
  grid-row: 3;
  // animation-delay: 0.17s;
  // animation-delay: 0.25s;
  // animation-delay: 0.85s;
  // animation-delay: 0.75s;
  // animation-delay: 600ms;
  animation-delay: 150ms;
}

.skill-info:nth-child(11) {
  grid-column: 7 / span 2;
  grid-row: 3;
  // animation-delay: 0.22s;
  // animation-delay: 0.22s;
  // animation-delay: 0.3s;
  // animation-delay: 1s;
  // animation-delay: 800ms;
  animation-delay: 175ms;
}

// .skill-info:nth-child(12) {
//   grid-column: 4 / span 2;
//   grid-row: 4;
//   animation-delay: 0.08s;
// }



// @keyframes moveAnimation {
//   0% {
//     transform: translateX(0px);
//   }
//   100% {
//     transform: translateX(calc(random() * 5px - 15px)); /* Random translation */
//   }
// }



@keyframes shapeAnimation{
  0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      // -webkit-transform: translate(-30%, 40%) rotate(-20deg);
      // transform: translate(-30%, 40%) rotate(-20deg);
  }
  25% {
      -webkit-transform: scale(1.25);
      transform: scale(1.25);
      // -webkit-transform: translate(0%, 20%) skew(-15deg, -15deg) rotate(80deg);
      // transform: translate(0%, 20%) skew(-15deg, -15deg) rotate(80deg);
  }
  50% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      // -webkit-transform: translate(30%, -10%) rotate(180deg);
      // transform: translate(30%, -10%) rotate(180deg);
  }
  75% {
      -webkit-transform: scale(1.75);
      transform: scale(1.75);
      // -webkit-transform: translate(-30%, 40%) skew(15deg, 15deg) rotate(240deg);
      // transform: translate(-30%, 40%) skew(15deg, 15deg) rotate(240deg);
  }
  100% {
      -webkit-transform: scale(2);
      transform: scale(2);
      // -webkit-transform: translate(-30%, 40%) rotate(-20deg);
      // transform: translate(-30%, 40%) rotate(-20deg);
  }
}
// transform: translate(-30%, 40%)

// h2 {
  // color: #333;
  // color: 	#A2AAAD;
  // color: var(--quaternary);
  // font-size: 1.5em;
  // margin-bottom: 20px;
  // color: #333;
  // filter: drop-shadow(0px 0px 1px  hsl(244, 100%, 90%));
  
// }

@media (max-width: 520px) {
  #Skills, .animation-container, .align-SkillLeft, .align-SkillRight, .left-alignTitle, .right-alignTitle{
    display: grid;
    align-items: center;
    justify-self: start; 
    // text-align: left;
    align-self: center;
    justify-content: center;
    min-width: 90vw;

    margin: 0vw;
    padding: 0vw;
  
  }
}


.Skills {
  position: relative;
  width: 58vw; 
  // padding: 20px 20px 20px 20px;
/* add 10 to space away from Projects */
  // margin: 10px auto 25px auto;
  text-align: center;  

}



</style>