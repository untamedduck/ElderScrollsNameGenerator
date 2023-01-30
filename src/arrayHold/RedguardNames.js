const Malenames = [
    "Achel", "Ahtar", "Alesan", "Alonzo", "Alusaron", "Amir", "Amren", "Armand", "Ataf", "Athon", "Avidius", "Avik", "Azani", "Azzada", "Azzadal", "Azzan", "Baral", "Baurus", "Bodean", "Boldon", "Borissean", "Brenuin", "Camaron", "Camas", "Casimir", "Casnar", "Chark", "Chrelm", "Cirroc", "Cluson", "Coyle", "Curtis", "Cyrus", "Daracy", "Daron", "Delmar", "Demetrius", "Din", "Dinok", "Domalen", "Dorian", "Dortodd", "Dudley", "Endon", "Ennah", "Ennis", "Ernest", "Falion", "Farmin", "Fihada", "Firir", "Frink", "Gancolm", "Garry", "Glannison", "Gogan", "Gor", "Greklith", "Haekwon", "Haldyn", "Hasell", "Hickim", "Hillod", "Hinald", "Ian", "Ilden", "Iminda", "Isleif", "Isran", "Jaganvir", "Jair", "Jalbert", "Jart", "Jathlanie", "Jawanan", "Jeleen", "Jelin", "Jim", "Jine", "Jon", "Jonis", "Juncan", "K'avar", "Kalorter", "Karrod", "Kayd", "Kaye", "Kellen", "Kelvyn", "Kematu", "Kewan", "Khafiz", "Kinther", "Kithlan", "Kotaro", "Lakene", "Lanald", "Lathon", "Lesley", "Lhotun", "Lidebras", "Limark", "Mani", "Maramal", "Nachael", "Namasur", "Nannithon", "Nazeem", "Nazir", "Neville", "Nistacey", "Orinthal", "Orrin", "Owyn", "Penald", "Phintias", "Pranal", "Provlith", "Pyke", "Raccan", "Raig", "Razelan", "Relan", "Rellian", "Rhano", "Rinina", "Rissinia", "Roderick", "Ruslan", "Sader", "Sason", "Shadr", "Shamar", "Shelden", "Shenk", "Silasson", "Sorian", "Soscean", "Stanet", "Stargel", "Stenet", "Sterdecan", "Sticey", "Talan", "Talib", "Taran", "Thaik", "Thedret", "Therdon", "Torline", "Tralan", "Trasteve", "Trayvond", "Trithik", "Varnado", "Vhosek", "Vilamon", "Wallace", "Waylas", "Wayn", "Wilbur", "Willet", "Winson"

]
const femaleNames = [
    "Adara", "Ahlam", "Akorithi", "Alusannah", "Ancola", "Angelie", "Anora", "Anwen", "Ashanta", "Atmah", "Aubk-i", "Balan", "Braith", "Branwen", "Caminda", "Carmen", "Chalone", "Chanel", "Charvek-si", "Clesa", "Dahlia", "Dandsa", "Davina", "Dh'emka", "Dhola", "Domba", "Dulian", "Eletta", "Elone", "Ena", "Enjine", "Eriana", "Erla", "Ery", "Faleen", "Gwen", "Hussonia", "Isolde", "Iszara", "Jaline", "Jamie", "Jayri", "Jeanne", "Jearl", "Jolda", "Jonna", "Kanet", "Karlirah", "Kati", "Katie", "Kerah", "Kiara", "Kirginia", "Krisandra", "Laire", "Landa", "Lashana", "Lette", "Lu'ah", "Maelona", "Malexa", "Manicky", "Margonet", "Mariah", "Minerva", "Miniel", "Mirisa", "Monsey", "Nanine", "Neesha", "Neminda", "Niyya", "Oleta", "Pemenie", "Ramati", "Rasheda", "Rayya", "Relinda", "Rhiannon", "Rienna", "Rithleen", "Rochelle", "Rohssan", "Rona", "Saadia", "Saffir", "Saliah", "Salma", "Sayma", "Senyndie", "Seren", "Shafaye", "Shameer", "Shardie", "Shelley", "Sherina", "Sinia", "Siona", "Sudi", "Sulesa", "Tamika", "Tavia", "Tenville", "Tiela", "Tierra", "Todwendy", "Tonilia", "Trevaia", "Umana", "Whitka", "Yisra", "Zaria"

]

const altmerLastNames = [
   "Bridwell", "Northbridge", "K'Elmar", "Hawker", "Mirel", "Ruuz", "Aldwyr", "af-Ahmus", "af-Angilia", "af-Armin", "af-Ashora", "af-Azik", "af-Bazra", "af-Davood", "af-Dometri", "af-Dushana", "af-Ebdoh", "af-Ganet", "af-Ghada", "af-Guyeline", "af-Haba", "af-Hadajja", "af-Hafza", "af-Hazifah", "af-Hisham", "af-Islah", "af-Izla", "af-Jahi", "af-Kardyn", "af-Karra", "af-Katayoun", "af-Kimiya", "af-Mahala", "af-Mubdi", "af-Naifa", "af-Nazila", "af-Owlin", "af-Qerik", "af-Ramand", "af-Rasha", "af-Tasa", "af-Whyrdh", "al-Akir", "al-Antiphyllos", "al-Azif", "al-Belkarth", "al-Glessa", "al-Hallen", "al-Hallin", "al-Hallin's", "al-Hallins", "Al-Hareem", "al-Hllins", "al-Iskour", "Al-Masri", "al-Miran", "al-Morwha", "al-Myrkwasa", "al-Natedan", "al-Ojwambu", "al-Saran", "al-Tahud", "al-Tava", "Alielle", "at-Abbas", "at-Ajwan", "at-Amjad", "at-Baqar", "at-Bergama", "at-Dolmir", "at-Dorcolm", "at-Ebdoh", "at-Fada", "At-Fara", "at-Gamati", "at-Ganet", "at-Gar", "at-Ginal", "at-Glina", "at-Halma", "at-Hassef", "at-Hawraz", "at-Hollus", "at-Housel", "at-Jafra", "at-Jehat", "at-Kalan", "at-Karim", "at-Khorajah", "at-Makela", "at-Mardeen", "at-Marimah", "at-Morad", "at-Naruk", "at-Nazdar", "at-Nazim", "at-Ordzan", "at-Pawan", "at-Pykel", "at-Renazh", "at-Rusa", "at-Sadil", "at-Sal", "at-Salan", "at-Sentinel", "at-Shadal", "at-Tamina", "at-Wardiya", "at-Warhpal", "at-Werzhan", "at-Wildur", "at-Yashar", "Berri", "Cedmain", "Conele", "Derre", "Epinard", "Florelle", "Ghiardelli", "Hallin", "Jerine", "Lavergne", "Leki", "Lemaitre", "Longtemps", "Morel", "Nasir", "Rajida", "Reynaud", "Sesnit", "Shinji", "Stictal", "Taloet", "Tu'wha", "af-Jahannif", "af-Jamadin", "af-Nimr", "af-Ozalan", "at-Amil", "at-Areshu", "at-Ariya", "at-Aswals", "at-Elett", "at-Lehiel", "at-Phintos", "at-Ramdud", "at-Toura", "Hunding", "Sahan"
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