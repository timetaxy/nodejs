const express = require('express');
const router = express.Router();

function testMiddleware(req, res, next) {
    console.log('1st middleware test');
    next();
}

function testMiddleware2(req, res, next) {
    console.log('2 middleware test');
    next();
}

// function requireLogin(req, res, next){
//     if(islogin){
//         res.redirect(/login);
//     }else{
//         next();
//     }
// }

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin req');
});

router.get('/products', (req, res) => {
    // res.send('admin req');
    res.render('admin/index.html', {
        // 앞에 슬래쉬 없을 것
        msg: 'test msg!!',
        aaa: '<h1>this is </h1>'
    })
});

router.get('/template2', (req, res) => {
    // res.send('admin req');
    res.render('admin/index2.html', {
        // 앞에 슬래쉬 없을 것
        msg: 'test msg!!',
        aaa: '<h1>this is a2</h1>'
    })
});

router.get('/products/write', (req, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
    // res.send('testValue');
    res.send(req.body);
});

module.exports = router;

