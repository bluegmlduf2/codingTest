function solution(s) {
    let strLength = s.length;
    let answer = strLength;
    // const strLen=s.length;
    
    for (let i = strLength/2; i > 0; i--) {
        //정규식에 변ㄴ수를 사용하는 경우 new RegExp()사용 , new를 사용할시 \을 빼주어야함
        let reArr=s.match(new RegExp(`.{1,${i}}`,"g"))
        let chk=true

        //reduce에 초기값을 지정해줄 경우 '0' acc는 첫번째 요소가 아니라 초기값 0으로 시작함 ,reduce는 반환값이 누적된 acc 
        reLength=reArr.reduce((acc,e,j,arr)=>{
            let current=arr[j]
            let after=arr[j+1]
            
            if(!after){
                if(current==arr[j-1]){
                    if(chk){
                        chk=false
                        return acc+after.length
                    }
                }else{
                    chk=true
                    return acc+after.length
                }
                return acc
            }else{
                if(current==after){
                    if(chk){
                        chk=false
                        return acc+after.length
                    }
                }else{
                    chk=true
                    return acc+after.length
                }
            }
            
         },0)

        answer=reLength<answer?reLength:answer
    }
    console.log(answer)
    return answer;
}

solution("aabbaccc")