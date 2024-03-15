import "./recentOrders.scss";
import { recentOrders } from "../../data";

const RecentOrders = () => {
  return (
    <div className="recentOrders">
        <h2>Recent Purchases</h2>
        <div className="list">
            {recentOrders.map(user=>(
                <div className="listItem" key={user.id}>
                    <div className="user">
                        <img className="img" src={user.img} alt="img"/>
                        <div className="userDetails">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">₹{user.amount}.00</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentOrders