// const participant = ["leo", "kiki", "eden"];
// const completion = ["eden", "kiki"];

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

// const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// const completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
    let result = {};
    participant.map(x=> result[x]=0);
    participant.map(x=> result[x]+=1);
    completion.map(x => result[x]--);

    return Object.keys(result).filter(x => result[x] === 1)[0];
}

solution(participant, completion);