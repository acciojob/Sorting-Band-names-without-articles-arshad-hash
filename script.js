//your code here
function sortedArray (arr){
	let pattern=/The/;
	let ans=[];
	arr.forEach((a,i,ray)=>{
		ans.push(arr[i].replace(pattern,"").trim());
	})
	console.log(ans.sort);
	
}
let arr=['The Virupaksha Temple' , 'Victoria Memorial'
		 , 'Tajmahal'];

sortedArray(arr);

