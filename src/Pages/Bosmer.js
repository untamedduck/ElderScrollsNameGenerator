import React from "react";
import bosmer from "../elderScrollsPhotos/WoodElf.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";



function Bosmer(props) {
    
    const maleNames = [
        "Aengoth", "Aengvir", "Agarond", "Allimir", "Alveleg", "Amragor", "Amring", "Ancher", "Andell", "Andriel", "Angan", "Anglalos", "Anglor", "Angorn", "Anguilon", "Anlas", "Anman", "Annis", "Annor", "Anoriath", "Anrim", "Anruin", "Antan", "Anvan", "Aracher", "Aradell", "Aradriel", "Aragan", "Aragorn", "Aralas", "Araman", "Aranis", "Arannir", "Aranor", "Ararim", "Aratan", "Arathor", "Aravan", "Archer", "Ardell", "Ardriel", "Argan", "Argorn", "Arlas", "Arman", "Arnis", "Arnor", "Arrim", "Artan", "Arvan", "Athragar", "Athrelor", "Baenlin", "Baeralorn", "Baradras", "Berengeval", "Bolrin", "Bolwing", "Bragor", "Brallion", "Brellin", "Brithaur", "Brithroth", "Brodras", "Brolmir", "Caenlin", "Caenlorn", "Celegorn", "Cingaer", "Cingor", "Clendil", "Cocher", "Codell", "Codriel", "Cogan", "Cogorn", "Colas", "Coman", "Conis", "Conor", "Corim", "Cotan", "Covan", "Cun", "Daenlin", "Dangor", "Denegor", "Dervenin", "Dirding", "Dondir", "Edorfin", "Elberoth", "Elegal", "Elischer", "Elisdell", "Elisdriel", "Elisgan", "Elisgorn", "Elislas", "Elisman", "Elisnis", "Elisnor", "Elisrim", "Elistan", "Elisvan", "Eloroth", "Elrindir", "Endrast", "Endring", "Engaer", "Engorm", "Enilroth", "Enthir", "Eradan", "Eridor", "Erradan", "Erthor", "Erval", "Faendal", "Faldan", "Fargoth", "Faulgor", "Fillin", "Fimmion", "Findulain", "Fithragaer", "Foroch", "Foronir", "Gadnor", "Gaeldol", "Gaenor", "Galmir", "Galthragoth", "Gazalem", "Gelebros", "Gelephor", "Gerrilgor", "Girduin", "Glarthir", "Glaum", "Glonagoth", "Gloorolros", "Godros", "Gorchalas", "Gundalas", "Gwilin", "Gwinas", "Hagaer", "Hingor", "Hundolin", "Karocher", "Karodell", "Karodriel", "Karogan", "Karogorn", "Karolas", "Karoman", "Karonis", "Karonor", "Karorim", "Karotan", "Karovan", "Legocher", "Legodell", "Legodriel", "Legogan", "Legogorn", "Legolas", "Legoman", "Legonis", "Legonor", "Legorim", "Legotan", "Legovan", "Licher", "Lidell", "Lidriel", "Ligan", "Ligorn", "Lilas", "Liman", "Linis", "Linor", "Lirim", "Litan", "Livan", "Maenlorn", "Maglir", "Malborn", "Meldor", "Menelras", "Minedhel", "Minglos", "Monthadan", "Morth", "Nalion", "Nedhelas", "Nedhelfin", "Nedhelorn", "Niraegaer", "Niruin", "Nordinor", "Orchendor", "Palicher", "Palidell", "Palidriel", "Paligan", "Paligorn", "Palilas", "Paliman", "Palinis", "Palinor", "Palirim", "Palitan", "Palivan", "Pegasai", "Peragon", "Riacher", "Riadell", "Riadriel", "Riagan", "Riagorn", "Rialas", "Riaman", "Rianis", "Rianor", "Riarim", "Riatan", "Riavan", "Rindir", "Rithrannir", "Ronthil", "Silcher", "Sildell", "Sildriel", "Silgan", "Silgorn", "Sillas", "Silman", "Silnis", "Silnor", "Silrim", "Siltan", "Silvan", "Syndus", "Tacher", "Tadell", "Tadriel", "Tagan", "Tagorn", "Talas", "Taman", "Tanis", "Tanor", "Tarhiel", "Tarim", "Tatan", "Tavan", "Thadon", "Thaer", "Thaurron", "Thoromlallor", "Thoronir", "Thoronor", "Thrangirfin", "Thurindil", "Tuundir", "Ulwaen", "Ungeleb", "Ungolim", "Ungrien", "Urunil", "Uungor", "Uuras", "Valindor"
    
    ]
    const femaleNames = [
       "Adanrel", "Aerin", "Aglaril", "Alawen", "Althel", "Andragil", "Anedhel", "Angrond", "Anrel", "Anuriel", "Aradraen", "Arangaer", "Aranwen", "Ardhil", "Ardwen", "Aredhel", "Bauril", "Baurin", "Beleval", "Belwen", "Berwen", "Boroneth", "Borwen", "Bothiel", "Brelas", "Carwen", "Casdra", "Casfina", "Casgina", "Caslandra", "Caslerva", "Casna", "Casnia", "Cassa", "Cassandra", "Casthia", "Celegil", "Ciindil", "Cirwedh", "Cuunel", "Cyldra", "Cylfina", "Cylgina", "Cyllandra", "Cyllerva", "Cylna", "Cylnia", "Cylsa", "Cylsandra", "Cylthia", "Dagail", "Dairihill", "Degil", "Dennilwen", "Desdra", "Desfina", "Desgina", "Deslandra", "Deslerva", "Desna", "Desnia", "Dessa", "Dessandra", "Desthia", "Distel", "Dondreth", "Dothiel", "Dothruviel", "Dredhwen", "Eindel", "Elegnan", "Elphiron", "Elragail", "Elsynia", "Emelin", "Eraldil", "Estinan", "Falion", "Fara", "Faurinthil", "Filbeneth", "Galathil", "Galbedir", "Galdiir", "Ganredhel", "Gelduin", "Gildan", "Giningil", "Githriian", "Glathel", "Hasathil", "Huurwen", "Hyna", "Idrolian", "Iingail", "Indrel", "Irwaen", "Kirsty", "Laenafil", "Laralthir", "Laredra", "Larefina", "Laregina", "Larelandra", "Larelerva", "Larena", "Larenia", "Laresa", "Laresandra", "Larethia", "Legodra", "Legofina", "Legogina", "Legolandra", "Legolerva", "Legona", "Legonia", "Legosa", "Legosandra", "Legothia", "Liette", "Lilisdra", "Lilisfina", "Lilisgina", "Lilislandra", "Lilislerva", "Lilisna", "Lilisnia", "Lilissa", "Lilissandra", "Lilisthia", "Lorchel", "Mandil", "Mara", "Menelin", "Methredhel", "Milbereth", "Mindra", "Minfina", "Mingina", "Minlandra", "Minlerva", "Minna", "Minnia", "Minsa", "Minsandra", "Minthia", "Naarifin", "Nael", "Natesse", "Nathien", "Nilawen", "Nilioniel", "Nimphaneth", "Nimriel", "Nivenor", "Nona", "Parwen", "Penglithil", "Phydra", "Phyfina", "Phygina", "Phylandra", "Phylerva", "Phyna", "Phynia", "Physa", "Physandra", "Phythia", "Radras", "Rillidra", "Rillifina", "Rilligina", "Rillilandra", "Rillilerva", "Rillina", "Rillinia", "Rillisa", "Rillisandra", "Rillithia", "Samia", "Sidra", "Sifina", "Sigina", "Silandra", "Silerva", "Sina", "Sinia", "Sisa", "Sisandra", "Sithia", "Syl", "Telaendril", "Thaedil", "Thaeril", "Thalfin", "Thamriel", "Thiirchel", "Udra", "Ufina", "Ugina", "Ulandra", "Ulerva", "Una", "Unia", "Usa", "Usandra", "Uthia", "Uurwen", "Wylandriah"
    
    ]
    
    const lastNames = [
        "Bluebrook", "Bluedale", "Bluehollow", "Bluelake", "Bluepool", "Bluerun", "Blueshade", "Bluesky", "Bluethorn", "Bluevale", "Bluewind", "Bluewood", "Fernbrook", "Ferndale", "Fernhollow", "Fernlake", "Fernpool", "Fernrun", "Fernshade", "Fernsky", "Fernthorn", "Fernvale", "Fernwind", "Fernwood", "Forestbrook", "Forestdale", "Foresthollow", "Forestlake", "Forestpool", "Forestrun", "Forestshade", "Forestsky", "Forestthorn", "Forestvale", "Forestwind", "Forestwood", "Ivybrook", "Ivydale", "Ivyhollow", "Ivylake", "Ivypool", "Ivyrun", "Ivyshade", "Ivysky", "Ivythorn", "Ivyvale", "Ivywind", "Ivywood", "Mossbrook", "Mossdale", "Mosshollow", "Mosslake", "Mosspool", "Mossrun", "Mossshade", "Mosssky", "Mossthorn", "Mossvale", "Mosswind", "Mosswood", "Nightbrook", "Nightdale", "Nighthollow", "Nightlake", "Nightpool", "Nightrun", "Nightshade", "Nightsky", "Nightthorn", "Nightvale", "Nightwind", "Nightwood", "Oakbrook", "Oakdale", "Oakhollow", "Oaklake", "Oakpool", "Oakrun", "Oakshade", "Oaksky", "Oakthorn", "Oakvale", "Oakwind", "Oakwood", "Pinebrook", "Pinedale", "Pinehollow", "Pinelake", "Pinepool", "Pinerun", "Pineshade", "Pinesky", "Pinethorn", "Pinevale", "Pinewind", "Pinewood", "Riverbrook", "Riverdale", "Riverhollow", "Riverlake", "Riverpool", "Riverrun", "Rivershade", "Riversky", "Riverthorn", "Rivervale", "Riverwind", "Riverwood", "Shadybrook", "Shadydale", "Shadyhollow", "Shadylake", "Shadypool", "Shadyrun", "Shadyshade", "Shadysky", "Shadythorn", "Shadyvale", "Shadywind", "Shadywood", "Springbrook", "Springdale", "Springhollow", "Springlake", "Springpool", "Springrun", "Springshade", "Springsky", "Springthorn", "Springvale", "Springwind", "Springwood", "Willowbrook", "Willowdale", "Willowhollow", "Willowlake", "Willowpool", "Willowrun", "Willowshade", "Willowsky", "Willowthorn", "Willowvale", "Willowwind", "Willowwood"
    
    ]


    
    return (
        <div>
          <div className="flex w-full relative z-0 justify-center lg:w-auto">
            <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
              <img
                className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                         transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
                src={bosmer}
                alt="Bosmer"
              />
            </div>
            <div
              className="text-[white] font-Rubik
                self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
            >
              <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]"> Wood Elf Character Name Generator</h1>
              <p className="pt-6  text-base md:text-lg lg:text-lg"> Bosmer (also called Wood Elves) are the elven people of Valenwood. They prefer a simple existence,
                        living in harmony with the land and wild animals. They are known to be the best archers in all of Tamriel and are known for their ability to command wild creatures.
                        They make great scouts or thieves, due to their natural stealth and light footing.</p>
            </div>
          </div>
          <CharacterNameGenerator maleNames={maleNames} femaleNames={femaleNames} lastNames={lastNames} />
        </div>
      );
    }



      



export default Bosmer;