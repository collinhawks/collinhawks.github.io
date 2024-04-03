<template>

<canvas id="canvas"></canvas>
    
</template>



<style lang="scss" scoped>

* {
	box-sizing: border-box;
}

canvas {
	position: fixed;
    // opacity: 0.35;
}


</style>

<script>

export default {
    data() {
        return {
            canvas: null,
            context: null,
            width: window.innerWidth,
            height: window.innerHeight,
            nearParticles: [],
            middleParticles: [],
            farParticles: [],
            particles: [],
            particleSettings: {
            // increase the count for more particles
                count: 30 
            },
            lastScrollY: 0,
            isScrolling: false
        };
    },
    mounted() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.createParticles();
        this.startSnowfall();
        window.addEventListener('scroll', this.handleScroll);

    },

    methods: {
        handleScroll() {
            // Calculate the scroll position
            const scrollY = window.scrollY || window.pageYOffset;

            // Calculate the change in scroll position since the last scroll event
            const scrollDelta = scrollY - this.lastScrollY;

            if (scrollDelta > 0) {
                // Update particle positions based on the scroll position
                this.nearParticles.forEach(particle => {
                    particle.y += scrollDelta * 0.05; // Adjust the parallax effect as needed
                });
                this.middleParticles.forEach(particle => {
                    particle.y += scrollDelta * 0.025; // Adjust the parallax effect as needed
                });
                this.farParticles.forEach(particle => {
                    particle.y += scrollDelta * 0.05; // Adjust the parallax effect as needed
                });
            }

            // Clear the canvas and redraw particles with updated positions
            this.context.clearRect(0, 0, this.width, this.height);
            if (this.isScrolling) {
                this.startSnowfall();
            }
            
            // Update the last scroll position
            this.lastScrollY = scrollY;

            // Smooth scrolling to the updated position
            // window.scrollTo({
            //     // top: scrollDelta,
            //     behavior: 'smooth' // Smooth scroll behavior
            // });
        },

        createParticles() {
            this.createSnowfall(this.nearParticles, "near");
            this.createSnowfall(this.farParticles, "far");
            this.createSnowfall(this.middleParticles, "middle");
        },
        Particle(areaValue, alphaValue, vyValue, x, y) {
            return {
                area: 1.5,
                x: x || Math.random() * this.width, // If x is not provided, generate random x
                y: y || Math.random() * this.height - this.height, // If y is not provided, generate random y
                alpha: Math.random(0.2, 0.5),
                // speed
                vy: vyValue * 10
            };
        },
        drawParticle(particle) {
            // speed
            particle.y += (Math.cos(particle.area) + particle.vy) * 0.25;
            this.context.save();
            this.context.beginPath();
            // circle
            this.context.arc(particle.x, particle.y, particle.area, 0, Math.PI * 2);
            this.context.fillStyle = particle.color;
            this.context.globalAlpha = particle.alpha;
            this.context.closePath();
            this.context.fill();
            this.context.restore();
        },

        startSnowfall() {
            // Clear the canvas only once
            if (this.particles.length > 0) {
                this.context.clearRect(0, 0, this.width, this.height);
            }

            this.particles = [...this.nearParticles, ...this.middleParticles, ...this.farParticles];
            this.particles = this.particles.sort(() => 0.5 - Math.random());
            this.particles.forEach(particle => {
                this.drawParticle(particle);
                // if particle has crossed the screen height
                if (particle.y > this.height) {
                    // reset the particle's y
                    particle.y = Math.random() * this.height - this.height;
                }
            });
            window.requestAnimationFrame(this.startSnowfall);
        },
        createSnowfall(particles, flag) {
            while (particles.length < this.particleSettings.count) {
                let particle;
                // create particles based on flag
                if (flag == "near") {
                    //Particle(area,alpha,vy)area=size,alpha=blur,vy=falling speed
                    particle = this.Particle(4, 0.9, 0.3);
                } else if (flag == "middle") {
                    particle = this.Particle(3, 0.5, 0.2);
                } else {
                    particle = this.Particle(2, 0.3, 0.1, Math.random() * this.width / 2 + this.width / 2, Math.random() * this.height / 2 + this.height / 2);
                }
                particle.color = `rgba(255,255,255, 1)`;
                particles.push(particle);
            }
        },
        randomNumberGenerator(min, max) {
            return Math.random() * (max - min) + min;
        },
    }
};
    
</script>