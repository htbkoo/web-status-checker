var express = require('express');
var cors = require('cors');
var router = express.Router();

const request = require('superagent');

var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/* GET users listing. */
router.get('/*', cors(corsOptions), function (req, res, next) {
    var url = req.param(0);

    if (url) {
        request
            .get(url)
            .end((err, result) => {
                if (err) {
                    res.json({
                        isSuccessful: false,
                        meta: {
                            isError: true,
                            err: err
                        },
                    });
                } else {
                    var isOk = result.ok;
                    if (isOk) {
                        res.json({
                            isSuccessful: true,
                            meta: {
                                isError: false,
                            },
                        });
                    } else {
                        res.json({
                            isSuccessful: false,
                            meta: {
                                isError: false,
                                result: result
                            },
                        });
                    }

                }

                // Calling the end function will send the request
            });
    } else {
        res.json({
            isSuccessful: false,
            isEmpty: true,
            meta: {
                isError: false
            },
        });
    }
});

module.exports = router;
