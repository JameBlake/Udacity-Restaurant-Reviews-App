
self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open("resto-static-v1").then (function(cache){

			return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'css/styles.css',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'js/sw_registration.js',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'data/restaurants.json',
				]);
		})
		);
});


self.addEventListener('fetch', function(event){
	const url = new URL(event.request.url);
	console.log(url);
	event.respondWith(
		caches.match(url.pathname).then(function(response){
			if(response){
				console.log(url.pathname);
				return response
			}
			return fetch(event.request);
		}).catch(function(error){
			console.log('Error:', error);
			return;
		})
	);
});

