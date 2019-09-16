import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/listItem/listItem';
import SearchBar from '../../components/searchBar/searchBar';

let style = {
    listOfItems: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'scroll',
        height: '70vh'
    }
};
export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
        console.log('Component init - ListPage: ');
        this.clickHere = this.clickHere.bind(this);
        this.clickTest = this.clickTest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: props.name,
            listOfEquipments: props.listOfEquipments
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('NextProps ', nextProps);
        this.setState({listOfEquipments: nextProps.listOfEquipments});
    }

    componentDidMount() {
        this.props.getListOfEquipments();
    }

    clickHere() {

    }

    handleChange(event) {
        const lowercasedFilter = event.target.value.toLowerCase();
        const filteredData = this.props.listOfEquipments.filter(singleEquipement => {
            return Object.keys(singleEquipement.item).some(key =>
                singleEquipement.item[key].toString().toLowerCase().includes(lowercasedFilter)
            );
        });
        this.setState({listOfEquipments: filteredData});
    };

    isObjectEmpty(objectToBeTested) {
        if (objectToBeTested)
            return Object.keys(objectToBeTested).length > 0;
    }

    _renderObject(itemsList) {
        if (itemsList) {
            return itemsList.map((item, index) => {
                    console.log(item);
                    console.log(item);
                    return <ListItem buttonClicked={this.clickTest} key={index} {...item} />
                }
            )
        }
    }

    clickTest(test) {
        console.log('Button CLicked... : ', test, this.props.history);
        this.props.history.push('/item-details', test)

    }

    render() {
        return (
            <section>
                <h1>From List Component: - {this.state.name}</h1>
                <SearchBar filterQuery={this.handleChange}/>
                <button onClick={this.clickHere}> {this.state.name} </button>
                <div style={style.listOfItems}>
                    {this._renderObject(this.state.listOfEquipments)}
                </div>
            </section>
        );
    }
}

ListPage.propTypes = {
    name: PropTypes.string,
    listOfEquipments: PropTypes.any,
    getListOfEquipments: PropTypes.func
};
