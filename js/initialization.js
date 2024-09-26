//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Cá viên',
            img: './assets/img/products/ca-vien-chien.jpg',
            category: 'Đồ chiên',
            price: 5000,
            desc: 'Gồm: 4 viên cá'
        },
        {
            id: 2,
            status: 1, 
            title: 'Bò viên',
            img: './assets/img/products/bo-vien.jpg',
            category: 'Đồ chiên',
            price: 5000,
            desc: 'Gồm: 4 viên bò'
        },
        {
            id: 3,
            status: 1, 
            title: 'Tôm viên',
            img: './assets/img/products/tom-vien-chien.jpg',
            category: 'Đồ chiên',
            price: 5000,
            desc: 'Gồm: 4 viên tôm'
        },
        {
            id: 4,
            status: 1, 
            title: 'Tôm surimi',
            img: './assets/img/products/tom-surimi.jpg',
            category: 'Đồ chiên',
            price: 5000,
            desc: 'Gồm: 4 viên tôm'
        },
        {
            id: 5,
            status: 1, 
            title: 'Hồ lô',
            img: './assets/img/products/ho-lo.jpg',
            category: 'Đồ chiên',
            price: 10000,
            desc: 'Gồm: 4 viên'
        },
        {
            id: 6,
            status: 1, 
            title: 'Đậu hũ phô mai',
            img: './assets/img/products/dau-hu-pho-mai-0.jpg',
            category: 'Đồ chiên',
            price: 5000,
            desc: 'Gồm: 1 viên'
        },
        {
            id: 7,
            status: 1, 
            title: 'Mực xoắn',
            img: './assets/img/products/muc-xoan.jpg',
            category: 'Đồ chiên',
            price: 12000,
            desc: 'Gồm: 4 viên'
        },
        {
            id: 8,
            status: 1, 
            title: 'Cá viên cốm xanh',
            img: './assets/img/products/ca-vien-com-xanh.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 4 viên'
        },
        {
            id: 9,
            status: 1, 
            title: 'Cá viên mayo',
            img: './assets/img/products/ca-vien-majo.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 4 viên'
        },
        {
            id: 10,
            status: 1, 
            title: 'Cá viên trứng cút',
            img: './assets/img/products/cha-ca-trung-cut.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 4 viên'
        },

        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hoàng Gia Bảo",
            phone: "hgbaodev",
            password: "123456",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Nhật Sinh",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();