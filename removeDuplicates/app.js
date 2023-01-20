function removeDuplicates(arr){
    setIndex = 1;
    for(let i=0; i<=nums.length; i++){
        if(nums[i] != nums[i -1]){
            nums[setIndex] == nums[i];
            console.log(nums[setIndex]);
            setIndex ++;
        }
    }
    console.log(setIndex); 
}