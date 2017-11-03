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