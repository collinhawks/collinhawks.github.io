<template>
<!-- <div class="footer1"> -->
	<div class="body3">

		<div>
			<ul class="sci">

				<li class="card18"><a id="clayIcon16" title="GitHub" href="https://github.com/slothkami">
					<div class="github-wrapper">
						<i class="pi pi-github" id="iconMask"></i>
					</div>
				</a></li>

				<li class="card18"><a id="clayIcon16" href="https://www.linkedin.com/in/collinhawks" title="LinkedIn" >
					<div class="linkedin-wrapper">
					<i class="pi pi-linkedin" id="iconMask"></i>
					</div>
				</a></li>

				<li class="card18"><a id="clayIcon16" href="https://discordapp.com/users/608009405799071776" title="Discord">
					<div class="discord-wrapper">
						<i class="pi pi-discord" id="iconMask"></i>
					</div>
				</a></li>

				<!-- <li class="card18"><a id="clayIcon16" href="#">
					<div class="insta-wrapper">
						<i class="pi pi-instagram" id="iconMask"></i>
					</div>
				</a></li> -->

				<!-- <li class="card18"><a id="clayIcon16" href="#">
					<div class="fb-wrapper">
						<i class="pi pi-facebook" id="iconMask"></i>
					</div>
				</a></li> -->

			</ul>
		</div>
	</div>
<!-- </div> -->
	
</template>


<style lang="scss" scoped>

	.body3 {
		height: 200px;
		width: 600px;
	}

	.clayIcon16, #clayIcon16 {
		// color: rgb(190, 220, 250, 0.5);
		color: transparent;
		// background: linear-gradient(to right, #2851A3,#0866FF);
		filter: saturate(120%);
		font-size: 3rem;
		// height: 3rem;
		// width: 3rem;
		transition: all 0.4s ease-in-out;
		background-clip: text;
	}

		// box-shadow:
		// inset 12px 12px 24px 0px rgba(122, 122, 122,  0.6),
		// inset -12px -12px 44px 0px hsla(122, 122, 122,  0.6),
		// 5px 5px 16px 0px hsl(254, 10%, 50%);

		// box-shadow: 
		// inset 0 -8px 16px rgba(220, 220, 220,  0.6), 
		// inset 0px 14px 68px hsla(0, 0%, 90%, 0.9),
		// 5px 5px 16px 0px hsl(254, 10%, 50%);

		
	// light blue
		// box-shadow:
		// inset 12px 12px 24px 0px rgba(239, 243, 255, 1),
		// inset -16px -16px 16px 0px hsl(223, 100%, 87%),
		// 5px 5px 16px 0px rgba(131, 154, 215, 1);

	// Neon white
		// box-shadow:
		// inset 12px 12px 24px 0px rgba(239, 243, 255, 1),
		// inset -16px -16px 16px 0px hsla(120, 20%, 100%, 1),
		// 5px 5px 16px 0px hsl(255, 10%, 50%);

		// box-shadow: 
		// 5px 5px 16px 0px hsl(255, 10%, 50%), 
		// inset 0 -8px 16px hsla(255, 22%, 50%, 0.7), 
		// inset 0px 14px 68px hsla(120, 20%, 100%, 1);

	.card18 {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		margin-top: 15px;
		width: 77px;
		height: 77px;
		border-radius: 15px;
		filter: saturate(120%);
		// background-color: rgb(255, 255, 255, 0.25);
		// background: hsla(0, 0%, 100%, 0.2);
		// background: hsla(0, 0%, 100%, 0.45);
		background: hsla(0, 0%, 100%, 0.4);
		@supports (backdrop-filter: blur(150px)) or (-webkit-backdrop-filter: blur(150px)) {
            -webkit-backdrop-filter: blur(150px) saturate(100%);
            backdrop-filter: blur(150px) saturate(100%);
        }
		// -webkit-backdrop-filter: blur(150px) saturate(100%);
        // backdrop-filter: blur(150px) saturate(120%);

		border: 1px solid rgba(255, 255, 255, 0.01);
		// border: 1px solid rgba(121, 121, 121, 0.4);
		transform: rotateY(0deg) scale(1);
		transition: 0.5s;
		opacity: 0.9;
		filter: contrast(110%);
	}

	.card18::before { 
		content: '';
        position: absolute;
		top: 0;
        left: 0;
		width: 100%;
        height: 100%;
		border-radius: 15px;
        z-index: -1;
		// background: hsla(0, 0%, 100%, 0.2);
		// border: 1px solid rgba(255, 255, 255, 0.01);

		box-shadow: inset -0.2rem -0.05rem 0.3rem rgba(255, 255, 255, 0.25), inset -0.1rem -0.05rem 0.4rem rgba(255, 255, 255, 0.25);
	}

	ul li:before, ul li:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		// border-radius: 20%;
		border-radius: 50%;
		filter: blur(20px);
		opacity: 0;
		transition: 1s;
		z-index: -1;

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


// // FB
// ul.sci .card18:nth-child(1) {
// 	box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(220, 62%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
// }
// // Insta
// ul.sci .card18:nth-child(2) {
// 	box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(308, 62%, 45%, 0.38), inset 0px 14px 28px rgb(240, 244, 250);
// }

// ul.sci .card18:nth-child(2) {
// 	box-shadow: 0px 20px 60px -13px hsl(255, 10%, 50%), inset 0 -8px 16px hsla(260, 68%, 45%, 0.5), inset 0px 14px 28px rgb(240, 244, 250);
// }


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

.CARD {
// FB
	background: linear-gradient(to right, rgb(40, 81, 163),rgb(8, 102, 255));
//  Insta
	background: linear-gradient(115deg, rgb(249, 206, 52), rgb(238, 42, 123), rgb(98, 40, 215));
// Linkedin
	background:linear-gradient(45deg, rgb(21, 101, 192), rgb(0, 119, 181));
// Discord
	background: linear-gradient(to right, rgb(114, 137, 218), rgb(61, 88, 188));
// Github
	background: linear-gradient(to bottom, rgb(110, 84, 148) 50%, rgba(64, 120, 192, 1));
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
		justify-content: space-evenly;
		gap: 16px;
	}

	#iconMask {
		color: rgba(255,255,255,0.05);
		text-shadow: 1px 1px 1px rgba(255,255,255,0.3);
	}
	
	.discord-wrapper, .insta-wrapper, .fb-wrapper, .linkedin-wrapper, .github-wrapper {
		display: flex;
		// font-size: 3rem;
		text-shadow: 1px 1px 1px rgba(255,255,255,0.3);
		filter: saturate(200%);
		// filter: drop-shadow(rgba(255, 255, 255, .75) 0px 0px 1px) saturate(200%);
		filter: drop-shadow(rgba(127, 127, 127, .65) 0px 0px 1.5px) saturate(200%);
		// padding: 5px;

	}
	
	// facebook: #3b5998;
	// youtube: #ff0000;
	// soundcloud: #ff8800;
	
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






	.footer2 {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2.5rem;
	list-style-type: none;
	width: 100%;

}

.footer1 {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 59vw; 
	height: 100px;
	position: relative;
	border-radius: 1rem;
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	border-bottom: 1px solid rgba(255, 255, 255, 0.18);
	border-left: 1px solid rgba(255, 255, 255, 0.1);
	border-right: 1px solid rgba(255, 255, 255, 0.1);
	margin-bottom: 20px;
	margin-top: 20px;

}

.footer1::before {
	transform: translateZ(0);
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%; 
	z-index: -1;
	border-radius: 1rem;
	background: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8);
	// background: var(--bgGradient);
		// background: var(--bgGradient);
	// background: var(--clearBackground);
	// background: #E3F2FD;
	// background: rgba(255, 255, 255, 0.05);
	// background: rgba( 255, 255, 255, 1);

	background: linear-gradient(318.32deg, #aa8fd8 50%, #c3d1e4 100%, #c777b9 55%, #ba83ca, );

	// background: linear-gradient(318.32deg, #aa8fd8 0%, #c777b9 55%, #c3d1e4 100%);

	opacity: 0.15;
	// opacity: 0.1;
	background-size: 100% 200%;
	animation: gradient 6s ease infinite alternate-reverse;
	filter: blur(1rem);
}



	</style>