
/*
 Author: Matthew Nemmer
 Created: 2022-03-15
 Modified: 2022-09-28
 */


let root = document.documentElement;


function applySettings()
{
    var darkModeCookie = getCookie("darkMode");
    var fontTypeCookie = getCookie("fontType");
    var primaryColorCookie = getCookie("primaryColor");

    if (fontTypeCookie != null)
    {
        if (fontTypeCookie == "serif")
        {
            root.style.setProperty('--bs-body-font-family',
                    getComputedStyle(document.documentElement)
                    .getPropertyValue('--bs-font-serif'));
        } else if (fontTypeCookie == "sansSerif")
        {
            root.style.setProperty('--bs-body-font-family',
                    getComputedStyle(document.documentElement)
                    .getPropertyValue('--bs-font-sans-serif'));
        } else if (fontTypeCookie == "monospace")
        {
            root.style.setProperty('--bs-body-font-family',
                    getComputedStyle(document.documentElement)
                    .getPropertyValue('--bs-font-monospace'));
        }
    }

    if( primaryColorCookie == null || primaryColorCookie == "random" )
    {
        numOfColors = 9;
        currentColorCode = randInt( 0, numOfColors );

        switch( currentColorCode )
        {
            case 0:
                primaryColorCookie = "blue";
                break;
            case 1:
                primaryColorCookie = "green";
                break;
            case 2:
                primaryColorCookie = "teal";
                break;
            case 3:
                primaryColorCookie = "purple";
                break;
            case 4:
                primaryColorCookie = "red";
                break;
            case 5:
                primaryColorCookie = "orange";
                break;
            case 6:
                primaryColorCookie = "yellow";
                break;
            case 7:
                primaryColorCookie = "brown";
                break;
            case 8:
                primaryColorCookie = "black";
                break;
            default:
                primaryColorCookie = "blue";
        }
    }

    if (primaryColorCookie == "blue")
    {
        root.style.setProperty('--primary-color', "#1918D8");
        root.style.setProperty('--primary-color-dark', "#009");
        root.style.setProperty('--primary-color-light', "#B8D2FF");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-blue.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(80%) sepia(3%) saturate(5574%) hue-rotate(187deg) brightness(99%) contrast(100%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(66%) sepia(3%) saturate(5574%) hue-rotate(187deg) brightness(99%) contrast(100%)');
    }
    else if (primaryColorCookie == "green")
    {
        root.style.setProperty('--primary-color', "#0FC80F");
        root.style.setProperty('--primary-color-dark', "#080");
        root.style.setProperty('--primary-color-light', "#80FF98");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-green.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(75%) sepia(69%) saturate(326%) hue-rotate(69deg) brightness(103%) contrast(101%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(65%) sepia(69%) saturate(326%) hue-rotate(69deg) brightness(103%) contrast(101%)');
    }
    else if (primaryColorCookie == "teal")
    {
        root.style.setProperty('--primary-color', "#15A5A5");
        root.style.setProperty('--primary-color-dark', "#066");
        root.style.setProperty('--primary-color-light', "#80FFFF");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-teal.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(93%) sepia(26%) saturate(1930%) hue-rotate(149deg) brightness(101%) contrast(104%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(85%) sepia(26%) saturate(1930%) hue-rotate(149deg) brightness(101%) contrast(104%)');
    }
    else if (primaryColorCookie == "purple")
    {
        root.style.setProperty('--primary-color', "#A716D5");
        root.style.setProperty('--primary-color-dark', "#507");
        root.style.setProperty('--primary-color-light', "#BCA0FF");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-purple.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(65%) sepia(37%) saturate(1399%) hue-rotate(209deg) brightness(104%) contrast(101%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(58%) sepia(37%) saturate(1399%) hue-rotate(209deg) brightness(104%) contrast(101%)');
    }
    else if (primaryColorCookie == "red")
    {
        root.style.setProperty('--primary-color', "#D51615");
        root.style.setProperty('--primary-color-dark', "#800");
        root.style.setProperty('--primary-color-light', "#FF8768");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-red.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(77%) sepia(26%) saturate(4386%) hue-rotate(313deg) brightness(101%) contrast(101%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(21%) sepia(95%) saturate(3285%) hue-rotate(352deg) brightness(84%) contrast(99%)');
    }
    else if (primaryColorCookie == "yellow")
    {
        root.style.setProperty('--primary-color', "#C5B505");
        root.style.setProperty('--primary-color-dark', "#B0A004");
        root.style.setProperty('--primary-color-light', "#F0F080");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-yellow.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(86%) sepia(45%) saturate(421%) hue-rotate(7deg) brightness(104%) contrast(91%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(75%) sepia(26%) saturate(2402%) hue-rotate(11deg) brightness(95%) contrast(93%)');
    }
    else if (primaryColorCookie == "orange")
    {
        root.style.setProperty('--primary-color', "#F0A015");
        root.style.setProperty('--primary-color-dark', "#B60");
        root.style.setProperty('--primary-color-light', "#FFAA70");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-orange.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(69%) sepia(38%) saturate(627%) hue-rotate(333deg) brightness(101%) contrast(102%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(80%) sepia(26%) saturate(7208%) hue-rotate(356deg) brightness(101%) contrast(88%)');
    }
    else if (primaryColorCookie == "brown")
    {
        root.style.setProperty('--primary-color', "#805515");
        root.style.setProperty('--primary-color-dark', "#3A2505");
        root.style.setProperty('--primary-color-light', "#A08A50");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-brown.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(57%) sepia(12%) saturate(1337%) hue-rotate(6deg) brightness(94%) contrast(90%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(32%) sepia(86%) saturate(421%) hue-rotate(357deg) brightness(90%) contrast(95%)');
    }
    else if(primaryColorCookie == "black")
    {
        root.style.setProperty('--primary-color', "#686868");
        root.style.setProperty('--primary-color-dark', "#444");
        root.style.setProperty('--primary-color-light', "#E6E6E6");
        root.style.setProperty('--bg-circuitry-img-url', 'url("../img/bg/bg-circuitry-black.png")');
        root.style.setProperty('--nav-tab-hover-filter', 'invert(100%) sepia(0%) saturate(5932%) hue-rotate(317deg) brightness(116%) contrast(82%)');
        root.style.setProperty('--social-logo-hover-filter', 'invert(68%) sepia(0%) saturate(16%) hue-rotate(268deg) brightness(78%) contrast(90%)');
    }

    if (darkModeCookie != null)
    {
        if (darkModeCookie == "darkMode")
        {
            root.style.setProperty('--bg-light', "#000");
            root.style.setProperty('--bs-light-rgb', "0,0,0");
            root.style.setProperty('--bs-body-color', "#fff");
            root.style.setProperty('--social-logo-filter', "invert(100%) sepia(23%) saturate(1173%) hue-rotate(330deg) brightness(157%) contrast(101%)");
            root.style.setProperty('--dark-mode-invert-filter', "invert(100%)");
        } else //if( darkModeCookie == "regularMode" )
        {
            root.style.setProperty('--bg-light', "#fff");
            root.style.setProperty('--bs-light-rgb', "255,255,255");
            root.style.setProperty('--bs-body-color', "#000");
            root.style.setProperty('--dark-mode-invert-filter', "invert(0%)");
        }
    }

}


function getCookie(name)
{
    var regExp = new RegExp( name + "=([^;]+)" );
    var value = regExp.exec( document.cookie );
    return ( value != null ) ? unescape( value[1] ) : null;
}


function randInt( min, max )
{
    return Math.floor( Math.random() * (max - min) ) + min;
}


applySettings();

