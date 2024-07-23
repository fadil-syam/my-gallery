const body = document.querySelector('body');
const container = document.querySelector('.thumbContainer');
const containerChild = document.querySelector('.containerChild');
const parentThumb = document.querySelector('.parentThumb')

const parentPic = document.querySelector('.parents');

let thumbnail = document.querySelectorAll('.thumbnail');
let thumb = document.querySelectorAll('.thumb');

body.addEventListener('click', function(e) {
    if(e.target.className == 'thumbnail') {
        parentPic.src = e.target.src; 
        parentPic.classList.add('fade');
        container.classList.toggle('hidden');
        parentThumb.classList.toggle('hidden')

        setTimeout(function() {
            parentPic.classList.remove('fade');
        }, 500);

        thumbnail.forEach(function(thumbnail) {

            thumbnail.className = 'thumbnail';

        });

        e.target.classList.add('active');
    }
})