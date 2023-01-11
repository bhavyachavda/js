const form = document.getElementById("form");

const numeric = document.getElementById("numeric");


form.addEventListener('submit', (e) => {

    e.preventDefault();

    validateInputs();

});


const setError = (element, message) => {

    const inputControl = element.parentElement;

    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = message;

    inputControl.classList.add('error');

    inputControl.classList.remove('success');

}


const setSuccess = element => {

    const inputControl = element.parentElement;

    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = 'Entered value is a numeric value';

    inputControl.classList.add('success');

    inputControl.classList.remove('error');

}

const validateInputs = () => {

    const numericValue = numeric.value.trim();

    if (numericValue === ' '){

        setError(numeric, "Please enter any numeric value");

    } else if (isNaN(numericValue)){

        setError(numeric, 'Only numeric values are allowed. Please re-enter the value');

    } else {

        setSuccess(numeric);

    }

}