const generateLink = () => {
    let inputName = document.getElementById('linkName');
    let inputURL = document.getElementById('URL');


    let link = document.createElement('a');

    link.href = inputURL.value;
    link.target = '_blank';
    link.textContent = inputName.value;

    let container = document.getElementById('showURL');
    container.appendChild(link);
    
    localStorage('link');
}