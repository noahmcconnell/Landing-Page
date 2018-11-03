function contactNoah() {
  var valid = $("#validMessage");
  if ($("#name").val() === "") {
    valid.text("Name Required");
    valid.show();
    return;
  }
  if ($("#email").val() === "") {
    valid.text("Email Required");
    valid.show();
    return;
  }
  if ($("#phone").val() === "") {
    valid.text("Phone Required");
    valid.show();
    return;
  }
  if ($("#message").val() === "") {
    valid.text("Message Required");
    valid.show();
    return;
  }

  valid.text("")
  valid.hide()


  $("#sendMessageButton").prop("disabled", true);
  var data = {
    service_id: "sendgrid",
    template_id: "template_ZeNYFH5o",
    user_id: "user_pF7I4OkKTtl1xFdPwZg3b",
    template_params: {
      from_name: $("#name").val(),
      from_phone: $("#phone").val(),
      from_message: $("#message").val(),
      from_email: $("#email").val()
    }
  };

  axios
    .post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then(function(response) {
      $("#successMessage").show();
    })
    .catch(function(error) {
      $("#errorMessage").show();
    });
}
