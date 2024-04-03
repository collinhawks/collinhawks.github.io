<!-- Home.vue -->
<template>
<div id="Home">

	<div class="Headings">

		<h1>Collin Hawks <br> <span>Software Developer</span></h1>

		<!-- <h3 class="welcomeHeading"> Welcome to my porfolio! </h3> -->

		<h4 id="miniText"> Inspiration from Apple MacOS, iOS, and iPadOS 
			<!-- <span>Glassmorphism with a hint of Neumorphism</span> -->
			<!-- <span>A representation of my programming ventures thus far </span> -->
		<!-- <span id="miniHeading"> (Built using Vue.js, django, and JavaScript) </span> -->
		</h4>

		<!-- <i class="pi pi-times" style="font-size: 1.5rem; color: #2c3e50; 	-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: rgba(217, 233, 255, 1); stroke-linecap: round; stroke-linejoin: round;"></i> -->

	</div>

	<div id="example">
		<button @click="callGreet">Greet</button>
	</div>

</div>
</template>

<script>
export default {
	methods: {
		callGreet(){
			// Call the greet function from the imported module
			greet(); 
		}
	},

	mounted() {
		// greet();
	}
};

</script>

<style scoped lang="scss">

h1 {
	font-size: 54px;
	// text-align: center;
	// font-weight: 600;
	// text-transform: uppercase;
	letter-spacing: .75px;
	padding: 0.5rem;
	border: none;
}
h1 span {
	font-size: 0.8em;
	font-weight: 500;
	color: hsl(0, 0%, 21%);
	border: none;
	// letter-spacing: 0px;
}

.Headings {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center; 
	gap: 1.5rem;
	// height: 350px;
	// height: 200px;
	padding-bottom: 2rem;
	
}

#miniText{
	margin-bottom: 0.5rem;
}

h5 {
	// mix-blend-mode: difference;
	font-size: 0.9em;
	font-weight: 500;
	-webkit-text-stroke-width: 0.1px;
	-webkit-text-stroke-color: rgba(217, 233, 255, 0.4);
	stroke-linecap: round;
    stroke-linejoin: round;
	text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px;
	// color: rgba(0,0,0,0.5);
	// color: var(--dark-nav-background);
	// color: rgba(45, 45, 45, 0.6);
	// color: #2c3e50;
}

h4 {
	display: grid;
	padding-top: 1rem;
	padding-bottom: 0.75rem;
	// mix-blend-mode: difference;
	font-weight: 500;
	font-size: 1em;
	-webkit-text-stroke-width: 0.1px;
	-webkit-text-stroke-color: rgba(217, 233, 255, 0.4);
	stroke-linecap: round;
    stroke-linejoin: round;
	text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px;
	// text-shadow: 0px 0px .5px rgba(0, 0, 0, 0.2);
	// -webkit-text-stroke-color: rgba( 0, 0, 0, 0.2);
	// -webkit-text-stroke-color: rgba(44, 62, 80, 0.2);
}

h4 span {
	padding-top: 0.75rem;
	// font-size: 0.9em;
	font-weight: 500;
// 	color: hsl(0, 0%, 21%);
// 	border: none;
// 	// letter-spacing: 0px;
}

#example, button{
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: -0.3px;
}
button {
	font-size: 16px;
	font-weight: 500;
	font-size-adjust: 0.54;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	// color: rgb(152, 90, 246);
	// color: hsl(244, 100%, 72%);
	cursor: pointer;
	transition: 0.3s ease-in-out; 
	letter-spacing: -0.3px;

	filter: contrast(110%);
	filter: contrast(110%) saturate(120%);
	// opacity: 0.9;
	background: hsla(0, 0%, 100%, 0.4);
	border: 1px solid rgba(255, 255, 255, 0.65);

	@supports (backdrop-filter: blur(150px)) or (-webkit-backdrop-filter: blur(150px)) {
		-webkit-backdrop-filter: blur(150px) saturate(100%);
		backdrop-filter: blur(150px) saturate(100%);
	}

	// box-shadow: var(--shadow-4);
	// Discord
	box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(264, 68%, 45%, 0.2), inset 0px 14px 28px rgb(240, 244, 250);

}

button:hover {
	// transform: translateZ(0);
	// transition: background-color 250ms ease-in-out;
	transform: scale(1.05);
	// animation: moveShadow2 4s linear infinite; 
	box-shadow: 0px 5px 8px rgba(100, 116, 139, 0.25);  
	// box-shadow: 0px 0px 4px rgba(100, 116, 139, 0.75); 

}



// .welcomeHeading {
// 	position: relative;
// 	// text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.2);
// 	font-size: 40px;
// 	// color: hsl(244, 100%, 90%);
// 	// color: #BDB8FF;
// 	-webkit-text-stroke-width: 0.5px;
// 	-webkit-text-stroke-color: rgba(44, 62, 80, 0.4);
// 	stroke-linecap: round;
//     stroke-linejoin: round;
// }

// .welcomeHeading::before {
// content: 'Welcome to my porfolio!';
//   position: absolute;
//   align-self: center;
//   top: 0;
//   left: 0;
//   width: 31%;
//   height: 100%;
//   z-index: -1;
//   margin-left: 34.5%;
// //   border-radius: 1rem;
//   // filter: blur(30px);
//   // -webkit-filter: blur(30px); 
//   // -webkit-backdrop-filter: blur(1rem);
//   // backdrop-filter: blur(1rem);
//   // background: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
// //   background: rgba( 255, 255, 255, 0.1 );
// //   color: rgba( 255, 255, 255, 0.1 );
//   color: rgba( 0, 0, 0, 0.1 );
// //   color: green;
// //   font-size: 39.9px;
// 	// text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.2);
// 	// font-size: 40px;
// 	// color: hsl(244, 100%, 90%);
// 	// // color: #BDB8FF;
// 	// background: red;

// }

#miniHeading{
	font-size: 0.8em;
	margin-bottom: 0.5rem;
}


@media (max-width: 1024px) {
	#Home-page {
		display: grid;
		align-items: center;
		justify-self: start; 
		align-self: center;
		justify-content: center;
	}
}
@media (max-width: 520px) {
	#Home-page, #Contact, #Skills {
		display: grid;
		width: 100%;

		align-items: center;
		justify-self: start; 
		align-self: center;
		justify-content: center;	
	}

	#Econtact {
        display: none; 
	}

}

</style>