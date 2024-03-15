import Chart from "../../components/Chart/Chart"
import RecentOrders from "../../components/RecentOrders/RecentOrders"
import StatBox from "../../components/StatBox/StatBox"
import { statOrder, statProducts } from "../../data"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="box box4"><Chart /></div>
      <div className="box box1"><RecentOrders /></div>
      <div className="statContainer">
        <div className="box box2"><StatBox {...statOrder}/></div>
        <div className="box box3"><StatBox {...statProducts}/></div>
      </div>
    </div>
  )
}

export default Home