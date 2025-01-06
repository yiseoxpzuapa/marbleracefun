var index = 0;
var imageList1 = ['https://github.com/yiseoxpzuapa/marbleracefun/blob/7583f4f4c716d03f4ddfdb7d6ea4e815877ac65e/src/game/jsprov/marble1.png', 'https://github.com/yiseoxpzuapa/marbleracefun/blob/7583f4f4c716d03f4ddfdb7d6ea4e815877ac65e/src/game/jsprov/marble2.png', 'https://github.com/yiseoxpzuapa/marbleracefun/blob/7583f4f4c716d03f4ddfdb7d6ea4e815877ac65e/src/game/jsprov/marble3.png'];

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
