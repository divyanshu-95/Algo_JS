let arr=[-2,0,5,7,9];
let t=7;
//Linear Search
const linearSearch=(arr,t)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==t){
            return i;
        }
    }
    return -1;
}

const binarySearch=(arr,t)=>{
    //we have to sort the array for binary search
    arr.sort((a,b)=>{
        return a-b;
    });
    let l=0;
    let r=arr.length-1;
    while(l<=r){
        let m=Math.floor((l+r)/2);
        if(t==arr[m]){
            return m;
        }
        else if(t<arr[m]){
            r=m-1;
        }else if(t>arr[m]){
            l=m+1;
        }
    }
    return -1;
}

// console.log(linearSearch(arr,t));
console.log(binarySearch(arr,t));
