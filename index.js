(function () {
    // Your code here
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num; /* dataset is a property that allows access to custom data attributes. */
            screen.value += value;
        }) /*ats It so guys ere you can see at Insl e
        our this function first i have to check which button was pressed so for finding out the button
name and the button data we are using for each and then i want to take the values from the
uttons if any button was pressed or if any button was clicked so that's why i'm using add
evenlister and if anyone clicks our buttons i want to take the value of that button and then push tat values on screen*/
        
    });
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "enter a value";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function (e) {
        screen.value = '';
    })
})();