
var btnclose = document.querySelector('.close');
var images = document.querySelectorAll('.image img');
var btnPrev = document.querySelector('.prev');
var galleryImage = document.querySelector('.gallert-inner img') 

var btnNext = document.querySelector('.next');
var gallery = document.querySelector('.gallery');

console.log(images);

var currentIndex = 0;

function showGallery() {
    if(currentIndex === 0) {
        btnPrev.classList.add('hide')
    }else if(currentIndex === images.length-1){
        btnNext.classList.add('hide')
    }else {
        btnPrev.classList.remove('hide');
        btnNext.classList.remove('hide');
    }
    galleryImage.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        currentIndex = index;
        console.log(currentIndex);
        showGallery();
    })
   
})

btnclose.addEventListener('click',()=>{
    gallery.classList.remove('show');
})

document.addEventListener('keydown', (e)=>{
    if(e.keyCode === 27){
        gallery.classList.remove('show');
    }
})

btnPrev.addEventListener('click', ()=>{
   if(currentIndex > 0) {
        currentIndex--;
        showGallery();
   }
    
})

btnNext.addEventListener('click', () => {
   if(currentIndex < images.length-1){
        currentIndex++
        showGallery();
   }
})