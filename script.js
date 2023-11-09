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

sortedArray(arr);
//second way
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
*/
function sortBands(bands) {
  // Custom sorting function excluding articles
  const compareFunction = (a, b) => {
    const removeArticle = name => name.replace(/^(a|an|the) /i, '').trim();
    const nameA = removeArticle(a);
    const nameB = removeArticle(b);
    return nameA.localeCompare(nameB);
  };

  // Sort the bands array using the custom sorting function
  const sortedBands = bands.sort(compareFunction);

  // Create ul element
  const ulElement = document.createElement('ul');
  ulElement.id = 'band';

  // Append li elements for each sorted band name
  sortedBands.forEach(band => {
    const liElement = document.createElement('li');
    liElement.textContent = band;
    ulElement.appendChild(liElement);
  });

  // Append the ul element to the document body (you can append it wherever you need)
  document.body.appendChild(ulElement);
}

// Example usage:
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
sortBands(bandNames);



