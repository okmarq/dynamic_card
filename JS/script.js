$(function() {
  $("input[name='edges']").click(function () {
    let edge = $("input[name='edges']:checked").val();
    if(edge == 'round') {
      $( "#front" ).addClass( "rounded-xl" );
      $( "#back" ).addClass( "rounded-xl" );
    }
    else if(edge == 'sharp') {
      $( "#front" ).removeClass( "rounded-xl" );
      $( "#back" ).removeClass( "rounded-xl" );
    }
  });
  $("input[name='front_bg_color']").change(function () {
    let front_bg_color = $("input[name='front_bg_color']").val();
    $( "#front" ).css("background-color", front_bg_color);
  });
  $("input[name='back_bg_color']").change(function () {
    let back_bg_color = $("input[name='back_bg_color']").val();
    $( "#back" ).css("background-color", back_bg_color);
  });
  $("input[name='front_color']").change(function () {
    let front_color = $("input[name='front_color']").val();
    $( "#front" ).css("color", front_color);
  });
  $("input[name='back_color']").change(function () {
    let back_color = $("input[name='back_color']").val();
    $( "#back" ).css("color", back_color);
  });
  $("input[name='qrcode']").click(function () {
    let qrcode = $("input[name='qrcode']:checked").val();
    if(qrcode == 'qr_no') {
      $( "#qr_code" ).addClass( "hidden" );
      $( "#qr_position" ).addClass( "hidden" );
    }
    else if(qrcode == 'qr_yes') {
      $( "#qr_code" ).removeClass( "hidden" );
      $( "#qr_position" ).removeClass( "hidden" );
    }
  });
  $("input[name='qrpos']").click(function () {
    let qrcode = $("input[name='qrpos']:checked").val();
    if(qrcode == 'qr_top') {
      $( "#qr_code" ).addClass( "self-start" );
      $( "#qr_code" ).removeClass( "self-center" );
      $( "#qr_code" ).removeClass( "self-end" );
    }
    else if(qrcode == 'qr_center') {
      $( "#qr_code" ).removeClass( "self-start" );
      $( "#qr_code" ).addClass( "self-center" );
      $( "#qr_code" ).removeClass( "self-end" );
    }
    else if(qrcode == 'qr_bottom') {
      $( "#qr_code" ).removeClass( "self-start" );
      $( "#qr_code" ).removeClass( "self-center" );
      $( "#qr_code" ).addClass( "self-end" );
    }
  });
  $("#logo_input").change(function () {
    const file = this.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        $("#logo_img").attr('src', event.target.result);
        $("#logo_front").removeClass("border border-black");
      };
      reader.readAsDataURL(file);
    }
  });
  $("#company_name_input").keyup(function () {
    let company_name = $(this).val();
    if (company_name != '') {
      $("#company_name_front").text(company_name);
      $("#company_name_front").removeClass("border border-black");
    } else {
      $("#company_name_front").text('');
      $("#company_name_front").addClass("border border-black");
    }
  });
  $("#tagline_input").keyup(function () {
    let tagline = $(this).val();
    if (tagline != '') {
      $("#tagline_front").text(tagline);
      $("#tagline_front").removeClass("border border-black");
    } else {
      $("#tagline_front").text('');
      $("#tagline_front").addClass("border border-black");
    }
  });
  $("#websitename_input").keyup(function () {
    let websitename = $(this).val();
    if (websitename != '') {
      $("#websitename_front").text(websitename);
      $("#websitename_front").removeClass("border border-black");
    } else {
      $("#websitename_front").text("");
      $("#websitename_front").addClass("border border-black");
    }
  });
  $("#holder_name_input").keyup(function () {
    let holder_name = $(this).val();
    if (holder_name != '') {
      $("#holder_name_back").text(holder_name);
      $("#holder_name_back").removeClass("border border-black");
    } else {
      $("#holder_name_back").text("");
      $("#holder_name_back").addClass("border border-black");
    }
  });
  $("#position_input").keyup(function () {
    let holder_name = $(this).val();
    if (holder_name != '') {
      $("#position_back").text(holder_name);
      $("#position_back").removeClass("border border-black");
    } else {
      $("#position_back").text("");
      $("#position_back").addClass("border border-black");
    }
  });
  $("#tel_input").keyup(function () {
    let holder_name = $(this).val();
    if (holder_name != '') {
      $("#tel_back").text(holder_name);
      $("#tel_back").removeClass("border border-black");
    } else {
      $("#tel_back").text("");
      $("#tel_back").addClass("border border-black");
    }
  });
  $("#email_input").keyup(function () {
    let holder_name = $(this).val();
    if (holder_name != '') {
      $("#email_back").text(holder_name);
      $("#email_back").removeClass("border border-black");
    } else {
      $("#email_back").text("");
      $("#email_back").addClass("border border-black");
    }
  });
  $("#address_input").keyup(function () {
    let holder_name = $(this).val();
    if (holder_name != '') {
      $("#address_back").text(holder_name);
      $("#address_back").removeClass("border border-black");
    } else {
      $("#address_back").text("");
      $("#address_back").addClass("border border-black");
    }
  });

  let qrcode = new QRCode("qr_code", {
    width: 100,
    height: 100,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

  $("#generateQRCode").click(function (){
    let qrText = $("#websitename_input").val();
    if (qrText == '') {
      $("#qr_code").removeClass("border border-black");
      alert("you need to input your website url to generate a QR code");
      return;
    }
    qrcode.makeCode(qrText);
    $("#qr_code").addClass("border border-black");
  });

  $("button").click(function (event) {});
});