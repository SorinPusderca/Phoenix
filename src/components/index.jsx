import "./style.css";




const Thrall = (props) => {
        return(
           
            <div className="hunter-gatherer">

            <div className="paragraphOrc">
            <p className="index-property-father">{props.father}</p>
            <p className="index-property-name">{props.name}</p>
            <p className="index-property-occupation">{props.occupation}</p>
            <p className="index-property-family">{props.family}</p>
            <p className="index-property-mount">{props.mount}</p>
            <p className="index-property-weapon">{props.weapon}</p>
            <p className="index-property-ability">{props.ability}</p>
            <p className="index-property-damage">{props.damage}</p>
            </div>

            </div>

            
        );
};

// import useSound from 'use-sound';
// import boopSfx from '../../sounds/boop.mp3';
// const BoopButton = () => {
//   const [play] = useSound(boopSfx);
//   return <button onClick={play}>Boop!</button>;
// };

export {Thrall};



