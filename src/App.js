import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Tauren, Warrior, Troll, BloodElf, BeastMaster} from "./components/orc";
import { fiction } from "./fiction/index";
import { Thrall } from "./components/index";
import { grunt, troll, tauren, blood, ogre } from "./fiction/army";



import { wolf, elf, draenei, mage, paladin, king} from "./fiction/alliance"
import { Wolf, NightElf, Draenei, Mage, Uther, Wrynn } from "./components/human"


function App() {
  //HORDE//
  const tell = fiction();                       
  const tell1 = grunt();
  const tell2 = troll();
  const tell3 = tauren();
  const tell4 = blood();
  const tell5 = ogre();

  //ALLIANCE//

  const ally = wolf();                       
  const ally1 = elf();
  const ally2 = draenei();
  const ally3 = mage();
  const ally4 = paladin();
  const ally5 = king();

  return (
    <main>

      <h1>Battle For Azeroth</h1>

      <div className="game">
        <img className="img" src="images/Thrall_art1.webp"></img>
        {tell.properties.map((properties) => {
          return (
            <Thrall
              name={properties.name}
              occupation={properties.occupation}
              weapon={properties.weapon}
              ability={properties.ability}
              damage={properties.damage}
            />
          );
        })}
      </div>

      {/* /////////////////////////////////////////////////////////// */}
      {/* ///////////////////       ARMY       ////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      {/* //////////////////////////GRUNT//////////////////////////// */}

      <div className="heathen-army">
        <div className="grunt">
          <img className="imgGrunt" src="images/Grommash_wallpaper.webp"></img>
          {tell1.properties.map((properties) => {
            return (
              <Warrior
                name={properties.name}
                occupation={properties.occupation}
                weapon={properties.weapon}
                ability={properties.ability}
                damage={properties.damage}
              />
            );
          })}
        </div>

        {/* //////////////////////////TROLL//////////////////////////// */}

        <div className="head-hunter">
          <img className="imgGrunt" src="images/voljin.webp"></img>

          <div className="paragraphTroll">
            {tell2.properties.map((properties) => {
              return (
                <Troll
                  name={properties.name}
                  occupation={properties.occupation}
                  weapon={properties.weapon}
                  ability={properties.ability}
                  damage={properties.damage}
                />
              );
            })}
          </div>
        </div>


        {/* //////////////////////////TAUREN//////////////////////////// */}

        <div className="tauren">
          <img
            className="imgTauren"
            src="images/4011eb3785eed8e9550198e7f91406a4.jpg"
          ></img>

          <div className="paragraphTauren">
            {tell3.properties.map((properties) => {
              return (
                <Tauren
                  name={properties.name}
                  occupation={properties.occupation}
                  weapon={properties.weapon}
                  ability={properties.ability}
                  damage={properties.damage}
                />
              );
            })}
          </div>
        </div>

{/* //////////////////////////BLOOD ELF//////////////////////////// */}


<div className="bloodElf">
          <img
            className="imgBloodElf"
            src="images/Sylvanas_Windrunner.webp"
          ></img>

          <div className="paragraphBloodElf">
            {tell4.properties.map((properties) => {
              return (
                <BloodElf
                  name={properties.name}
                  occupation={properties.occupation}
                  weapon={properties.weapon}
                  ability={properties.ability}
                  damage={properties.damage}
                />
              );
            })}
          </div>
        </div>
{/* //////////////////////////OGRE//////////////////////////// */}

<div className="ogre">
          <img
            className="imgOgre"
            src="images/Rexxar_and_Misha_HotS_promo.webp"
          ></img>

          <div className="paragraphOgre">
            {tell5.properties.map((properties) => {
              return (
                <BeastMaster
                  name={properties.name}
                  occupation={properties.occupation}
                  weapon={properties.weapon}
                  type={properties.type}
                  damage={properties.damage}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////       ALLIANCE       //////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

        <div className="heathen-army">

        <div className="human">
        <img className="imgHuman" src="images/Genn_Greymane_Battle_for_Azeroth_Cinematic.webp"></img>
        {ally.properties.map((properties) => {
          return (
            <Wolf
              name={properties.name}
              occupation={properties.occupation}
              weapon={properties.weapon}
              ability={properties.ability}
              damage={properties.damage}
            />
          );
        })}
      </div>


      <div className="nightElf">
        <img className="imgHuman" src="images/Malfurion_WotE_Cropped.webp"></img>
        {ally1.properties.map((properties) => {
          return (
            <NightElf
              name={properties.name}
              occupation={properties.occupation}
              weapon={properties.weapon}
              ability={properties.ability}
              damage={properties.damage}
            />
          );
        })}
      </div>

      <div className="draenei">
        <img className="imgDraenei" src="images/Vindicator_Maraad_LoW.webp"></img>
        {ally2.properties.map((properties) => {
          return (
            <Draenei
              name={properties.name}
              occupation={properties.occupation}
              weapon={properties.weapon}
              ability={properties.ability}
              damage={properties.damage}
            />
          );
        })}
      </div>

{/* /////////////////////MAGE//////////////////// */}


<div className="mage">
        <img className="imgMage" src="images/HSKT_Jaina.webp"></img>
        {ally3.properties.map((properties) => {
          return (
            <Mage
              name={properties.name}
              occupation={properties.occupation}
              weapon={properties.weapon}
              ability={properties.ability}
              damage={properties.damage}
            />
          );
        })}
      </div>

      <div className="uther">
        <img className="imgUther" src="images/Uther_Mercenaries_3.webp"></img>
        {ally4.properties.map((properties) => {
          return (
            <Uther
              name={properties.name}
              occupation={properties.occupation}
              weapon={properties.weapon}
              type={properties.type}
              damage={properties.damage}
            />
          );
        })}
      </div>

          


        </div>

        <div className="king">
        <img className="imgKing" src="images/Anduin_by_Erik_Braddock_-_cropped.webp"></img>
        {ally5.properties.map((properties) => {
          return (
            <Wrynn
              name={properties.name}
              occupation={properties.occupation}
              weapon={properties.weapon}
              ability={properties.ability}
              damage={properties.damage}
            />
          );
        })}
      </div>

    </main>
  );
}

export default App;
