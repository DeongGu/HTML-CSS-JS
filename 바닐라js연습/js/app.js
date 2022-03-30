document.title = "제목입니다만.."
// document.body.innerHTML = "짜잔"
// const contents = document.getElementById('contents');
// contents.innerText = "<strong>Welcome to DGW!!</strong>"
const contents = document.querySelector('#contents');
contents.innerHTML = "<h1>Welcome to DGW!!</h1>"

function colorChange(){
    let currentColor = contents.style.color;
    let newColor;
    if(currentColor === 'blue'){
        newColor = 'black';
    }else{
        newColor = 'blue';
    }
    contents.style.color = newColor;
}

contents.addEventListener('click', colorChange);