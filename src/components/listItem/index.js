import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './styles.scss';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		margin: '20px',
		display: 'grid',
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
		maxHeight: 345,
	},
}));

const ListItem = props => {
	const classes = useStyles();
	return (
		<div className='mainList'>
			<Card className={classes.card}>
					<CardMedia component='img' alt='Contemplative Reptile' height='140' image={props.item.photo} title='Contemplative Reptile' />
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Le nom de l'équipement: {props.item.brand}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							<span> Le domaine de l'équipement: {props.item.domain}</span>
							<span> Le nombre de défauts associés: {props.item.nbFaults}</span>
						</Typography>
					</CardContent>
				<CardActions>
					<Link to={{
						pathname:'/item-details/' + props.index,
						state: props.item}}> En savoir plus </Link>
					{/*<Redirect to={{pathname: "/item-details/"+props.index, state: {item: props.item}}}> En savoir plus </Redirect>*/}
				</CardActions>
			</Card>
		</div>
	);
};
export default ListItem;
