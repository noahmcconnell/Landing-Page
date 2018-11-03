function contactNoah(){
  var data = {
    service_id: 'sendgrid',
    template_id: 'template_ZeNYFH5o',
    user_id: 'user_pF7I4OkKTtl1xFdPwZg3b',
    template_params: {
      'from_name':$('#name').val(),
      'from_phone':$('#phone').val(),
      'from_message':$('#message').val(),
      'from_email':$('#email').val(),   
    }
  }

  axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
