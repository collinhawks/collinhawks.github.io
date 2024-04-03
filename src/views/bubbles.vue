<!-- bubbles.vue -->
<template>
<div class="container" :style="{top: bubbleTop}">
    <div class="section-shaped" :style="{top: top}">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            bubbleTop: 0, // Initial position of bubbles
        };
    },
    mounted() {
        // Add scroll event listener
        // window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.debounce(this.handleScroll, 3)); // Adjust the debounce delay as needed (in milliseconds)
    },
    beforeDestroy() {
        // Remove scroll event listener to prevent memory leaks
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        debounce(func, delay) {
            let timer;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(context, args);
                }, delay);
            };
        },
        handleScroll() {
            // Calculate the position of bubbles based on scroll position
            const scrollPosition = window.scrollY;
            this.bubbleTop = `${scrollPosition * 0.55}px`; // Example: Adjust the multiplier value as needed

        },
    },
    props: {
        top: {
            type: String,
            default: '0',
        },
        // bottom: {
        //     type: String,
        //     default: '0',
        // },
    },
};
</script>

<style lang="scss" scoped>

.container {
    display: flex;
    width: 98vw;
    -webkit-user-select: none;
    user-select: none;
}

.section-shaped .shape {
    position: absolute;
    top: 0;
    // z-index: -1;
    width: 100%;
    height: 4000px;
    // height: 500vw;
    // height: 200vh;
}

.section-shaped .shape span {
    position: absolute
}

.section-shaped .shape-style-1 span:not(:first-child) {
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    animation: moveAround 35s ease-in-out infinite;
}

@keyframes moveAround2 {
    // center
    // 0% { transform: translate(0px, 0px); }
    // left mid
    10% {
        transform: translate(-6px, -3px);
    }
    // bottom-left
    20% {
        transform: translate(-9px, 126px);
    }
    // bottom mid
    30% {
        transform: translate(0px, 98px);
    }
    // bottom right + down
    40% {
        transform: translate(8px, 130px);
    }
    // center
    50% {
        transform: translate(0px, 50px);
    }
    // top-left
    60% {
        transform: translate(-8px, -6px);
    }
    // top mid
    70% {
        transform: translate(6px, -8px);
    }
    // top-right
    80% {
        transform: translate(14px, -10px);
    }
    // right mid
    90% {
        transform: translate(10px, -5px);
    }
    // // top mid
    //     70% { transform: translate(4px, -4px); }
    // // top-right
    //     80% { transform: translate(12px, -10px); }
    // // right mid
    //     90% { transform: translate(8px, -5px); }
    // center
    100% {
        transform: translate(0px, 0px);
    }

}

@keyframes moveAround {
// center
    // 0% { transform: translate(0px, 0px); }
// left mid
    10% { transform: translate(-6px, -3px); }
// bottom-left
    20% { transform: translate(-9px, 6px); }
// bottom mid
    30% { transform: translate(0px, 8px); }
// bottom right + down
    40% { transform: translate(8px, 10px); }
// center
    50% { transform: translate(0px, 0px); }
// top-left
    60% { transform: translate(-8px, -6px); }
// top mid
    70% { transform: translate(6px, -8px); }
// top-right
    80% { transform: translate(14px, -10px); }
// right mid
    90% { transform: translate(10px, -5px); }
// // top mid
//     70% { transform: translate(4px, -4px); }
// // top-right
//     80% { transform: translate(12px, -10px); }
// // right mid
//     90% { transform: translate(8px, -5px); }
// center
    100% { transform: translate(0px, 0px); }
}


// .section-shaped .shape-style-1 span :nth-child(2) {
//     right: 4%;
//     top: 10%;
//     background: red;
//     transition-delay: 0.5s;
// }

.section-shaped .shape-style-1 .span-200 {
    height: 200px;
    width: 200px;
    // animation: moveAround2 35s ease-in-out infinite;
}

.section-shaped .shape-style-1 span:nth-child(1) {
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    animation: moveAround2 125s ease-in-out infinite;
}



.section-shaped .shape-style-1 .span-150 {
    height: 150px;
    width: 150px
}

.section-shaped .shape-style-1 .span-100 {
    height: 100px;
    width: 100px
}

.section-shaped .shape-style-1 .span-75 {
    height: 75px;
    width: 75px
}

.section-shaped .shape-style-1 .span-50 {
    height: 50px;
    width: 50px
}

.section-shaped .shape-style-1 :first-child {
    // left: 0.1%;
    // left: 0.5%;
    left: 2.5%;
    bottom: auto;
    background: hsla(0,0%,100%,.1)
}

.section-shaped .shape-style-1 :nth-child(2) {
    right: 4%;
    top: 10%;
    // top: 7%;
    background: hsla(0,0%,100%,.1);
    // background: red;
    // transition-delay: 0.5s;
}

// .section-shaped .shape-style-1 :nth-child(3) {
//     top: 10%;
//     right: 5.66666%;
//     background: hsla(0,0%,100%,.3)
// }

.section-shaped .shape-style-1 :nth-child(4) {
    // top: 320px;
    top: 340px;
    right: 7%;
    background: hsla(0,0%,100%,.15)
}

.section-shaped .shape-style-1 :nth-child(5) {
    top: 38%;
    left: 1%;
    right: auto;
    background: hsla(0,0%,100%,.05)
}

.section-shaped .shape-style-1 :nth-child(6) {
    width: 200px;
    height: 200px;
    // top: 44%;
    top: 54%;
    left: 10%;
    right: auto;
    background: hsla(0,0%,100%,.15)
}

.section-shaped .shape-style-1 :nth-child(7) {
    bottom: 50%;
    right: 36%;
    background: hsla(0,0%,100%,.04)
}

.section-shaped .shape-style-1 :nth-child(8) {
    bottom: 70%;
    right: 2%;
    background: hsla(0,0%,100%,.1)
}

.section-shaped .shape-style-1 :nth-child(9) {
    // bottom: 1%;
    // bottom: 45%;
    bottom: 48%;
    right: 2%;
    background: hsla(0,0%,100%,.1)
}

.section-shaped .shape-style-1 :nth-child(1) {
    top: 10%; /* Adjust the percentage for vertical positioning */
    left: 10%; /* Adjust the percentage for horizontal positioning */
    background: hsla(0,0%,100%,.3)

}

.section-shaped .shape-style-1 :nth-child(2) {
    top: 20%; /* Adjust the percentage for vertical positioning */
    left: 30%; /* Adjust the percentage for horizontal positioning */
    background: hsla(0,0%,100%,.1)
}

.section-shaped .shape-style-1 :nth-child(1) {
    top: 10%; /* Adjust the percentage for vertical positioning */
    left: 10%; /* Adjust the percentage for horizontal positioning */
    background: hsla(0,0%,100%,.1)
}

.section-shaped .shape-style-1 :nth-child(2) {
    top: 20%; /* Adjust the percentage for vertical positioning */
    left: 30%; /* Adjust the percentage for horizontal positioning */
}

// .section-shaped .shape-style-1 :nth-child(3) {
//     top: 30%;
//     left: 50%;
// }

.section-shaped .shape-style-1 :nth-child(10) {
    top: 40%;
    left: 70%;
    background: hsla(0,0%,100%,.3)
}

.section-shaped .shape-style-1 :nth-child(11) {
    top: 50%;
    left: 80%;
}

.section-shaped .shape-style-1 :nth-child(12) {
    top: 60%;
    left: 70%;
    background: hsla(0,0%,100%,.15)
}

.section-shaped .shape-style-1 :nth-child(13) {
    top: 70%;
    left: 50%;
    background: hsla(0,0%,100%,.04)
}

.section-shaped .shape-style-1 :nth-child(14) {
    top: 80%;
    left: 30%;
    background: hsla(0,0%,100%,.15)
}

.section-shaped .shape-style-1 :nth-child(15) {
    top: 90%;
    left: 10%;
    background: hsla(0,0%,100%,.3)
}


// .section-shaped .shape-style-1 :nth-child(10) {
//     // bottom: 1%;
//     bottom: 50%;
//     left: 1%;
//     right: auto;
//     background: hsla(0,0%,100%,.05)
// }

</style>