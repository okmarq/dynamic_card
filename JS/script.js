// business card: {
// 	edges: {
// 		rounded,
// 		straight
// 	},
// 	design: {
// 		pattern,
// 		color
// 	},
// 	qr_code: {
// 		true,
// 		false
// 	},
// 	inputs: {
// 		logo,
// 		company_name,
// 		tagline,
// 		websitename,
// 		card_holder_name,
// 		position,
// 		description,
// 		address,
// 		email,
// 		tel,
// 	},
// }
// dimensions 2.5 x 2 inches to pixels 240 x 192 pixels
// const axios = require('axios').default;

// const form = document.getElementById('card');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // handle the form data
// });
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
  
  $("input[name='front_color']").change(function () {
    let front_color = $("input[name='front_color']").val();
    $( "#front" ).css("background-color", front_color);
  });
  $("input[name='back_color']").change(function () {
    let back_color = $("input[name='back_color']").val();
    $( "#back" ).css("background-color", back_color);
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
  
  $("#company_name_input").keyup(function () {
    let company_name = $(this).val();
    $("#company_name_front").text(company_name);
  });

  $("button").click(function (event) {
    event.preventDefault();
    let logo = $("#logo_input").val(),
    tagline = $("#tagline_input").val(),
    websitename = $("#websitename_input").val(),
    card_holder_name = $("#holder_name_input").val(),
    position = $("#position_input").val(),
    description = $("#description_input").val(),
    address = $("#address_input").val(),
    email = $("#email_input").val(),
    tel = $("#tel_input").val();
    
    if(qr_position) {
      // apply hidden class to pisition
      if (qr_yes) {
        // apply hidden class to pisition
      } else if(qr_no) {
        // apply hidden class to pisition
      }
    }
    if(logo) {
      // remove hidden class
      // apply input to screen
    }
    if(company_name) {
      // remove hidden class
      // apply input to screen
    }
    if(tagline) {
      // remove hidden class
      // apply input to screen
    }
    if(websitename) {
      // remove hidden class
      // apply input to screen
    }
    if(card_holder_name) {
      // remove hidden class
      // apply input to screen
    }
    if(position) {
      // remove hidden class
      // apply input to screen
    }
    if(description) {
      // remove hidden class
      // apply input to screen
    }
    if(address) {
      // remove hidden class
      // apply input to screen
    }
    if(email) {
      // remove hidden class
      // apply input to screen
    }
    if(tel) {
      // remove hidden class
      // apply input to screen
    }
  });
});