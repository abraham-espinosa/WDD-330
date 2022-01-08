/*Array with link assignments*/
const links = [{
    label: "Week1 notes",
    url: "week1/index.html"
},
{
    label: "Week1 notes",
    url: "week1/index.html"
},
{
    label: "Week1 notes",
    url: "week1/index.html"
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