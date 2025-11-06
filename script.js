let name = prompt('Введите ваше имя');
let age = Number(prompt('Введите ваш возраст'));

if (age < 18) {
    alert('Ваш возраст не подходит!');
} else {
   
    alert('Ваш возраст подходит для регистрации!');

    let account;
    while (true) {
        account = prompt('Введите ваш аккаунт');
    if (account.includes('@')) {
        alert('Аккаунт успешно добавлен!');
        break
    } else {
        alert('Повторите снова!');
    }
    }

    let password;
    while (true) {
        password = prompt('Введите пароль от вашего аккаунта');
    if (password.length < 6 || password.length > 12) {
        alert('Пароль должен содержать от 6 до 12 символов!');
    } else {
        alert('Пароль успешно введен!');
        break
    }
    }
}
