$(document).ready(function () {
    var operant1 = '';
    var operant2 = '';
    var operator = '';
    var cavab = '';

    $('.number').on('click', function () {
        if (!operator) {
            operant1 += this.value;
        } else {
            operant2 += this.value;
        } if (cavab) {
            return;
        }
        display();
    })

    $('.operator').on('click', function () {
        
        if (!operant1) {
            operator = '';
        }if (operant2) {
            return;
        }
        operator = this.value;
        display();
    })

    $('.equal').on('click', function () {
        if (operator === '+') {
            cavab = parseInt(operant1) + parseInt(operant2);
        } else if (operator === '-') {
            cavab = parseInt(operant1) - parseInt(operant2);
        } else if (operator === '*') {
            cavab = parseInt(operant1) * parseInt(operant2);
        } else if (operator === '/') {
            cavab = parseInt(operant1) / parseInt(operant2);
        }
        $('.result').html(cavab);
        display();
    })
    function display() {
        $('.screen').html(operant1 + operator + operant2);
        $('.result').html(cavab);
    }
    $('.clear').on('click', function () {
        operant1 = '';
        operant2 = '';
        operator = '';
        cavab = '';
        display();
    })
})