## Acknowledgment
This project was built by following a tutorial for learning purposes. I implemented and adapted the code to better understand the concepts.

Traversy Media
https://youtu.be/ontX4zfVqK8

# Wildfire Tracker
A web application that displays real-time wildfire events on an interactive map using data from NASA’s EONET API. Users can explore wildfire locations and click on markers to view additional event details.

---

## Overview
Wildfire Tracker visualizes live wildfire data on a map interface, making it easy to identify where events are occurring around the world. The application fetches data from NASA’s EONET API and renders dynamic markers for each wildfire event.

##Tech Stack

- React (JavaScript)
- Google Maps (google-map-react)
- NASA EONET API
- HTML & CSS

---

##Features
- Displays real-time wildfire data on an interactive map  
- Dynamic markers representing wildfire locations  
- Clickable markers showing event ID and title  
- Loading state while fetching API data  

---

## What I Learned
- Structuring a React application using components and state  
- Fetching and working with external APIs  
- Handling geolocation data (latitude/longitude)  
- Improving performance with useMemo and useCallback  
- Debugging issues with third-party libraries  
- Understanding how React rendering impacts performance  

---

## Challenges & Fixes
- Fixed map rendering issues caused by missing center and zoom props  
- Resolved marker drift caused by unnecessary React re-renders  
- Improved performance by memoizing marker rendering and filtering logic  
- Handled runtime errors from undefined coordinates  
- Identified compatibility limitations with google-map-react and React 18  

---

## Future Improvements
- Add filtering for multiple event types (not just wildfires)  
- Enhance UI/UX with improved styling and animations  
- Display more detailed event information (e.g., date, severity)  

