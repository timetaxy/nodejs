const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
// middleware setting, npm install morgan
// function 미들웨어

const bodyParser = require('body-parser');
// bodyparser npm install 불필요
// value 필터링 미들웨어

const admin = require('./routes/admin');

const app = express();
const port = 3000;

// template 경로일치 / express객체 일치
nunjucks.configure('template', {
    autoescape: true,
    // 스크립트코드 거름
    express: app
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// value처리 middleware
// app.use((req,res,next)=>{
//     req.body = {

//     }
// });
app.use('/uploads', express.static('uploads'));
// css, js 파일 정적 참조시 사용하는 방법 jpg가능

// template어디서도 접근가능, 미들웨어가 페이징처리라면, locals는 페이지내 소스분기처리
//  소스분기 미들웨어, 모든템플릿에서 접근가능
app.use((req, res, next) => {
    app.locals.isLogin = true;
    app.locals.req_path = req.path;
    // 현재 url에 따라 macro 동작시 필요변수
    next();
});

app.get('/', (req, res) => {
    res.send('hihihi this web');
});

app.get('/aaa', (req, res) => {
    res.send('another get');
});

// app.get('/aaa', (req, res) => {
//     res.send('another get');
// });

function only1Middleware(req, res, next) {
    console.log('more over middleware test');
    next();
}

app.use('/admin', only1Middleware, admin);
// 슬래시 주의 앞 슬래쉬 생략 안됨

// 쓰지 않는 변수 _ 처리
app.use((req, res, _) => {
    res.status(400).render('common/404.html');
});

app.use((req, res, _) => {
    res.status(500).render('common/500.html');
});

app.listen(port, () => {
    console.log('express listening on port', port);
});