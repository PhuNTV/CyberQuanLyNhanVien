function Validation() {

    this.checkEmpty = function(valueInput, spanID, message) {
        if (valueInput == "") {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true
    }

    this.checkAccountNumber = function(valueInput, spanID, message) {

        var regexAcc = /^[0-9]{4,6}$/;

        if (regexAcc.test(valueInput)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false;

    }

    this.checkAccountExist = function(valueInput, spanID, message, empArray) {

        var isExist = false;

        isExist = empArray.some(function(emp) {
            return valueInput === emp.account;
        });

        if (isExist) {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false

        } else {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

    }

    this.checkName = function(valueInput, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkEmail = function(valueInput, spanID, message) {
        var patternString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (valueInput.match(patternString)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }


    this.checkPass = function(valueInput, spanID, message) {
        var pattern = /^(.{6,10}|[\W_]|\d|[A-Z])$/

        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }

    this.checkBasicSalary = function(valueInput, spanID, message) {

        if (valueInput >= 1000000 && valueInput <= 20000000) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkSelect = function(selectPosition, spanAcc, message) {
        var indexOption = document.getElementById(selectPosition).selectedIndex;

        if (indexOption !== 0) {
            document.getElementById(spanAcc).style.display = "none";
            document.getElementById(spanAcc).innerHTML = "";
            return true
        }

        document.getElementById(spanAcc).style.display = "block";
        document.getElementById(spanAcc).innerHTML = message;
        return false
    }

    this.checkWorkingHourOfMonth = function(valueInput, spanID, message) {

        if (valueInput >= 80 && valueInput <= 200) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }

}