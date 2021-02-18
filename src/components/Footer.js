import React from 'react'
import {  makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from '@material-ui/icons/Facebook';
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 320,
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill: "tomato",
                fontSize: "2.8rem"
            }
        }
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <>
            <BottomNavigation width="auto" style={{ background: "#222" }} >
                <BottomNavigationAction
                    style={{ padding:0 }}
                    className={classes.root}
                    icon={<Facebook/>}
                    />
                    <BottomNavigationAction
                    style={{ padding:0 }}
                   
                    className={classes.root}
                    icon={<Instagram/>}
                    />
                   
                    <BottomNavigationAction
                    style={{ padding:0 }}
                    className={classes.root}
                    icon={<LinkedIn/>}
                    />
                    <BottomNavigationAction
                    style={{ padding:0 }}
                    className={classes.root}
                    icon={<Twitter/>}
                    />
                   
            </BottomNavigation>
        </>
    )
}

export default Footer
