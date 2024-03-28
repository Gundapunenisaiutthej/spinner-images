
    // JavaScript code for image spinner functionality
    const container = document.querySelector('.container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let rotationIndex = 0;

    prevButton.addEventListener('click', () => {
      rotationIndex--;
      rotateContainer();
    });

    nextButton.addEventListener('click', () => {
      rotationIndex++;
      rotateContainer();
    });

    function rotateContainer() {
      container.style.transform = `perspective(1400px) rotateY(${rotationIndex * -45}deg)`;
    }
