function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    
    //let idx=0

    // for(let i=0;i<=10000000;i++){
    //     if(i%x==0&&i!=0){
    //         //음수양수체크
    //         if(x<0){
    //             answer.push(i*-1)
    //         }else{
    //             answer.push(i)    
    //         }
            
    //         idx++
    //         if(idx==n)break
    //     }
        
    // }
    // return answer;
}

solution(-2,5)