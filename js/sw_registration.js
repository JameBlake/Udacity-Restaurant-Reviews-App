
navigator.serviceWorker.register('./sw.js').then(function (reg) {
console.log('Registration Worked!');
	if(!navigator.serviceWorker.controller){
		return;
	}

   }).catch(function () {
    console.log('Registration Failed!');
});

   navigator.serviceWorker.addEventListener('controllerchange', function () {
    window.location.reload();
});

