# Cameos

A Youtube Replica project built using React.JS, Redux, Firebase Auth, YouTube Data API. The project utilizes Firebase Auth to authorise the user using there google account to access a responsive React.JS Front End which present videos along with its details fetched though Redux and YouTube Data API v3.

## Deployment
https://cameos-arnavsharma2711.netlify.app
>If the app does show data that might be the case of YouTube API exhausted for the day.

## Prerequisite
* You must have node.js installed in your system.
* Add a .env file in the root folder and enter the following line
```bash
REACT_APP_YT_API_KEY = "your-api-key"
```
> To get the your api key use Google Cloud Platform and enable youtube data api v3.

* Use the package manager to install applications prerequisite node_modules
```bash
npm i
```

## How to access the project
Run the following to command to run the app in the development mode.
```bash
npm start
```
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

## Synopsis of the project
* The app runs in home screen by default but if it is not able to find an access token then it is navigated to login screen. 
* The login screen consists of Firebase Auth access button which when pressed utilize Firebase Auth to authorise the user. This action is takes place in auth.action.jsx. The access token is created here which consist of user's name and profile picture URL. When the app finds an access token it is navigated back to Home Screen.
* Home Screen consist of a header, sidebar, categories bar and a video holder component. By default, most poplar videos in India are fetched and displayed to the video holder component. All various videos fetch action takes place in videos.action.jsx file. Videos can be accessed by clicking over them. Please Note all the videos might not be accessible due the channel specifications.
* Categories bar is a dummy array which fetch popular videos in that category and display over the video holder component. Sidebars consist of Popular categories and link to user Subscriber screen and liked videos screen. Header components consist of search input which displays 20 results based on your input query in the Search Screen.
* Video Playback Screen consist of an iframe to play video along with video's metadata and related videos. You can enter your comment through this screen.
* Search Screen, Liked Screen, Subscriber Screen consist of videos and channel list as per user’s query, all videos user liked videos (at max 15) and subscriptions respectively.


## Screenshots
* Login Screen : ![Login Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/1.%20Login%20Screen.png?raw=true "Login Screen")
* Firebase Auth : ![Firebase Auth](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/2.%20Firebase%20Auth.png?raw=true "Firebase Auth")
* Home Screen : ![Home Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/3.%20Home%20Screen.png?raw=true "Home Screen")
* Category Select : ![Category Select](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/4.%20Category%20Select.png?raw=true "Category Select")
* Search Screen : ![Search Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/5.%20Search%20Screen.png?raw=true "Search Screen")
* Video Playback Screen : ![Video Playback Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/5.%20Video%20Playback%20Screen.png?raw=true "Video Playback Screen")
* Liked Screen : ![Liked Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/6.%20Liked%20Screen.png?raw=true "Liked Screen")
* Subscriber Screen : ![Subscriber Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/7.%20Subscriber%20Screen.png?raw=true "Subscriber Screen")

## Future Scope of this project
1. Adding functionally Subscriptions for channels.
2. Adding a dummy user for easy project access.
3. Adding more ways to authenticate user.

## References
* React.JS->\
https://reactjs.org/docs/getting-started.html
* Redux->\
https://redux.js.org/introduction/getting-started
* Firebase->\
https://firebase.google.com/docs/web/setup
* YouTube Data API->\
https://developers.google.com/youtube/v3/getting-started
* React Router DOM->\
https://reactrouter.com/docs/en/v6
* Miscellaneous -> [Axios](https://www.npmjs.com/package/axios "Axios"), [Bootstrap](https://www.npmjs.com/package/bootstrap "Bootstrap"), [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component "React Infinite Scroll Component"), [React Conent Loader](https://www.npmjs.com/package/react-content-loader "React Conent Loader"), [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component "React Lazy Load Image Component"), [React Helmet](https://www.npmjs.com/package/react-helmet "React Helmet"), [Numeral](https://www.npmjs.com/package/numeral "Numeral"), [Moment](https://www.npmjs.com/package/moment "Moment")
