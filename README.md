![laserdisc logo](https://raw.githubusercontent.com/edweena/laserdisc/master/___laserdisc.gif)

# LASERDISC-FULLSCREEN
## Video Stretcher

WARNING: ALPHA RELEASE IN ACTIVE DEVELOPMENT. MOST OF THE FEATURES BELOW WORK, BUT SOME ARE STILL UNDER CONSTRUCTION. USE AT YOUR OWN RISK. BREAKING CHANGES WILL OCCUR UNTIL BETA RELEASE – WHICH WILL BE SOON

LASERDISC-FULLSCREEN is a super simple sub-module of [LASERDISC](https://github.com/edweena/laserdisc) who's sole purpose is to keep your video stretched to fill the screen. The video will maintain aspect ratio, so this will mean some croppage will occur depending on your screen dimensions. 

The module allows you to pass in a parent container, which the video will crop to. If no container is passed in, the video will stretch to fill the window.

This is a standalone version of the module. If you are also using [LASERDISC](https://github.com/edweena/laserdisc), this module will already be included and can be activated in standard options parameter.

### Setting up LASERDISC-FULLSCREEN
```
npm install --save laserdisc-fullscreen
```

###STYLING
The only caveat here, is that if you are placing the video inside any kind of wrapper or container, make sure you have `position relative` set somewhere on the parent, as the video itself will be absolutely positioned. See CSS below


## Example setup

HTML (Couple variations)
```html
<div class="someclassname" id="container1">
  <video id="video">
    <source src="yo.mp4" type="video/mp4" />
    <source src="yo.webm" type="video/webm" />
  </video>
</div>

<div class="someclassname" id="container2">
  <iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/yoz0gaSBkgY" frameborder="0" allowfullscreen></iframe>
</div>

```


JS
```js
//import module
import FullScreen from 'laserdisc-fullscreen';

//optionally pass in parent containers
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

//optional ratio parameter. Defaults to 16 / 9;
const ratio = 16 / 9;

//get actual video players
const targetVideo = document.getElementById('video');
const targetIframe = document.getElementById('iframe');

//run the module, either calling direct, or instantiating new
FullScreen(targetVideo, container1, ratio);
const f = new FullScreen(targetIframe, container2, ratio);

//Or only with required parameter, which will thereby default to window container and 16 / 9 crop ratio
FullScreen(targetIframe);
const p = new FullScreen(targetVideo);

```

CSS

```css

.someclassname{
  position: relative;
  /*width: yourwidth;*/
  /*height: yourheight;*/
}

.someclassname video{
  /*this will be absolutely positioned*/
}

```


*Cool logo by Stephanie Davidson*

