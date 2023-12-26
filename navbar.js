var clips = document.getElementById('clips');
var languages = document.getElementById('languages');
var contact = document.getElementById('contact');

clips.addEventListener('click', function() {
  $(clips).toggleClass("active");
  $(".parent:not(#clips)").toggleClass("invisible");
}, false);

languages.addEventListener('click', function() {
  $(languages).toggleClass("active");
  $(".parent:not(#languages)").toggleClass("invisible");
}, false);

contact.addEventListener('click', function() {
  $(contact).toggleClass("active");
  $(".parent:not(#contact)").toggleClass("invisible");
}, false);