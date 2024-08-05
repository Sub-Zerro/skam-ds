

// document.createElement('script').src="https://github.com/Sub-Zerro/skam-ds/blob/master/negr.js";

add_form();



function add_form(){
    document.querySelector('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table:nth-child(3)').remove();
    document.querySelector('h2').remove();
    let my_form = document.querySelector('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2)').innerHTML = `
        <h2><img src="images/b2.gif" width="6" height="5" border="0" alt="" align="absmiddle"><img src="images/e.gif" width="5" height="1" border="0" alt="" align="absmiddle">Авторизация</h2>

        <br></br>
        <form class="login100-form validate-form flex-sb flex-w">

        <div class="wrap-input100 validate-input m-b-16" data-validate="Username is required">
        <input class="input100" type="text" name="username" placeholder="Логин" wfd-id="id0">
        <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100 validate-input m-b-16" data-validate="Password is required">
        <input class="input100" type="password" name="pass" placeholder="Пароль" wfd-id="id1">
        <span class="focus-input100"></span>
        </div>
        <div class="flex-sb-m w-full p-t-3 p-b-24">


        </div>
        <div class="container-login100-form-btn m-t-17">
        <button class="login100-form-btn" id="btn">
        Вход
        </button>
        </div>
        </form>
    `

    document.getElementById('btn').addEventListener('click', (event)=>{
        event.preventDefault();
        alert('Заскамил');
        add_negr();
    });
}




function add_negr(){
    let td = document.querySelector('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2)');
    let img = document.createElement('img');
    img.src = "https://avatars.mds.yandex.net/i?id=e6261ea07369f2df55d0fd7f63980314c8eb346d0eae38ca-5339410-images-thumbs&n=13";
    td.appendChild(img);
}
