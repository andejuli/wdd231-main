import { footerTemplate } from "./templates.mjs";
import enableNavigation from "./navigation.mjs";

function setHeaderInfo(data){
    // disclaimer park name and link
    document.querySelector('title').innerHTML = data.fullName;
    let disclaimer = document.querySelector('.disclaimer a');
    disclaimer.innerHTML = data.fullName;
    disclaimer.href = data.url;

    // site title
    document.querySelector('.hero-banner_title').innerHTML = data.name;

    // hero banner subtitle
    document.querySelector('.hero-banner_subtitle span:nth-of-type(1)').innerHTML = data.designation;
    document.querySelector('.hero-banner_subtitle span:nth-of-type(2)').innerHTML = data.states;

    // hero banner image and link
    let heroBannerImg =document.querySelector('.hero-banner img')
    heroBannerImg.src = data.images[0].url;
    heroBannerImg.alt = data.images[0].altText;
}

function setFooterInfo(data){
    const footer = document.querySelector('#park-footer');
    footer.innerHTML = footerTemplate(data);
}

function setHeaderFooter(data){
    setHeaderInfo(data);
    setFooterInfo(data);
    enableNavigation();
}

export { setHeaderFooter };