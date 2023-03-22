import React from "react";
import orc from "../elderScrollsPhotos/Orc.png"
import CharacterNameGenerator from "../Components/CharacterNameGenerator";

function Orc(props) {
    const maleNames = [
        "Agronak", "Atulg", "Azuk", "Bagamul", "Bakh", "Balagog", "Baronk", "Bashag", "Bashnag", "Bat", "Bazgulub", "Bazur", "Bogakh", "Bogrum", "Bologra", "Borkul", "Borug", "Both", "Brag", "Brokil", "Brugo", "Bugak", "Bugdul", "Bugharz", "Bugrash", "Bugrol", "Bumbub", "Buramog", "Burguk", "Burul", "Burz", "Dubok", "Dul", "Dular", "Dulfish", "Dulphumph", "Duluk", "Duma", "Dumag", "Dumbuk", "Dumburz", "Dur", "Durak", "Durbul", "Durgash", "Durz", "Durzol", "Durzub", "Durzum", "Dushnamub", "Gadba", "Garothmuk", "Garzonk", "Gashna", "Gat", "Gaturn", "Ghamborz", "Ghamonk", "Ghamorz", "Ghola", "Ghoragdush", "Ghorbash", "Ghorlorz", "Ghorub", "Ghunzul", "Glush", "Gogron", "Gorgo", "Graklak", "Graman", "Grat", "Grogmar", "Grommok", "Grushnag", "Gruzgob", "Guarg", "Gul", "Gularzob", "Gurak", "Hanz", "Khadba", "Khagra", "Kharag", "Khargol", "Koffutto", "Krognak", "Kurdan", "Kurz", "Larak", "Largakh", "Lob", "Lorbumol", "Lorzub", "Lugdum", "Lugrub", "Lum", "Lumdum", "Lurbuk", "Lurog", "Luronk", "Magra", "Magub", "Mahk", "Makhel", "Maknok", "Malkus", "Mash", "Matuk", "Mauhul", "Mauhulakh", "Mazorn", "Mol", "Morbash", "Moth", "Mug", "Mugdul", "Muk", "Mul", "Mulush", "Murag", "Murkub", "Murzol", "Muzgonk", "Nag", "Nagrub", "Nar", "Nash", "Oglub", "Ogol", "Ogrul", "Ogrumbu", "Olfin", "Olumba", "Olur", "Orakh", "Orok", "Rogdul", "Rugdumph", "Shagol", "Shagrol", "Shakh", "Shamar", "Shamob", "Shargam", "Sharkub", "Shat", "Shazgob", "Shobob", "Shulong", "Shum", "Shura", "Shurkul", "Shuzug", "Snaglak", "Snakha", "Snat", "Ugdumph", "Ughash", "Ulag", "Ulam", "Ulmug", "Umug", "Umurn", "Urag", "Uram", "Urbul", "Urim", "Urul", "Urzog", "Ushamph", "Ushat", "Ushnar", "Uzul", "Yadba", "Yagak", "Yak", "Yam", "Yamarz", "Yambagorn", "Yambul", "Yar", "Yargol", "Yashnarz", "Yatur"
    
    ]
    const femaleNames = [
       "Agrob", "Arob", "Atub", "Badbog", "Bagrak", "Bashuk", "Batul", "Batum", "Bogdub", "Bolar", "Bor", "Borba", "Borgakh", "Bugdurash", "Bula", "Bulak", "Bulfim", "Bum", "Bumph", "Burub", "Burzob", "Dulug", "Dura", "Durgat", "Durz", "Garakh", "Gashnakh", "Ghak", "Gharol", "Ghob", "Ghorza", "Glasha", "Glob", "Gluronk", "Gonk", "Grat", "Grazob", "Gul", "Gulfim", "Homraz", "Kharzug", "Lagakh", "Lambug", "Lash", "Lazgar", "Mazoga", "Mog", "Mogak", "Mogdurz", "Mor", "Morn", "Murbul", "Murob", "Murzush", "Nargol", "Oghash", "Orag", "Orbul", "Ragash", "Rogbut", "Rogmesh", "Rolfish", "Rulfim", "Shadbak", "Shagar", "Shagdub", "Sharamph", "Sharn", "Sharog", "Shel", "Shelur", "Shuftharz", "Sloomalah", "Snak", "Ugak", "Ugor", "Uloth", "Ulumpha", "Umar", "Umog", "Urog", "Urzoga", "Urzoth", "Urzul", "Ushug", "Yag", "Yatul", "Yazgash"
    
    ]
    
    const lastNames = [
       "Agadbu", "Agamph", "Aglakh", "Agum", "Atumph", "Azorku", "Badbu", "Bagrat", "Bagul", "Bamog", "Bar", "Barak", "Bargamph", "Bargol", "Bashnag", "Bat", "Batul", "Bharg", "Boga", "Bogamakh", "Bogharz", "Bogla", "Boglar", "Bogrol", "Boguk", "Bol", "Bolak", "Bolmog", "Bonk", "Borbog", "Borbul", "Brok", "Bug", "Bugarn", "Buglump", "Bulag", "Bularz", "Bulfish", "Bumph", "Bura", "Burbog", "Burbug", "Burish", "Burol", "Burzag", "Buzga", "Cromgog", "Dragol", "Dugul", "Dul", "Dula", "Dulob", "Dumul", "Dumulg", "Durga", "Durog", "Durug", "Dush", "Dushnikh", "Galash", "Gamorn", "Gar", "Gash", "Gashel", "Gat", "Gatuk", "Gharz", "Ghash", "Ghasharzol", "Gholfim", "Gholob", "Ghorak", "Ghoth", "Glorzuf", "Gluk", "Glurkub", "Glurzog", "Golpok", "Gonk", "Gortwog", "Gorzog", "Grambak", "Grulam", "Gulfim", "Gurakh", "Gurub", "Hubrag", "Kashug", "Khagdum", "Khar", "Kharbush", "Kharz", "Khash", "Khashnar", "Khatub", "Khazor", "Lag", "Lagdub", "Largum", "Lazgarn", "Loghash", "Logob", "Logrob", "Lorga", "Lumbuk", "Lumob", "Lurkul", "Lurn", "Luzgan", "Magar", "Magrish", "Magul", "Malog", "Mar", "Marob", "Mashnar", "Mogduk", "Moghakh", "Morgrump", "Mughol", "Muk", "Mulakh", "Murgak", "Murgol", "Murug", "Murz", "Muzgob", "Muzgol", "Muzgub", "Muzgur", "Naybek", "Nolob", "Ogar", "Ogdub", "Ogdum", "Olor", "Olurba", "Orbuma", "Orkul", "Orkulg", "Rimph", "Rugdush", "Rugob", "Rush", "Rushub", "Shadborgob", "Shadbuk", "Shagdub", "Shagdulg", "Shagk", "Shagrak", "Shagramph", "Shak", "Sham", "Shamub", "Sharbag", "Sharga", "Shargakh", "Sharob", "Sharolg", "Shat", "Shatub", "Shatur", "Shazog", "Shub", "Shug", "Shugarz", "Shugham", "Shula", "Shulor", "Shumba", "Shura", "Shurkul", "Shuzgub", "Skandar", "Snagarz", "Snagdu", "Ufthamph", "Uftharz", "Ugdub", "Ugruma", "Ular", "Ulfimph", "Urgak", "Urgash", "Ushar", "Ushug", "Ushul", "Uzgash", "Uzgurn", "Uzug", "Uzuk", "Yagarz", "Yak", "Yargul", "Yarug", "Yarzol"
    
    ]
    
    return (
        <div>
        <div className="flex w-full relative z-0 justify-center lg:w-auto">
          <div className="flex w-auto display:flex w-auto h-auto pt-16 hidden lg:block">
            <img
              className="object-cover shadow-md shadow-gray-500 rounded-lg object-fill
                       transform transition duration-500 hover:scale-105 border-stone-700 border-double border-8"
              src={orc}
              alt="orc"
            />
          </div>
          <div
            className="text-[white] font-Rubik
              self-center h-auto lg:pl-16 w-full lg:w-1/2 mt-16 lg:mt-0 p-4"
          >
            <h1 className="justify-center text-3xl md:text-3xl lg:text-4xl font-bold text-lg w-3/4 text-[#d7b15b]">Orc Character Name Generator</h1>
            <p className="pt-6  text-base md:text-lg lg:text-lg"> Orcs, also called Orsimer are noted for their unshakable courage in war and their unflinching
                        endurance of hardships. Orcs have elven blood, but are usually considered to be both Beastfolk and Goblin-ken.
                        In the past, Orcs were widely feared and hated by the other nations and races of Tamriel and were seen as nothing more than uncivilized beasts, savage barbarians.
                        The Orcs are as civilized as any of the other races, having worked hard to be seen as actual people. They have slowly won acceptance in the Empire, in
                        particular for their distinguished service in the Emperor's Legions.</p>
          </div>
        </div>
        <CharacterNameGenerator maleNames={maleNames} femaleNames={femaleNames} lastNames={lastNames} />
      </div>
    );
  }

export default Orc;