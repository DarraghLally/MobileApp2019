# Mobile Application Project, 2019
## Darragh Lally - G00220290

My submission for our second year Mobile App Project as set by Dr. Martin Kenirons. We were tasked with creating a cross platform application using the skills we had gained through a semester of practical labs and lectures in Ionic Framework, fulfilling a number of prerequisites.

## Getting Started

Assuming you have a recent version of node.js, Cordova and the Ionic Framework on your machine.  
  **1.** Download Zip from Github - https://github.com/DarraghLally/MobileApp2019  
  **2.** Unzip into location of your choosing  
  **3.** Open file named: *g00220290* in command  
  - To view code (and asssuming you have VS Code IDE installed) run command: *code .*  
  **4.** To run application run command: *ionic serve*  
  **5.** Browser will open on localhost, I recommend using *localhost:8100/ionic-lab/* as the URL  
    
  Application is now running and you are met with the home screen  
  
  ## Using
  
  ### Torch
  A simple one button (ON/OFF) page that makes use of a mobile device's flashlight hardware, **does not** work on broswer, must use inspect tool to see the call been made to cordova. I have commented out a debug console.log in the code if you wish to test further.
  
  ### Weather
  On this tab I am using information requested via a provider to OpenWeatherMap (https://openweathermap.org/). Using my free API key I am calling back some of the information provided in their JSON data.
  
  **1.** Current Location, top of page  
  **2.** Weather description  
  **3.** Temprature: Both Celcius and Farenheit  
  **4.** Wind spped: meters per second  
  **5.** Wind direction: As a compass bearing  
  
  ### Location
  This tab provides the user with useful location information in the form of both GPS coordinates and in the format of Degrees, Minutes, Seconds (DMS). It also stores the last known GPS coordinates for reference (Useful for tracking progress on a hike, sail etc)
  
  ## Acknowledgments
  
  *Stackedoverflow, github, google, Ionics Documentation, Martin Kenirons, collegues - **Thanks!***
  
  A spin off inspired by last semesters Mobile Application Project (written in C#, xmal). I enjoy the outdoors and I find the items I added useful.
  
  
  
