function binarySearch(list, element) {
    for(var i = 0; i < list.length; i++) {
        if (list[i] == element) {
         return i;
        }
        else;
    }
    return -1;
}
