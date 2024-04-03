



function greet() {
    // greet: function (event) {
        // `this` inside methods point to the Vue instance
        alert('Hello ' + this.name + '!')
        // `event` is the native DOM event
        // alert(event.target.tagName)
    //   }
}

function scrollAnimation() {

    // Get all project containers
    const projectContainers = document.querySelectorAll('.animation-container');

    // Callback function to handle intersection changes
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Apply opacity and slide-up animation
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
        });
    };

    // Options for the Intersection Observer
    const options = {
        threshold: 0.5
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each project container
    projectContainers.forEach(container => {
        observer.observe(container);
        // Set initial styles
        container.style.opacity = '0';
        container.style.transform = 'translateY(50px)'; // Move the container up initially
    });

}

function scrollAnimation2() {

    // Get all project containers
    const projectContainers = document.querySelectorAll('.sectionAnimation');

    // Callback function to handle intersection changes
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Apply opacity and slide-up animation
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
        });
    };

    // Options for the Intersection Observer
    const options = {
        threshold: 0.5
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each project container
    projectContainers.forEach(container => {
        observer.observe(container);
        // Set initial styles
        container.style.opacity = '0';
        container.style.transform = 'translateY(50px)'; // Move the container up initially
    });

}



// // Navbar ScrollSpy
// let sections = document.querySelectorAll('.page-scroll');
// let navLinks = document.querySelectorAll('aside ul li a');
// let temp = sections[sections.length - 1];

// sections.forEach(section => {
//     section.addEventListener('click', () => {
//         let id = section.getAttribute('id');
//         navLinks.forEach(links => {
//             links.classList.remove('active');
//             document.querySelector('.page[href*=' + id + ']').classList.add('active');
//         })
//     })
// })

// window.onscroll = () => {

//     sections.forEach(section => {

//         let top = window.scrollY;
//         let offset = section.offsetTop;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');
//         let viewportHeight = window.innerHeight;
//         let viewportWidth = window.innerWidth;
//         let scrollheight = document.body.scrollHeight;
//         if (top + viewportHeight / 2 >= offset && top < offset + height) {
//             flg = 1;
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.page[href*=' + id + ']').classList.add('active');
//             })
//         }
//         if (top < 100) {
//             let id = "top";
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.page[href*=' + id + ']').classList.add('active');
//             })
//         }

//         if (viewportWidth < 900) {
//             if ((top + viewportHeight - scrollheight <= viewportWidth / 10 && top + viewportHeight - scrollheight > 0) || (scrollheight - top - viewportHeight <= viewportWidth / 10 && scrollheight - top - viewportHeight > 0)) {
//                 let id = "contact";
//                 navLinks.forEach(links => {
//                     links.classList.remove('active');
//                     document.querySelector('.page[href*=' + id + ']').classList.add('active');
//                 })

//             }
//         }

//     })
// }

