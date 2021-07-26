//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');
// const list = new Array(6).join('1.1').split('.');
const test = 'a.b.c'.split('.').join();

// const list2 = new Array(1000).fill('a');
// console.log(list2);
// console.log(list2.length);

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
}

removeItemsFromList();
