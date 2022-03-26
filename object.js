var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
}
memberObject.designer = 'leezche';
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);

const brandArray = ['nike', 'adidas','samsung'];
console.log('brandArray[2]', brandArray[2]);


//객체 생성
const brandObject = {
    IT: 'samsung',
    shoes: 'nike',
    trainning: 'adidas',
    'mouse': 'logetech',
    badminton: 'lonex'
}

// 프로퍼티(키) 값 수정, 추가
brandObject.badminton = 'YONEX'; 
console.log(brandObject.badminton);

//배열과는 다른 객체에서 값을 불러오는 방법(.프로퍼티, ['프로퍼티'])
console.log('brandObject.IT', brandObject.IT);
console.log("brandObject['shoes']", brandObject['shoes']); // console.log("brandObject[shoes]", brandObject[shoes]);//ReferenceError: shoes is not defined

console.log(brandObject['trainning']);
console.log(brandObject);

// {mouse: } ,{'mouse': } 비교
console.log('brandObject.mouse', brandObject.mouse); // console.log("brandObject['mouse']",brandObject[mouse]); ReferenceError: mouse is not defined
console.log("brandObject['mouse']",brandObject['mouse']);

//객체 프로퍼티 삭제
delete brandObject.mouse;
console.log(brandObject);
// {
//     IT: 'samsung',
//     shoes: 'nike',
//     trainning: 'adidas',
//     badminton: 'YONEX'
// }