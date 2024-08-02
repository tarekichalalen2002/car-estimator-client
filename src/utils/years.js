const years = [
    // years from 1950 to 2020
    ...Array.from({ length: 2020 - 1950 + 1 }, (v, k) => 1950 + k).reverse(),
]

export default years;