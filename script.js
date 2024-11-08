function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".responsive-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open");

}
// Project Data: Images and descriptions
const projects = [
    {
        images: [
            './assets/project-1.png',
            './assets/About Us.png',
            './assets/Careers.png',
            './assets/Contact Us.png',
        ],
        description: '" This the Website we created, Quintech Company "'
    },
    {
        images: [
            './assets/project-2.png',
            './assets/Quintech.png',
            
        ],
        description: '" These are the vendo machines and <br> vendo kit that I recently created"'
    },
    {
        images: [
            './assets/project-3.png' ,
            './assets/project-4.png',
        ],
        description: '" These are the Computers that I build and reformat "'
    }
];




// Open modal and display selected project
let currentImageIndex = 0;
let currentProjectImages = [];

function openModal(index) {
    const modal = document.getElementById('projectModal');
    const fullImage = document.getElementById('fullImage');
    const description = document.getElementById('modalDescription');

    // Set project images and reset index
    currentProjectImages = projects[index].images;
    currentImageIndex = 0;

    // Set initial image and description
    fullImage.src = currentProjectImages[currentImageIndex];
    description.innerHTML = projects[index].description;

    // Show the modal
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = "none";
}

function showNextImage() {
    if (currentProjectImages.length > 1) {
        currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
        document.getElementById('fullImage').src = currentProjectImages[currentImageIndex];
    }
}

function showPreviousImage() {
    if (currentProjectImages.length > 1) {
        currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        document.getElementById('fullImage').src = currentProjectImages[currentImageIndex];
    }
}

function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const responsiveIcon = document.querySelector('.responsive-icon');
    
    menuLinks.classList.toggle('open');
    responsiveIcon.classList.toggle('open');
}

const backToTopButton = document.getElementById('backToTop');


window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};


backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 50);
    });
    function handleSubmit(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name && email && message) {
            // Display the auto-response message
            document.getElementById('responseMessage').style.display = 'block';

            // Optionally, clear the form
            document.getElementById('contactForm').reset();
        }
    }
