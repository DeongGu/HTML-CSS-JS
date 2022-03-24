solution();

function solution() {
    const orginArray =[];
    const minus=[];

    for(let i =1; i<10000; i++){
        orginArray.push(i);
    }
    for(let i = 1; i<10000; i++){
        let n = String(i).split('').map((item)=>+item);
        let a = 0;
        for(let j = 0; j<n.length; j++){
            a += n[j];
        }
        let b = i + a;
        if(b<10000){
            minus.push(b);
        }
        
    }
    let answer = orginArray.filter(n => !minus.includes(n));
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}