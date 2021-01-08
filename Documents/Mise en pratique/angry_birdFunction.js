function angry_bird(nbr){
    let bird = "";
    for(let i = 0; i < nbr; i++){
        bird += " piou";
    }
    return bird;
}
console.log(angry_bird(5));