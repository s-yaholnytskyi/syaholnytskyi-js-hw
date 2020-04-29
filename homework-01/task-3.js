const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Enter your password');
switch(message) {
    case null:
        message = 'Canceled by user';
        break;
    case ADMIN_PASSWORD:
        message = 'You are welcome!';
        break;
    default:
        message = 'Access denied. Password incorrect';
}
alert(message);
