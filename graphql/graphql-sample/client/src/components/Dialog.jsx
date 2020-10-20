import React from 'react'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SimpleDialog from "@material-ui/core/Button";


const Dialog  = () => {
    const handleClose = () => {
        alert('close')
    }

    const handleClickOpen = () => {
        alert('open')
    }



    return (
        <div>
            <Typography variant="subtitle1">Selected: 23</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog selectedValue={34} open={false} onClose={handleClose} />
        </div>
    );
}

export default Dialog;