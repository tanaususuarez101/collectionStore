function saveUser() {

    var email = document.forms["sign-in-nav"]["email"].value;
    var name = document.forms["sign-in-nav"]["name"].value;
    var password = document.forms["sign-in-nav"]["password"].value;
    var password_confirm = document.forms["sign-in-nav"]["confirm-password"].value;

    if (!validation(password,password_confirm)) return false;

    /* GUARDADO EN LOCALSTORE PROVISIONALMENTE */

    localStorage.setItem(email, JSON.stringify({
        "name": name,
        "password": password
    }));

    var NodeChild = document.getElementById('alert-sign-in');
    if ( NodeChild != null ) NodeChild.parentNode.removeChild(NodeChild);
    build_alert_sign_in();


    return false;

}
function build_alert_sign_in() {
    var elem_div = document.createElement( 'div' );
    elem_div.setAttribute( 'id' , 'alert-sign-in' );
    elem_div.setAttribute( 'class' , 'alert alert-success show' );
    elem_div.setAttribute( 'role' , 'alert' );

    elem_div.innerHTML ='<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
        '    <span aria-hidden="true">&times;</span>\n' +
        '</button>\n' +
        '<p id="message-alert">Bienvenido a Movie DAW</p>';

    document.getElementById( 'content-alert-sign-in' ).appendChild( elem_div );
}

function validation(password,password_confirm) {

    var regex = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/);
    if( password == null || password.length === 0 || !regex.test(password) ) {
        $('#password-sign-in').addClass('is-invalid');
        return false;
    } else  $('#password-sign-in').removeClass('is-invalid');


    if (password !== password_confirm) {
        $('#confirmPassword-sign-in').addClass('is-invalid');
        return false;
    } else   $('#confirmPassword-sign-in').removeClass('is-invalid');


    return true;
}