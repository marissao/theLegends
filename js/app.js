// TEST: console.log('hello world');

var celebs = [{name: "Bruce Lee", address: "500 Dragon Rd"},{name: "Michael Jordan", address: "23 Legend Ave"},{name: "Warren Buffet",address: "1 Omaha Dr"},{name: "DJ Khaled", address: "1 Another Rd"},{name: "Barack Obama", address: "1 Washington Dr."},{name: "Drake",address: "33 Toronto Dr"},{name: "Bruce Wayne",address: "3 Gotham Pl"},{name: "Mariah Carey", address: "1 Fantasy Ln"},{name: "Piko Taro", address: "888 Shibuya Dr."},{name: "Steve Jobs",address: "1 Infinite Loop"},{name: "Guy Kawasaki", address: "2800 Woodlawn Dr"},{name: "Stephen Hawkins",address: "1 Blackhole Pl"},{name: "Jackie Chan", address: "168 Shanghai Rd"},{name: "Charlie Brown",address: "8 Peanuts Rd"},{name: "Cookie Monster", address: "2 Seasame St"}, {name: "Elon Musk", address: "1 Rocket Rd"}, {name: "Mark Zuckerberg", address: "1 Hacker Ln"}, {name: "David Ige", address: "320 S Beretania St"}, {name: "Keanu Reeves", address: "Zion"}];

for(var i = 0; i<celebs.length; i++){
    // console.log(celebs[i]); /*NOTE: console.log to check that the for loop displays the objects correctly*/
    // console.log(celebs[i].name);
    // console.log(celebs[i].address);

    var nameBox = document.createElement('div');
    nameBox.className = 'person'; /*NOTE: you would use 'className' instead of 'id' because there are multiple items with similar characteristics */
    nameBox.innerHTML = celebs[i].name;
    document.body.appendChild(nameBox) /*NOTE: use 'document.body' when you nothing to anchor to in your HTML */

    var addyBox = document.createElement('div');
    addyBox.className = 'home';
    addyBox.innerHTML = celebs[i].address;
    nameBox.appendChild(addyBox)

}

/* ATTEMPT ON MY OWN
var bruceName = document.createElement('div');
bruceName.id = 'name'
bruceName.innerHTML = 'Bruce Lee'
body.appendChild(bruceName) <-- See note above regarding 'document.body' for why this did not work*/