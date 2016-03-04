(function() {

  function repercentage(s) {
    s = (''+s).trim().replace(/%$/g,'');
    if (s === '∞') {
      return Infinity;
    } else if (s === '-∞') {
      return -Infinity;
    } else {
      return Number(s)/100.;
    }
  }

  if (typeof module !== 'undefined') {
    module.exports = repercentage;
  } else {
    this.repercentage = repercentage;
  }

})();