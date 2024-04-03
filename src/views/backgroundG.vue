<template>

    <div class="body2">
        <canvas ref="gradient-canvas" id="gradient-canvas" data-transition-in />
        <!-- <canvas ref="gradient-canvas" data-js-darken-top id="gradient-canvas" data-transition-in /> -->
    </div>

</template>

<style lang="scss" scoped>

// Change fragment shader 0.02 for darkening top
// and change noiseCeil and noiseFloor to change shapes of waves
// change noiseFreq + e to change multi color of waves
// change to change speed
// change freqDelta to change frequency of waves
// change vec4 m = max(0.6  to change brightness of waves

.body2 {
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Dongle', sans-serif;
    -webkit-user-select: none;
    user-select: none;
    height: 100vh;
    width: 100%;
    // transition: opacity 1000ms;
    // transition-delay: 1000ms;
    // margin-bottom: 200px;
    // filter: blur(4px);
    // filter: blur(12px);
    opacity: 1;
    // background-color: rgb(86, 118, 152);
    // background-image: linear-gradient(19deg, rgb(33, 212, 253) 0%, rgb(183, 33, 255) 100%)
}

#gradient-canvas {
    width: 100%;
    height: 100%;
    // --gradient-color-1: #c3e4ff; 
    // // --gradient-color-2: #cfe8e5; 
    // // --gradient-color-2: #a1ebfa; 
    // --gradient-color-2: #6ec3f4; 
    // --gradient-color-3: #eae2ff;  
    // --gradient-color-4: #b9beff;

    --gradient-color-1: #a1ebfa; 
    --gradient-color-2: #a0abfa;  
    --gradient-color-3: #C6A5EB;
    --gradient-color-4: #cfe8e5;
    

    // --gradient-color-1: #a1ebfa; 
    // --gradient-color-2: #fb85e6;  
    // --gradient-color-3: #C6A5EB;
    // --gradient-color-4: #cfe8e5;

    // --gradient-color-1: #fb85e6; 
    // --gradient-color-2: #6ec3f4;  
    // --gradient-color-3: #b4c5ff;
    // --gradient-color-4: #c3e4ff;

    // --gradient-color-1: #fad4f3; 
    // // --gradient-color-1: #efabe3; 
    // // --gradient-color-1: #f4c0f4; 
    // // --gradient-color-2: #6ec3f4;  
    // --gradient-color-2: #c3e4ff;  
    // --gradient-color-3: #b9beff;
    // --gradient-color-4: #cfe8e5;
    // // --gradient-color-4: #cfe8e5;

    // --gradient-color-1: #ff0000; 
    // --gradient-color-2: #0000ff;  
    // --gradient-color-3: #ff00ff;
    // --gradient-color-4: #00ff00;

    // 6711680 - rgb(0, 0, 255) blue
    // 65280 rgb(0, 255, 0) green
    // 16711680  rgb(255, 0, 0) red
    // 16711935 rgb(255, 0, 255)  magenta.


    // [0, "#fb85e6"],
    //     [249, "#6ec3f4"],
    //     [499, "#b4c5ff"],
    //     [749, "#c3e4ff"],
    //     [999, "#b9beff"]

    // E388F5

    // --gradient-color-1: #ef008f; 
    // // Bubblegum
    // F08DB0
    // rgb(240, 141, 176);
    // // Teal
    // 31B6D3
    // rgb(49, 182, 211);
    // // Lavender
    // C6A5EB
    // rgb(198, 165, 235);
    // // Green
    // B1DEC7
    // rgb(177, 222, 199);
    // // Cyan
    // 80DFF0
    // rgb(128, 223, 240);
    // // Peach
    // FFD3B5 OR E388F5
    // rgb(227, 136, 245);
    // // Purple
    // 8C7EF1
    // rgb(140, 126, 241);

    // ORIGINAL
    // --gradient-color-2: #6ec3f4;  
    // --gradient-color-3: #7038ff;
    // --gradient-color-4: #ffba27;
// 567698
// 21d4fd


// USING
    --gradient-color-1: #fad4f3; 
    --gradient-color-2: #c3e4ff;  
    --gradient-color-3: #b9beff;
    // --gradient0color-3: #d9d6ff;
    --gradient-color-4: #cfe8e5;

// DECENT
    // --gradient-color-1: #a1ebfa; 
    // --gradient-color-2: #a0abfa;  
    // --gradient-color-3: #C6A5EB;
    // --gradient-color-4: #cfe8e5;

}

h1 {
    font-family: sohne-var, "Helvetica Neue", Arial, sans-serif;
    font-weight: 800;
    font-size: 4rem;
    color: #343434;
    position: absolute;
    padding: 2rem;
    top: 0px;
    z-index: 100;
    text-align: center;
    width: 100%;
    mix-blend-mode: difference;
}
</style>

<script>
import { Gradient } from '../Gradient3.js'

export default {
    data() {
        return {
            // Store the Gradient instance
            gradient: null 
        };
    },
    mounted() {
        this.initializeGradient();
    },

    methods: {
        initializeGradient() {
            if (!this.gradient) { 
                this.gradient = new Gradient();
                this.gradient.initGradient('#gradient-canvas');
                console.log('Gradient initialized!');
            } else {
                console.log('Gradient already initialized.');
            }
        }
    }
}


</script>