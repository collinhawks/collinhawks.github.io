<template>
    <div>
        <div id="Personal" class="top-container">

        <h2 class="personalSection"> Bonus: <br> Personal Projects! </h2>
        
        <div v-for="(group, index) in allPersonal" :key="index">
    
            <h2> {{ group.heading }} </h2>
    
            <div class="grid-layout">
              <div v-for="(personal, personalIndex) in group.personals" :key="personalIndex" class="animation-container" :id="'personal-' + index + '-' + personalIndex">
                <div class="personal-details">
    
                    <div class="tag-container">
                      <div v-for="(tag, tagIndex) in personal.tags" :key="tagIndex" class="tag">{{ tag }}</div>
                    </div>
    
                    <div class="personal-title">
                      <h3>{{ personal.title }}</h3>
                    </div>
    
                    <div class="personal-description">
                      <p>{{ personal.description }}</p>
                    </div>
    
                    <a :href="personal.link" id="live-app-button">
                        <img src="/assets/open.svg" alt="Icon" id="icon"> Live App
                    </a>
    
                  </div>
                  
                  <div class="image-gallery">
                  <swiper
                    :pagination="swiperOptions.pagination"
                    :navigation="swiperOptions.navigation"
                    :modules="modules"
                    :options="swiperOptions"

                    class="img-container"
                  >
                    
                    <swiper-slide v-for="(imgSrc, index) in personal.imgSrcs" :key="index" class="swiper-slide">
                      <img :src="imgSrc" :alt="'Image ' + (index + 1)" loading="lazy" fetchpriority="low">
                      <div class="swiper-lazy-preloader"></div>
                    </swiper-slide>
      
                    <!-- Swiper navigation buttons -->
                    <div class="swiper-button-prev">
                      <svg fill="rgba(255, 255, 255, 0.5)" height="1em" viewBox="0 0 256 512">
                        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z">
                        </path>
                      </svg>
                    </div>
                    <div class="swiper-button-next">
                      <svg fill="rgba(255, 255, 255, 0.5)" height="1em" viewBox="0 0 256 512">
                        <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z">
                        </path>
                      </svg>
                    </div>
      
                    <!-- Swiper pagination -->
                    <div class="swiper-pagination"></div>
                  </swiper>
                </div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
      </template>
      
      <script>
        // Import Swiper Vue.js components
        import { Swiper, SwiperSlide } from 'swiper/vue';
      
        // Import Swiper styles
        import 'swiper/css';
        import 'swiper/css/pagination';
        import 'swiper/css/navigation';
        // Import Swiper's optional modules
        import 'swiper/css/effect-fade'; 
      
        // import required modules
        import { Pagination, Navigation, EffectFade } from 'swiper/modules';
      
      export default {
        components: {
            Swiper,
            SwiperSlide,
          },
        setup() {
          return {
            modules: [Pagination, Navigation, EffectFade],
            swiperOptions: {
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            },
            
    
            
            allPersonal: [
              {
                heading: "3D Printing",
                personals: [
                  {
                    title: "Rename Files",
                    description: "In the programming world, there are many times where you need to rename a bunch of files in a folder. This program allows you to do that with ease. It takes in a folder path and a file extension, and then renames all the files in that folder with a number in front of it, or a choice of a custom separator.",
                    imgSrcs: [
                      "/assets/Python/RenameFiles/RenameFiles1.webp",
                    //   "/assets/Python/RenameFiles/RenameFiles2.webp",
                    //   "/assets/Python/RenameFiles/RenameFiles3.webp",
                    ],
                    tags: ["Python", "Tkinter"],
                    link: "RenamePlaceholder.text",
                  },
                  {
                    title: "Finance Calculator",
                    description: "During the creation of TiPPiT, I needed a quick, easy, simple way to compare payment gateway fees at different volume, percentages, and add-on costs. This allowed me to do that, utilizing a Tkinter GUI to allow me to input and visualize the costs per transaction.",
                    imgSrcs: [
                    //   "/assets/Python/FinanceCalc/FinanceCalc1.webp",
                      "/assets/Python/FinanceCalc/FinanceCalc2.webp",
                    //   "/assets/Python/FinanceCalc/FinanceCalc3.webp",
                    ],
                    tags: ["Python", "Tkinter"],
                    link: "FinanceCalcPlaceholder.text",
                  },
                ],
              },
              {
                heading: "Swift",
                personals: [
                  {
                    title: "Pixel Art",
                    description: "3D printed my mom a pixel art of her dog. I made this app to visualize the pixel art. It provides a color picker and a grid to allow filling in the grid pieces. It also outputs the number of pixels needed for each color.",
                    imgSrcs: [
                    //   "/assets/Swift/PixelArt/PixelArt1.webp",
                      "/assets/Swift/PixelArt/PixelArt2.webp",
                      "/assets/Swift/PixelArt/PixelArt3.webp",
                    ],
                    tags: ["Swift", "UIKit", "SwiftUI", "Objective-C"],
                    link: "PixelArtPlaceholder.text",
                  },
                  {
                    title: "Unit Conversion",
                    description: "While measuring for PC parts and 3D prints, sometimes I need to convert between units. This app allows you to convert between 5 different units: Inches, Centimeters, Millimeters, Feet, and Meters.",
                    imgSrcs: [
                      "/assets/Swift/UnitConvert/UnitConvert1.webp",
                      "/assets/Swift/UnitConvert/UnitConvert2.webp",
                      "/assets/Swift/UnitConvert/UnitConvert3.webp",
                    ],
                    tags: ["Swift", "UIKit", "SwiftUI", "Objective-C"],
                    link: "UnitConversionPlaceholder.text",
                  },
                ],
              },
            ],
          };
        },
    
        methods: {
    
          callScrollAnimation1(){
            scrollAnimation(); 
          },
        
        },
    
        mounted() {
          this.callScrollAnimation1();
        }
      };
    
    </script>
      
      
      <style scoped lang="scss">
    
    // #section {
    //   animation: fadeAndSlideUp 1s ease forwards;
    //   opacity: 0;
      
    // }
    
    .grid-layout {
      display: grid;
      gap: 2.5rem;
      justify-items: center;
    }
    
    .animation-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 1rem;
      // filter: blur(30px);
      // -webkit-filter: blur(30px); 
      // -webkit-backdrop-filter: blur(1rem);
      // backdrop-filter: blur(1rem);
      // background: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
      background: rgba( 255, 255, 255, 0.1 );
    
    }
    
    .animation-container {
      position: relative; 
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      grid-gap: 0.5rem;
      justify-content: center;
      align-items: center;
      height: 450px;
      width: 820px; 
      border-radius: 1rem;
    
      border: 1px solid rgba(255, 255, 255, 0.5);
      // -webkit-backdrop-filter: blur(1rem);
      // backdrop-filter: blur(1rem);
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.05);
      padding: 1rem;
    
      transition: opacity 0.5s, transform 0.5s;
    
    }
    
    
    .image-gallery {
      height: 450px;
      border-radius: 0.5rem;
    }
    .personal-details {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      // justify-content: space-between;
      // justify-content: space-evenly;
      // justify-content: center;
      // width: 45%;
      // gap: 1rem; gap: 2rem; gap: 0.5rem;
      // height: 100%;
      align-items: center;
      padding: 0 1rem 0 1rem;
      max-width: 45%;
      height: 440px;
      
    }
    
    .personal-title {
      text-align: center;
      font-weight: 500;
      font-size: 1.75em;
      font-weight: bold;
      // display: flex;
    
      text-shadow: hsl(244, 100%, 90%) 0px 0px 1.5px;
      filter: drop-shadow(0px 0px 1px  hsl(244, 100%, 90%));
      z-index: 1;
      -webkit-text-stroke-color: rgba(217, 233, 255, 0.45);
      -webkit-text-stroke-width: 0.5px;
      color: #2c3e50;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    
    
    .personal-description {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      z-index: 1;
      display: flex;
      // font-weight: 500;
      // font-style: normal;
      // line-height: 1.3rem;
      // padding: 0 0.75rem;
    
    }
    
    .tag-container {
      display: flex;
      flex-wrap: wrap; 
      justify-content: center;
      gap: 1rem;
      // margin-top: 5px;
      // animation: moveAnimation 2s infinite; 
      // animation: scaleAnimation 6s infinite;
    }
    
    .tag {
      transform: translateZ(0);
      background: rgba( 255, 255, 255, 0.1);
      border: 1.25px solid rgba(255, 255, 255, .7); 
      filter: drop-shadow(#fff 0px 0px 1px);
      border-radius: 4px; 
      padding: 4px 8px; 
      text-shadow: 0px 0px 4px  hsl(244, 100%, 90%);
      color: var(--dark-nav-background);
      // animation: moveAnimation 2s infinite; 
      animation: scaleAnimation 8s infinite;
    }
    
    
    #live-app-button {
      transform: translateZ(0);
      text-decoration: none; 
      display: flex;
      gap: 4px;
      padding: 6px 12px;
      background: rgba( 255, 255, 255, 0.1 );
      filter: drop-shadow(#fff 0px 0px 0.25px);
      border-radius: 5px;
      transition: transform 200ms ease;
      border: 1.5px solid rgba(255, 255, 255, .6); 
      text-shadow: hsl(244, 100%, 90%) 0px 0px 3px;
      box-shadow: 0 0 10px rgba(127,39,255,.1);
      color: var(--dark-nav-background);
      font-size: 16px;
    }
    
    #live-app-button #icon {
      transform: translateZ(0);
      width: 20px; 
      margin-right: 5px;
      padding-top: 1px;
      vertical-align:text-top;
      background-color: rgba(229, 235, 255, 0.35);
      color: #E3E9FF ;
      border-radius: 4px;
      box-shadow: 0px 0px 1.5px  hsl(244, 100%, 90%);
      filter: drop-shadow(#fff 0px 0px 0.5px);
      transition: transform 10ms ease;
    }
    
    #live-app-button:hover {
      // transform: translateZ(0);
      box-shadow: 0 4px 6px -2px rgba( 0, 0, 0, 0.15);
      transform: scale(1.08);
      // text-shadow: rgba(0, 0, 0, 0.15) 0px 0px 1px;
      // text-shadow: rgba(45, 45, 45, 0.1) 0px 0px 0.5px;
      // transition: transform 200ms ease;
      filter: drop-shadow(#fff 0px 0px 0.25px);
      
    }
    
    
    .swiper {
      height: 100%; 
      // border-top-right-radius: 8px;
      // border-top-left-radius: 8px;
      width: 420px;
      border-radius: 0.5rem;
    }
    .swiper-slide.swiper-slide-active{
      // border-radius: 8px;
      filter: drop-shadow(0px 0px 3px  rgba(151, 151, 151, 0.4)); 
      // border-radius: 1rem;
      border-radius: 0.5rem;
    }
    
    .swiper-slide {
      display: flex;
      // justify-content: center;
      align-items: center;
      width: 800px;
      height: 100%; 
      object-fit: cover;
      overflow: clip;
      
      border-radius: 0.5rem;
    }
    
    .swiper-slide img {
      //object-fit: fill; 
      -webkit-user-select: none;
      user-select: none;
      width: 420px;
      // width: 800px;
      height: 400px;
      object-fit: cover;
      overflow: clip;
      display: flex;
      align-items: center;
      align-content: center;
      // border-radius: 1rem;
      // border-radius: 0.5rem;
    }
    
    img {
      // border-bottom-right-radius: 4px;
      // border-bottom-left-radius: 4px;
      filter: drop-shadow(0px 0px 3px  rgba(151, 151, 151, 0.4)); 
      border: 1px solid rgba(255, 255, 255, 0.85);
      // border-radius: 4px;
      // border-radius: 1rem;
      border-radius: 0.5rem;
    }
    
    
    h2 {
      text-align: center;
      padding-top: 2.5rem;
      padding-bottom: 15px;
      color: var(--blue-primary);
      // cursor: default;
      // color: hsla(0,0%,100%,.4);
      // opacity: 0;
      -webkit-text-stroke-width: 0.5px;
        // -webkit-text-stroke-color: rgba(189, 184, 255);
      -webkit-text-stroke-color: rgba(44, 62, 80, 0.4);
      stroke-linecap: round;
      stroke-linejoin: round;
    
    }
    
    p {
      color: var(--dark-gray);
      font-family: "Poppins", sans-serif;
      font-weight: 300;
    }
    
    // .animate{
    //   opacity: 1;
    //   transition: opacity 1.5s;
    // }
    
    
    
    @media screen and (max-width: 1000px) {
      .personal-info {
        // Display one personal-info per row when the width is 1000px or less 
        width: 100%; 
      }
    }
    
    // @media screen and (max-width: 800px) {
    //   .personal-info {
    //     // Display one personal-info per row when the width is 1000px or less 
    //     width: 75%; 
    //     min-width: 100px;
    //   }
    // }
    
    
    .swiper-button-next, .swiper-button-prev { 
        color: transparent;
        
      } 
    
      svg {
        color: #fff;
        position: absolute;
    
      }
    
      .swiper-button-prev.swiper-button-disabled svg, .swiper-button-next.swiper-button-disabled svg {
        opacity: 0.35;
    
      }
    
    
    .swiper-pagination {
      padding-bottom: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    
      }
    
    
    .swiper-pagination-bullets{
      filter: drop-shadow(0px 0px 3px  rgba(151, 151, 151, .1)); 
    
    }
    
    </style>
      