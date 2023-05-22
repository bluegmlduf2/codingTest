function solution(numbers,hand) {
    var answer = '';
    var leftInput=10
    var rightInput=12
    hand=="left"?hand="L":hand="R"
    
    answer=numbers.map((v,i)=>{
        //왼손
        if([1,4,7].includes(v)){
            leftInput=v
            return "L"
        }

        //오른손
        if([3,6,9].includes(v)){
            rightInput=v
            return "R"
        }

        var leftDist=0
        var rightDist=0

        v==0?v=11:null
        
        // 포인트 : * 0 # 을 10의자릿수로 변환
        // * : 10 
        // 0 : 11
        // # : 12
        // v : 2 5 8 0
        
        //왼손의 거리구하기
        if(v==leftInput){
            leftDist=0
        }else if (v+1==leftInput||v-1==leftInput||v+3==leftInput||v-3==leftInput) {
            leftDist=1
        }else if (v+2==leftInput||v-2==leftInput||v+4==leftInput||v-4==leftInput||v+6==leftInput||v-6==leftInput) {
            leftDist=2
        }else if (v+5==leftInput||v-5==leftInput||v+7==leftInput||v-7==leftInput||v+9==leftInput||v-9==leftInput) {
            leftDist=3
        }else if(v+8==leftInput||v-8==leftInput||v+10==leftInput||v-10==leftInput){
            leftDist=4
        }
        
        //오른손의 거리구하기
        if(v==rightInput){
            rightDist=0
        }else if (v+1==rightInput||v-1==rightInput||v+3==rightInput||v-3==rightInput) {
            rightDist=1
        }else if (v+2==rightInput||v-2==rightInput||v+4==rightInput||v-4==rightInput||v+6==rightInput||v-6==rightInput) {
            rightDist=2
        }else if (v+5==rightInput||v-5==rightInput||v+7==rightInput||v-7==rightInput||v+9==rightInput||v-9==rightInput) {
            rightDist=3
        }else if(v+8==rightInput||v-8==rightInput||v+10==rightInput||v-10==rightInput){
            rightDist=4
        }

        //거리에 따른 손지정
        if (leftDist>rightDist) {
            rightInput=v
            return "R"
        }else if(leftDist<rightDist){
            leftInput=v
            return "L"
        }else if(leftDist==rightDist){
            //오른손 왼손거리 같을 경우
            hand=="L"?leftInput=v:rightInput=v
            return hand
        }
    })
    //console.log(answer.join(""))
    return answer.join("");
}
//solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left")