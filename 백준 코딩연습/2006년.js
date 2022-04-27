const a = 5;
const b = 24;

function solution(a, b) {
    let date = new Date(2016, a-1, b);
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return day[date.getDay()];
}

solution(a, b);