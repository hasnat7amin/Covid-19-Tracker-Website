import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HorizontalBarChart from './GlobalCart';
function GlobalStat() {
    let [GlobalData, setGlobalData] = useState([]);
    useEffect(() => {

        async function Data() {
            const promise = await fetch('https://api.covid19api.com/summary')
            const data = await promise.json()
            const Globe = data.Global;
            delete Globe["Date"]
            setGlobalData(Globe);
            console.log(data.Global)

        }
        Data()
    }, [])
    console.log(GlobalData)

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 2,
            backgroundColor: '#6c7f92',

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            backgroundColor: '#8b9aa2',
            color: "white",
            margin: 3,
            fontWeight: "normal",
        },
        container: {
            display: "flex",
            justifyContent: "space-around",
            color: "white",
            fontWeight: "normal",
        },
    }));
    const classes = useStyles();

    return (
        <div>

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h3>Global Facts About Covid-19</h3>
                        </Paper>
                    </Grid>
                </Grid>

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            Object.keys(GlobalData).map((key, index) => {
                                return (
                                    <Grid item xs={12} sm={4}>
                                        <Paper key={index} className={classes.paper}>
                                            <div className={classes.container}>
                                                <h3>{key}</h3>
                                                <h3>{GlobalData[key]}</h3>
                                            </div>
                                        </Paper>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default GlobalStat
