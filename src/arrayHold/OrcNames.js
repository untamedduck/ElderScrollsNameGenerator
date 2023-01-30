const Malenames = [
    "Agronak", "Atulg", "Azuk", "Bagamul", "Bakh", "Balagog", "Baronk", "Bashag", "Bashnag", "Bat", "Bazgulub", "Bazur", "Bogakh", "Bogrum", "Bologra", "Borkul", "Borug", "Both", "Brag", "Brokil", "Brugo", "Bugak", "Bugdul", "Bugharz", "Bugrash", "Bugrol", "Bumbub", "Buramog", "Burguk", "Burul", "Burz", "Dubok", "Dul", "Dular", "Dulfish", "Dulphumph", "Duluk", "Duma", "Dumag", "Dumbuk", "Dumburz", "Dur", "Durak", "Durbul", "Durgash", "Durz", "Durzol", "Durzub", "Durzum", "Dushnamub", "Gadba", "Garothmuk", "Garzonk", "Gashna", "Gat", "Gaturn", "Ghamborz", "Ghamonk", "Ghamorz", "Ghola", "Ghoragdush", "Ghorbash", "Ghorlorz", "Ghorub", "Ghunzul", "Glush", "Gogron", "Gorgo", "Graklak", "Graman", "Grat", "Grogmar", "Grommok", "Grushnag", "Gruzgob", "Guarg", "Gul", "Gularzob", "Gurak", "Hanz", "Khadba", "Khagra", "Kharag", "Khargol", "Koffutto", "Krognak", "Kurdan", "Kurz", "Larak", "Largakh", "Lob", "Lorbumol", "Lorzub", "Lugdum", "Lugrub", "Lum", "Lumdum", "Lurbuk", "Lurog", "Luronk", "Magra", "Magub", "Mahk", "Makhel", "Maknok", "Malkus", "Mash", "Matuk", "Mauhul", "Mauhulakh", "Mazorn", "Mol", "Morbash", "Moth", "Mug", "Mugdul", "Muk", "Mul", "Mulush", "Murag", "Murkub", "Murzol", "Muzgonk", "Nag", "Nagrub", "Nar", "Nash", "Oglub", "Ogol", "Ogrul", "Ogrumbu", "Olfin", "Olumba", "Olur", "Orakh", "Orok", "Rogdul", "Rugdumph", "Shagol", "Shagrol", "Shakh", "Shamar", "Shamob", "Shargam", "Sharkub", "Shat", "Shazgob", "Shobob", "Shulong", "Shum", "Shura", "Shurkul", "Shuzug", "Snaglak", "Snakha", "Snat", "Ugdumph", "Ughash", "Ulag", "Ulam", "Ulmug", "Umug", "Umurn", "Urag", "Uram", "Urbul", "Urim", "Urul", "Urzog", "Ushamph", "Ushat", "Ushnar", "Uzul", "Yadba", "Yagak", "Yak", "Yam", "Yamarz", "Yambagorn", "Yambul", "Yar", "Yargol", "Yashnarz", "Yatur"

]
const femaleNames = [
   "Agrob", "Arob", "Atub", "Badbog", "Bagrak", "Bashuk", "Batul", "Batum", "Bogdub", "Bolar", "Bor", "Borba", "Borgakh", "Bugdurash", "Bula", "Bulak", "Bulfim", "Bum", "Bumph", "Burub", "Burzob", "Dulug", "Dura", "Durgat", "Durz", "Garakh", "Gashnakh", "Ghak", "Gharol", "Ghob", "Ghorza", "Glasha", "Glob", "Gluronk", "Gonk", "Grat", "Grazob", "Gul", "Gulfim", "Homraz", "Kharzug", "Lagakh", "Lambug", "Lash", "Lazgar", "Mazoga", "Mog", "Mogak", "Mogdurz", "Mor", "Morn", "Murbul", "Murob", "Murzush", "Nargol", "Oghash", "Orag", "Orbul", "Ragash", "Rogbut", "Rogmesh", "Rolfish", "Rulfim", "Shadbak", "Shagar", "Shagdub", "Sharamph", "Sharn", "Sharog", "Shel", "Shelur", "Shuftharz", "Sloomalah", "Snak", "Ugak", "Ugor", "Uloth", "Ulumpha", "Umar", "Umog", "Urog", "Urzoga", "Urzoth", "Urzul", "Ushug", "Yag", "Yatul", "Yazgash"

]

const altmerLastNames = [
   "Agadbu", "Agamph", "Aglakh", "Agum", "Atumph", "Azorku", "Badbu", "Bagrat", "Bagul", "Bamog", "Bar", "Barak", "Bargamph", "Bargol", "Bashnag", "Bat", "Batul", "Bharg", "Boga", "Bogamakh", "Bogharz", "Bogla", "Boglar", "Bogrol", "Boguk", "Bol", "Bolak", "Bolmog", "Bonk", "Borbog", "Borbul", "Brok", "Bug", "Bugarn", "Buglump", "Bulag", "Bularz", "Bulfish", "Bumph", "Bura", "Burbog", "Burbug", "Burish", "Burol", "Burzag", "Buzga", "Cromgog", "Dragol", "Dugul", "Dul", "Dula", "Dulob", "Dumul", "Dumulg", "Durga", "Durog", "Durug", "Dush", "Dushnikh", "Galash", "Gamorn", "Gar", "Gash", "Gashel", "Gat", "Gatuk", "Gharz", "Ghash", "Ghasharzol", "Gholfim", "Gholob", "Ghorak", "Ghoth", "Glorzuf", "Gluk", "Glurkub", "Glurzog", "Golpok", "Gonk", "Gortwog", "Gorzog", "Grambak", "Grulam", "Gulfim", "Gurakh", "Gurub", "Hubrag", "Kashug", "Khagdum", "Khar", "Kharbush", "Kharz", "Khash", "Khashnar", "Khatub", "Khazor", "Lag", "Lagdub", "Largum", "Lazgarn", "Loghash", "Logob", "Logrob", "Lorga", "Lumbuk", "Lumob", "Lurkul", "Lurn", "Luzgan", "Magar", "Magrish", "Magul", "Malog", "Mar", "Marob", "Mashnar", "Mogduk", "Moghakh", "Morgrump", "Mughol", "Muk", "Mulakh", "Murgak", "Murgol", "Murug", "Murz", "Muzgob", "Muzgol", "Muzgub", "Muzgur", "Naybek", "Nolob", "Ogar", "Ogdub", "Ogdum", "Olor", "Olurba", "Orbuma", "Orkul", "Orkulg", "Rimph", "Rugdush", "Rugob", "Rush", "Rushub", "Shadborgob", "Shadbuk", "Shagdub", "Shagdulg", "Shagk", "Shagrak", "Shagramph", "Shak", "Sham", "Shamub", "Sharbag", "Sharga", "Shargakh", "Sharob", "Sharolg", "Shat", "Shatub", "Shatur", "Shazog", "Shub", "Shug", "Shugarz", "Shugham", "Shula", "Shulor", "Shumba", "Shura", "Shurkul", "Shuzgub", "Skandar", "Snagarz", "Snagdu", "Ufthamph", "Uftharz", "Ugdub", "Ugruma", "Ular", "Ulfimph", "Urgak", "Urgash", "Ushar", "Ushug", "Ushul", "Uzgash", "Uzgurn", "Uzug", "Uzuk", "Yagarz", "Yak", "Yargul", "Yarug", "Yarzol"

]





export const getRandomF = () => {
    let names = [];
    for(let i = 0; i < 5; i++) {
        names.push(femaleNames[Math.floor(Math.random()*femaleNames.length)] + " "+ altmerLastNames[Math.floor(Math.random()*altmerLastNames.length)]);
    }
    return names;
}




export const getRandom = () => {
    let names = [];
    for(let i = 0; i < 5; i++) {
        names.push(Malenames[Math.floor(Math.random()*Malenames.length)] + " "+ altmerLastNames[Math.floor(Math.random()*altmerLastNames.length)]);

    }
    return names
}