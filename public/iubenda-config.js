// iubenda Cookie Solution configuration, shared by every page.
// Classic (non-module) script: it must run synchronously, before the iubenda embed script.
var _iub = _iub || [];
_iub.csConfiguration = _iub.csConfiguration || {
  promptToAcceptOnBlockedElements: true,
};
_iub.csConfiguration.callback = _iub.csConfiguration.callback || {};
_iub.csConfiguration.callback.onPreferenceExpressedOrNotNeeded = function (preference) {
  var prefs = preference || (_iub.cs && _iub.cs.api && _iub.cs.api.getPreferences());
  var purposes = (prefs && prefs.purposes) || {};
  if (purposes[4]) {
    window.__iubMeasurementAllowed = true;
    window.dispatchEvent(new CustomEvent('iubenda:measurement-allowed'));
  }
};
