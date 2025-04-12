
$('#menu-toggle').click(function () {
  $('#nav-links').toggleClass('show');
});

$(window).on('scroll', function () {
    $('.fadeIn').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $(this).addClass('visible');
      }
    });
  });
  $(document).ready(function () {
    $(window).trigger('scroll');
  });

$(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
      e.preventDefault();
      const name = $("#name").val().trim();
      const email = $("#email").val().trim();
      const message = $("#message").val().trim();
      const statusMsg = $("#form-status");
  
      if (!name || !email || !message) {
        statusMsg.text("Please fill in all fields.").css("color", "#ff4d4d");
        return;
      }
  
      // Basic email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        statusMsg.text("Please enter a valid email address.").css("color", "#ff4d4d");
        return;
      }
  
      // Simulate success
      statusMsg.text("Thanks for reaching out! I’ll get back to you soon.").css("color", "#00ffc3");
      
      // Reset the form
      $(this).trigger("reset");
      $(".underline").width(0);
    });
  });
  

  $(document).ready(function () {
    let currentIndex = 0;
    const testimonials = $(".testimonial");
  
    function showTestimonial(index) {
      testimonials.removeClass("active").eq(index).addClass("active");
    }
  
    $(".next").click(function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    $(".prev").click(function () {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    // Optional: Auto-slide every 6s
    setInterval(function () {
      $(".next").click();
    }, 6000);
  });

  function sendToWhatsApp() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Encode the message to be URL safe
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp API URL with your phone number
    const phoneNumber = "+919344519152";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp URL
    window.open(whatsappURL, "_blank");
  }