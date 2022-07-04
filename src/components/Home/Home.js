import React from 'react'
import SinglePage from '../SinglePage/SinglePage';

const Home = ({data}) => {

  return (
    <div className="productContainer">
            {
              data ? data.map((items)=>{
                return(
                  <>
                  <SinglePage items={items} key={items.id}/>
                  </>
                )
              }) : "loading..."
            }

        </div>
  )
}

export default Home