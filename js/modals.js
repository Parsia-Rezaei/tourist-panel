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


//   dcrease and increase 

$(`input.counter`).val(0);
$(`span.counter`).text(0);

$(".increase-button").click(function () {
  let id = $(this).attr("data-id");
  let element = $(`input.counter[data-id=${id}]`);
  let value = Number(element.val());

  element.val(value + 1);
  $(`span.counter[data-id=${id}]`).text(value + 1);
});
$(".decrease-button").click(function () {
  let id = $(this).attr("data-id");
  let element = $(`input.counter[data-id=${id}]`);
  let value = Number(element.val());
  if (value == 0) return;
  element.val(value - 1);
  $(`span.counter[data-id=${id}]`).text(value - 1);
});
$("[data-show-more]").click(function () {
  $(".reserve-box").removeClass("d-none");
  $(this).attr("disabled", true);
});
$("#more").click(function () {
  $("#sansList li").removeClass("hidden");
  $(this).addClass("hidden");
});

// customer information
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





  function checkTheValueOfModaIputs(){
    let modalInput = document.getElementsByClassName('fixed-modal-user-information__input');
    let inputError = document.getElementsByClassName('input-error');
    for(let i = 0 ; i < modalInput.length ; i++){
      modalInput[i].addEventListener("keydown" , () => {
        if(modalInput[i].value.length < 6){
          inputError[i].classList.remove('hidden');
          inputError[i].classList.remove('block');

        } else {
          inputError[i].classList.add('hidden');
          inputError[i].classList.remove('block');
        }
      })
    }
  }
  checkTheValueOfModaIputs();


  // final payment modal
  $(document).ready(function(){
    $('.final-payment-btn').click(() => {
      $('.final-payment-modal').removeClass('hidden');
    });
    $('.final-payment-modal__close-button').click(() => {
      $('.final-payment-modal').addClass('hidden');
    });
    $(document).mouseup(function (e) { 
      if ($(e.target).closest(".final-payment-modal").length 
                  === 0) { 
          $(".final-payment-modal").addClass('hidden'); 
      } 
  });
  })
