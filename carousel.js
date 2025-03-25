document.addEventListener('DOMContentLoaded', function() {
    // Get carousel elements
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Set up carousel
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Initialize carousel
    updateCarousel();
    
    // Event listeners for carousel buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    document.querySelector('.carousel').addEventListener('mouseenter', function() {
        clearInterval(autoSlide);
    });
    
    document.querySelector('.carousel').addEventListener('mouseleave', function() {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    // Carousel functions
    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Add fade-in animation to all images
    document.querySelectorAll('.img').forEach(image => {
        image.style.animation = 'fadeIn 1s ease';
    });
});