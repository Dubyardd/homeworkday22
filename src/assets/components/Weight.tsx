import React, { useState } from 'react'
import Swapmode from './Swapmode';



function Weight() {
    const [weight, setWeight] = useState<number>(0);

    const onChangeWeight = event => {
        setWeight(event.target.value);
    }

    const [isDarkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!isDarkMode);
    }
    return (
        <>
            <div style={{
                backgroundColor: isDarkMode ? '#333' : '#fff',
                color: isDarkMode ? '#fff' : '#000',
                height: '800px',
                width: '1000px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <form>
                    <div style={{


                    }}>
                        <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
                        <h2>{(weight * 2.2 * 30 / 2).toFixed(0)} มล.</h2>
                        <input type="text" id="weight" name="weight" placeholder='กรอกน้ำหนักของคุณ(kg)' onChange={onChangeWeight} />
                    </div>
                </form>
                <button type="button" onClick={toggleMode} style={{
                    margin: '20px' 
                   
                    
                    }}>
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </>
    );
}

export default Weight;