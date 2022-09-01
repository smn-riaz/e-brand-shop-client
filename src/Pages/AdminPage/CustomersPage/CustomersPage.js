import { faTrash, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { CustomerInfoContext } from '../../../App'
import Sidebar from '../../../Components/Sidebar/Sidebar'

const CustomersPage = () => {
  const [customers, setCustomers] = useState([])
  const {dashboardData, setDashboardData} = useContext(CustomerInfoContext)
  useEffect(() => {
    fetch('http://localhost:5000/customer/allCustomer')
        .then(res => res.json())
        .then(data => {
          setCustomers(data.data)
          setDashboardData({...dashboardData, totalCustomers: data.data.length,
            customers:data.data})
        })
}, [])


const deleteCustomerHandler = (id) => {

}


  return (
    <main className="adminPage">
    <div className="row">
      <div className="col-lg-2 col-md-3">
        <Sidebar />
      </div>

      <div className="col-lg-10 row col-md-9 p-4 appointmentsPageContainer">
      <div>
                {(customers.length > 0) ?
                <div> <h4 className='text-center p-3'>Total Customers: <button className='circleStyle'> {customers.length}</button></h4>
                    <table className="patientInfo-table table table-borderless delete-data container">
                        <thead>
                            <tr className="table-header border ">
                            
                                <th className="" scope="col">Name</th>
                                <th className="" scope="col">Email</th>
                                <th scope='col'>Update</th>
                                <th scope='col'>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((customer, index) =>{
                                  const {_id,name, email} = customer
                                  return(
                                    <tr className='border border-secondary my-1'> 
                                      <td>{name}</td>
                                      <td>{email}</td>
                                      <td><button className='border-0'><FontAwesomeIcon icon={faWrench} /></button></td>
                                      <td><button className='border-0' onClick={() => deleteCustomerHandler(_id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>
                                  )
                                }
                                )
                            }
                        </tbody>

                    </table>
                </div>
                :

                <div> <h4 className='text-center p-3'>No Appointment available</h4></div>
                        }
            </div>
      </div>
    </div>
  </main>
  )
}

export default CustomersPage