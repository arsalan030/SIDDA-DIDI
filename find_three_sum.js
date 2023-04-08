/* first we find the two sum */
function twosum(arr, left, right, target) {
	left = 0;
	right = arr.length - 1;
	let res = new Array();
	while (left < right) {
	  if (arr[left] != 0 && arr[left] && arr[left] == arr[left - 1]) {
		left++;
		continue;
	  }
	  let sum = arr[left] + arr[right];
	  if (sum == target) {
		let subres = new Array();
		subres.push(arr[left]);
		subres.push(arr[right]);
		res.push(subres);
		left++;
		right--;
	  } else if (sum > target) {
		right--;
	  } else {
		left++;
	  }
	}
	return res; // return the result array
  }
  
  /* find three sum in given arry */
  function three_sum(arr, target) {
	let res = new Array();
	let n = arr.length;
	// first we find the length of array
	if (n < 3) {
	  return res;
	}
	// if length of array less then 3 then we return the empty array
  
	arr.sort(function(a, b) {
	  return (a - b);
	});
	// then sort the array
  
	for (let i = 0; i < n - 2; i++) {
	  if (arr[i] != 0 && arr[i] == arr[i - 1]) {
		continue;
	  }
	  // here we check the condition repetition is not come in 
	  let val1 = arr[i];
	  let tarp = target - val1;
	  let subres = twosum(arr, i + 1, n - 1, tarp); // call the twosum function and store the result
	  for (lst of subres) {
		lst.push(val1);
		res.push(lst);
	  }
	}
	return res;
  }
  
  let arr = [1,4,5,7,9,3,4,6];
  let target = 9;
  console.log(three_sum(arr, target));
  