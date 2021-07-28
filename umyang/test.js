function solution(absolute, sign) {
    var answer;

    answer=absolute.reduce((pre,cur,idx)=>{
        //0번째의 previous값을 음수처리 
        if(idx==1&&sign[idx-1]==false){
            pre=pre*-1
        }
        //다음값을 음수처리
        if(sign[idx]==false){
            cur=cur*-1
        }
        return pre+cur
    })    
    
    return answer;
}
solution([1,2,3],[false,false,true])



//참고할 풀이
let answer = 0;
absolutes.forEach((v, i) => {
    if (signs[i]) {
        answer += v;
    } else {
        answer -= v;
    }
})
return answer;
//solution([4,7,12],[true,false,true])