// const n = 5;
// const arr1 = [9,20,28,18,11];
// const arr2 = [30,1,21,17,28];

const n = 6
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

//비트연산자 논리합
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'));
console.log(solution(n,arr1,arr2));

//수동 풀이 (toString() 학습 필요함)
function solution(n, arr1, arr2) {
    let result = [];
    let newArr1 =[];
    let newArr2 = [];

    arr1.forEach((element,idx) => {
        arr1[idx] ="";
        while(element/2 !== 0){
            arr1[idx] += String(element%2);
            element = Math.floor(element/2);
        }
        newArr1.push(arr1[idx].split("").reverse().join(""));
    });

    arr2.forEach((element,idx) => {
        arr2[idx] ="";
        while(element/2 !== 0){
            arr2[idx] += String(element%2);
            element = Math.floor(element/2);
        }
        newArr2.push(arr2[idx].split("").reverse().join(""));
    });

    newArr1.map((x,idx)=> result.push((+x)+(+newArr2[idx])));

    let answer = [];
    result.map(x=> answer.push(String(x).padStart(n,"0")));
    for(let i = 0; i<n; i++){
        let count = 0;
        while(count !== n){
            answer[i] = answer[i].toString().replace("1","#");
            answer[i] = answer[i].toString().replace("2","#");
            answer[i] = answer[i].toString().replace("0"," ");
            count++;
        }
    }

    return answer;
}


solution(n,arr1,arr2);