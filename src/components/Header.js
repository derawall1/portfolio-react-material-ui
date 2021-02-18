import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Avatar, Grid,Box} from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../avatar.png';

//START CSS STYLES
const useStyles = makeStyles(theme=>({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title:{
        color:"tomato"
    },
    subtitle:{
        color: "tan",
        marginBottom: "30rem"
    },
    typedContainer:{
        position: "absolute",
        
        top: "50%",
        left: "50%",
        right: "50%",
        bottom: "10%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex:1
    }
}))

//END CSS STYLES
const Header = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.typedContainer} component="div">
        <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Muhammad Mushtaq" />
        </Grid>
           
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Muhammad Mushtaq"]} typeSpeed={40} />
                
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                    strings={["Web & Software Development","Data Science & AI",".Net Stack"]} 
                    typeSpeed={30}
                    backSpeed={40}
                    loop
                />
               
            </Typography>
        </Box>
        </>
    )
}

export default Header
