function solution(s) {
    let answer = 0;
    let reArr = null;
    let strLength = s.length;
    // const strLen=s.length;
    
    for (let i = strLength/2; i > 0; i--) {
        //정규식에 변ㄴ수를 사용하는 경우 new RegExp()사용 , new를 사용할시 \을 빼주어야함
        reArr=s.match(new RegExp(`.{1,${i}}`,"g"))
        //reduce에 초기값을 지정해줄 경우 '0' acc는 첫번째 요소가 아니라 초기값 0으로 시작함 ,reduce는 반환값이 누적된 acc 
        let chk=true

        reLength=reArr.reduce((acc,e,j,arr)=>{
            if(!e){return}
            let before=arr[j]
            let after=arr[j+1]
            
            if(before==after){
                if(chk){
                    chk=false
                    return acc+before.length+1
                }
            }else{
                return acc+before.length
            }
         },0)

        answer=reLength>answer?reLength:answer
    }

    return answer;
}

solution("aabbaccc")