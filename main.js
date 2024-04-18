function loginUser() {
    // Lấy giá trị của tên đăng nhập và mật khẩu
    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();

    // Kiểm tra xem cả hai trường có được điền đầy đủ hay không
    if(username === '' || password === '') {
        alert('Tài khẩu hoặc mật khẩu trống kìa');
    } else {
       
        alert('OK');
    }
}


