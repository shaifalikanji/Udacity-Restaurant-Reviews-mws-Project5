
//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
//https://blog.sessionstack.com/how-javascript-works-service-workers-their-life-cycle-and-use-cases-52b19ad98b58
//https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/ 


//**********************STEP 1: REGISTER THE SERVICE WORKER*********************************//

//Here we are "REGISTERING" the service worker  file with the following code. This enables the service worker
//to communicate with your browser and tell the browser the location of our JavaScript file as shown 
//on line #14. If a service worker is supported, then it will be registered and we will be able to see the
//console message in developer tools.
//Note: include this file <script "sw-registration.js"/script> in all the index.html (line #59)
// and restaurant.html files (line #82)


if ('serviceWorker' in navigator) { //if service worker is supported in the browser
  window.addEventListener('load', function() { //load the service worker when the window loads add a event list
    navigator.serviceWorker.register('../serviceWorker.js') //register the service worker with the file name
    .then(function(registerService) { //is service worker is registered console below message
      
      // service work registration is registered
      console.log('Registered: Service Worker registration was successful!!');
    }, 

    function(errService) { //if service worker not registered console below message

      // service work registration did not register
      console.log('Registered: Service Worker failed!!: ', errService);
    });
  });
}

//service worker is now registered!

//The steps below are continued in the serviceWorker.js file

//STEP 2:INSTALL THE SERVICE WORKER
//STEP 3:ACTIVATE THE SERVICE WORKER
//STEP 4:CREATE A FETCH EVENT TO CACHE PAGE FOR OFFLINE MODE