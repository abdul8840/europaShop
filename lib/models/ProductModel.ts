export type Product = {
    _id?: string
    name: string
    slug: string
    image: string
    banner?: string
    price: Number
    brand: string
    category: string
    description: string
    rating: number
    numReviews: number
    countInStock: number
    colors?: []
    sizes?: []
}