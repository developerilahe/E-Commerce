document.addEventListener('DOMContentLoaded', function() {
    const modalDialog = document.querySelector('.modal-dialog');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.modal-close');
  
    function showModal() {
      modalDialog.style.opacity = '1';
      modalDialog.style.display = 'flex';
      modalDialog.style.zIndex = '10'; 
      modalDialog.style.visibility = 'visible';
      centerModal();
    }
  
    function hideModal() {
      modalDialog.style.opacity = '0';
      modalDialog.style.zIndex = '-1';
      modalDialog.style.visibility = 'hidden';
      // Delay setting display to 'none' to allow opacity transition
      setTimeout(() => {
        modalDialog.style.display = 'none';
      }, 300); // Match this timeout to your transition duration
    }
  
    function centerModal() {
      const windowHeight = window.innerHeight;
      const modalHeight = modalContent.offsetHeight;
      const topPosition = (windowHeight - modalHeight) / 2;
  
      modalContent.style.position = 'fixed';
      modalContent.style.left = '50%';
      modalContent.style.top = `${topPosition}px`; // Center vertically
      modalContent.style.transform = 'translate(-50%, 0)'; // Center horizontally
    }
  
    // Show modal initially after 1 second when the page loads
    setTimeout(showModal, 1000);
  
    // Repeat the modal display every 10 seconds
    setInterval(() => {
      showModal();; // Keep modal visible for 3 seconds
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
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const modalDialog = document.querySelector('.modal-dialog');
    const closeModal = document.querySelector('.modal-close');
  
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
  
  

  function zoomFunc() {
    const singleImage = document.querySelector("#single-image");
    const singleImageWrapper = document.querySelector(".single-image-wrapper");

    singleImageWrapper.addEventListener("mousemove", function (e) {
        const rect = singleImageWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to image wrapper
        const y = e.clientY - rect.top;  // Mouse Y relative to image wrapper

        // Set transform origin based on the mouse position within the image wrapper
        singleImage.style.transformOrigin = `${x}px ${y}px`;
        singleImage.style.transform = "scale(5)"; // Zoom level
    });

    singleImageWrapper.addEventListener("mouseleave", function () {
        // Reset to default when mouse leaves the image
        singleImage.style.transformOrigin = `center`;
        singleImage.style.transform = "scale(1)";
    });
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


function zoomFunc() {
  const singleImage = document.querySelector("#single-image");
  const singleImageWrapper = document.querySelector(".single-image-wrapper");

  singleImageWrapper.addEventListener("mousemove", function (e) {
      const rect = singleImageWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to image wrapper
      const y = e.clientY - rect.top;  // Mouse Y relative to image wrapper

      // Set transform origin based on the mouse position within the image wrapper
      singleImage.style.transformOrigin = `${x}px ${y}px`;
      singleImage.style.transform = "scale(5)"; // Zoom level
  });

  singleImageWrapper.addEventListener("mouseleave", function () {
      // Reset to default when mouse leaves the image
      singleImage.style.transformOrigin = `center`;
      singleImage.style.transform = "scale(1)";
  });
}

