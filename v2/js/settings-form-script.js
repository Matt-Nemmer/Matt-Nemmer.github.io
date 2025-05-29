
/* 
 Author: Matthew Nemmer
 Created: 2022-03-16
 Modified: 2022-09-26
 */


function setFormValues()
{
    var darkModeCookie = getCookie("darkMode");
    var fontTypeCookie = getCookie("fontType");
    var primaryColorCookie = getCookie("primaryColor");
    var currentValuesString = "<b>Current Values:</b><br><br>";

    if (darkModeCookie == null || darkModeCookie == "regularMode")
    {
        document.getElementById('darkMode2').checked = true;
        currentValuesString += "Dark Mode: OFF<br><br>";
    } else if (darkModeCookie == "darkMode")
    {
        document.getElementById('darkMode1').checked = true;
        currentValuesString += "Dark Mode: ON<br><br>";
    }

    if (fontTypeCookie == null || fontTypeCookie == "sansSerif")
    {
        document.getElementById('fontType2').checked = true;
        currentValuesString += "Font Type: Sans-Serif<br><br>";
    } else if (fontTypeCookie == "serif")
    {
        document.getElementById('fontType1').checked = true;
        currentValuesString += "Font Type: Serif<br><br>";
    } else if (fontTypeCookie == "monospace")
    {
        document.getElementById('fontType3').checked = true;
        currentValuesString += "Font Type: Monospace<br><br>";
    }

    if (primaryColorCookie == null || primaryColorCookie == "random")
    {
        document.getElementById('primaryColor').value = "random";
        currentValuesString += "Primary Color: Random<br><br>";
    } else if (primaryColorCookie == "blue")
    {
        document.getElementById('primaryColor').value = "blue";
        currentValuesString += "Primary Color: Blue<br><br>";
    } else if (primaryColorCookie == "green")
    {
        document.getElementById('primaryColor').value = "green";
        currentValuesString += "Primary Color: Green<br><br>";
    } else if (primaryColorCookie == "teal")
    {
        document.getElementById('primaryColor').value = "teal";
        currentValuesString += "Primary Color: Teal<br><br>";
    } else if (primaryColorCookie == "purple")
    {
        document.getElementById('primaryColor').value = "purple";
        currentValuesString += "Primary Color: Purple<br><br>";
    } else if (primaryColorCookie == "red")
    {
        document.getElementById('primaryColor').value = "red";
        currentValuesString += "Primary Color: Red<br><br>";
    } else if (primaryColorCookie == "yellow")
    {
        document.getElementById('primaryColor').value = "yellow";
        currentValuesString += "Primary Color: Yellow<br><br>";
    } else if (primaryColorCookie == "orange")
    {
        document.getElementById('primaryColor').value = "orange";
        currentValuesString += "Primary Color: Orange<br><br>";
    } else if (primaryColorCookie == "brown")
    {
        document.getElementById('primaryColor').value = "brown";
        currentValuesString += "Primary Color: Brown<br><br>";
    } else if (primaryColorCookie == "black")
    {
        document.getElementById('primaryColor').value = "black";
        currentValuesString += "Primary Color: Black<br><br>";
    }

    document.getElementById("current-values").innerHTML = currentValuesString;
}


function setCookie( name, value, daysUntilExpiry )
{
    const today = new Date();
    const expiry = new Date( today.getTime() + daysUntilExpiry * 24 * 3600 * 1000 );

    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}


function putCookies()
{
    const settingsForm = document.getElementById( 'value-selection' );

    setCookie( "darkMode", settingsForm.elements['darkMode'].value, 30 ); // set cookies to expire in 30 days
    setCookie( "fontType", settingsForm.elements['fontType'].value, 30 );
    setCookie( "primaryColor", settingsForm.elements['primaryColor'].value, 30 );
    return true;
}


function submitForm()
{
    document.getElementById("value-selection").submit();
}


setFormValues();

