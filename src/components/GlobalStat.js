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
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backgroundImage: `url(https://xvivo.com/app/uploads/2020/05/COVID19_1366x768.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: "white",
            margin: 3,
            fontWeight: "normal",
            backgroundImage: `url(https://xvivo.com/app/uploads/2020/05/COVID19_1366x768.jpg)`,

            backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h2>Global Facts About Covid-19</h2>
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
                                                <h4>{key}</h4>
                                                <h5>{GlobalData[key]}</h5>
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
