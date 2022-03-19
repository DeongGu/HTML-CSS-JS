const NAME = "문자열";
const letter =`length 속성은 ${NAME} 안의 코드 유닛 수를 반환합니다.
JavaScript가 사용하는 ${NAME} 형식인 UTF-16은 대부분의 일반적인 문자를 표현하기 위해
하나의 16비트 코드 유닛을 사용합니다.반면, 덜 쓰이는 문자를 표현하기 위해 2개의 코드
유닛을 사용해야 할 때도 있으므로 ${NAME} 내에 있는 문자들의 실제 총 숫자가 length 속성이
반환하는 숫자와 일치하지 않을 수 있습니다.ECMAScript 2016 7판은 최대 길이를 2^53 - 1로
설정했습니다. 이전엔 명시된 최대 길이가 없었습니다. 빈 ${NAME}은 length가 0입니다.
정적 속성 String.length는 1을 반환합니다.`;
console.log(letter);
