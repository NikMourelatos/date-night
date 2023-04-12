import { Alert, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Security(
    {
        setAllowed
    }
) {
    const [hasGuessed, setHasGuessed] = new useState(false)
    const [guessedMessage, setGuessedMessage] = new useState('');
    const [answer, setAnswer] = new useState('');

    const options = {
        H: "Ryan's Hottub",
        G: 'Abaondoned Glass House (Baltimore)',
        B: "Benji's House",
        P: 'Pineapple Diesel',
        S: 'Sanford Steakhouse',
    }

    const handleChange = (val) => {
        setHasGuessed(true)
        switch(val){
            case (options.H):
                setGuessedMessage("I wish..")
                break;
                case(options.G):
                setGuessedMessage("You didn't pick me up from work :(")
                break;
                case(options.B):
                setGuessedMessage("OOF")
                break;
                case (options.P):
                    setGuessedMessage("Never again")
                    break;
                    default:
                        setGuessedMessage('')
                        setAllowed(true)
        }
    }
    return (
        <div style={{ margin: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <Alert severity={'info'} style={{ textAlign: 'center' }}>
                    <h4>Please Answer the following Security Question to confirm identity...</h4>
                </Alert>
                <br />
                <hr />
                <br />
                {hasGuessed && guessedMessage &&
                    <Alert severity='error' style={{ margin: '10px' }}>
                        {guessedMessage}
                    </Alert>

                }
                <br />

                <InputLabel>Where was the location of Nik & Nadya's first date?</InputLabel>
                <Grid container spacing={2}>

                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label" style={{ visibility: 'hidden' }}>Locations..</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={answer}
                            fullWidth
                            onChange={(e) => handleChange(e.target.value)}
                        >
                            <MenuItem value={options.H}>{options.H}</MenuItem>
                            <MenuItem value={options.G}>{options.G}</MenuItem>
                            <MenuItem value={options.B}>{options.B}</MenuItem>
                            <MenuItem value={options.P}>{options.P}</MenuItem>
                            <MenuItem value={options.S}>{options.S}</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={4} />
                </Grid>
            </div>

        </div>
    )
}