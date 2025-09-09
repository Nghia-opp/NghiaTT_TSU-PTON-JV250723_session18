let products = [
    {id: 1, name: 'Milk', count: 100},
    {id: 2, name: 'Orange', count: 100},
    {id: 3, name: 'Butter', count: 100},
];

console.log(products);

// Thêm đối tượng có các thuộc tính tương tự các đối tượng
products.push({id: 4, name: 'Cacao', count: 100},);

console.log(products);

// Xóa đối tượng có id là 2
products.splice(1,1);

console.log(products);

// Truy vấn đến đối tượng có id là 3

console.log(products[1]);

// cập nhật lại giá trị count = 0
products[1].count=0;
console.log(products);

//  Kiểm tra từ khóa “Butter” có trong mảng “products”

let product = products.find((product) => product.name === 'Butter' );
if (product) {
    console.log("Có từ khóa cần tìm kiếm");
    console.log("ID: ",product.id);
    console.log("Name: ", product.name);
    console.log("Count: ", product.count);
} else {
    console.log("Không có dữ liệu bạn tìm kiếm");    
}