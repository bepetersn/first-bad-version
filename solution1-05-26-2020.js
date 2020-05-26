/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let candidate = n 
        let direction = 1
        let wasBad, isBad, step
        while(true) {
            // change direction if changed valence
            wasBad = isBad; isBad = isBadVersion(candidate)
            direction = (isBad ^ wasBad) ? -1 : 1
            step = Math.floor(candidate / 2)
            candidate += (step * direction)
	    if(step === 1) { 
                break; 
            }
        }
        return candidate
    };
};
