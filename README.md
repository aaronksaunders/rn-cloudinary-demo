# rn-cloudinary-demo
This is a react-native IOS module to interact with the Cloudinary APIs for Image and Video management.

- [Cloudinary APIs - Video Management](http://cloudinary.com/documentation/video_management)
- [Cloudinary APIs - Image Management](http://cloudinary.com/documentation/upload_images)

Sample Useage:

```js
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  DeviceEventEmitter, // <== Must Include !!
  Text,
  View,
} = React;

// Load Up our Native Module..
var {
    RNCloudinary
} = require('NativeModules');


// List for progress updated from the upload
var subscription = DeviceEventEmitter.addListener(
  RNCloudinary.ProgressEvent,
  (progressInfo) => console.log(progressInfo)
);

// call function with callback
RNCloudinary.uploadImage("", function(_response){
  console.log(JSON.stringify(_response,null,2));


  // Don't forget to unsubscribe, typically in componentWillUnmount
  subscription && subscription.remove();

});
```
Successful Output:
```
2015-05-14 23:23:46.923 [info][tid:com.facebook.React.JavaScript] "{
  "success": true,
  "result": {
    "version": 1431660226,
    "resource_type": "image",
    "bytes": 829971,
    "created_at": "2015-05-15T03:23:46Z",
    "width": 3872,
    "tags": [],
    "url": "http://res.cloudinary.com/clearly-innovative-inc/image/upload/v1431660226/vrxsddvzxm5fzxzqj5k2.jpg",
    "type": "upload",
    "signature": "e9b8f9e041b25d91b2dde06224ea48f007c2448c",
    "public_id": "vrxsddvzxm5fzxzqj5k2",
    "height": 2592,
    "format": "jpg",
    "secure_url": "https://res.cloudinary.com/clearly-innovative-inc/image/upload/v1431660226/vrxsddvzxm5fzxzqj5k2.jpg",
    "etag": "fc7dc48d44fc9e239de229415a458efe"
  },
  "publicId": "vrxsddvzxm5fzxzqj5k2"
}"
```
Progress Response from Event Subscription:
```
2015-05-14 23:23:46.256 [info][tid:com.facebook.React.JavaScript] {"bytesWritten":"32768","totalWritten":"688128","totalExpected":"830410"}
2015-05-14 23:23:46.272 [info][tid:com.facebook.React.JavaScript] {"bytesWritten":"32768","totalWritten":"720896","totalExpected":"830410"}
2015-05-14 23:23:46.289 [info][tid:com.facebook.React.JavaScript] {"bytesWritten":"32768","totalWritten":"753664","totalExpected":"830410"}
2015-05-14 23:23:46.306 [info][tid:com.facebook.React.JavaScript] {"bytesWritten":"32768","totalWritten":"786432","totalExpected":"830410"}
2015-05-14 23:23:46.323 [info][tid:com.facebook.React.JavaScript] {"bytesWritten":"32768","totalWritten":"819200","totalExpected":"830410"}
2015-05-14 23:23:46.323 [info][tid:com.facebook.React.JavaScript] {"bytesWritten":"11210","totalWritten":"830410","totalExpected":"830410"}
```
## Current Status
- [x] basic module completed with hard coded sample file
- [ ] pass in configuration API keys in initialization
- [ ] allow user to pass in file name for image/video upload
- [ ] allow user to pass in base64 encoded string for image
- [ ] support cloudinary url api for image/video manipulation
