$(window).scroll(function () {
  if (this.scrollY > 40) {
    $(".header").addClass("header_fixed");
  } else {
    $(".header").removeClass("header_fixed");
  }
});

//click Dang ky ngay
$(".btnDangKy").click(function (e) {
  e.preventDefault();

  $("html, body").animate(
    { scrollTop: findPos(document.querySelector(".contact")) - 80 },
    "slow"
  );
});

//Finds y value of given object
function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}

//check submit form

//click Dang ky ngay
$(".sunmit-form").click(function (e) {
  let check = 1;
  e.preventDefault();
  const phone = document.querySelector("#pname");
  var phoneRex = /^[0-9]{10}$/;
  if (phone.value.match(phoneRex)) {
  } else {
    document.querySelector(".erro-phone").innerHTML =
      "Số điện thoại phải có 10 chữ số.";
      check = 0;
  }

  //check mail
  const mail = document.querySelector("#ename");
  const maiRex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(mail.value);
  if (mail.value.match(maiRex)) {
  } else {
    document.querySelector(".erro-mail").innerHTML = "Email không đúng định dạng";
    check = 0;
  }

  //check name
  const name = document.querySelector("#fname").value.trim();
  console.log(name);
  if(name.length === 0){
    document.querySelector(".erro-name").innerHTML = "Tên không được để trống.";
    check = 0;
  }

  //kiem tra checked
  if(document.querySelector(".radiocheckbox1").checked === false && document.querySelector(".radiocheckbox2").checked === false ){
    check = 0;
    alert("Bạn chưa chọn khóa học.")
  }
 

  if(check === 1){
    //dang ky thanh cong
    document.querySelector("#pname").value="";
    document.querySelector("#ename").value = "";
    document.querySelector("#fname").value = "";
    alert("Chúc mừng bạn đăng ký khóa học thành công!!")
  }
});

$("#pname").focus(function (e) {
  e.preventDefault();
  document.querySelector("#pname").innerHTML = "";
  document.querySelector(".erro-phone").innerHTML = "";
});
$("#ename").focus(function (e) {
  e.preventDefault();
  document.querySelector(".erro-mail").innerHTML = "";
  document.querySelector("#ename").innerHTML = "";
});

$("#fname").focus(function (e) {
  e.preventDefault();
  document.querySelector(".erro-name").innerHTML = "";
 
});

// //event  check radio

$('input[type=radio][name=course]').change(function() {

  if (this.value == 1) {
    document.querySelector(".one__year").classList.add("active")
    document.querySelector(".forever").classList.remove("active")
  }else if (this.value == 2) {
    document.querySelector(".one__year").classList.remove("active")
    document.querySelector(".forever").classList.add("active")

  }

});
// -----------------------------------------
$(document).ready(function() {
  $("label").on("click", function(e) {
    e.preventDefault();

    var $radio = $("#" + $(this).attr("for")),
      name = $radio.attr("name"),
      hasRadio = $radio.attr("type") == "radio";
    if (!hasRadio) return;
    if ($radio.data("is-checked") == true) {
      $radio.prop("checked", false).change();
      $radio.data("is-checked", false);
    } else {
      $radio.data("is-checked", true);
      $radio.prop("checked", true).change();
    }
    $('input[type="radio"][name="' + name + '"]')
      .not("#" + $(this).attr("for"))
      .data("is-checked", false);
  });
});


