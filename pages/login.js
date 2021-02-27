import Head from "next/head"
import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext"

import styles from "../styles/Login.module.css"

function Login() {

  const [email, setEamil] = useState("")
  const { loginUser } = useContext(AuthContext)

  const handleSubmit = (event) => {
      event.preventDefault()
      loginUser(email)
  }

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to make your purchase" />
      </Head>

      <h2>Login</h2>
      <form onSubmit={event => handleSubmit(event)}>
        <input 
          className={styles.input}
          type="email" 
          value={email}
          onChange={event => setEamil(event.target.value)}
          placeholder="Email Address"
        />
        <button 
          type="submit"
          className={styles.button}
        >Login</button>
      </form>
    </div>
  )
}

export default Login
