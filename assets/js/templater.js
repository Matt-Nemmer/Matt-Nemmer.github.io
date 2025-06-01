/* 
 Author: Matthew Nemmer
 Created: 2025-05-29
 Modified: 2025-05-29
 */

async function insertComponent( componentName ){
    const currentScript = document.currentScript;

    try {
        const res = await fetch(`assets/components/${componentName}.html`);
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const componentWrapper = doc.querySelector('template');
        const component = componentWrapper.content.getElementById(`${componentName}-template`);

        if(component) {
            const clonedChild = component.cloneNode(true);
            currentScript.parentNode.insertBefore(clonedChild, currentScript);
        } 
        else {
            console.warn(`Component #${componentName} is empty or invalid`);
        }
    } catch (err) {
        console.error('Failed to load component:', err);
    }
}

async function removeAllTemplateScripts(){
    // Select all <script> elements inside <body> with class "delete-me"
    const scriptsToDelete = document.body.querySelectorAll('script.delete-me');

    // Loop through and remove each one from the DOM
    scriptsToDelete.forEach(script => {
        script.remove();
    });
}

/*
window.addEventListener('DOMContentLoaded', () => {
    // Remove all templating scripts
    removeAllTemplateScripts();
});
*/