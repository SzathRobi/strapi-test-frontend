export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_70C742E0FAB700E2'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || "pk_test_51INLWjFZUq5zVOb9XYpbdSRk2QPqdBqA4LfhsgA9j0jOoh1mUVzyHS2ZluxWuZAaRz0zq8Do1T1CM8MovMzYMMsU009Xmeab63"

//export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_42B2064C668798B5'

/**
 * Given an immg return Url
 * Works for local and deployed strapis
 * @param {any} image
 */

 export const fromImageToUrl = (image) => {
    if(!image) {
        return "/vercel.svg"
    }
    if(image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url
 }