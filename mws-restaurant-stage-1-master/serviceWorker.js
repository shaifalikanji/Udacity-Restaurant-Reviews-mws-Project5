//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
//https://developer.mozilla.org/en-US/docs/Web/API/Cache
//https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
//https://blog.sessionstack.com/how-javascript-works-service-workers-their-life-cycle-and-use-cases-52b19ad98b58
//https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/
//https://alexandroperez.github.io/mws-walkthrough/?1.23.registering-service-worker-and-caching-static-assets
//https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll


/*create variable that stores all your files - these are files that will be cached and stored for offline use*/

const cacheName = 'restaurant-reviews-V1'; //as the versions change, the old caches will be deleted, because 
                                           //new cache is currently being used. You can check this 
                                           //by changing the versions and view messages in console
                                           //on developer tools just for your reference.
										   

const cacheURLContent = [ //these are all the files that will be cached and available for offline content.
	'./',
	'./index.html',
	'./restaurant.html',
	'./css/styles.css',
	'./data/restaurants.json',
	'./js/dbhelper.js',
	'./js/main.js',
	'./js/restaurant_info.js',
	'./js/sw-registration.js',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/3.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
	'./img/10.jpg'

];


//******************STEP 2:INSTALL THE SERVICE WORKER AND TELL SERVICE WORKER TO CACHE CONTENT*****//

//********calling the install event

self.addEventListener('install', (event) => {
	console.log('Install: Service Worker installation was successful!');

// caching URL content once service worker is registerd and loaded 

  event.waitUntil( //this code tells the browswer to wait to see if the service worker is working
    caches.open(cacheName)//this will open the cache and stores all the URLS in the cache that user visits
      .then(cache => { 
        console.log('Cached Files using Service Worker'); //show this message on console
        cache.addAll(cacheURLContent); //this method is where all the URLS content we want to cache in the service worker
      })
      .then(() => self.skipWaiting()) //this adds the actual content to the cache without waiting 
  );
});


//**********************STEP 3:ACTIVATE THE SERVICE WORKER*****************************//

//Calling the activate event

//this event empties old caches that may be present, you want to prevent the service worker  from serving
//older files in the cache. So it is advised to delete the older service worker files.


self.addEventListener('activate', (event) => {
	console.log('Activate: Service Worker activation was successful!');

//Note: please view the image "with deleted cache" and "without deleted cache" to get a basic idea
//on how your developer tools - applications tab - cache storage - should display

//DELETING OLD CACHES

//if the current data being cached is not using old caches produced by the service worker
//terminate this cache.

  event.waitUntil(
   //check all the caches files 
    caches.keys().then(cachingNames => { //for each cache name
      return Promise.all(
        
        cachingNames.map(currentCacheName=> { //loop/map through all the cache names , if a cache is not being used then delete it
          
          if (currentCacheName !== cacheName) { // if the current cache we are on is not the actual current cache
          //then it should be removed.  
          	
          	console.log('Removing old caches in Service Worker'); //display this message as the sw is removed
            
            return caches.delete(currentCacheName);
          }
        })
      )
    })
  );
});



//***********************STEP 4:CREATE A FETCH EVENT TO CACHE PAGE FOR OFFLINE MODE******//

//Call Fetch event 
//this will allow us to view all the cached files offline
//so when the user makes a request for a URL and the files are being "fetched" through the cache


self.addEventListener('fetch', (event) => { //fetch the files from the cache event
	console.log('Service Worker is FETCHING Data from CACHE!');
  
  event.respondWith( // This method checks if the URL is available through the network, if not than use
  					 //the cache that was created by the service worker to provide data to the user.

    fetch(event.request) // if the content is not available through the network use the cache created by the S.W
      .catch(() => caches.match(event.request))); //then cath that content and  provide the content through 
      											//the current cache instead using the match method.
        

 })  



// all the data that is "fetched" now will respond through the cache and even if the network connection fails to the
//web server, the cache that is created by the service worker will provide the content so the user is able
//to view the website content as usual.













