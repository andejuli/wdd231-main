import {setHeaderFooter} from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { 
    vcTitleTemplate, iconTemplate, 
    vcInfoTemplate,
    listTemplate,
    vcAddressesListTemplate,
    vcAmenityTemplate,
    vcDirectionsTemplate,
    vcContactsTemplate,
    vcImageTemplate,
    vcDetailsTemplate
} from "./templates.mjs";


function getParam(param){
    console.log(param);
    const paramString = location.search;
    const params = new URLSearchParams(paramString);
    return params.get(param);
}

function setTitle(data){
    const title = document.querySelector('.vc-name');
    const html = vcTitleTemplate(data);
    // title.insertAdjacentHTML('beforeend', html.join(''));
    title.innerHTML = html;
}

function setInfo(data){
    const info = document.querySelector('.vc-info');
    const html = vcInfoTemplate(data);
    info.innerHTML = html;
}

function setAddresses(data){
    console.log(data);
    const addresses = document.querySelector('.vc-addresses');
    const html = vcAddressesListTemplate(data.addresses);
    addresses.innerHTML = html;
}

function setAmenities(data){
    const amenities = document.querySelector('.vc-amenities');
    const html = vcAmenityTemplate(data);
    amenities.innerHTML = html;
}

function setDirections(data){
    const directions = document.querySelector('.vc-directions');
    const html = vcDirectionsTemplate(data);
    directions.innerHTML = html;
}

function setContacts(data){
    const directions = document.querySelector('.vc-contacts');
    const html = vcContactsTemplate(data);
    directions.innerHTML = html;
}

function setImages(data){
    const images = document.querySelector('.vc-images');
    const html = vcImageTemplate(data);
    images.innerHTML = html;
}

function setDetails(data){
    const details = document.querySelector('.vc-details');
    const html = vcDetailsTemplate(data);
    details.innerHTML = html;
}

async function innit(){
    const parkData = await getParkData();
    console.log(parkData);
    setHeaderFooter(parkData);
    const visitorCenter = await getParkVisitorCenterDetails(getParam("id"));
    const id = getParam("id");
    console.log(visitorCenter);
    const centerDetails = await getParkVisitorCenterDetails(id);
    console.log(centerDetails);
    setTitle(centerDetails);
    setInfo(centerDetails);
    setAddresses(centerDetails);
    setAmenities(centerDetails);
    setDirections(centerDetails);
    setContacts(centerDetails);
    setImages(centerDetails);
    setDetails(centerDetails);
}

innit()