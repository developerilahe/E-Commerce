document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const modalSearch = document.querySelector('.modal-search');
    const closeSearch = document.getElementById('close-search');
  

    function openModal() {
      modalSearch.style.display = 'flex';
    }

    function closeModal() {
      modalSearch.style.display = 'none';
    }
  
    searchButton.addEventListener('click', openModal);
    closeSearch.addEventListener('click', closeModal);
  });
  

  function openModal() {
    console.log('Opening Modal');
    modalSearch.style.display = 'flex';
  }
  
  function closeModal() {
    console.log('Closing Modal');
    modalSearch.style.display = 'none';
  }


  
  document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const modalSearch = document.querySelector('.modal-search');
    const closeSearch = document.getElementById('close-search');
  
    function openModal() {
      modalSearch.style.display = 'flex'; // Flexbox kullanarak ortalanmış modal'i göster
      document.body.classList.add('no-scroll'); // Sayfanın kaymasını engelle
    }

    searchButton.addEventListener('click', function() {
      modalSearch.style.display = 'flex';
      document.body.classList.add('no-scroll');
      centerModal(); 
    });
    closeSearch.addEventListener('click', function() {
      modalSearch.style.display = 'none';
      document.body.classList.remove('no-scroll');
    });

    window.addEventListener('resize', centerModal);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get the modal and modal wrapper elements
    const modalSearch = document.querySelector('.modal-search');
    const modalWrapper = document.querySelector('.modal-wrapper');


    modalSearch.addEventListener('click', function(event) {
        if (!modalWrapper.contains(event.target)) {
            modalSearch.style.display = 'none';
        }
    });

    const closeSearch = document.getElementById('close-search');
    closeSearch.addEventListener('click', function() {
        modalSearch.style.display = 'none';
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.slider-dot');
const totalSlides = slides.length;
let slideInterval;

function showSlide(slideIndex) {
  // Update the active slide
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });

  // Update the active dot
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === slideIndex) {
      dot.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function plusSlide(direction) {
  if (direction === 1) {
    prevSlide();
  } else if (direction === -1) {
    nextSlide();
  }
  resetSlideInterval();
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

// On dot click, go to the corresponding slide
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetSlideInterval();
  });
});

// Attach event listeners to the buttons
document.querySelector('.slider-buttons button:nth-of-type(1)').addEventListener('click', () => plusSlide(-1));
document.querySelector('.slider-buttons button:nth-of-type(2)').addEventListener('click', () => plusSlide(1));

// Initialize the slide show and interval
showSlide(currentSlide);
slideInterval = setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', function() {

  const modalSearch = document.querySelector('.pop-up');

  const closeSearch = document.getElementById('close-button');

  function openModal() {
    console.log('Opening Modal');
    modalSearch.style.display = 'block';
    document.body.classList.add('no-scroll');
    centerModal();
  }

  function closeModal() {
    console.log('Closing Modal');
    modalSearch.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }


  // Open the modal 2 seconds after the page loads
  setTimeout(openModal, 2000);

  // Close the modal after 3 seconds and set it to reopen every 10 seconds
  setTimeout(function() {
    closeModal();
    setInterval(openModal, 10000); // Open the modal every 10 seconds
  }, 2000);

  // Event listeners
  searchButton.addEventListener('click', openModal);
  closeSearch.addEventListener('click', closeModal);

  window.addEventListener('resize', centerModal);

  modalSearch.addEventListener('click', function(event) {
    if (!modalWrapper.contains(event.target)) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.querySelector('.search-button');
  const modalSearch = document.querySelector('.modal-search');
  const closeSearch = document.getElementById('close-search');
  
  function openModal() {
    console.log('Opening Modal');
    modalSearch.style.display = 'flex';
    document.body.classList.add('no-scroll');
  }
  
  function closeModal() {
    console.log('Closing Modal');
    modalSearch.style.display = 'none'; // Modal'i gizle
    document.body.classList.remove('no-scroll');
  }
  
  searchButton.addEventListener('click', openModal);
  closeSearch.addEventListener('click', closeModal);
  
  // Modal dışına tıklanınca kapanmasını sağla
  modalSearch.addEventListener('click', function(event) {
    if (!modalWrapper.contains(event.target)) {
      closeModal();
    }
  });
  
  // Modal'ı aç ve kapatmak için kullanılan diğer fonksiyonlar
  // (Bu kısımlarda `display: block;` olan yerlere `display: flex;` ekleyin)
  
  function showModal() {
    modalDialog.style.opacity = '1';
    modalDialog.style.display = 'flex'; // Flexbox kullanarak modal'i göster
    modalDialog.style.zIndex = '10';
    modalDialog.style.visibility = 'visible';
    centerModal();
  }
  
  function hideModal() {
    modalDialog.style.opacity = '0';
    modalDialog.style.zIndex = '-1';
    modalDialog.style.visibility = 'hidden';
    setTimeout(() => {
      modalDialog.style.display = 'none'; // Modal'i gizle
    }, 300); // Transition süresine uygun zaman
  }
  
  function showModal() {
    modalDialog.classList.add('show');
    centerModal(); // Center the modal when shown
  }
  
  function hideModal() {
    modalDialog.classList.remove('show');
  }


  function centerModal() {
      const windowHeight = window.innerHeight;
      const modalContent = document.querySelector('.modal-content');
      const modalHeight = modalContent.offsetHeight;
      const topPosition = (windowHeight - modalHeight) / 2;

      modalContent.style.top = `${topPosition}px`;
      modalContent.style.left = '50%';
      modalContent.style.transform = 'translate(-50%, 0)';
  }

  // Show modal initially after 1 second when the page loads
  setTimeout(showModal, 1000);

  // Repeat the modal display every 10 seconds
  setInterval(() => {
      showModal();
  }, 10000);

  // Hide the modal when clicking outside of the modal content
  modalDialog.addEventListener('click', (event) => {
      if (event.target === modalDialog) {
          hideModal();
      }
  });

  // Hide the modal when clicking the close button
  closeModal.addEventListener('click', hideModal);

  // Adjust modal position on window resize
  window.addEventListener('resize', centerModal);
});

// Make sure the function is called when the DOM is ready
document.addEventListener("DOMContentLoaded", zoomFunc);


var checkbox = document.querySelector('shop.html');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}


document.addEventListener('DOMContentLoaded', function() {
  const productImages = document.querySelectorAll('.product-image');

  productImages.forEach(productImage => {
      const img1 = productImage.querySelector('.img1');
      const img2 = productImage.querySelector('.img2');

      // Ensure img1 is visible and img2 is hidden initially
      img1.style.opacity = '1';
      img2.style.opacity = '0';

      productImage.addEventListener('mouseover', function() {
          img1.style.opacity = '0';
          img2.style.opacity = '1';
      });

      productImage.addEventListener('mouseout', function() {
          img1.style.opacity = '1';
          img2.style.opacity = '0';
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const productImages = document.querySelectorAll('.product-wrapper .product-image');

  productImages.forEach(productImage => {
      const img1 = productImage.querySelector('.img1');
      const img2 = productImage.querySelector('.img2');

      // Ensure img1 is visible and img2 is hidden initially
      img1.style.opacity = '1';
      img2.style.opacity = '0';
      img2.style.transition = 'opacity 0.5s ease';  // Smooth transition for img2
      img1.style.transition = 'opacity 0.5s ease';  // Smooth transition for img1

      // Hover event to switch images
      productImage.addEventListener('mouseover', function() {
          img1.style.opacity = '0';
          img2.style.opacity = '1';
      });

      productImage.addEventListener('mouseout', function() {
          img1.style.opacity = '1';
          img2.style.opacity = '0';
      });
  });
});

