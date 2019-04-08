// Hàm kiểm tra xem có nhập đủ input không
function inputsAreEmpty() {
	if (num1.value === '' || num2.value === '')
	{
		return true;
	} else
	{
		return false;
	}
}

// Hàm thực hiện khi bấm vào nút Tính
function calculate() {
	document.getElementById("error").style.visibility = "hidden";

	if (inputsAreEmpty())
	{
		error.textContent = 'Bạn đã nhập thiếu 1 số hoặc cả 2 số, vui lòng nhập lại!';
		document.getElementById("error").style.visibility = "visible";

		return;
	}

	if (isNaN(num1.value))
	{
		error.textContent = 'Giá trị nhập ô số thứ nhất không phải là số nên không thể tính được. Vui lòng nhập lại!';
		document.getElementById("error").style.visibility = "visible";

		return;
	}
	if (isNaN(num2.value))
	{
		error.textContent = 'Giá trị nhập ô số thứ hai không phải là số nên không thể tính được. Vui lòng nhập lại!';
		document.getElementById("error").style.visibility = "visible";

		return;
	}

	let a;
	let b;
	let c;

	a = parseInt(num1.value);
	b = parseInt(num2.value);

	if (document.getElementById("plus").checked == true)
	{
		c = a + b;
		result.value = c;
	}
	else if (document.getElementById("minus").checked == true)
	{
		c = a - b;
		result.value = c;
	}
	else if (document.getElementById("multiply").checked == true)
	{
		c = a * b;
		result.value = c;
	}
	else if (document.getElementById("divide").checked == true)
	{
		c = a / b;
		result.value = c;
	}
	else {
		error.textContent = 'Bạn chưa chọn phép tính, vui lòng chọn phép tính!';
		document.getElementById("error").style.visibility = "visible";
	}
}

// Bắt sự kiện textchange của ô số thứ nhất

document.getElementById("num1").onchange = function() {checkNum1()};
function checkNum1() {
	document.getElementById("error").style.visibility = "hidden"; // Ẩn thông báo trước đó nếu có

	if (isNaN(num1.value)) {
		error.textContent = 'Giá trị nhập ở ô số thứ nhất không phải là số, vui lòng nhập lại!';
		document.getElementById("error").style.visibility = "visible";
	}
}

// Bắt sự kiện textchange của ô số thứ hai
document.getElementById("num2").onchange = function() {checkNum2()};

function checkNum2() {
	document.getElementById("error").style.visibility = "hidden"; // Ẩn thông báo trước đó nếu có

	if (isNaN(num2.value)) {
		error.textContent = 'Giá trị nhập ở ô số thứ hai không phải là số, vui lòng nhập lại!';
		document.getElementById("error").style.visibility = "visible";
	}
}