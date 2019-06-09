
var accordion = document.querySelector('.accordion');
var contents = Array.from(accordion.querySelectorAll('.content-panel'));

accordion.addEventListener('click',
(event) => {
    var target = contents.find(el => el.id === 'c-'+event.srcElement.id);
    target.classList.toggle('active');
});

