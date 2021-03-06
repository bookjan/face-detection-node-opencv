# face-detection-node-opencv

Forked from [drejkim](https://github.com/drejkim/face-detection-node-opencv)

Real-time face detection using OpenCV, Node.js, WebSockets and ngrok.

Click [here](http://youtu.be/v2SY0naPBFw) to see it in action.

## Requirements

* [Node.js](http://nodejs.org/)
* [OpenCV 3.4.0](http://opencv.org/)
    * May also work with older versions of OpenCV, but most recently tested with OpenCV 3.4.0
* A webcam, e.g. laptop-integrated webcam, USB webcam

## Installing Node.js packages

* Navigate to the `project_root` directory
* To install the packages: `npm install`

## Running the demo

* Make sure you are still in the `project_root` directory
* To run the server: `node server.js` then you will get the `ngrokURL` in terminal
* To run the demo, open a browser and go to `ngrokURL`

The app should be up and running!

## References
* http://stackoverflow.com/questions/24107378/socket-io-began-to-support-binary-stream-from-1-0-is-there-a-complete-example-e/24124966#24124966Ｖ
* https://gist.github.com/jonleighton/958841
* https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string/9458996#9458996ＶＶ