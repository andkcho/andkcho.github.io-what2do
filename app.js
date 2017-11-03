
var apiKey = J5Pf0GaMQ2rv8B7eTBMgCXwAavWO6zvr;
var city = "";
var stateCode = "";
var countryCode = "";
var postalCode = "";

$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=" + apiKey;
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzZdHTXgYGbi78O-obcf4R02PVJ_yBvI4",
    authDomain: "what2do-a05ed.firebaseapp.com",
    databaseURL: "https://what2do-a05ed.firebaseio.com",
    projectId: "what2do-a05ed",
    storageBucket: "what2do-a05ed.appspot.com",
    messagingSenderId: "505624481525"
  };
  firebase.initializeApp(config);
