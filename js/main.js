
const sidebarBtn = document.querySelector("#sidebar-btn");
const sidebar = document.querySelector('#sidebar');
const bgOverlay = document.querySelector(".bg-overlay");
sidebarBtn.addEventListener("click" , () => {
    sidebar.classList.add("active");
    bgOverlay.classList.add('active')
});
bgOverlay.addEventListener("click" , () => {
    sidebar.classList.remove('active');
    bgOverlay.classList.remove("active")
})

// sidebar adding active classes

// Get the current HTML file name from the URL
let currentPath = window.location.pathname.split("/").pop();


// Get all sidebar links
let sidebarLinks = document.querySelectorAll('.sidebar-link a');

// Loop through each link
sidebarLinks.forEach(link => {
  let linkPath = link.getAttribute('href');
  // console.log(linkPath);  
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

// change sidebar image profile
const sidebarProfileImage = document.querySelector(".sidebar-header img")
const changeSidebarImage = () => {
  const savedImage = localStorage.getItem('savedImage');
  if (savedImage) {
      sidebarProfileImage.src = savedImage;
  }
}
changeSidebarImage();


// navbar functionality 

$(window).ready(function () {
    var messageMenuInterval = null;
    $(".navbar-message-icon_button").click(function () {
      $(".navbar-message_dropdown").removeClass("hidden");
    });

    $(".navbar-message-icon_button,.navbar-message_dropdown").mouseenter(
      function () {
        clearTimeout(messageMenuInterval);
      }
    );
    $(".navbar-message-icon_button,.navbar-message_dropdown").mouseleave(
      function () {
        messageMenuInterval = setTimeout(function () {
          $(".navbar-message_dropdown").addClass("hidden");
        }, 700);
      }
    );
  });

// sroll back top top button

  let mybutton = document.getElementById("myScrollbackBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
        mybutton.classList.add('active');
    } else {
        mybutton.classList.remove('active');
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  


// open the profile secrion
$(window).ready(function () {
    var userMenuInterval = null;
    $("#user-menu-button").click(function () {
      $(".navbar-profile-dropdown_links").removeClass("hidden");
    });

    $(".navbar-profile-dropdown_links,#user-menu-button").mouseenter(function () {
      clearTimeout(userMenuInterval);
    });
    $(".navbar-profile-dropdown_links,#user-menu-button").mouseleave(function () {
      userMenuInterval = setTimeout(function () {
        $(".navbar-profile-dropdown_links").addClass("hidden");
      }, 700);
    });

    $("#sidebar-btn").click(function () {
      showSideNav();
    });
    $(".sidebar-wrapper").click(function () {
      hideSideNav();
    });

    function showSideNav() {
      $(".sidebar_fixed").removeClass("hidden").addClass("top-0");
    }

    function hideSideNav() {
      $(".sidebar_fixed").addClass("hidden").removeClass("top-0");
    }
    $(window).resize(function () {
      hideSideNav();
    });
    $("[data-input-text]").focus(function () {
      $(this)
        .siblings("label")
        .addClass(
          "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
        );
    });
    $("[data-input-text]").blur(function () {
      if ($(this).val().length == 0) {
        $(this)
          .siblings("label")
          .removeClass(
            "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
          );
      }
    });
    $("[data-input-text]").each(function () {
      if ($(this).val().length == 0) {
        $(this)
          .siblings("label")
          .removeClass(
            "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
          );
      } else {
        $(this)
          .siblings("label")
          .addClass(
            "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
          );
      }
    });
  });

// sidebar accordion buttons 
let accordionBtn = document.getElementsByClassName('sidebar-accordion-menu-btn');
let accordionMenu = document.getElementsByClassName('sidebar-accordion-box');
let accordionChevron = document.getElementsByClassName('sidebar-button__chevron-down');

  for(let i = 0 ; i < accordionBtn.length ; i++ ){
    accordionBtn[i].addEventListener('click' , function(){
      accordionMenu[i].classList.toggle('active');
      accordionChevron[i].classList.toggle('rotate-180');
    })
  }
  //  $(document).mouseup(function (e) { 
  //       if ($(e.target).closest(accordionMenu).length 
  //                   === 0) { 
  //           $(accordionMenu).removeClass('active'); 
  //           $(accordionChevron).removeClass('rotate-180');
  //       } 
  //   });




// main page modals 
function showMoreInfoModal() {
  $("#moreInfo").show();
  $("body").css("overflow", "hidden");
}
function hideMoreInfoModal() {
  $("#moreInfo").hide();
  $("body").css("overflow", "auto");
}
function showSansModal() {
  $("#selectSansModal").show();
  $("body").css("overflow", "hidden");
}
function hideSansModal() {
  $("#selectSansModal").hide();
  $("body").css("overflow", "auto");
}

function pushBuyBtn(e) {
  e.preventDefault();
  showUserInsertData();
  // showSansModal();
}

function showUserInsertData() {
  $("#userInsertDataModal").show();
  $("body").css("overflow", "hidden");
}
function hideUserInsertData() {
  $("#userInsertDataModal").hide();
  $("body").css("overflow", "auto");
}

function showSelectBank() {
  $("#selectBankModal").show();
  $("body").css("overflow", "hidden");
}
function hideSelectBank() {
  $("#selectBankModal").hide();
  $("body").css("overflow", "auto");
}
function showBasket() {
  $("#basket").show();
  $("body").css("overflow", "hidden");
}
function hideBasket() {
  $("#basket").hide();
  $("body").css("overflow", "auto");
}

// cutomer informatio modal 
$("[data-input-text]").focus(function () {
  $(this)
    .siblings("label")
    .addClass(
      "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
    );
});
$("[data-input-text]").blur(function () {
  if ($(this).val().length == 0) {
    $(this)
      .siblings("label")
      .removeClass(
        "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
      );
  }
});
$("[data-input-text]").each(function () {
  if ($(this).val().length == 0) {
    $(this)
      .siblings("label")
      .removeClass(
        "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
      );
  } else {
    $(this)
      .siblings("label")
      .addClass(
        "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
      );
  }
});

// faqs functionality
function faqsMenuOPenAndClose(){
  
  const faqBtn = document.querySelectorAll('.faqs-btn');
      for (let i = 0; i < faqBtn.length; i++) {
        faqBtn[i].addEventListener('click', function () {

          for (let j = 0; j < faqBtn.length; j++) {
            if (j !== i) {
              faqBtn[j].classList.remove('active');
            }
          }
          faqBtn[i].classList.toggle('active');
        });
      }
}
faqsMenuOPenAndClose();

// favs-list functions
function addToFavsList(){
  let favsBtn = document.querySelectorAll('.favs-list-btn')
  let favsIcon = document.querySelectorAll('.favs-icon')
    for(let i = 0 ; i < favsBtn.length ; i++){
      favsBtn[i].addEventListener('click' , function(){
          if(favsIcon[i].classList.contains('active')){
            favsIcon[i].classList.remove('active');
          } else{
            favsIcon[i].classList.add('active');
            Swal.fire({
              text: "به علاقه مندی ها اضافه گردید",
              icon: "success",
              toast: true,
              position:'top-end',
               timer: 2000,
               timerProgressBar: true,
               showConfirmButton:false,
            });
          }
        
      })
}
}
addToFavsList();

function addToTagedList(){
    
  let tagBtn = document.querySelectorAll(".tag-btn");
  let tagIcon = document.querySelectorAll(".tag-icon");
  let tagModal = document.querySelector('.tag-modal-container');
  for(let i = 0 ; i < tagBtn.length ; i++){
    tagBtn[i].addEventListener("click" , () => {
      if(tagIcon[i].classList.contains('active')){
        tagIcon[i].classList.remove("active");
      } else{ 
        tagModal.classList.add('active');
        tagIcon[i].classList.add('active');
        setTimeout(() => {
            tagModal.classList.remove('active');
        }, 2000);
      }
    });
  }
  }
  addToTagedList();


  // loader

  let loader = document.querySelector('.loader')

  window.addEventListener('load' , function(){
    loader.classList.add('hide');
  });

