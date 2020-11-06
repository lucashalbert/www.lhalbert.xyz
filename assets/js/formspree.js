'use strict';

var $contactForm = $('#contact-form');
var $formInputs = $('#form-inputs');
var $formResults = $('#form-results');
var $formEndpoint = 'https://formspree.io/f/mbjpypnb';

$contactForm.submit(function(e) {
    e.preventDefault();
    var $submit = $('input:submit', $contactForm);
    var defaultSubmitText = $submit.val();

    $.ajax({
        url: $formEndpoint,
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $formResults.children('div').children('div').append('<div class="contact-form-alert--loading h3 text-center">Sending message...</div>')
        },
        success: function(data) {
            setTimeout(function() {
                $formInputs.addClass('hidden');
                $('.contact-form-alert--loading').remove();
                $('.contact-form-alert--error').remove();
                $formResults.children('div').children('div').append('<div class="contact-form-alert--success h3 text-center">Message Submitted!</div>')
            }, 1000);
        },
        error: function(err) {
            $('.contact-form-alert--loading').remove();
            $formResults.children('div').children('div').append('<div class="contact-form-alert--error h3 text-center">There was an error sending the message.</div>')
            setTimeout(function() {
                $('.contact-form-alert--loading').remove();
            }, 2000);
        }
    });
});
