import { Button } from '@mui/material'
import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='main'>
                <div className='img' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
                    <img
                        src="https://digiboxx.com/dist/assets/img/digibox-logo-bluebg.png"
                        alt=""
                        style={{
                            width: "200px",
                            height: "200px",
                        }}
                    />
                   <div className='btns'>
                     <Button varient="outlined">Login</Button>
                     <Button varient="outlined">SignUp</Button>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Home