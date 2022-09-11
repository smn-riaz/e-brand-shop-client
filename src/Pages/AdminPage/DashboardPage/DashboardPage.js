import React, { useContext, useEffect } from 'react'
import { CustomerInfoContext } from '../../../App'
import OpenMessage from '../../../Components/OpenMessage/OpenMessage'
import Sidebar from '../../../Components/Sidebar/Sidebar'

const DashboardPage = () => {
  const {dashboardData, setDashboardData} = useContext(CustomerInfoContext)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/product/allProduct')
        .then(res => res.json())
        .then(data => {
          setDashboardData({...dashboardData, totalProducts: data.data.length,
            products:data.data})
        })
    }, 100);
  },[])

  const summerProducts = dashboardData.products.filter(product => product.type==="summer")
  const winterProducts = dashboardData.products.filter(product => product.type==="winter")
  const carouselProducts = dashboardData.products.filter(product => product.type==="carousel")
  const trendingProducts = dashboardData.products.filter(product => product.type==="trending")
  const jacketProducts = dashboardData.products.filter(product => product.type==="jacket")
  const tshirtProducts = dashboardData.products.filter(product => product.type==="tshirt")
  const topsProducts = dashboardData.products.filter(product => product.type==="tops")
  const shirtProducts = dashboardData.products.filter(product => product.type==="shirt")
  const sareeProducts = dashboardData.products.filter(product => product.type==="saree")
  const jensProducts = dashboardData.products.filter(product => product.type==="jens")
  const blezzerProducts = dashboardData.products.filter(product => product.type==="blezzer")
  const kidsProducts = dashboardData.products.filter(product => product.type==="kids")
  const shortsProducts = dashboardData.products.filter(product => product.type==="shorts")
  const typesData = [
    {
    type:"Summer",
    products: summerProducts.length
  },
    {
    type:"Winter",
    products: winterProducts.length
  },
    {
    type:"Carousel",
    products: carouselProducts.length
  },
    {
    type:"Trending",
    products: trendingProducts.length
  },
    {
    type:"Jacket",
    products: jacketProducts.length
  },
    {
    type:"T-Shirt",
    products: tshirtProducts.length
  },
    {
    type:"Tops",
    products: topsProducts.length
  },
    {
    type:"Shirt",
    products: shirtProducts.length
  },
    {
    type:"Saree",
    products: sareeProducts.length
  },
    {
    type:"Jens",
    products: jensProducts.length
  },
    {
    type:"Blezzer",
    products: blezzerProducts.length
  },
    {
    type:"Kids",
    products: kidsProducts.length
  },
    {
    type:"Short",
    products: shortsProducts.length
  },
]
  return (
    <main className="adminPage">
    <div className="row">
      <div className="col-lg-2 col-md-3">
        <Sidebar />
      </div>

      <div className="col-lg-10 row col-md-9 p-4 appointmentsPageContainer">
        <OpenMessage />
        <div className='row d-flex justify-content-center my-3 '>
          <div className="col-3 text-center text-success m-3">
            <h3> Total Products: {dashboardData.totalProducts}</h3>
          </div>
          {/* <div className="col-3 text-center bg-success text-light m-1">
            <h4> Total Customers: {dashboardData.totalCustomers}</h4>
          </div>
          <div className="col-3 text-center bg-success text-light m-1">
          <h4>Pending Orders: {dashboardData.totalOrders}</h4>
          </div> */}
          
        </div>

<br />
        <div className='row d-flex justify-content-center'>
          {
            typesData.map(typeData => {
              const {type, products} = typeData
              return(
                <div className="col-3 text-center bg-success text-light m-1">
                  <h4 className="">{type}</h4>
                  <h5>{products}</h5>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </main>
  )
}

export default DashboardPage