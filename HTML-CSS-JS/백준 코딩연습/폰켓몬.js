const nums = [3,1,2,3];

function solution(nums) {
    const set = new Set(nums);
    const answer = [...set];

    if(answer.length>nums.length/2){
        return nums.length/2;
    }else{
        return answer.length;
    }
}