
/**
 * a collection of file utility functions
 * @namespace me.utils.file
 * @memberOf me
 */

// regexp to deal with file name & path
const REMOVE_PATH = /^.*(\\|\/|\:)/;
const REMOVE_EXT = /\.[^\.]*$/;

var fileUtils = {

    /**
     * return the base name of the file without path info
     * @public
     * @function
     * @memberOf me.utils.file
     * @name getBasename
     * @param  {String} path path containing the filename
     * @return {String} the base name without path information.
     */
    getBasename : function (path) {
        return path.replace(REMOVE_PATH, "").replace(REMOVE_EXT, "");
    },

    /**
     * return the extension of the file in the given path
     * @public
     * @function
     * @memberOf me.utils.file
     * @name getExtension
     * @param  {String} path path containing the filename
     * @return {String} filename extension.
     */
    getExtension : function (path) {
        return path.substring(path.lastIndexOf(".") + 1, path.length);
    }
};

export default fileUtils;
