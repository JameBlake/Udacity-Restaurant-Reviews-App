

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
				'img/1.jpeg',
				'img/2.jpeg',
				'img/3.jpeg',
				'img/4.jpeg',
				'img/5.jpeg',
				'img/6.jpeg',
				'img/7.jpeg',
				'img/8.jpeg',
				'img/9.jpeg',
				'img/10.jpeg',
				]);
		})
		);
});



self.addEventListener('fetch', function (event){

	event.respondWith(

		caches.match(event.request).then(function(response){
			if(response){
				return response;
			}
			return fetch(event.request).then;
		}))
})



self.addEventListener('message', function(event){

    if (event.data.action === 'skipWaiting') {
       self.skipWaiting();
    }
});


self.addEventListener('fetch', function(event){
	event.respondWith(

		fetch(event.request).then(function(response){
			if(response.status == 404){
				return new Response ("whoops! Not found!");
			}
			return response;
		}).catch(function(){
			return new Response("uh oh, that totally failed!");
		})
		);
});


self.addEventListener('fetch', function(event){
	event.respondWith(

		caches.match(event.request).then(function(response){
			if (response) return response;
			return fetch(event.request);
		})
	);
});