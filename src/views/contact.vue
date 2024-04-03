<!-- Contact.vue -->
<template>
  <div class="Contacts">

    <div class="topForm">

      <form name="Contact Form" id="contactForm" @submit.prevent="handleSubmit" method="POST">
        <h1>Inquiries</h1>
        <div class="form-group" id="formName">
          <label name="NameLabel" id="nameLabel" for="name">Name:</label>
          <input name="name" title="Name" autocomplete="name" placeholder="Name" type="text" id="name" v-model="localFormData.name" required class="form-input">
          <div v-if="errors.name" name="NameError" class="error-message">{{ errors.name }}</div>
        </div>

        <div class="form-group" id="formEmail">
          <label name="EmailLabel" id="emailLabel" for="email">Email Address:</label>
          <input name="EmailInput" autocomplete="email" title="Email" placeholder="Email"  type="email" id="email" v-model="localFormData.email" required class="form-input">
          <div v-if="errors.email" name="EmailError" class="error-message">{{ errors.email }}</div>
        </div>

        <div class="form-group" id="formCheckbox">
          <label name="BusinessLabel" id="businessLabel" for="checkbox">Business?</label>
          <input name="business" title="Business?" placeholder="Business?" type="checkbox" id="checkbox" v-model="localFormData.business" class="checkbox-input">
        </div>

        <button name="SubmitButton" type="submit" id="submit" class="submit-button">SUBMIT</button>

      </form>

    </div>



    <div class="body3">

      <!-- <div> -->
        <ul class="sci">

          <li class="card18"><a class="clayIcon16" title="GitHub" href="https://github.com/slothkami">
              <div class="github-wrapper">
                <i class="pi pi-github" id="iconMask"></i>
              </div>
            </a></li>

          <li class="card18"><a class="clayIcon16" href="https://www.linkedin.com/in/collinhawks" title="LinkedIn">
              <div class="linkedin-wrapper">
                <i class="pi pi-linkedin" id="iconMask"></i>
              </div>
            </a></li>

          <li class="card18"><a class="clayIcon16" href="https://discordapp.com/users/608009405799071776"
              title="Discord">
              <div class="discord-wrapper">
                <i class="pi pi-discord" id="iconMask"></i>
              </div>
            </a></li>

        </ul>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>

// import { mapActions, mapGetters } from "vuex";

export default {
  props: ['sectionID', 'formData'],

//   computed: {
//   ...mapGetters('index', ['getSessionKey', 'getCsrfToken']),
// },


  data() {
    return {
      localFormData: {
        name: "",
        email: "",
        business: false,
      },
      errors: {},
    };
  },

//   created() {
//     this.localFormData = { ...this.formData };
//   },

//   methods: {
//     // ...mapActions("index", ["submitForm"]),

//     handleSubmit() {
//       // const sessionKey = this.getSessionKey; // Invoke the getter function
//       // const csrfToken = this.getCsrfToken;

//       const formData = {
//     ...this.localFormData,
//   };

// //   const headers = {
// //     "X-CSRFToken": csrfToken,
// //     "Session-Key": sessionKey,
// //   };


//       this.submitForm(formData, headers)
//         .then(() => {
//           // Handle success if needed
//           // Emit the form data to the parent component
//           this.$emit("formSubmitted", this.localFormData);
//         })
//         .catch((error) => {
//           // Handle error if needed
//           console.error("Error submitting form:", error);
//         });
//     },
//   },
};
</script>
<style lang="scss" scoped>

.topForm {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  opacity: 0;

}

form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 65%;
  // justify-content: space-around;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 1rem 0 1rem 0;

}

.Contacts {
  display: flex;
  // display: grid;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
  // width: 870px;
  // height: 750px; 
  // aspect-ratio: 3 / 4;
  width: 750px;
  // height: 75vh;
  aspect-ratio: 4 / 3;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.075);
  border-right: 1px solid rgba(255, 255, 255, 0.075);
  box-shadow: var(--componentShadow);

  background: var(--componentBG);
  filter: var(--componentFilter);
  border-radius: var(--componentRadius);

  @supports (backdrop-filter: blur(1rem)) or (-webkit-backdrop-filter: blur(1rem)) {
    backdrop-filter: blur(1rem); 
    -webkit-backdrop-filter: blur(1rem); 
  //   -webkit-backdrop-filter: blur(32px // 16px); 
  }
  
}

label {
  position: absolute;
  z-index: 1;
  padding: 3px 2px;
  transform: translateY(-100%);
  text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px;
  font-size: 16px;
  font-family: "Satoshi";
  font-feature-settings: "salt";
  font-variation-settings: "wght" 450, 'opsz' 28;
  letter-spacing: -.21px;
  line-height: 1.45;
  font-size-adjust: 0.525;
}

// label {
//   text-shadow:0px 1px 0px rgba(0, 0, 0, 0.1);
//   position: absolute;
//   transform: translateY(-100%);
//   // color: var(--nav-dark-outlines);
//   color: var(--dark-nav-background);
//   padding: 3px 2px;
//   font-size: small;
//   z-index: 1;
// }

.form-group { 
  display: flex;
  flex-direction: column;
  width: 280px;

}

#formCheckbox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 35px;
  width: auto;
  padding-top: 16px;

}

#businessLabel {
  display: flex;
  flex-direction: column;
  height: 24px;
  width: 76px;
  margin-bottom: 12px;

}

#checkbox {
  display: flex;
  flex-direction: column;

}

.form-input {
// For cutout inside border of input
  display: flex;
  flex-direction: column;
  position: relative;
  height: 25px;
  padding: 18px 5px;
  font-size: 18px;
  min-width: 35%;
  max-width: 300px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: #08f00000;
  box-shadow: 0px 5px 8px rgb(255, 255, 255, .2);  
  text-shadow: rgba(255, 255, 255, 0.2) 0px 1px 1px;

}

input[type='checkbox']{
  display: flex; 
  align-items:center; 
  justify-content:center; 
  transform:scale(1.75);
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.6);
  height: 15px;
  width: 15px; 
  position: relative; 
  box-shadow: 0 2px 10px #fc370621,0 2px 5px #e64e081c,-4px -2px 9px #00c8fa26,4px 2px 9px #7878ff26;
  cursor: pointer;

}

input[type='checkbox']:checked:before{
  transform: translateZ(0);
  content:'\2713'; 
  display: flex; 
  align-items: center; 
  justify-content: center;  
  height: auto;
  width: auto; 
  padding-bottom: 2.5px;
  padding-left:.75px;
  color: transparent;
  background: linear-gradient(80deg, #e8eab1 0%, #DDE5FA 50%, #DDCBF8 100%);  
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight:bold; 

}

.submit-button {
  transform: translateZ(0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: 45px;
  width: 112px;
  font-size: 16px;
  color:  #fff;
  border-radius: 4px;
  cursor: pointer;
  animation: gradient 6s ease infinite;
  box-shadow: 0px 5px 8px rgb(255, 255, 255, .25); 
	text-shadow: 1px 1px 2px  rgba(100, 116, 139, 0.75);
  text-shadow: rgba(255, 255, 255, 0.8) 1px 1px 2px;
  // text-shadow: rgba(54, 54, 54, 0.75) 1px 1px 2px;
  // box-shadow: var(--shadow-4);
  // Discord
  box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px rgba(152, 90, 246, 0.15), inset 0px 14px 28px rgb(240, 244, 250);
  color: #363636;
  font-feature-settings: "salt";
  font-variation-settings: "wght" 650, 'opsz' 28;
  font-size-adjust: 0.54;
  font-family: "Satoshi";
  letter-spacing: .25px;
  // letter-spacing: -.21px;
  -webkit-font-smoothing: subpixel-antialiased;
  // -webkit-text-stroke: #363636;
  // -webkit-text-stroke-width: 0.05px;

  filter: contrast(110%);
  filter: contrast(110%) saturate(120%);
  // opacity: 0.9;
  background: hsla(0, 0%, 100%, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.65);
		@supports (backdrop-filter: blur(150px)) or (-webkit-backdrop-filter: blur(150px)) {
      -webkit-backdrop-filter: blur(150px) saturate(100%);
      backdrop-filter: blur(150px) saturate(100%);
    }
}

.submit-button:hover {
  color: var(--dark);
  box-shadow: 0px 5px 8px rgba(100, 116, 139, 0.25); 
  // box-shadow: 0px 0px 4px rgba(100, 116, 139, 0.75);  
  // transform: translateZ(0);
  // transition: background-color 250ms ease-in-out;
  // animation: moveShadow2 4s linear infinite; 
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
  z-index: 1;
  // font-weight: 500;
  // font-size: 1.75em;
  // font-weight: bold;
  // color: #2c3e50;
  // text-shadow: hsl(244, 100%, 90%) 0px 0px 1.5px;
  // filter: drop-shadow(0px 0px 1px  hsl(244, 100%, 90%));
  // text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px;
  // -webkit-text-stroke-width: 1px;
  // -webkit-text-stroke-color: black;
}

.error-message {
  color: red; 
}

// FooterNew

.body3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  width: 600px;
}

// #clayIcon16
.clayIcon16 {
  color: transparent;
  font-size: 3rem;
  filter: saturate(120%);
  transition: all 0.4s ease-in-out;
  background-clip: text;
  // color: rgb(190, 220, 250, 0.5);
  // background: linear-gradient(to right, #2851A3,#0866FF);
  // height: 3rem;
  // width: 3rem;
}

.card18 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  // margin-top: 15px;
  width: 77px;
  height: 77px;
  border-radius: 15px;
  transform: rotateY(0deg) scale(1);
  transition: 0.5s;
  opacity: 0.9;
  border: 1px solid rgba(255, 255, 255, 0.01);
  background: hsla(0, 0%, 100%, 0.4);
  filter: contrast(110%);

  @supports (backdrop-filter: blur(150px)) or (-webkit-backdrop-filter: blur(150px)) {
      -webkit-backdrop-filter: blur(150px);
      backdrop-filter: blur(150px);
      // -webkit-backdrop-filter: blur(150px) saturate(100%);
  }
  // background-color: rgb(255, 255, 255, 0.25);
  // background: hsla(0, 0%, 100%, 0.2);
  // background: hsla(0, 0%, 100%, 0.45);
  // border: 1px solid rgba(121, 121, 121, 0.4);
  // filter: saturate(120%);
}

ul li:before, ul li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 50%;
  opacity: 0;
  transition: 1s;
  filter: blur(20px);
  // border-radius: 20%;
}

ul li:after {
  filter: blur(40px);
}

ul li:hover:after, ul li:hover:before {
  opacity: 1;
} 

// GitHub - 1
// box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(264, 68%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
ul li:nth-child(1),
ul li:nth-child(1):before,
ul li:nth-child(1):after {
  box-shadow: 0 8px 18px 0 hsla(264, 68%, 45%, 0.6)
}
// linkedin - 2
// 	box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(212, 60%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
ul li:nth-child(2),
ul li:nth-child(2):before,
ul li:nth-child(2):after {
  box-shadow: 0 8px 18px 0 hsla(212, 60%, 50%, 0.6)
}
// Discord - 3
// box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(227, 68%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
ul li:nth-child(3),
ul li:nth-child(3):before,
ul li:nth-child(3):after {
  box-shadow: 0 8px 18px 0 hsla(227, 68%, 45%, 0.6)
}

ul.sci .card18:hover {
  opacity: 1;
  transform: scale(1.15);
}

// LinkedIn
ul.sci .card18:nth-child(2) {
  box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(212, 68%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
}
// Discord
ul.sci .card18:nth-child(3) {
  box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(227, 68%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
}
// GitHub
ul.sci .card18:nth-child(1) {
  box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(264, 68%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
}

i {
  padding: 5px;
}

p {
  font: 1em/1.618 Nunito, sans-serif;
  color: hsl(120, 5%, 35%);
}

ul {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 16px;
}

#iconMask {
  color: rgba(255,255,255,0.05);
  text-shadow: 1px 1px 1px rgba(255,255,255,0.3);
}

.discord-wrapper, .insta-wrapper, .fb-wrapper, .linkedin-wrapper, .github-wrapper {
  display: flex;
  text-shadow: 1px 1px 1px rgba(255,255,255,0.3);
  filter: drop-shadow(rgba(255, 255, 255, .75) 0px 0px 1px) saturate(200%);
  // filter: drop-shadow(rgba(127, 127, 127, .65) 0px 0px 1.5px) saturate(200%);
  // filter: saturate(200%);
  // padding: 5px;
  // font-size: 3rem;
}

.fb-wrapper {
  // background: linear-gradient(to left, #3b5998, rgba(0, 115, 255, 1) 65% );
  background: linear-gradient(to right, #2851A3,#0866FF);
  background-clip: text;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;  
}

.linkedin-wrapper {
  background:linear-gradient(45deg, #1565c0, #0077b5);
  background-clip: text;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;  
}

.insta-wrapper {
  // background: linear-gradient(to right, rgba(255, 0, 0, 1) 35%, rgba(255, 112, 15, 1));
  background: linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7);
  background-clip: text;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;  
}

.discord-wrapper {
  // background: linear-gradient(to left, rgba(255, 22, 3, 1), rgba(255, 122, 10, 1) 55%);
  background: linear-gradient(to right, #7289da, #3d58bc);
  background-clip: text;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;  
}

.github-wrapper {
  // background: linear-gradient(to right, rgb(255, 106, 0) 50%, rgba(247, 198, 10, 1));
  background: linear-gradient(to bottom, rgb(110, 84, 148) 50%, rgba(64, 120, 192, 1));
  background-clip: text;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;  
}


@media (max-width: 520px) {
	#Contacts, .form {
		display: grid;
		width: 90vw;
		align-items: center;
		justify-self: start; 
		align-self: center;
		justify-content: center;	
	}

  .form-input{
    min-width: 100%;
  }
}


.cardCOLORS {
// FB - #3b5998
  background: linear-gradient(to right, rgb(40, 81, 163),rgb(8, 102, 255));
//  Insta
  background: linear-gradient(115deg, rgb(249, 206, 52), rgb(238, 42, 123), rgb(98, 40, 215));
// Linkedin
  background:linear-gradient(45deg, rgb(21, 101, 192), rgb(0, 119, 181));
// Discord
  background: linear-gradient(to right, rgb(114, 137, 218), rgb(61, 88, 188));
// Github
  background: linear-gradient(to bottom, rgb(110, 84, 148) 50%, rgba(64, 120, 192, 1));
// YouTube
  background: #ff0000;
// SoundCloud
  background: #ff8800;
}

</style>