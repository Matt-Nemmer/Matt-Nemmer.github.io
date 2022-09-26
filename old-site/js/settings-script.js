
/* 
    Author: Matthew Nemmer
    Created: 2022-03-15
*/

let root = document.documentElement;

function applySettings()
{
    var darkModeCookie = getCookie("darkMode");
    var fontTypeCookie = getCookie("fontType");
    var primaryColorCookie = getCookie("primaryColor");

    if ( darkModeCookie != null ) 
    {
        if( darkModeCookie == "darkMode" )
        {
            root.style.setProperty( '--main-bg-color', "#303030" );
            root.style.setProperty( '--main-text-bg-color', "black" );
            root.style.setProperty( '--main-text-color', "white" );
            
            // Since dark mode is enabled, make it so clipart images are inverted.
            let clipartElements = document.querySelectorAll(".side-bar-clipart");
            for( let index = 0; index < clipartElements.length; index++ ) 
            {
                clipartElements[index].style.filter = "invert(1)";
            }
        }
        else if( darkModeCookie == "regularMode")
        {
            root.style.setProperty( '--main-bg-color', "#C0C0C0" );
            root.style.setProperty( '--main-text-bg-color', "white" );
            root.style.setProperty( '--main-text-color', "black" );
        } 
    }
    
    if ( fontTypeCookie != null) 
    {
        if( fontTypeCookie == "serif" )
        {
            root.style.setProperty('--main-fonts', 
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--serif-fonts') );
        }
        else if( fontTypeCookie == "sansSerif" )
        {
            root.style.setProperty('--main-fonts', 
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--sans-serif-fonts') );
        }
        else if( fontTypeCookie == "monospace" )
        {
            root.style.setProperty('--main-fonts', 
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--monospace-fonts') );
        }
    }
    
    if ( primaryColorCookie != null) 
    {
        if( primaryColorCookie == "green" )
        {
            root.style.setProperty('--primary-color', "#008800");
            root.style.setProperty('--primary-dark-color', "#004400");
            root.style.setProperty('--primary-light-color', "#CAFFCA");
        }
        else if( primaryColorCookie == "blue" )
        {
            root.style.setProperty('--primary-color', "#2828FF");
            root.style.setProperty('--primary-dark-color', "#000090");
            root.style.setProperty('--primary-light-color', "#DBE2FF");
        }
        else if( primaryColorCookie == "teal" )
        {
            root.style.setProperty('--primary-color', "#228888");
            root.style.setProperty('--primary-dark-color', "#004040");
            root.style.setProperty('--primary-light-color', "#CCEEEE");
        }
        else if( primaryColorCookie == "purple" )
        {
            root.style.setProperty('--primary-color', "#882288");
            root.style.setProperty('--primary-dark-color', "#500050");
            root.style.setProperty('--primary-light-color', "#EECCEE");
        }
        else if( primaryColorCookie == "red" )
        {
            root.style.setProperty('--primary-color', "#C50909");
            root.style.setProperty('--primary-dark-color', "#700000");
            root.style.setProperty('--primary-light-color', "#FFCACA");
        }
        else if( primaryColorCookie == "yellow" )
        {
            root.style.setProperty('--primary-color', "#AAA500");
            root.style.setProperty('--primary-dark-color', "#504500");
            root.style.setProperty('--primary-light-color', "#FFFFCC");
        }
        else if( primaryColorCookie == "orange" )
        {
            root.style.setProperty('--primary-color', "#CF8A00");
            root.style.setProperty('--primary-dark-color', "#592600");
            root.style.setProperty('--primary-light-color', "#EDDECD");
        }
        else if( primaryColorCookie == "brown" )
        {
            root.style.setProperty('--primary-color', "#786700");
            root.style.setProperty('--primary-dark-color', "#403000");
            root.style.setProperty('--primary-light-color', "#DFCFAF");
        }
        else if( primaryColorCookie == "black" )
        {
            root.style.setProperty('--primary-color', "#000000");
            root.style.setProperty('--primary-dark-color', "#454545");
            root.style.setProperty('--primary-light-color', "#D0D0D0");
        }
    }
    
}

function getCookie( name )
{
    var regExp = new RegExp( name + "=([^;]+)" );
    var value = regExp.exec( document.cookie );
    return ( value != null ) ? unescape( value[1] ) : null;
}

function changeClass(object,oldClass,newClass)
{
    // remove:
    //object.className = object.className.replace( /(?:^|\s)oldClass(?!\S)/g , '' );
    // replace: 
    var regExp = new RegExp('(?:^|\\s)' + oldClass + '(?!\\S)', 'g');
    object.className = object.className.replace( regExp , newClass );
    
    object.className.replace
      ( /(?:^|\s)MyClass(?!\S)/g , '' );
    // add
    //object.className += " "+newClass;
}


applySettings();
