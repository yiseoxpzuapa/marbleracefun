var index = 0;
var imageList = ['https://github.com/yiseoxpzuapa/marbleracefun/blob/main/img/bg1.png', 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-96EA00D6BF0A7357A10349485D8B31A8-Png/150/150/AvatarHeadshot/Webp/noFilter'];

function changeBG() {
  index = index + 1;
  if (index == imageList.length) {
     index = 0;
  }
  var image1 = document.getElementById("myImage");
  image1.src = imageList[index];
}
