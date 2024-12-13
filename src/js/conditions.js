import {getParkData, getAlerts, getVisitorCenterData} from "./parkService.mjs";
import {alertTemplate, visitorCenterTemplate, activitiesTemplate} from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";




function setAlerts(alerts){
    const alertContainer = document.querySelector('.alert-list');
    alertContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertContainer.insertAdjacentHTML('beforeend', html.join(''));
}

function setVisitorCenters(visitorCenters){
    const vcContainer = document.querySelector('.vc-list');
    vcContainer.innerHTML = "";
    const html = visitorCenters.map(visitorCenterTemplate);
    vcContainer.insertAdjacentHTML('beforeend', html.join(''));
}

function setActivities(activities){
    const activityContainer = document.querySelector('.act-list');
    const html = activities.map(activitiesTemplate);
    activityContainer.innerHTML = html.join('')
}

async function innit() {
    const parkData = await getParkData();
    console.log(parkData);
    const alerts = await getAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    console.log(visitorCenters);
    console.log(alerts);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
} 

innit();