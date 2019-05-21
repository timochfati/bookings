function sendMail(contactForm){
 emailjs.send("gmail","bookings", {
     "from_name":contactForm.name.value,
     "from_email":contactForm.email.value,
     "booking_request":contactForm.message.value
 })   
  .then(

        function(response) {

            console.log("SUCCESS", response);

        },

        function(error) {

            console.log("FAILED", error);

        }

    );

    return false;  


}