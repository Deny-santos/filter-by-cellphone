export const cellphones = [
    { name: "l3", brand: "lg", price: "1.200", disponible: true, quantity: 20 },
    { name: "l6", brand: "lg", price: "1.800", disponible: true, quantity: 4 },
    { name: "redmi 9 power", brand: "xiaomi", price: "2.000", disponible: true, quantity: 50 },
    { name: "x pro", brand: "iphone", price: "3.200", disponible: true, quantity: 32 },
    { name: "l30", brand: "lg", price: "1.200", disponible: true, quantity: 1 },
    { name: "redmi note 8", brand: "xiaomi", price: "9.200", disponible: true, quantity: 3 },
    { name: "redmi 9", brand: "xiaomi", price: "5.200", disponible: true, quantity: 154 },
    { name: "j10", brand: "sansung", price: "1.000", disponible: true, quantity: 432 },
    { name: "pro max", brand: "iphone", price: "4.880", disponible: true, quantity: 121 },
    { name: "s22", brand: "sansung", price: "1.520", disponible: true, quantity: 16 },
    { name: "7c", brand: "iphone", price: "3.100", disponible: true, quantity: 10 },
    { name: "poco 92", brand: "xiaomi", price: "3.071", disponible: true, quantity: 19 },
    { name: "j1", brand: "sansung", price: "800", disponible: true, quantity: 1921 },
    { name: "g10", brand: "motorola", price: "2.000", disponible: true, quantity: 10 },
    { name: "poco 88", brand: "xiaomi", price: "4.660", disponible: true, quantity: 71 },
    { name: "g50", brand: "motorola", price: "8.000", disponible: true, quantity: 10 },
    { name: "j2", brand: "sansung", price: "999", disponible: true, quantity: 65 },
    { name: "blur", brand: "alcatel", price: "1.000", disponible: true, quantity: 2 },
    { name: "g20", brand: "lg", price: "2.666", disponible: true, quantity: 8 },
    { name: "poco 99", brand: "xiaomi", price: "1.999", disponible: true, quantity: 86 },
]


const brands = cellphones.map((el: any) => el.brand)
export const filteredbrand = brands.filter((el: any, index: any) => brands.indexOf(el) === index)