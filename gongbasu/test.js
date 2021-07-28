function solution(n, m) {
    var answer = [];
    
    //최대공약수:공통된약수중에가장큰수
    for(let i=n;i>0;i--){
        if(n%i==0&&m%i==0){
            answer.push(i)
            break
        }
    }

    // gongyak_filter=gongyak.reverse().filter((e)=>{
    //     return n%e==0
    // })
    // answer.push(gongyak_filter[0])
    
    //최소공배수:공통된배수중에가장큰수
    while(true){
        if(m%n==0){
            answer.push(m)
            break
        }
        m=m*2
    }
    
    return answer;
}