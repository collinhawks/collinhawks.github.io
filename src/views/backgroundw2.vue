<template>
    <div ref="canvasContainer" class="canvas-container">
        <div ref="canvas" class="canvas"></div>
    </div>
</template>

<script>
import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";
import "https://cdn.skypack.dev/@svgdotjs/svg.filter.js";

export default {
    data() {
        return {
            svg: null
        };
    },
    mounted() {
        this.svg = SVG().addTo(this.$refs.canvas);
        this.updateCanvasSize();

        window.addEventListener("resize", this.updateCanvasSize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.updateCanvasSize);
    },
    methods: {
        updateCanvasSize() {
            const { width, height } = this.$refs.canvasContainer.getBoundingClientRect();
            this.svg.size(width, height);

            const fillColor = "#000"; // Replace with your desired color
            this.svg.rect(width, height).fill(fillColor);
        },
    
    }
};
</script>

<style scoped>
.canvas-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.canvas {
    width: 100%;
    height: 100%;
}
</style>