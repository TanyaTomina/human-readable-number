module.exports = function toReadable (number) {
    const simple_number = ['zero','one' ,'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const du_number = ['ten','eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dec_number = ['twenty', 'thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const hundred = 'hundred';
    let digit;
    let du;
    let dec;
    let i;
    let current;

    if (number >= 0 && number < 10) {
        i = number;
        digit = simple_number[i];
        return digit;
    } else if (number >= 10 && number <= 19) {
        i = number.toString().split('').pop();
        du = du_number[i];
        return du;
    } else if (number > 19 && number <= 99) {
        i = number.toString().split('').shift() - 2;
        digit = simple_number[number.toString().split('').pop()];
        dec = dec_number[i];
        if (digit === 'zero') {
            return dec;
        } else {
            return dec + ' ' + digit;
        }
    } else if (number >= 100 && number < 1000) {
        let hund = simple_number[number.toString().split('').shift()] + ' ' + hundred;
        number.toString().split('').shift();

        if (number - number.toString().split('').shift() * 100 >= 0 && number - number.toString().split('').shift() * 100 < 10) {
            current = (number - (number.toString().split('').shift() * 100));
            i = current;
            digit = simple_number[i];
                if (digit === 'zero') {
                    return hund;
                } else {
                    return hund + ' ' + digit;
                }
        } else if (((number - number.toString().split('').shift() * 100) >= 10) && ((number - number.toString().split('').shift() * 100) <= 19)) {
            i = number.toString().split('').pop();
            du = du_number[i];
            return hund + ' ' + du;
        } else if (((number - number.toString().split('').shift() * 100) > 19) && ((number - number.toString().split('').shift() * 100) <= 99)) {
            current = (number - number.toString().split('').shift() * 100);
            i = current.toString().split('').shift() - 2;
            digit = simple_number[number.toString().split('').pop()];
            dec = dec_number[i];
                if (digit === 'zero') {
                    return hund + ' ' + dec;
                } else {
                    return hund + ' ' + dec + ' ' + digit;
                }
        }
    }
}
