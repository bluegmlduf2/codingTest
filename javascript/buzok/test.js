function solution(price, money, count) {
    var answer = 0;
    let total=0;
    
    //중첩
    for(let i=1;i<count+1;i++){
        total=total+(price*i)   
    }

    //부족금액
    if(total-money>0){
        answer=(money-total)
    }    

    return Math.abs(answer);
}

solution(3, 20, 4)
