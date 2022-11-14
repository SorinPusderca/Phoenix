import "./style.css";
import MediaQuery from 'react-responsive'

const Wolf = (props) => {
    return(
       
        <div className="alliance">

        <div className="paragraphHuman">

        <p className="index-property-name">{props.name}</p>
        <p className="index-property-occupation">{props.occupation}</p>
        <p className="index-property-mount">{props.mount}</p>
        <p className="index-property-weapon">{props.weapon}</p>
        <p className="index-property-ability">{props.ability}</p>
        <p className="index-property-damage">{props.damage}</p>

        </div>
        </div>

        
    );
};


const NightElf = (props) => {
    return(
       
        <div className="alliance">

        <div className="paragraphHuman">

        <p className="index-property-name">{props.name}</p>
        <p className="index-property-occupation">{props.occupation}</p>
        <p className="index-property-mount">{props.mount}</p>
        <p className="index-property-weapon">{props.weapon}</p>
        <p className="index-property-ability">{props.ability}</p>
        <p className="index-property-damage">{props.damage}</p>

        </div>
        </div>

        
    );
};
const Draenei = (props) => {
    return(
       
        <div className="alliance">

        <div className="paragraphHuman">

        <p className="index-property-name">{props.name}</p>
        <p className="index-property-occupation">{props.occupation}</p>
        <p className="index-property-mount">{props.mount}</p>
        <p className="index-property-weapon">{props.weapon}</p>
        <p className="index-property-ability">{props.ability}</p>
        <p className="index-property-damage">{props.damage}</p>

        </div>
        </div>

        
    );
};
const Mage = (props) => {
    return(
       
        <div className="alliance">

        <div className="paragraphHuman">

        <p className="index-property-name">{props.name}</p>
        <p className="index-property-occupation">{props.occupation}</p>
        <p className="index-property-mount">{props.mount}</p>
        <p className="index-property-weapon">{props.weapon}</p>
        <p className="index-property-ability">{props.ability}</p>
        <p className="index-property-damage">{props.damage}</p>

        </div>
        </div>

        
    );
};
const Uther = (props) => {
    return(
       
        <div className="alliance">

        <div className="paragraphHuman">

        <p className="index-property-name">{props.name}</p>
        <p className="index-property-occupation">{props.occupation}</p>
        <p className="index-property-mount">{props.mount}</p>
        <p className="index-property-weapon">{props.weapon}</p>
        <p className="index-property-ability">{props.type}</p>
        <p className="index-property-damage">{props.damage}</p>

        </div>
        </div>

        
    );
};

const Wrynn = (props) => {
    return(
       
        <div className="alliance">

        <div className="paragraphHuman">

        <p className="index-property-name">{props.name}</p>
        <p className="index-property-occupation">{props.occupation}</p>
        <p className="index-property-mount">{props.mount}</p>
        <p className="index-property-weapon">{props.weapon}</p>
        <p className="index-property-ability">{props.ability}</p>
        <p className="index-property-damage">{props.damage}</p>

        </div>
        </div>

        
    );
};


export {Wolf, NightElf, Draenei, Mage, Uther, Wrynn}