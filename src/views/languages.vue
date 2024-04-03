
<template>
  <div class="Languages">

    <div class="language-info">
      <h1>{{ languages[0].heading }}</h1>
      <!-- <img src="/assets/ColoredLanguageGridBoxTransparent.png" alt="Language Grid Box Image" id="languagePic" 
      style="width: 500px; height: auto;">  -->
      <div class="language-description">
        <p>{{ languages[0].languages[0].description }}</p>
      </div>
    <!-- </div> -->

    <div class="languages2" id="Languages2">
      <div class="dev-icons">
        <ul>

          <li class="icon html5">
            <i class="devicon-html5-plain"></i>
            <p>HTML5</p>
          </li>

          <li class="icon css3">
            <i class="devicon-css3-plain"></i>
            <p>CSS3</p>
          </li>

          <li class="icon javascript">
            <i class="devicon-javascript-plain"></i>
            <p>JavaScript</p>
          </li>
          
          <li class="icon typescript">
            <i class="devicon-typescript-plain"></i>
            <p>TypeScript</p>
          </li>

          <li class="icon svelte">
            <i class="devicon-svelte-plain"></i>
            <p>Svelte</p>
          </li>

          <li class="icon python">
            <i class="devicon-python-plain"></i>
            <p>Python</p>
          </li>

          <li class="icon csharp">
            <i class="devicon-csharp-plain"></i>
            <p>C</p>
          </li>

          <li class="icon cplusplus">
            <i class="devicon-cplusplus-plain"></i>
            <p>C++</p>
          </li>

          <li class="icon java">
            <i class="devicon-java-plain"></i>
            <p>Java</p>
          </li>
          
          <li class="icon react">
            <i class="devicon-react-original"></i>
            <p>React</p>
          </li>

          <li class="icon jquery">
            <i class="devicon-jquery-plain"></i>
            <p>JQuery</p>
          </li>

        </ul>
      </div>
    </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      /* array of objects - skills */
      languages: [
        {
          heading: "Languages",
          languages: [
            {
              description: "Proficient in 9 programming languages and various frameworks: "
              /* Python | Swift | SQL | Flutter | C++ | HTML | JavaScript | CSS | C++ | Java | C#", */
              // imageSrc: "skill1.jpg",
            },
          ],
        },
      ]
    };
  },
};
</script>
  <style lang="scss" scoped>

h1 {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    // text-align: center;
    // width: 100px;
    // margin-left: 275px;
    // margin-right: 275px;
    // margin-bottom: 1rem;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}

.Languages {
    display: grid;
    // grid-template-columns: repeat(1, 1fr);
    // grid-template-rows: repeat(auto);
    grid-gap: 1rem;
    padding: 2rem;
    text-align: center; 
    // width: 870px;
    width: 750px;
    aspect-ratio: 4 / 3;
    // width: 59vw;
    // border-radius: 1rem;
    background: var(--componentBG);
    box-shadow: var(--componentShadow);
    filter: var(--componentFilter);
    border-radius: var(--componentRadius);
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);

    @supports (backdrop-filter: blur(1rem)) or (-webkit-backdrop-filter: blur(1rem)) {
      backdrop-filter: blur(42px); 
      -webkit-backdrop-filter: blur(42px); 
  }
}

    // background: rgba(255,255,255, 0.2);
    // border: rgb(56,56,56, .3) 0.25px solid;
    // // box-shadow: var();
    // box-shadow: var(--phoneShadow);

.language-description{
  margin-bottom: .75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

}

.language-description p {

  // font-size: 24px;
  // // text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05); 
  // text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px;

  font-family: "Satoshi";
  font-variation-settings: "wght" 560, 'opsz' 28;
  // letter-spacing: -.21px;
  // line-height: 1.55;
  font-size-adjust: 0.5;

  font-size: 21px;
	color: #343434;
	text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px;
	-webkit-font-smoothing: subpixel-antialiased;
	font-variation-settings: "wght" 600, 'opsz' 14;
	// font-feature-settings: "salt";
	// font-feature-settings: "cv06", "cv13";
	// font-size-adjust: 0.525;
	letter-spacing: -0.55px;
	text-align: center;
	padding: 1rem;

}

.language-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  border-radius: var(--componentRadius);
  // border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}

.languages2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	height: 100%;
  padding: 20px;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
  // width: 100%;
}

.dev-icons {
  width: 100%; 
	height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
	
}

.dev-icons ul {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
  grid-gap: 10px;
  width: 75%;
	// width: 80%; 
	height: 100%;
	list-style-type: none;
  flex-wrap: wrap;
  // padding: 15px;
  // padding: 20px 20px 20px 20px;
  // margin: 10px auto 25px auto;

}

.dev-icons li {
  flex-basis: calc(33% - 40px);
	// text-shadow: 1px 0 3px rgba(100, 116, 139, 0.25), -1px 0 3px rgba(100, 116, 139, 0.25);
  // text-shadow: rgba(255, 255, 255, 0.2) 0px 1px 1px;
  text-shadow: 0px 1px 1px  rgba(44, 62, 80, 0.45);
  text-shadow:rgba(255, 255, 255, 0.2) -1px 1px;
}

.dev-icons li:nth-child(2),
.dev-icons li:nth-child(5),
.dev-icons li:nth-child(8)  {
  padding-top: 3rem;
  // padding-bottom: 2rem;
}

.dev-icons li:nth-child(1),
.dev-icons li:nth-child(3),
.dev-icons li:nth-child(4),
.dev-icons li:nth-child(6),
.dev-icons li:nth-child(7),
.dev-icons li:nth-child(9)   {
  // padding-top: 1rem;
  padding-bottom: 1rem;
}

// .dev-icons li:nth-child(10),
// .dev-icons li:nth-child(11) {
  // padding-top: 1rem;
  // padding-bottom: 2rem;

// }

.icon {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	padding-left: 0;
	list-style: none;
	font-size: 3.5rem;
	margin-bottom: 0;
	margin-top: 0;
	text-align: center;

	&:hover {
		opacity: 1;

	}
}


.icon p {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	color: #868e96;
}

// .icon:hover p {
// 	color: #645beb;
// }

i, p {
  transition: all 0.2s ease-in-out;
}




.csharp i {
	color: #868e96;
  // transition: 600ms var(--ease-2);
  
}

.csharp i:hover {
	// color: #03599c;
  // color: rgb(161, 121, 220);
  color: rgb(121, 80, 190);
}

.cplusplus i {
	color: #868e96;
}

.cplusplus i:hover {

  color: hsl(214, 60%, 41%)}

.html5 i {
	color: #868e96;
}

.html5 i:hover {
	color: rgb(228, 77, 38);
  background: linear-gradient(90deg, rgb(227, 76, 38) 23%, rgb(241, 101, 41) 80%);
  background: linear-gradient(90deg, rgba(227,76,38,1) 51%, rgba(240,101,41,1) 52%, rgba(240,101,41,1) 73%);

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}

.css3 i {
	color: #868e96;
}

.css3 i:hover {
	// color: rgb(61, 143, 198);
  // color: rgb(59, 178, 225);
  // background: linear-gradient(90deg, rgb(21, 121, 184) 23%, rgb(59, 178, 225) 80%);
  background: linear-gradient(90deg, rgba(21,121,184,1) 50%, rgba(59,178,225,1) 51%, rgba(59,178,225,1) 73%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 

}

.javascript i {
	color: #868e96;
}

.javascript i:hover {
	color: rgb(240, 219, 79);
}

.python i {
	color: #868e96;
}

.python i:hover {
  background: linear-gradient(151deg, rgba(60,120,171,1) 45%, rgba(255,222,87,1) 44%, rgba(255,222,87,1) 80%);
  background-clip: text; /* Clip the background to the text */
  -webkit-background-clip: text; /* For Safari */
  -webkit-text-fill-color: transparent; /* Make the text transparent to show the background gradient */
}
//   /* Apply separate linear gradients for each color stop */
//   background: linear-gradient(to top left, rgb(60, 118, 171) 30%, rgb(60, 118, 171) 30%) left,
//               linear-gradient(to bottom right, rgb(255, 222, 87) 70%, rgb(255, 222, 87) 70%) right;
//   background-size: 100% 100%; /* Set the size of each gradient */
//   background-repeat: no-repeat; /* Prevent the gradients from repeating */
//   background-position: 0 0, 100% 0; /* Position each gradient */
  
//   background-clip: text; /* Clip the background to the text */
//   -webkit-background-clip: text; /* For Safari */
//   -webkit-text-fill-color: transparent; /* Make the text transparent to show the background gradient */
// }

.java i {
	color: #868e96;
}

.java i:hover {
	color: rgb(21, 101, 192);
  // background: linear-gradient(to top, rgb(21, 101, 192) 20%, rgb(244, 67, 54));
  background: linear-gradient(0deg, rgba(21,101,192,1) 46%, rgba(244,67,54,1) 46%, rgba(244,67,54,1) 46%);

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}

.react i {
	color: #868e96;
}

.react i:hover {
	// color: #000;
  color: rgb(83, 193, 222);
}

.svelte i {
	color: #868e96;
}

.svelte i:hover {
	// color: #000;
  color: rgb(255, 62, 0);
}

.typescript i {
	color: #868e96;
}

.typescript i:hover {
	// color: #000;
  // color: rgb(0, 122, 204);
  // color: #3178c6;
  background: linear-gradient(to right, #3178c6, #3178c6);
  background-clip:text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}

.jquery i {
	color: #868e96;
}

.jquery i:hover {
	// color: #000;
  color: rgb(64, 130, 174);
  background: linear-gradient(40deg, rgba(21,101,192,1) 22%, rgba(21,101,192,1) 24%, rgba(64,130,174,1) 35%, rgba(21,101,192,1) 49%, rgba(64,130,174,1) 56%, rgba(21,101,192,1) 74%, rgba(64,130,174,1) 75%, rgba(38,113,185,1) 83%, rgba(21,101,192,1) 92%);
  background-clip:text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  // color: rgb(70, 165, 214);
}

img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;

  border-radius: 1rem;
  @supports (backdrop-filter: blur(1rem)) or (-webkit-backdrop-filter: blur(1rem)) {
    backdrop-filter: blur(32px); 
    -webkit-backdrop-filter: blur(32px); 
  }
  // border: 1px solid rgba(255, 255, 255, 0.5);
  // border-top: 1px solid rgba(255, 255, 255, 0.45);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  // border-left: 1px solid rgba(255, 255, 255, 0.075);
  // border-right: 1px solid rgba(255, 255, 255, 0.075);

  box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.4);

}


@media (max-width: 520px) {
	.languages {
		display: grid;
		width: 90vw;
	
	}

	.icons{
		display: flex;
		margin-top: 0px;
		width: inherit;
	}
	.material-icons{
		display: flex;
		flex-direction: row;
		margin: 10px 0 10px 0;

	}
	.icon{
		width: 20%;
		font-size: 2rem;
	}

}

@media (max-width: 520px) {
	.Languages {
		display: grid;
		align-items: center;
		justify-self: start; 
		align-self: center;
		justify-content: center;
		width: 90vw;

	}
}

</style>