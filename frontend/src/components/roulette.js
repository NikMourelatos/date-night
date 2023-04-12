import { Wheel } from 'react-custom-roulette'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';

export default function Roulette() {
    const [value, setValue] = new useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        getNewData()
    }, [value])

    function getNewData(){
        return;
    }

    const data = [
        { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
        { option: '1', style: { backgroundColor: 'white', textColor: 'black' } },
        { option: '2' },
    ]
    return (
        <div style={{margin: '30px'}}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Location" value="1" />
                            <Tab label="Food" value="2" />
                            <Tab label="Activity" value="3" />
                        </TabList>
                    </Box>
                </TabContext>
            </Box>
            <br/>
            <br/>
            <div style={{ 'textAlign': '-webkit-center' }}>
                <Wheel
                    prizeNumber={3}
                    data={data}
                    backgroundColors={['#3e3e3e', '#df3428']}
                    textColors={['#ffffff']}
                />

            </div>
        </div>
    )
}