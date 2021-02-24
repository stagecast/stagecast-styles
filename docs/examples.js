feather.replace();

ready(event => {
  addSvgBackgroundToForm();
  setIntermediateCheckboxes();
})

function setIntermediateCheckboxes() {
  const checkbox = document.querySelector('.custom-control-input[indeterminate]');
  checkbox.indeterminate = true;
}
function addSvgBackgroundToForm() {
  const iconPrependList = document.querySelectorAll('.icon-prepend');
  for (let index = 0; index < iconPrependList.length; index++) {
    const element = iconPrependList[index];
    const icon = element.dataset.icon;
    const svg = feather.icons[icon].toSvg({'stroke-width': 1.5, color: 'rgba(255,255,255,0.7)'})
    const escapeSvg = svg.replace(/</g, '%3c')
      .replace(/>/g, "%3e")
      .replace(/#/g, "%23")
      .replace(/"/g, "\'")
      .replace(/\)/g, "%29")
      .replace(/\(/g, "%28");
    element.style.backgroundImage = `url("data:image/svg+xml,${escapeSvg}")`;
  }
}
function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction(event)
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}
