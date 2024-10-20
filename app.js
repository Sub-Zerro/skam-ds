const fs = require("fs");
//модули

const express = require("express");
const { resolve } = require("path");
const { rejects } = require("assert");
const { get } = require("express/lib/response");
// подключение express
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"

//let arr = [];

let now_arr;

app.use(async function(req, res) {
    now_arr = await get_json();
    now_arr = now_arr.logs;

    if (req.originalUrl == "/clear"){
        write_json('{"logs": []}');
        console.log('clear');
    }else{
        if (req.originalUrl != "/" && req.originalUrl != "/favicon.ico"){
            //arr.push(req.originalUrl);
            let temp_obj = await get_json();
            temp_obj.logs.push(req.originalUrl);
            //console.log(temp_obj.logs);
            //temp_obj["logs"] = req.originalUrl;
            write_json(JSON.stringify(temp_obj));
    
            now_arr = temp_obj.logs;
            
        }else{
            console.log(now_arr);
            res.send(now_arr);
        }
    }

    

    
    
});

function get_json(){
    return new Promise(async function(resolve, reject) {
        await fs.readFile('logs.json', 'utf-8', (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(content))
            }
            return;
        })
    }).then((data)=>{
        return data;
    })
}

function write_json(data){
    fs.writeFile("logs.json", data, function(error){
        if(error){  // если ошибка
            return console.log(error);
        }
        console.log("Файл успешно записан");
    });
}

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);