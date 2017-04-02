[![Video Slideshow](https://raw.githubusercontent.com/oknoorap/vidshow/develop/logo.png)](https://github.com/oknoorap/vidshow)
# Video Slideshow
`vidshow` is a simple cli-tool to generate a slideshow video using native FFMPEG tools.
---
[![NPM](https://nodei.co/npm/vidshow.png)](https://nodei.co/npm/vidshow/)  
[![GitHub tag](https://img.shields.io/github/tag/oknoorap/vidshow.svg)]() [![Build Status](https://travis-ci.org/oknoorap/vidshow.svg?branch=master)](https://travis-ci.org/oknoorap/vidshow) 
---
## Install
Since `vidshow` is a cli you should install this package globally.
> `npm install vidshow -g`

## Usage
After installation was finished, you can use commands below:

### `vidshow init`
Go to your directory and init it as a project, prompt will be appears.  
* **FFMPEG Path** (Set your FFMPEG binary path, .exe in windows)
* **Random Music** Directory (Set a directory which has collection of mp3 music)
* **Output Directory** (Set output directory)
* **Font Directory** (Set font directory for subtitle purpose, C:\\Windows\\Fonts in windows)

After initialized, you'll see these files in your current directory.  
* `.vidshow` is an init configuration
* `fonts.json` will be used for subtitle purpose
* `script.js` is a callback (see below)

#### `script.js`
This file a queue callback which is called in `vidshow new` command, script contains three part.  
* `before` will be executed before generator showing a prompt.
* `queue` will be executed when images will be added in queues. You can modify a custom duration or subtitle for each file.
* `finish` will be executed after generator has been finished.

### `vidshow new`
Generate a new video from specified directory, prompts will be appears.  
* **Video Title** is your video filename.
* **Duration** is how many duration an images should be displaying, before next slide.
* **Image directory** is directory that contains images (shold be contains 3 images or more).
* **Load subtitle** whether you will load a subtitle from file or not.
* **Subtitle** file will be appears if you load a subtitle.

## Example
You can see example project in [example](https://github.com/oknoorap/vidshow/tree/develop/example) directory.

## Next Todo
* [ ] Using `node-fluent-ffmpeg`

## License
MIT
