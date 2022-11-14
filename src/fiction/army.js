

const grunt = () =>{
    const rhino={
        'properties':
        [{
            
            'name': 'Grommash',
            'occupation': 'Occupation: Warrior',
            'weapon': ' Weapon: Battle Axe',
            'mount': 'Mount: Dire Wolf',
            'ability': 'Ability: Blademaster',
            'damage': 'Damage: 40HP, Armor: 7+'
        }]
    }
    return rhino   
}

const troll = () =>{
    const rhino={
        'properties':
        [{
            'name': 'Vol/jin',
            'occupation': 'Occupation: ShadowMaster',
            'weapon': ' Weapon: Poison spear',
            'mount': 'Mount: Raptor',
            'ability': 'Ability: Shaman',
            'damage': 'Damage: 23HP, Armor: 5'
        }]
    }
    return rhino   
}



function tauren() {
    const rhino1 = {
        'properties': [{
            'name': 'Baine Bloodhoof',
            'occupation': 'Occupation: Chieftain',
            'weapon': ' Weapon: Shaman Totem',
            'mount': 'Mount: None',
            'ability': 'Ability: War Stomp',
            'damage': 'Damage: 50HP, Armor: 3+'
        }]
    }
    return rhino1
}

function blood() {
    const elf = {
        'properties': [{
            'name': 'Sylvanas Windrunner',
            'occupation': 'Occupation: RangedAssassin',
            'weapon': ' Weapon: Black Arrows',
            'mount': 'Mount: None',
            'ability': 'Ability: Mind Control',
            'damage': 'Damage: 60HP, Armor:0'
        }]
    }
    return elf
}


function ogre() {
    const misha = {
        'properties': [{
            'name': 'Rexxar and Misha',
            'occupation': 'Occupation: BeastMaster',
            'weapon': ' Weapon: 2X Double Axe',
            'mount': 'Mount: None',
            'type': 'type: Legend Card',
            'damage': 'Damage: 70HP, Armor:10+'
        }]
    }
    return misha
}











// document.addEventListener('DOMContentLoaded',init);
// const Sounds={};

// function init(){
//     const p1= document.querySelector('p:nth-of-type');
//      p1.addEventListener('mouseover', play);
// }

// function play(e){
//     const p= e.currentTarget;
//     e.preventDefault();

//     const fn=p.getAttribute('aaww')
//     const src ='/sounds/Orc/Thrall/ThrallAngry1'+ fn + '.wav' 
//     console.log(src)
//     const audio= document.getElementById('a')
// }

export {grunt, troll, tauren, blood, ogre}



