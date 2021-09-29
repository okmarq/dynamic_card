// business card: {
// 	edges: {
// 		rounded,
// 		straight
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
// 	design: {
// 		pattern,
// 		color
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
  $("button").click(function (event) {
    event.preventDefault();
    let edges = $("input[name='edges']:checked").val();
    if(edges == 'round') {
      $( "#front" ).addClass( "rounded-xl" );
      $( "#back" ).addClass( "rounded-xl" );
    }
    else if(edges == 'sharp') {
      $( "#front" ).removeClass( "rounded-xl" );
      $( "#back" ).removeClass( "rounded-xl" );
    }
  });
});