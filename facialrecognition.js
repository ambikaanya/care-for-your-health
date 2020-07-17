var unirest = require("unirest");

var req = unirest("POST", "https://face-detection6.p.rapidapi.com/img/face-age-gender");

req.headers({
	"x-rapidapi-host": "face-detection6.p.rapidapi.com",
	"x-rapidapi-key": "492b3edfaamsh84ee2d19884cd00p1e0181jsn7ba011a448e1",
	"content-type": "application/json",
	"accept": "application/json",
	"useQueryString": true
});

req.type("json");
req.send({
	"url": "https://inferdo.com/img/face-3.jpg",
	"accuracy_boost": 3
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});