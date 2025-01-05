var index = 0;
var imageList1 = ['https://github.com/yiseoxpzuapa/marbleracefun/blob/f008b5636374196f842f3c7cbab4b2fc4955af0e/img/marble1.png?raw=true', 'https://github.com/yiseoxpzuapa/marbleracefun/blob/f008b5636374196f842f3c7cbab4b2fc4955af0e/img/marble2.png?raw=true', 'https://github.com/yiseoxpzuapa/marbleracefun/blob/f008b5636374196f842f3c7cbab4b2fc4955af0e/img/marble3.png?raw=true'];

function changeMB() {
  index = index + 1;
  if (index == imageList1.length) {
     index = 0;
  }
  var image2 = document.getElementById("myMarble");
  image2.src = imageList1[index];
  console.log("marble switched")
}

//testingphases 2
