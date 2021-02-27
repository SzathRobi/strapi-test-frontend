import Head from "next/head"
import Link from "next/link"
import { useContext, useState, useEffect } from "react"
import {API_URL} from "../utils/urls"
import AuthContext from "../context/AuthContext"

const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            if(user) {
                try{
                    setLoading(true)
                    const token = await getToken()
                    const order_res = await fetch(`${API_URL}/orders`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    const data = await order_res.json()
                    setOrders(data)
                }
                catch(err) {
                    setOrders([])
                }
                setLoading(false)
            }
        }
        fetchOrders()
    },[user])

    return { orders, loading }
}

function Account() {

  const { getToken, logoutUser, user } = useContext(AuthContext)

  const { orders, loading } = useOrders(user, getToken)
  console.log("account orders", orders)

  if(!user) {
      return (
          <div>
              <p>Please login or register</p>
              <Link href="/"><a>Go back</a></Link>
          </div>
      )
  }

  return (
    <div>
      <Head>
        <title>Account page</title>    
        <meta name="description" content="The account page, view your orders and log out" />
      </Head>    

      <h2>Account Page</h2>

        <h3>Your Orders</h3>
        {loading && <p>Loading Your Orders</p>}
        {orders.map(order => (
            <div key={order.id}>
                {new Date(order.created_at).toLocaleDateString("hu-HU")} {order.product.name} {order.total} Ft {order.status}
            </div>
        ))}

      <p>Logged in as: {user.email}</p>
      <a href="#" onClick={logoutUser}>Logut</a>
    </div>
  )
}

export default Account
