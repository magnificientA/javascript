//question1
function printSum(array){
    let sum=0;
    for(i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    console.log(sum);
      
}
printSum([1,2,3])

//queston2
function hrcomparison(x,y){
    let alicePoint= 0;
    let bobPoint= 0;

    for(let i=0;i<x.length;i++){
        if (x[i]>y[i]){
            alicePoint+=1
        }else if(y[i]>x[i]){
            bobPoint+=1
        }
    }
    let finalArray=[]
    finalArray.push(alicePoint)
    finalArray.push(bobPoint)

    return finalArray;

}

//How to add prime numbers within 2 intervals

// function showPrime(lN,hN){
//     for(let i=lN;i<=hN;i++){
//         let flag=0;
//         for(let factor=2;factor<i;factor++){
//             if (i%factor==0){
//                 flag=1;
//                 break;
//             }
//         }
//         if(i>1&&flag==0){
//             console.log(i)
//         }

//     }
    
// }    

// showPrime(2,20)



//question 3
function statusCount(arr){
    positiveCount=0;
    negativeCount=0;
    zeroCount=0;
    
    for(i=0;i<arr.length;i++){
        if(arr[i]>0){
         positiveCount++
        }
        else if(arr[i]<0){
            negativeCount++
        }
        else if(arr[i]==0){
            zeroCount++
        }
    }
    console.log('The ratio of positive elements in the array is' + " "+ positiveCount/arr.length)
    console.log('The ratio of negative elements in the array is' + " "+ negativeCount/arr.length)
    console.log('The ratio of zero value elements in the array is' + " "+ zeroCount/arr.length)

}    

statusCount([1,2,-1,3,0])



//question 4
function firstFunction(a,b){
  return a+b;
}


// Example...firstFunction(3,5)
// output= 8