import React from 'react';
import './testComponent.scss';
import NoImageBase64 from "./noImage";
import {KeyValue} from "./index";
const SingleLineItem = (props) => {

    return (
        <div className='list'>
            {props.checkpointsList.map((item, index) => (

                <div className="card" key={index}>
                    <div className='itemImage'>
                        {item.photo && <img src={item.photo} alt="Avatar"/>}
                        {!item.photo && <img className={'noImage'} src={NoImageBase64} />}
                    </div>
                    <div className="container">
                        <KeyValue bulletIcon={false} keyName={'Nom'} keyInfo={item.name}/>
                        {item.fault && <KeyValue bulletIcon={false} keyName={'Recommandation'} keyInfo={item.recommandation}/>}
                        {item.fault && <KeyValue bulletIcon={false} keyName={'Défaut'} keyInfo={item.fault}/>}
                    </div>

                </div>

            ))};
        </div>
    );
};

export default SingleLineItem;
