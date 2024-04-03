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
              poolSize: 100 // Adjust as needed
          };
      },
      mounted() {
          this.canvas = document.getElementById("canvas");
          this.context = this.canvas.getContext("2d");
          this.canvas.width = this.width;
          this.canvas.height = this.height;
          // Initialize particle object pool
          this.initParticlePool();
          this.createParticles();
          this.startSnowfall();
          window.addEventListener('scroll', this.handleScroll);
          // Print particle pool count every 3 seconds
          setInterval(() => {
              console.log("Particle pool count:", this.particlePool.length);
          }, 3000);
  
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
  
          initParticlePool() {
              // Populate particle object pool
              for (let i = 0; i < this.poolSize; i++) {
                  this.particlePool.push(this.Particle());
              }
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
            // Clear the particles array
            this.particles = [];
            // Clear the canvas only once
            this.context.clearRect(0, 0, this.width, this.height);
  
            const animate = () => {
                // Clear the canvas on each animation frame
                this.context.clearRect(0, 0, this.width, this.height);
  
                // Define batch size for processing particles
                const batchSize = 10; // Adjust as needed
  
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
                          this.returnParticle(particle);
                          particle.y = Math.random() * this.height - this.height;
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
            // Clear the particle array before adding new particles
            particles.length = 0;
              while (particles.length < this.particleSettings.count) {
                  // let particle;
                  let particle = this.getParticle(); // Retrieve a particle from the pool
                  // create particles based on flag
                   // Modify the retrieved particle based on the flag
                  if (flag == "near") {
                      particle.area = 4;
                      particle.alpha = 0.9;
                      particle.vy = 0.3;
                  } else if (flag == "middle") {
                      particle.area = 3;
                      particle.alpha = 0.5;
                      particle.vy = 0.2;
                  } else {
                      particle.area = 2;
                      particle.alpha = 0.3;
                      particle.vy = 0.1;
                      particle.x = Math.random() * this.width / 2 + this.width / 2;
                      particle.y = Math.random() * this.height / 2 + this.height / 2;
                  }
                  particle.color = `rgba(255,255,255, 1)`;
                  particles.push(particle);
                  // console.log(particles);
              }
          },
  
          getParticle() {
              // Retrieve a particle from the pool
              if (this.particlePool.length > 0) {
                  return this.particlePool.pop();
              } else {
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
              this.particlePool.push(particle);
              console.log("Particle returned to pool. Pool size:", this.particlePool.length);
  
          },
  
  
          randomNumberGenerator(min, max) {
              return Math.random() * (max - min) + min;
          },
      }
  };
      
  </script>