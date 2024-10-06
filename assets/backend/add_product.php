<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $productName = $_POST['product_name'];
    $productPrice = $_POST['product_price'];
    // ... lấy các thông tin khác của sản phẩm

    // Thêm vào cơ sở dữ liệu
    // Kết nối với cơ sở dữ liệu và thực hiện lệnh INSERT

    echo json_encode(["success" => true, "message" => "Product added successfully"]);
}
?>
