function solution(price, money, count) {
    var answer = 0;
    let total=0;
    
    for(let i=1;i<count+1;i++){
        total=total+(price*i)   
        console.log(11) 
    }
    (money-total)>0?(money-total):null
    
    return answer;
}

solution(3, 20, 4)
