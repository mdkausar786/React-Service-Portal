import React, { useEffect, useState } from 'react'


import { Table, Dropdown, DropdownButton } from 'react-bootstrap'
import '../App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import EndMsg from './EndMsg';
import Loader from './Loader';
import { AlignCenter } from 'react-bootstrap-icons';
import { event } from 'jquery';






const Products = () => {

    const [item, setItem] = useState([]);
    const [display, setDisplay] = useState([])

    const [allitem, setAllitem] = useState([]);
    const [hasmore, sethasMore] = useState(true);
    const [page, setPage] = useState(2);

    const [searchData,setSearchData]=useState();


    function fetchall() {
        fetch("http://localhost:3000/shopping").then((response) => {
            response.json().then((result) => {
                console.warn(result);

                setAllitem(result)
            })
        })

    }


    const getprdoducts = async () => {
        const response = await fetch(`http://localhost:3000/shopping?_page=1&_limit=10`);

        // .then((response) => {
        //     response.json().then((result) => {
        //         console.warn(result);
        const result = await response.json()

        setItem(result);




        //     })
        // })

    };

    useEffect(() => {
        const getprdoducts = async () => {
            const response = await fetch(`http://localhost:3000/shopping?_page=1&_limit=10`);

            // .then((response) => {
            //     response.json().then((result) => {
            //         console.warn(result);
            const result = await response.json()

            setItem(result);




            //     })
            // })

        };

        getprdoducts();
        fetchall();
        // search();

    }, []);


    const Fetchproducts = async () => {

        const res = await fetch(`http://localhost:3000/shopping?_page=${page}&_limit=10`)
        //    .then((response) => {
        //         response.json().then((result) => {
        // console.warn(result);
        const result = await res.json();
        return result;

    }
    //             )
    //         })
    // }


    const Fetchdata = async () => {

        const productsFormServer = await Fetchproducts();

        setItem([...item, ...productsFormServer]);
        if (productsFormServer.length === 0 || productsFormServer.length < 10) {
            sethasMore(false);
        }
        setPage(page + 1);
        console.log(2);
    }


    function Delete(id) {
        fetch("http://localhost:3000/shopping/" + id,


            {
                method: "DELETE",
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(result);
                    alert("Product Deleted")
                    getprdoducts();

                })
            })
    }


    const filterResult = (cartdata) => {
        const result = allitem.filter((currData) => {
            return currData.category === cartdata;
        });
        setItem(result);
    }







    function search(key) {

        fetch("http://localhost:3000/shopping?q=" + key).then((data) => {
            data.json().then((res) => {
                console.warn("res", res);
                setItem(res);


            })

        })

    }






    return (




        <InfiniteScroll
            dataLength={item.length} //This is important field to render the next data
            next={Fetchdata}
            hasMore={hasmore}
            loader={<Loader />}
            endMessage={<EndMsg />}
        //   {  <p style={{ textAlign: 'center' }}>
        //         <b>Yay! You have seen it all</b>
        //     </p>}

        >

            <div className='search'>
                <h3>Search Product</h3>
                <input type="text" onChange={(event) => search(event.target.value)} ></input>
                {/* <button onClick={}>Search</button> */}

                
            </div>
            




            <div className='Dropdown'>
                <DropdownButton id="dropdown-basic-button" title="Filter Products">
                    <Dropdown.Item onClick={() => filterResult("men's clothing")} type="button" className="btn btn-primary">Men's wear</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterResult("women's clothing")} type="button">Women's wear</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterResult("electronics")} type="button" className="btn btn-primary">Electronics</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterResult("jewelery")} type="button" className="btn btn-primary">Jewelery</Dropdown.Item>

                </DropdownButton>

            </div>

            <div className='Products'>
                <h1 style={{ textAlign: 'center' }}>Product Dashboard</h1>
                {
                    item ?
                        <div>
                            <Table className="table" striped bordered hover>
                                <thead id="header">
                                    <tr>
                                        <th >Id</th>
                                        <th>Image</th>
                                        <th>ProductTitle</th>
                                        <th>category</th>
                                        <th>Rating</th>
                                        <th>CheckBox</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        item.map((value, i) => {
                                            return (
                                                <tr id='tabelerow'>
                                                    <td style={{ width: '0rem' }}>{value.id}</td>
                                                    <td style={{ width: '12rem' }}><img className="img-fluid" alt="Responsive image" src={value.image} /></td>
                                                    <td style={{ width: '11rem' }}>{value.title}</td>
                                                    <td style={{ width: '10rem' }}>{value.category}</td>
                                                    <td style={{ width: '10rem' }}><i className="fas fa-star"></i> {value.rating.rate}</td>
                                                    {/* <th><a href="#" className="btn btn-primary">Buy Now</a></th> */}

                                                    <td id='checkbox' style={{ width: '9rem' }}> < input type="checkbox" className='deleteicon' /> </td>

                                                    <td className="w3-xlarge" style={{ width: '10rem' }} onClick={() => Delete(value.id)} ><i className="fas fa-trash-alt" ></i></td>
                                                </tr>



                                            )
                                        })
                                    }
                                </tbody>
                            </Table >


                        </div >
                        : <p>Please wait.... </p>
                }

            </div >





        </InfiniteScroll>


    )
}

export default Products