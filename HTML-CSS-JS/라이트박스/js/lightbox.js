const pics = document.querySelectorAll('.pic');
const lightBox = document.querySelector('#lightbox');
const lightBoxImage = document.querySelector('#lightboxImage');

for(let i = 0; i < pics.length; i++){
    pics[i].addEventListener('click',loading);
}
function loading(){
    let picImage = this.getAttribute("data-src");
    lightBoxImage.setAttribute("src", picImage);
    lightBox.style.display="block";
}
function closing(){
    lightBox.style.display="none";
}

lightBoxImage.addEventListener('click', closing);
// lightbox.onclick = function() {
//     lightBox.style.display = "none";
// }