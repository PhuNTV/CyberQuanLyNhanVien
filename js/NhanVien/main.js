const listEmployee = new ListEmployee();
const validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function displayTable(arr) {
    var content = "";
    arr.map(function(emp) {
        var trELE = `<tr>
            <td>${emp.account}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.dayStartWork}</td>
            <td>${emp.position}</td>
            <td>${new Intl.NumberFormat('vn-VN').format(emp.totalSalary)}</td>
            <td>${emp.rate}</td>
            <td>
                <button onclick="deleteEmpFromLocal('${emp.account}')"   class="btn btn-danger btnCreate"  >Xóa</button>
                <button onclick="viewDetail('${emp.account}')"       class="btn btn-info btnCreate" >Xem</button>
            </td>
        </tr>`
        content += trELE;
    })
    getELE("tableDanhSach").innerHTML = content;
}


function setLocalStorage(arr) {
    localStorage.setItem("ListEmployee", JSON.stringify(arr));
}

function getLocalStorage() {
    if (localStorage.getItem("ListEmployee") != null) {
        listEmployee.empArray = JSON.parse(localStorage.getItem("ListEmployee"));
        displayTable(listEmployee.empArray);
    }
}
getLocalStorage();


function addEmpFromForm() {
    var account = getELE("tknv").value;
    var name = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var dayStartWork = getELE("datepicker").value;
    var basicSalary = getELE("luongCB").value;
    var position = getELE("chucvu").value;
    var workingHourOfMonth = getELE("gioLam").value;

    var isValid = true;

    // check account
    isValid &= validation.checkEmpty(account, "tbTKNV", "Account không để trống!") && validation.checkAccountNumber(account, "tbTKNV", "Account tối đa 4-6 ký số") && validation.checkAccountExist(account, "tbTKNV", "Account không được trùng", listEmployee.empArray);


    // check name
    isValid &= validation.checkEmpty(name, "tbTen", "Tên nhân viên không để trống!") && validation.checkName(name, "tbTen", "Tên nhân viên chưa đúng định dạng!");


    // check email

    isValid &= validation.checkEmpty(email, "tbEmail", "Email không để trống!") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng!")

    // check pass
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không để trống!") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu chưa đúng định dạng!")

    // check ngày làm
    isValid &= validation.checkEmpty(dayStartWork, "tbNgay", "Ngày làm không để trống!") && validation.checkDay(dayStartWork, "tbNgay", "Ngày làm chưa đúng định dạng!");

    //check lương cơ bản
    isValid &= validation.checkEmpty(basicSalary, "tbLuongCB", "Lương không để trống!") && validation.checkBasicSalary(basicSalary, "tbLuongCB", "Lương chưa hợp lệ!")

    // check  chức vụ
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chức vụ chưa hợp lệ!");

    // check số giờ làm
    isValid &= validation.checkEmpty(workingHourOfMonth, "tbGiolam", "Số giờ không để trống!") && validation.checkWorkingHourOfMonth(workingHourOfMonth, "tbGiolam", "Số giờ chưa hợp lệ!");

    if (isValid) {
        var employee = new Employee(account, name, email, pass, dayStartWork, Number(basicSalary), position, Number(workingHourOfMonth));
        employee.calTotalSalary();
        employee.employRating();

        listEmployee.addEmployee(employee);
        listEmployee.updateEmployee(employee);
        displayTable(listEmployee.empArray);
        setLocalStorage(listEmployee.empArray);
    }
}


function deleteEmpFromLocal(id) {
    listEmployee.deleteEmployee(id);
    setLocalStorage(listEmployee.empArray);
    getLocalStorage()
}




function viewDetail(id) {

    var index = listEmployee.findIndexEmp(id);

    if (index != -1) {
        getELE("tknv").value = listEmployee.empArray[index].account;
        getELE("tknv").disabled = true;
        getELE("name").value = listEmployee.empArray[index].name;
        getELE("email").value = listEmployee.empArray[index].email;
        getELE("password").value = listEmployee.empArray[index].pass;
        getELE("datepicker").value = listEmployee.empArray[index].dayStartWork;
        getELE("luongCB").value = listEmployee.empArray[index].basicSalary;
        getELE("chucvu").value = listEmployee.empArray[index].position;
        getELE("gioLam").value = listEmployee.empArray[index].workingHourOfMonth;
        getELE("btnDong").onclick = function() {
            getELE("tknv").value = "";
            getELE("tknv").disabled = false;
            getELE("name").value = "";
            getELE("email").value = "";
            getELE("password").value = "";
            getELE("luongCB").value = "";
            getELE("chucvu").value = 0;
            getELE("gioLam").value = "";
        }
    }
}

getELE("btnCapNhat").onclick = update;


getELE("searchRateEmp").onkeyup = function() {
    var keyword = getELE("searchRateEmp").value;
    var result = listEmployee.searchRate(keyword);
    displayTable(result);
}