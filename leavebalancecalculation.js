
function leavecaluclation(){
    const anualleave=20
    const leaveaddperyear=1
    const maxnaualleave=30
    const takenleave =currentdate-newdate
    const fromprevyear=5
    let newleave =anualleave+leaveaddperyear
    if(newleave>maxnaualleave){
        newleave=maxnaualleave
    }
    if(newleave>takenleave){
        newleave=newleave-takenleave
    }
    if(newleave>fromprevyear){
        newleave=newleave-fromprevyear
    }
    return newleave
}
  console.log(leavecaluclation())
