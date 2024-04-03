<!-- App.vue -->
<template>
<div id="top"></div>
	<!-- Sidebar Navigation -->
	<div>

		<SidebarNavigation @toggle-BG="handleToggleBG" />

		<div class="bgW" id="BGW" v-show="currentBG === 'BackgroundW'">
			<BackgroundW />
		</div>

		<div class="bgG" id="BGG" v-show="currentBG === 'BackgroundG'">
			<BackgroundG />
		</div>

	</div>

	<!-- Bubble Background -->
	<div id="Bubbles1">
		<Bubbles />
	</div>

	<!-- Floating Action Buttons -->
	<div class="fabs" role="group" aria-label="Floating action buttons">

		<button id="Econtact" data-icon="email" class="fab top" title="Contact" aria-label="Contact" @click="scrollToSection('Contact')">
			<div class="wrapper">
        <div class="lid one"></div>
				<div class="lid two"></div>
				<div class="envelope"></div>
				<div class="letter"></div>
			</div>
		</button>

		<div class="bottom-buttons">
			<button data-icon="Bottom" class="fab mini" title="Next Section" aria-label="Next Section">
				<svg id="svg" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
					<path fill="currentColor" stroke="none" d="M12 5V19"></path>
					<polyline points="4 8 12 17 20 8"></polyline>
				</svg>
			</button>

			<button data-icon="Top" class="fab mini" title="Top Section" aria-label="Top Section" id="myDIV" @click="scrollToSection('top')">
				<svg id="svg" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
					<path fill="currentColor" stroke="none" d="M12 19V5"></path>
					<polyline points="4 16 12 6 20 16"></polyline>
				</svg>
			</button>
		</div>

	</div>

	<!-- <div class="BGstars">
		<BGstars />
	</div> -->

	<div id="BGsnow">
		<BGsnow />
	</div>

	<!-- <main > -->
	<!-- <main class="main" ref="container" data-scroll-container> -->
	<main class="main" ref="container">

		<!-- Content -->
		<div class="container" id="content">
			<!-- Scroll to top by script.js - ScrollSpy  -->
			<!-- <div id="top" class="page-scroll"></div> -->

			<div id="Home">
				<Home />
			</div>

			<div id="ProjectsNewCombined">
				<ProjectsNewCombined />
			</div>

			<!-- <div class="Bubbles" id="Bubbles2">
				<Bubbles />
			</div> -->

			<div class="sectionAnimation" id="Skills">
				<Skills />
			</div>

			<div class="sectionAnimation" id="About">
				<About />
			</div>

			<div class="sectionAnimation" id="Languages">
				<Languages />
			</div>

			<div class="sectionAnimation" id="Contact">
				<Contact />
			</div>

			<!-- <div class="sectionAnimation" id="Personal" >
				<PersonalProjects />
			</div> -->

		</div>
	</main>
</template>

<script>
import backgroundw2 from './views/backgroundw2.vue';
import BackgroundW from './views/backgroundW.vue';
import BackgroundG from './views/backgroundG.vue';
import SidebarNavigation from './components/Sidebar.vue';

// import LocomotiveScroll from "locomotive-scroll";
// import BGstars from './views/BGstars.vue';
import BGsnow from './views/BGsnow.vue';
import Bubbles from './views/bubbles.vue'
import Icons from './views/icons.vue'

import Home from './views/home.vue';
import Skills from './views/skills.vue'; 
import Contact from './views/contact.vue'; 
import Languages from './views/languages.vue'; 
import About from './views/about.vue';
import ProjectsNewCombined from './views/projectsNewCombined.vue';
import FooterNew from './views/footerNew.vue';
import PersonalProjects from './views/personalProjects.vue';

import { gsap } from "https://cdn.skypack.dev/gsap@3.6.0";

export default {

	components: {
		BackgroundW,
		backgroundw2,
		BackgroundG,
		SidebarNavigation,
		// BGstars,
		BGsnow,
		Bubbles,
		Icons,
		Home,
		ProjectsNewCombined,
		Skills,
		Contact,
		Languages,
		About,
		PersonalProjects,
		FooterNew,
	},

    data() {
        return {
            currentBG: 'BackgroundG',
        };
    },

	methods: {
		handleToggleBG() {
			this.currentBG = this.currentBG === 'BackgroundG' ? 'BackgroundW' : 'BackgroundG';
			this.animateParagraphs();
			this.animateButtons();
			this.animateGenieEffect();
		},

		// handleAnchorClick() {
		// 	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		// 		anchor.addEventListener("click", function (e) {
		// 			e.preventDefault();

		// 			document.querySelector(this.getAttribute("href")).scrollIntoView({
		// 				behavior: "smooth",
		// 				block: "center",
		// 			});
		// 		});
		// 	});
		// },

		scrollToSection(sectionId) {
			const sectionElement = document.getElementById(sectionId);
			if (sectionElement) {
				sectionElement.scrollIntoView({ behavior: 'smooth' });
			}
		},

		callScrollAnimation2(){
			scrollAnimation2(); 
		},

        animateParagraphs() {
            gsap.fromTo(
			// "p", 
			// Target p, h2, h3, h4, h5 elements
				["p", "h2", "h3", "h4", "h5"], 
                {
                    opacity: 0,
                    y: 12
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "back.out(1.7)",
                    delay: 0.185
                }
            );
        },

		animateButtons() {
            gsap.fromTo(
                "button",
                {
                    opacity: 0,
                    y: 12
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.125,
                    delay: 0.175,
                    ease: "back.out(1.7)"
                }
            );
        },

		animateGenieEffect() {
			gsap.fromTo(
				[".h7",],
				{
					scale: 0,
					opacity: 0,
					y: "100%"
				},
				{
					scale: 1,
					opacity: 1,
					y: 0,
					ease: "power4.out",
					duration: 0.75
				}
			);
		},

	},

	mounted() {
		console.log('background:', this.currentBG );
		this.animateParagraphs();
		this.animateButtons();
		this.animateGenieEffect();
		this.callScrollAnimation2();
		// this.handleAnchorClick();
	},
};

</script>


<style lang="scss">

// .backgroundw {
// 	// position: fixed;
// 	width: 100%;
// 	height: 100%;

// }
div {
	-webkit-user-select: none;
    user-select: none;
}
.container {
	display: grid;
	place-items: center;
	// gap: 2.5rem;
	// gap: 7.5rem;
	position: relative;
	-webkit-user-select: none;
    user-select: none;
	// margin: auto;
}

// :not(:nth-child(2)):not(#Bubbles):not(#Bubbles2):not(#Bubbles3) .container {
// :not(:nth-child(1)):not(:nth-child(4)):not(#Bubbles):not(#Bubbles2):not(#Bubbles3):not(.Bubbles) .container {
// .container:not(:nth-child(1)):not(#Bubbles):not(#Bubbles2):not(#Bubbles3):not(.Bubbles) {
.container:not(.Bubbles) {
	// display: grid;
	// place-items: center;
	// gap: 2.5rem;
	gap: 8rem;
	position: relative;
	// margin: auto;
// :not(:nth-child(2)) .container:not(#Bubbles2) {
    // display: grid;
    // place-items: center;
//  gap: 7.5rem;
    // position: relative;
    // margin: auto;
}

// .container {
// 	display: grid;
// 	place-items: center;
// 	// gap: 2.5rem;
// 	gap: 7.5rem;
// 	position: relative;
// 	margin: auto;
// }

@font-face {
	font-family: "Satoshi";
	font-weight: 100 900;
	font-display: swap;
	src: url("/assets/FONTS/Satoshi_Complete/Fonts/Variable/Satoshi-Variable.ttf")
}

@font-face {
	font-family: "Poppins";
	font-weight: 100 900;
	src: url("/assets/FONTS/Poppins_Complete/Fonts/Variable/Poppins-Variable.ttf")
}

@font-face {
	font-family: InterVariable;
	font-style: normal;
	font-weight: 100 900;
	font-display: swap;
	src: url("/assets/FONTS/InterVariable.woff2") format("woff2");
}

.sectionAnimation {
	transition: opacity 1s, transform 1s;
}

body {
	min-height: 100vh;
	// display: grid;
	// place-items: center;
	// padding: 1rem;
	// font-family: "InterVariable", sans-serif; 
	// font-optical-sizing: 14; 
	// font-feature-settings: "ss01", "cv05", "cv11", "ss11", "ss19";
	// font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	overflow-y: visible;
	background: radial-gradient(circle,  rgba(238, 174, 202, 0.9) 8%, #bfb3ff 70%, rgba(148, 187, 233, 1) 100%);
	background: radial-gradient(circle,  #c3e4ff 8%, #fad4f3 70%, #b9beff 100%);

    // --gradient-color-1: #fad4f3; 
    // --gradient-color-2: #c3e4ff;  
    // --gradient-color-3: #b9beff;
    // --gradient-color-4: #cfe8e5;
}

html {
	scroll-behavior: smooth;
// Dark Mode
	// background-image: url('/assets/gradient.jpeg');
	// backdrop-filter: blur(3rem) saturate(120%);
	// -webkit-backdrop-filter: blur(4rem) saturate(120%);
}

/* Meyerweb Reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}

:root {

	// @supports (font-variation-settings: normal) {
	// 	:root { 
	// 		font-family: "InterVariable", sans-serif; font-optical-sizing: auto; 
	// 	}
	// }

// Using!
	--swiper-pagination-color: rgba(255, 255, 255, 0.8) !important;
	--swiper-pagination-bullet-inactive-color: rgba(255, 255, 255, 1) !important;
	--swiper-pagination-bullet-inactive-opacity: 0.3 !important;
// --swiper-pagination-bullet-inactive-color: rgb(255, 255, 255, 1);
// --swiper-pagination-bullet-inactive-opacity: 0.2;

// StripeGradient
	--main-purple: #a0abfa;
	--main-light-green: #cfe8e5;
	--main-light-blue: #a1ebfa;
	
	--gradient-color-1: #fad4f3; 
    --gradient-color-2: #c3e4ff;  
    --gradient-color-3: #b9beff;
    --gradient-color-4: #cfe8e5;


--phoneShadow: 0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3),inset 0 -2px 6px 0 rgba(10,37,64,0.35);

--cardShadowXSmall:0 2px 5px -1px rgba(50,50,93,0.25),0 1px 3px -1px rgba(0,0,0,0.3);
--cardShadowSmall:0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3);

--filterShadowMedium:0px 3px 11.5px -3.5px rgba(50,50,93,0.25),0px 3.8px 7.5px -3.7px rgba(0,0,0,0.1);
--StripeBoxShadow: 0 2px 4px -1px rgba(50,50,93,.25),0 1px 3px -1px rgba(0,0,0,.3);
--boxShadowStripe: inset 0 1px 1px 0 hsla(0,0%,100%,.1),0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);

--whitePhoneShadow: 0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3),inset 0 -2px 6px 0 rgba(255,255,255,0.35);

// 						up/down/left + right / blur radius
--whiteSmallPhoneShadow: 0 10px 80px -25px rgba(50,50,93,0.15),0 30px 60px -30px rgba(0,0,0,0.25),inset 0 -2px 6px 0 rgba(255,255,255,0.35);

--whiteLargeInsetShadow: 0 10px 80px -25px rgba(50,50,93,0.15), 0 30px 60px -30px rgba(0,0,0,0.25),inset 0 0 12px 0 rgba(255,255,255,0.35);

--whiteLargePhoneShadow: 0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3),inset 0 -2px 10px 0 rgba(255,255,255,0.35);


--niceBoxShadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
--niceWhiteBoxShadow: 0 8px 16px 0 rgba(255, 255, 255, 0.4);

	--iconColor: rgba(201, 215, 230, 0.8);

// Apple Design Website
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;

	// --blue-primary: rgb(217, 233, 255);
	--blue-primary: #d9e9ff;
	--light-blue-secondary: #eaf3ff;
	--blue-secondary: #f6fbff;
	--teal-secondary: #faffff;
	--purple-secondary: #fcf8ff;
	--green-secondary: #f5fff6;
	--highlight-green: #e4fee6;

	--nav-dark-outlines: #424245;
	--dark-nav-background: #2d2d2d;

	--deprecated-hover: rgba(191,72,0,.05);
	--nav-hover: rgba(0,113,227,.2);

	--componentShadow1: 0 10px 80px -25px rgba(50,50,93,0.15), 
	0 30px 60px -30px rgba(0,0,0,0.25), 
	0 1px 3px -1px rgba(0,0,0,.1), 
	0 2px 4px -1px rgba(50,50,93,.25), 
	inset 0 -2px 6px 0 rgba(255,255,255,0.35);

	--appleShadow2:
			0px 8px 18px -10px rgba(0,0,0,0.3), 
			0 0 25px -15px rgba(0,0,0,.2),
			inset -0.2rem -0.05rem 0.3rem rgba(255, 255, 255, 0.85),
			inset -0.1rem -0.05rem 0.4rem rgba(255, 255, 255, 0.75);

// Projects Animation Container
	--shadow-1: 0 -2px 5px 0 hsla(220, 3%, 15%, 2%), 
	0 1px 1px -2px hsla(220, 3%, 15%, 3%), 
	0 3px 30px -6px hsla(220, 3%, 15%, 3%), 
	0 5px 5px -2px hsla(220, 3%, 15%, 4%), 
	0 9px 9px -2px hsla(220, 3%, 15%, 5%), 
	0 16px 16px -2px hsla(220, 3%, 15%, 6%),
	inset -3px -1px 5px rgba(255, 255, 255, 0.85), 
	inset -1px -1px 6px rgba(255, 255, 255, 0.8);

	--shadow-2: 0 -2px 5px 0 hsla(220, 3%, 15%, 2%), 
	0 1px 1px -2px hsla(220, 3%, 15%, 3%), 
	0 3px 30px -6px hsla(220, 3%, 15%, 3%), 
	0 5px 5px -2px hsla(220, 3%, 15%, 4%), 
	0 9px 9px -2px hsla(220, 3%, 15%, 5%), 
	0 16px 16px -2px hsla(220, 3%, 15%, 6%),
	inset -0.2rem -0.05rem 0.3rem rgba(255, 255, 255, 0.85), 
	0 1px 3px -1px rgba(0,0,0,.15),
	0 2px 4px -1px rgba(50,50,93,.15),
	0 10px 80px -25px rgba(50,50,93,0.15),
	0 30px 60px -30px rgba(0,0,0,0.25),
	inset -0.1rem -0.05rem 0.4rem rgba(255, 255, 255, 0.8);

// Live Demo + Tag Container
	--shadow-4: 
    0 -2px 5px 0 hsla(220, 3%, 15%, 2%), 
    0 1px 1px -2px hsla(220, 3%, 15%, 3%), 
    0 3px 30px -6px hsla(220, 3%, 15%, 3%), 
    0 5px 5px -2px hsla(220, 3%, 15%, 4%), 
    0 9px 9px -2px hsla(220, 3%, 15%, 5%), 
    0 16px 16px -2px hsla(220, 3%, 15%, 6%), 
    inset 0 -2px 6px 0 rgba(255,255,255,0.3);

	--cardShadow: 0px 18px 36px -18px rgba(0,0,0,0.1),0px 30px 45px -30px rgba(50,50,93,0.25);
	--cardShadowMedium:0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3);

	--projectsShadow: 0 10px 80px -25px rgba(50,50,93,0.15), 0 30px 60px -30px rgba(0,0,0,0.25);

	--animation1: animation: gradient 6s ease infinite;

	--projectsInsetShadow: 0 -2px 5px 0 hsla(220, 3%, 15%, 2%), 
	0 1px 1px -2px hsla(220, 3%, 15%, 3%), 
	0 3px 30px -6px hsla(220, 3%, 15%, 3%), 
	0 5px 5px -2px hsla(220, 3%, 15%, 4%), 
	0 9px 9px -2px hsla(220, 3%, 15%, 5%), 
	0 16px 16px -2px hsla(220, 3%, 15%, 6%),
	inset 0 0 6px 0 rgba(255,255,255,0.8);

	--componentShadow0: 0 -2px 5px 0 hsla(220, 3%, 15%, 2%), 
	2px 8px 16px -2px hsla(220, 3%, 15%, 2%), 
	0 1px 3px -1px rgba(50,50,93,.1),
	0 2px 4px -1px rgba(50,50,93,.15),
	0 15px 40px -20px rgba(0,0,0,0.2),
	0 15px 35px -30px rgba(0,0,0,0.15), 
	inset 0 0 4px 0 rgba(255,255,255,0.8);

	--componentShadow2: 0 -2px 5px 0 hsla(240, 3%, 15%, 2%), 
		2px 8px 16px -2px hsla(220, 3%, 15%, 2%), 
		0 1px 3px -1px rgba(50,50,93,.1),
		0 2px 4px -1px rgba(50,50,93,.15),
		0 15px 40px -20px rgba(0,0,0,0.2),
		0 15px 35px -30px rgba(0,0,0,0.15);

	--componentFilter: contrast(110%) saturate(101%);
	--componentBG: rgba(255,255,255, 0.1);
	--componentRadius: 22px;
	// --componentRadius: 1rem;

	--shad: 0 3px 5px rgb(0,0,0,0.08);
	--componentShadow: 0 3px 5px rgb(0,0,0,0.08), inset 0 0 4px 0 rgba(255,255,255,0.8),
	0 1px 3px -1px rgba(50,50,93,.125);

	--transition: cubic-bezier(0.33,1,0.68,1);
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	// font-family: 'Satoshi';

	// -webkit-font-smoothing: antialiased;
	// -moz-osx-font-smoothing: grayscale;
	@supports (font-smooth: auto) or (-webkit-font-smoothing: antialiased) or (-moz-osx-font-smoothing: grayscale) {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	// font-smooth: always;
	// scroll-behavior: smooth;
	// scroll-behavior: auto;
}

h1 {
	-webkit-user-select: none;
	user-select: none;
	cursor: default;
	font-size: 48px;
	color: #363636;
	text-shadow: rgba(255, 255, 255, 0.6) 0px 1px 1px;
	-webkit-font-smoothing: subpixel-antialiased;
	font-variation-settings: "wght" 700, 'opsz' 14;
	font-feature-settings: "salt";
	// font-feature-settings: "cv06", "cv13";
	font-size-adjust: 0.525;
	letter-spacing: -0.55px;
	padding: 1rem;
	// border-bottom: 1px solid rgba(255, 255, 255, 0.6);

}

h2 {
    // mix-blend-mode: difference;
	font-size: 36px;
	color: #343434;
	-webkit-font-smoothing: subpixel-antialiased;
	font-variation-settings: "wght" 700, 'opsz' 14;
	font-feature-settings: "salt";
	// font-feature-settings: "cv06", "cv13";
	font-size-adjust: 0.525;
	letter-spacing: -0.55px;
	text-align: center;
	padding: 1rem;
	text-shadow: rgba(255, 255, 255, 0.6) 0px 1px 1px;
	
}

h3 {
// - <h3> 36px    = 22.24px // 58.24px
// - <p>    20px  = 32px   // 35.5px   // 12.36px
// - <p>    18px  = 47px   // 29.12px
// - <tag> 16px   = 25.88px// 41.11px

	// line-height: calc(1ex / 0.38);
	font-size: 36px;
	text-align: center;
	width: 100%;
	color: #343434;
	color: #363636;
	text-shadow: rgba(255, 255, 255, 0.8) 0px 1px 1px;
	-webkit-font-smoothing: subpixel-antialiased;
	font-variation-settings: "wght" 700, 'opsz' 14;
	// font-size-adjust: 0.54;
	letter-spacing: -0.55px;
}

@supports (font-size-adjust: 1) {
	h3 {
		font-size-adjust: 0.54;
	}
}

// White/Pink	Pink Punch	Pastel Pink	 Flower Pink	Medium Purple	Bright Pink  Neon Pink
// #CFC9DF		#D56BA0		#D3AACB		 #D593BA		#B227B8			#CB3DA5		 #FF6B9E					

// LIKE
// Pastel Pink - #D3AACB  /  Flower Pink - #D593BA  /  Pink Violet - hsl(298.36, 64%, 66%) / 
// Light Pink - rgba(238, 174, 202, 0.9)  /  LightPurple - #bfb3ff  /  
// TealBlue - hsl(197.82, 78%, 75%)  /  Light Sky Blue rgba(148, 187, 233, 1) 

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;

}

.app {
	// display: flex; 
	/* Ensure Background2 stretches behind everything */
	position: relative; 
	width: 100%;
	height: 100%;

	main {
		// flex: 1 1 0;
		// padding: 1rem;

		@media (max-width: 1024px) {
			// margin-left: 6rem;
			// overflow-x: hidden;
			
		}
	}
}

.lid {
	position: absolute;
	// border-top: 15px solid transparent;
	border-right: 15px solid transparent;
	border-bottom: 10px solid transparent;
	border-left: 15px solid transparent;
	transform-origin: top;
	transition: transform 200ms linear;
	
}

.lid.one {
	// border-top: 10px solid var(--blue-primary);
	border-top: 10px solid hsl(244, 100%, 92%);
	// color: #b9beff;
	// color: hsl(244, 100%, 92%);
	// border-top: 10px solid var(--light-blue-secondary);
	transform: rotateX(0deg);
	z-index: 3;
	//transition-delay: 0.5s;
	transition-delay: 350ms;
}

// inside-top
.lid.two {
	border-top: 10px solid white;
	transform: rotateX(90deg);
	z-index: 1;
	transition-delay: 200ms;
}

.envelope {
	border-top: 10px solid #e8e8ed;
	// border-top: 10px solid var(--blue-primary);
	// border-top: 10px solid var(--light-blue-secondary);
	// border-bottom: 10px solid var(--blue-primary);
	border-bottom: 10px solid hsl(244, 100%, 92%);
	border-right: 15px solid white;
	border-left: 15px solid white;
	color: white;
	z-index: 3;

}

button:hover .lid.one {
    transform: rotateX(90deg);
    transition-delay: 0s;
}

button:hover .lid.two {
    transform: rotateX(180deg);
    transition-delay: 200ms;
}

.fab[data-icon=email]{
	--_size: 2.25rem;
	padding: calc(var(--_size) / 3);
}

.fab[data-icon=email]:hover > svg {
	z-index: -1;
}

.fab[data-icon=Top], .fab[data-icon=Bottom]{
	--_size: 1.25rem;
	padding: calc(var(--_size) / 2);
}

#svg{
	transition: transform 250ms ease;
	width: 1.25rem;
	height: 1.25rem;
	// color: #e2e2e2;
	// color: var(--gray-quaternary);

}

.fab {
	--_bg: rgba(255, 255, 255, 0.2);
	// --_light-fg: white;
	// --_dark-fg: black;
	--_fg: white;
	// --_fg: rgb(54, 54, 54, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	// border-radius: 1e5px;
	aspect-ratio: 1;
	text-decoration: none;
	
	// WAS USING
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	// border: 1px solid rgba(54, 54, 54, 0.25);
	// border-top: 1px solid rgba(54, 54, 54, .38);
	// border-left: 1px solid rgba(54, 54, 54, .38);
	// filter: drop-shadow(-2px -1px 0px   ));

	background: var(--_bg);
	transition: 250ms ease;
	color: var(--_fg);
	@supports (backdrop-filter: blur(1rem)) or (-webkit-backdrop-filter: blur(1rem)) {
		-webkit-backdrop-filter: blur(1rem);
		backdrop-filter: blur(1rem);
	}
	// box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.05);
	box-shadow: var(--shadow-4);

	overflow: visible;
	filter: contrast(110%);
}

.fab .top {
	transition: 250ms cubic-bezier(0.33,1,0.68,1);
}

.fab.mini {
	--_size: 1.25rem;
}


.fab.mini:hover > #svg {
	animation: inflate 250ms ease forwards;
}

.fab:is(:active, :hover, :focus-visible) {
	--_bg: rgba(255, 255, 255, 0.35);
}

.bottom-buttons {
	display: flex;
	gap: 0.5rem;

}

.fabs {
	--_viewport-margin: 2.5vmin;
	position: fixed;
	// z-index: ;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: center; 
	place-items: center;
	gap: 1vmin;
	inset-block: auto 2.5vmin;
	inset-inline: auto 2.5vmin;
	z-index: 1;
}


:where(img,svg,video,canvas,audio,iframe,embed,object) {
	display: block;
}

.fab > svg {
	inline-size: var(--_size);
	block-size: var(--_size);
	stroke-width:3px;

	will-change: transform;
	transition:transform .5s var(--ease-squish-3)
}

#svg {
	stroke: currentColor;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
}

// :where(svg):where(:not([fill])) {
//     stroke: currentColor;
//     fill: none;
//     stroke-linecap: round;
//     stroke-linejoin: round;
// }


</style>