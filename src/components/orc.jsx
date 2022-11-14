
import "./style.css";
import MediaQuery from 'react-responsive'

const Warrior = (props) => {
    return(
       
        <div className="hunter-gatherer1">

        <div className="paragraphOrc">

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


const Troll = (props) => {
    return(
       
        <div className="hunter-gatherer2">

        <div className="paragraphOrc">
            
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

const Tauren = (props) => {
    return(
       
        <div className="hunter-gatherer3">

        <div className="paragraphOrc">
            
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



const BloodElf = (props) => {
    return(
       
        <div className="hunter-gatherer4">

        <div className="paragraphOrc">
            
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

const BeastMaster = (props) => {
    return(
       
        <div className="hunter-gatherer4">

        <div className="paragraphOrc">
            
        <p className="index-property-name">{props.name}</p>
        <p className="index-property-occupation">{props.occupation}</p>
        <p className="index-property-mount">{props.mount}</p>
        <p className="index-property-weapon">{props.weapon}</p>
        <p className="index-property-type">{props.type}</p>
        <p className="index-property-damage">{props.damage}</p>

        </div>
        </div>

        
    );
};





// const Audio = (props)=> {
//     return (
//       <div>
//         <audio ref="audio_tag" src="WarcraftTheme.mp3" controls autoPlay/>
//       </div>
//     );
// }

export {Warrior, Troll, Tauren, BloodElf, BeastMaster};
