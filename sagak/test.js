let a=2
let b=5
let star = "";

for(let ix = 0; ix < b; ix++) {
    star = "";
    for(let iy = 0; iy < a; iy++) {
        star+="*";
    }
    console.log(star);
}

//문자열반복함수 repeat함수
const row = '*'.repeat(5)
console.log(row)
