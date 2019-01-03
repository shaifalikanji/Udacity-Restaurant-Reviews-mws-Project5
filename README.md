# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1


### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.




## Project Overview

For the Restaurant Reviews projects, you will convert a static webpage to a mobile-ready web application. Your goal for this project is to take a static design that lacks many features and convert it to a responsive website with accessibility features and install a Service Worker that will cache static content for offline use. 
Specification
You will be provided code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

## Requirements

### 1.	Get a MapBox API key

1. Note: You can delete your key after you are done you have completed your project if you wish to.
2. If you do not already have a MapBox account, go ahead and create one
3. MapBox API is free to use (no need to provide any payment information)
4. If you would like to use Google Maps, there is a google-maps branch of the starter code. You'll need your own Google Maps API key 

source: www.udacity.com



### 2.	Get the map on the screen

1. Head over to your account and create a token. Replace the text <your MAPBOX API KEY HERE> inside of main.js file with your key.
2. Using Google Maps instead? Replace the text YOUR_GOOGLE_MAPS_API_KEY in index.html and restaurant.html with your own key.
3. For rendering the map for individual restaurants place your API key in the restaurant_info.js file.
4. Once you add above KEY’s, open your browser and view the website from the server.
5. If you are unable to reload your website you can try the following options:

### You may have to select shift-F5 to reload the website
1. Use developer tools>application>refresh the cache and cookies
2. You can right click the reload button(on the URL link) and click "Empty Cache and Hard Reload".
3. Or you can click “Hard Reload”
4. You may have to change your port 8000 to 5500

Source: www.udacity.com

Note: If you are unable to see the new changes on the web page, use (command + shift + R). 
This will force your browser to reload and refresh all the resources related to the website's page.



### 3. Make the provided website responsive – the website should render on all devices
Make sure the website is responsive and mobile friendly.

1. Images should not overlap on your site
2. All the elements on the page must be usable and visible in any viewport (desktop, tablet, mobile displays).
3. Add document type declaration and the meta-data viewport tags.
4. Make any necessary changes in the styles.css files as needed to make the web site more responsive.
5. Create a responsive grid-based layout using CSS and make sure these items fit a mobile screen(viewport).
6. Use media queries that provide fluid breakpoints across different screen sizes.
7. Use the mobile first approach: start by designing your application for mobile devices then add breakpoints for larger devices (medium – large).
8. Use responsive images that adjust for the dimensions and resolution of any mobile device.
9. Test responsiveness (especially images) across different web browsers, such as Chrome and Firefox.
10. Use height, width, flexbox (display flex, flex basis) CSS grid etc.


### 4.	Add accessibility features in HTML 
Accessibility features allow users with any sort of impairment to have the best possible user experience. Accessibility enables users use devices or software to navigate through the content on a web page with ease.

1. Create tab indexes for each element.
2. Use various semantics markup including roles and labels etc. and ARIA
3. Add alt attributes for descriptive images.
4. Add screen-reader only attributes 

### You can use the following accessibility features on your web page to create a better user experience.
1.	Use attributes to create accessible images on your site.
2.	Use hover/focus selectors for better focus on your pages as user navigate through the site.
3.	Use skip-links to allow users to navigate directly to the main content of the site.
4.	Use ARIA labels and semantics to allow a better user experience by enabling labels that provide clear description of what the user has selected on-screen.
5.	Use ARIA links to allow users to know which links they have selected as they navigate through the web page.


### 5.	Add a Service Worker script to cache requests to all the sites contents
1. A Service Worker is basically a JavaScript script that resides between your browser (such as Google Chrome) and the remote web server (the server that responds to user URL requests).
2. Essentially the Service Worker script gets registered with the browser and stores user URL requests in a cache. This enables users to view and have access to content on the internet in offline mode and/or even if they are experiencing issues with their internet connection. 
3. Service Workers use promises (. then, .fetch) etc. 

### Service Workers lifecycle events (4 events):

1.	Register the Service Worker file in a JavaScript file (main.js) add (sw.js)
2.	Install the Service Worker script – use the install event (sw.js)
3.	Activate the Service Worker– use activate event for events you want to listen to and their responses. (use fetch, push, sync).
4.	Create a fetch event to cache the static site for offline use – cache all user URL requests.

### Fetch process:
1. This is where the Service Worker fetches data from the cache if the network connection to the web server is unavailable due to connection issues.
2. The Service Worker responds to user URL requests using the cache instead of the web server on the network.
3. This enables content to be rendered in “offline mode” which means the Service Worker is providing the cached content.

### Service Worker Summary:

1. Using Cache API and a Service Worker, cache the data for the website so that any page (including images) that has been visited is accessible offline.
2. Service Workers sit between your web page and make calls to the server. You are listening to fetch requests, then copying and cloning those fetch requests, and then storing them in the cache OR you can save your local file content in the cache and calling that data.
3. You can test the service worker script in your project in private browsing (incognito) mode.


## REFERENCES USED:

https://www.youtube.com/watch?v=tyVQW2PkFk4&feature=youtu.be
https://developer.mozilla.org/en-US/docs/Web/API/Request
https://alexandroperez.github.io/mws-walkthrough/?1.4.mapbox-api-key
https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
https://www.diigo.com/outliner/fjslyn/Udacity-Restaurant-Reviews-App-(project-%235)?key=zqiopam1yz
https://www.youtube.com/watch?v=TxXwlOAXUko
https://www.youtube.com/watch?v=ksXwaWHCW6k
https://www.w3schools.com/css/css_dropdowns.asp
https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp
https://stackoverflow.com/questions/29869743/what-is-meta-charset-utf-8
https://www.w3schools.com/css/css_rwd_images.asp
https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
https://stackoverflow.com/questions/5222523/position-a-div-container-on-the-right-side
https://www.w3schools.com/css/tryit.asp?filename=trycss_max-width
https://www.w3schools.com/cssref/sel_nth-child.asp


### Accessibility:

https://www.w3schools.com/tags/ref_standardattributes.asp
https://www.w3schools.com/html/html_accessibility.asp
https://webaim.org/techniques/skipnav/
https://webaim.org/techniques/aria/
https://webaim.org/techniques/aria/#landmarks
https://webaim.org/techniques/aria/#keyboard
https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/

### Service Worker:

https://www.youtube.com/watch?v=ksXwaWHCW6k
https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/
https://developers.google.com/web/fundamentals/primers/service-workers/
https://alexandroperez.github.io/mws-walkthrough/?1.23.registering-service-worker-and-caching-static-assets
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
https://developer.mozilla.org/en-US/docs/Web/API/Cache
https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
https://blog.sessionstack.com/how-javascript-works-service-workers-their-life-cycle-and-use-cases-52b19ad98b58
https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/

## Images of Restaurant Reviewer Image and a Working Service Worker

<img width="1008" alt="screen shot 2019-01-03 at 1 21 22 pm" src="https://user-images.githubusercontent.com/38163931/50662246-8dae6280-0f5a-11e9-8dcc-b4fec69369a2.png">

<img width="1122" alt="screen shot 2019-01-03 at 1 26 57 pm" src="https://user-images.githubusercontent.com/38163931/50662468-6015e900-0f5b-11e9-9f61-1615b095b756.png">

<img width="1385" alt="screen shot 2019-01-02 at 10 49 35 am" src="https://user-images.githubusercontent.com/38163931/50662163-550e8900-0f5a-11e9-8984-7a8e1c3016d9.png">

<img width="1383" alt="screen shot 2019-01-02 at 10 48 32 am" src="https://user-images.githubusercontent.com/38163931/50662166-58097980-0f5a-11e9-9b6b-32e12d566185.png">


