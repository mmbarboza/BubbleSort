function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let midPoint = Math.floor(wholeArray.length / 2);
  console.log(midPoint);
  let firstHalf = wholeArray.splice(0, midPoint);
  let secondHalf = wholeArray;

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  let newArray = [];

    while (arr1.length > 0 && arr2.length > 0){
     (arr1[0] >= arr2[0]) ? newArray.push(arr2.shift()) : newArray.push(arr1.shift());
    }
    if (arr1.length === 0){
      newArray = [...newArray, ...arr2];
    } else if (arr2.length === 0){
      newArray = newArray.concat(arr1);
    }
    return newArray;
}

function mergeSort(arr){
  if (arr[0].length === 1 && arr[1] === 1){
    return merge(arr[0], arr[1])
  } else {
    split(arr)
  }
}
