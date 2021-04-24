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
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backgroundImage: `url(https://xvivo.com/app/uploads/2020/05/COVID19_1366x768.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        },
        paper1: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: "white",
            margin: 3,
            fontWeight: "normal",
            backgroundImage: `url(https://xvivo.com/app/uploads/2020/05/COVID19_1366x768.jpg)`,

            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: "white",
            margin: 3,
            fontWeight: "normal",
            backgroundImage: `url(https://xvivo.com/app/uploads/2020/05/COVID19_1366x768.jpg)`,

            backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
                                                    <h6>Last Update:<span>{key.Date}</span></h6>
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
