import Store from "./Store";
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Label from '@mui/material/FormLabel';

const Form = (props) => {

    const [name, setName] = useState('');
    const [minCust, setMinCust] = useState(0);
    const [maxCust, setMaxCust] = useState(0);
    const [avgCookie, setAvgCookie] = useState(0);
    const [showForm, setShowForm] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.setStores([...props.stores, new Store(name, minCust, maxCust, avgCookie)]);
        setShowForm(false);
    }

    return (
        <>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                <Button variant="contained" style={{ margin: "30px" }} onClick={() => setShowForm(!showForm)}>Add Store</Button>
            </Box>
            {showForm && (
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" margin="5px">
                        <fieldset>
                            <legend>Store Info</legend>

                            <Label>Name: </Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="" type="text" className="form-input" onChange={(e) => setName(e.target.value)} />

                            <Label>Min Customers: </Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="" type="number" className="form-input" name="minCust" onChange={(e) => setMinCust(+e.target.value)} />

                            <Label>Max Customers: </Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="" type="number" className="form-input" name="maxCust" onChange={(e) => setMaxCust(+e.target.value)} />

                            <Label> Avg Cookies Sold:</Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="" type="number" className="form-input" name="avgCookie" onChange={(e) => setAvgCookie(+e.target.value)} />

                        </fieldset>
                    </Box>
                    <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                        <Button id="form-Button" variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Box>
            )}
        </>
    )

}

export default Form