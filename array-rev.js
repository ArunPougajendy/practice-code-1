var nums=[10,20,30,50,60,70,80];

function rotateArray(nums,k) 
{
    var result=[];
for(var i=0; i < k; i++){
    result[i] = nums[nums.length-k+i];
    }

var j=0;
for( i=k; i<nums.length; i++){
    result[i] = nums[j];
    j++;
    }

//nums = result.slice();
//console.log(nums);
return result;
}

console.log(rotateArray(nums,3));