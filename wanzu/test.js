function solution() {
    const participant=["mislav", "stanko", "mislav", "ana"]
    const completion=["stanko", "ana", "mislav"]

    completion.forEach((e,i) => {
        participant.splice(participant.indexOf(e),1)    
    });

    return participant.join();
}

solution()