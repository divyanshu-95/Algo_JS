

let arr=[2,8,5,3,1,88,99,77];
let n=arr.length-1;

// bubble sort
for(let j=0;j<n;j++){
    for(let i=0;i<n;i++){
        // console.log(i);
        if(arr[i]>arr[i+1]){
        // console.log(i,'if');
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
        }
        if(i==n){
            n--;
        }
    }
}
console.log(arr);


// insertion sort
for(let i=1;i<arr.length;i++){
    let noToInterchange=arr[i];
    var j=i-1;
    while(j>=0&&arr[j]>noToInterchange){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        j--;
    }
}
console.log(arr)


//quick sort
function quickSort(arr){
    let count=0;
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length-1;i++){    
        count++
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
console.log(quickSort(arr))//[2,8,5,3,1,88,99,77];
