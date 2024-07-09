export type Product = {
    _id?: String
    name: String
    slug: String
    image: String
    banner?: String
    price: Number
    brand: String
    category: String
    description: String
    rating: number
    numReviews: number
    countInStock: number
    colors?: []
    sizes?: []
}