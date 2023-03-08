function ListEmployee() {

    this.empArray = [];

    this.addEmployee = function(emp) {
        this.empArray.push(emp);
    }

    this.findIndexEmp = function(id) {
        var indexFind = -1;
        indexFind = this.empArray.findIndex(function(emp) {
            return emp.account == id;
        })
        return indexFind;
    }

    this.deleteEmployee = function(id) {
        var index = this.findIndexEmp(id);
        if (index != -1) {
            this.empArray.splice(index, 1);
        }

    }

    this.updateEmployee = function(emp) {
        var index = this.findIndexEmp(emp.account);
        if (index != -1) {
            this.empArray[index] = emp;
        }
    }



}


ListEmployee.prototype.searchRate = function(keyword) {


    var resultArray = [];

    var keywordLowerCase = keyword.toLowerCase();

    keywordLowerCase = keywordLowerCase.replace(/\s/g, "");

    console.log(keywordLowerCase);
    this.empArray.map(function(emp) {
        var rateLowerCase = emp.rate.toLowerCase().replace(/\s/g, "");
        // nameLowerCase.replace(/\s/g, "");

        if (rateLowerCase.indexOf(keywordLowerCase) > -1) {
            //tìm được emp theo tên
            resultArray.push(emp);
        }

    });


    return resultArray;


}