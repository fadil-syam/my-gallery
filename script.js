const details = document.querySelector('.ddil')

const container = document.querySelector('.container');

const hello = document.querySelector('.hello');
const aKosong = document.querySelector('.aKosong');
const divKosong = document.querySelector('.divKosong');

details.addEventListener('click', function () {
    hello.classList.toggle('percobaan')

    aKosong.classList.toggle('aKosong-toggle')

    divKosong.classList.toggle('divKosong-toggle')

    container.classList.toggle("hidden")

});

const details2 = document.querySelector('.ddil2')
const kosong2 = document.querySelector('.kosong2')

details2.addEventListener('click', function (e) {
    kosong2.classList.toggle('hidden');
    container.classList.toggle("hidden")
})