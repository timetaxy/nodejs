// 서버관련 설정만
const app = require('./app');
const port = 3000;

app.listen(port,()=>{
    console.log('Express listening port', port);
});