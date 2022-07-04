import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cartContext } from '../../context/Context';
import {Link} from "react-router-dom";

const Cart = () => {
  let [total, setTotal] = React.useState();

  const { cart, setCart } = React.useContext(cartContext);
  let countTotal = () => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price, 0));

  }

  React.useEffect(() => {
    countTotal()
  }, [cart]);
  return (
    <>
    {
      cart.length===0 ?
       (<div className='m-5'>
        <h5><Link to="/">back to Homepage</Link></h5> 
        <h1>Cart is Empty!</h1>
       </div>):
      (<Container>
        <Row>
          <Col sm={10}>
  
           <h5><Link to="/">back to Homepage</Link></h5> 
           <h5 className='m-5'>Products</h5>
  
              <div>
                {
                  
                  cart.map((prod)=>{
                    return(
                      <div className="m-5">
                      <Row>
                      <Col sm={3}>
                      <img className='img' style={{width:"150px", height:"100px"}} src={`${prod.image}`} alt="no-image" />
                      </Col>
                      <Col sm={2}>
                      <span>{prod.title}</span>
                      </Col>
                      <Col sm={2}>
                      <span>₹ {prod.price}</span>
                      </Col>
                      <Col sm={2}>
                      <button className='remove btn btn-primary' onClick={() => {
                          setCart(cart.filter((ele) => ele.id != prod.id))
                        }}>Remove</button>
                      </Col>
                      
                    </Row>
                    </div>
                    )
                  })
                 
               
  }
              </div>
          </Col>
        </Row>
        <h5> <Link to="/">Add More Products</Link></h5>
  
        <h2 style={{float:"right"}}>Total ₹ {total}</h2>
  
      </Container>)
    }
    </>

  )
}

export default Cart;