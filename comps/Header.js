import { useContext } from "react"
import Link from "next/link"
import {useRouter} from "next/router"

import AuthContext from "../context/AuthContext"

import styles from "../styles/Header.module.css"

export default function Header ()  {

  const router = useRouter()
  const isHome = router.pathname === "/"

  const goBack = event => {
      event.preventDefault()
      router.back()
  }

  const { user } = useContext(AuthContext)

  return (
    <div className={styles.nav}>
      {!isHome && 
        <div className={styles.back}>
          <a href="#" onClick={goBack}>{"<"} Back</a>
        </div>
      }
      <div>
        <Link href="/">
          <a>
            <div className={styles.title}>
              <h1>The Test-Commerce</h1>
            </div>
          </a>
        </Link>
      </div>

      <div className={styles.auth}>
        {user ? (
          <Link href="/account">
            <a><img src="/vercel.svg" alt="account anchor"/></a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Log in</a>
          </Link>
        )}
      </div>

    </div>
  )
}
  