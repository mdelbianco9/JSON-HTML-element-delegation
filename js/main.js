

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

var idList = [
{
	id: "index2"
},

{
	id: "index3"
},

{
	id: "index4"
}

];

// seclect the document and listen for clicks on any a tags
$(document).ready(function() {
  $('A').click(function(event){

var solve = function() {
// This stores the value from the for loop, which is an array of the ids 
var h = [];
	// Gets the Id of each A tag and adds it to the h array above. 
	for (i = 0; i < idList.length; i++) {
		var y = document.getElementsByTagName("A")[i].id;
		var c = h.push(y);
	}
		console.log(h);
	for (i = 0; i < idList.length; i++) {
		if(h[0] === idList[i].id) {
			console.log("Getting closer")
		}
	}
		
}

return solve();


 
 
  })
})

// return the element that was clicked on

// retrieve the value of the elements id 

// if the id is equal to an id in the object then return data to the new HTMl document


$('#index2').click(function() {
	console.log("Index2 was clicked")
	$('#mydiv').html("Hello World this might work");
})

$('#index3').click(function() {
	console.log("Index3 was clicked")
})

$('#index4').click(function() {
	console.log("Index4 was clicked")
})






