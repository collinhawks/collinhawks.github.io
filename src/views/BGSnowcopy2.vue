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
              isScrolling: false,
              // Particle object pool
              particlePool: [],
              reusedParticleCount: 0, // Initialize the counter for reused particles
              // poolSize: 30 // Adjust as needed]
          };
      },
      mounted() {
          this.canvas = document.getElementById("canvas");
          this.context = this.canvas.getContext("2d");
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          // Initialize particle object pool
          // this.initParticlePool();
          this.createParticles();
          this.startSnowfall();
          window.addEventListener('scroll', this.handleScroll);
          // Print particle pool count every 3 seconds
          // setInterval(() => {
          //     console.log("Particle pool count:", this.particlePool.length);
          // }, 1000);
  
      },
  
      methods: {
          handleScroll() {
              // Calculate the scroll position
              const scrollY = window.scrollY || window.pageYOffset;
  
              // Calculate the change in scroll position since the last scroll event
              const scrollDelta = scrollY - this.lastScrollY;
  
              if (scrollDelta > 0) {
                  // Update particle positions based on the scroll position for Parallax
                  this.nearParticles.forEach(particle => {
                      particle.y += scrollDelta * 0.05; 
                  });
                  this.middleParticles.forEach(particle => {
                      particle.y += scrollDelta * 0.025;
                  });
                  this.farParticles.forEach(particle => {
                      particle.y += scrollDelta * 0.05;
                  });
              }
  
              // Clear the canvas and redraw particles with updated positions
              this.context.clearRect(0, 0, this.width, this.height);
              if (this.isScrolling) {
                  this.startSnowfall();
              }
  
              // Update the last scroll position
              this.lastScrollY = scrollY;
          },
  
          // initParticlePool() {
          //     // Populate particle object pool
          //     for (let i = 0; i < this.poolSize; i++) {
          //         this.particlePool.push(this.Particle());
          //           setInterval(() => {
          //               console.log("Particle pool count:", this.particlePool.length);
          //           }, 1000);
          //     }
          // },
  
          // createParticles() {
          //     this.createSnowfall(this.nearParticles, "near");
          //     this.createSnowfall(this.farParticles, "far");
          //     this.createSnowfall(this.middleParticles, "middle");
          // },
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
            this.context.clearRect(0, 0, this.width, this.height);
  
            const animate = () => {
                // Clear the canvas on each animation frame
                this.context.clearRect(0, 0, this.width, this.height);
  
                // Define batch size for processing particles
                const batchSize = 100; // Adjust as needed
  
                // Iterate over particles in batches
                for (let i = 0; i < this.particles.length; i += batchSize) {
                    // Process a batch of particles
                    const endIndex = Math.min(i + batchSize, this.particles.length);
                    for (let j = i; j < endIndex; j++) {
                        const particle = this.particles[j];
  
                        // Update particle position
                        particle.y += (Math.cos(particle.area) + particle.vy) * 0.25;
  
                        // Draw the particle
                        this.drawParticle(particle);
  
                        // Reset particle position if it's out of bounds
                        if (particle.y > this.height) {
                            if (Math.random() < 0.75) { // 75% chance to cycle particle back to top
                                particle.y = Math.random() * -this.height; // Move particle to top of screen
                            } else {
                                this.returnParticle(particle); // Return particle to pool
                            }
                        }
                    }
                }
  
                // Request the next animation frame
                requestAnimationFrame(animate);
            };
  
            // Populate the particles array
            this.particles = [...this.nearParticles, ...this.middleParticles, ...this.farParticles];
            this.particles = this.particles.sort(() => 0.5 - Math.random());
  
            // Start the animation loop by calling animate for the first time
            animate();
          },
          createSnowfall(particles, flag) {
            while (particles.length < this.particleSettings.count) {
                // let particle = this.getParticle();
                let particle;
                if (Math.random() < 0.25) { // 25% chance to create new particle
                    if (flag == "near") {
                        // Particle(area,alpha,vy)area=size,alpha=blur,vy=falling speed
                        particle = this.Particle(4, 0.9, 0.3);
                    } else if (flag == "middle") {
                        particle = this.Particle(3, 0.5, 0.2);
                    } else {
                        particle = this.Particle(
                            2,
                            0.3,
                            0.1,
                            Math.random() * (this.width / 2) + this.width / 2,
                            Math.random() * (this.height / 2) + this.height / 2
                        );
                    }
                    particle.color = `rgba(255,255,255, 1)`;
                    console.log("Particle created. Particle pool count:", this.particlePool.length);
                } else {
                    particle = this.getParticle(); // Retrieve a particle from the pool
                    this.reusedParticleCount++; // Increment the counter for reused particles
                    console.log("Particle reused. Particle pool count:", this.particlePool.length);
                }
                particles.push(particle);
                  // console.log(particles);
              }
          },
  
          getParticle() {
            // Retrieve a particle from the pool
            if (this.particlePool.length > 0) {
                const particle = this.particlePool.pop();
                console.log("Particle retrieved from pool. Pool size:", this.particlePool.length);
                return particle;
            } else {
                console.log("Creating new particle.");
                // If the pool is empty, create a new particle object
                return this.Particle();
            }
          },
  
          returnParticle(particle) {
              // Reset particle state to its initial state if needed
              // Reset particle's x, y position + Reset other properties as needed
              particle.x = Math.random() * this.width; 
              particle.y = Math.random() * this.height - this.height; 
              // Return the particle to the pool
              // Remove the particle from the pool
              const index = this.particlePool.indexOf(particle);
              if (index !== -1) {
                  this.particlePool.splice(index, 1);
              }
              this.particlePool.push(particle);
              console.log("Particle returned to pool. Pool size:", this.particlePool.length);
  
          },
  
  
          randomNumberGenerator(min, max) {
              return Math.random() * (max - min) + min;
          },
      }
  };
      
  </script>