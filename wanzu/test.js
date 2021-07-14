function solution() {
    /* 효율성실패    
    const participant=["mislav", "stanko", "mislav", "ana"]
    const completion=["stanko", "ana", "mislav"]

    completion.forEach((e,i) => {
        participant.splice(participant.indexOf(e),1)    
    });

    return participant.join();
    */
    
    const participant=["mislav", "stanko", "mislav", "ana"]
    const completion=["stanko", "ana", "mislav"]

    let participant_sort=participant.sort()
    let completion_sort=completion.sort()
    let answer

    for (let i = 0; i < participant_sort.length; i++) {
        if(participant_sort[i]!==completion_sort[i]){
            answer=participant_sort[i]
            break
        }    
    }

    return answer
}

solution()