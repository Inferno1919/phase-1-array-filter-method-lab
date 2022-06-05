
function findMatching(array, string){
    return array.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string){
    
    return array.filter(name => name.charAt(0) == string.charAt(0));

}

function matchName(array, string){

    return array.filter(dri => dri.name == string );
}
