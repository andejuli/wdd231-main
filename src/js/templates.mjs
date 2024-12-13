function introTemplate(info) {
    return `
    <div class="intro">
      <h1>${info.fullName}</h1>
      <p>${info.description}</p>
    </div>`;
}
function mediaCardTemplate(info) {
    return `
    <div class="media-card">
        <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card_img">
        <h3 class="media-card_title">${info.name}</h3>
        </a>
        <p>${info.description}</p>
     </div>`;
}


function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}
function footerTemplate(info) {
    const voice = getVoicePhone(info.contacts.phoneNumbers);
  
    return `
    <section class="contact">
    <h3>Contact Info</h3>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>
  <img src="images/topo_pattern.png" alt="pattern" class="pattern">`;
}


export {introTemplate, mediaCardTemplate, footerTemplate };

export function alertTemplate(alert){
  let alertType = "";

  switch(alert.category){
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }

  return `
  <li class="alert">
<svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use></svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div>
  </li>
  `
}

export function visitorCenterTemplate(visitorCenter) {
  return `
  <li class="visitor-center">
    <h3><a href="visitor.html?id=${visitorCenter.id}}">${visitorCenter.name}</a></h3>
    <p>${visitorCenter.description}</p>
    <p>${visitorCenter.directionsInfo}</p>
  </li>
  `
}

export function activitiesTemplate(activity){
  return `
  <li class="activity">
    <p>${activity.name}</p>
  </li>
  `
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
          <img src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}
export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  console.log(data.addresses);
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}
export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}
export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
export function vcContactsTemplate(data) {
  return `<section class="vc-contact_email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">${data.emailAddresses[0].emailAddress}</a>
          </section>
          <section class="vc-contact_phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}
export function iconTemplate(iconId) { 

  return `<svg class="icon" role="presentation" focusable="false"> 

            <use 

              xmlns:xlink="http://www.w3.org/1999/xlink" 

              xlink:href="/images/sprite.symbol.svg#${iconId}" 

            ></use> 

          </svg>`; 

} 

 

export function vcDetailsTemplate(elementId, summaryText, iconId, content) { 

  return `<details name="vc-details" id="${elementId}"> 

          <summary> 

            ${iconTemplate(iconId)} 

            ${summaryText} 

          </summary> 

          ${content} 

        </details>`; 

} 