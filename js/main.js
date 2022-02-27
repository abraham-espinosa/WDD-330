/*Array with link assignments*/
const links = [{
    label: "Week 01",
    url: "W01/index.html"
},
{
    label: "Week 02",
    url: "W02/index.html"
},
{
    label: "Week 03",
    url: "W03/index.html"
},
{
    label: "Week 04",
    url: "W04/index.html"
},
{
    label: "Week 05",
    url: "W05/index.html"
},
{
    label: "Week 06",
    url: "W06/index.html"
},
{
    label: "Week 07",
    url: "W07/index.html"
},
{
    label: "Week 08",
    url: "W08/index.html"
}]

/*Get and display links from links*/
function display_links(){
    for (let i = 0; i < links.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.innerText = links[i].label;
        a.href = links[i].url;

        li.appendChild(a);

        document.querySelector('ol').appendChild(li);
    }
}

display_links();