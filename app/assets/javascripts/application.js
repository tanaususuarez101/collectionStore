// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

/************************** LOGIN *************************************/

function loginValidation() {
    var password = document.forms["sign-nav"]["password"].value;
    var email = document.forms["sign-nav"]["email"].value;


    var http = new XMLHttpRequest();
    var URL = 'http://localhost:63342/MovieProject/data/user.json';

    http.open('GET', URL, true);
    http.send();


    http.onreadystatechange = function () {


        if (!(this.readyState === 4 && this.status === 200)) return false;
        var json_data = JSON.parse(this.responseText);
        for (i = 0; i < json_data.length; i++) {

            if (json_data[i].email === email ) {
                if (password === json_data[i].password) {
                    showAlert( 'alert-success' , 'Bienvenido a Moview DAW' );
                    setCookie( 'username', email, 1 );
                    buildNavegation();
                }
                else showAlert( 'alert-danger' , 'ERROR: contraseña incorrecta' );
                return false;
            }

        }

        /* datos from LOCALSTORE */
        if (localStorage.getItem(email)){
            var user_localstore =  JSON.parse(localStorage.getItem(email));
            if (password === user_localstore.password) {
                showAlert( 'alert-success' , 'Bienvenido a Moview DAW' );
                setCookie( 'username', email, 1 );
                buildNavegation();
            }
            else showAlert( 'alert-danger' , 'ERROR: contraseña incorrecta' );
            return false;

        }
        showAlert( 'alert-warning' , 'Warning: Este usuario no está registrado' );

    };
    return false;
}
function showAlert(add_class, str) {

    /* destroy alert if exist */
    var NodeChild = document.getElementById('alert-login');
    if ( NodeChild != null ) NodeChild.parentNode.removeChild(NodeChild);

    buildAlert();

    var id_text_alert = document.getElementById( 'message-alert' );
    $( "#alert-login" ).addClass(add_class);
    id_text_alert.appendChild(document.createTextNode(str));
    $( '#open-login' ).modal( 'hide' );
}
function buildAlert() {
    var elem_div = document.createElement( 'div' );
    elem_div.setAttribute( 'id' , 'alert-login' );
    elem_div.setAttribute( 'class' , 'alert show' );
    elem_div.setAttribute( 'role' , 'alert' );

    elem_div.innerHTML ='<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
        '    <span aria-hidden="true">&times;</span>\n' +
        '</button>\n' +
        '<p id="message-alert"></p>';

    document.getElementById( 'content-alert-login' ).appendChild( elem_div );
}


/************************** NAVEGATION *************************************/
function fuction_noFound() {
    window.alert("Lo sentimos, esta función aun no está implementada");
}




/************************** COOKIES *************************************/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var chain = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = chain;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')    c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}



/************************** EVENTS  *************************************/


var buttonNavegation = [
    {
        name : "Home",
        id : "link-index"
    }

];


function buildNavegation() {


    var navHTML = '<ul class="navbar-nav mr-auto ">';
    for (var i = 0; i < buttonNavegation.length; i++) {
        navHTML += '<li class="nav-item ">\n' +
            '           <a  id="' + buttonNavegation[i].id + '" class="nav-link" href="#">' + buttonNavegation[i].name + ' </a>\n' +
            '       </li>';
    }
    navHTML += '</ul>';

    var user = getCookie( 'username' );


    navHTML +='<ul class="navbar-nav justify-content-end">';
    if (user == '') {
        navHTML += '<li class="nav-item ">\n' +
            '           <a id="link-login" class="nav-link" href="#open-login" data-toggle="modal">Iniciar sesión </a>\n' +
            '       </li>';
        navHTML += '<li class="nav-item ">\n' +
            '           <a id="link-sign-up" class="nav-link">Registrarme </a>\n' +
            '       </li>';

    } else {
        navHTML +='<li class="nav-item dropdown">\n' +
            '        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
            '          '+getCookie('username') +'\n' +
            '        </a>\n' +
            '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">\n' +
            '          <a class="dropdown-item" href="#">Mi cuenta</a>\n' +
            '          <a class="dropdown-item" href="#">Mis artíclos</a>\n' +
            '          <div class="dropdown-divider"></div>\n' +
            '          <a id="link-logout" class="dropdown-item" href="#">Salir</a>\n' +
            '        </div>\n' +
            '      </li>';
    }
    navHTML += '</ul>';



/*
    navHTML += '<form class="form-inline my-2 my-lg-0">\n' +
        '           <input class="form-control mr-sm-2" type="search" placeholder="ej: Venom..." aria-label="Search">\n' +
        '           <button class="btn btn-success my-2 my-sm-0 fa fa-search" type="submit"></button>\n' +
        '       </form>';
*/

    document.getElementById( 'navbarSupportedContent' ).innerHTML = navHTML;

}



$( document ).ready( function () {
    buildNavegation();
});