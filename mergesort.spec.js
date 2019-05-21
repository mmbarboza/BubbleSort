describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    let badArr = [3, 7, 8, 63, 34];
    expect(split(badArr)).toEqual([[3, 7], [8, 63, 34]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    let testArr = [[38], [27]];
    expect(merge(testArr[0], testArr[1])).toEqual([27, 38]);
    let testArr2 = [[55], [13]];
    expect(merge(testArr2[1], testArr2[0])).toEqual([13, 55]);
    let test3 = [[3, 7, 22, 45], [5, 19, 45, 92]];
    expect(merge(test3[0], test3[1])).toEqual([3, 5, 7, 19, 22, 45, 45, 92]);
  });
});
