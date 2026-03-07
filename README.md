# IP Address Tracker

A responsive web application that allows users to search for any IP address or domain and view its location on an interactive map. This project demonstrates React development, API integration, custom hooks, and responsive design principles.

Live Demo Link : https://ip-adddress-react-project-krishna.netlify.app/

---

## **Features**

- Search for any IP address or domain.
- Display key information:
  - IP address
  - Location (city, region, country)
  - Timezone
  - ISP
- Interactive map powered by **React-Leaflet**.
- Smooth animations for the information card using **Framer Motion**.
- Responsive design for mobile, tablet, and desktop.
- Custom hook (`useFetch`) for API requests with loading and error handling.


## **Installation**

1. Clone the repository:
- https://github.com/krishnakatwal/IP-Address-Tracker-React-Development.git
       
- cd IP-Address-Tracker-React-Development


2. Install dependencies:

- npm install

3.Create a .env file in the root directory and add your Geo IPify API key:

- VITE_API_KEY=your_api_key_here

4.Start the development server:

- npm run dev

5.Open http://localhost:5173 in your browser.

## **Usage

- Enter an IP address or domain in the search bar.

- Click the search button or press Enter.

- The information card will update with the IP details.

- The map will recenter to the IP location.

## **Technologies Used

- React – Frontend library for building interactive UI.

- Tailwind CSS – Utility-first CSS framework for styling.

- React-Leaflet – Interactive maps with markers.

- Framer Motion – Animations for UI components.

- Geo IPify API – Provides IP location data.

## Project Structure

ip-address-tracker/
└── src/
    ├── assets/
    │   ├── images/
    │   │   ├── icon-arrow.svg
    │   │   └── pattern-bg-desktop.png
    │   └── styles/
    ├── components/
    │   ├── DisplayIpAddress.jsx
    │   ├── Map.jsx
    │   └── SearchIpAddress.jsx
    ├── hooks/
    │   ├── useFetch.jsx
    │   └── useIpValidation.jsx
    ├── App.jsx
    └── main.jsx

- SearchIpAddress handles user input, API calls, and orchestrates child components.

- DisplayIpAddress shows IP information in a floating card.

- Map renders the map and marker using React-Leaflet.

- useFetch is a reusable custom hook for API requests.

## Reflection

This IP Address Tracker is a responsive React app that allows users to search for any IP address or domain and view detailed geolocation information on an interactive map. I implemented a custom useFetch hook for API requests and a useIpValidation hook to ensure valid input. Leaflet was used for map rendering with a custom marker and dynamic recentering. Challenges included managing asynchronous data updates and fixing map marker issues, which I resolved with proper state handling and useEffect. Future improvements could include IPv6 support, caching, and unit tests for better reliability.




