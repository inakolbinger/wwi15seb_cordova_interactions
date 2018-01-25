# Apache Cordova Interactions with other Applications
This is an example for a Apache Cordova App to start a Call and Interakt with Google and Instagram.

<p align="center">
  <img src="/img/Overview.png" width="250" height="433"/>
</p>

## Start a Call
To start a call from the cordova app first install the plugin cordova-plugin-call-number.
Type in the following in the shell in your project folder.


```{r, engine='bash', count_lines}
cordova plugin add cordova-plugin-call 
```

To use the plugin insert the following line in the code:

```js
window.plugins.CallNumber.callNumber(onSuccess, onError, number, bypassAppChooser);
```
* onSuccess: Callback Function 
* onError: Callback Function
* number: a telephone number as String
* bypassAppChooser: if the user can decide which app he wants to use in Boolean

More information can be found here: https://www.npmjs.com/package/cordova-plugin-call-number

## Use Google Maps API
To show a specific place in Google Maps add the following code:

```js
window.location.href = "https://www.google.com/maps/search/?api=1&query=place";
```

To open a navigation to the specific place from the current location add the following code:

```js
window.location.href = "https://www.google.com/maps/dir/?api=1&destination=place";
```

More information can be found here: https://developers.google.com/maps/documentation/urls/guide

##Share on Instagram
To share on instagram you need to install two plugins. The first one is to choose a picture which should be shared and the second is to share on instagram:

```{r, engine='bash', count_lines}
cordova plugin add cordova-plugin-camera
cordova plugin add cordova-instagram-plugin 
```

With the following method the gallery of the phone opens and the user can choose a picture.
Important is to implement the callback functions 'onSuccess' and 'onFail'.
<p align="center">
  <img src="/img/Gallary.png" width="250" height="433"/>
</p>

```js
navigator.camera.getPicture(onSuccess, onFail, { quality: 100, sourceType: Camera.PictureSourceType.PHOTOLIBRARY, destinationType: Camera.DestinationType.DATA_URL, encodingType: Camera.EncodingType.JPEG});
```

With the following function the Instagram app will open. The url parameters must be filled with the return parameter of the function above.
<p align="center">
  <img src="/img/Instagram.png" width="250" height="433"/>
</p>

```js
Instagram.share(url, caption, function (err) {...});
```
More information can be found here: https://www.npmjs.com/package/cordova-plugin-camera
and here: https://www.npmjs.com/package/cordova-instagram-plugin

