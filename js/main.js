

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

function clickme() {
  console.log("Function Works")

  var idlist = ['index2', 'index3']

  for (i = 0; i < idlist.length; i++) {
    var mydiv = document.getElementById('mydiv');

    var id = document.getElementById(idlist[i]);
      
      console.log(id)
    

    
  }

  
  
}











