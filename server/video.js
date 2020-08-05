module.exports = {
    download: (v) => {
        const video = youtubedl('http://www.youtube.com/watch?v' + v,
        ['--format=18'],
        { cwd: __dirname })
        
        // Will be called when the download starts.
        video.on('info', function(info) {
        console.log('Download started')
        console.log('filename: ' + info._filename)
        console.log('size: ' + info.size)
        })
        
        video.pipe(fs.createWriteStream('myvideo.mp4'))
    }
}