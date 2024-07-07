// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"

let arr = [];

// app.get('/skam', function(req, res) {
//     var id = req.query.id;
//     arr.push(id);
//     console.log(arr);
// });

// app.get('/', (req, res)=>{
//     let send_str = '';
//     for (let i = 0; i < arr.length; i++){
//         send_str = send_str + arr[i] + "\n";
//     }
//     res.send(arr);
// })

app.use(function(req, res) {
    if (req.originalUrl != "/"){
        arr.push(req.originalUrl);
    }else{
        res.send(arr);
    }

    // var id = req;
    // console.log(id.originalUrl);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);