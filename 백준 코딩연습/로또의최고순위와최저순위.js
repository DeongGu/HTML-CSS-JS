const lottos = [44,1,0,0,31,25];
const win_nums = [31, 10, 45, 1,6,19];

function solution(lottos, win_nums) {
    const rank = [6,6,5,4,3,2,1];
    let minRank = win_nums.filter(x => !lottos.includes(x));
    let zero = lottos.filter(x=> x===0);

    let result = [rank[win_nums.length - minRank.length+zero.length],rank[win_nums.length - minRank.length]];

    return result;
}

solution(lottos,win_nums);
