import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './styles.scss';

/* 
const ListItem = (props) => (
   <div className='mainList'>
     <span>{props.brand}</span>
      <span>{props.name}</span>
      <span>{props.domain}</span>
      <img src={props.photo} />
      
   </div>
);
export default ListItem;
*/
/*  

brand: "Salmson"
building: "Batiment Test"
domain: "PLOMBERIE ET ASSAINISSEMENT"
local: "S/station"
model: "SXM 65-25N"
name: "Pompe Distribution EC bâtiment G"
nbFaults: 7
niveau: "R-1"
notes: ""
photo: "https://storage.googleapis.com/test-technique-beeldi.appspot.com/Equipements%2F-LHXpVhpTDaHaYChPs5G%2F011836_Photo%2003-05-2018%2012.29.14.jpg?GoogleAccessId=firebase-adminsdk-d81iz%40test-technique-beeldi.iam.gserviceaccount.com&Expires=16731702000&Signature=dX5lG0mLpyXiOfVE%2BhpTYRMQuhf5KBICxFdCecEhpbThof%2Ftjl96%2BC1Q3D7uzIcZqO2n7esjwGeSg29%2BttUhiHf8L2wt0nEaEkun29fPIEamlMiJGDlbBwUKRn64LqKjkyBllrWp5eaAzKGInjwnZjhu9s9UMSUWl3nfk%2BGdZKwTsaiD5550miHRpWBPubuzMv56%2Bbqw9vQWQ%2FOQ0dWyuDwzNkO5eRFeVPbQOXEI%2Bprfj0y9LPon%2FUKIEJpTzQ8cFm%2FuVazpJ5fzua%2F5n%2BnFEYDZSPJejwYKnwbmcBFJK%2BRzsoG%2FRUeoGUy3Cjah0EfUZh5vMg62B56%2F0%2Fnibg83VQ%3D%3D"
quantity: 2
serialNumber: "2080127"
status: "En marche"
*/

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		margin: '20px',
display: 'grid'
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 500,
	},
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	card: {
		maxWidth: 345,
		maxHeight: 345
	},
}));

const ListItem = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="140"
						image={props.item.photo}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Le nom de l'équipement: {props.item.brand}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							<span> Le domaine de l'équipement: {props.item.domain}</span>
							<span> Le nombre de défauts associés: {props.item.nbFaults}</span>
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" onClick={()=>props.buttonClicked(props.index)}>
						En savoir plus
					</Button>
				</CardActions>
			</Card>
		</div>
	)
};
export default ListItem;

/*<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img className={classes.img} alt="complex" src={props.photo}/>
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1">
									{props.brand}
								</Typography>
								<Typography variant="body2" gutterBottom>
									{props.name}
								</Typography>
								{props.serialNumber ? (<Typography variant="body2" color="textSecondary">
									Serial Number: {props.serialNumber}
								</Typography>) : ''}
							</Grid>
							<Grid item>
								<Typography variant="body2" style={{cursor: 'pointer', color: 'blue'}}>
									En savoir plus
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant="subtitle1">{props.status}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>*/
