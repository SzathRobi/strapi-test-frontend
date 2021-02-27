import {useEffect} from "react"
import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Image from "next/image"
import { fromImageToUrl, API_URL } from "../utils/urls"

export default function Home({products}) {

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.multiMedia[0])} ></img>  
                </div>
                <div className={styles.product__Col}>{product.name} {product.price} Ft</div>
              </div>
            </a>
          </Link>
        </div>
      ))}

    </div>
  )
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  return {
    props: {
        products
    }
  }
}
