var agent = navigator.userAgent;
var version = agent.match(/.*; CPU (?:iPhone )?OS ([0-9_]*) like Mac OS X[;)]/);
if (version != null) {
    version = version[1].replace(/_/g, '.');
    major = version.substring(0, 1);
    minor = version.substring(0, 3);
    if (parseInt(major) >= 4)
        document.write('<style type="text/css">' +
            '*[data-cy-ios] { display: none; }' +
            '*[data-cy-ios~="' + major + '"],' +
            '*[data-cy-ios~="' + minor + '"],' +
            '*[data-cy-ios=""] { display: block; }' +
        '</style>');
}
