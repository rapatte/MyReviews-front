function is_similar(a, b){
    return a === b ? "Same type and value"
    : typeof a === typeof b ? "Same type"
    : false
}
is_similar();