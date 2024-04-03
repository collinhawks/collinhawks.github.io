<!-- BackgroundW -->
<template>
<!-- <div> -->
    <div ref="canvas" class="canvas"></div>

    <div class="regenerate">
        <button class="regenerate" @click="regenerate">
            Regenerate BG
        </button>
    </div>
<!-- </div> -->

</template>

<style lang="scss" scoped>


button {
    position: fixed;
    z-index: 1;
    // Remove position: fixed; property
    inset-block: auto 16.35vmin;
	inset-inline: auto 1.625vmin;
    width: 6.75rem;
    height: 2.5rem;
    border: 0;
    font-variation-settings: "wght" 435, 'opsz' 24;
    font-size-adjust: 0.54;
    font-family: inherit;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    line-height: 2.25rem;
    background: hsla(0, 0%, 100%, 0.25)!important;
    cursor: pointer;
    box-shadow: var(--shadow-4);
    background: rgba(255, 255, 255, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    @supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px)) {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }
    color: var(--light);
    text-shadow: 0px 1px 2px rgba(44, 62, 80, 0.45);
    filter: contrast(108%);
}


.canvas {
    position: fixed;
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    user-select: none;
}
</style>
<script>
import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";

import {
    random,
    map,
    spline
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.0";

import tinycolor from "https://cdn.skypack.dev/tinycolor2@1.4.2";
import "https://cdn.skypack.dev/@svgdotjs/svg.filter.js";
import copy from "https://cdn.skypack.dev/copy-to-clipboard@3.3.1";
import { gsap } from "https://cdn.skypack.dev/gsap@3.6.0";

export default {
    
    // created() {
    //     window.addEventListener("resize", this.myEventHandler);
    // },

    // destroyed() {
    //     window.removeEventListener("resize", this.myEventHandler);
    // },
    
    data() {
        return {
            wavePaths: [],
            gradients: [], // Array to store gradients
            resizeTimer: null, // Initialize a timer for debouncing
            svg: null // Initialize svg variable
        };
    },

    mounted() {
        this.svg = SVG().addTo(this.$refs.canvas);
        this.generateGradients();

        // Wait for the DOM to update after setting SVG size
        this.$nextTick(() => {
            this.updateSvgSize();
            this.generate(); // Generate waves after SVG size is updated
            this.animateWaves(); // Animate waves
        });

        window.addEventListener("resize", this.myEventHandler);
        // console.log('svg size: ', this.$refs.canvas.getBoundingClientRect());
    },

    methods: {
        myEventHandler() {
            clearTimeout(this.resizeTimer);
            // Start a new resize timer
            this.resizeTimer = setTimeout(() => {
                // Call the updateSvgSize and generate methods after the debounce time
                this.updateSvgSize();
                this.generate();
            }, 400); // Adjust the debounce time as needed (e.g., 200 milliseconds)
            // this.updateSvgSize();
            // this.generate();
        },

        updateSvgSize() {
            // Get current window dimensions
            this.svg.size("100%", "100%");

        },
        generateGradients() {
            this.gradients = []; // Clear the gradients array
            const base = tinycolor(`hsl(${random(0, 360)}, 65%, 55%)`);
            const colors = base.analogous(6);
            const numWaves = 5;
            for (let i = 0; i < numWaves; i++) {
                const color = random(colors).clone();
                if (i < 2) {
                    color.darken(25).desaturate(10);
                }
                const gradientOffset = map(i, 0, numWaves, 0.1, 1);
                let gradient = this.svg.gradient("linear", function (add) {
                    add.stop(0, color.clone().lighten(30).toHexString());
                    add.stop(gradientOffset, color.clone().spin(60).toHexString());
                });
                gradient.from(0.5, 0).to(0, 1);
                this.gradients.push(gradient); // Store gradients in array
            }
            console.log('Waves initialized!');
        },

        wave(start, end, gradient, height) {

            const numSteps = random(4, 8, true);
            // const numSteps = random(4, 10, true);
            const step = 1 / numSteps;
            const randomRange = random(32, 64);

            const points = [];
            let pointPosition = 0;

            for (let i = 0; i <= numSteps; i++) {
                const step = map(i, 0, numSteps, 0, 1);

                let x = this.lerp(start.x, end.x, step);
                let y = this.lerp(start.y, end.y, step);

                if (i !== 0 && i !== numSteps) {
                    x += random(-randomRange, randomRange);
                    y += random(-randomRange, randomRange);
                }

                points.push({ x, y });
            }

            const pathData = spline(points, 1, false) + `L ${end.x} ${height} L ${start.x} ${height} Z`;

            const path = this.svg.path(pathData).attr("fill", gradient);
            
            // Push the created path to the wavePaths array
            this.wavePaths.push(path);
        },

        lerp(v0, v1, t) {
            return v0 * (1 - t) + v1 * t;
        },

        generate() {
            // const { width, height } = this.$refs.canvas.getBoundingClientRect();
            const height = window.innerHeight;
            const width = window.innerWidth;
            const numWaves = 5;
            for (let i = 0; i < numWaves; i++) {
                const randomOffset = random(-50, 50);
                const originY = map(i, 0, numWaves, -height / 3, height / 1.5) + randomOffset;
                const endY = map(i, 0, numWaves, 0, height) + randomOffset;

                const pathData = `M 0,${originY} C ${width / 4},${originY} ${width / 2},${endY} ${width},${endY} L ${width},${height} L 0,${height} Z`;
                
                if (this.wavePaths[i]) {
                    // If the wave path already exists, update its path data
                    const path = this.wavePaths[i];
                    path.plot(pathData);
                } else {
                    // If the wave path doesn't exist, create it
                    const path = this.svg.path(pathData).attr("fill", this.gradients[i]);
                    this.wavePaths.push(path);
                }
            }
        },
        animateWaves() {
            this.wavePaths.forEach((path) => {
                gsap.to(path.node, {
                    duration: random(4.5, 6),
                    x: `+=${random(0, 1)}`, // Randomly move the wave along the x-axis
                    y: `+=${random(-15, 100)}`, // Randomly move the wave along the y-axis
                    repeat: -1, // Repeat the animation indefinitely
                    yoyo: true, // Reverse the animation
                    ease: 'power1.inOut', // Easing function
                });


                gsap.to(path.node, {
                    duration: random(4.5, 6),
                    x: `+=${random(0, 1)}`, // Randomly move the wave along the x-axis
                    y: `+=${random(-15, 50)}`, // Move up and back down
                    repeat: -1, // Repeat the animation indefinitely
                    yoyo: true, // Reverse the animation
                    ease: 'power1.inOut', // Easing function
                    delay: random(1, 3) // Delay before starting the animation again
                });

            });
        },

        regenerate() {
            console.log('Regenerating waves...');

            this.generateGradients(); // Generate new gradients
            const numWaves = 5;
            for (let i = 0; i < numWaves; i++) {
                const path = this.wavePaths[i];
                path.attr("fill", this.gradients[i]); // Update fill attribute with new gradient
            }
            this.generate(); // Regenerate waves with the new gradients
        },

    },

}

</script>