

// // var app5 = new Vue({
// //   el: '#app-5',
// //   data: {
// //     message: 'Hello Vue.js!'
// //   },
// //   methods: {
// //     reverseMessage: function () {
// //       this.message = this.message.split('').reverse().join('')
// //     }
// //   }
// // })

// var root = 'https://jsonplaceholder.typicode.com';

// $.ajax({
//   url: root + '/photos/1',
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });

// function bookfinder() {
//   $('#results').empty();
//   var search = document.getElementById('book-search').value;

//   $.ajax ({
//     url: "https://jsonplaceholder.typicode.com" + search,
//     datatype: "json",

//     success: function(data) {
//       for (i = 0; i < data.items.length; i++) {
//         var mydata = data.items[i].volumeInfo;

//       }
//     },

//     type: "GET"
//   });

  
// }

// function clickme() {
//   console.log("Function Works")

//   var idlist = ['index2', 'index3']

//   for (i = 0; i < idlist.length; i++) {
//     var mydiv = document.getElementById('mydiv').innerHTML = "Hello World";
//     return mydiv

//     var id = document.getElementById(idlist[i]);
      
//       console.log(id)
    

    
//   }

  
  
// }

// seclect the document and listen for clicks on any a tags
$(document).ready(function() {
  $('A').click(function(event){
  	var y = document.getElementsByTagName("A");
  for (i = 0; i < y.length; i++) {
    var x = document.getElementsByTagName("A")[i];
    console.log(x);
    
    if (x.id === "index2") { 
      // document.getElementById('mydiv').innerHTML = "An a tag was clicked and its Id matches that of the array so Now I am showing you my happy dance";
      console.log("ID is found");
    }
   }
  })
})

// return the element that was clicked on

// retrieve the value of the elements id 

// if the id is equal to an id in the object then return data to the new HTMl document









