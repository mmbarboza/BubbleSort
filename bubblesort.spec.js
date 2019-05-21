



describe('Bubble Sort', function(){
  // beforeAll(function(){
  //   spyOn(fakeArr, 'swap').and.callThrough();
  // })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single element', function(){
    expect( bubbleSort([3]) ).toEqual( [3] );
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort([6,9,2,4,5,5]) ).toEqual( [2,4,5,5,6,9] );
  });

});


