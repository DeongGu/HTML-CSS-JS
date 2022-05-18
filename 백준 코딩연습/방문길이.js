// const dirs = "ULURRDLLU"; (0,0)(0,1)(-1,1)(-1,2)(0,2)(1,2)(1,1)(0,1)(-1,1)(-1,2) 10 - 3 = 7
const dirs = "LULLLLLLU"; //(0,0)(-1,0)(-1,1)(-2,1)(-3,1)(-4,1)(-5,1)(-5,1)(-5,1)(-5,2) 10 - 2 = 8
// const dirs = "LRLRL";

function solution(dirs) {
  const move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };
  let check = new Set();
  let now = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    let nowX = now[0] + move[dirs[i]][0];
    let nowY = now[1] + move[dirs[i]][1];

    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    check.add("" + now[0] + now[1] + nowX + nowY);
    check.add("" + nowX + nowY + now[0] + now[1]);

    now = [nowX, nowY];
  }

  // return check.size / 2;
  console.log(check.size / 2);
}

solution(dirs);
