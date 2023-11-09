//your code here
/* function sortedArray (arr){
	let pattern=/The|a|an/;
	let ans=[];
	arr.forEach((a,i,ray)=>{
		ans.push(arr[i].replace(pattern,"").trim());
	});
	console.log(ans)
	
	
	
}
let arr=['The Virupaksha Temple' , 'Victoria Memorial'
		 , 'Tajmahal'];

sortedArray(arr);*/
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Custom sorting function using regular expression to remove articles
const compareFunction = (a, b) => {
  const regex = /^(a|an|the) /i;
  const nameA = a.replace(regex, '').trim();
  const nameB = b.replace(regex, '').trim();
  return nameA.localeCompare(nameB);
};

// Sort the touristSpots array using the custom sorting function
touristSpots.sort(compareFunction);

console.log(touristSpots);
// Output: ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple']

