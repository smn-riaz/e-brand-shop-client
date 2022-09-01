import { faTrash, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { CustomerInfoContext } from '../../../App'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import './ProductsPage.css'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const {dashboardData, setDashboardData} = useContext(CustomerInfoContext)
  useEffect(() => {
    fetch('http://localhost:5000/product/allProduct')
        .then(res => res.json())
        .then(data => {
          setProducts(data.data)
          setDashboardData({...dashboardData, totalProducts: data.data.length,
            products:data.data})
        })
}, [])


const deleteProductHandler = (id) =>{
  console.log(id);
}

  return (
    <main className="adminPage" >
    <div className='row'>
        <div className='col-lg-2 col-md-3'><Sidebar /></div>

        <div className="col-lg-10 row col-md-9 p-4 appointmentsPageContainer" >
            <div>
                {(products.length > 0) ?
                <div> <h4 className='text-center p-3'>Total Products: <button className='circleStyle'> {products.length}</button></h4>
                    <table className="patientInfo-table table table-borderless delete-data container">
                        <thead>
                            <tr className="table-header border ">
                            
                                <th className="" scope="col">Name</th>
                                <th className="" scope="col">Image</th>
                                <th className="" scope="col">Type</th>
                                <th className="" scope="col">Price($)</th>
                                <th className="" scope="col">Offer Price($)</th>
                                <th className="" scope="col">Color</th>
                                <th className="" scope="col">Instock</th>
                                <th className="" scope="col">Size</th>
                                <th className="" scope="col">Update</th>
                                <th className="" scope="col">Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) =>{
                                  const {_id, name, image, type, price, offerPrice, instock, color, size} = product
                                  return(
                                    <tr className='border border-secondary my-1'> 
                                      <td>{name[0]}</td>
                                      <td className=''><img src={image} width="100px" height="100px" alt="" /></td>
                                      <td>{type}</td>
                                      <td>{price}</td>
                                      <td>{offerPrice}</td>
                                      <td>{
                                        color.map(col => <li>{col}</li>)
                                      }</td>
                                      <td>{instock}</td>
                                      <td>
                                        {
                                          size.map(sz => <li>{sz}</li>)
                                        }
                                      </td>
                                      <td><button className='border-0'><FontAwesomeIcon icon={faWrench} /></button></td>
                                      <td><button className='border-0' onClick={() => deleteProductHandler(_id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>
                                  )
                                }
                                )
                            }
                        </tbody>

                    </table>
                </div>
                :

                <div> <h4 className='text-center p-3'>No Products available</h4></div>
                        }
            </div>

        </div>


    </div>

    <div>

    </div>

</main>
  )
}

export default ProductsPage