$(document).ready(function(){
    $('.cancel-shopping').click(() =>{
      Swal.fire({
        title: "آیا مطمن هستید؟",
        text: "دیگر نمیتوانید موارد حذف شده رو برگردانید",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#38b000",
        cancelButtonColor: "#f21b3f",
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "سبد خرید حذف شد!",
            text: "سبد خرید شما خالی گردید",
            icon: "success",
            confirmButtonText:'باشه',
            confirmButtonColor:"#38b000",
          });
        } 
      });
    })
  })

