const inputs = document.getElementsByClassName('usInputs');
const infoIco = document.getElementsByClassName('pos');
const [names, num, mail, pass] = [...inputs];
const myForm = document.forms['myForm'];
const hosts = "@gmail.com";
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
function setError(i) {
    infoIco[i].style.color = "red";
    inputs[i].style.outlineColor = "red";
}
function clrError() {
    for (let err of inputs) {
        err.style.outlineColor = "green";
    }
    for (let ic of infoIco) {
        ic.style.color = "green";
    }
}
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const act = action();
    console.log(act);
    if (act) {
        const [na, nu, ma, pa] = [names.value, num.value, mail.value, pass.value];
        alert(`user name is ${na}, number is ${nu} & mail is ${ma}`);
        myForm.submit();
    }
})
myForm.addEventListener('input', action);
function action() {
    let returnVal = true;
    let isValid = regex.test(pass.value)
    clrError();
    if (names.value.length < 2 || names.value.length > 25) {
        setError(0);
        returnVal = false;
    }
    if (num.value.length != 10) {
        setError(1);
        returnVal = false
    }
    if (!mail.value.toLowerCase().includes(hosts)) {
        setError(2);
        returnVal = false
    }
    if (isValid === false || pass.value.length > 15) {
        setError(3);
        returnVal = false;
    }
    return returnVal;
};