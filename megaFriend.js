function megaFriend(friends) {

    var word = "";
    for (var i = 0; i < friends.length; i++) {
      if (word.length < friends[i].length) {
        word = friends[i];
      }
    }
    return word;
  }
  
  console.log(megaFriend(['Sazzad', 'Mahim','Sakib','Habib']));