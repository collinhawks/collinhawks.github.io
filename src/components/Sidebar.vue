<!-- Sidebar.vue -->
<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">

		<div class="frosted">
			<a class="logo" @click="scrollToSection('top')"><p>CH</p> </a>
		</div>

		<div class="switch">
			<label title="Toggle Background" for="toggle" class="ToggleLabel" id="toggleLabel">
				<div class="toggle">
					<input class="toggle-state" type="checkbox" id="toggle" name="toggle" value="check" @click="$emit('toggleBG')" />

					<div id="toggleIndicator" class="indicator"></div>
				</div>
				<!-- <div class="label-text">Toggle BG</div> -->
				<div class="label-text">Background</div>
			</label>
		</div>

		<div class="expandIcon">
			<label class="toggle-icon-wrap" id="expandLabel" for="expand">
				<div class="toggle2">
					<input class="toggle-icon" name="expand" id="expand" type="checkbox" value="check" @click="ToggleMenu">
						<span title="Expand Nav" id="expandIcon" class="material-icons">keyboard_double_arrow_right</span>
					</input>
				</div>
			</label>
		</div>

		<h6>Menu</h6>
		<div class="menu">

			<ul class="header">
				<li>
					<a @click="scrollToSection('Projects')" class="button" title="Projects">
						<span class="material-icons">terminal</span>
						<span class="text">Projects</span>
					</a>
				</li>
				<li>
					<a @click="scrollToSection('About')" class="button" title="About">
						<span class="material-icons">description</span>
						<span class="text">About</span>
					</a>
				</li>
				<li>
					<a @click="scrollToSection('Skills')" class="button" title="Skills">
						<span class="material-icons">verified</span>
						<span class="text">Skills</span>
					</a>
				</li>
				<li>
					<a @click="scrollToSection('Languages')" class="button" title="Languages">
						<span class="material-icons">language</span>
						<span class="text">Languages</span>
					</a>
				</li>
				<li>
					<a @click="scrollToSection('Contact')" class="button" title="Contact">
						<span class="material-icons">email</span>
						<span class="text">Contact</span>
					</a>
				</li> 
			</ul>
		</div> 
		
	</aside>
</template>

<script>

import { ref } from 'vue'

export default {
	setup() {
		const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

		return {
			is_expanded,
		}
	},

	methods: {
		// toggleBG() {
		// 	// Emit a custom event to notify the parent component
		// 	// this.$emit('toggled-bg');
		// },
		ToggleMenu() {
			this.is_expanded = !this.is_expanded
			localStorage.setItem('is_expanded', this.is_expanded)
		},

		scrollToSection(sectionId) {
			const sectionElement = document.getElementById(sectionId);
			if (sectionElement) {
				const startingY = window.scrollY;
				const duration = 400; // Adjust the duration as needed
				const offset = 75; // Adjust the offset as needed
				const targetY = sectionElement.getBoundingClientRect().top + window.scrollY - offset;
				const distance = targetY - startingY;

				let start = null;
				const step = (timestamp) => {
					if (!start) start = timestamp;
					const progress = timestamp - start;
					// const easedProgress = this.easeInOutQuint(Math.min(progress / duration, 1));
					const easedProgress = this.easeOut(Math.min(progress / duration, 1));
					// const easedProgress = this.linear(Math.min(progress / duration, 1));
					// const easedProgress = this.easeInOutCubic(Math.min(progress / duration, 1));
					

					window.scrollTo(0, startingY + distance * easedProgress);

					if (progress < duration) {
						window.requestAnimationFrame(step);
					}
				};

				window.requestAnimationFrame(step);
			}
		},
		easeInOutQuint(t) {
			if ((t /= 0.5) < 1) return 0.5 * t * t * t * t * t;
			return 0.5 * ((t -= 2) * t * t * t * t + 2);
		},
		easeOut(t) {
			return (--t) * t * t + 1;
		},
		easeInOutCubic(t) {
			if ((t /= 0.5) < 1) return 0.5 * t * t * t;
			return 0.5 * ((t -= 2) * t * t + 2);
		},

		linear(t) {
			return t;
		},
	}

}

</script>

<style lang="scss" scoped>

.expandIcon {
	display: flex;
	justify-content: end;
	align-items: center;
	// height: 40px;
	width: 40px;
	transition: 300ms ease;
	transition: 300ms var(--transition);
	// width: 40px;
	// height: 40px; 
	// margin-bottom: 1.5rem;
	// right: 10px;

}

.ToggleLabel {
	display: flex;
	font-variation-settings: "wght" 435, 'opsz' 24;
	flex-direction: column;
	gap: 6px;
	// top: 100px;
	// left: 10px;
	// top: 335px;
	z-index: 1;
	// position: fixed;
	align-items: center;
	cursor: pointer;
	// color: #394a56;
	// padding-bottom: 12px;
	// padding-top: 24px;
	
}

.toggle {
	z-index: 1;
	isolation: isolate;
	position: relative;
	// height: 25px;
	// width: 50px;
	height: 1.5rem;
	width: 3rem;
	border-radius: 15px;
	overflow: hidden;
	box-shadow:
		-8px -4px 8px 0px #ffffff,
		8px 4px 12px 0px #d1d9e6,
		4px 4px 4px 0px #d1d9e6 inset,
		-4px -4px 4px 0px #ffffff inset;
}

.toggle-state {
	display: none;
}

.indicator {
	z-index: 2;
	height: 100%;
	width: 200%;
	background: #ecf0f3;
	border-radius: 15px;
	transform: translate3d(-75%, 0, 0);
	// transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
	transition: 300ms ease;
	transition: 300ms var(--transition);

	box-shadow:
		-8px -4px 8px 0px #ffffff,
		8px 4px 12px 0px #d1d9e6;
}

.toggle-state:checked~.indicator {
	transform: translate3d(25%, 0, 0);
}



.header {
	display: flex;
	flex-direction: column;
	min-height: 50vh;
	justify-content: space-evenly;;
// justify-content: space-between;
// margin-left: -.5rem;
// margin-top: 0.5rem; 
	// background: rgba(255, 255, 255, 0.4);
	// width: 95%;
}

p {
	// mix-blend-mode: difference;
	font-size: 18px; 
	text-shadow: 0px 1px 2px  rgba(151, 151, 151, 0.35);
	text-shadow: 0px 1px 2px  rgba(44, 62, 80, 0.35);
	color: #fff;
	// color: #363636;
}
.logo {
	display: grid;
    justify-content: center; 
	align-content: center;
	z-index: 10;
	text-decoration: none;
	width: 40px;
	height: 40px; 
	border-radius: 50%;
	transition: 200ms ease;
	transition: 200ms var(--transition);

	border: 1.25px solid rgb(241, 245, 249);
	box-shadow: 0px 0px 5px rgba(127, 127, 127, 0.15);
	// WAS USING
	// filter: drop-shadow(0px 2px 3px  rgba(151, 151, 151, 0.4)); 
	// filter: drop-shadow(0px 2px 13px  hsl(244, 100%, 70%));
	filter: drop-shadow(0px 2px 3px rgba(151, 151, 151, 0.45)); 
	background: rgba(255, 255, 255, 0.25);
	// box-shadow: 0 0.5px 0.5rem 1.5px rgba(151, 151, 151, 0.2);
	// box-shadow:
	// 	0px -1px 6px 0px #ffffff;
		// 0px 1px 8px 0px #d1d9e6;

	// box-shadow:
	// -2px -2px 8px 0px rgba(255, 255, 255, 0.5), 
	// 8px 4px 12px 0px #d1d9e6, 
	// 4px 4px 4px 0px #d1d9e6 inset, 
	// -4px -4px 4px 0px #ffffff inset;

	@supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px)) {
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
    }

	&:hover{
		transform: translateZ(0);
		// box-shadow: 0px 5px 8px rgba(100, 116, 139, 0.25);  
		// Using Above // OG
		// box-shadow: 0 0.5px 0.5rem 1.5px rgba(151, 151, 151, 0.2);
		// White from submit button in Contacts
		// box-shadow: 0px 5px 8px rgb(255, 255, 255, .25); 
		// Combined
		// box-shadow: 0 0.5px 0.5rem 1.5px rgb(255, 255, 255, .25);
		// box-shadow: 0px 5px 8px rgb(255, 255, 255, .25);  
		
		// Like BEST
		box-shadow: 0 0.5px 0.5rem 1.5px rgb(255, 255, 255, .25);
		// box-shadow: 0 0.5px 0.5rem 1.5px hsl(244, 100%, 90%);
		// box-shadow: 0 0.5px 0.5rem 1.5px rgba(207, 204, 255, 0.55);

		// Purple from Projects
		// text-shadow: hsl(244, 100%, 90%) 0px 0px 1.5px;
		text-shadow: hsl(244, 100%, 90%) 0px 0px 2px;
		// Smidge Much
		// text-shadow: hsl(244, 100%, 90%) 0px 0px 3px;
		
		// White form submit
		// text-shadow: 0px 1px 2px  rgb(255, 255, 255, .15);

		// Using Above // OG
		// rgba(151, 151, 151, 0.4)
		// White from submit
		// rgb(255, 255, 255, .25)
		// White from Projects
		// #fff

		// Great but Smidge Much
		// filter: drop-shadow(0px 0px 1px  hsl(244, 100%, 90%));
		// Might be BEST try 0.75 too
		// filter: drop-shadow(0px 0px 0.5px  hsl(244, 100%, 90%));
		// filter: drop-shadow(0px 0px 0.5px  rgba(207, 204, 255, 0.8));
		// Little light
		filter: drop-shadow(0px 0px 0.25px  hsl(244, 100%, 90%));
		// filter: drop-shadow(0px 0px 0.25px #fff); 
		filter: drop-shadow(0px 2px 3px   rgba(151, 151, 151, .28)); 
		box-shadow: 0 0px 0.5rem 1.5px rgba(151, 151, 151, 0.2);
	}
}

.frosted {
	// mix-blend-mode: color-burn;
	display: grid;
    justify-content: center; 
    align-items: center;	
	width: 42%;
	height: 60px; 
	border-radius: 50%;
	margin-bottom: 1.5rem;
	transition: 200ms ease;


	z-index: 9;
	
}

aside {
	display: grid;
	gap: 5px;
	z-index: 1;
	// justify-content: center;
	align-content: center;
	color: var(--light);
	// width: 4rem; // 64px
	// width: 4.5rem;
	// width: 68px;
	width: 4.5rem;
	min-height: 100vh;
	padding: 1rem;
	transform: translateZ(0);
	position: fixed;
	background: rgba(255, 255, 255, 0.4);
	// box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
	// box-shadow: 0 0px 26px 2px rgba(0,0,0,.1);
	box-shadow: 0 0 1rem 2px rgba(0,0,0,0.1);
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-right: 1px solid rgba(255, 255, 255, 0.25);
	transition: 250ms var(--transition);
	
	
	// backdrop-filter: saturate(200%) blur(30px);
	// backdrop-filter: blur(5px);
	// -webkit-backdrop-filter: blur(5px);
	// backdrop-filter: blur(3rem) saturate(120%);
	// -webkit-backdrop-filter: blur(2rem) saturate(120%);
	// -webkit-backdrop-filter: blur(10px) saturate(120%);

	@supports (backdrop-filter: blur(4px)) or (-webkit-backdrop-filter: blur(4px)) {
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
	}

	-webkit-user-select: none;
	user-select: none;
	cursor: default;

	.toggle-icon-wrap {
		display: flex;
		position: relative;
		transition: 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
		filter: drop-shadow(0px 1px 1px  rgba(151, 151, 151, 0.4)); 
		// height: 40px;
		width: 25px;
		// margin-left: 8px;
		cursor: pointer;
		// justify-content: flex-end;
		// align-items: center;

		// Horizontal toggle icon
		.toggle-icon {
			display: none;
			// filter: drop-shadow(-2px -1px 0px rgba(151, 151, 151, 0.5)); 
			// filter: drop-shadow(-2px -1px 0px rgba(54, 54, 54, .38));
			// text-shadow: rgba(54, 54, 54, 0.3) -1.5px -1px 0px;
			// align-items: center;
			// transition: 200ms ease-in-out;
			// transition: 250ms ease-in-out;
		}
		// Color of horizontal expand icon
		.material-icons {
			// filter: drop-shadow(-2px -1px 0px rgba(151, 151, 151, 0.5)); 
			// filter: drop-shadow(-2px -1px 0px rgba(54, 54, 54, .38));
			font-size: 2rem;
			color: var(--light);
			transition: 200ms ease-in-out;
			text-shadow: rgba(54, 54, 54, 0.3) -1.5px -1px 0px;
			align-items: center;
			transition: 200ms ease-in-out;
		}

		// Color change when hovering over horizontal expand icon
		&:hover {
			.material-icons {
				transform: translateX(0.15rem);
				// color: rgba(0,113,227,.2);
				color: #b9beff;
				color: hsl(244, 100%, 92%);
			}
		}
	}


	.switch {
		display: flex;
		width: inherit;
		transition: 250ms ease;
		justify-content: center;
		align-items: center;
		height: 4rem;
		width: 45%;
		// width: 60px;
		// height: 50px;
		// width: 50px;
		// width: 40px;
		// height: 40px; 
		// margin-bottom: 1.5rem;
		// right: 10px;
	}

	.label-text {
		opacity: 0;
		transition: 250ms ease;
		z-index: 1;
	}

	.text {
		opacity: 0;
		transition: 250ms ease;
		z-index: 1;
	}

// "MENU"
	h6 {
		font-family: "Satoshi";
		font-feature-settings: "salt";
		font-variation-settings: "wght" 625, 'opsz' 28;
		opacity: 0;
		transition: opacity 250ms ease-in-out;    
		z-index: 1;
		// color: #363636;
		// color: hsl(210, 29%, 40%);
		color: hsl(210, 29%, 40%);
		font-size: 0.875rem;
		text-transform: uppercase;
		// text-shadow: hsl(244, 100%, 90%) 0px 0px 1.5px;
		text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 1px;
		font-weight: 550;
		cursor: default;

	}

	// List of icons & Non-Expanded Non-Hover
	.header {
		// margin: 0rem -0.25rem;
		// width: 53px;
		width: 100%;
		// transition: 500ms ease;
		transition: 250ms ease-in-out;
		// transition: opacity 0.3s ease-in-out;   

		// Color of icons
		.material-icons {
			font-size: 2rem;
			color: var(--light);
			// color: #363636;
			// color: rgb(54, 54, 54);
			// filter: drop-shadow(0px 1px 2px rgba(127, 127, 127, .2)); 
			text-shadow: rgba(127, 127, 127, 0.75) 0px 0px 2.5px;
			transition: 200ms ease;
			// transition: 0.25s ease-in-out;
			
		}
		.text {
			color: var(--light);
			// transition: 250ms ease;
			transition: opacity 200ms ease; 
			font-size: 4px;
			// padding: 0.5rem 0rem;
		}

		a, ul, li {
			z-index: 1;
			list-style: none;
			text-decoration: none;
			font-weight: 500;
			font-size: 14px;
			color: black;
			border-radius: 10px;
			// transition: 250ms ease-in-out;
			// transition: opacity 0.3s ease-in-out;   
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem; 
			transition: 200ms ease;
			height: 3rem;
			width: 91%;
			padding: 0rem 0.1rem;
			cursor: pointer;

		}
//.material-icons, .text &.router-link-exact-active  // color: var(--primary);
	}

	ul li a .material-icons:hover, ul li a .material-icons.active {
		// filter: drop-shadow(0px 1px 2px   rgba(151, 151, 151, .9)); 
		// filter: drop-shadow(0px 0px 0px  rgba(255, 255, 255, 0.3)); 
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
		border-radius: 12px;
		padding: .5rem;
		// transform: translateX(0.15rem);
		transition: 200ms ease;
		text-decoration: none;
		list-style: none;
		color: hsl(244, 100%, 92%);
		// filter: drop-shadow(0px 1px 2px rgba(127, 127, 127, .68));
		// filter: drop-shadow(0px 1px 2px rgba(127, 127, 127, .2));
		// text-shadow: red 0px 0px 15px;
		
		.material-icons {
			color: hsl(244, 100%, 92%);
			// color: #b9beff;
		}			
	}
	&.is-expanded {
		width: 150px;
		// width: 320px;
		transition: 200ms ease-in-out;

		.header {
			// width: 160px;
			width: 100%;
		}

		.switch {
			// width: 120px;
			// width: 90%;
			width: 95%;
			height: 4rem; 
			// font-size: 26px; 
		}

		.expandIcon {
			display: flex;
			justify-content: end;
			align-items: center;
			height: 40px;
			width: 90%;

			.toggle-icon-wrap {
				// padding-left: 85px;

				.material-icons {
					transform: rotate(-180deg);
					// margin-bottom: 10px;
					// display: flex;
					// justify-content: flex-end;
				}
			}
		}

		.logo {
			width: 55px;
			height: 55px; 
			font-size: 26px; 

		}
		.frosted {
			width: 120px;
			// height: 40px;

		}
		h6 {
			opacity: 1;
			filter: drop-shadow(0px 1px 1px   rgba(151, 151, 151, 0.4)); 
		}
		.text {

			opacity: 1;
			z-index: 10;
			font-size: 14px;
			// padding-left: 0.5rem;
			// filter: drop-shadow(0px 1px 2px rgba(151, 151, 151, .6)); 
			// text-shadow: 0px 1px 2px  rgba(100, 116, 139, 0.55);
			text-shadow: 0px 1px 2px  rgba(44, 62, 80, 0.45);
			// text-shadow: rgba(127, 127, 127, 0.5) 0px 1px 1px;
		}

		.label-text {
			opacity: 1;
			z-index: 10;
			font-size: 14px;
			text-shadow: 0px 1px 2px  rgba(44, 62, 80, 0.45);
		}

		ul li a:hover, ul li a.active {
			// filter: drop-shadow(0px 1px 2px   rgba(151, 151, 151, .9)); 
			// filter: drop-shadow(0px 0px 0px  rgba(255, 255, 255, 0.3)); 
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
			transform: translateX(0.15rem);
			height: 3rem;
			width: 7.5rem;

			.material-icons {
				// filter: drop-shadow(0px 1px 1px  rgba(44, 62, 80, 0.4)); 
				color: hsl(244, 100%, 90%);
				box-shadow: none;
				border-radius: none;
				padding: 0px;
			}
			.text {
				// filter: drop-shadow(0px 1px 1px  rgba(44, 62, 80, 0.1)); 
				// text-shadow: 0px 1px 2px  rgba(100, 116, 139, 0.55);
				text-shadow: 0px 1px 2px  rgba(44, 62, 80, 0.45);
				// filter: drop-shadow(0px 1px 2px rgba(151, 151, 151, .6)); 
				color: hsl(244, 100%, 94%);
				// color: hsl(244, 100%, 94%);
				// color: rgba(0,113,227,.2);
			}
		}

		.switch {
			display: flex;
			justify-content: center;
			align-items: center;
			// height: 60px;
			// width: 60px;
			// height: 50px;
			// width: 50px;
			// width: 100%;
			// width: 40px;
			// height: 40px; 
			// margin-bottom: 1.5rem;
			// right: 10px;
		}

	}

}

@media (max-width: 768px) {
	aside {
		display: flex; 
		flex-direction: row;
		align-items: center;
		// align-items: stretch;
		justify-content: space-between; 
		width: 100%;
		height: 6vh;
		min-height: 0;
		position: fixed;
		top: 0;
		padding: 0 0 0 1rem;
		background: linear-gradient(60deg, #e8eab1, #DDE5FA, #DDCBF8);
		box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); 
		z-index: 1000;
	}

	.logo {
		display: flex;
		justify-content: center; 
		align-items: center;	
		width: 32px;
		height: 32px; 
		font-size: 18px; 
		border-radius: 50%;
		transition: 250ms ease-in-out;
		border: 1.25px solid rgba(rgb(241, 245, 249), 1);
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15); 
		filter: drop-shadow(0px 2px 3px  rgba(151, 151, 151, 0.4)); 
		text-shadow: 0px 1px 2px  rgba(151, 151, 151, 0.35);

	}

	.frosted {
		display: flex;
		align-items: center;
		transition: 250ms ease-in-out;
		background: rgba(255, 255, 255, 0.05);	

	}

	.menu {
		display: flex;
		flex-grow: 1;
		justify-content: space-evenly; 
		margin: 0;
	}
	.button {
		padding: 0;
	}
	.toggle-icon-wrap, .toggle-icon, .text, #expandIcon {
		display: none;
	}
	aside .toggle-icon-wrap .toggle-icon .material-icons {
		display: none;
	}

}


.hero-container {
	height: calc(100vh - var(--chakra-sizes-header-height));
	padding: 0 8px; 
	display: flex;
	align-items: center;
	animation: gradientAnimation 1.75s infinite alternate-reverse;
}
</style>