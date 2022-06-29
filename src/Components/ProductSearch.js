import React, { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';


const ProductSearch = () => {

    const [searchData, setSearchData] = useState(null);





    // useEffect(()=>{
    
        const  search = (key) =>{

        fetch("http://localhost:3000/shopping?q=" + key).then((data) => {
            data.json().then((res) => {
                console.warn("res", res);
                setSearchData(res);
                console.log(searchData);


            })

        })

    }
// },[])
 



    return (

        <div className='search'>
            <h3>Search Product</h3>
            <input type="text" onChange={(event) => search(event.target.value)}></input>
            <button onClick={useEffect}></button>

            <div>
                {
                    searchData ?
                        <div>
                            {
                                searchData.map((value) =>
                                    <div>
                                        {value.title}
                                    </div>

                                )
                            }

                        </div>
                        : <p>null</p>
                }
            </div>



            {/* <button onClick={search}>Search</button>      */}

        </div>

    )

}

export default ProductSearch