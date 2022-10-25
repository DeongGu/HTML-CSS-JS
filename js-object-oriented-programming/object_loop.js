var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');
var i = 0;
while(i<memberArray.length){
    console.log(memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezche'
}
console.group('object loop');
for(var name1 in memberObject ){
    console.log(name1, memberObject[name1]);
}
console.groupEnd('object loop');


//배열 반복문
const brandArray = ['nike', 'adidas','samsung','logitech','yonex','apple'];
console.group('array loop');
for(let i =0; i<brandArray.length; i++){
    console.log(brandArray[i]);
}

while(true){
    console.log(brandArray);
    break;
}

let j = 0;
while(j < brandArray.length){
    console.log(j, brandArray[j]);
    j += 1;
}
console.groupEnd('array loop');

//객체 반복문
const brandObject = {
    IT: 'samsung',
    shoes: 'nike',
    trainning: 'adidas',
    'mouse': 'logetech',
    badminton: 'yonex'
}
console.group('object loop');

for(let key in brandObject){
    console.log(key);//IT shoes trainning mouse badminton
    console.log(key, brandObject.key);// key undefined
    console.log(key, brandObject[key]);// key value *************
    console.log(key, brandObject['key']); // key undefined
    console.log(key, brandObject[`${key}`]);// key value ***********
    console.log(key, brandObject[`${'key'}`]);// key undefined
}
console.groupEnd('object loop');
