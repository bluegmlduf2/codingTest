function solution(lottos, win_nums) {
    let winCnt=0
    let zeroCnt=0
    let answer=[]

    //로또당첨번호,0의수추출
    lottos.forEach(elem => {
        if(win_nums.includes(elem)){
            winCnt++  
        }else if(elem==0){
            zeroCnt++
        }
    });
    answer.push(getRanking(winCnt+zeroCnt))//최고순위
    answer.push(getRanking(winCnt))//최저순위
    return answer
}

//순위를 반환
function getRanking(num) {
    switch (num) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}

solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19])