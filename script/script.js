// popup signup

$('#pop-up').hide(0);
$('#pop-up-container').hide(0);

$('#pop-up-button').click(function(){
  $('#pop-up-container').show(0);
  $('#pop-up').fadeIn(300);
  $('#pop-up-button').hide(0);
});
$('#pop-up span').click(function() {
  $('#pop-up-container').hide(0);
  $('#pop-up').hide(0);
  $('#pop-up-button').show(0);
});

//popup login


$('#pop-uplogin').hide(0);
$('#pop-up-container').hide(0);

$('#pop-up-buttonlogin').click(function(){
  $('#pop-up-container').show(0);
  $('#pop-uplogin').fadeIn(300);
  $('#pop-up-buttonlogin').hide(0);
});
$('#pop-uplogin span').click(function() {
  $('#pop-up-container').hide(0);
  $('#pop-uplogin').hide(0);
  $('#pop-up-buttonlogin').show(0);
});



// get location

  // This example displays an address form, using the autocomplete feature
    // of the Google Places API to help users fill in the information.
var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initialize() {
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */
            (document.getElementById('autocomplete')), {
                types: ['geocode']
            });
        // When the user selects an address from the dropdown,
        // populate the address fields in the form.
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            fillInAddress();
        });
    }
    // [START region_fillform]

function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        for (var component in componentForm) {
            document.getElementById(component).value = '';
            document.getElementById(component).disabled = false;
        }
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];
                document.getElementById(addressType).value = val;
            }
        }
    }
    // [END region_fillform]
    // [START region_geolocation]
    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.

function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var geolocation = new google.maps.LatLng(position.coords
                    .latitude, position.coords.longitude);
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
	
//error

$(".errormsg").hide();
$(".triangle").hide();


$(function () {
	$('#signupBtn').click(function() {
	   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})7&/;	
	   var pswd = $('#password').val();
	   var errors= false;
	   if($('#firstname').val() == "") {
		   $('.wrongname').html("Add name");
		   errors= true;
	   }
	   if($('#lastname').val() == "") {
		   $('.wronglastname').html("Add name");
		   errors = true;
	   }
	   if($('#autocomplete').val() == "") {
		   $('#wronglocation').html("Add city");
		   errors = true;
	   }
	   
	   if( pswd.length < 6 ) {
		   $('.passwronginfo').html("Enter a valid password");
		   $('#passworderror').html("(min 6 characters letters and numbers only)");
		   errors = true;
	   }
	   if($('#passwordrepeat').val() !== $('#password').val() ) {
		   $('#repeatwrong').html("Password do not match");
		   errors = true;
	   }
	   
	  
	   
	   if(errors == true){
		   $(".errormsg").show();
		   $(".triangle").show();
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});
});

$(function () {
	$('#submitBtn').click(function() {
	   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})7&/;	
	   var errors= false;
	   if($('#passwordlogin').val() == "") {
		   $('.wronglog').html("Wrong email adress or password. try again!");
		   errors= true;
	   }
	   if(errors == true){
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});
});
 	
	
//error for log
   
//email validation


(function() {
  $(function() {
    var validate, validateEmail;
    validateEmail = function(email) {
      var emailReg;
      emailReg = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\"\.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailReg.test(email);
    };
    validate = function() {
      var email;
      email = $("#emaillogin").val();
      if (validateEmail(email)) {
        return true;
      } else {
        $(".wronglog").html("Wrong email adress or password. try again!");
      }
      return false;
    };
    $("#frmContact").bind("submit", validate);
    return validateEmail();
  });

}).call(this);



///sign up email validation
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
$("#signupBtn").click(function(e){
  var $email = $("#email").val();
  if(validateEmail($email)){
    //alert("Valid email!");
    return true;
  }else{
    //alert("Invalid email!");
    $("#wrongemail").html("Enter a valid email adress");
  }
  
  $("wrongemail").fadeIn(1500).css("display","block").delay(2000).fadeOut(500);
  e.preventDefault();
});






