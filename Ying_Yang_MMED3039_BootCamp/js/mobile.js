(() => {

    //------------ Our Team Section Mobile------------
    
    const slide = document.querySelector(".slide");
    const professionals = document.querySelectorAll(".professional");
    const nextButton = document.querySelector(".arrowRight");
    const prevButton = document.querySelector(".arrowleft");
    
    // arrange the slides next to one another
    const slideWidth = professionals[0].getBoundingClientRect().width;
    
    professionals.forEach( (professional, index) => {
        professional.style.left = slideWidth * index + "px";
    });
    
    const moveToSlide = (slide, currentSlide, targetSlide) => {
        slide.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current');
        targetSlide.classList.add('current');
    }
    
    // click left, move slides to left
    prevButton.addEventListener('click', e => {
        const currentSlide = slide.querySelector('.current');
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlide(slide, currentSlide, prevSlide);
    
    
    });
    
    // click righ, move slides to right
    nextButton.addEventListener("click", e => {
       const currentSlide = slide.querySelector('.current');
       const nextSlide = currentSlide.nextElementSibling;
    
       moveToSlide(slide, currentSlide, nextSlide);
    
    })
})();