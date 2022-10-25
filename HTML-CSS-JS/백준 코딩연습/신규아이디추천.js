const new_id = "z-+.^.";

function solution(new_id) {
    let first = new_id.toLowerCase();
    let second = first.replace(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g,"");
    let third = second.replace(/\.\.+/g,".");
    let fourth = third.replace(/\\^.|\.$/g,"");
    if(fourth ===""){
        fourth += "a";
    }
    if(fourth.length >=16){
        fourth=fourth.slice(0,15);
    }
    let five = fourth.replace(/\.$/,"");
    if(five.length <=2){
        for(let i =0; i<4-five.length; i++){
            five+=five[five.length-1];
        }
    }
    return five;
}

solution(new_id);