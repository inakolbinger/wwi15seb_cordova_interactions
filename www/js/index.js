/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        document.getElementById("btnCall").addEventListener("click", this.startCall);
        document.getElementById("btnOpenMap").addEventListener("click", this.openGoogle);
        document.getElementById("btnNavigator").addEventListener("click", this.openNavigator);
        document.getElementById("btnInstagram").addEventListener("click", this.post);
    },
    startCall: function() {
        console.log('Button clicked.');
        var number = '015129130058';
        var bypassAppChooser = true;
        window.plugins.CallNumber.callNumber(onSuccess, onError, number, bypassAppChooser);
        function onSuccess(result){
            console.log("Success:"+result);
        }

        function onError(result) {
            console.log("Error:"+result);
        }
    },
    openGoogle: function() {
        window.location.href = "https://www.google.com/maps/search/?api=1&query=Mannheim";
    },
    openNavigator: function () {
        window.location.href = "https://www.google.com/maps/dir/?api=1&destination=Mannheim";
    },
    post: function() {
      navigator.camera.getPicture(onSuccess, onFail, { quality: 100,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY, destinationType: Camera.DestinationType.DATA_URL, encodingType: Camera.EncodingType.JPEG});

      function onSuccess(data) {
        var url = "data:image/jpeg;base64," + data;
        var caption = "Schönes Bild";
        Instagram.share(url, caption, function (err) {
          if (err) {
            console.log("not shared");
          } else {
            console.log("shared");
          }
        });
      }

      function onFail(message) {
        alert('Failed because: ' + message);
      }

    }
};

app.initialize();