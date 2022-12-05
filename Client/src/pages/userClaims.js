import { React, useState, useEffect} from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"


function RestaurantClaims() {
    
    const [database, setDatabase] = useState([]);
    

    const data = "";
      function GetData(){
        useEffect(() => {
            (async () => {
                try {
                    await axios.get("http://localhost:3001/search3", {
                        params: {
                            username: localStorage.getItem("username")
                        }
                    }).then((response) => {
                        setDatabase(JSON.parse(JSON.stringify((response.data))))


                    })
                  }
                  catch (e) {
                    console.log(e)
                  }
            })();
          }, []);
      }
     

   

    return (

        <div>
            <div className="claimFood">
                <div className='claimFoodBox'>
                    {GetData()}
                    <><ReactTable
                        data={database}
                        columns={[
                            {
                                Header: "Your Claims",
                                style: {
                                    textAlign: "center",
                                    fontSize: "30px",
                                    fontWeight: 'semi-bold',
                                    color: 'black',
                                    transition: 'all .2s ease-out'

                                },
                                columns: [
                                    {
                                        Header: "Food",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "30px",
                                            color: 'black',
                                            transition: 'all .2s ease-out',
                                            fontFamily: 'lucida'

                                            //backgroundColor: '#5CB766'

                                        },
                                        accessor: "username",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out',
                                            //backgroundColor: '#5CB766'

                                        }
                                    },
                                    {
                                        Header: "Restaurant",
                                        accessor: "email",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out'

                                        }



                                    },
                                    {
                                        Header: "Date",
                                        accessor: "pass",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out'

                                        }
                                    },

                                ],



                            },
                        ]}
                        defaultPageSize={10}

                        style={{


                            FontFace: "itim",
                            height: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        className="-striped -highlight" /><br /></>




                </div>
            </div>
        </div>
    );

}

    
  
      
     /*  <>
       <h1>Restaurant Claims page </h1>
       <p>Check which user is picking up food</p>
      

       </>
    */
  
    


export default RestaurantClaims;

