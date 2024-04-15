const postsContainer = document.getElementById("root");

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await response.json();

    postsData.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post-item";

      const postTitle = document.createElement("h3");
      postTitle.textContent = post.title;
      postElement.appendChild(postTitle);

      const postBody = document.createElement("p");
      postBody.textContent = post.body;
      postElement.appendChild(postBody);

      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Eroare la preluarea postarilor:", error);
  }
}
fetchPosts();

///////////create metodele some, every si slice folosin for loop si reduce la fel cum facusem la lectie
//SOME
function some(array, predicate) {
    for (const element of array) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
//EVERY
  function every(array, predicate) {
   for (const element of array) {
      if (!predicate(element)) {
        return false;
      }
    }
    return true;
  }
  
  //SLICE
  function slice(array, startIndex, endIndex) {
  const newArray = [];
  for (let i = startIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
//const numbers = [1, 2, 3, 4, 5];
const numbers=[2,4,6,8];
console.log(some(numbers, (n) => n % 2 === 0)); 
console.log(every(numbers, (n) => n % 2 === 0)); 
console.log(slice(numbers, 2, 4)); 
//some reduce
function some1(array, predicate) {
    return array.reduce((anyFound, element) => anyFound || predicate(element), false);
  }
  //every reduce
   function every1(array, predicate) {
    return array.reduce((allPass,element)=> allPass && predicate(element), true);
  }
//slice reduce
  function slice1(array, startIndex, endIndex) {
    return array.reduce((newArray, element, index) => {
      if (index >= startIndex && index < endIndex) {
        newArray.push(element);
      }
      return newArray;
    }, []);
}
console.log(some1(numbers, (n) => n % 2 === 0)); //unu par
console.log(every1(numbers, (n) => n % 2 === 0)); //toate pare
console.log(slice1(numbers, 2, 4)); //6,8