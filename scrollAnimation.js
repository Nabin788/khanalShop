// Add an event listener to the window to trigger on scroll
window.addEventListener('scroll', () => {
  // Select all elements within the 'why-khanal' section that need animations
  const elements = document.querySelectorAll('.why-khanal .left-des, .why-khanal .left-des1, .why-khanal .right-des, .why-khanal .right-des1');
  
  // Iterate over each selected element
  elements.forEach(element => {
    // Get the position of the element relative to the viewport
    const position = element.getBoundingClientRect();
    
    // Check if the element is fully visible within the viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      // Add the 'animate' class to trigger animations when the element is in view
      element.classList.add('animate');
    } else {
      // Remove the 'animate' class when the element is out of view
      element.classList.remove('animate');
    }
  });
});
