var express = require("express");
const cors = require('cors');
const fs = require('fs');
const youtubedl = require('youtube-dl');
const video = require('./video');


const PORT =  1337;


var app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('hello you');
});

app.get('/download/:v', (req, res) => {
    var v = req.url.replace('/download/', '');
    res.json({
        'url': v
    });
    const video = youtubedl('http://www.youtube.com/watch?v=' + v,
        [],
        { cwd: __dirname })
        
        // Will be called when the download starts.
    video.on('info', function(info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
    })
    
    video.pipe(fs.createWriteStream('myvideo.mp4'))
});