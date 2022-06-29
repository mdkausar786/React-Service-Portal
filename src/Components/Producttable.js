import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { set } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRight } from 'react-bootstrap-icons';




const Producttable = () => {
  const [tdata, setTdata] = useState("")
  const [check, setCheck] = useState(false)


  useEffect(() => {

    Datafetch()

  }, []);

 function Datafetch()
  {
    fetch("http://localhost:3000/shopping").then((response) => {
      response.json().then((result) => {
        console.warn(result);
        setTdata(result)
          })
        })
    
  }



  function Delete(id) {
    fetch('http://localhost:3000/shopping/' + id,


      {
        method: "DELETE",
      }).then((result) => {
        result.json().then((resp) => {
          // console.warn(result);
          alert("Delete")
          Datafetch();

        })
      })
  }

  return (
    <div className=''>
      <h1>shop your Products</h1>
      {
        tdata ?
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>ProductName</th>
                  <th>company</th>
                  <th>Delete Products</th>

                </tr>
              </thead>
              <tbody>
                {
                  tdata.map((item, i) => {
                    return (
                      <tr>
                        <td >{i}</td>
                        <td>{item.pname}</td>
                        <td>{item.company}</td>
                        <td> < input type="checkbox" className='deleteicon' onChange={(event) => setCheck(true)} /> <span 
                        
                        
                        onClick={() => Delete(item.id)}
                        ><i class="fas fa-trash-alt"></i></span></td>

                      </tr>



                    )
                  })
                }
              </tbody>
            </Table >


          </div >
          : <p>Please wait....</p>
      }

    </div >
  )
}

export default Producttable


