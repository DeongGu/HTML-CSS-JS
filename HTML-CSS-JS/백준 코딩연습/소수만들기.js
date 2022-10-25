const nums = [1,2,7,6,4];

function solution(nums) {
    const result = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            for(let k =j+1; k<nums.length; k++){
                result.push([nums[i],nums[j],nums[k]]);
            }
        }
    }
    let reverseCount = 0;
    result.forEach(x=>{
       const resultSum = x.reduce((a,b) => a+b);
       for(let i = 2; i*i <= resultSum; i++){
            if(resultSum%i === 0){
                reverseCount++
                break;
            }
       }
    })
    return result.length - reverseCount;
}

solution(nums);