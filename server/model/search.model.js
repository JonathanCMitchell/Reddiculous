var request = require('request')

exports.search = {
	get: searchGet
}

function searchGet(params) {
	console.log('params in side searchModel: ', params)
	return new Promise(function(resolve, reject) {
	request.get('https://www.reddit.com/r/trap.json', function(error,response, body) {
		if (!error) {
			console.log('body inside search model get',body);
			resolve(body)
		}
		  else {
			reject(error)
		}
		})
	})
}
