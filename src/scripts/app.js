console.log('Hello World!');
console.log("Let's count to hundred...");
var startTime = (new Date()).getMilliseconds();
for (var i = 0; i < 100; i++ ) {
  console.log(i + 1);
}
var endTime = (new Date()).getMilliseconds();
var timeDifference = endTime - startTime;
console.log('Done! And it only took', timeDifference + 'ms.');

// Testing jQuery
$('h1').animate({opacity: 0.5}, 1500, 'linear');
