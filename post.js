exports.getShortPost = function(p){
    let newP = "";
    for(let i=0; i<100; i++){
        newP = newP + p[i];
    }
    return newP;
}
