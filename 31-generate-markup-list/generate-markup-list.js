
// Generate Markup list

const links = [
    {name:'Facebook', url:'https://facebook.com'},
    {name:'YouTube', url:'https://youtube.com'},
    {name:'Instagram', url:'https://instagram.com'},
    {name:'Linkedin', url:'https://linkedin.com'},
    {name:'Twitter', url:'https://twitter.com'},
];

let template = `<ul>{{links}}</ul>`;

const linkList = links.reduce((acc, cur) => {

    acc += `<li><a href="${cur.url}" target="_blank" >${cur.name}</a></li>`;
    return acc;

}, '');
 
template = template.replace('{{links}}', linkList);
document.getElementById('list-container').innerHTML = template;
 

