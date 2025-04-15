// Contact list by group

const contacts = [
  { name: "Austin Abel", phone: "555-0136", email: "austin.abel@example.com" },
  {
    name: "Faith Franklin",
    phone: "555-0119",
    email: "faith.franklin@example.com",
  },
  {
    name: "Cecilia Chase",
    phone: "555-0137",
    email: "cecilia.chase@example.com",
  },
  { name: "Evan Ellis", phone: "555-0114", email: "evan.ellis@example.com" },
  {
    name: "Xander Xavier",
    phone: "555-0126",
    email: "xander.xavier@example.com",
  },
  {
    name: "Samantha Sanders",
    phone: "555-0123",
    email: "samantha.sanders@example.com",
  },
  { name: "Xavier Xeno", phone: "555-0129", email: "xavier.xeno@example.com" },
  { name: "Yahir Yost", phone: "555-0134", email: "yahir.yost@example.com" },
  {
    name: "Fiona Fields",
    phone: "555-0117",
    email: "fiona.fields@example.com",
  },
  { name: "Yusuf York", phone: "555-0132", email: "yusuf.york@example.com" },
  {
    name: "Freddie Flynn",
    phone: "555-0118",
    email: "freddie.flynn@example.com",
  },
  {
    name: "Cameron Clark",
    phone: "555-0108",
    email: "cameron.clark@example.com",
  },
  {
    name: "Ximena Xiong",
    phone: "555-0128",
    email: "ximena.xiong@example.com",
  },
  {
    name: "Amber Austin",
    phone: "555-0105",
    email: "amber.austin@example.com",
  },
  {
    name: "Elena Emerson",
    phone: "555-0115",
    email: "elena.emerson@example.com",
  },
  {
    name: "Chris Carter",
    phone: "555-0107",
    email: "chris.carter@example.com",
  },
  {
    name: "Esther Ewing",
    phone: "555-0138",
    email: "esther.ewing@example.com",
  },
  { name: "Alice Adams", phone: "555-0101", email: "alice.adams@example.com" },
  {
    name: "Cynthia Cole",
    phone: "555-0109",
    email: "cynthia.cole@example.com",
  },
  {
    name: "Stella Simmons",
    phone: "555-0125",
    email: "stella.simmons@example.com",
  },
  {
    name: "Felix Frazier",
    phone: "555-0120",
    email: "felix.frazier@example.com",
  },
  {
    name: "Ethan Erickson",
    phone: "555-0112",
    email: "ethan.erickson@example.com",
  },
  { name: "Yesenia Yu", phone: "555-0135", email: "yesenia.yu@example.com" },
  { name: "Emily Evans", phone: "555-0113", email: "emily.evans@example.com" },
  {
    name: "Andrew Allen",
    phone: "555-0102",
    email: "andrew.allen@example.com",
  },
  {
    name: "Sophia Smith",
    phone: "555-0121",
    email: "sophia.smith@example.com",
  },
  {
    name: "Sylvia Swanson",
    phone: "555-0140",
    email: "sylvia.swanson@example.com",
  },
  {
    name: "Frank Foster",
    phone: "555-0116",
    email: "frank.foster@example.com",
  },
  {
    name: "Steven Stone",
    phone: "555-0124",
    email: "steven.stone@example.com",
  },
  {
    name: "Yvonne Yates",
    phone: "555-0133",
    email: "yvonne.yates@example.com",
  },
  { name: "Yara Young", phone: "555-0131", email: "yara.young@example.com" },
  {
    name: "Charlie Craig",
    phone: "555-0110",
    email: "charlie.craig@example.com",
  },
  { name: "Ethan Ellis", phone: "555-0114", email: "ethan.ellis@example.com" },
  {
    name: "Aaron Archer",
    phone: "555-0104",
    email: "aaron.archer@example.com",
  },
  {
    name: "Stella Simmons",
    phone: "555-0125",
    email: "stella.simmons@example.com",
  },
  { name: "Xyla Xane", phone: "555-0130", email: "xyla.xane@example.com" },
  {
    name: "Cathy Cooper",
    phone: "555-0106",
    email: "cathy.cooper@example.com",
  },
  {
    name: "Samuel Scott",
    phone: "555-0122",
    email: "samuel.scott@example.com",
  },
  { name: "Ava Avery", phone: "555-0103", email: "ava.avery@example.com" },
  {
    name: "Fernando Ford",
    phone: "555-0139",
    email: "fernando.ford@example.com",
  },
];


// sort contacts array of objects based on object name 
contacts.sort((a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
});

// console.log(contacts);



