function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 315; // Card width + gap
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}