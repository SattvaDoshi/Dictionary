import React from 'react'
import './Header.css'
import { TextField, ThemeProvider, createTheme, MenuItem } from '@mui/material';
import categories from "../data/Categroy";

const Header = ({ category, setcategory, Word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: 'dark'
        },
    });

    const handlechange=(language)=>{
        setWord("")
        setcategory(language)

    }
    return (


        <div className="header">
            <span className="title">{Word ? Word : "Word Hunt"}</span>
            <div className="input">
                <ThemeProvider theme={darkTheme}>


                    <TextField id="outlined-basic"
                        label="Search Word"
                        variant="outlined"
                        value={Word}
                        onChange={(e) => setWord(e.target.value)}
                    />


                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handlechange(e.target.value)}
                        className="select"
                        style={{ marginLeft: "20px", width: "10vw" }}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>

    )
}

export default Header