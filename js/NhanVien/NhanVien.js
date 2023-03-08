function Employee(account, name, email, pass, dayStartWork, basicSalary, position, workingHourOfMonth) {

    this.account = account;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.dayStartWork = dayStartWork;
    this.basicSalary = basicSalary;
    this.position = position;
    this.workingHourOfMonth = workingHourOfMonth;

    this.totalSalary = 0;
    this.calTotalSalary = function() {
        if (this.position == "Sếp") {
            this.totalSalary = this.basicSalary * 3;
        } else if (this.position == "Trưởng phòng") {
            this.totalSalary = this.basicSalary * 2;
        } else if (this.position == "Nhân viên") {
            this.totalSalary = this.basicSalary;
        }
    };

    this.rate = "";
    this.employRating = function() {
        if (this.workingHourOfMonth >= 192) {
            this.rate = "Xuất Sắc";
        } else if (this.workingHourOfMonth >= 176) {
            this.rate = "Giỏi";
        } else if (this.workingHourOfMonth >= 160) {
            this.rate = "Khá";
        } else {
            this.rate = "Trung Bình";
        }
    }
}