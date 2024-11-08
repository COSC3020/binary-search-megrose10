function binarySearch(list, element) {
    let topList = list.length - 1;
    let bottomList = 0;
    while(topList >= bottomList) {
      let halfList = Math.floor((bottomList + topList)/2)
      if(element == list[halfList]) {
        return halfList + 1;
      }
      else if(element > list[halfList]) {
        bottomList = halfList + 1;
      }
      else if(element < list[halfList]) {
        topList = halfList - 1;
      }
    }
    
    return -1;
}
