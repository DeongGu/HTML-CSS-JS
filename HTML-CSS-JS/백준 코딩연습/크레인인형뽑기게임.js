const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

function solution(board, moves) {
    //board에서 각 배열 요소의  0이 아닌 moves값의 순서를 추출
   
    let result = [];
    let answer = 0;
    let COUNT = 0;
    let j = 0;
    while(COUNT !== moves.length){
        for(let i = 0; i < board.length; i++){
            if(board[i][moves[j]-1] !== 0){
                result.push(board[i][moves[j]-1]);
                board[i][moves[j]-1] = 0;
                answer++;
                break;
            }
        }

        j++;        
        COUNT++;
    }
   
    //인접한 중복요소 제거, 반복되어야함
    let count = 0;

    while(count !== answer){
     result.forEach((x,idx) => {
        if(x === result[idx+1]){
            result.splice(idx,2);
        }   
    });
        count++;
    }

    return answer - result.length;
}

solution(board,moves);