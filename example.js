var LineReader = require('./linereader');

var lr = new LineReader('./linereader.js',{startPaused:true});

lr.countLines(function(count){

    console.log("Total lines:", count);

    lr.on('error', function (err) {
        console.log(err);
        lr.close();
    });

    lr.on('line', function (lineno, line) {
        if (lineno <= 100) {
            console.log(lineno + "   " + line);
        } else {
            lr.close();
        }
        lr.pause();
        setTimeout(function () {
            lr.resume();
        }, 50);
    });

    lr.on('end', function () {
        console.log("End");
    });

    lr.resume();

})

