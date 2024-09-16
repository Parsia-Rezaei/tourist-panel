// Select elements
 const imageInput = document.getElementById('chooseProfile');
 const displayImage = document.querySelector('.profile-image');
//  const sidebarProfileImage = document.querySelector(".sidebar-header img");

 // Function to display image from file input
 function displayImageFromFile(file) {
     const reader = new FileReader();
     reader.onload = function(e) {
         const imageUrl = e.target.result;
         displayImage.src = imageUrl;
         // Save the image URL in localStorage
         localStorage.setItem('savedImage', imageUrl);
     };
     reader.readAsDataURL(file);
     window.location.reload()
 }

 // When the file input changes (image is uploaded)
 imageInput.addEventListener('change', function() {
     const file = imageInput.files[0];
     if (file) {
         displayImageFromFile(file);
     }
 });

 // Check if there's a saved image in localStorage when page loads
 window.addEventListener('load', function() {
     const savedImage = localStorage.getItem('savedImage');
     if (savedImage) {
         displayImage.src = savedImage;
     }
 });

