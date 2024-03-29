window.onload = function () {
  const referer = getQueryParam("r");
  const refererCookie = getCookie("fsreferer");
  if (referer) {
    setCookie("fsreferer", referer, 365);
  }

  // If Join Page
  const refererField = document.getElementById("referer");
  if (refererField) {
    if (referer) {
      refererField.value = referer;
    } else if (refererCookie) {
      refererField.value = refererCookie;
    }
  }

  // Qualified Lead Event
  // Send an event to Segment if user has visited >1 page and been on site >30 seconds
  const cameToSite = getCookie("fs_ql");

  // if cookie already exists (ie they've visited another page already)
  if (cameToSite && cameToSite !== "ql_event_sent") {
    let timeOnSite = getTimeOnSite(cameToSite);
    if (timeOnSite > 30) {
      sendQualifiedLeadEvent();
    } else {
      const interval = setInterval(function () {
        timeOnSite = getTimeOnSite(cameToSite);
        if (timeOnSite > 30) {
          sendQualifiedLeadEvent();
          clearInterval(interval);
        }
      }, 5000);
    }
  } else {
    setCookie("fs_ql", new Date(), 1);
  }
};

function sendQualifiedLeadEvent() {
  analytics.track("QualifiedLead VisitedSite");
  setCookie("fs_ql", "ql_event_sent", 1);
}

function getTimeOnSite(arrivalTime) {
  return (new Date().valueOf() - new Date(arrivalTime).valueOf()) / 1000;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

function getQueryParam(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}
