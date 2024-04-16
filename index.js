// const postsContainer = document.getElementById("root");

// async function fetchPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const postsData = await response.json();

//     postsData.forEach((post) => {
//       const postElement = document.createElement("div");
//       postElement.className = "post-item";

//       const postTitle = document.createElement("h3");
//       postTitle.textContent = post.title;
//       postElement.appendChild(postTitle);

//       const postBody = document.createElement("p");
//       postBody.textContent = post.body;
//       postElement.appendChild(postBody);

//       postsContainer.appendChild(postElement);
//     });
//   } catch (error) {
//     console.error("Eroare la preluarea postarilor:", error);
//   }
// }
// fetchPosts();

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
const numbers = [2, 4, 6, 8];
console.log(some(numbers, (n) => n % 2 === 0));
console.log(every(numbers, (n) => n % 2 === 0));
console.log(slice(numbers, 2, 4));
//some reduce
function some1(array, predicate) {
  return array.reduce((anyFound, element) => anyFound || predicate(element), false);
}
//every reduce
function every1(array, predicate) {
  return array.reduce((allPass, element) => allPass && predicate(element), true);
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
///lectia29
Array.prototype.mySome = function (callback) {
  return this.reduce((acc, curr, ind, arr) => {
    return callback(curr, ind, arr)

  }, false)
}
console.log([1, 2, 3, 4].mySome(item => item > 4))
///
Array.prototype.myEvery = function (callback) {
  return this.reduce((acc, curr, ind, arr) => {
    if (!acc) return acc;
    return callback(curr, ind, arr);
  }, true)
}
console.log([1, 2, 3, 4].mySome(item => item > 4))
//
Array.prototype.mySlice = function (idx1, idx2, checkFunc) {
  if (typeof idx1 !== 'number' || typeof idx2 !== 'number' || (checkFunc && typeof checkFunc !== 'function')) {
    throw new TypeError('indexurile trebuie sa fie numere');
  }
  const startInx = idx1 ? idx1 < 0 ? this.length - 1 - Math.abs(idx1) : idx1 : 0;
  let endInx = idx2 ? idx2 < 0 ? this.length - 1 - Math.abs(idx2) : idx2 : this.length - 1;
  endInx = Math.min(endInx, this.length - 1);
  if (endInx < startInx) {
    throw new TypeError('end index nu poate fi mai mic ca start index')
  }
  return this.reduce((acc, curr, idx) => {
    if (idx >= startInx && idx <= endInx && checkFunc(curr)) {
      acc.push(curr);
      return acc;
    } return acc;
  }, [])
}
const func = (item) => {
  return item % 2 === 0;
}

console.log([1, 2, 3, 4, 5, 6, 7,].slice(3, -1));
console.log([1, 2, 3, 4, 5, 6, 7,].mySlice(-1, -5, func));
