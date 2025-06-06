/*
 Author: Matthew Nemmer
 Created: 2025-05-29
 Modified: 2025-06-05
 */

// Global vars and constants
const root = document.documentElement;

let currentTheme = "blue";
const themes = {
    blue: {
        color: "#1918D8",
        dark: "#009",
        light: "#B8D2FF",
        navFilter: "invert(80%) sepia(3%) saturate(5574%) hue-rotate(187deg) brightness(99%) contrast(100%)",
        socialFilter: "invert(66%) sepia(3%) saturate(5574%) hue-rotate(187deg) brightness(99%) contrast(100%)",
        bg: "../img/bg/bg-circuitry-blue.png"
    },
    green: {
        color: "#0FC80F",
        dark: "#080",
        light: "#80FF98",
        navFilter: "invert(75%) sepia(69%) saturate(326%) hue-rotate(69deg) brightness(103%) contrast(101%)",
        socialFilter: "invert(65%) sepia(69%) saturate(326%) hue-rotate(69deg) brightness(103%) contrast(101%)",
        bg: "../img/bg/bg-circuitry-green.png"
    },
    teal: {
        color: "#15A5A5",
        dark: "#066",
        light: "#80FFFF",
        navFilter: "invert(93%) sepia(26%) saturate(1930%) hue-rotate(149deg) brightness(101%) contrast(104%)",
        socialFilter: "invert(85%) sepia(26%) saturate(1930%) hue-rotate(149deg) brightness(101%) contrast(104%)",
        bg: "../img/bg/bg-circuitry-teal.png"
    },
    purple: {
        color: "#A716D5",
        dark: "#507",
        light: "#BCA0FF",
        navFilter: "invert(65%) sepia(37%) saturate(1399%) hue-rotate(209deg) brightness(104%) contrast(101%)",
        socialFilter: "invert(58%) sepia(37%) saturate(1399%) hue-rotate(209deg) brightness(104%) contrast(101%)",
        bg: "../img/bg/bg-circuitry-purple.png"
    },
    red: {
        color: "#D51615",
        dark: "#800",
        light: "#FF8768",
        navFilter: "invert(77%) sepia(26%) saturate(4386%) hue-rotate(313deg) brightness(101%) contrast(101%)",
        socialFilter: "invert(21%) sepia(95%) saturate(3285%) hue-rotate(352deg) brightness(84%) contrast(99%)",
        bg: "../img/bg/bg-circuitry-red.png"
    },
    yellow: {
        color: "#C5B505",
        dark: "#B0A004",
        light: "#F0F080",
        navFilter: "invert(86%) sepia(45%) saturate(421%) hue-rotate(7deg) brightness(104%) contrast(91%)",
        socialFilter: "invert(75%) sepia(26%) saturate(2402%) hue-rotate(11deg) brightness(95%) contrast(93%)",
        bg: "../img/bg/bg-circuitry-yellow.png"
    },
    orange: {
        color: "#F0A015",
        dark: "#B60",
        light: "#FFAA70",
        navFilter: "invert(69%) sepia(38%) saturate(627%) hue-rotate(333deg) brightness(101%) contrast(102%)",
        socialFilter: "invert(80%) sepia(26%) saturate(7208%) hue-rotate(356deg) brightness(101%) contrast(88%)",
        bg: "../img/bg/bg-circuitry-orange.png"
    },
    brown: {
        color: "#805515",
        dark: "#3A2505",
        light: "#A08A50",
        navFilter: "invert(57%) sepia(12%) saturate(1337%) hue-rotate(6deg) brightness(94%) contrast(90%)",
        socialFilter: "invert(32%) sepia(86%) saturate(421%) hue-rotate(357deg) brightness(90%) contrast(95%)",
        bg: "../img/bg/bg-circuitry-brown.png"
    },
    black: {
        color: "#686868",
        dark: "#444",
        light: "#E6E6E6",
        navFilter: "invert(100%) sepia(0%) saturate(5932%) hue-rotate(317deg) brightness(116%) contrast(82%)",
        socialFilter: "invert(68%) sepia(0%) saturate(16%) hue-rotate(268deg) brightness(78%) contrast(90%)",
        bg: "../img/bg/bg-circuitry-black.png"
    }
};





 // Cookies utilities
function getCookie(name){
    var regExp = new RegExp( name + "=([^;]+)" );
    var value = regExp.exec( document.cookie );
    return ( value != null ) ? unescape( value[1] ) : null;
}

function setCookie( name, value, daysUntilExpiry ){
    const today = new Date();
    const expiry = new Date( today.getTime() + daysUntilExpiry * 24 * 3600 * 1000 );

    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function putCookies(){
    const settingsForm = document.getElementById('settings-form');

    setCookie( "darkMode", settingsForm.elements['darkMode'].value, 30 ); // set cookies to expire in 30 days
    setCookie( "fontType", settingsForm.elements['fontType'].value, 30 );
    setCookie( "primaryColor", settingsForm.elements['primaryColor'].value, 30 );
    return true;
}





// Applying settings
function randInt( min, max ){
    return Math.floor( Math.random() * (max - min) ) + min;
}

function applySettings(){
    // Apply dark-mode setting
    const darkModeCookie = getCookie("darkMode");
    
    if (darkModeCookie != null){
        if (darkModeCookie == "darkMode"){
            root.style.setProperty('--bg-light', "#101010");
            root.style.setProperty('--bs-light-rgb', "16,16,16");
            root.style.setProperty('--bs-body-color', "#fff");
            root.style.setProperty('--social-logo-filter', "invert(100%) sepia(23%) saturate(1173%) hue-rotate(330deg) brightness(157%) contrast(101%)");
            root.style.setProperty('--dark-mode-invert-filter', "invert(100%)");
        }
        else{
            root.style.setProperty('--bg-light', "#ededed");
            root.style.setProperty('--bs-light-rgb', "237,237,237");
            root.style.setProperty('--bs-body-color', "#000");
            root.style.setProperty('--social-logo-filter', "invert(0%) sepia(23%) saturate(1173%) hue-rotate(330deg) brightness(157%) contrast(101%)");
            root.style.setProperty('--dark-mode-invert-filter', "invert(0%)");
        }
    }

    // Apply font setting
    const fontTypeCookie = getCookie("fontType");

    if (fontTypeCookie != null){
        if (fontTypeCookie == "serif"){
            root.style.setProperty('--bs-body-font-family',
                    getComputedStyle(root)
                    .getPropertyValue('--bs-font-serif'));
        } 
        else if (fontTypeCookie == "sansSerif"){
            root.style.setProperty('--bs-body-font-family',
                    getComputedStyle(root)
                    .getPropertyValue('--bs-font-sans-serif'));
        } 
        else if (fontTypeCookie == "monospace"){
            root.style.setProperty('--bs-body-font-family',
                    getComputedStyle(root)
                    .getPropertyValue('--bs-font-monospace'));
        }
    }

    // Apply color theme setting
    const primaryColorCookie = getCookie("primaryColor");

        // Determine which color to apply
    if( primaryColorCookie == null || primaryColorCookie == "random" )
    {
        const themeNames = Object.keys(themes).filter(name => name !== currentTheme);
        currentTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
    }
    else{
        currentTheme = primaryColorCookie;
    }

        // Apply the selected color
    const theme = themes[currentTheme];
    if (theme) {
        root.style.setProperty('--primary-color', theme.color);
        root.style.setProperty('--primary-color-dark', theme.dark);
        root.style.setProperty('--primary-color-light', theme.light);
        root.style.setProperty('--nav-tab-hover-filter', theme.navFilter);
        root.style.setProperty('--social-logo-hover-filter', theme.socialFilter);
        changeBackground(theme.bg);
    }
}

function changeBackground( newImageUrl, transitionDuration = 750) {
    const bgLayer = document.querySelector('.bg-layer');
    if (!bgLayer || !newImageUrl) return;

    bgLayer.style.opacity = '0';

    setTimeout(() => {
        bgLayer.style.setProperty('--bg-container-img-url', `url("${newImageUrl}")`);
        bgLayer.style.opacity = '1';
    }, transitionDuration / 2);
}





// Settings form
function updateSettingsForm(){
    let currentValuesString = "<strong>Current Values:</strong><br>";

    // Set dark-mode selection
    const darkModeCookie = getCookie("darkMode");

    currentValuesString += '<div class="ms-3">';
    if (darkModeCookie == null || darkModeCookie == "regularMode"){
        document.querySelector('input[value="regularMode"]').checked = true;
        currentValuesString += "Dark mode: OFF";
    } 
    else if (darkModeCookie == "darkMode"){
        document.querySelector('input[value="darkMode"]').checked = true;
        currentValuesString += "Dark mode: ON";
    }
    currentValuesString += "</div>";

    // Set font-type selection
    const fontTypeCookie = getCookie("fontType");

    currentValuesString += '<div class="ms-3">';
    if (fontTypeCookie == null || fontTypeCookie == "sansSerif"){
        document.querySelector('input[value="sansSerif"]').checked = true;
        currentValuesString += "Font type: Sans-Serif";
    } 
    else if (fontTypeCookie == "serif"){
        document.querySelector('input[value="serif"]').checked = true;
        currentValuesString += "Font type: Serif";
    } 
    else if (fontTypeCookie == "monospace"){
        document.querySelector('input[value="monospace"]').checked = true;
        currentValuesString += "Font type: Monospace";
    }
    currentValuesString += "</div>";

    // Set color selection
    const validColors = ["random", ...Object.keys(themes)];

    let primaryColorCookie = getCookie("primaryColor");
    if (!validColors.includes(primaryColorCookie)) {
        primaryColorCookie = "random";
    }

    currentValuesString += '<div class="ms-3">';
    document.getElementById('primaryColor').value = primaryColorCookie;
    currentValuesString += `Primary color: ${capitalize(primaryColorCookie)}`;
    currentValuesString += "</div>";

    // Update current-value string
    document.getElementById("current-values").innerHTML = currentValuesString;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function initializeSettingsForm(){
    // Set form inputs to appropriate values
    updateSettingsForm();
                                
    // Event listeners for form elements
    const settingsForm = document.getElementById('settings-form');
    settingsForm.addEventListener('change', (event) => {
        if (event.target.matches('input[type="radio"], select')) {
            putCookies();
            applySettings();
            updateSettingsForm();
        }
    });               
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', (event) => {
        settingsForm.reset();
        putCookies();
        applySettings();
        updateSettingsForm();
    });
}





// Apply site preferences
applySettings();