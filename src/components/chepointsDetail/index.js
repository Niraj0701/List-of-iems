import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import './styles.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChevronRight from '@material-ui/icons/ArrowForward';
import SingleLineGridList from "./testcomponent";
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
                        <SingleLineGridList checkpointsList={listOfCheckpoints}/>
                    </Paper>}
                </Grid>


            </Grid>

        </div>
    );
};
export default EquipementDetails;

/* 
brand: "Legrand"

building: "Batiment Test"
domain: "ELECTRICITE COURANTS FORTS"
local: "Chaufferie"
niveau: "R-1"
model: "Atlantic 55"

name: "Armoire électrique Chaufferie"
nbFaults: 14
quantity: 1
serialNumber: ""
status: "En marche"

notes: "L'équipement présente peu de risque Il manque des documentations et informations liées à la prévention pour assurer une bonne maintenance de l'équipement (pictogramme, schéma électrique, etc...)↵Nous conseillons la mise en place d'un compteur électrique pour suivre la performance de l'installation"
photo: "https://storage.googleapis.com/test-technique-beeldi.appspot.com/Equipements%2F-LHXpVflc-dgLpOHjPdW%2F011794_Photo%2003-05-2018%2008.34.11.jpg?GoogleAccessId=firebase-adminsdk-d81iz%40test-technique-beeldi.iam.gserviceaccount.com&Expires=16731702000&Signature=lltdfHplzsnW%2BIvY8Pob4Cnk7CELEJmZvvw8w1I5fKIJnDn%2BiM8F5KcnfSXjaRk2Brr4OEeHcFrNlbfxjnjUDk3%2BX8sjN5F0BJNr%2B%2FAqvP5NIZS0DVQP4QvfVGrWuod7CZylMHUzXPdb2%2B09G7FJUk0c3wksnX%2B2emJJOTIE5jFeOJB4Fg%2BSMnU1obSnCKo3CeRkIc%2F7qHSlKoOktcluCM%2Bqojfr%2BzfUT57v5uUOzyYwd884Ng8496K5EcjGD6CqrgKDgjhnpq0rhZC2Npy7x4EUWXTxGwKod19DXRpV8zXrLRXiQNg6dwUppV6%2FnQ68NC6thfZrQ%2BLooShJyBLs%2BA%3D%3D"

*/
