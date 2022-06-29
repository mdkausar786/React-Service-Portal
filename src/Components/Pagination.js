import React, { useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
    const [pageCount,setpageCount]=useState(0);
    
    let limit =5;



    useEffect(()=>{

        Datafetch()

    },[])

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



    return (

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

        />

    )
}

export default Pagination