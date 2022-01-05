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