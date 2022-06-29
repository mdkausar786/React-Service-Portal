import axios from 'axios';
import React, { useEffect, useState, Suspense, lazy } from 'react'
import { Button } from 'react-bootstrap'
import Jsonfile from './Jsonfile'
import { Table, Dropdown, DropdownButton } from 'react-bootstrap'
// import ReactPaginate from 'react-paginate';
import '../App.css';
import InfiniteScroll from 'react-infinite-scroll-component';


const ReactPaginate = lazy(() => import('react-paginate'))


const Productspagination = () => {

    // const [data, setdata] = useState([]);
    const [item, setItem] = useState([]);
    const [display, setDisplay] = useState([])

    const [allitem, setAllitem] = useState([]);


    const [pageCount, setpageCount] = useState(0);

    let limit = 5;





    // useEffect(() => {

    //     FetchProducts()

    // },[])


    function fetchall() {
        fetch("http://localhost:3000/shopping").then((response) => {
            response.json().then((result) => {
                console.warn(result);

                setAllitem(result)
            })
        })

    }


    useEffect(() => {

        Datafetch();
        fetchall();
        // filterResult();


    }, []);

    function Datafetch() {
        fetch(`http://localhost:3000/shopping?_page=1&_limit=${limit}`).then((response) => {
            response.json().then((result) => {
                // console.warn(result);
                const total = response.headers.get('x-total-count');
                console.log(total);
                setpageCount(Math.ceil(total / limit));  //for approx
                return result;
                // setItem(result)
                // setDisplay(result)

            })
        })

    }

    // console.log(item);

    function Datafetch(currentPage) {
        fetch(`http://localhost:3000/shopping?_page=${currentPage}&_limit=${limit}`).then((response) => {
            response.json().then((result) => {
                // console.warn(result);

                // return result
                // setDisplay(result)

                setItem(result)
            })
        })

    }
    const handlePageClick = (data) => {

        let currentPage = data.selected + 1;
        // console.log(data.selected);

        const shoppingFormServer = Datafetch(currentPage)
        setItem(shoppingFormServer);
        // console.log(data.selected);
    }


    function Delete(id) {
        fetch("http://localhost:3000/shopping/" + id,


            {
                method: "DELETE",
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(result);
                    alert("Product Deleted")
                    Datafetch();

                })
            })
    }


    const filterResult = (cartdata) => {
        const result = allitem.filter((currData) => {
            return currData.category === cartdata;
        });
        setItem(result);
        // setAllitem(result);
        // console.log(allitem);

        // setDisplay(result);


    }






    // const FetchProducts = () => {
    //     axios.get("https://fakestoreapi.com/products")
    //         .then((response) => {

    //             // console.log(response.data);
    //             // console.log(response.data.articles);


    //             setdata(response.data);
    //             // console.log(data);

    //             console.log(response);

    //         }


    //         )

    // }



    return (
        <>




            {/* <div className='container my-3'>
                <div className="row">
                    <div className="col-4">
                        <Button onClick={FetchProducts} className="btn btn-primary">FetchProducts</Button>

                    </div>
                </div>
            </div> */}



            <div className="container">
                {/* 
                <div className="btn-group-vertical"> Filter Products
                    <button onClick={() => filterResult("men's clothing")} type="button" className="btn btn-primary" >Men's wear</button>
                    <button onClick={() => filterResult("women's clothing")} type="button" className="btn btn-primary">Women's wear</button>
                    <button onClick={() => filterResult("electronics")} type="button" className="btn btn-primary">Electronics</button>
                    <button onClick={() => filterResult("jewelery")} type="button" className="btn btn-primary">Jewelery</button>


                </div> */}
                <div className='Dropdown'>
                    <DropdownButton id="dropdown-basic-button" title="Filter Products">
                        <Dropdown.Item onClick={() => filterResult("men's clothing")} type="button" className="btn btn-primary">Men's wear</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterResult("women's clothing")} type="button">Women's wear</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterResult("electronics")} type="button" className="btn btn-primary">Electronics</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterResult("jewelery")} type="button" className="btn btn-primary">Jewelery</Dropdown.Item>

                    </DropdownButton>

                </div>


                {/* <div className="row">

                        {
                            data.map((value) => {
                                // const {image,title,category,description,price}=value
                                return (
                                    <div className="col-md-4 mb-4">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src={value.image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                                <h5 className="card-title">{value.category}</h5>

                                                <p className="card-text">{value.description}</p>

                                                <h2 className="card-title">*{value.rating.rate}</h2>


                                                <h2 className="card-title">${value.price}</h2>
                                                <a href="#" className="btn btn-primary">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>

                                )

                            })
                        }










                    </div> */}



            </div>



            <div className=''>
                <h1>shop your Products</h1>
                {
                    item ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>ProductTitle</th>
                                        <th>category</th>
                                        <th>Rating</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        item.map((value, i) => {
                                            return (
                                                <tr>
                                                    <td >{value.id}</td>
                                                    <td ><img className="card-img-top" src={value.image} alt="Card image cap" /></td>
                                                    <td>{value.title}</td>
                                                    <td>{value.category}</td>
                                                    <td>*{value.rating.rate}</td>
                                                    {/* <th><a href="#" className="btn btn-primary">Buy Now</a></th> */}

                                                    <td> < input type="checkbox" className='deleteicon' /> <span onClick={() => Delete(value.id)}>
                                                        <i className="fas fa-trash-alt"></i></span></td>

                                                </tr>



                                            )
                                        })
                                    }
                                </tbody>
                            </Table >


                        </div >
                        : <p>Please wait..map.. </p>
                }

            </div >




            <Suspense fallback={<div>please wait page loading...</div>}> 
             <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={5}
                // pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousClassName="page-num"
                nextClassName="page-num"
                activeClassName="active1"

            /></Suspense>


        </>
    )
}



export default Productspagination;