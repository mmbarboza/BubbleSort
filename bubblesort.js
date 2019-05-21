function swap(num1, num2, arr, i){
    let currNum = num1;
    arr[i] = num2;
    arr[i+1] = currNum;
    console.log("num1", num1)
    //return [num1, num2];
}

function bubbleSort(arr){
let rerun = true;
while (rerun){
  rerun = false;
  for (let i = 0; i < arr.length; i++){
    let num1 = arr[i];
    let num2 = arr[i + 1];
    if ( num1 > num2){
      swap(num1, num2, arr, i);
      rerun = true;
      console.log(arr);
     }
  }

}
return arr;
}
