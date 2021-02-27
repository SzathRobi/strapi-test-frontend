import Head from "next/head"
import { fromImageToUrl, API_URL } from "../../utils/urls"
import BuyButton from "../../comps/BuyButton"


const Product = ({product}) => {
    return (
        <div>
            <Head>
                {product.meta_title &&
                  <title>{product.meta_title}</title>
                }
                {product.meta_title &&
                  <meta name="description" content={product.meta_description} />
                }
            </Head>
            <h3>{product.name}</h3>
            <img src={fromImageToUrl(product.multiMedia[0])} />
            <h3>{product.name}</h3>
            <p>${product.price} <BuyButton product={product}/></p>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()

    return {
        props: {
            product: found[0] // response is an array
        }
    }
}

export async function getStaticPaths(){
    const product_res = await fetch(`${API_URL}/products/`)
    const products = await product_res.json()

    return {
        paths: products.map(product => ({
            params: { slug: String(product.slug) }
        })),
        fallback: false // if Url doesn't exist --> show 404page
    }
}

export default Product