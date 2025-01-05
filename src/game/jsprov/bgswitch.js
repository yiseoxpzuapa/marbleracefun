var index = 0;
var imageList = ['https://github.com/yiseoxpzuapa/marbleracefun/blob/main/img/bg1.png'];

function changeBG() {
  index = index + 1;
  if (index == imageList.length) {
     index = 0;
  }
  var image1 = document.getElementById("myImage");
  image1.src = imageList[index];
}
