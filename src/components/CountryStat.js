import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
function GlobalStat() {
    let [GlobalData, setGlobalData] = useState([]);
    useEffect(() => {

        async function Data() {
            const promise = await fetch('https://api.covid19api.com/summary')
            const data = await promise.json()
            const Globe = data.Countries;

            setGlobalData(Globe);
            console.log(Globe)

        }
        Data()
    }, [])
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
        paper1: {
            padding: theme.spacing(2),
            backgroundColor: '#8b9aa2',
            color: "white",
            margin: 3,
            fontWeight: "normal",
        },
        container: {
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            fontWeight: "normal",
        },
        container2: {
            display: "flex",
            justifyContent: "space-around",
            color: "white",
            fontWeight: "normal",
        },
        yellow: {
            color: "yellow",
        },
        green: {
            color: "green",
        },
        red: {
            color: "red",
        },
    }));
    const classes = useStyles();

    return (
        <div>

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h3>Countries Facts About Covid-19</h3>
                        </Paper>
                    </Grid>
                </Grid>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            GlobalData.map((key, index) => {
                                return (
                                    <Grid item xs={12} sm={6}>
                                        <Paper key={index} className={classes.paper1}>
                                            <div>
                                                <div className={classes.container}>
                                                    <h3>{key.Country}</h3>
                                                    <h5>Last Update:<span>{key.Date}</span></h5>
                                                </div>
                                                <div className={classes.container2}>
                                                    <p>Total Confirmed: <span className={classes.yellow}>{key.TotalConfirmed}</span></p>
                                                    <p>Total Deaths: <span className={classes.red}>{key.TotalDeaths}</span></p>
                                                    <p>Total Recovered: <span className={classes.green}>{key.TotalRecovered}</span></p>

                                                </div>
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
