<template>
    <!-- <div class="spacer"></div> -->
    <div>
        <div id="Projects" class="top-container">
            <h1> Projects </h1>
            <div v-for="(group, index) in allProjects" :key="index" class="pLanguage">

                <h2> {{ group.heading }} </h2>

                <div class="grid-layout">
                    <!-- <div class="backdrop-filter"> -->
                    <div v-for="(project, projectIndex) in group.projects" :key="projectIndex"
                        class="animation-container6b" :id="'project-' + index + '-' + projectIndex">
                        <div class="project-details">

                            <div class="tag-container">
                                <div v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                                    <div class="h7">
                                        {{ tag }}
                                    </div>
                                </div>
                            </div>

                            <div class="project-title">
                                <h3>{{ project.title }}</h3>
                            </div>

                            <div class="project-description">
                                <p>{{ project.description }}</p>
                            </div>

                            <a :href="project.link" class="live-app-button"  title="Launch Demo" >
                                <img src="/assets/open.svg" alt="Icon" id="icon">
                                <div class="h7" id="demo">
                                    Live Demo
                                </div>
                            </a>

                        </div>

                        <div class="image-gallery">
                            <swiper 
                            :pagination="swiperOptions.pagination" :navigation="swiperOptions.navigation"
                            :modules="modules"
                            :options="swiperOptions" 
                            class="img-container">

                                <swiper-slide v-for="(imgSrc, index) in project.imgSrcs" :key="index" class="swiper-slide">
                                    <img :src="imgSrc" :alt="'Image ' + (index + 1)" loading="lazy" fetchpriority="low">
                                    <div class="swiper-lazy-preloader"></div>
                                </swiper-slide>
                                    <!-- Swiper navigation buttons -->
                                    <div class="swiper-button-prev">
                                        <svg fill="rgba(255, 255, 255, 0.5)" height="1em" viewBox="0 0 256 512">
                                            <path
                                                d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="swiper-button-next">
                                        <svg fill="rgba(255, 255, 255, 0.5)" height="1em" viewBox="0 0 256 512">
                                            <path
                                                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z">
                                            </path>
                                        </svg>
                                    </div>

                                    <!-- Swiper pagination -->
                                    <div class="swiper-pagination"></div>

                                <!-- </swiper-slide> -->
                            </swiper>
                        </div>
                    </div>
                    <!-- </div> -->
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


                allProjects: [
                    {
                        heading: "Python",
                        projects: [
                            {
                                title: "Rename Files",
                                description: "Allows you to rename a specified number of files in a folder. It takes in a folder path and a file extension, and then renames all the files in that folder with a number in front of it based on index, or a choice of a custom separator.",
                                imgSrcs: [
                                    "/assets/Python/RenameFiles/RenameFiles1.webp",
                                    "/assets/Python/RenameFiles/RenameFiles2.webp",
                                    "/assets/Python/RenameFiles/RenameFiles3.webp",
                                ],
                                tags: ["Python", "Tkinter"],
                                link: "RenamePlaceholder.text",
                            },
                            {
                                title: "Finance Calculator",
                                description: "During the creation of TiPPiT, I needed a quick, easy, simple way to compare payment gateway fees at different volume, percentages, and add-on costs. This allowed me to do that, utilizing a Tkinter GUI and visualize the costs per transaction.",
                                imgSrcs: [
                                    "/assets/Python/FinanceCalc/FinanceCalc1.webp",
                                    "/assets/Python/FinanceCalc/FinanceCalc2.webp",
                                    "/assets/Python/FinanceCalc/FinanceCalc3.webp",
                                ],
                                tags: ["Python", "Tkinter"],
                                link: "FinanceCalcPlaceholder.text",
                            },
                        ],
                    },
                    {
                        heading: "Swift",
                        projects: [
                            {
                                title: "Pixel Art",
                                description: "3D printed my mom a pixel art of her dog. I made this app to visualize the pixel art. It provides a color picker and a grid to allow filling in the grid pieces. It also outputs the number of pixels needed for each color.",
                                imgSrcs: [
                                    "/assets/Swift/PixelArt/PixelArt1.webp",
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
            callScrollAnimation1() {
                scrollAnimation();
            },
        },

        mounted() {
            this.callScrollAnimation1();
        }
    };

</script>

<style scoped lang="scss">
h1 {
    margin-bottom: 2.5rem;
    margin-right: 22vw;
    margin-left: 22vw;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}

.pLanguage:not(:last-child) {
    padding-bottom: 5rem;
    // display: flex;
    // flex-direction: column;
    // gap: 3rem;
}

.animation-container6b {
    // filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.10));
    // filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.2));
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        height: 478px;
        width: 870px;
        border-radius: 12px;
        transition: opacity 0.5s, transform 0.5s;
        background: hsla(0, 0%, 100%, 0.1); 
        // background: rgba(51, 51, 51, 0.35);
        @supports (backdrop-filter: blur(150px)) or (-webkit-backdrop-filter: blur(150px)) {
            -webkit-backdrop-filter: blur(150px) saturate(120%);
            backdrop-filter: blur(150px) saturate(120%);
        }

        // border: 1px solid rgba(255, 255, 255, 0.2);
        // border: 2px solid hsla(0, 0%, 100%, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: var(--projectsShadow);
// box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);

// box-shadow: 0 26px 58px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18);

// box-shadow: 0px 12px 28px 0px rgba(0, 0, 0, 0.2), 0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset;

// box-shadow: 0px 9px 20px rgba(13, 38, 76, 0.19);
        // filter: saturate(110%);
        // filter: contrast(110%);
        filter: saturate(102%);
    }


.animation-container6b::before {
        content: '';
        position: absolute;
// Need with border + ::before
        top: -1.25px;
        left: -1.25px;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 12px;
        border: 0.5px solid rgba(255, 255, 255, 0.65);
        background: hsla(0, 0%, 100%, 0.2);
        box-shadow: var(--projectsInsetShadow);

// PJTest5 - Inset like border
        // box-shadow: inset -0.2rem -0.05rem 0.3rem rgba(255, 255, 255, 0.85), inset -0.1rem -0.05rem 0.4rem rgba(255, 255, 255, 0.8);

        // box-shadow: var(--whiteLargeInsetShadow);
        // background: rgba(255, 255, 255, 0.25);
        // background: rgba(51, 51, 51, 0.25);
        // background: rgba(51, 51, 51, 0.35);
        // background-color: rgba(0, 0, 0, 0.2);
        // backdrop-filter: blur(40px);
        // -webkit-backdrop-filter: blur(40px);
        // backdrop-filter: blur(16px) saturate(180%);
        // -webkit-backdrop-filter: blur(16px) saturate(180%);

    }

    .project-details {
        height: 100%;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
        justify-content: space-evenly;
        gap: 4px;
        align-items: center;
        padding: 0 52px 0 52px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        background: hsla(0, 0%, 100%, 0.2);
    }

    .project-description p {
        font-size: 20px;
        text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 1px;

// - <h3> 36px = 22.24px  // 58.24px
// - <p>    20px = 32px // 35.5   // 12.36px
// - <p>    18px = 47px   // 29.123px
// - <tag> 16px = 25.88px // 41.11px
    }


    .tag-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
    
    .tag {
        transform: translateZ(0);
        text-align: center;
        // font-smoothing: subpixel-antialiased;
        -webkit-font-smoothing: subpixel-antialiased;
// - <h3> 36px = 22.24px  // 58.24px
// - <p>    20px = 32px // 35.5   // 12.36px
// - <p>    18px = 47px   // 29.123px
// - <tag> 16px = 25.88px // 41.11px
        border: 1.25px solid rgba(255, 255, 255, .7);
        border-radius: 6px;
        padding: 4px 8px;
        box-shadow: 0 10px 80px -8px rgba(255,255,255,0.1), 0 3px 30px -6px rgba(0,0,0,0.25), 0 0 10px rgba(152, 90, 246, .1), inset 0 0px 6px 0 rgba(255,255,255,0.3);
        animation: scaleAnimation 8s infinite;
    // Was using
        // filter: drop-shadow(rgba(255,255,255,0.15) 0px 0px 0.5px);
        filter: drop-shadow(#fff 0px 0px 0.25px);
// PJTest5
        background: hsla(0, 0%, 100%, 0.25);
        box-shadow: var(--shadow-4);
    }

    .live-app-button {
        transform: translateZ(0);
        text-decoration: none;
        display: flex;
        gap: 4px;
        padding: 5px 12px;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        filter: drop-shadow(#fff 0px 0px 0.25px);
        background: hsla(0, 0%, 100%, 0.2);
        transition: transform 200ms ease;
        border: 1.5px solid rgba(255, 255, 255, .6);
// Newest was using
        // box-shadow: 0 10px 40px -8px rgba(255,255,255,0.1), 0 3px 12px -2px rgba(0,0,0,0.2);
// Test
        box-shadow: 0 10px 40px -8px rgba(255,255,255,0.1), 0 3px 11px -3px rgba(0,0,0,0.2), 0 0 10px rgba(152, 90, 246, .1), inset 0 -2px 6px 0 rgba(255,255,255,0.3);
// TEST 2
        // box-shadow: 0 10px 40px -8px rgba(255,255,255,0.1), 0px 3px 11px -3px rgba(50,50,93,0.25), 0 3px 7px -4px rgba(152, 90, 246, .2), inset 0 -2px 6px 0 rgba(255,255,255,0.3);

        text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 1px;
        box-shadow: var(--shadow-4);

    }

    #demo {
    //     font-size: 1.2rem !important; 
        font-size: 19px !important; 
        font-family: "Satoshi";
        font-feature-settings: "salt";
        font-variation-settings: "wght" 505, 'opsz' 28;
    //     color: hsla(0, 0%, 20%, 0.825);
    }

    .h7 {
        font-size: 18px !important; 
        letter-spacing: -.42px;
        font-size-adjust: 0.525;
        font-variation-settings: "wght" 450, 'opsz' 28;
        color: hsla(0, 0%, 20%, 0.82);
        text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 1px;

    }

    .live-app-button #icon {
        transform: translateZ(0);
        width: 20px;
        margin-right: 5px;
        padding-top: 1px;
        vertical-align: text-top;
        background-color: rgba(229, 235, 255, 0.35);
        border-radius: 4px;
        box-shadow: 0px 0px 1.5px hsl(244, 100%, 90%);
        filter: drop-shadow(#fff 0px 0px 0.5px);
        transition: 200ms ease;
    }

    .live-app-button:hover {
        transform: translateZ(0);
        box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.15), 0 0 10px 2px rgba(152, 90, 246, 0.2);
        transform: scale(1.08);
// PJTest5
        filter: drop-shadow(#fff 0px 0px 0.25px);
    }

    .image-gallery {
        height: 100%;
        width: 100%;
        width: 43.55%;
    // PJTest7
        border-radius: 12px;
        // width: 370px;
        // padding: 28px;
    }

    .swiper {
        height: 100%;
        // width: 100%;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        // padding: 28px;
    }

    .swiper-slide.swiper-slide-active {
        width: 100%;
        // padding: 28px;
// Was using - inset Adds the separator between the image and details
        // box-shadow: 0 10px 80px -25px rgba(50, 50, 93, 0.15), 0 30px 60px -30px rgba(0, 0, 0, 0.25), inset 0 0 6px 0 rgba(155, 155, 155, 0.35);
        
        // box-shadow: inset -0.05rem -0.05rem 0.2rem rgba(255, 255, 255, 0.85), inset -0.1rem -0.05rem 0.2rem #fff, inset 0 0 6px 0 rgba(121, 121, 121, 0.6);

        // box-shadow: inset -0.1rem -0.05rem 0.4rem #fff, inset 0 0 6px 0 rgba(155, 155, 155, 1);

    }
.img-container{
    // height: 100%;
    // width: 43.55%;
    // padding: 28px;
    box-shadow: inset -0.05rem -0.05rem 0.2rem rgba(255, 255, 255, 0.85), inset -0.1rem -0.05rem 0.2rem #fff, inset 0 0 6px 0 rgba(128, 128, 128, 0.6);
}
    .swiper-slide img {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none; 
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        // filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.35));
        // object-fit: cover;
        // overflow: clip;
        // padding: 28px;
    }

    .swiper img {
        width: 100%;
        border-radius: 6px;
// PJTest7
        // @supports (backdrop-filter: blur(4rem)) or (-webkit-backdrop-filter: blur(4rem)) {
        //     -webkit-backdrop-filter: blur(4rem) saturate(120%);
        //     backdrop-filter: blur(4rem) saturate(120%);
        // }
        // border-top: 1px solid rgba(255, 255, 255, 0.5);
        // border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        // border-right: 1px solid rgba(255, 255, 255, 0.6);
        // border-left: 1px solid rgba(255, 255, 255, 0.5);
        // border-top: 1px solid red;
        // border-bottom: 1px solid red;
        // border-right: 1px solid red;
        // border-left: 1px solid red;
        padding: 28px;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: transparent;
    }

    .swiper-button-next {
        // right: 5px;
        right: 2px;
    }

    .swiper-button-prev {
        left: 2px;
    }

    svg {
        opacity: 0.75;
        position: absolute;
        // fill: hsl(0, 0%, 50%);
        // fill: rgba(255, 255, 255);
        fill: #f6f9fc;
        filter: drop-shadow(0px 0px 3px hsla(0, 0%, 75%, 0.35));
        // filter: drop-shadow(-1.5px 2px 3px hsla(0, 0%, 75%, 0.35));
        &:hover { 
            opacity: 1;
        }
    }

    .swiper-button-prev.swiper-button-disabled svg,
    .swiper-button-next.swiper-button-disabled svg {
        opacity: 0.6;
    }

    .swiper-pagination {
        // height: 100%;
        padding-bottom: 3.2px;
        display: flex;
        justify-content: center;
        align-items: center; // end
    }

    p {
        color: #343434;
        font-family: "Poppins", sans-serif;
        font-weight: 325;
        z-index: 1;
        // line-height: calc(1ex / 0.32);
        // -webkit-text-stroke-width: 0.1px;
        // text-shadow: rgba(255, 255, 255, 0.6) 0px 1px 1px;
        // -webkit-font-smoothing: subpixel-antialiased;
    }

    #Projects {
        top: 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    .grid-layout {
        display: grid;
        gap: 6rem;
        justify-items: center;
    }

    h2 {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        font-size: 38px;
        // width: 20%;
        text-align: center;
        color: #363636;
        margin-bottom: 2rem;
        margin-left: 375px;
        margin-right: 375px;
        // text-shadow: rgba(255, 255, 255, 1) 0px 1px 1px;
    }

</style>