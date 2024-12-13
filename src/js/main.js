import { getParkData, getParkInfoLinks, getInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import {introTemplate, mediaCardTemplate, footerTemplate} from "./templates.mjs";

// const parkData = getParkData();
const parkInfo = getParkInfoLinks();


async function innit() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    createMediaCard(links);
    setHeaderFooter(parkData);
    introText(parkData);
}
  

function introText(data){
    console.log(data);
    const intro = document.querySelector('.intro');
    const html = introTemplate(data);
    intro.innerHTML = html;
}

function createMediaCard(data){
    const mediaCards = document.querySelector('.info');
    const html = data.map(mediaCardTemplate);
    mediaCards.innerHTML = html.join('');
}



innit();