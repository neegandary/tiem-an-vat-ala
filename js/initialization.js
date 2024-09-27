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
            desc: 'Gồm:3 viên'
        },
        {
            id: 11,
            status: 1, 
            title: 'Thanh cua',
            img: './assets/img/products/thanh-cua.jpg',
            category: 'Đồ chiên',
            price: 12000,
            desc: 'Gồm: 1 cây'
        },
        {
            id: 12,
            status: 1, 
            title: 'Cá viên mặt cười',
            img: './assets/img/products/cha-ca-surimi-mat-cuoi.jpg',
            category: 'Đồ chiên',
            price: 13000,
            desc: 'Gồm: 3 viên'
        },
        {
            id: 13,
            status: 1, 
            title: 'Cá viên đậu đũa',
            img: './assets/img/products/ca-vien-dau-dua.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 4 viên'
        },
        {
            id: 14,
            status: 1, 
            title: 'Cua huỳnh đế',
            img: './assets/img/products/cua-huynh-de.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 3 viên'
        },
        {
            id: 15,
            status: 1, 
            title: 'Dồi sụn',
            img: './assets/img/products/doi-sun.jpg',
            category: 'Đồ chiên',
            price: 11000,
            desc: 'Gồm: 1 cây'
        },
        {
            id: 16,
            status: 1, 
            title: 'Xúc xích',
            img: './assets/img/products/xuc-xich.jpg',
            category: 'Đồ chiên',
            price: 10000,
            desc: 'Gồm: 1 cây'
        },
        {
            id: 17,
            status: 1, 
            title: 'Xúc xích phô mai',
            img: './assets/img/products/xuc-xich-pho-mai.jpg',
            category: 'Đồ chiên',
            price: 12000,
            desc: 'Gồm: 1 cây'
        },
        {
            id: 18,
            status: 1, 
            title: 'Ốc nhồi hải sản',
            img: './assets/img/products/oc-nhoi-hai-san.jpg',
            category: 'Đồ chiên',
            price: 12000,
            desc: 'Gồm: 3 viên'
        },
        {
            id: 19,
            status: 1, 
            title: 'Chạo sả',
            img: './assets/img/products/Chao-Ca-chao-Sa.jpg',
            category: 'Đồ chiên',
            price: 5000,
            desc: 'Gồm: 1 cây'
        },
        {
            id: 20,
            status: 1, 
            title: 'Phô mai que',
            img: './assets/img/products/pho-mai-que.jpg',
            category: 'Đồ chiên',
            price: 12000,
            desc: 'Gồm: 1 cây'
        },
        {
            id: 21,
            status: 1, 
            title: 'Hotdog phô mai',
            img: './assets/img/products/hotdog-pho-mai.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 1 cây'
        },
        {
            id: 22,
            status: 1, 
            title: 'Bánh sữa tươi',
            img: './assets/img/products/banh-sua-chien.jpg',
            category: 'Đồ chiên',
            price: 7000,
            desc: 'Gồm: 1 cái'
        },
        {
            id: 23,
            status: 1, 
            title: 'Bánh gà phô mai',
            img: './assets/img/products/banh-ga-pho-mai.jpg',
            category: 'Đồ chiên',
            price: 8000,
            desc: 'Gồm: 1 cái'
        },
        {
            id: 24,
            status: 1, 
            title: 'Nem chua rán',
            img: './assets/img/products/nem-chua-ran.jpg',
            category: 'Đồ chiên',
            price: 14000,
            desc: 'Gồm: 2 cái'
        },
        {
            id: 25,
            status: 1, 
            title: 'Khoai tây',
            img: './assets/img/products/khoai-tay.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 1 phần'
        },
        {
            id: 26,
            status: 1, 
            title: 'Khoai tây lắc phô mai',
            img: './assets/img/products/khoai-lang-lac-pho-mai.jpg',
            category: 'Đồ chiên',
            price: 20000,
            desc: 'Gồm: 1 phần'
        },
        {
            id: 27,
            status: 1, 
            title: 'Khoai lang kén',
            img: './assets/img/products/khoai-lang-ken.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 1 phần'
        },
        {
            id: 28,
            status: 1, 
            title: 'Khoai lang lắc phô mai',
            img: './assets/img/products/khoai-lang-lac-pho-mai.jpg',
            category: 'Đồ chiên',
            price: 15000,
            desc: 'Gồm: 1 phần'
        },
        {
            id: 29,
            status: 1, 
            title: 'Chả cốm',
            img: './assets/img/products/cha-com-1-339.jpg',
            category: 'Đồ chiên',
            price: 11000,
            desc: 'Gồm: 1 cái'
        },
        {
            id: 30,
            status: 1, 
            title: 'Trứng cút chiên',
            img: './assets/img/products/trung-cut-chien.jpg',
            category: 'Đồ chiên',
            price: 8000,
            desc: 'Gồm: 4 cái'
        },
        {
            id: 31,
            status: 1, 
            title: 'Viên trứng cá',
            img: './assets/img/products/vien-trung-ca.jpg',
            category: 'Đồ chiên',
            price: 9000,
            desc: 'Gồm: 2 viên'
        },
        {
            id: 32,
            status: 1, 
            title: 'Viên trứng tôm',
            img: './assets/img/products/vien-trung-tom.jpg',
            category: 'Đồ chiên',
            price: 9000,
            desc: 'Gồm: 2 viên'
        },
        {
            id: 33,
            status: 1, 
            title: 'Viên trứng muối phô mai',
            img: './assets/img/products/vien-pho-mai-trung-muoi.jpg',
            category: 'Đồ chiên',
            price: 9000,
            desc: 'Gồm: 2 viên'
        },
        {
            id: 34,
            status: 1, 
            title: 'Viên răng mực',
            img: './assets/img/products/vien-pho-mai-trung-muoi.jpg',
            category: 'Đồ chiên',
            price: 9000,
            desc: 'Gồm: 2 viên'
        },
        {
            id: 35,
            status: 1, 
            title: 'Bánh bao chiên',
            img: './assets/img/products/banh-bao-chien.jpg',
            category: 'Đồ chiên',
            price: 12000,
            desc: 'Gồm: 3 cái'
        },
        {
            id: 36,
            status: 1, 
            title: 'Đậu bắp',
            img: './assets/img/products/dau-bap.jpg',
            category: 'Đồ chiên',
            price: 8000,
            desc: 'Gồm: 4 cái'
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
            fullname: "Nguyễn Văn Minh Nhật",
            phone: "hgbaodev",
            password: "25112005",
            address: 'https://github.com/neegandary',
            email: 'nguyenvanminhnhat2511@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Tiem An Vat Ala",
            phone: "0123456789",
            password: "ala123@",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Minh Nhật",
            phone: "neegan",
            password: "ala123@",
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
