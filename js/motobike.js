//discovery
const arrProduct = [
    { ma: "SP01", name: "Xe máy điện Evo200 Lite", hinh: "sp01.jpg", price: "18.000.000", saled: "Đã bán 5.4k", note: "Evo20 LTE", inf_note: "Xe học sinh - Không cần bằng lái" },
    { ma: "SP02", name: "Xe máy điện VinFast Vento S", hinh: "sp02.jpg", price: "50.000.000", saled: "Đã bán 1k", note: "Vento S", inf_note: "Chống trộm vượt trội" },
    { ma: "SP03", name: "Xe máy điện VinFast Klara S (2022)", hinh: "sp03.jpg", price: "35.000.000", saled: "Đã bán 9k", note: "Klara S", inf_note: "Thiết kế Ý - Lướt mê ly" },
    { ma: "SP04", name: "Xe máy điện VinFast Theon S", hinh: "sp04.jpg", price: "63.000.000", saled: "Đã bán 700", note: "Theon S", inf_note: "Vít ga bứt phá 99km/h" }
];

var str = "";

for (let index = 0; index < arrProduct.length; index++) {
    str += `
    <div class="product">
                <img src="/image/${arrProduct[index].hinh}" alt="">
                <p>Bán chạy</p>
                <div class="inf">
                    <h3>${arrProduct[index].note}</h3>
                    <P>${arrProduct[index].inf_note}</P>
                </div>
                <p class="name">${arrProduct[index].name}</p>
                <div class="price">
                    <p>${arrProduct[index].price}</p>
                    <div class="buy">
                        <p>${arrProduct[index].saled}</p>
                        <button>Mua ngay</button>
                    </div>
                </div>
            </div>
    `
}
document.querySelector(".list-product").innerHTML = str;

//endow
const arrNewEndow = [
    { hinh1: "endow1.jpg", tieuDe: "Back to school - Ưu đãi pin VinFast từ tháng đầu tiên cho học sinh, sinh viên", text: "Từ 02/8 - 30/9/2023, Công ty TNHH TM ACS Việt Nam triển khai chương trình “Back to school  Năm học mới” với ưu đãi mua/thuê pin VinFast áp dụng từ tháng đầu tiên dành riêng cho các bạn học sinh, sinh viên." },
    { hinh1: "endow2.jpg", tieuDe: "VinFast x Mcredit - Sắm Xe Điện, Trả Góp Siêu Tiện", text: "Sở hữu những chiếc xe máy điện VinFast thông minh, thân thiện với môi trường từ nay sẽ thật dễ dàng với gói vay trả góp ưu đãi lãi suất siêu tiện chỉ 0.99%/tháng, miễn lãi hoàn toàn trong 4 tháng đầu từ Mcredit dành cho khách hàng mua xe máy điện VinFast trên toàn quốc." },
    { hinh1: "endow4.jpg", tieuDe: "Evo200 Lite chào hè 2023 - Ưu đãi giá chỉ còn 19,4 triệu đồng ", text: "Xe máy điện VinFast công bố triển khai chương trình khuyến mãi “Evo200 Lite chào Hè 2023”, với mức giá chỉ còn 19,4 triệu đồng/xe; phí thuê bao pin đồng hạng chỉ còn 199.000 đồng/tháng. Chương trình áp dụng từ ngày 20/6 đến 20/9/2023 qua website VinFast hoặc trực tiếp tại hệ thống showroom, đại lý ủy quyền của VinFast trên toàn quốc." },
    { hinh1: "endow3.jpg", tieuDe: "VinFast tri ân khách hàng với ưu đãi 1 triệu đồng khi mua xe máy điện", text: "Từ ngày 27/03 đến hết ngày 26/04/2023, khách hàng đã sở hữu ô tô hoặc xe máy điện VinFast sẽ nhận được ưu đãi giảm thêm 1 triệu đồng vào giá xe khi mua xe máy điện VinFast. Sở hữu ngay các mẫu xe điện thế hệ mới với mức giá chỉ từ 21 triệu đồng" },
    { hinh1: "endow5.jpg", tieuDe: "Back to school - Ưu đãi pin VinFast từ tháng đầu tiên cho học sinh, sinh viên", text: "Từ 02/8 - 30/9/2023, Công ty TNHH TM ACS Việt Nam triển khai chương trình “Back to school  Năm học mới” với ưu đãi mua/thuê pin VinFast áp dụng từ tháng đầu tiên dành riêng cho các bạn học sinh, sinh viên." },
    { hinh1: "endow6.jpg", tieuDe: "VinFast x Mcredit - Sắm Xe Điện, Trả Góp Siêu Tiện", text: "Sở hữu những chiếc xe máy điện VinFast thông minh, thân thiện với môi trường từ nay sẽ thật dễ dàng với gói vay trả góp ưu đãi lãi suất siêu tiện chỉ 0.99%/tháng, miễn lãi hoàn toàn trong 4 tháng đầu từ Mcredit dành cho khách hàng mua xe máy điện VinFast trên toàn quốc." },

];

var str1 = "";
for (let i = 0; i < arrNewEndow.length; i++) {
    str1 += `
    <div class="column">
    <div class="endow-pic">
        <img src="/image/${arrNewEndow[i].hinh1}" alt="">
    </div>
    <div class="content">
        <h4>${arrNewEndow[i].tieuDe}</h4>
        <p>${arrNewEndow[i].text}</p>
    </div>
</div>
    `
}
document.querySelector(".endow-list").innerHTML = str1