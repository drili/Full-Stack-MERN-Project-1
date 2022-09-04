import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Input({ half, name, label, handleChange, autoFocus, type, handleShowPassword }) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === "password" ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <VisibilityIcon></VisibilityIcon> : <VisibilityOffIcon></VisibilityOffIcon>}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
            ></TextField>
        </Grid>
    )
}

export default Input