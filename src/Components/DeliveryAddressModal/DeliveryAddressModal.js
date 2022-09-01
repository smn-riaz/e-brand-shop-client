import React, { useContext, useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { CustomerInfoContext } from '../../App'

const DeliveryAddressModal = ({checkOutData}) => {
    const {cart, name, email, orderDate, amount, orderStatus} = checkOutData
    const {cartInfo, setCartInfo, customerInfo} = useContext(CustomerInfoContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const streetRef = useRef(null)
    const cityRef = useRef(null)
    const stateRef = useRef(null)
    const phoneRef = useRef(null)


    const handleConfirmOrder = (event) => {
        event.preventDefault();
        const orderDetails = {
            userId:customerInfo._id,
            name,
            email,
            cart,
            orderDate,
            amount,
            orderStatus,
            deliveryAddress:{
                street: streetRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                phone: phoneRef.current.value
            }
        }
       

        fetch("http://localhost:5000/order/addOrder",{
          method:"POST",
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify(orderDetails)
          
        })
        .then((res) => res.json())
        .then(data => {
          if(data){
            setCartInfo([])
          }
        })

    }
  return (
    <>
    <button
      type="button"
      className="border-0 btn btn-success px-5 py-2 fw-bold"
      onClick={handleShow}
    >
      CHECKOUT
    </button>
    <Modal
      show={show}
      onHide={handleClose}
      style={{
        backgroundImage: `url("https://i.ibb.co/2YHmcd9/delivery-Address-Backgound.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>E-Brand-Shop</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5 py-2">
      <div className="d-flex justify-content-center row">
        <h5 className="text-center">Delivery Address</h5>
        <div className=" p-2 login-container m-4">
          <Form>
            <div className="p-2 m-1">
              <label for="street"  className="fw-bold">Street:  </label><br />
              <input
              ref={streetRef}
              id="street"
                type="text"
                className="px-3 py-2 w-100"
                required
              />
            </div>

            <div className="p-2 m-1">
              <label for="city" className="fw-bold">City: </label><br />
              <input
              ref={cityRef}
              id="city"
                type="text"
                className="px-3 py-2 w-100"
                required
              />
            </div>
          
            <div className="p-2 m-1">
            <label for="state" className="fw-bold">State : </label><br />
              <input
              ref={stateRef}
              id="state"
              type="text"
                className="px-3 py-2 w-100"
                required
              />
            </div>

            <div className="p-2 m-1">
            <label for="phone" className="fw-bold">Phone no: </label><br />
              <input
              ref={phoneRef}
              id="phone"
              type="tel"
                className="px-3 py-2 w-100"
                required
              />
            </div>

        

            <div className="p-2 m-1">
              <button
              onClick={handleConfirmOrder}
                className="border-0 w-100 py-2 mx-auto fw-bold"

              >
                CONFIRM ORDER
              </button>
            </div>
          </Form>
        </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default DeliveryAddressModal