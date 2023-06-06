export const cellphones = [
    { name: "l3", brand: "lg", price: "1.200", disponible: true, quantity: 20 },
    { name: "l6", brand: "lg", price: "1.800", disponible: true, quantity: 4 },
    { name: "redmi 9 power", brand: "xiaomi", price: "2.000", disponible: true, quantity: 50 },
    { name: "iPhone x pro", brand: "apple", price: "3.200", disponible: true, quantity: 32 },
    { name: "l30", brand: "lg", price: "1.200", disponible: true, quantity: 1 },
    { name: "redmi note 8", brand: "xiaomi", price: "9.200", disponible: true, quantity: 3 },
    { name: "redmi 9", brand: "xiaomi", price: "5.200", disponible: true, quantity: 154 },
    { name: "j10", brand: "samsung", price: "1.000", disponible: true, quantity: 432 },
    { name: "iPhone pro max", brand: "apple", price: "4.880", disponible: true, quantity: 121 },
    { name: "s22", brand: "samsung", price: "1.520", disponible: true, quantity: 16 },
    { name: "iPhone 7c", brand: "apple", price: "3.100", disponible: true, quantity: 10 },
    { name: "poco 92", brand: "xiaomi", price: "3.071", disponible: true, quantity: 19 },
    { name: "j1", brand: "samsung", price: "800", disponible: true, quantity: 1921 },
    { name: "g10", brand: "motorola", price: "2.000", disponible: true, quantity: 10 },
    { name: "poco 88", brand: "xiaomi", price: "4.660", disponible: true, quantity: 71 },
    { name: "g50", brand: "motorola", price: "8.000", disponible: true, quantity: 10 },
    { name: "j2", brand: "samsung", price: "999", disponible: true, quantity: 65 },
    { name: "blur", brand: "alcatel", price: "1.000", disponible: true, quantity: 2 },
    { name: "g20", brand: "lg", price: "2.666", disponible: true, quantity: 8 },
    { name: "poco 99", brand: "xiaomi", price: "1.999", disponible: true, quantity: 86 },
    { name: "poco 100", brand: "xiaomi", price: "1.499", disponible: true, quantity: 4 },
    { name: "s23", brand: "samsung", price: "4.999", disponible: true, quantity: 2 },,
    { name: "Galaxy A52", brand: "samsung", price: "2.499", disponible: true, quantity: 25 },
    { name: "Mi 11 Lite", brand: "xiaomi", price: "2.699", disponible: true, quantity: 18 },
    { name: "iPhone SE", brand: "apple", price: "3.499", disponible: true, quantity: 27 },
    { name: "Moto G Power", brand: "motorola", price: "1.599", disponible: true, quantity: 35 },
    { name: "Redmi Note 10", brand: "xiaomi", price: "1.899", disponible: true, quantity: 63 },
    { name: "Galaxy S20 FE", brand: "samsung", price: "3.299", disponible: true, quantity: 12 },
    { name: "l4", brand: "lg", price: "1.500", disponible: true, quantity: 7 },
    { name: "redmi 9T", brand: "xiaomi", price: "2.399", disponible: true, quantity: 43 },
    { name: "redmi note 9", brand: "xiaomi", price: "1.699", disponible: true, quantity: 94 },
    { name: "j5", brand: "samsung", price: "699", disponible: true, quantity: 153 },
    { name: "moto g9", brand: "motorola", price: "1.899", disponible: true, quantity: 29 },
    { name: "g30", brand: "motorola", price: "1.799", disponible: true, quantity: 22 },
    { name: "g70", brand: "lg", price: "2.250", disponible: true, quantity: 11 },
    { name: "redmi note 7", brand: "xiaomi", price: "1.299", disponible: true, quantity: 87 },
    { name: "j4", brand: "samsung", price: "599", disponible: true, quantity: 201 },
    { name: "poco 95", brand: "xiaomi", price: "2.899", disponible: true, quantity: 38 },
    { name: "poco 105", brand: "xiaomi", price: "1.199", disponible: true, quantity: 8 },
    
]


const brands = cellphones.map((el: any) => el.brand)
export const name = cellphones.map((el: any) => el.name)
export const filteredbrand = brands.filter((el: any, index: any) => brands.indexOf(el) === index)

export const brandsAndName = [...brands, ...name]
