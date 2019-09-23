import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChevronRight from '@material-ui/icons/ArrowForward';
import SingleLineItem from "./singleLineItem";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid #b1b1b1'
  },

}));

export const KeyValue = (props) => {
  return (
    <div className='dataRow'>
      {props.bulletIcon && <ChevronRight color="primary"/>}
      <span className='dataKey'>{props.keyName} : </span>
      <span className='dataValue'>{props.keyInfo}</span>
    </div>
  )

};

const EquipementDetails = props => {
  const {equipment, listOfCheckpoints} = props;
  const classes = useStyles();
  return (
    <div className='checkpointDetails'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CardMedia className='equipementImage' component='img' height='50vh' image={equipment.photo}/>
          </Paper>
        </Grid>
        {equipment.notes && <Grid item xs={12}>
          <Paper className={classes.paper}>
            <KeyValue bulletIcon={false} keyName={'Note'} keyInfo={equipment.notes}/>
          </Paper>
        </Grid>}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <KeyValue bulletIcon={true} keyName={'Building'} keyInfo={equipment.building}/>
            <KeyValue bulletIcon={true} keyName={'Domain'} keyInfo={equipment.domain}/>
            <KeyValue bulletIcon={true} keyName={'Local'} keyInfo={equipment.domain}/>
            <KeyValue bulletIcon={true} keyName={'Niveau'} keyInfo={equipment.niveau}/>
            <KeyValue bulletIcon={true} keyName={'Model'} keyInfo={equipment.model}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <KeyValue bulletIcon={true} keyName={'Non'} keyInfo={equipment.name}/>
            <KeyValue bulletIcon={true} keyName={'Numero des faut'} keyInfo={equipment.nbFaults}/>
            <KeyValue bulletIcon={true} keyName={'Quantity'} keyInfo={equipment.quantity}/>
            <KeyValue bulletIcon={true} keyName={'Numero Serial'} keyInfo={equipment.serialNumber}/>
            <KeyValue bulletIcon={true} keyName={'Status'} keyInfo={equipment.status}/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {listOfCheckpoints &&
          <Paper className={classes.paper}>
            <SingleLineItem checkpointsList={listOfCheckpoints}/>
          </Paper>}
        </Grid>
      </Grid>
    </div>
  );
};
export default EquipementDetails;
