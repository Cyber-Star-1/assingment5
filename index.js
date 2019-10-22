var names = [];
name1.innerHTML = 'User'
btn2.onclick = function() {
  var name = prompt("Enter your Name...");
  if(name !== null){
    names.push(name);
    users.innerHTML =
      '<div class="login" id="login"><p>' +
      name +
      " has been sucessfully added to the list</p></div>";
  }
  else{
    alert('Please Enter a username')
  }
};

btn1.onclick = function() {
  users.innerHTML = "<p>We have Following users in Our List: </p>";
  for (let i = 0; i < names.length; i++) {
    users.innerHTML += '<p>'+ (i+1) + ")" + names[i] + "</p>";
  }
};

btn3.onclick = function() {
  var deleteName = prompt("Enter your User Name...");
  if (deleteName !== null && deleteName !== "") {
    var i = names.indexOf(deleteName);
    if (i !== -1) {
      users.innerHTML =
        '<div class="login" id="login"><p>' +
        deleteName +
        " has been sucessfully deleted from the list</p></div>";
      names.splice(i, i + 1);
    } else {
      users.innerHTML =
        '<div class="red" id="login"><p>' +
        deleteName +
        " is not present in the list</p></div>";
    }
  } else{
    alert('Please enter a user name')
  }
};

btn4.onclick = function() {
  var login = prompt("Enter your User Name...");
  if(names.indexOf(login)!==-1){
    users.innerHTML = '<div class="login" id="login"><p>Hello ' +login +" welcome to techna</p></div>";
    name1.innerHTML = login
  }
  else{
    users.innerHTML ='<div class="red" id="login"><p>' +login +" is not present in the list</p></div>";
  }
};
