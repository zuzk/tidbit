
var Module;

if (typeof Module === 'undefined') Module = {};

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'pat', true, true);
Module['FS_createPath']('/pat', 'MT32Drums', true, true);
var fileData0 = [];
fileData0.push.apply(fileData0, [100, 105, 114, 32, 46, 47, 112, 97, 116, 10, 10, 100, 114, 117, 109, 115, 101, 116, 32, 48, 10, 10, 32, 51, 53, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 48, 46, 112, 97, 116, 10, 32, 51, 54, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 46, 112, 97, 116, 10, 32, 51, 55, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 46, 112, 97, 116, 10, 32, 51, 56, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 46, 112, 97, 116, 10, 32, 51, 57, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 46, 112, 97, 116, 10, 32, 52, 48, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 53, 46, 112, 97, 116, 10, 32, 52, 49, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 54, 46, 112, 97, 116, 10, 32, 52, 50, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 55, 46, 112, 97, 116, 10, 32, 52, 51, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 56, 46, 112, 97, 116, 10, 32, 52, 52, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 57, 46, 112, 97, 116, 10, 32, 52, 53, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 48, 46, 112, 97, 116, 10, 32, 52, 54, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 49, 46, 112, 97, 116, 10, 32, 52, 55, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 50, 46, 112, 97, 116, 10, 32, 52, 56, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 51, 46, 112, 97, 116, 10, 32, 52, 57, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 52, 46, 112, 97, 116, 10, 32, 53, 48, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 53, 46, 112, 97, 116, 10, 32, 53, 49, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 54, 46, 112, 97, 116, 10, 32, 53, 50, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 55, 46, 112, 97, 116, 10, 32, 53, 51, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 56, 46, 112, 97, 116, 10, 32, 53, 52, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 49, 57, 46, 112, 97, 116, 10, 32, 53, 53, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 48, 46, 112, 97, 116, 10, 32, 53, 54, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 49, 46, 112, 97, 116, 10, 32, 53, 55, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 50, 46, 112, 97, 116, 10, 32, 53, 56, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 51, 46, 112, 97, 116, 10, 32, 53, 57, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 52, 46, 112, 97, 116, 10, 32, 54, 48, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 53, 46, 112, 97, 116, 10, 32, 54, 49, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 54, 46, 112, 97, 116, 10, 32, 54, 50, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 55, 46, 112, 97, 116, 10, 32, 54, 51, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 56, 46, 112, 97, 116, 10, 32, 54, 52, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 50, 57, 46, 112, 97, 116, 10, 32, 54, 53, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 48, 46, 112, 97, 116, 10, 32, 54, 54, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 49, 46, 112, 97, 116, 10, 32, 54, 55, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 50, 46, 112, 97, 116, 10, 32, 54, 56, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 51, 46, 112, 97, 116, 10, 32, 54, 57, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 52, 46, 112, 97, 116, 10, 32, 55, 48, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 53, 46, 112, 97, 116, 10, 32, 55, 49, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 54, 46, 112, 97, 116, 10, 32, 55, 50, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 55, 46, 112, 97, 116, 10, 32, 55, 51, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 56, 46, 112, 97, 116, 10, 32, 55, 52, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 51, 57, 46, 112, 97, 116, 10, 32, 55, 53, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 48, 46, 112, 97, 116, 10, 32, 55, 54, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 49, 46, 112, 97, 116, 10, 32, 55, 55, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 50, 46, 112, 97, 116, 10, 32, 55, 56, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 51, 46, 112, 97, 116, 10, 32, 55, 57, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 52, 46, 112, 97, 116, 10, 32, 56, 48, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 53, 46, 112, 97, 116, 10, 32, 56, 49, 9, 32, 77, 84, 51, 50, 68, 114, 117, 109, 115, 47, 109, 116, 51, 50, 100, 114, 117, 109, 45, 52, 54, 46, 112, 97, 116, 10, 10, 98, 97, 110, 107, 32, 48, 10, 10, 32, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 55, 46, 112, 97, 116, 10, 32, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 54, 46, 112, 97, 116, 10, 32, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 53, 46, 112, 97, 116, 10, 32, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 52, 46, 112, 97, 116, 10, 32, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 51, 46, 112, 97, 116, 10, 32, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 50, 46, 112, 97, 116, 10, 32, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 49, 46, 112, 97, 116, 10, 32, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 48, 46, 112, 97, 116, 10, 32, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 57, 46, 112, 97, 116, 10, 32, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 56, 46, 112, 97, 116, 10, 32, 49, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 55, 46, 112, 97, 116, 10, 32, 49, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 54, 46, 112, 97, 116, 10, 32, 49, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 53, 46, 112, 97, 116, 10, 32, 49, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 52, 46, 112, 97, 116, 10, 32, 49, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 51, 46, 112, 97, 116, 10, 32, 49, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 50, 46, 112, 97, 116, 10, 32, 49, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 49, 46, 112, 97, 116, 10, 32, 49, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 48, 46, 112, 97, 116, 10, 32, 49, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 57, 46, 112, 97, 116, 10, 32, 49, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 56, 46, 112, 97, 116, 10, 32, 50, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 55, 46, 112, 97, 116, 10, 32, 50, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 54, 46, 112, 97, 116, 10, 32, 50, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 53, 46, 112, 97, 116, 10, 32, 50, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 52, 46, 112, 97, 116, 10, 32, 50, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 51, 46, 112, 97, 116, 10, 32, 50, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 50, 46, 112, 97, 116, 10, 32, 50, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 49, 46, 112, 97, 116, 10, 32, 50, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 48, 46, 112, 97, 116, 10, 32, 50, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 57, 46, 112, 97, 116, 10, 32, 50, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 56, 46, 112, 97, 116, 10, 32, 51, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 55, 46, 112, 97, 116, 10, 32, 51, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 54, 46, 112, 97, 116, 10, 32, 51, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 53, 46, 112, 97, 116, 10, 32, 51, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 52, 46, 112, 97, 116, 10, 32, 51, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 51, 46, 112, 97, 116, 10, 32, 51, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 50, 46, 112, 97, 116, 10, 32, 51, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 49, 46, 112, 97, 116, 10, 32, 51, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 48, 46, 112, 97, 116, 10, 32, 51, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 57, 46, 112, 97, 116, 10, 32, 51, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 56, 46, 112, 97, 116, 10, 32, 52, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 55, 46, 112, 97, 116, 10, 32, 52, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 54, 46, 112, 97, 116, 10, 32, 52, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 53, 46, 112, 97, 116, 10, 32, 52, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 52, 46, 112, 97, 116, 10, 32, 52, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 51, 46, 112, 97, 116, 10, 32, 52, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 50, 46, 112, 97, 116, 10, 32, 52, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 49, 46, 112, 97, 116, 10, 32, 52, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 48, 46, 112, 97, 116, 10, 32, 52, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 57, 46, 112, 97, 116, 10, 32, 52, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 56, 46, 112, 97, 116, 10, 32, 53, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 55, 46, 112, 97, 116, 10, 32, 53, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 54, 46, 112, 97, 116, 10, 32, 53, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 53, 46, 112, 97, 116, 10, 32, 53, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 52, 46, 112, 97, 116, 10, 32, 53, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 51, 46, 112, 97, 116, 10, 32, 53, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 50, 46, 112, 97, 116, 10, 32, 53, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 49, 46, 112, 97, 116, 10, 32, 53, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 48, 46, 112, 97, 116, 10, 32, 53, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 57, 46, 112, 97, 116, 10, 32, 53, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 56, 46, 112, 97, 116, 10, 32, 54, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 55, 46, 112, 97, 116, 10, 32, 54, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 54, 46, 112, 97, 116, 10, 32, 54, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 53, 46, 112, 97, 116, 10, 32, 54, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 52, 46, 112, 97, 116, 10, 32, 54, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 51, 46, 112, 97, 116, 10, 32, 54, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 50, 46, 112, 97, 116, 10, 32, 54, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 49, 46, 112, 97, 116, 10, 32, 54, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 48, 46, 112, 97, 116, 10, 32, 54, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 57, 46, 112, 97, 116, 10, 32, 54, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 56, 46, 112, 97, 116, 10, 32, 55, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 55, 46, 112, 97, 116, 10, 32, 55, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 54, 46, 112, 97, 116, 10, 32, 55, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 53, 46, 112, 97, 116, 10, 32, 55, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 52, 46, 112, 97, 116, 10, 32, 55, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 51, 46, 112, 97, 116, 10, 32, 55, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 50, 46, 112, 97, 116, 10, 32, 55, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 49, 46, 112, 97, 116, 10, 32, 55, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 48, 46, 112, 97, 116, 10, 32, 55, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 57, 46, 112, 97, 116, 10, 32, 55, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 56, 46, 112, 97, 116, 10, 32, 56, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 55, 46, 112, 97, 116, 10, 32, 56, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 54, 46, 112, 97, 116, 10, 32, 56, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 53, 46, 112, 97, 116, 10, 32, 56, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 52, 46, 112, 97, 116, 10, 32, 56, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 51, 46, 112, 97, 116, 10, 32, 56, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 50, 46, 112, 97, 116, 10, 32, 56, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 49, 46, 112, 97, 116, 10, 32, 56, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 48, 46, 112, 97, 116, 10, 32, 56, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 57, 46, 112, 97, 116, 10, 32, 56, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 56, 46, 112, 97, 116, 10, 32, 57, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 55, 46, 112, 97, 116, 10, 32, 57, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 54, 46, 112, 97, 116, 10, 32, 57, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 53, 46, 112, 97, 116, 10, 32, 57, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 52, 46, 112, 97, 116, 10, 32, 57, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 51, 46, 112, 97, 116, 10, 32, 57, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 50, 46, 112, 97, 116, 10, 32, 57, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 49, 46, 112, 97, 116, 10, 32, 57, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 48, 46, 112, 97, 116, 10, 32, 57, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 57, 46, 112, 97, 116, 10, 32, 57, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 56, 46, 112, 97, 116, 10, 32, 49, 48, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 55, 46, 112, 97, 116, 10, 32, 49, 48, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 54, 46, 112, 97, 116, 10, 32, 49, 48, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 53, 46, 112, 97, 116, 10, 32, 49, 48, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 52, 46, 112, 97, 116, 10, 32, 49, 48, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 51, 46, 112, 97, 116, 10, 32, 49, 48, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 50, 46, 112, 97, 116, 10, 32, 49, 48, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 49, 46, 112, 97, 116, 10, 32, 49, 48, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 48, 46, 112, 97, 116, 10, 32, 49, 48, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 57, 46, 112, 97, 116, 10, 32, 49, 48, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 56, 46, 112, 97, 116, 10, 32, 49, 49, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 55, 46, 112, 97, 116, 10, 32, 49, 49, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 54, 46, 112, 97, 116, 10, 32, 49, 49, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 53, 46, 112, 97, 116, 10, 32, 49, 49, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 52, 46, 112, 97, 116, 10, 32, 49, 49, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 51, 46, 112, 97, 116, 10, 32, 49, 49, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 50, 46, 112, 97, 116, 10, 32, 49, 49, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 49, 46, 112, 97, 116, 10, 32, 49, 49, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 48, 46, 112, 97, 116, 10, 32, 49, 49, 56, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 57, 46, 112, 97, 116, 10, 32, 49, 49, 57, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 56, 46, 112, 97, 116, 10, 32, 49, 50, 48, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 55, 46, 112, 97, 116, 10, 32, 49, 50, 49, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 54, 46, 112, 97, 116, 10, 32, 49, 50, 50, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 53, 46, 112, 97, 116, 10, 32, 49, 50, 51, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 52, 46, 112, 97, 116, 10, 32, 49, 50, 52, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 51, 46, 112, 97, 116, 10, 32, 49, 50, 53, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 50, 46, 112, 97, 116, 10, 32, 49, 50, 54, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 49, 46, 112, 97, 116, 10, 32, 49, 50, 55, 9, 32, 97, 114, 97, 99, 104, 110, 111, 45, 48, 46, 112, 97, 116, 10]);
Module['FS_createDataFile']('/', 'timidity.cfg', fileData0, true, true, false);
var fileData1 = [];
fileData1.push.apply(fileData1, [100, 117, 109, 109, 121, 10]);
Module['FS_createDataFile']('/pat', 'dummy.txt', fileData1, true, true, false);
var fileData2 = [];
fileData2.push.apply(fileData2, [100, 117, 109, 109, 121, 10]);
Module['FS_createDataFile']('/pat/MT32Drums', 'dummy.txt', fileData2, true, true, false);

  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": []});

})();

// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (Module['ENVIRONMENT']) {
  if (Module['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (Module['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (Module['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (Module['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('The provided Module[\'ENVIRONMENT\'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}


if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = console.log;
  if (!Module['printErr']) Module['printErr'] = console.warn;

  var nodeFS;
  var nodePath;

  Module['read'] = function read(filename, binary) {
    if (!nodeFS) nodeFS = require('fs');
    if (!nodePath) nodePath = require('path');
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  Module['load'] = function load(f) {
    globalEval(read(f));
  };

  if (!Module['thisProgram']) {
    if (process['argv'].length > 1) {
      Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    } else {
      Module['thisProgram'] = 'unknown-program';
    }
  }

  Module['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available' };
  }

  Module['readBinary'] = function readBinary(f) {
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    var data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
      } else {
        onerror();
      }
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }


  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WORKER) {
    Module['load'] = importScripts;
  }

  if (typeof Module['setWindowTitle'] === 'undefined') {
    Module['setWindowTitle'] = function(title) { document.title = title };
  }
  
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
if (!Module['thisProgram']) {
  Module['thisProgram'] = './this.program';
}

// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  setTempRet0: function (value) {
    tempRet0 = value;
  },
  getTempRet0: function () {
    return tempRet0;
  },
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  STACK_ALIGN: 16,
  prepVararg: function (ptr, type) {
    if (type === 'double' || type === 'i64') {
      // move so the load is aligned
      if (ptr & 7) {
        assert((ptr & 7) === 4);
        ptr += 4;
      }
    } else {
      assert((ptr & 3) === 0);
    }
    return ptr;
  },
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length-1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
    } else {
      assert(sig.length == 1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[sig]) {
      Runtime.funcWrappers[sig] = {};
    }
    var sigCache = Runtime.funcWrappers[sig];
    if (!sigCache[func]) {
      // optimize away arguments usage in common cases
      if (sig.length === 1) {
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func);
        };
      } else if (sig.length === 2) {
        sigCache[func] = function dynCall_wrapper(arg) {
          return Runtime.dynCall(sig, func, [arg]);
        };
      } else {
        // general case
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
        };
      }
    }
    return sigCache[func];
  },
  getCompilerSetting: function (name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+15)&-16);(assert((((STACKTOP|0) < (STACK_MAX|0))|0))|0); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+15)&-16); return ret; },
  dynamicAlloc: function (size) { assert(DYNAMICTOP_PTR);var ret = HEAP32[DYNAMICTOP_PTR>>2];var end = (((ret + size + 15)|0) & -16);HEAP32[DYNAMICTOP_PTR>>2] = end;if (end >= TOTAL_MEMORY) {var success = enlargeMemory();if (!success) {HEAP32[DYNAMICTOP_PTR>>2] = ret;return 0;}}return ret;},
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 16))*(quantum ? quantum : 16); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}



Module["Runtime"] = Runtime;



//========================================
// Runtime essentials
//========================================

var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  if (!func) {
    try { func = eval('_' + ident); } catch(e) {}
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

var cwrap, ccall;
(function(){
  var JSfuncs = {
    // Helpers for cwrap -- it can't refer to Runtime directly because it might
    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
    // out what the minified function name is.
    'stackSave': function() {
      Runtime.stackSave()
    },
    'stackRestore': function() {
      Runtime.stackRestore()
    },
    // type conversion from js to c
    'arrayToC' : function(arr) {
      var ret = Runtime.stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
    'stringToC' : function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = Runtime.stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    }
  };
  // For fast lookup of conversion functions
  var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

  // C calling interface.
  ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== 'array', 'Return type should not be "array".');
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];
        if (converter) {
          if (stack === 0) stack = Runtime.stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }
    var ret = func.apply(null, cArgs);
    if ((!opts || !opts.async) && typeof EmterpreterAsync === 'object') {
      assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling ccall');
    }
    if (opts && opts.async) assert(!returnType, 'async ccalls cannot return values');
    if (returnType === 'string') ret = Pointer_stringify(ret);
    if (stack !== 0) {
      if (opts && opts.async) {
        EmterpreterAsync.asyncFinalizers.push(function() {
          Runtime.stackRestore(stack);
        });
        return;
      }
      Runtime.stackRestore(stack);
    }
    return ret;
  }

  var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
  function parseJSFunc(jsfunc) {
    // Match the body and the return value of a javascript function source
    var parsed = jsfunc.toString().match(sourceRegex).slice(1);
    return {arguments : parsed[0], body : parsed[1], returnValue: parsed[2]}
  }

  // sources of useful functions. we create this lazily as it can trigger a source decompression on this entire file
  var JSsource = null;
  function ensureJSsource() {
    if (!JSsource) {
      JSsource = {};
      for (var fun in JSfuncs) {
        if (JSfuncs.hasOwnProperty(fun)) {
          // Elements of toCsource are arrays of three items:
          // the code, and the return value
          JSsource[fun] = parseJSFunc(JSfuncs[fun]);
        }
      }
    }
  }

  cwrap = function cwrap(ident, returnType, argTypes) {
    argTypes = argTypes || [];
    var cfunc = getCFunc(ident);
    // When the function takes numbers and returns a number, we can just return
    // the original function
    var numericArgs = argTypes.every(function(type){ return type === 'number'});
    var numericRet = (returnType !== 'string');
    if ( numericRet && numericArgs) {
      return cfunc;
    }
    // Creation of the arguments list (["$1","$2",...,"$nargs"])
    var argNames = argTypes.map(function(x,i){return '$'+i});
    var funcstr = "(function(" + argNames.join(',') + ") {";
    var nargs = argTypes.length;
    if (!numericArgs) {
      // Generate the code needed to convert the arguments from javascript
      // values to pointers
      ensureJSsource();
      funcstr += 'var stack = ' + JSsource['stackSave'].body + ';';
      for (var i = 0; i < nargs; i++) {
        var arg = argNames[i], type = argTypes[i];
        if (type === 'number') continue;
        var convertCode = JSsource[type + 'ToC']; // [code, return]
        funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';';
        funcstr += convertCode.body + ';';
        funcstr += arg + '=(' + convertCode.returnValue + ');';
      }
    }

    // When the code is compressed, the name of cfunc is not literally 'cfunc' anymore
    var cfuncname = parseJSFunc(function(){return cfunc}).returnValue;
    // Call the function
    funcstr += 'var ret = ' + cfuncname + '(' + argNames.join(',') + ');';
    if (!numericRet) { // Return type can only by 'string' or 'number'
      // Convert the result to a string
      var strgfy = parseJSFunc(function(){return Pointer_stringify}).returnValue;
      funcstr += 'ret = ' + strgfy + '(ret);';
    }
    funcstr += "if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
    if (!numericArgs) {
      // If we had a stack, restore it
      ensureJSsource();
      funcstr += JSsource['stackRestore'].body.replace('()', '(stack)') + ';';
    }
    funcstr += 'return ret})';
    return eval(funcstr);
  };
})();
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;

function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module["setValue"] = setValue;


function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module["getValue"] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;
Module["ALLOC_STATIC"] = ALLOC_STATIC;
Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
Module["ALLOC_NONE"] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
Module["allocate"] = allocate;

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return Runtime.staticAlloc(size);
  if (!runtimeInitialized) return Runtime.dynamicAlloc(size);
  return _malloc(size);
}
Module["getMemory"] = getMemory;

function Pointer_stringify(ptr, /* optional */ length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return Module['UTF8ToString'](ptr);
}
Module["Pointer_stringify"] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}
Module["AsciiToString"] = AsciiToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}
Module["stringToAscii"] = stringToAscii;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}
Module["UTF8ArrayToString"] = UTF8ArrayToString;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}
Module["UTF8ToString"] = UTF8ToString;

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}
Module["stringToUTF8Array"] = stringToUTF8Array;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}
Module["stringToUTF8"] = stringToUTF8;

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}
Module["lengthBytesUTF8"] = lengthBytesUTF8;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}


function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}


function demangle(func) {
  var hasLibcxxabi = !!Module['___cxa_demangle'];
  if (hasLibcxxabi) {
    try {
      var s = func.substr(1);
      var len = lengthBytesUTF8(s)+1;
      var buf = _malloc(len);
      stringToUTF8(s, buf, len);
      var status = _malloc(4);
      var ret = Module['___cxa_demangle'](buf, 0, 0, status);
      if (getValue(status, 'i32') === 0 && ret) {
        return Pointer_stringify(ret);
      }
      // otherwise, libcxxabi failed
    } catch(e) {
      // ignore problems here
    } finally {
      if (buf) _free(buf);
      if (status) _free(status);
      if (ret) _free(ret);
    }
    // failure when using libcxxabi, don't demangle
    return func;
  }
  Runtime.warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
  return func;
}

function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}
Module["stackTrace"] = stackTrace;

// Memory management

var PAGE_SIZE = 4096;

function alignMemoryPage(x) {
  if (x % 4096 > 0) {
    x += (4096 - (x % 4096));
  }
  return x;
}

var HEAP;
var buffer;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - asm.stackSave() + allocSize) + ' bytes available!');
}

function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 67108864;

var WASM_PAGE_SIZE = 64 * 1024;

var totalMemory = WASM_PAGE_SIZE;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
  if (totalMemory < 16*1024*1024) {
    totalMemory *= 2;
  } else {
    totalMemory += 16*1024*1024;
  }
}
if (totalMemory !== TOTAL_MEMORY) {
  Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be compliant with the asm.js spec (and given that TOTAL_STACK=' + TOTAL_STACK + ')');
  TOTAL_MEMORY = totalMemory;
}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'JS engine does not provide full typed array support');



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
  assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
} else {
  // Use a WebAssembly memory where available
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  assert(buffer.byteLength === TOTAL_MEMORY);
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

Module['HEAP'] = HEAP;
Module['buffer'] = buffer;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module["addOnPreRun"] = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module["addOnInit"] = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module["addOnPreMain"] = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module["addOnExit"] = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module["addOnPostRun"] = addOnPostRun;

// Tools


function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
Module["intArrayFromString"] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module["intArrayToString"] = intArrayToString;

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
function writeStringToMemory(string, buffer, dontAddNull) {
  Runtime.warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var lastChar, end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}
Module["writeStringToMemory"] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);    
}
Module["writeArrayToMemory"] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}
Module["writeAsciiToMemory"] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];


if (!Math['clz32']) Math['clz32'] = function(x) {
  x = x >>> 0;
  for (var i = 0; i < 32; i++) {
    if (x & (1 << (31 - i))) return i;
  }
  return 32;
};
Math.clz32 = Math['clz32']

if (!Math['trunc']) Math['trunc'] = function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
Math.trunc = Math['trunc'];

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            Module.printErr('still waiting on run dependencies:');
          }
          Module.printErr('dependency: ' + dep);
        }
        if (shown) {
          Module.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    Module.printErr('warning: run dependency added without ID');
  }
}
Module["addRunDependency"] = addRunDependency;

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    Module.printErr('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module["removeRunDependency"] = removeRunDependency;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;





// === Body ===

var ASM_CONSTS = [];




STATIC_BASE = 8;

STATICTOP = STATIC_BASE + 11856;
  /* global initializers */  __ATINIT__.push();
  

/* memory initializer */ allocate([0,0,0,0,0,0,144,63,75,191,53,65,90,136,144,63,241,46,189,130,62,21,145,63,249,198,51,115,211,166,145,63,194,109,221,10,65,61,146,63,61,194,157,150,176,216,146,63,232,234,78,195,76,121,147,63,204,6,121,169,65,31,148,63,172,119,109,217,188,202,148,63,136,88,201,103,237,123,149,63,154,143,98,250,3,51,150,63,89,8,163,213,50,240,150,63,69,192,85,234,173,179,151,63,98,112,233,227,170,125,152,63,242,189,44,55,97,78,153,63,189,253,135,49,10,38,154,63,84,184,184,8,225,4,155,63,232,64,19,235,34,235,155,63,101,213,78,16,15,217,156,63,82,228,224,202,230,206,157,63,110,60,236,153,237,204,158,63,149,18,201,59,105,211,159,63,39,122,149,224,80,113,160,63,129,244,116,208,112,253,160,63,39,24,58,230,58,142,161,63,74,29,119,226,214,35,162,63,50,84,131,216,109,190,162,63,137,39,194,57,42,94,163,63,195,57,74,225,55,3,164,63,225,208,239,31,196,173,164,63,141,222,181,200,253,93,165,63,62,15,169,61,21,20,166,63,223,103,40,125,60,208,166,63,155,23,159,47,167,146,167,63,148,66,179,181,138,91,168,63,80,170,237,54,30,43,169,63,237,57,222,176,154,1,170,63,104,158,193,6,59,223,170,63,182,54,172,17,60,196,171,63,248,203,62,177,220,176,172,63,49,168,233,220,93,165,173,63,115,200,194,181,2,162,174,63,108,16,244,152,16,167,175,63,78,71,99,153,103,90,176,63,213,5,40,73,196,229,176,63,17,38,228,158,196,117,177,63,185,204,197,35,144,10,178,63,128,43,232,177,79,164,178,63,152,204,138,127,45,67,179,63,121,115,168,42,85,231,179,63,129,193,240,196,243,144,180,63,19,232,39,224,55,64,181,63,242,205,239,154,81,245,181,63,121,42,254,173,114,176,182,63,62,55,195,121,206,113,183,63,150,183,132,20,154,57,184,63,124,53,241,88,12,8,185,63,40,116,47,245,93,221,185,63,234,58,110,122,201,185,186,63,0,190,248,108,139,157,187,63,185,15,212,84,226,136,188,63,119,41,234,206,14,124,189,63,90,67,199,158,83,119,190,63,113,89,238,192,245,122,191,63,90,243,228,62,158,67,192,63,134,4,159,190,56,206,192,63,250,182,112,109,112,93,193,63,134,74,113,157,108,241,193,63,158,146,207,239,85,138,194,63,241,160,249,95,86,40,195,63,53,128,35,79,153,203,195,63,8,41,48,144,75,116,196,63,52,246,255,115,155,34,197,63,60,249,39,214,184,214,197,63,231,172,21,42,213,144,198,63,103,161,162,136,35,81,199,63,64,220,27,190,216,23,200,63,253,197,192,88,43,229,200,63,169,160,189,183,83,185,201,63,151,163,165,26,140,148,202,63,112,252,112,177,16,119,203,63,132,25,3,173,31,97,204,63,196,198,61,80,249,82,205,63,129,205,165,1,224,76,206,63,12,239,157,93,24,79,207,63,179,157,158,164,244,44,208,63,24,248,226,2,206,182,208,63,221,27,97,34,62,69,209,63,241,38,102,30,108,216,209,63,184,223,131,95,128,112,210,63,143,212,168,166,164,13,211,63,246,6,151,24,4,176,211,63,25,72,188,73,203,87,212,63,38,135,111,74,40,5,213,63,234,109,150,179,74,184,213,63,94,196,182,179,99,113,214,63,191,49,119,28,166,48,215,63,64,16,147,112,70,246,215,63,245,39,69,242,122,194,216,63,68,70,45,178,123,149,217,63,234,200,180,158,130,111,218,63,100,86,246,147,203,80,219,63,204,33,45,108,148,57,220,63,17,61,176,16,29,42,221,63,59,163,126,139,167,34,222,63,13,204,96,25,120,35,223,63,161,97,82,158,106,22,224,63,42,244,60,232,131,159,224,63,162,211,120,142,45,45,225,63,38,84,213,117,142,191,225,63,187,17,150,206,206,86,226,63,84,154,123,31,24,243,226,63,218,31,42,81,149,148,227,63,89,83,241,185,114,59,228,63,111,165,248,41,222,231,228,63,145,67,211,247,6,154,229,63,32,70,127,13,30,82,230,63,216,160,211,245,85,16,231,63,137,133,96,234,226,212,231,63,76,8,198,225,250,159,232,63,27,245,132,158,213,113,233,63,9,232,77,190,172,74,234,63,44,220,210,201,187,42,235,63,254,136,31,69,64,18,236,63,11,11,125,192,121,1,237,63,244,122,229,233,169,248,237,63,130,61,12,159,20,248,238,63,0,0,0,0,0,0,240,63,0,0,0,0,0,0,240,63,113,93,245,158,236,0,240,63,84,18,150,75,217,1,240,63,207,232,226,5,198,2,240,63,21,171,220,205,178,3,240,63,102,35,132,163,159,4,240,63,10,28,218,134,140,5,240,63,88,95,223,119,121,6,240,63,177,183,148,118,102,7,240,63,131,239,250,130,83,8,240,63,70,209,18,157,64,9,240,63,127,39,221,196,45,10,240,63,191,188,90,250,26,11,240,63,160,91,140,61,8,12,240,63,204,206,114,142,245,12,240,63,245,224,14,237,226,13,240,63,218,92,97,89,208,14,240,63,71,13,107,211,189,15,240,63,17,189,44,91,171,16,240,63,28,55,167,240,152,17,240,63,85,70,219,147,134,18,240,63,181,181,201,68,116,19,240,63,66,80,115,3,98,20,240,63,14,225,216,207,79,21,240,63,53,51,251,169,61,22,240,63,224,17,219,145,43,23,240,63,68,72,121,135,25,24,240,63,159,161,214,138,7,25,240,63,63,233,243,155,245,25,240,63,122,234,209,186,227,26,240,63,180,112,113,231,209,27,240,63,93,71,211,33,192,28,240,63,238,57,248,105,174,29,240,63,239,19,225,191,156,30,240,63,242,160,142,35,139,31,240,63,148,172,1,149,121,32,240,63,129,2,59,20,104,33,240,63,109,110,59,161,86,34,240,63,26,188,3,60,69,35,240,63,85,183,148,228,51,36,240,63,247,43,239,154,34,37,240,63,228,229,19,95,17,38,240,63,14,177,3,49,0,39,240,63,112,89,191,16,239,39,240,63,19,171,71,254,221,40,240,63,10,114,157,249,204,41,240,63,117,122,193,2,188,42,240,63,128,144,180,25,171,43,240,63,97,128,119,62,154,44,240,63,92,22,11,113,137,45,240,63,191,30,112,177,120,46,240,63,230,101,167,255,103,47,240,63,54,184,177,91,87,48,240,63,34,226,143,197,70,49,240,63,39,176,66,61,54,50,240,63,209,238,202,194,37,51,240,63,180,106,41,86,21,52,240,63,113,240,94,247,4,53,240,63,183,76,108,166,244,53,240,63,63,76,82,99,228,54,240,63,204,187,17,46,212,55,240,63,49,104,171,6,196,56,240,63,73,30,32,237,179,57,240,63,254,170,112,225,163,58,240,63,67,219,157,227,147,59,240,63,24,124,168,243,131,60,240,63,138,90,145,17,116,61,240,63,177,67,89,61,100,62,240,63,176,4,1,119,84,63,240,63,182,106,137,190,68,64,240,63,0,67,243,19,53,65,240,63,212,90,63,119,37,66,240,63,133,127,110,232,21,67,240,63,114,126,129,103,6,68,240,63,7,37,121,244,246,68,240,63,185,64,86,143,231,69,240,63,12,159,25,56,216,70,240,63,141,13,196,238,200,71,240,63,216,89,86,179,185,72,240,63,146,81,209,133,170,73,240,63,109,194,53,102,155,74,240,63,40,122,132,84,140,75,240,63,140,70,190,80,125,76,240,63,110,245,227,90,110,77,240,63,177,84,246,114,95,78,240,63,66,50,246,152,80,79,240,63,26,92,228,204,65,80,240,63,63,160,193,14,51,81,240,63,194,204,142,94,36,82,240,63,192,175,76,188,21,83,240,63,98,23,252,39,7,84,240,63,220,209,157,161,248,84,240,63,112,173,50,41,234,85,240,63,107,120,187,190,219,86,240,63,37,1,57,98,205,87,240,63,2,22,172,19,191,88,240,63,116,133,21,211,176,89,240,63,247,29,118,160,162,90,240,63,18,174,206,123,148,91,240,63,91,4,32,101,134,92,240,63,113,239,106,92,120,93,240,63,1,62,176,97,106,94,240,63,194,190,240,116,92,95,240,63,122,64,45,150,78,96,240,63,247,145,102,197,64,97,240,63,22,130,157,2,51,98,240,63,191,223,210,77,37,99,240,63,229,121,7,167,23,100,240,63,137,31,60,14,10,101,240,63,181,159,113,131,252,101,240,63,130,201,168,6,239,102,240,63,20,108,226,151,225,103,240,63,154,86,31,55,212,104,240,63,79,88,96,228,198,105,240,63,124,64,166,159,185,106,240,63,115,222,241,104,172,107,240,63,149,1,68,64,159,108,240,63,77,121,157,37,146,109,240,63,18,21,255,24,133,110,240,63,104,164,105,26,120,111,240,63,222,246,221,41,107,112,240,63,16,220,92,71,94,113,240,63,165,35,231,114,81,114,240,63,81,157,125,172,68,115,240,63,211,24,33,244,55,116,240,63,246,101,210,73,43,117,240,63,147,84,146,173,30,118,240,63,140,180,97,31,18,119,240,63,209,85,65,159,5,120,240,63,93,8,50,45,249,120,240,63,57,156,52,201,236,121,240,63,118,225,73,115,224,122,240,63,54,168,114,43,212,123,240,63,163,192,175,241,199,124,240,63,246,250,1,198,187,125,240,63,113,39,106,168,175,126,240,63,101,22,233,152,163,127,240,63,44,152,127,151,151,128,240,63,48,125,46,164,139,129,240,63,226,149,246,190,127,130,240,63,197,178,216,231,115,131,240,63,98,164,213,30,104,132,240,63,82,59,238,99,92,133,240,63,58,72,35,183,80,134,240,63,200,155,117,24,69,135,240,63,185,6,230,135,57,136,240,63,214,89,117,5,46,137,240,63,242,101,36,145,34,138,240,63,237,251,243,42,23,139,240,63,180,236,228,210,11,140,240,63,63,9,248,136,0,141,240,63,147,34,46,77,245,141,240,63,192,9,136,31,234,142,240,63,226,143,6,0,223,143,240,63,35,134,170,238,211,144,240,63,184,189,116,235,200,145,240,63,224,7,102,246,189,146,240,63,233,53,127,15,179,147,240,63,44,25,193,54,168,148,240,63,13,131,44,108,157,149,240,63,0,69,194,175,146,150,240,63,127,48,131,1,136,151,240,63,22,23,112,97,125,152,240,63,89,202,137,207,114,153,240,63,234,27,209,75,104,154,240,63,119,221,70,214,93,155,240,63,185,224,235,110,83,156,240,63,119,247,192,21,73,157,240,63,131,243,198,202,62,158,240,63,187,166,254,141,52,159,240,63,9,227,104,95,42,160,240,63,99,122,6,63,32,161,240,63,205,62,216,44,22,162,240,63,85,2,223,40,12,163,240,63,21,151,27,51,2,164,240,63,53,207,142,75,248,164,240,63,233,124,57,114,238,165,240,63,110,114,28,167,228,166,240,63,17,130,56,234,218,167,240,63,40,126,142,59,209,168,240,63,25,57,31,155,199,169,240,63,83,133,235,8,190,170,240,63,81,53,244,132,180,171,240,63,156,27,58,15,171,172,240,63,200,10,190,167,161,173,240,63,118,213,128,78,152,174,240,63,82,78,131,3,143,175,240,63,22,72,198,198,133,176,240,63,134,149,74,152,124,177,240,63,116,9,17,120,115,178,240,63,188,118,26,102,106,179,240,63,73,176,103,98,97,180,240,63,15,137,249,108,88,181,240,63,18,212,208,133,79,182,240,63,95,100,238,172,70,183,240,63,17,13,83,226,61,184,240,63,78,161,255,37,53,185,240,63,72,244,244,119,44,186,240,63,63,217,51,216,35,187,240,63,125,35,189,70,27,188,240,63,91,166,145,195,18,189,240,63,59,53,178,78,10,190,240,63,142,163,31,232,1,191,240,63,206,196,218,143,249,191,240,63,133,108,228,69,241,192,240,63,71,110,61,10,233,193,240,63,180,157,230,220,224,194,240,63,122,206,224,189,216,195,240,63,80,212,44,173,208,196,240,63,253,130,203,170,200,197,240,63,83,174,189,182,192,198,240,63,46,42,4,209,184,199,240,63,121,202,159,249,176,200,240,63,42,99,145,48,169,201,240,63,67,200,217,117,161,202,240,63,212,205,121,201,153,203,240,63,247,71,114,43,146,204,240,63,212,10,196,155,138,205,240,63,158,234,111,26,131,206,240,63,148,187,118,167,123,207,240,63,3,82,217,66,116,208,240,63,68,130,152,236,108,209,240,63,186,32,181,164,101,210,240,63,214,1,48,107,94,211,240,63,22,250,9,64,87,212,240,63,2,222,67,35,80,213,240,63,50,130,222,20,73,214,240,63,69,187,218,20,66,215,240,63,236,93,57,35,59,216,240,63,223,62,251,63,52,217,240,63,230,50,33,107,45,218,240,63,213,14,172,164,38,219,240,63,137,167,156,236,31,220,240,63,240,209,243,66,25,221,240,63,0,99,178,167,18,222,240,63,191,47,217,26,12,223,240,63,61,13,105,156,5,224,240,63,150,208,98,44,255,224,240,63,245,78,199,202,248,225,240,63,141,93,151,119,242,226,240,63,162,209,211,50,236,227,240,63,129,128,125,252,229,228,240,63,133,63,149,212,223,229,240,63,21,228,27,187,217,230,240,63,163,67,18,176,211,231,240,63,176,51,121,179,205,232,240,63,198,137,81,197,199,233,240,63,127,27,156,229,193,234,240,63,126,190,89,20,188,235,240,63,116,72,139,81,182,236,240,63,31,143,49,157,176,237,240,63,72,104,77,247,170,238,240,63,197,169,223,95,165,239,240,63,119,41,233,214,159,240,240,63,79,189,106,92,154,241,240,63,69,59,101,240,148,242,240,63,0,0,0,0,0,0,240,63,99,121,217,146,143,243,240,63,192,214,199,195,154,245,241,63,21,183,49,10,254,6,243,63,139,114,141,249,162,40,244,63,94,236,240,8,129,91,245,63,205,59,127,102,158,160,246,63,176,207,104,215,16,249,247,63,60,110,61,165,254,101,249,63,173,211,90,153,159,232,250,63,41,193,78,7,62,130,252,63,67,19,16,231,55,52,254,63,0,0,0,0,0,0,0,64,99,121,217,146,143,243,0,64,192,214,199,195,154,245,1,64,21,183,49,10,254,6,3,64,139,114,141,249,162,40,4,64,94,236,240,8,129,91,5,64,205,59,127,102,158,160,6,64,176,207,104,215,16,249,7,64,61,110,61,165,254,101,9,64,173,211,90,153,159,232,10,64,41,193,78,7,62,130,12,64,68,19,16,231,55,52,14,64,0,0,0,0,0,0,16,64,99,121,217,146,143,243,16,64,191,214,199,195,154,245,17,64,21,183,49,10,254,6,19,64,139,114,141,249,162,40,20,64,93,236,240,8,129,91,21,64,205,59,127,102,158,160,22,64,177,207,104,215,16,249,23,64,60,110,61,165,254,101,25,64,173,211,90,153,159,232,26,64,42,193,78,7,62,130,28,64,67,19,16,231,55,52,30,64,0,0,0,0,0,0,32,64,99,121,217,146,143,243,32,64,191,214,199,195,154,245,33,64,21,183,49,10,254,6,35,64,139,114,141,249,162,40,36,64,93,236,240,8,129,91,37,64,205,59,127,102,158,160,38,64,177,207,104,215,16,249,39,64,60,110,61,165,254,101,41,64,173,211,90,153,159,232,42,64,42,193,78,7,62,130,44,64,67,19,16,231,55,52,46,64,0,0,0,0,0,0,48,64,98,121,217,146,143,243,48,64,193,214,199,195,154,245,49,64,21,183,49,10,254,6,51,64,138,114,141,249,162,40,52,64,95,236,240,8,129,91,53,64,205,59,127,102,158,160,54,64,175,207,104,215,16,249,55,64,62,110,61,165,254,101,57,64,173,211,90,153,159,232,58,64,40,193,78,7,62,130,60,64,69,19,16,231,55,52,62,64,0,0,0,0,0,0,64,64,98,121,217,146,143,243,64,64,193,214,199,195,154,245,65,64,21,183,49,10,254,6,67,64,138,114,141,249,162,40,68,64,95,236,240,8,129,91,69,64,205,59,127,102,158,160,70,64,175,207,104,215,16,249,71,64,62,110,61,165,254,101,73,64,173,211,90,153,159,232,74,64,40,193,78,7,62,130,76,64,69,19,16,231,55,52,78,64,0,0,0,0,0,0,80,64,98,121,217,146,143,243,80,64,193,214,199,195,154,245,81,64,21,183,49,10,254,6,83,64,138,114,141,249,162,40,84,64,95,236,240,8,129,91,85,64,205,59,127,102,158,160,86,64,175,207,104,215,16,249,87,64,62,110,61,165,254,101,89,64,173,211,90,153,159,232,90,64,40,193,78,7,62,130,92,64,69,19,16,231,55,52,94,64,0,0,0,0,0,0,96,64,98,121,217,146,143,243,96,64,193,214,199,195,154,245,97,64,21,183,49,10,254,6,99,64,138,114,141,249,162,40,100,64,95,236,240,8,129,91,101,64,205,59,127,102,158,160,102,64,175,207,104,215,16,249,103,64,62,110,61,165,254,101,105,64,173,211,90,153,159,232,106,64,40,193,78,7,62,130,108,64,69,19,16,231,55,52,110,64,0,0,0,0,0,0,112,64,101,121,217,146,143,243,112,64,190,214,199,195,154,245,113,64,21,183,49,10,254,6,115,64,141,114,141,249,162,40,116,64,92,236,240,8,129,91,117,64,205,59,127,102,158,160,118,64,179,207,104,215,16,249,119,64,58,110,61,165,254,101,121,64,173,211,90,153,159,232,122,64,45,193,78,7,62,130,124,64,64,19,16,231,55,52,126,64,0,0,0,0,0,0,128,64,101,121,217,146,143,243,128,64,190,214,199,195,154,245,129,64,21,183,49,10,254,6,131,64,141,114,141,249,162,40,132,64,92,236,240,8,129,91,133,64,205,59,127,102,158,160,134,64,179,207,104,215,16,249,135,64,58,110,61,165,254,101,137,64,173,211,90,153,159,232,138,64,45,193,78,7,62,130,140,64,64,19,16,231,55,52,142,64,0,0,0,0,0,0,144,64,101,121,217,146,143,243,144,64,190,214,199,195,154,245,145,64,21,183,49,10,254,6,147,64,141,114,141,249,162,40,148,64,92,236,240,8,129,91,149,64,205,59,127,102,158,160,150,64,179,207,104,215,16,249,151,64,187,19,0,0,0,0,0,0,32,161,7,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,0,0,220,67,0,0,128,63,240,31,0,0,214,33,0,0,217,35,0,0,251,37,0,0,61,40,0,0,161,42,0,0,42,45,0,0,218,47,0,0,178,50,0,0,182,53,0,0,232,56,0,0,74,60,0,0,224,63,0,0,172,67,0,0,178,71,0,0,245,75,0,0,122,80,0,0,67,85,0,0,85,90,0,0,180,95,0,0,101,101,0,0,108,107,0,0,207,113,0,0,148,120,0,0,191,127,0,0,88,135,0,0,100,143,0,0,235,151,0,0,243,160,0,0,134,170,0,0,169,180,0,0,103,191,0,0,201,202,0,0,216,214,0,0,158,227,0,0,39,241,0,0,126,255,0,0,176,14,1,0,200,30,1,0,214,47,1,0,231,65,1,0,11,85,1,0,83,105,1,0,207,126,1,0,146,149,1,0,176,173,1,0,61,199,1,0,79,226,1,0,253,254,1,0,95,29,2,0,144,61,2,0,171,95,2,0,206,131,2,0,22,170,2,0,165,210,2,0,158,253,2,0,36,43,3,0,96,91,3,0,122,142,3,0,158,196,3,0,250,253,3,0,191,58,4,0,33,123,4,0,87,191,4,0,156,7,5,0,44,84,5,0,74,165,5,0,59,251,5,0,73,86,6,0,192,182,6,0,244,28,7,0,59,137,7,0,243,251,7,0,125,117,8,0,66,246,8,0,174,126,9,0,55,15,10,0,88,168,10,0,149,74,11,0,119,246,11,0,145,172,12,0,128,109,13,0,232,57,14,0,119,18,15,0,230,247,15,0,251,234,16,0,131,236,17,0,92,253,18,0,110,30,20,0,177,80,21,0,42,149,22,0,238,236,23,0,35,89,25,0,0,219,26,0,207,115,28,0,237,36,30,0,205,239,31,0,245,213,33,0,6,217,35,0,184,250,37,0,220,60,40,0,98,161,42,0,83,42,45,0,219,217,47,0,70,178,50,0,0,182,53,0,158,231,56,0,218,73,60,0,153,223,63,0,234,171,67,0,12,178,71,0,112,245,75,0,185,121,80,0,196,66,85,0,167,84,90,0,183,179,95,0,139,100,101,0,0,108,107,0,60,207,113,0,181,147,120,0,50,191,127,0,212,87,135,0,25,100,143,0,223,234,151,0,114,243,160,0,135,133,170,0,78,169,180,0,110,103,191,0,160,18,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,63,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,19,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,3,0,0,0,71,42,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,19,0,0,71,70,49,80,65,84,67,72,49,49,48,0,73,68,35,48,48,48,48,48,50,0,71,70,49,80,65,84,67,72,49,48,48,0,73,68,35,48,48,48,48,48,50,0,63,63,63,63,63,63,0,46,112,97,116,0,86,101,108,111,99,105,116,121,32,37,100,32,37,100,10,0,77,84,104,100,0,77,84,114,107,0,114,98,0,97,100,100,32,116,111,32,112,97,116,104,108,105,115,116,58,32,37,115,10,0,116,105,109,105,100,105,116,121,46,99,102,103,0,80,114,111,98,97,98,108,101,32,115,111,117,114,99,101,32,108,111,111,112,32,105,110,32,99,111,110,102,105,103,117,114,97,116,105,111,110,32,102,105,108,101,115,10,0,67,111,110,102,105,103,117,114,97,116,105,111,110,32,102,105,108,101,32,37,115,32,110,111,116,32,102,111,117,110,100,10,0,32,9,160,0,35,101,120,116,101,110,115,105,111,110,0,99,111,109,109,0,72,84,84,80,112,114,111,120,121,0,70,84,80,112,114,111,120,121,0,109,97,105,108,97,100,100,114,0,111,112,116,0,116,105,109,101,111,117,116,0,70,73,88,77,69,58,32,73,109,112,108,101,109,101,110,116,32,34,116,105,109,101,111,117,116,34,32,105,110,32,84,105,77,105,100,105,116,121,32,99,111,110,102,105,103,46,10,0,99,111,112,121,100,114,117,109,115,101,116,0,99,111,112,121,98,97,110,107,0,70,73,88,77,69,58,32,73,109,112,108,101,109,101,110,116,32,34,37,115,34,32,105,110,32,84,105,77,105,100,105,116,121,32,99,111,110,102,105,103,46,10,0,117,110,100,101,102,0,70,73,88,77,69,58,32,73,109,112,108,101,109,101,110,116,32,34,117,110,100,101,102,34,32,105,110,32,84,105,77,105,100,105,116,121,32,99,111,110,102,105,103,46,10,0,97,108,116,97,115,115,105,103,110,0,70,73,88,77,69,58,32,73,109,112,108,101,109,101,110,116,32,34,97,108,116,97,115,115,105,103,110,34,32,105,110,32,84,105,77,105,100,105,116,121,32,99,111,110,102,105,103,46,10,0,115,111,117,110,100,102,111,110,116,0,102,111,110,116,0,70,73,88,77,69,58,32,73,109,112,108,109,101,109,101,110,116,32,34,37,115,34,32,105,110,32,84,105,77,105,100,105,116,121,32,99,111,110,102,105,103,46,10,0,112,114,111,103,98,97,115,101,0,70,73,88,77,69,58,32,73,109,112,108,101,109,101,110,116,32,34,112,114,111,103,98,97,115,101,34,32,105,110,32,84,105,77,105,100,105,116,121,32,99,111,110,102,105,103,46,10,0,109,97,112,0,70,73,88,77,69,58,32,73,109,112,108,101,109,101,110,116,32,34,109,97,112,34,32,105,110,32,84,105,77,105,100,105,116,121,32,99,111,110,102,105,103,46,10,0,100,105,114,0,37,115,58,32,108,105,110,101,32,37,100,58,32,78,111,32,100,105,114,101,99,116,111,114,121,32,103,105,118,101,110,10,0,115,111,117,114,99,101,0,37,115,58,32,108,105,110,101,32,37,100,58,32,78,111,32,102,105,108,101,32,110,97,109,101,32,103,105,118,101,110,10,0,100,101,102,97,117,108,116,0,37,115,58,32,108,105,110,101,32,37,100,58,32,77,117,115,116,32,115,112,101,99,105,102,121,32,101,120,97,99,116,108,121,32,111,110,101,32,112,97,116,99,104,32,110,97,109,101,10,0,100,114,117,109,115,101,116,0,37,115,58,32,108,105,110,101,32,37,100,58,32,78,111,32,100,114,117,109,32,115,101,116,32,110,117,109,98,101,114,32,103,105,118,101,110,10,0,37,115,58,32,108,105,110,101,32,37,100,58,32,68,114,117,109,32,115,101,116,32,109,117,115,116,32,98,101,32,98,101,116,119,101,101,110,32,48,32,97,110,100,32,49,50,55,10,0,98,97,110,107,0,37,115,58,32,108,105,110,101,32,37,100,58,32,78,111,32,98,97,110,107,32,110,117,109,98,101,114,32,103,105,118,101,110,10,0,37,115,58,32,108,105,110,101,32,37,100,58,32,84,111,110,101,32,98,97,110,107,32,109,117,115,116,32,98,101,32,98,101,116,119,101,101,110,32,48,32,97,110,100,32,49,50,55,10,0,37,115,58,32,108,105,110,101,32,37,100,58,32,115,121,110,116,97,120,32,101,114,114,111,114,10,0,37,115,58,32,108,105,110,101,32,37,100,58,32,80,114,111,103,114,97,109,32,109,117,115,116,32,98,101,32,98,101,116,119,101,101,110,32,48,32,97,110,100,32,49,50,55,10,0,37,115,58,32,108,105,110,101,32,37,100,58,32,77,117,115,116,32,115,112,101,99,105,102,121,32,116,111,110,101,32,98,97,110,107,32,111,114,32,100,114,117,109,32,115,101,116,32,98,101,102,111,114,101,32,97,115,115,105,103,110,109,101,110,116,10,0,37,115,58,32,108,105,110,101,32,37,100,58,32,98,97,100,32,112,97,116,99,104,32,111,112,116,105,111,110,32,37,115,10,0,97,109,112,0,37,115,58,32,108,105,110,101,32,37,100,58,32,97,109,112,108,105,102,105,99,97,116,105,111,110,32,109,117,115,116,32,98,101,32,98,101,116,119,101,101,110,32,48,32,97,110,100,32,37,100,10,0,110,111,116,101,0,37,115,58,32,108,105,110,101,32,37,100,58,32,110,111,116,101,32,109,117,115,116,32,98,101,32,98,101,116,119,101,101,110,32,48,32,97,110,100,32,49,50,55,10,0,112,97,110,0,99,101,110,116,101,114,0,108,101,102,116,0,114,105,103,104,116,0,37,115,58,32,108,105,110,101,32,37,100,58,32,112,97,110,110,105,110,103,32,109,117,115,116,32,98,101,32,108,101,102,116,44,32,114,105,103,104,116,44,32,99,101,110,116,101,114,44,32,111,114,32,98,101,116,119,101,101,110,32,45,49,48,48,32,97,110,100,32,49,48,48,10,0,107,101,101,112,0,101,110,118,0,108,111,111,112,0,37,115,58,32,108,105,110,101,32,37,100,58,32,107,101,101,112,32,109,117,115,116,32,98,101,32,101,110,118,32,111,114,32,108,111,111,112,10,0,115,116,114,105,112,0,116,97,105,108,0,37,115,58,32,108,105,110,101,32,37,100,58,32,115,116,114,105,112,32,109,117,115,116,32,98,101,32,101,110,118,44,32,108,111,111,112,44,32,111,114,32,116,97,105,108,10,0,85,110,115,117,112,112,111,114,116,101,100,32,97,117,100,105,111,32,102,111,114,109,97,116,10,0,17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,110,97,110,0,78,65,78,0,46,0,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0,114,119,97,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);





/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


   
  Module["_i64Subtract"] = _i64Subtract;

   
  Module["_i64Add"] = _i64Add;

   
  Module["_memset"] = _memset;

  function _pthread_cleanup_push(routine, arg) {
      __ATEXIT__.push(function() { Runtime.dynCall('vi', routine, [arg]) })
      _pthread_cleanup_push.level = __ATEXIT__.length;
    }

   
  Module["_bitshift64Lshr"] = _bitshift64Lshr;

   
  Module["_bitshift64Shl"] = _bitshift64Shl;

  function _pthread_cleanup_pop() {
      assert(_pthread_cleanup_push.level == __ATEXIT__.length, 'cannot pop if something else added meanwhile!');
      __ATEXIT__.pop();
      _pthread_cleanup_push.level = __ATEXIT__.length;
    }

  function _abort() {
      Module['abort']();
    }

  
  
  
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      else Module.printErr('failed to set errno from JS');
      return value;
    }
  
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up--; up) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function (stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = new Buffer(BUFSIZE);
              var bytesRead = 0;
  
              var isPosixPlatform = (process.platform != 'win32'); // Node doesn't offer a direct check, so test by exclusion
  
              var fd = process.stdin.fd;
              if (isPosixPlatform) {
                // Linux and Mac cannot use process.stdin.fd (which isn't set up as sync)
                var usingDevice = false;
                try {
                  fd = fs.openSync('/dev/stdin', 'r');
                  usingDevice = true;
                } catch (e) {}
              }
  
              try {
                bytesRead = fs.readSync(fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().indexOf('EOF') != -1) bytesRead = 0;
                else throw e;
              }
  
              if (usingDevice) { fs.closeSync(fd); }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
  
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function (tty) {
          if (tty.output && tty.output.length > 0) {
            Module['print'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function (tty) {
          if (tty.output && tty.output.length > 0) {
            Module['printErr'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  var MEMFS={ops_table:null,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function (node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function (node) {
        if (!node.contents) return new Uint8Array;
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function (node, newCapacity) {
        // If we are asked to expand the size of a file that already exists, revert to using a standard JS array to store the file
        // instead of a typed array. This makes resizing the array more flexible because we can just .push() elements at the back to
        // increase the size.
        if (node.contents && node.contents.subarray && newCapacity > node.contents.length) {
          node.contents = MEMFS.getFileDataAsRegularArray(node);
          node.usedBytes = node.contents.length; // We might be writing to a lazy-loaded file which had overridden this property, so force-reset it.
        }
  
        if (!node.contents || node.contents.subarray) { // Keep using a typed array if creating a new storage, or if old one was a typed array as well.
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
          // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
          // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
          // avoid overshooting the allocation cap by a very large margin.
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) | 0);
          if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity); // Allocate new storage.
          if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
          return;
        }
        // Not using a typed array to back the file storage. Use a standard JS array instead.
        if (!node.contents && newCapacity > 0) node.contents = [];
        while (node.contents.length < newCapacity) node.contents.push(0);
      },resizeFileStorage:function (node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(new ArrayBuffer(newSize)); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position); // Use typed array write if available.
          else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position+length);
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < stream.node.usedBytes) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function (stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  var IDBFS={dbs:{},indexedDB:function () {
        if (typeof indexedDB !== 'undefined') return indexedDB;
        var ret = null;
        if (typeof window === 'object') ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, 'IDBFS used, but indexedDB not supported');
        return ret;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },getDB:function (name, callback) {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback("Unable to connect to IndexedDB");
        }
        req.onupgradeneeded = function(e) {
          var db = e.target.result;
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          if (!fileStore.indexNames.contains('timestamp')) {
            fileStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
        };
        req.onsuccess = function() {
          db = req.result;
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },getLocalSet:function (mount, callback) {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { timestamp: stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:function (mount, callback) {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
  
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
          transaction.onerror = function(e) {
            callback(this.error);
            e.preventDefault();
          };
  
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
          var index = store.index('timestamp');
  
          index.openKeyCursor().onsuccess = function(event) {
            var cursor = event.target.result;
  
            if (!cursor) {
              return callback(null, { type: 'remote', db: db, entries: entries });
            }
  
            entries[cursor.primaryKey] = { timestamp: cursor.key };
  
            cursor.continue();
          };
        });
      },loadLocalEntry:function (path, callback) {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode });
        } else if (FS.isFile(stat.mode)) {
          // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
          // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { timestamp: stat.mtime, mode: stat.mode, contents: node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:function (path, entry, callback) {
        try {
          if (FS.isDir(entry.mode)) {
            FS.mkdir(path, entry.mode);
          } else if (FS.isFile(entry.mode)) {
            FS.writeFile(path, entry.contents, { encoding: 'binary', canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.chmod(path, entry.mode);
          FS.utime(path, entry.timestamp, entry.timestamp);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:function (path, callback) {
        try {
          var lookup = FS.lookupPath(path);
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:function (store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function(event) { callback(null, event.target.result); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },storeRemoteEntry:function (store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },removeRemoteEntry:function (store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },reconcile:function (src, dst, callback) {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          var e = dst.entries[key];
          var e2 = src.entries[key];
          if (!e2) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var completed = 0;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= total) {
            return callback(null);
          }
        };
  
        transaction.onerror = function(e) {
          done(this.error);
          e.preventDefault();
        };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (path) {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach(function(path) {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so
            // propagate write bits to execute bits.
            stat.mode = stat.mode | ((stat.mode & 146) >> 1);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:function (flags) {
        flags &= ~0x200000 /*O_PATH*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x800 /*O_NONBLOCK*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x8000 /*O_LARGEFILE*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x80000 /*O_CLOEXEC*/; // Some applications may pass it; it makes no sense for a single process.
        if (flags in NODEFS.flagsToPermissionStringMap) {
          return NODEFS.flagsToPermissionStringMap[flags];
        } else {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            path = fs.readlinkSync(path);
            path = NODEJS_PATH.relative(NODEJS_PATH.resolve(node.mount.opts.root), path);
            return path;
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          if (length === 0) return 0; // node errors on 0 length reads
          // FIXME this is terrible.
          var nbuffer = new Buffer(length);
          var res;
          try {
            res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (res > 0) {
            for (var i = 0; i < res; i++) {
              buffer[offset + i] = nbuffer[i];
            }
          }
          return res;
        },write:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
          var res;
          try {
            res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return res;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
  
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
  
          return position;
        }}};
  
  var WORKERFS={DIR_MODE:16895,FILE_MODE:33279,reader:null,mount:function (mount) {
        assert(ENVIRONMENT_IS_WORKER);
        if (!WORKERFS.reader) WORKERFS.reader = new FileReaderSync();
        var root = WORKERFS.createNode(null, '/', WORKERFS.DIR_MODE, 0);
        var createdParents = {};
        function ensureParent(path) {
          // return the parent node, creating subdirs as necessary
          var parts = path.split('/');
          var parent = root;
          for (var i = 0; i < parts.length-1; i++) {
            var curr = parts.slice(0, i+1).join('/');
            // Issue 4254: Using curr as a node name will prevent the node
            // from being found in FS.nameTable when FS.open is called on
            // a path which holds a child of this node,
            // given that all FS functions assume node names
            // are just their corresponding parts within their given path,
            // rather than incremental aggregates which include their parent's
            // directories.
            if (!createdParents[curr]) {
              createdParents[curr] = WORKERFS.createNode(parent, parts[i], WORKERFS.DIR_MODE, 0);
            }
            parent = createdParents[curr];
          }
          return parent;
        }
        function base(path) {
          var parts = path.split('/');
          return parts[parts.length-1];
        }
        // We also accept FileList here, by using Array.prototype
        Array.prototype.forEach.call(mount.opts["files"] || [], function(file) {
          WORKERFS.createNode(ensureParent(file.name), base(file.name), WORKERFS.FILE_MODE, 0, file, file.lastModifiedDate);
        });
        (mount.opts["blobs"] || []).forEach(function(obj) {
          WORKERFS.createNode(ensureParent(obj["name"]), base(obj["name"]), WORKERFS.FILE_MODE, 0, obj["data"]);
        });
        (mount.opts["packages"] || []).forEach(function(pack) {
          pack['metadata'].files.forEach(function(file) {
            var name = file.filename.substr(1); // remove initial slash
            WORKERFS.createNode(ensureParent(name), base(name), WORKERFS.FILE_MODE, 0, pack['blob'].slice(file.start, file.end));
          });
        });
        return root;
      },createNode:function (parent, name, mode, dev, contents, mtime) {
        var node = FS.createNode(parent, name, mode);
        node.mode = mode;
        node.node_ops = WORKERFS.node_ops;
        node.stream_ops = WORKERFS.stream_ops;
        node.timestamp = (mtime || new Date).getTime();
        assert(WORKERFS.FILE_MODE !== WORKERFS.DIR_MODE);
        if (mode === WORKERFS.FILE_MODE) {
          node.size = contents.size;
          node.contents = contents;
        } else {
          node.size = 4096;
          node.contents = {};
        }
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },node_ops:{getattr:function (node) {
          return {
            dev: 1,
            ino: undefined,
            mode: node.mode,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: undefined,
            size: node.size,
            atime: new Date(node.timestamp),
            mtime: new Date(node.timestamp),
            ctime: new Date(node.timestamp),
            blksize: 4096,
            blocks: Math.ceil(node.size / 4096),
          };
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
        },lookup:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        },mknod:function (parent, name, mode, dev) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },rename:function (oldNode, newDir, newName) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },unlink:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },rmdir:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },readdir:function (node) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },symlink:function (parent, newName, oldPath) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },readlink:function (node) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          if (position >= stream.node.size) return 0;
          var chunk = stream.node.contents.slice(position, position + length);
          var ab = WORKERFS.reader.readAsArrayBuffer(chunk);
          buffer.set(new Uint8Array(ab), offset);
          return chunk.size;
        },write:function (stream, buffer, offset, length, position) {
          throw new FS.ErrnoError(ERRNO_CODES.EIO);
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.size;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        }}};
  
  var _stdin=STATICTOP; STATICTOP += 16;;
  
  var _stdout=STATICTOP; STATICTOP += 16;;
  
  var _stderr=STATICTOP; STATICTOP += 16;;var FS={root:null,mounts:[],devices:[null],streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
          };
  
          FS.FSNode.prototype = {};
  
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
  
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); }
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); }
            }
          });
        }
  
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return !!node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        var err = FS.nodePermissions(dir, 'x');
        if (err) return err;
        if (!dir.node_ops.lookup) return ERRNO_CODES.EACCES;
        return 0;
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },getMounts:function (mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          console.log('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(err) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(err);
        }
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(err);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function (type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function (path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != ERRNO_CODES.EEXIST) throw e;
          }
        }
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        if (!PATH.resolve(oldpath)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        if (!old_dir || !new_dir) throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          console.log("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return PATH.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var err = FS.mayOpen(node, flags);
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function (stream) {
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },msync:function (stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function (stream) {
        return 0;
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, 0, opts.canOwn);
        } else if (opts.encoding === 'binary') {
          FS.write(stream, data, 0, data.length, 0, opts.canOwn);
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device;
        if (typeof crypto !== 'undefined') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          random_device = function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else if (ENVIRONMENT_IS_NODE) {
          // for nodejs
          random_device = function() { return require('crypto').randomBytes(1)[0]; };
        } else {
          // default for ES5 platforms
          random_device = function() { return (Math.random()*256)|0; };
        }
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function () {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
  
        var stdout = FS.open('/dev/stdout', 'w');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
  
        var stderr = FS.open('/dev/stderr', 'w');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          //Module.printErr(stackTrace()); // useful for debugging
          this.node = node;
          this.setErrno = function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          if (this.stack) this.stack = demangleAll(this.stack);
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
          'IDBFS': IDBFS,
          'NODEFS': NODEFS,
          'WORKERFS': WORKERFS,
        };
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        }
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        }
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(xhr.response || []);
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            console.log("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        }
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};var SYSCALLS={DEFAULT_POLLMASK:5,mappings:{},umask:511,calculateAt:function (dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function (func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -ERRNO_CODES.ENOTDIR;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        HEAP32[(((buf)+(36))>>2)]=stat.size;
        HEAP32[(((buf)+(40))>>2)]=4096;
        HEAP32[(((buf)+(44))>>2)]=stat.blocks;
        HEAP32[(((buf)+(48))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(52))>>2)]=0;
        HEAP32[(((buf)+(56))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=stat.ino;
        return 0;
      },doMsync:function (addr, stream, len, flags) {
        var buffer = new Uint8Array(HEAPU8.subarray(addr, addr + len));
        FS.msync(stream, buffer, 0, len, flags);
      },doMkdir:function (path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function (path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -ERRNO_CODES.EINVAL;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function (path, buf, bufsize) {
        if (bufsize <= 0) return -ERRNO_CODES.EINVAL;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function (path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -ERRNO_CODES.EINVAL;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -ERRNO_CODES.EACCES;
        }
        return 0;
      },doDup:function (path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:0,get:function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },getStreamFromFD:function () {
        var stream = FS.getStream(SYSCALLS.get());
        if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return stream;
      },getSocketFromFD:function () {
        var socket = SOCKFS.getSocket(SYSCALLS.get());
        if (!socket) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return socket;
      },getSocketAddress:function (allowNull) {
        var addrp = SYSCALLS.get(), addrlen = SYSCALLS.get();
        if (allowNull && addrp === 0) return null;
        var info = __read_sockaddr(addrp, addrlen);
        if (info.errno) throw new FS.ErrnoError(info.errno);
        info.addr = DNS.lookup_addr(info.addr) || info.addr;
        return info;
      },get64:function () {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },getZero:function () {
        assert(SYSCALLS.get() === 0);
      }};function ___syscall5(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // open
      var pathname = SYSCALLS.getStr(), flags = SYSCALLS.get(), mode = SYSCALLS.get() // optional TODO
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___lock() {}

  function ___unlock() {}

  function ___syscall6(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // close
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  
  var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_STATIC); 
  Module["_llvm_cttz_i32"] = _llvm_cttz_i32; 
  Module["___udivmoddi4"] = ___udivmoddi4; 
  Module["___udivdi3"] = ___udivdi3;

  var _llvm_pow_f64=Math_pow;

   
  Module["_sbrk"] = _sbrk;

   
  Module["___uremdi3"] = ___uremdi3;

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  Module["_memcpy"] = _memcpy;

   
  Module["_pthread_self"] = _pthread_self;

  function ___syscall140(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // llseek
      var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
      var offset = offset_low;
      assert(offset_high === 0);
      FS.llseek(stream, offset, whence);
      HEAP32[((result)>>2)]=stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall146(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // writev
      var stream = SYSCALLS.getStreamFromFD(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      return SYSCALLS.doWritev(stream, iov, iovcnt);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall54(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // ioctl
      var stream = SYSCALLS.getStreamFromFD(), op = SYSCALLS.get();
      switch (op) {
        case 21505: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0;
        }
        case 21506: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return -ERRNO_CODES.EINVAL; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall221(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // fcntl64
      var stream = SYSCALLS.getStreamFromFD(), cmd = SYSCALLS.get();
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -ERRNO_CODES.EINVAL;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        case 12: {
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2;
          return 0;
        }
        case 13:
        case 14:
        case 13:
        case 14:
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -ERRNO_CODES.EINVAL; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          ___setErrNo(ERRNO_CODES.EINVAL);
          return -1;
        default: {
          return -ERRNO_CODES.EINVAL;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall145(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // readv
      var stream = SYSCALLS.getStreamFromFD(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      return SYSCALLS.doReadv(stream, iov, iovcnt);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }
FS.staticInit();__ATINIT__.unshift(function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() });__ATMAIN__.push(function() { FS.ignorePermissions = false });__ATEXIT__.push(function() { FS.quit() });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
__ATINIT__.unshift(function() { TTY.init() });__ATEXIT__.push(function() { TTY.shutdown() });;
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); var NODEJS_PATH = require("path"); NODEFS.staticInit(); };
DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);

STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");



function nullFunc_ii(x) { Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viii(x) { Module["printErr"]("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { Module["printErr"]("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "nullFunc_ii": nullFunc_ii, "nullFunc_iiii": nullFunc_iiii, "nullFunc_iiiii": nullFunc_iiiii, "nullFunc_viii": nullFunc_viii, "nullFunc_vi": nullFunc_vi, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_iiiii": invoke_iiiii, "invoke_viii": invoke_viii, "invoke_vi": invoke_vi, "_pthread_cleanup_pop": _pthread_cleanup_pop, "___syscall221": ___syscall221, "_llvm_pow_f64": _llvm_pow_f64, "___lock": ___lock, "_abort": _abort, "___setErrNo": ___setErrNo, "___syscall6": ___syscall6, "___syscall140": ___syscall140, "___syscall5": ___syscall5, "_emscripten_memcpy_big": _emscripten_memcpy_big, "___syscall54": ___syscall54, "___unlock": ___unlock, "_pthread_cleanup_push": _pthread_cleanup_push, "___syscall145": ___syscall145, "___syscall146": ___syscall146, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8 };
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_iiiii=env.nullFunc_iiiii;
  var nullFunc_viii=env.nullFunc_viii;
  var nullFunc_vi=env.nullFunc_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viii=env.invoke_viii;
  var invoke_vi=env.invoke_vi;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var ___syscall221=env.___syscall221;
  var _llvm_pow_f64=env._llvm_pow_f64;
  var ___lock=env.___lock;
  var _abort=env._abort;
  var ___setErrNo=env.___setErrNo;
  var ___syscall6=env.___syscall6;
  var ___syscall140=env.___syscall140;
  var ___syscall5=env.___syscall5;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var ___syscall145=env.___syscall145;
  var ___syscall146=env.___syscall146;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
  if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function _open_file($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1056|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(1056|0);
 $4 = sp + 24|0;
 $2 = $0;
 $7 = $2;
 $8 = ($7|0)!=(0|0);
 if ($8) {
  $9 = $2;
  $10 = HEAP8[$9>>0]|0;
  $11 = ($10<<24>>24)!=(0);
  if ($11) {
   $12 = $2;
   $13 = (_fopen($12,5082)|0);
   $3 = $13;
   $14 = ($13|0)!=(0|0);
   if ($14) {
    $15 = $3;
    $1 = $15;
    $48 = $1;
    STACKTOP = sp;return ($48|0);
   }
   $16 = $2;
   $17 = HEAP8[$16>>0]|0;
   $18 = $17 << 24 >> 24;
   $19 = ($18|0)!=(47);
   L8: do {
    if ($19) {
     $20 = HEAP32[2230]|0;
     $5 = $20;
     while(1) {
      $21 = $5;
      $22 = ($21|0)!=(0|0);
      if (!($22)) {
       break L8;
      }
      HEAP8[$4>>0] = 0;
      $23 = $5;
      $24 = HEAP32[$23>>2]|0;
      $25 = (_strlen($24)|0);
      $6 = $25;
      $26 = $6;
      $27 = ($26|0)!=(0);
      if ($27) {
       $28 = $5;
       $29 = HEAP32[$28>>2]|0;
       (_strcpy($4,$29)|0);
       $30 = $6;
       $31 = (($30) - 1)|0;
       $32 = (($4) + ($31)|0);
       $33 = HEAP8[$32>>0]|0;
       $34 = $33 << 24 >> 24;
       $35 = ($34|0)!=(47);
       if ($35) {
        $36 = $6;
        $37 = (($4) + ($36)|0);
        HEAP8[$37>>0] = 47;
        $38 = $6;
        $39 = (($38) + 1)|0;
        $40 = (($4) + ($39)|0);
        HEAP8[$40>>0] = 0;
       }
      }
      $41 = $2;
      (_strcat($4,$41)|0);
      $42 = (_fopen($4,5082)|0);
      $3 = $42;
      $43 = ($42|0)!=(0|0);
      if ($43) {
       break;
      }
      $45 = $5;
      $46 = ((($45)) + 4|0);
      $47 = HEAP32[$46>>2]|0;
      $5 = $47;
     }
     $44 = $3;
     $1 = $44;
     $48 = $1;
     STACKTOP = sp;return ($48|0);
    }
   } while(0);
   $1 = 0;
   $48 = $1;
   STACKTOP = sp;return ($48|0);
  }
 }
 $1 = 0;
 $48 = $1;
 STACKTOP = sp;return ($48|0);
}
function _safe_malloc($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $3 = $1;
 $4 = (_malloc($3)|0);
 $2 = $4;
 $5 = $2;
 STACKTOP = sp;return ($5|0);
}
function _add_to_pathlist($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $3 = (_safe_malloc(8)|0);
 $2 = $3;
 $4 = $2;
 $5 = ($4|0)==(0|0);
 if ($5) {
  STACKTOP = sp;return;
 }
 $6 = $1;
 $7 = (_strlen($6)|0);
 $8 = (($7) + 1)|0;
 $9 = (_safe_malloc($8)|0);
 $10 = $2;
 HEAP32[$10>>2] = $9;
 $11 = $2;
 $12 = HEAP32[$11>>2]|0;
 $13 = ($12|0)==(0|0);
 $14 = $2;
 if ($13) {
  _free($14);
  STACKTOP = sp;return;
 } else {
  $15 = HEAP32[$14>>2]|0;
  $16 = $1;
  (_strcpy($15,$16)|0);
  $17 = HEAP32[2230]|0;
  $18 = $2;
  $19 = ((($18)) + 4|0);
  HEAP32[$19>>2] = $17;
  $20 = $2;
  HEAP32[2230] = $20;
  STACKTOP = sp;return;
 }
}
function _free_pathlist() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = HEAP32[2230]|0;
 $0 = $2;
 while(1) {
  $3 = $0;
  $4 = ($3|0)!=(0|0);
  if (!($4)) {
   break;
  }
  $5 = $0;
  $6 = ((($5)) + 4|0);
  $7 = HEAP32[$6>>2]|0;
  $1 = $7;
  $8 = $0;
  $9 = HEAP32[$8>>2]|0;
  _free($9);
  $10 = $0;
  _free($10);
  $11 = $1;
  $0 = $11;
 }
 HEAP32[2230] = 0;
 STACKTOP = sp;return;
}
function _load_instrument($0,$1,$2,$3,$4,$5,$6,$7,$8) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 $6 = $6|0;
 $7 = $7|0;
 $8 = $8|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0;
 var $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0;
 var $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0;
 var $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0;
 var $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0;
 var $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0;
 var $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0;
 var $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0;
 var $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0;
 var $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0;
 var $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0;
 var $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0;
 var $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0;
 var $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0;
 var $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0;
 var $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0.0, $498 = 0.0, $499 = 0.0;
 var $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0;
 var $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0.0, $531 = 0.0, $532 = 0.0, $533 = 0, $534 = 0, $535 = 0;
 var $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0;
 var $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0;
 var $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0;
 var $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1136|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(1136|0);
 $22 = sp + 112|0;
 $26 = sp + 111|0;
 $27 = sp + 36|0;
 $28 = sp + 108|0;
 $29 = sp + 110|0;
 $10 = $0;
 $11 = $1;
 $12 = $2;
 $13 = $3;
 $14 = $4;
 $15 = $5;
 $16 = $6;
 $17 = $7;
 $18 = $8;
 $25 = 0;
 $41 = $11;
 $42 = ($41|0)!=(0|0);
 if (!($42)) {
  $9 = 0;
  $596 = $9;
  STACKTOP = sp;return ($596|0);
 }
 $43 = $11;
 $44 = (_open_file($43)|0);
 $21 = $44;
 $45 = ($44|0)==(0|0);
 L5: do {
  if ($45) {
   $25 = 1;
   $23 = 0;
   while(1) {
    $46 = $23;
    $47 = (4104 + ($46<<2)|0);
    $48 = HEAP32[$47>>2]|0;
    $49 = ($48|0)!=(0|0);
    if (!($49)) {
     break L5;
    }
    $50 = $11;
    $51 = (_strlen($50)|0);
    $52 = $23;
    $53 = (4104 + ($52<<2)|0);
    $54 = HEAP32[$53>>2]|0;
    $55 = (_strlen($54)|0);
    $56 = (($51) + ($55))|0;
    $57 = ($56>>>0)<(1024);
    if ($57) {
     $58 = $11;
     (_strcpy($22,$58)|0);
     $59 = $23;
     $60 = (4104 + ($59<<2)|0);
     $61 = HEAP32[$60>>2]|0;
     (_strcat($22,$61)|0);
     $62 = (_open_file($22)|0);
     $21 = $62;
     $63 = ($62|0)!=(0|0);
     if ($63) {
      break;
     }
    }
    $64 = $23;
    $65 = (($64) + 1)|0;
    $23 = $65;
   }
   $25 = 0;
   $11 = $22;
  }
 } while(0);
 $66 = $25;
 $67 = ($66|0)!=(0);
 if ($67) {
  $9 = 0;
  $596 = $9;
  STACKTOP = sp;return ($596|0);
 }
 $68 = $21;
 $69 = (_fread($22,1,239,$68)|0);
 $70 = (239)!=($69|0);
 do {
  if (!($70)) {
   $71 = (_memcmp($22,5000,22)|0);
   $72 = ($71|0)!=(0);
   if ($72) {
    $73 = (_memcmp($22,5022,22)|0);
    $74 = ($73|0)!=(0);
    if ($74) {
     break;
    }
   }
   $75 = ((($22)) + 82|0);
   $76 = HEAP8[$75>>0]|0;
   $77 = $76 << 24 >> 24;
   $78 = ($77|0)!=(1);
   if ($78) {
    $79 = ((($22)) + 82|0);
    $80 = HEAP8[$79>>0]|0;
    $81 = $80 << 24 >> 24;
    $82 = ($81|0)!=(0);
    if ($82) {
     $9 = 0;
     $596 = $9;
     STACKTOP = sp;return ($596|0);
    }
   }
   $83 = ((($22)) + 151|0);
   $84 = HEAP8[$83>>0]|0;
   $85 = $84 << 24 >> 24;
   $86 = ($85|0)!=(1);
   if ($86) {
    $87 = ((($22)) + 151|0);
    $88 = HEAP8[$87>>0]|0;
    $89 = $88 << 24 >> 24;
    $90 = ($89|0)!=(0);
    if ($90) {
     $9 = 0;
     $596 = $9;
     STACKTOP = sp;return ($596|0);
    }
   }
   $91 = (_safe_malloc(8)|0);
   $19 = $91;
   $92 = ((($22)) + 198|0);
   $93 = HEAP8[$92>>0]|0;
   $94 = $93 << 24 >> 24;
   $95 = $19;
   HEAP32[$95>>2] = $94;
   $96 = $19;
   $97 = HEAP32[$96>>2]|0;
   $98 = ($97*116)|0;
   $99 = (_safe_malloc($98)|0);
   $100 = $19;
   $101 = ((($100)) + 4|0);
   HEAP32[$101>>2] = $99;
   $23 = 0;
   while(1) {
    $102 = $23;
    $103 = $19;
    $104 = HEAP32[$103>>2]|0;
    $105 = ($102|0)<($104|0);
    $106 = $21;
    if (!($105)) {
     label = 98;
     break;
    }
    (_fseek($106,7,1)|0);
    $107 = $21;
    $108 = (_fread($26,1,1,$107)|0);
    $109 = (1)!=($108|0);
    if ($109) {
     break;
    }
    $126 = $23;
    $127 = $19;
    $128 = ((($127)) + 4|0);
    $129 = HEAP32[$128>>2]|0;
    $130 = (($129) + (($126*116)|0)|0);
    $20 = $130;
    $131 = $21;
    $132 = (_fread($27,4,1,$131)|0);
    $133 = (1)!=($132|0);
    if ($133) {
     break;
    }
    $134 = HEAP32[$27>>2]|0;
    $135 = $20;
    $136 = ((($135)) + 8|0);
    HEAP32[$136>>2] = $134;
    $137 = $21;
    $138 = (_fread($27,4,1,$137)|0);
    $139 = (1)!=($138|0);
    if ($139) {
     break;
    }
    $140 = HEAP32[$27>>2]|0;
    $141 = $20;
    HEAP32[$141>>2] = $140;
    $142 = $21;
    $143 = (_fread($27,4,1,$142)|0);
    $144 = (1)!=($143|0);
    if ($144) {
     break;
    }
    $145 = HEAP32[$27>>2]|0;
    $146 = $20;
    $147 = ((($146)) + 4|0);
    HEAP32[$147>>2] = $145;
    $148 = $21;
    $149 = (_fread($28,2,1,$148)|0);
    $150 = (1)!=($149|0);
    if ($150) {
     break;
    }
    $151 = HEAP16[$28>>1]|0;
    $152 = $151&65535;
    $153 = $20;
    $154 = ((($153)) + 12|0);
    HEAP32[$154>>2] = $152;
    $155 = $21;
    $156 = (_fread($27,4,1,$155)|0);
    $157 = (1)!=($156|0);
    if ($157) {
     break;
    }
    $158 = HEAP32[$27>>2]|0;
    $159 = $20;
    $160 = ((($159)) + 24|0);
    HEAP32[$160>>2] = $158;
    $161 = $21;
    $162 = (_fread($27,4,1,$161)|0);
    $163 = (1)!=($162|0);
    if ($163) {
     break;
    }
    $164 = HEAP32[$27>>2]|0;
    $165 = $20;
    $166 = ((($165)) + 28|0);
    HEAP32[$166>>2] = $164;
    $167 = $21;
    $168 = (_fread($27,4,1,$167)|0);
    $169 = (1)!=($168|0);
    if ($169) {
     break;
    }
    $170 = HEAP32[$27>>2]|0;
    $171 = $20;
    $172 = ((($171)) + 32|0);
    HEAP32[$172>>2] = $170;
    $173 = $20;
    $174 = ((($173)) + 16|0);
    HEAP32[$174>>2] = 0;
    $175 = $20;
    $176 = ((($175)) + 20|0);
    HEAP32[$176>>2] = 127;
    $177 = $21;
    (_fseek($177,2,1)|0);
    $178 = $21;
    $179 = (_fread($29,1,1,$178)|0);
    $180 = (1)!=($179|0);
    if ($180) {
     break;
    }
    $181 = HEAP8[$29>>0]|0;
    HEAP8[$22>>0] = $181;
    $182 = $13;
    $183 = ($182|0)==(-1);
    if ($183) {
     $184 = HEAP8[$22>>0]|0;
     $185 = $184 << 24 >> 24;
     $186 = $185<<3;
     $187 = (($186) + 4)|0;
     $188 = $187 & 127;
     $189 = $188&255;
     $190 = $20;
     $191 = ((($190)) + 111|0);
     HEAP8[$191>>0] = $189;
    } else {
     $192 = $13;
     $193 = $192 & 127;
     $194 = $193&255;
     $195 = $20;
     $196 = ((($195)) + 111|0);
     HEAP8[$196>>0] = $194;
    }
    $197 = $21;
    $198 = (_fread($22,1,18,$197)|0);
    $199 = (18)!=($198|0);
    if ($199) {
     break;
    }
    $200 = ((($22)) + 13|0);
    $201 = HEAP8[$200>>0]|0;
    $202 = ($201<<24>>24)!=(0);
    do {
     if ($202) {
      $203 = ((($22)) + 14|0);
      $204 = HEAP8[$203>>0]|0;
      $205 = ($204<<24>>24)!=(0);
      if (!($205)) {
       label = 43;
       break;
      }
      $212 = $10;
      $213 = ((($22)) + 12|0);
      $214 = HEAP8[$213>>0]|0;
      $215 = (_convert_tremolo_sweep($212,$214)|0);
      $216 = $20;
      $217 = ((($216)) + 92|0);
      HEAP32[$217>>2] = $215;
      $218 = $10;
      $219 = ((($22)) + 13|0);
      $220 = HEAP8[$219>>0]|0;
      $221 = (_convert_tremolo_rate($218,$220)|0);
      $222 = $20;
      $223 = ((($222)) + 96|0);
      HEAP32[$223>>2] = $221;
      $224 = ((($22)) + 14|0);
      $225 = HEAP8[$224>>0]|0;
      $226 = $20;
      $227 = ((($226)) + 108|0);
      HEAP8[$227>>0] = $225;
     } else {
      label = 43;
     }
    } while(0);
    if ((label|0) == 43) {
     label = 0;
     $206 = $20;
     $207 = ((($206)) + 108|0);
     HEAP8[$207>>0] = 0;
     $208 = $20;
     $209 = ((($208)) + 96|0);
     HEAP32[$209>>2] = 0;
     $210 = $20;
     $211 = ((($210)) + 92|0);
     HEAP32[$211>>2] = 0;
    }
    $228 = ((($22)) + 16|0);
    $229 = HEAP8[$228>>0]|0;
    $230 = ($229<<24>>24)!=(0);
    do {
     if ($230) {
      $231 = ((($22)) + 17|0);
      $232 = HEAP8[$231>>0]|0;
      $233 = ($232<<24>>24)!=(0);
      if (!($233)) {
       label = 47;
       break;
      }
      $240 = $10;
      $241 = ((($22)) + 16|0);
      $242 = HEAP8[$241>>0]|0;
      $243 = (_convert_vibrato_rate($240,$242)|0);
      $244 = $20;
      $245 = ((($244)) + 104|0);
      HEAP32[$245>>2] = $243;
      $246 = $10;
      $247 = ((($22)) + 15|0);
      $248 = HEAP8[$247>>0]|0;
      $249 = $20;
      $250 = ((($249)) + 104|0);
      $251 = HEAP32[$250>>2]|0;
      $252 = (_convert_vibrato_sweep($246,$248,$251)|0);
      $253 = $20;
      $254 = ((($253)) + 100|0);
      HEAP32[$254>>2] = $252;
      $255 = ((($22)) + 17|0);
      $256 = HEAP8[$255>>0]|0;
      $257 = $20;
      $258 = ((($257)) + 109|0);
      HEAP8[$258>>0] = $256;
     } else {
      label = 47;
     }
    } while(0);
    if ((label|0) == 47) {
     label = 0;
     $234 = $20;
     $235 = ((($234)) + 109|0);
     HEAP8[$235>>0] = 0;
     $236 = $20;
     $237 = ((($236)) + 104|0);
     HEAP32[$237>>2] = 0;
     $238 = $20;
     $239 = ((($238)) + 100|0);
     HEAP32[$239>>2] = 0;
    }
    $259 = $21;
    $260 = (_fread($29,1,1,$259)|0);
    $261 = (1)!=($260|0);
    if ($261) {
     break;
    }
    $262 = HEAP8[$29>>0]|0;
    $263 = $20;
    $264 = ((($263)) + 110|0);
    HEAP8[$264>>0] = $262;
    $265 = $21;
    (_fseek($265,40,1)|0);
    $266 = $15;
    $267 = ($266|0)!=(-1);
    if ($267) {
     $268 = $15;
     $269 = $268&255;
     $270 = $20;
     $271 = ((($270)) + 112|0);
     HEAP8[$271>>0] = $269;
    } else {
     $272 = $20;
     $273 = ((($272)) + 112|0);
     HEAP8[$273>>0] = 0;
    }
    $274 = $20;
    $275 = ((($274)) + 110|0);
    $276 = HEAP8[$275>>0]|0;
    $277 = $276&255;
    $278 = $277 & 4;
    $279 = ($278|0)!=(0);
    if ($279) {
     $280 = $20;
     $281 = ((($280)) + 110|0);
     $282 = HEAP8[$281>>0]|0;
     $283 = $282&255;
     $284 = $283 | 32;
     $285 = $284&255;
     HEAP8[$281>>0] = $285;
    }
    $286 = $16;
    $287 = ($286|0)==(1);
    do {
     if ($287) {
      $288 = $20;
      $289 = ((($288)) + 110|0);
      $290 = HEAP8[$289>>0]|0;
      $291 = $290&255;
      $292 = $291 & 60;
      $293 = ($292|0)!=(0);
      if (!($293)) {
       break;
      }
      $294 = $20;
      $295 = ((($294)) + 110|0);
      $296 = HEAP8[$295>>0]|0;
      $297 = $296&255;
      $298 = $297 & -61;
      $299 = $298&255;
      HEAP8[$295>>0] = $299;
     }
    } while(0);
    $300 = $17;
    $301 = ($300|0)==(1);
    L75: do {
     if ($301) {
      $302 = $20;
      $303 = ((($302)) + 110|0);
      $304 = HEAP8[$303>>0]|0;
      $305 = $304&255;
      $306 = $305 & -65;
      $307 = $306&255;
      HEAP8[$303>>0] = $307;
     } else {
      $308 = $17;
      $309 = ($308|0)!=(0);
      if (!($309)) {
       break;
      }
      $310 = $20;
      $311 = ((($310)) + 110|0);
      $312 = HEAP8[$311>>0]|0;
      $313 = $312&255;
      $314 = $313 & 28;
      $315 = ($314|0)!=(0);
      if (!($315)) {
       $316 = $20;
       $317 = ((($316)) + 110|0);
       $318 = HEAP8[$317>>0]|0;
       $319 = $318&255;
       $320 = $319 & -97;
       $321 = $320&255;
       HEAP8[$317>>0] = $321;
       break;
      }
      $322 = (_memcmp($22,5044,6)|0);
      $323 = ($322|0)!=(0);
      do {
       if ($323) {
        $324 = ((($22)) + 11|0);
        $325 = HEAP8[$324>>0]|0;
        $326 = $325 << 24 >> 24;
        $327 = ($326|0)>=(100);
        if ($327) {
         break;
        }
        $334 = $20;
        $335 = ((($334)) + 110|0);
        $336 = HEAP8[$335>>0]|0;
        $337 = $336&255;
        $338 = $337 & 32;
        $339 = ($338|0)!=(0);
        if ($339) {
         break L75;
        }
        $340 = $20;
        $341 = ((($340)) + 110|0);
        $342 = HEAP8[$341>>0]|0;
        $343 = $342&255;
        $344 = $343 & -65;
        $345 = $344&255;
        HEAP8[$341>>0] = $345;
        break L75;
       }
      } while(0);
      $328 = $20;
      $329 = ((($328)) + 110|0);
      $330 = HEAP8[$329>>0]|0;
      $331 = $330&255;
      $332 = $331 & -65;
      $333 = $332&255;
      HEAP8[$329>>0] = $333;
     }
    } while(0);
    $24 = 0;
    while(1) {
     $346 = $24;
     $347 = ($346|0)<(6);
     if (!($347)) {
      break;
     }
     $348 = $10;
     $349 = $24;
     $350 = (($22) + ($349)|0);
     $351 = HEAP8[$350>>0]|0;
     $352 = (_convert_envelope_rate($348,$351)|0);
     $353 = $24;
     $354 = $20;
     $355 = ((($354)) + 36|0);
     $356 = (($355) + ($353<<2)|0);
     HEAP32[$356>>2] = $352;
     $357 = $24;
     $358 = (6 + ($357))|0;
     $359 = (($22) + ($358)|0);
     $360 = HEAP8[$359>>0]|0;
     $361 = (_convert_envelope_offset($360)|0);
     $362 = $24;
     $363 = $20;
     $364 = ((($363)) + 60|0);
     $365 = (($364) + ($362<<2)|0);
     HEAP32[$365>>2] = $361;
     $366 = $24;
     $367 = (($366) + 1)|0;
     $24 = $367;
    }
    $368 = $20;
    $369 = ((($368)) + 8|0);
    $370 = HEAP32[$369>>2]|0;
    $371 = (_safe_malloc($370)|0);
    $372 = $20;
    $373 = ((($372)) + 88|0);
    HEAP32[$373>>2] = $371;
    $374 = $20;
    $375 = ((($374)) + 88|0);
    $376 = HEAP32[$375>>2]|0;
    $377 = $20;
    $378 = ((($377)) + 8|0);
    $379 = HEAP32[$378>>2]|0;
    $380 = $21;
    $381 = (_fread($376,$379,1,$380)|0);
    $382 = (1)!=($381|0);
    if ($382) {
     break;
    }
    $383 = $20;
    $384 = ((($383)) + 110|0);
    $385 = HEAP8[$384>>0]|0;
    $386 = $385&255;
    $387 = $386 & 1;
    $388 = ($387|0)!=(0);
    if (!($388)) {
     $389 = $20;
     $390 = ((($389)) + 8|0);
     $391 = HEAP32[$390>>2]|0;
     $30 = $391;
     $392 = $20;
     $393 = ((($392)) + 88|0);
     $394 = HEAP32[$393>>2]|0;
     $31 = $394;
     $395 = $20;
     $396 = ((($395)) + 8|0);
     $397 = HEAP32[$396>>2]|0;
     $398 = $397<<1;
     $399 = (_safe_malloc($398)|0);
     $33 = $399;
     $32 = $399;
     while(1) {
      $400 = $30;
      $401 = (($400) + -1)|0;
      $30 = $401;
      $402 = ($400|0)!=(0);
      if (!($402)) {
       break;
      }
      $403 = $31;
      $404 = ((($403)) + 1|0);
      $31 = $404;
      $405 = HEAP8[$403>>0]|0;
      $406 = $405&255;
      $407 = $406&65535;
      $408 = $407 << 8;
      $409 = $408&65535;
      $410 = $32;
      $411 = ((($410)) + 2|0);
      $32 = $411;
      HEAP16[$410>>1] = $409;
     }
     $412 = $20;
     $413 = ((($412)) + 88|0);
     $414 = HEAP32[$413>>2]|0;
     $31 = $414;
     $415 = $33;
     $416 = $20;
     $417 = ((($416)) + 88|0);
     HEAP32[$417>>2] = $415;
     $418 = $31;
     _free($418);
     $419 = $20;
     $420 = ((($419)) + 8|0);
     $421 = HEAP32[$420>>2]|0;
     $422 = $421<<1;
     HEAP32[$420>>2] = $422;
     $423 = $20;
     $424 = HEAP32[$423>>2]|0;
     $425 = $424<<1;
     HEAP32[$423>>2] = $425;
     $426 = $20;
     $427 = ((($426)) + 4|0);
     $428 = HEAP32[$427>>2]|0;
     $429 = $428<<1;
     HEAP32[$427>>2] = $429;
    }
    $430 = $20;
    $431 = ((($430)) + 110|0);
    $432 = HEAP8[$431>>0]|0;
    $433 = $432&255;
    $434 = $433 & 2;
    $435 = ($434|0)!=(0);
    L100: do {
     if ($435) {
      $436 = $20;
      $437 = ((($436)) + 8|0);
      $438 = HEAP32[$437>>2]|0;
      $439 = (($438|0) / 2)&-1;
      $34 = $439;
      $440 = $20;
      $441 = ((($440)) + 88|0);
      $442 = HEAP32[$441>>2]|0;
      $35 = $442;
      while(1) {
       $443 = $34;
       $444 = (($443) + -1)|0;
       $34 = $444;
       $445 = ($443|0)!=(0);
       if (!($445)) {
        break L100;
       }
       $446 = $35;
       $447 = ((($446)) + 2|0);
       $35 = $447;
       $448 = HEAP16[$446>>1]|0;
       $449 = $448 << 16 >> 16;
       $450 = $449 ^ 32768;
       $451 = $450&65535;
       HEAP16[$446>>1] = $451;
      }
     }
    } while(0);
    $452 = $20;
    $453 = ((($452)) + 110|0);
    $454 = HEAP8[$453>>0]|0;
    $455 = $454&255;
    $456 = $455 & 16;
    $457 = ($456|0)!=(0);
    if ($457) {
     $458 = $20;
     $459 = ((($458)) + 88|0);
     $460 = HEAP32[$459>>2]|0;
     $461 = $20;
     $462 = ((($461)) + 8|0);
     $463 = HEAP32[$462>>2]|0;
     $464 = (($463|0) / 2)&-1;
     _reverse_data($460,0,$464);
     $465 = $20;
     $466 = HEAP32[$465>>2]|0;
     $36 = $466;
     $467 = $20;
     $468 = ((($467)) + 8|0);
     $469 = HEAP32[$468>>2]|0;
     $470 = $20;
     $471 = ((($470)) + 4|0);
     $472 = HEAP32[$471>>2]|0;
     $473 = (($469) - ($472))|0;
     $474 = $20;
     HEAP32[$474>>2] = $473;
     $475 = $20;
     $476 = ((($475)) + 8|0);
     $477 = HEAP32[$476>>2]|0;
     $478 = $36;
     $479 = (($477) - ($478))|0;
     $480 = $20;
     $481 = ((($480)) + 4|0);
     HEAP32[$481>>2] = $479;
     $482 = $20;
     $483 = ((($482)) + 110|0);
     $484 = HEAP8[$483>>0]|0;
     $485 = $484&255;
     $486 = $485 & -17;
     $487 = $486&255;
     HEAP8[$483>>0] = $487;
     $488 = $20;
     $489 = ((($488)) + 110|0);
     $490 = HEAP8[$489>>0]|0;
     $491 = $490&255;
     $492 = $491 | 4;
     $493 = $492&255;
     HEAP8[$489>>0] = $493;
    }
    $494 = $14;
    $495 = ($494|0)!=(-1);
    if ($495) {
     $496 = $14;
     $497 = (+($496|0));
     $498 = $497 / 100.0;
     $499 = $498;
     $500 = $20;
     $501 = ((($500)) + 84|0);
     HEAPF32[$501>>2] = $499;
    } else {
     $502 = $20;
     $503 = ((($502)) + 8|0);
     $504 = HEAP32[$503>>2]|0;
     $505 = (($504|0) / 2)&-1;
     $37 = $505;
     $38 = 0;
     $506 = $20;
     $507 = ((($506)) + 88|0);
     $508 = HEAP32[$507>>2]|0;
     $40 = $508;
     while(1) {
      $509 = $37;
      $510 = (($509) + -1)|0;
      $37 = $510;
      $511 = ($509|0)!=(0);
      if (!($511)) {
       break;
      }
      $512 = $40;
      $513 = ((($512)) + 2|0);
      $40 = $513;
      $514 = HEAP16[$512>>1]|0;
      $39 = $514;
      $515 = $39;
      $516 = $515 << 16 >> 16;
      $517 = ($516|0)<(0);
      if ($517) {
       $518 = $39;
       $519 = $518 << 16 >> 16;
       $520 = (0 - ($519))|0;
       $521 = $520&65535;
       $39 = $521;
      }
      $522 = $39;
      $523 = $522 << 16 >> 16;
      $524 = $38;
      $525 = $524 << 16 >> 16;
      $526 = ($523|0)>($525|0);
      if (!($526)) {
       continue;
      }
      $527 = $39;
      $38 = $527;
     }
     $528 = $38;
     $529 = $528 << 16 >> 16;
     $530 = (+($529|0));
     $531 = 32768.0 / $530;
     $532 = $531;
     $533 = $20;
     $534 = ((($533)) + 84|0);
     HEAPF32[$534>>2] = $532;
    }
    $535 = $20;
    $536 = ((($535)) + 8|0);
    $537 = HEAP32[$536>>2]|0;
    $538 = (($537|0) / 2)&-1;
    HEAP32[$536>>2] = $538;
    $539 = $20;
    $540 = HEAP32[$539>>2]|0;
    $541 = (($540|0) / 2)&-1;
    HEAP32[$539>>2] = $541;
    $542 = $20;
    $543 = ((($542)) + 4|0);
    $544 = HEAP32[$543>>2]|0;
    $545 = (($544|0) / 2)&-1;
    HEAP32[$543>>2] = $545;
    $546 = $20;
    $547 = ((($546)) + 8|0);
    $548 = HEAP32[$547>>2]|0;
    $549 = $548 << 12;
    HEAP32[$547>>2] = $549;
    $550 = $20;
    $551 = HEAP32[$550>>2]|0;
    $552 = $551 << 12;
    HEAP32[$550>>2] = $552;
    $553 = $20;
    $554 = ((($553)) + 4|0);
    $555 = HEAP32[$554>>2]|0;
    $556 = $555 << 12;
    HEAP32[$554>>2] = $556;
    $557 = HEAP8[$26>>0]|0;
    $558 = $557&255;
    $559 = $558 & 15;
    $560 = $559 << 8;
    $561 = $20;
    $562 = HEAP32[$561>>2]|0;
    $563 = $562 | $560;
    HEAP32[$561>>2] = $563;
    $564 = HEAP8[$26>>0]|0;
    $565 = $564&255;
    $566 = $565 >> 4;
    $567 = $566 & 15;
    $568 = $567 << 8;
    $569 = $20;
    $570 = ((($569)) + 4|0);
    $571 = HEAP32[$570>>2]|0;
    $572 = $571 | $568;
    HEAP32[$570>>2] = $572;
    $573 = $20;
    $574 = ((($573)) + 112|0);
    $575 = HEAP8[$574>>0]|0;
    $576 = $575 << 24 >> 24;
    $577 = ($576|0)!=(0);
    do {
     if ($577) {
      $578 = $20;
      $579 = ((($578)) + 110|0);
      $580 = HEAP8[$579>>0]|0;
      $581 = $580&255;
      $582 = $581 & 4;
      $583 = ($582|0)!=(0);
      if ($583) {
       break;
      }
      $584 = $10;
      $585 = $20;
      _pre_resample($584,$585);
     }
    } while(0);
    $586 = $18;
    $587 = ($586|0)==(1);
    if ($587) {
     $588 = $20;
     $589 = ((($588)) + 4|0);
     $590 = HEAP32[$589>>2]|0;
     $591 = $20;
     $592 = ((($591)) + 8|0);
     HEAP32[$592>>2] = $590;
    }
    $593 = $23;
    $594 = (($593) + 1)|0;
    $23 = $594;
   }
   if ((label|0) == 98) {
    (_fclose($106)|0);
    $595 = $19;
    $9 = $595;
    $596 = $9;
    STACKTOP = sp;return ($596|0);
   }
   $24 = 0;
   while(1) {
    $110 = $24;
    $111 = $23;
    $112 = ($110|0)<($111|0);
    if (!($112)) {
     break;
    }
    $113 = $24;
    $114 = $19;
    $115 = ((($114)) + 4|0);
    $116 = HEAP32[$115>>2]|0;
    $117 = (($116) + (($113*116)|0)|0);
    $118 = ((($117)) + 88|0);
    $119 = HEAP32[$118>>2]|0;
    _free($119);
    $120 = $24;
    $121 = (($120) + 1)|0;
    $24 = $121;
   }
   $122 = $19;
   $123 = ((($122)) + 4|0);
   $124 = HEAP32[$123>>2]|0;
   _free($124);
   $125 = $19;
   _free($125);
   $9 = 0;
   $596 = $9;
   STACKTOP = sp;return ($596|0);
  }
 } while(0);
 $9 = 0;
 $596 = $9;
 STACKTOP = sp;return ($596|0);
}
function _convert_tremolo_sweep($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $4;
 $6 = ($5<<24>>24)!=(0);
 if ($6) {
  $7 = $3;
  $8 = ((($7)) + 13060|0);
  $9 = HEAP32[$8>>2]|0;
  $10 = ($9*38)|0;
  $11 = $10 << 16;
  $12 = $3;
  $13 = ((($12)) + 4|0);
  $14 = HEAP32[$13>>2]|0;
  $15 = $4;
  $16 = $15&255;
  $17 = Math_imul($14, $16)|0;
  $18 = (($11|0) / ($17|0))&-1;
  $2 = $18;
  $19 = $2;
  STACKTOP = sp;return ($19|0);
 } else {
  $2 = 0;
  $19 = $2;
  STACKTOP = sp;return ($19|0);
 }
 return (0)|0;
}
function _convert_tremolo_rate($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2;
 $5 = ((($4)) + 13060|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = $6<<10;
 $8 = $3;
 $9 = $8&255;
 $10 = Math_imul($7, $9)|0;
 $11 = $10 << 5;
 $12 = $2;
 $13 = ((($12)) + 4|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = ($14*38)|0;
 $16 = (($11|0) / ($15|0))&-1;
 STACKTOP = sp;return ($16|0);
}
function _convert_vibrato_rate($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2;
 $5 = ((($4)) + 4|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ($6*38)|0;
 $8 = $3;
 $9 = $8&255;
 $10 = $9<<1;
 $11 = $10<<5;
 $12 = (($7|0) / ($11|0))&-1;
 STACKTOP = sp;return ($12|0);
}
function _convert_vibrato_sweep($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0.0, $22 = 0.0, $23 = 0, $24 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $5;
 $8 = ($7<<24>>24)!=(0);
 if ($8) {
  $9 = $6;
  $10 = (+($9|0));
  $11 = $10 * 38.0;
  $12 = $11 * 65536.0;
  $13 = $12;
  $14 = $13;
  $15 = $4;
  $16 = ((($15)) + 4|0);
  $17 = HEAP32[$16>>2]|0;
  $18 = $5;
  $19 = $18&255;
  $20 = Math_imul($17, $19)|0;
  $21 = (+($20|0));
  $22 = $14 / $21;
  $23 = (~~(($22)));
  $3 = $23;
  $24 = $3;
  STACKTOP = sp;return ($24|0);
 } else {
  $3 = 0;
  $24 = $3;
  STACKTOP = sp;return ($24|0);
 }
 return (0)|0;
}
function _convert_envelope_rate($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $5 = $3;
 $6 = $5&255;
 $7 = $6 >> 6;
 $8 = $7 & 3;
 $9 = (3 - ($8))|0;
 $4 = $9;
 $10 = $4;
 $11 = ($10*3)|0;
 $4 = $11;
 $12 = $3;
 $13 = $12&255;
 $14 = $13 & 63;
 $15 = $4;
 $16 = $14 << $15;
 $4 = $16;
 $17 = $4;
 $18 = ($17*44100)|0;
 $19 = $2;
 $20 = ((($19)) + 4|0);
 $21 = HEAP32[$20>>2]|0;
 $22 = (($18|0) / ($21|0))&-1;
 $23 = $2;
 $24 = ((($23)) + 13060|0);
 $25 = HEAP32[$24>>2]|0;
 $26 = Math_imul($22, $25)|0;
 $4 = $26;
 $27 = $4;
 $28 = $27 << 10;
 STACKTOP = sp;return ($28|0);
}
function _convert_envelope_offset($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = $2&255;
 $4 = $3 << 22;
 STACKTOP = sp;return ($4|0);
}
function _reverse_data($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $3;
 $9 = $5;
 $10 = (($8) + ($9<<1)|0);
 $7 = $10;
 $11 = $4;
 $12 = $3;
 $13 = (($12) + ($11<<1)|0);
 $3 = $13;
 $14 = $4;
 $15 = $5;
 $16 = (($15) - ($14))|0;
 $5 = $16;
 $17 = $5;
 $18 = (($17|0) / 2)&-1;
 $5 = $18;
 while(1) {
  $19 = $5;
  $20 = (($19) + -1)|0;
  $5 = $20;
  $21 = ($19|0)!=(0);
  if (!($21)) {
   break;
  }
  $22 = $3;
  $23 = HEAP16[$22>>1]|0;
  $6 = $23;
  $24 = $7;
  $25 = HEAP16[$24>>1]|0;
  $26 = $3;
  $27 = ((($26)) + 2|0);
  $3 = $27;
  HEAP16[$26>>1] = $25;
  $28 = $6;
  $29 = $7;
  $30 = ((($29)) + -2|0);
  $7 = $30;
  HEAP16[$29>>1] = $28;
 }
 STACKTOP = sp;return;
}
function _mid_song_get_num_missing_instruments($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ((($2)) + 13136|0);
 $4 = HEAP32[$3>>2]|0;
 STACKTOP = sp;return ($4|0);
}
function _mid_song_get_missing_instrument($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $4;
 $6 = ($5|0)>=(0);
 if ($6) {
  $7 = $4;
  $8 = $3;
  $9 = ((($8)) + 13136|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ($7|0)<($10|0);
  if ($11) {
   $12 = $4;
   $13 = $3;
   $14 = ((($13)) + 13140|0);
   $15 = (($14) + ($12<<2)|0);
   $16 = HEAP32[$15>>2]|0;
   $2 = $16;
   $17 = $2;
   STACKTOP = sp;return ($17|0);
  }
 }
 $2 = 0;
 $17 = $2;
 STACKTOP = sp;return ($17|0);
}
function _load_missing_instruments($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = 128;
 $3 = 0;
 $4 = $1;
 $5 = ((($4)) + 13136|0);
 HEAP32[$5>>2] = 0;
 while(1) {
  $6 = $2;
  $7 = (($6) + -1)|0;
  $2 = $7;
  $8 = ($6|0)!=(0);
  if (!($8)) {
   break;
  }
  $9 = $2;
  $10 = $1;
  $11 = ((($10)) + 28|0);
  $12 = (($11) + ($9<<2)|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ($13|0)!=(0|0);
  if ($14) {
   $15 = $1;
   $16 = $2;
   $17 = (_fill_bank($15,0,$16)|0);
   $18 = $3;
   $19 = (($18) + ($17))|0;
   $3 = $19;
  }
  $20 = $2;
  $21 = $1;
  $22 = ((($21)) + 540|0);
  $23 = (($22) + ($20<<2)|0);
  $24 = HEAP32[$23>>2]|0;
  $25 = ($24|0)!=(0|0);
  if (!($25)) {
   continue;
  }
  $26 = $1;
  $27 = $2;
  $28 = (_fill_bank($26,1,$27)|0);
  $29 = $3;
  $30 = (($29) + ($28))|0;
  $3 = $30;
 }
 $31 = $3;
 STACKTOP = sp;return ($31|0);
}
function _fill_bank($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $8 = 0;
 $10 = $5;
 $11 = ($10|0)!=(0);
 $12 = $6;
 $13 = $4;
 if ($11) {
  $14 = ((($13)) + 540|0);
  $15 = (($14) + ($12<<2)|0);
  $16 = HEAP32[$15>>2]|0;
  $20 = $16;
 } else {
  $17 = ((($13)) + 28|0);
  $18 = (($17) + ($12<<2)|0);
  $19 = HEAP32[$18>>2]|0;
  $20 = $19;
 }
 $9 = $20;
 $21 = $9;
 $22 = ($21|0)!=(0|0);
 if (!($22)) {
  $3 = 0;
  $197 = $3;
  STACKTOP = sp;return ($197|0);
 }
 $7 = 0;
 while(1) {
  $23 = $7;
  $24 = ($23|0)<(128);
  if (!($24)) {
   break;
  }
  $25 = $7;
  $26 = $9;
  $27 = ((($26)) + 4|0);
  $28 = (($27) + ($25<<2)|0);
  $29 = HEAP32[$28>>2]|0;
  $30 = ($29|0)==((-1)|0);
  do {
   if ($30) {
    $31 = $4;
    $32 = $5;
    $33 = $6;
    $34 = $7;
    $35 = (_load_instrument_dls($31,$32,$33,$34)|0);
    $36 = $7;
    $37 = $9;
    $38 = ((($37)) + 4|0);
    $39 = (($38) + ($36<<2)|0);
    HEAP32[$39>>2] = $35;
    $40 = $7;
    $41 = $9;
    $42 = ((($41)) + 4|0);
    $43 = (($42) + ($40<<2)|0);
    $44 = HEAP32[$43>>2]|0;
    $45 = ($44|0)!=(0|0);
    if (!($45)) {
     $46 = $7;
     $47 = $9;
     $48 = HEAP32[$47>>2]|0;
     $49 = (($48) + (($46*28)|0)|0);
     $50 = HEAP32[$49>>2]|0;
     $51 = ($50|0)!=(0|0);
     if (!($51)) {
      $52 = $6;
      $53 = ($52|0)!=(0);
      do {
       if ($53) {
        $54 = $5;
        $55 = ($54|0)!=(0);
        $56 = $7;
        $57 = $4;
        if ($55) {
         $70 = ((($57)) + 540|0);
         $71 = HEAP32[$70>>2]|0;
         $72 = ((($71)) + 4|0);
         $73 = (($72) + ($56<<2)|0);
         $74 = HEAP32[$73>>2]|0;
         $75 = ($74|0)!=(0|0);
         if ($75) {
          break;
         }
         $76 = $7;
         $77 = $4;
         $78 = ((($77)) + 540|0);
         $79 = HEAP32[$78>>2]|0;
         $80 = ((($79)) + 4|0);
         $81 = (($80) + ($76<<2)|0);
         HEAP32[$81>>2] = (-1);
         break;
        } else {
         $58 = ((($57)) + 28|0);
         $59 = HEAP32[$58>>2]|0;
         $60 = ((($59)) + 4|0);
         $61 = (($60) + ($56<<2)|0);
         $62 = HEAP32[$61>>2]|0;
         $63 = ($62|0)!=(0|0);
         if ($63) {
          break;
         }
         $64 = $7;
         $65 = $4;
         $66 = ((($65)) + 28|0);
         $67 = HEAP32[$66>>2]|0;
         $68 = ((($67)) + 4|0);
         $69 = (($68) + ($64<<2)|0);
         HEAP32[$69>>2] = (-1);
         break;
        }
       }
      } while(0);
      $82 = $7;
      $83 = $9;
      $84 = ((($83)) + 4|0);
      $85 = (($84) + ($82<<2)|0);
      HEAP32[$85>>2] = 0;
      $86 = $8;
      $87 = (($86) + 1)|0;
      $8 = $87;
      break;
     }
     $88 = $4;
     $89 = $7;
     $90 = $9;
     $91 = HEAP32[$90>>2]|0;
     $92 = (($91) + (($89*28)|0)|0);
     $93 = HEAP32[$92>>2]|0;
     $94 = $5;
     $95 = ($94|0)!=(0);
     $96 = $95 ? 1 : 0;
     $97 = $7;
     $98 = $9;
     $99 = HEAP32[$98>>2]|0;
     $100 = (($99) + (($97*28)|0)|0);
     $101 = ((($100)) + 12|0);
     $102 = HEAP32[$101>>2]|0;
     $103 = $7;
     $104 = $9;
     $105 = HEAP32[$104>>2]|0;
     $106 = (($105) + (($103*28)|0)|0);
     $107 = ((($106)) + 8|0);
     $108 = HEAP32[$107>>2]|0;
     $109 = $7;
     $110 = $9;
     $111 = HEAP32[$110>>2]|0;
     $112 = (($111) + (($109*28)|0)|0);
     $113 = ((($112)) + 4|0);
     $114 = HEAP32[$113>>2]|0;
     $115 = ($114|0)!=(-1);
     if ($115) {
      $116 = $7;
      $117 = $9;
      $118 = HEAP32[$117>>2]|0;
      $119 = (($118) + (($116*28)|0)|0);
      $120 = ((($119)) + 4|0);
      $121 = HEAP32[$120>>2]|0;
      $164 = $121;
     } else {
      $122 = $5;
      $123 = ($122|0)!=(0);
      $124 = $7;
      $125 = $123 ? $124 : -1;
      $164 = $125;
     }
     $126 = $7;
     $127 = $9;
     $128 = HEAP32[$127>>2]|0;
     $129 = (($128) + (($126*28)|0)|0);
     $130 = ((($129)) + 16|0);
     $131 = HEAP32[$130>>2]|0;
     $132 = ($131|0)!=(-1);
     if ($132) {
      $133 = $7;
      $134 = $9;
      $135 = HEAP32[$134>>2]|0;
      $136 = (($135) + (($133*28)|0)|0);
      $137 = ((($136)) + 16|0);
      $138 = HEAP32[$137>>2]|0;
      $165 = $138;
     } else {
      $139 = $5;
      $140 = ($139|0)!=(0);
      $141 = $140 ? 1 : -1;
      $165 = $141;
     }
     $142 = $7;
     $143 = $9;
     $144 = HEAP32[$143>>2]|0;
     $145 = (($144) + (($142*28)|0)|0);
     $146 = ((($145)) + 20|0);
     $147 = HEAP32[$146>>2]|0;
     $148 = ($147|0)!=(-1);
     if ($148) {
      $149 = $7;
      $150 = $9;
      $151 = HEAP32[$150>>2]|0;
      $152 = (($151) + (($149*28)|0)|0);
      $153 = ((($152)) + 20|0);
      $154 = HEAP32[$153>>2]|0;
      $166 = $154;
     } else {
      $155 = $5;
      $156 = ($155|0)!=(0);
      $157 = $156 ? 1 : -1;
      $166 = $157;
     }
     $158 = $7;
     $159 = $9;
     $160 = HEAP32[$159>>2]|0;
     $161 = (($160) + (($158*28)|0)|0);
     $162 = ((($161)) + 24|0);
     $163 = HEAP32[$162>>2]|0;
     $167 = (_load_instrument($88,$93,$96,$102,$108,$164,$165,$166,$163)|0);
     $168 = $7;
     $169 = $9;
     $170 = ((($169)) + 4|0);
     $171 = (($170) + ($168<<2)|0);
     HEAP32[$171>>2] = $167;
     $172 = ($167|0)!=(0|0);
     if (!($172)) {
      $173 = $4;
      $174 = ((($173)) + 13136|0);
      $175 = HEAP32[$174>>2]|0;
      $176 = ($175|0)<(256);
      if ($176) {
       $177 = $7;
       $178 = $9;
       $179 = HEAP32[$178>>2]|0;
       $180 = (($179) + (($177*28)|0)|0);
       $181 = HEAP32[$180>>2]|0;
       $182 = $4;
       $183 = ((($182)) + 13136|0);
       $184 = HEAP32[$183>>2]|0;
       $185 = $4;
       $186 = ((($185)) + 13140|0);
       $187 = (($186) + ($184<<2)|0);
       HEAP32[$187>>2] = $181;
       $188 = $4;
       $189 = ((($188)) + 13136|0);
       $190 = HEAP32[$189>>2]|0;
       $191 = (($190) + 1)|0;
       HEAP32[$189>>2] = $191;
      }
      $192 = $8;
      $193 = (($192) + 1)|0;
      $8 = $193;
     }
    }
   }
  } while(0);
  $194 = $7;
  $195 = (($194) + 1)|0;
  $7 = $195;
 }
 $196 = $8;
 $3 = $196;
 $197 = $3;
 STACKTOP = sp;return ($197|0);
}
function _free_instruments($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = 128;
 while(1) {
  $3 = $2;
  $4 = (($3) + -1)|0;
  $2 = $4;
  $5 = ($3|0)!=(0);
  if (!($5)) {
   break;
  }
  $6 = $2;
  $7 = $1;
  $8 = ((($7)) + 28|0);
  $9 = (($8) + ($6<<2)|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ($10|0)!=(0|0);
  if ($11) {
   $12 = $1;
   $13 = $2;
   _free_bank($12,0,$13);
  }
  $14 = $2;
  $15 = $1;
  $16 = ((($15)) + 540|0);
  $17 = (($16) + ($14<<2)|0);
  $18 = HEAP32[$17>>2]|0;
  $19 = ($18|0)!=(0|0);
  if (!($19)) {
   continue;
  }
  $20 = $1;
  $21 = $2;
  _free_bank($20,1,$21);
 }
 STACKTOP = sp;return;
}
function _free_bank($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $4;
 $9 = ($8|0)!=(0);
 $10 = $5;
 $11 = $3;
 if ($9) {
  $12 = ((($11)) + 540|0);
  $13 = (($12) + ($10<<2)|0);
  $14 = HEAP32[$13>>2]|0;
  $18 = $14;
 } else {
  $15 = ((($11)) + 28|0);
  $16 = (($15) + ($10<<2)|0);
  $17 = HEAP32[$16>>2]|0;
  $18 = $17;
 }
 $7 = $18;
 $6 = 0;
 while(1) {
  $19 = $6;
  $20 = ($19|0)<(128);
  if (!($20)) {
   break;
  }
  $21 = $6;
  $22 = $7;
  $23 = ((($22)) + 4|0);
  $24 = (($23) + ($21<<2)|0);
  $25 = HEAP32[$24>>2]|0;
  $26 = ($25|0)!=(0|0);
  if ($26) {
   $27 = $6;
   $28 = $7;
   $29 = ((($28)) + 4|0);
   $30 = (($29) + ($27<<2)|0);
   $31 = HEAP32[$30>>2]|0;
   $32 = ($31|0)!=((-1)|0);
   if ($32) {
    $33 = $6;
    $34 = $7;
    $35 = ((($34)) + 4|0);
    $36 = (($35) + ($33<<2)|0);
    $37 = HEAP32[$36>>2]|0;
    _free_instrument($37);
   }
   $38 = $6;
   $39 = $7;
   $40 = ((($39)) + 4|0);
   $41 = (($40) + ($38<<2)|0);
   HEAP32[$41>>2] = 0;
  }
  $42 = $6;
  $43 = (($42) + 1)|0;
  $6 = $43;
 }
 STACKTOP = sp;return;
}
function _free_instrument($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1;
 $5 = ($4|0)!=(0|0);
 if (!($5)) {
  STACKTOP = sp;return;
 }
 $3 = 0;
 while(1) {
  $6 = $3;
  $7 = $1;
  $8 = HEAP32[$7>>2]|0;
  $9 = ($6|0)<($8|0);
  if (!($9)) {
   break;
  }
  $10 = $3;
  $11 = $1;
  $12 = ((($11)) + 4|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = (($13) + (($10*116)|0)|0);
  $2 = $14;
  $15 = $2;
  $16 = ((($15)) + 88|0);
  $17 = HEAP32[$16>>2]|0;
  _free($17);
  $18 = $3;
  $19 = (($18) + 1)|0;
  $3 = $19;
 }
 $20 = $1;
 $21 = ((($20)) + 4|0);
 $22 = HEAP32[$21>>2]|0;
 _free($22);
 $23 = $1;
 _free($23);
 STACKTOP = sp;return;
}
function _set_default_instrument($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $6 = $3;
 $7 = $4;
 $8 = (_load_instrument($6,$7,0,-1,-1,-1,0,0,0)|0);
 $5 = $8;
 $9 = ($8|0)!=(0|0);
 if ($9) {
  $10 = $5;
  $11 = $3;
  $12 = ((($11)) + 1052|0);
  HEAP32[$12>>2] = $10;
  $13 = $3;
  $14 = ((($13)) + 1056|0);
  HEAP32[$14>>2] = -1;
  $2 = 0;
  $15 = $2;
  STACKTOP = sp;return ($15|0);
 } else {
  $2 = -1;
  $15 = $2;
  STACKTOP = sp;return ($15|0);
 }
 return (0)|0;
}
function _load_instrument_dls($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $12 = $5; //@line 1161 "instrum_dls.c"
 $13 = ((($12)) + 24|0); //@line 1161 "instrum_dls.c"
 $14 = HEAP32[$13>>2]|0; //@line 1161 "instrum_dls.c"
 $15 = ($14|0)!=(0|0); //@line 1161 "instrum_dls.c"
 if (!($15)) {
  $4 = 0; //@line 1162 "instrum_dls.c"
  $143 = $4; //@line 1196 "instrum_dls.c"
  STACKTOP = sp;return ($143|0); //@line 1196 "instrum_dls.c"
 }
 $16 = $6; //@line 1164 "instrum_dls.c"
 $17 = ($16|0)!=(0); //@line 1164 "instrum_dls.c"
 $18 = $17 ? -2147483648 : 0; //@line 1164 "instrum_dls.c"
 $6 = $18; //@line 1164 "instrum_dls.c"
 $10 = 0; //@line 1165 "instrum_dls.c"
 while(1) {
  $19 = $10; //@line 1165 "instrum_dls.c"
  $20 = $5; //@line 1165 "instrum_dls.c"
  $21 = ((($20)) + 24|0); //@line 1165 "instrum_dls.c"
  $22 = HEAP32[$21>>2]|0; //@line 1165 "instrum_dls.c"
  $23 = ((($22)) + 4|0); //@line 1165 "instrum_dls.c"
  $24 = HEAP32[$23>>2]|0; //@line 1165 "instrum_dls.c"
  $25 = ($19>>>0)<($24>>>0); //@line 1165 "instrum_dls.c"
  if (!($25)) {
   break;
  }
  $26 = $10; //@line 1166 "instrum_dls.c"
  $27 = $5; //@line 1166 "instrum_dls.c"
  $28 = ((($27)) + 24|0); //@line 1166 "instrum_dls.c"
  $29 = HEAP32[$28>>2]|0; //@line 1166 "instrum_dls.c"
  $30 = ((($29)) + 8|0); //@line 1166 "instrum_dls.c"
  $31 = HEAP32[$30>>2]|0; //@line 1166 "instrum_dls.c"
  $32 = (($31) + (($26*20)|0)|0); //@line 1166 "instrum_dls.c"
  $11 = $32; //@line 1166 "instrum_dls.c"
  $33 = $11; //@line 1167 "instrum_dls.c"
  $34 = ((($33)) + 4|0); //@line 1167 "instrum_dls.c"
  $35 = HEAP32[$34>>2]|0; //@line 1167 "instrum_dls.c"
  $36 = ((($35)) + 4|0); //@line 1167 "instrum_dls.c"
  $37 = HEAP32[$36>>2]|0; //@line 1167 "instrum_dls.c"
  $38 = $37 & -2147483648; //@line 1167 "instrum_dls.c"
  $39 = $6; //@line 1167 "instrum_dls.c"
  $40 = ($38|0)==($39|0); //@line 1167 "instrum_dls.c"
  if ($40) {
   $41 = $11; //@line 1168 "instrum_dls.c"
   $42 = ((($41)) + 4|0); //@line 1168 "instrum_dls.c"
   $43 = HEAP32[$42>>2]|0; //@line 1168 "instrum_dls.c"
   $44 = ((($43)) + 4|0); //@line 1168 "instrum_dls.c"
   $45 = HEAP32[$44>>2]|0; //@line 1168 "instrum_dls.c"
   $46 = $45 >>> 8; //@line 1168 "instrum_dls.c"
   $47 = $46 & 255; //@line 1168 "instrum_dls.c"
   $48 = $7; //@line 1168 "instrum_dls.c"
   $49 = ($47|0)==($48|0); //@line 1168 "instrum_dls.c"
   if ($49) {
    $50 = $11; //@line 1169 "instrum_dls.c"
    $51 = ((($50)) + 4|0); //@line 1169 "instrum_dls.c"
    $52 = HEAP32[$51>>2]|0; //@line 1169 "instrum_dls.c"
    $53 = ((($52)) + 4|0); //@line 1169 "instrum_dls.c"
    $54 = ((($53)) + 4|0); //@line 1169 "instrum_dls.c"
    $55 = HEAP32[$54>>2]|0; //@line 1169 "instrum_dls.c"
    $56 = $8; //@line 1169 "instrum_dls.c"
    $57 = ($55|0)==($56|0); //@line 1169 "instrum_dls.c"
    if ($57) {
     break;
    }
   }
  }
  $58 = $10; //@line 1165 "instrum_dls.c"
  $59 = (($58) + 1)|0; //@line 1165 "instrum_dls.c"
  $10 = $59; //@line 1165 "instrum_dls.c"
 }
 $60 = $10; //@line 1172 "instrum_dls.c"
 $61 = $5; //@line 1172 "instrum_dls.c"
 $62 = ((($61)) + 24|0); //@line 1172 "instrum_dls.c"
 $63 = HEAP32[$62>>2]|0; //@line 1172 "instrum_dls.c"
 $64 = ((($63)) + 4|0); //@line 1172 "instrum_dls.c"
 $65 = HEAP32[$64>>2]|0; //@line 1172 "instrum_dls.c"
 $66 = ($60|0)!=($65|0); //@line 1172 "instrum_dls.c"
 $67 = $7; //@line 1172 "instrum_dls.c"
 $68 = ($67|0)!=(0); //@line 1172 "instrum_dls.c"
 $or$cond = $66 | $68; //@line 1172 "instrum_dls.c"
 L13: do {
  if (!($or$cond)) {
   $10 = 0; //@line 1173 "instrum_dls.c"
   while(1) {
    $69 = $10; //@line 1173 "instrum_dls.c"
    $70 = $5; //@line 1173 "instrum_dls.c"
    $71 = ((($70)) + 24|0); //@line 1173 "instrum_dls.c"
    $72 = HEAP32[$71>>2]|0; //@line 1173 "instrum_dls.c"
    $73 = ((($72)) + 4|0); //@line 1173 "instrum_dls.c"
    $74 = HEAP32[$73>>2]|0; //@line 1173 "instrum_dls.c"
    $75 = ($69>>>0)<($74>>>0); //@line 1173 "instrum_dls.c"
    if (!($75)) {
     break L13;
    }
    $76 = $10; //@line 1174 "instrum_dls.c"
    $77 = $5; //@line 1174 "instrum_dls.c"
    $78 = ((($77)) + 24|0); //@line 1174 "instrum_dls.c"
    $79 = HEAP32[$78>>2]|0; //@line 1174 "instrum_dls.c"
    $80 = ((($79)) + 8|0); //@line 1174 "instrum_dls.c"
    $81 = HEAP32[$80>>2]|0; //@line 1174 "instrum_dls.c"
    $82 = (($81) + (($76*20)|0)|0); //@line 1174 "instrum_dls.c"
    $11 = $82; //@line 1174 "instrum_dls.c"
    $83 = $11; //@line 1175 "instrum_dls.c"
    $84 = ((($83)) + 4|0); //@line 1175 "instrum_dls.c"
    $85 = HEAP32[$84>>2]|0; //@line 1175 "instrum_dls.c"
    $86 = ((($85)) + 4|0); //@line 1175 "instrum_dls.c"
    $87 = HEAP32[$86>>2]|0; //@line 1175 "instrum_dls.c"
    $88 = $87 & -2147483648; //@line 1175 "instrum_dls.c"
    $89 = $6; //@line 1175 "instrum_dls.c"
    $90 = ($88|0)==($89|0); //@line 1175 "instrum_dls.c"
    if ($90) {
     $91 = $11; //@line 1176 "instrum_dls.c"
     $92 = ((($91)) + 4|0); //@line 1176 "instrum_dls.c"
     $93 = HEAP32[$92>>2]|0; //@line 1176 "instrum_dls.c"
     $94 = ((($93)) + 4|0); //@line 1176 "instrum_dls.c"
     $95 = ((($94)) + 4|0); //@line 1176 "instrum_dls.c"
     $96 = HEAP32[$95>>2]|0; //@line 1176 "instrum_dls.c"
     $97 = $8; //@line 1176 "instrum_dls.c"
     $98 = ($96|0)==($97|0); //@line 1176 "instrum_dls.c"
     if ($98) {
      break L13;
     }
    }
    $99 = $10; //@line 1173 "instrum_dls.c"
    $100 = (($99) + 1)|0; //@line 1173 "instrum_dls.c"
    $10 = $100; //@line 1173 "instrum_dls.c"
   }
  }
 } while(0);
 $101 = $10; //@line 1180 "instrum_dls.c"
 $102 = $5; //@line 1180 "instrum_dls.c"
 $103 = ((($102)) + 24|0); //@line 1180 "instrum_dls.c"
 $104 = HEAP32[$103>>2]|0; //@line 1180 "instrum_dls.c"
 $105 = ((($104)) + 4|0); //@line 1180 "instrum_dls.c"
 $106 = HEAP32[$105>>2]|0; //@line 1180 "instrum_dls.c"
 $107 = ($101|0)==($106|0); //@line 1180 "instrum_dls.c"
 if ($107) {
  $4 = 0; //@line 1182 "instrum_dls.c"
  $143 = $4; //@line 1196 "instrum_dls.c"
  STACKTOP = sp;return ($143|0); //@line 1196 "instrum_dls.c"
 }
 $108 = (_safe_malloc(8)|0); //@line 1185 "instrum_dls.c"
 $9 = $108; //@line 1185 "instrum_dls.c"
 $109 = $11; //@line 1186 "instrum_dls.c"
 $110 = ((($109)) + 4|0); //@line 1186 "instrum_dls.c"
 $111 = HEAP32[$110>>2]|0; //@line 1186 "instrum_dls.c"
 $112 = HEAP32[$111>>2]|0; //@line 1186 "instrum_dls.c"
 $113 = $9; //@line 1186 "instrum_dls.c"
 HEAP32[$113>>2] = $112; //@line 1186 "instrum_dls.c"
 $114 = $9; //@line 1187 "instrum_dls.c"
 $115 = HEAP32[$114>>2]|0; //@line 1187 "instrum_dls.c"
 $116 = ($115*116)|0; //@line 1187 "instrum_dls.c"
 $117 = (_safe_malloc($116)|0); //@line 1187 "instrum_dls.c"
 $118 = $9; //@line 1187 "instrum_dls.c"
 $119 = ((($118)) + 4|0); //@line 1187 "instrum_dls.c"
 HEAP32[$119>>2] = $117; //@line 1187 "instrum_dls.c"
 $120 = $9; //@line 1188 "instrum_dls.c"
 $121 = ((($120)) + 4|0); //@line 1188 "instrum_dls.c"
 $122 = HEAP32[$121>>2]|0; //@line 1188 "instrum_dls.c"
 $123 = $9; //@line 1188 "instrum_dls.c"
 $124 = HEAP32[$123>>2]|0; //@line 1188 "instrum_dls.c"
 $125 = ($124*116)|0; //@line 1188 "instrum_dls.c"
 _memset(($122|0),0,($125|0))|0; //@line 1188 "instrum_dls.c"
 $10 = 0; //@line 1192 "instrum_dls.c"
 while(1) {
  $126 = $10; //@line 1192 "instrum_dls.c"
  $127 = $11; //@line 1192 "instrum_dls.c"
  $128 = ((($127)) + 4|0); //@line 1192 "instrum_dls.c"
  $129 = HEAP32[$128>>2]|0; //@line 1192 "instrum_dls.c"
  $130 = HEAP32[$129>>2]|0; //@line 1192 "instrum_dls.c"
  $131 = ($126>>>0)<($130>>>0); //@line 1192 "instrum_dls.c"
  if (!($131)) {
   break;
  }
  $132 = $5; //@line 1193 "instrum_dls.c"
  $133 = $10; //@line 1193 "instrum_dls.c"
  $134 = $9; //@line 1193 "instrum_dls.c"
  $135 = ((($134)) + 4|0); //@line 1193 "instrum_dls.c"
  $136 = HEAP32[$135>>2]|0; //@line 1193 "instrum_dls.c"
  $137 = (($136) + (($133*116)|0)|0); //@line 1193 "instrum_dls.c"
  $138 = $11; //@line 1193 "instrum_dls.c"
  $139 = $10; //@line 1193 "instrum_dls.c"
  _load_region_dls($132,$137,$138,$139); //@line 1193 "instrum_dls.c"
  $140 = $10; //@line 1192 "instrum_dls.c"
  $141 = (($140) + 1)|0; //@line 1192 "instrum_dls.c"
  $10 = $141; //@line 1192 "instrum_dls.c"
 }
 $142 = $9; //@line 1195 "instrum_dls.c"
 $4 = $142; //@line 1195 "instrum_dls.c"
 $143 = $4; //@line 1196 "instrum_dls.c"
 STACKTOP = sp;return ($143|0); //@line 1196 "instrum_dls.c"
}
function _load_region_dls($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0.0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0.0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0.0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0.0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0.0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0.0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0.0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0.0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0.0, $204 = 0.0, $205 = 0.0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0.0, $214 = 0.0, $215 = 0.0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0;
 var $227 = 0.0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0.0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0;
 var $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0.0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0;
 var $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0.0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0;
 var $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0;
 var $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $18 = $7; //@line 1077 "instrum_dls.c"
 $19 = $6; //@line 1077 "instrum_dls.c"
 $20 = ((($19)) + 8|0); //@line 1077 "instrum_dls.c"
 $21 = HEAP32[$20>>2]|0; //@line 1077 "instrum_dls.c"
 $22 = (($21) + (($18*24)|0)|0); //@line 1077 "instrum_dls.c"
 $8 = $22; //@line 1077 "instrum_dls.c"
 $23 = $8; //@line 1078 "instrum_dls.c"
 $24 = ((($23)) + 4|0); //@line 1078 "instrum_dls.c"
 $25 = HEAP32[$24>>2]|0; //@line 1078 "instrum_dls.c"
 $26 = ((($25)) + 8|0); //@line 1078 "instrum_dls.c"
 $27 = HEAP32[$26>>2]|0; //@line 1078 "instrum_dls.c"
 $28 = $4; //@line 1078 "instrum_dls.c"
 $29 = ((($28)) + 24|0); //@line 1078 "instrum_dls.c"
 $30 = HEAP32[$29>>2]|0; //@line 1078 "instrum_dls.c"
 $31 = ((($30)) + 20|0); //@line 1078 "instrum_dls.c"
 $32 = HEAP32[$31>>2]|0; //@line 1078 "instrum_dls.c"
 $33 = (($32) + (($27*20)|0)|0); //@line 1078 "instrum_dls.c"
 $9 = $33; //@line 1078 "instrum_dls.c"
 $34 = $8; //@line 1080 "instrum_dls.c"
 $35 = HEAP32[$34>>2]|0; //@line 1080 "instrum_dls.c"
 $36 = HEAP16[$35>>1]|0; //@line 1080 "instrum_dls.c"
 $37 = $36&65535; //@line 1080 "instrum_dls.c"
 $38 = (4252 + ($37<<2)|0); //@line 1080 "instrum_dls.c"
 $39 = HEAP32[$38>>2]|0; //@line 1080 "instrum_dls.c"
 $40 = $5; //@line 1080 "instrum_dls.c"
 $41 = ((($40)) + 24|0); //@line 1080 "instrum_dls.c"
 HEAP32[$41>>2] = $39; //@line 1080 "instrum_dls.c"
 $42 = $8; //@line 1081 "instrum_dls.c"
 $43 = HEAP32[$42>>2]|0; //@line 1081 "instrum_dls.c"
 $44 = ((($43)) + 2|0); //@line 1081 "instrum_dls.c"
 $45 = HEAP16[$44>>1]|0; //@line 1081 "instrum_dls.c"
 $46 = $45&65535; //@line 1081 "instrum_dls.c"
 $47 = (4252 + ($46<<2)|0); //@line 1081 "instrum_dls.c"
 $48 = HEAP32[$47>>2]|0; //@line 1081 "instrum_dls.c"
 $49 = $5; //@line 1081 "instrum_dls.c"
 $50 = ((($49)) + 28|0); //@line 1081 "instrum_dls.c"
 HEAP32[$50>>2] = $48; //@line 1081 "instrum_dls.c"
 $51 = $8; //@line 1082 "instrum_dls.c"
 $52 = ((($51)) + 8|0); //@line 1082 "instrum_dls.c"
 $53 = HEAP32[$52>>2]|0; //@line 1082 "instrum_dls.c"
 $54 = ((($53)) + 4|0); //@line 1082 "instrum_dls.c"
 $55 = HEAP16[$54>>1]|0; //@line 1082 "instrum_dls.c"
 $56 = $55&65535; //@line 1082 "instrum_dls.c"
 $57 = (4252 + ($56<<2)|0); //@line 1082 "instrum_dls.c"
 $58 = HEAP32[$57>>2]|0; //@line 1082 "instrum_dls.c"
 $59 = $5; //@line 1082 "instrum_dls.c"
 $60 = ((($59)) + 32|0); //@line 1082 "instrum_dls.c"
 HEAP32[$60>>2] = $58; //@line 1082 "instrum_dls.c"
 $61 = $8; //@line 1083 "instrum_dls.c"
 $62 = HEAP32[$61>>2]|0; //@line 1083 "instrum_dls.c"
 $63 = ((($62)) + 4|0); //@line 1083 "instrum_dls.c"
 $64 = HEAP16[$63>>1]|0; //@line 1083 "instrum_dls.c"
 $65 = $64&65535; //@line 1083 "instrum_dls.c"
 $66 = $5; //@line 1083 "instrum_dls.c"
 $67 = ((($66)) + 16|0); //@line 1083 "instrum_dls.c"
 HEAP32[$67>>2] = $65; //@line 1083 "instrum_dls.c"
 $68 = $8; //@line 1084 "instrum_dls.c"
 $69 = HEAP32[$68>>2]|0; //@line 1084 "instrum_dls.c"
 $70 = ((($69)) + 4|0); //@line 1084 "instrum_dls.c"
 $71 = ((($70)) + 2|0); //@line 1084 "instrum_dls.c"
 $72 = HEAP16[$71>>1]|0; //@line 1084 "instrum_dls.c"
 $73 = $72&65535; //@line 1084 "instrum_dls.c"
 $74 = $5; //@line 1084 "instrum_dls.c"
 $75 = ((($74)) + 20|0); //@line 1084 "instrum_dls.c"
 HEAP32[$75>>2] = $73; //@line 1084 "instrum_dls.c"
 $76 = $5; //@line 1086 "instrum_dls.c"
 $77 = ((($76)) + 110|0); //@line 1086 "instrum_dls.c"
 HEAP8[$77>>0] = 1; //@line 1086 "instrum_dls.c"
 $78 = $9; //@line 1087 "instrum_dls.c"
 $79 = HEAP32[$78>>2]|0; //@line 1087 "instrum_dls.c"
 $80 = ((($79)) + 4|0); //@line 1087 "instrum_dls.c"
 $81 = HEAP32[$80>>2]|0; //@line 1087 "instrum_dls.c"
 $82 = $5; //@line 1087 "instrum_dls.c"
 $83 = ((($82)) + 12|0); //@line 1087 "instrum_dls.c"
 HEAP32[$83>>2] = $81; //@line 1087 "instrum_dls.c"
 $84 = $9; //@line 1088 "instrum_dls.c"
 $85 = ((($84)) + 8|0); //@line 1088 "instrum_dls.c"
 $86 = HEAP32[$85>>2]|0; //@line 1088 "instrum_dls.c"
 $87 = (($86>>>0) / 2)&-1; //@line 1088 "instrum_dls.c"
 $88 = $5; //@line 1088 "instrum_dls.c"
 $89 = ((($88)) + 8|0); //@line 1088 "instrum_dls.c"
 HEAP32[$89>>2] = $87; //@line 1088 "instrum_dls.c"
 $90 = $9; //@line 1089 "instrum_dls.c"
 $91 = ((($90)) + 8|0); //@line 1089 "instrum_dls.c"
 $92 = HEAP32[$91>>2]|0; //@line 1089 "instrum_dls.c"
 $93 = (_safe_malloc($92)|0); //@line 1089 "instrum_dls.c"
 $94 = $5; //@line 1089 "instrum_dls.c"
 $95 = ((($94)) + 88|0); //@line 1089 "instrum_dls.c"
 HEAP32[$95>>2] = $93; //@line 1089 "instrum_dls.c"
 $96 = $5; //@line 1090 "instrum_dls.c"
 $97 = ((($96)) + 88|0); //@line 1090 "instrum_dls.c"
 $98 = HEAP32[$97>>2]|0; //@line 1090 "instrum_dls.c"
 $99 = $9; //@line 1090 "instrum_dls.c"
 $100 = ((($99)) + 4|0); //@line 1090 "instrum_dls.c"
 $101 = HEAP32[$100>>2]|0; //@line 1090 "instrum_dls.c"
 $102 = $9; //@line 1090 "instrum_dls.c"
 $103 = ((($102)) + 8|0); //@line 1090 "instrum_dls.c"
 $104 = HEAP32[$103>>2]|0; //@line 1090 "instrum_dls.c"
 _memcpy(($98|0),($101|0),($104|0))|0; //@line 1090 "instrum_dls.c"
 $105 = $8; //@line 1091 "instrum_dls.c"
 $106 = ((($105)) + 8|0); //@line 1091 "instrum_dls.c"
 $107 = HEAP32[$106>>2]|0; //@line 1091 "instrum_dls.c"
 $108 = ((($107)) + 16|0); //@line 1091 "instrum_dls.c"
 $109 = HEAP32[$108>>2]|0; //@line 1091 "instrum_dls.c"
 $110 = ($109|0)!=(0); //@line 1091 "instrum_dls.c"
 if ($110) {
  $111 = $5; //@line 1092 "instrum_dls.c"
  $112 = ((($111)) + 110|0); //@line 1092 "instrum_dls.c"
  $113 = HEAP8[$112>>0]|0; //@line 1092 "instrum_dls.c"
  $114 = $113&255; //@line 1092 "instrum_dls.c"
  $115 = $114 | 36; //@line 1092 "instrum_dls.c"
  $116 = $115&255; //@line 1092 "instrum_dls.c"
  HEAP8[$112>>0] = $116; //@line 1092 "instrum_dls.c"
  $117 = $8; //@line 1093 "instrum_dls.c"
  $118 = ((($117)) + 12|0); //@line 1093 "instrum_dls.c"
  $119 = HEAP32[$118>>2]|0; //@line 1093 "instrum_dls.c"
  $120 = ((($119)) + 8|0); //@line 1093 "instrum_dls.c"
  $121 = HEAP32[$120>>2]|0; //@line 1093 "instrum_dls.c"
  $122 = (($121>>>0) / 2)&-1; //@line 1093 "instrum_dls.c"
  $123 = $5; //@line 1093 "instrum_dls.c"
  HEAP32[$123>>2] = $122; //@line 1093 "instrum_dls.c"
  $124 = $5; //@line 1094 "instrum_dls.c"
  $125 = HEAP32[$124>>2]|0; //@line 1094 "instrum_dls.c"
  $126 = $8; //@line 1094 "instrum_dls.c"
  $127 = ((($126)) + 12|0); //@line 1094 "instrum_dls.c"
  $128 = HEAP32[$127>>2]|0; //@line 1094 "instrum_dls.c"
  $129 = ((($128)) + 12|0); //@line 1094 "instrum_dls.c"
  $130 = HEAP32[$129>>2]|0; //@line 1094 "instrum_dls.c"
  $131 = (($130>>>0) / 2)&-1; //@line 1094 "instrum_dls.c"
  $132 = (($125) + ($131))|0; //@line 1094 "instrum_dls.c"
  $133 = $5; //@line 1094 "instrum_dls.c"
  $134 = ((($133)) + 4|0); //@line 1094 "instrum_dls.c"
  HEAP32[$134>>2] = $132; //@line 1094 "instrum_dls.c"
 }
 $135 = $5; //@line 1096 "instrum_dls.c"
 $136 = ((($135)) + 84|0); //@line 1096 "instrum_dls.c"
 HEAPF32[$136>>2] = 1.0; //@line 1096 "instrum_dls.c"
 $137 = $5; //@line 1098 "instrum_dls.c"
 $138 = ((($137)) + 110|0); //@line 1098 "instrum_dls.c"
 $139 = HEAP8[$138>>0]|0; //@line 1098 "instrum_dls.c"
 $140 = $139&255; //@line 1098 "instrum_dls.c"
 $141 = $140 & 32; //@line 1098 "instrum_dls.c"
 $142 = ($141|0)!=(0); //@line 1098 "instrum_dls.c"
 if (!($142)) {
  $297 = $5; //@line 1150 "instrum_dls.c"
  $298 = ((($297)) + 8|0); //@line 1150 "instrum_dls.c"
  $299 = HEAP32[$298>>2]|0; //@line 1150 "instrum_dls.c"
  $300 = $299 << 12; //@line 1150 "instrum_dls.c"
  HEAP32[$298>>2] = $300; //@line 1150 "instrum_dls.c"
  $301 = $5; //@line 1151 "instrum_dls.c"
  $302 = HEAP32[$301>>2]|0; //@line 1151 "instrum_dls.c"
  $303 = $302 << 12; //@line 1151 "instrum_dls.c"
  HEAP32[$301>>2] = $303; //@line 1151 "instrum_dls.c"
  $304 = $5; //@line 1152 "instrum_dls.c"
  $305 = ((($304)) + 4|0); //@line 1152 "instrum_dls.c"
  $306 = HEAP32[$305>>2]|0; //@line 1152 "instrum_dls.c"
  $307 = $306 << 12; //@line 1152 "instrum_dls.c"
  HEAP32[$305>>2] = $307; //@line 1152 "instrum_dls.c"
  STACKTOP = sp;return; //@line 1153 "instrum_dls.c"
 }
 $16 = 0; //@line 1101 "instrum_dls.c"
 $17 = 0; //@line 1102 "instrum_dls.c"
 $143 = $6; //@line 1104 "instrum_dls.c"
 $144 = ((($143)) + 12|0); //@line 1104 "instrum_dls.c"
 $145 = HEAP32[$144>>2]|0; //@line 1104 "instrum_dls.c"
 $146 = ($145|0)!=(0|0); //@line 1104 "instrum_dls.c"
 if ($146) {
  $147 = $6; //@line 1104 "instrum_dls.c"
  $148 = ((($147)) + 12|0); //@line 1104 "instrum_dls.c"
  $149 = HEAP32[$148>>2]|0; //@line 1104 "instrum_dls.c"
  $150 = ((($149)) + 4|0); //@line 1104 "instrum_dls.c"
  $151 = HEAP32[$150>>2]|0; //@line 1104 "instrum_dls.c"
  $152 = ($151>>>0)>(0); //@line 1104 "instrum_dls.c"
  if ($152) {
   $153 = $6; //@line 1104 "instrum_dls.c"
   $154 = ((($153)) + 16|0); //@line 1104 "instrum_dls.c"
   $155 = HEAP32[$154>>2]|0; //@line 1104 "instrum_dls.c"
   $156 = ($155|0)!=(0|0); //@line 1104 "instrum_dls.c"
   if ($156) {
    $157 = $6; //@line 1105 "instrum_dls.c"
    $158 = ((($157)) + 12|0); //@line 1105 "instrum_dls.c"
    $159 = HEAP32[$158>>2]|0; //@line 1105 "instrum_dls.c"
    $16 = $159; //@line 1105 "instrum_dls.c"
    $160 = $6; //@line 1106 "instrum_dls.c"
    $161 = ((($160)) + 16|0); //@line 1106 "instrum_dls.c"
    $162 = HEAP32[$161>>2]|0; //@line 1106 "instrum_dls.c"
    $17 = $162; //@line 1106 "instrum_dls.c"
   } else {
    label = 8;
   }
  } else {
   label = 8;
  }
 } else {
  label = 8;
 }
 if ((label|0) == 8) {
  $163 = $8; //@line 1108 "instrum_dls.c"
  $164 = ((($163)) + 16|0); //@line 1108 "instrum_dls.c"
  $165 = HEAP32[$164>>2]|0; //@line 1108 "instrum_dls.c"
  $16 = $165; //@line 1108 "instrum_dls.c"
  $166 = $8; //@line 1109 "instrum_dls.c"
  $167 = ((($166)) + 20|0); //@line 1109 "instrum_dls.c"
  $168 = HEAP32[$167>>2]|0; //@line 1109 "instrum_dls.c"
  $17 = $168; //@line 1109 "instrum_dls.c"
 }
 $169 = $16; //@line 1112 "instrum_dls.c"
 $170 = ((($169)) + 4|0); //@line 1112 "instrum_dls.c"
 $171 = HEAP32[$170>>2]|0; //@line 1112 "instrum_dls.c"
 $172 = $17; //@line 1112 "instrum_dls.c"
 $173 = (_load_connection($171,$172,518)|0); //@line 1112 "instrum_dls.c"
 $10 = $173; //@line 1112 "instrum_dls.c"
 $174 = $10; //@line 1113 "instrum_dls.c"
 $175 = (+_to_msec($174)); //@line 1113 "instrum_dls.c"
 $11 = $175; //@line 1113 "instrum_dls.c"
 $176 = $16; //@line 1114 "instrum_dls.c"
 $177 = ((($176)) + 4|0); //@line 1114 "instrum_dls.c"
 $178 = HEAP32[$177>>2]|0; //@line 1114 "instrum_dls.c"
 $179 = $17; //@line 1114 "instrum_dls.c"
 $180 = (_load_connection($178,$179,524)|0); //@line 1114 "instrum_dls.c"
 $10 = $180; //@line 1114 "instrum_dls.c"
 $181 = $10; //@line 1115 "instrum_dls.c"
 $182 = (+_to_msec($181)); //@line 1115 "instrum_dls.c"
 $12 = $182; //@line 1115 "instrum_dls.c"
 $183 = $16; //@line 1116 "instrum_dls.c"
 $184 = ((($183)) + 4|0); //@line 1116 "instrum_dls.c"
 $185 = HEAP32[$184>>2]|0; //@line 1116 "instrum_dls.c"
 $186 = $17; //@line 1116 "instrum_dls.c"
 $187 = (_load_connection($185,$186,519)|0); //@line 1116 "instrum_dls.c"
 $10 = $187; //@line 1116 "instrum_dls.c"
 $188 = $10; //@line 1117 "instrum_dls.c"
 $189 = (+_to_msec($188)); //@line 1117 "instrum_dls.c"
 $13 = $189; //@line 1117 "instrum_dls.c"
 $190 = $16; //@line 1118 "instrum_dls.c"
 $191 = ((($190)) + 4|0); //@line 1118 "instrum_dls.c"
 $192 = HEAP32[$191>>2]|0; //@line 1118 "instrum_dls.c"
 $193 = $17; //@line 1118 "instrum_dls.c"
 $194 = (_load_connection($192,$193,521)|0); //@line 1118 "instrum_dls.c"
 $10 = $194; //@line 1118 "instrum_dls.c"
 $195 = $10; //@line 1119 "instrum_dls.c"
 $196 = (+_to_msec($195)); //@line 1119 "instrum_dls.c"
 $14 = $196; //@line 1119 "instrum_dls.c"
 $197 = $16; //@line 1120 "instrum_dls.c"
 $198 = ((($197)) + 4|0); //@line 1120 "instrum_dls.c"
 $199 = HEAP32[$198>>2]|0; //@line 1120 "instrum_dls.c"
 $200 = $17; //@line 1120 "instrum_dls.c"
 $201 = (_load_connection($199,$200,522)|0); //@line 1120 "instrum_dls.c"
 $10 = $201; //@line 1120 "instrum_dls.c"
 $202 = $10; //@line 1121 "instrum_dls.c"
 $203 = (+_to_normalized_percent($202)); //@line 1121 "instrum_dls.c"
 $204 = 1.0 - $203; //@line 1121 "instrum_dls.c"
 $205 = $204 * 250.0; //@line 1121 "instrum_dls.c"
 $206 = (~~(($205))); //@line 1121 "instrum_dls.c"
 $15 = $206; //@line 1121 "instrum_dls.c"
 $207 = $16; //@line 1122 "instrum_dls.c"
 $208 = ((($207)) + 4|0); //@line 1122 "instrum_dls.c"
 $209 = HEAP32[$208>>2]|0; //@line 1122 "instrum_dls.c"
 $210 = $17; //@line 1122 "instrum_dls.c"
 $211 = (_load_connection($209,$210,4)|0); //@line 1122 "instrum_dls.c"
 $10 = $211; //@line 1122 "instrum_dls.c"
 $212 = $10; //@line 1123 "instrum_dls.c"
 $213 = (+_to_normalized_percent($212)); //@line 1123 "instrum_dls.c"
 $214 = 0.5 + $213; //@line 1123 "instrum_dls.c"
 $215 = $214 * 127.0; //@line 1123 "instrum_dls.c"
 $216 = (~~(($215))); //@line 1123 "instrum_dls.c"
 $217 = $216&255; //@line 1123 "instrum_dls.c"
 $218 = $5; //@line 1123 "instrum_dls.c"
 $219 = ((($218)) + 111|0); //@line 1123 "instrum_dls.c"
 HEAP8[$219>>0] = $217; //@line 1123 "instrum_dls.c"
 $220 = (_to_offset(255)|0); //@line 1129 "instrum_dls.c"
 $221 = $5; //@line 1129 "instrum_dls.c"
 $222 = ((($221)) + 60|0); //@line 1129 "instrum_dls.c"
 HEAP32[$222>>2] = $220; //@line 1129 "instrum_dls.c"
 $223 = $4; //@line 1130 "instrum_dls.c"
 $224 = $5; //@line 1130 "instrum_dls.c"
 $225 = ((($224)) + 12|0); //@line 1130 "instrum_dls.c"
 $226 = HEAP32[$225>>2]|0; //@line 1130 "instrum_dls.c"
 $227 = $11; //@line 1130 "instrum_dls.c"
 $228 = (_calc_rate($223,255,$226,$227)|0); //@line 1130 "instrum_dls.c"
 $229 = $5; //@line 1130 "instrum_dls.c"
 $230 = ((($229)) + 36|0); //@line 1130 "instrum_dls.c"
 HEAP32[$230>>2] = $228; //@line 1130 "instrum_dls.c"
 $231 = (_to_offset(250)|0); //@line 1132 "instrum_dls.c"
 $232 = $5; //@line 1132 "instrum_dls.c"
 $233 = ((($232)) + 60|0); //@line 1132 "instrum_dls.c"
 $234 = ((($233)) + 4|0); //@line 1132 "instrum_dls.c"
 HEAP32[$234>>2] = $231; //@line 1132 "instrum_dls.c"
 $235 = $4; //@line 1133 "instrum_dls.c"
 $236 = $5; //@line 1133 "instrum_dls.c"
 $237 = ((($236)) + 12|0); //@line 1133 "instrum_dls.c"
 $238 = HEAP32[$237>>2]|0; //@line 1133 "instrum_dls.c"
 $239 = $12; //@line 1133 "instrum_dls.c"
 $240 = (_calc_rate($235,5,$238,$239)|0); //@line 1133 "instrum_dls.c"
 $241 = $5; //@line 1133 "instrum_dls.c"
 $242 = ((($241)) + 36|0); //@line 1133 "instrum_dls.c"
 $243 = ((($242)) + 4|0); //@line 1133 "instrum_dls.c"
 HEAP32[$243>>2] = $240; //@line 1133 "instrum_dls.c"
 $244 = $15; //@line 1135 "instrum_dls.c"
 $245 = (_to_offset($244)|0); //@line 1135 "instrum_dls.c"
 $246 = $5; //@line 1135 "instrum_dls.c"
 $247 = ((($246)) + 60|0); //@line 1135 "instrum_dls.c"
 $248 = ((($247)) + 8|0); //@line 1135 "instrum_dls.c"
 HEAP32[$248>>2] = $245; //@line 1135 "instrum_dls.c"
 $249 = $4; //@line 1136 "instrum_dls.c"
 $250 = $15; //@line 1136 "instrum_dls.c"
 $251 = (255 - ($250))|0; //@line 1136 "instrum_dls.c"
 $252 = $5; //@line 1136 "instrum_dls.c"
 $253 = ((($252)) + 12|0); //@line 1136 "instrum_dls.c"
 $254 = HEAP32[$253>>2]|0; //@line 1136 "instrum_dls.c"
 $255 = $13; //@line 1136 "instrum_dls.c"
 $256 = (_calc_rate($249,$251,$254,$255)|0); //@line 1136 "instrum_dls.c"
 $257 = $5; //@line 1136 "instrum_dls.c"
 $258 = ((($257)) + 36|0); //@line 1136 "instrum_dls.c"
 $259 = ((($258)) + 8|0); //@line 1136 "instrum_dls.c"
 HEAP32[$259>>2] = $256; //@line 1136 "instrum_dls.c"
 $260 = (_to_offset(0)|0); //@line 1138 "instrum_dls.c"
 $261 = $5; //@line 1138 "instrum_dls.c"
 $262 = ((($261)) + 60|0); //@line 1138 "instrum_dls.c"
 $263 = ((($262)) + 12|0); //@line 1138 "instrum_dls.c"
 HEAP32[$263>>2] = $260; //@line 1138 "instrum_dls.c"
 $264 = $4; //@line 1139 "instrum_dls.c"
 $265 = $15; //@line 1139 "instrum_dls.c"
 $266 = (5 + ($265))|0; //@line 1139 "instrum_dls.c"
 $267 = $5; //@line 1139 "instrum_dls.c"
 $268 = ((($267)) + 12|0); //@line 1139 "instrum_dls.c"
 $269 = HEAP32[$268>>2]|0; //@line 1139 "instrum_dls.c"
 $270 = $14; //@line 1139 "instrum_dls.c"
 $271 = (_calc_rate($264,$266,$269,$270)|0); //@line 1139 "instrum_dls.c"
 $272 = $5; //@line 1139 "instrum_dls.c"
 $273 = ((($272)) + 36|0); //@line 1139 "instrum_dls.c"
 $274 = ((($273)) + 12|0); //@line 1139 "instrum_dls.c"
 HEAP32[$274>>2] = $271; //@line 1139 "instrum_dls.c"
 $275 = (_to_offset(0)|0); //@line 1141 "instrum_dls.c"
 $276 = $5; //@line 1141 "instrum_dls.c"
 $277 = ((($276)) + 60|0); //@line 1141 "instrum_dls.c"
 $278 = ((($277)) + 16|0); //@line 1141 "instrum_dls.c"
 HEAP32[$278>>2] = $275; //@line 1141 "instrum_dls.c"
 $279 = (_to_offset(1)|0); //@line 1142 "instrum_dls.c"
 $280 = $5; //@line 1142 "instrum_dls.c"
 $281 = ((($280)) + 36|0); //@line 1142 "instrum_dls.c"
 $282 = ((($281)) + 16|0); //@line 1142 "instrum_dls.c"
 HEAP32[$282>>2] = $279; //@line 1142 "instrum_dls.c"
 $283 = (_to_offset(0)|0); //@line 1144 "instrum_dls.c"
 $284 = $5; //@line 1144 "instrum_dls.c"
 $285 = ((($284)) + 60|0); //@line 1144 "instrum_dls.c"
 $286 = ((($285)) + 20|0); //@line 1144 "instrum_dls.c"
 HEAP32[$286>>2] = $283; //@line 1144 "instrum_dls.c"
 $287 = (_to_offset(1)|0); //@line 1145 "instrum_dls.c"
 $288 = $5; //@line 1145 "instrum_dls.c"
 $289 = ((($288)) + 36|0); //@line 1145 "instrum_dls.c"
 $290 = ((($289)) + 20|0); //@line 1145 "instrum_dls.c"
 HEAP32[$290>>2] = $287; //@line 1145 "instrum_dls.c"
 $291 = $5; //@line 1147 "instrum_dls.c"
 $292 = ((($291)) + 110|0); //@line 1147 "instrum_dls.c"
 $293 = HEAP8[$292>>0]|0; //@line 1147 "instrum_dls.c"
 $294 = $293&255; //@line 1147 "instrum_dls.c"
 $295 = $294 | 64; //@line 1147 "instrum_dls.c"
 $296 = $295&255; //@line 1147 "instrum_dls.c"
 HEAP8[$292>>0] = $296; //@line 1147 "instrum_dls.c"
 $297 = $5; //@line 1150 "instrum_dls.c"
 $298 = ((($297)) + 8|0); //@line 1150 "instrum_dls.c"
 $299 = HEAP32[$298>>2]|0; //@line 1150 "instrum_dls.c"
 $300 = $299 << 12; //@line 1150 "instrum_dls.c"
 HEAP32[$298>>2] = $300; //@line 1150 "instrum_dls.c"
 $301 = $5; //@line 1151 "instrum_dls.c"
 $302 = HEAP32[$301>>2]|0; //@line 1151 "instrum_dls.c"
 $303 = $302 << 12; //@line 1151 "instrum_dls.c"
 HEAP32[$301>>2] = $303; //@line 1151 "instrum_dls.c"
 $304 = $5; //@line 1152 "instrum_dls.c"
 $305 = ((($304)) + 4|0); //@line 1152 "instrum_dls.c"
 $306 = HEAP32[$305>>2]|0; //@line 1152 "instrum_dls.c"
 $307 = $306 << 12; //@line 1152 "instrum_dls.c"
 HEAP32[$305>>2] = $307; //@line 1152 "instrum_dls.c"
 STACKTOP = sp;return; //@line 1153 "instrum_dls.c"
}
function _load_connection($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $7 = 0; //@line 1058 "instrum_dls.c"
 $6 = 0; //@line 1059 "instrum_dls.c"
 while(1) {
  $9 = $6; //@line 1059 "instrum_dls.c"
  $10 = $3; //@line 1059 "instrum_dls.c"
  $11 = ($9>>>0)<($10>>>0); //@line 1059 "instrum_dls.c"
  if (!($11)) {
   break;
  }
  $12 = $6; //@line 1060 "instrum_dls.c"
  $13 = $4; //@line 1060 "instrum_dls.c"
  $14 = (($13) + (($12*12)|0)|0); //@line 1060 "instrum_dls.c"
  $8 = $14; //@line 1060 "instrum_dls.c"
  $15 = $8; //@line 1061 "instrum_dls.c"
  $16 = ((($15)) + 4|0); //@line 1061 "instrum_dls.c"
  $17 = HEAP16[$16>>1]|0; //@line 1061 "instrum_dls.c"
  $18 = $17&65535; //@line 1061 "instrum_dls.c"
  $19 = $5; //@line 1061 "instrum_dls.c"
  $20 = $19&65535; //@line 1061 "instrum_dls.c"
  $21 = ($18|0)==($20|0); //@line 1061 "instrum_dls.c"
  if ($21) {
   $22 = $8; //@line 1066 "instrum_dls.c"
   $23 = HEAP16[$22>>1]|0; //@line 1066 "instrum_dls.c"
   $24 = $23&65535; //@line 1066 "instrum_dls.c"
   $25 = ($24|0)==(0); //@line 1066 "instrum_dls.c"
   if ($25) {
    $26 = $8; //@line 1067 "instrum_dls.c"
    $27 = ((($26)) + 2|0); //@line 1067 "instrum_dls.c"
    $28 = HEAP16[$27>>1]|0; //@line 1067 "instrum_dls.c"
    $29 = $28&65535; //@line 1067 "instrum_dls.c"
    $30 = ($29|0)==(0); //@line 1067 "instrum_dls.c"
    if ($30) {
     $31 = $8; //@line 1068 "instrum_dls.c"
     $32 = ((($31)) + 6|0); //@line 1068 "instrum_dls.c"
     $33 = HEAP16[$32>>1]|0; //@line 1068 "instrum_dls.c"
     $34 = $33&65535; //@line 1068 "instrum_dls.c"
     $35 = ($34|0)==(0); //@line 1068 "instrum_dls.c"
     if ($35) {
      $36 = $8; //@line 1069 "instrum_dls.c"
      $37 = ((($36)) + 8|0); //@line 1069 "instrum_dls.c"
      $38 = HEAP32[$37>>2]|0; //@line 1069 "instrum_dls.c"
      $39 = $7; //@line 1069 "instrum_dls.c"
      $40 = (($39) + ($38))|0; //@line 1069 "instrum_dls.c"
      $7 = $40; //@line 1069 "instrum_dls.c"
     }
    }
   }
  }
  $41 = $6; //@line 1059 "instrum_dls.c"
  $42 = (($41) + 1)|0; //@line 1059 "instrum_dls.c"
  $6 = $42; //@line 1059 "instrum_dls.c"
 }
 $43 = $7; //@line 1072 "instrum_dls.c"
 STACKTOP = sp;return ($43|0); //@line 1072 "instrum_dls.c"
}
function _to_msec($0) {
 $0 = $0|0;
 var $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0.0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $2; //@line 1022 "instrum_dls.c"
 $4 = ($3|0)==(-2147483648); //@line 1022 "instrum_dls.c"
 $5 = $2; //@line 1022 "instrum_dls.c"
 $6 = ($5|0)==(0); //@line 1022 "instrum_dls.c"
 $or$cond = $4 | $6; //@line 1022 "instrum_dls.c"
 if ($or$cond) {
  $1 = 0.0; //@line 1023 "instrum_dls.c"
  $13 = $1; //@line 1025 "instrum_dls.c"
  STACKTOP = sp;return (+$13); //@line 1025 "instrum_dls.c"
 } else {
  $7 = $2; //@line 1024 "instrum_dls.c"
  $8 = (($7|0) / 65536)&-1; //@line 1024 "instrum_dls.c"
  $9 = (+($8|0)); //@line 1024 "instrum_dls.c"
  $10 = $9 / 1200.0; //@line 1024 "instrum_dls.c"
  $11 = (+Math_pow(2.0,(+$10))); //@line 1024 "instrum_dls.c"
  $12 = 1000.0 * $11; //@line 1024 "instrum_dls.c"
  $1 = $12; //@line 1024 "instrum_dls.c"
  $13 = $1; //@line 1025 "instrum_dls.c"
  STACKTOP = sp;return (+$13); //@line 1025 "instrum_dls.c"
 }
 return +(0.0);
}
function _to_normalized_percent($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0.0, $5 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1; //@line 1030 "instrum_dls.c"
 $3 = (($2|0) / 65536)&-1; //@line 1030 "instrum_dls.c"
 $4 = (+($3|0)); //@line 1030 "instrum_dls.c"
 $5 = $4 / 1000.0; //@line 1030 "instrum_dls.c"
 STACKTOP = sp;return (+$5); //@line 1030 "instrum_dls.c"
}
function _to_offset($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1; //@line 1036 "instrum_dls.c"
 $3 = $2 << 22; //@line 1036 "instrum_dls.c"
 STACKTOP = sp;return ($3|0); //@line 1036 "instrum_dls.c"
}
function _calc_rate($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = +$3;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $17 = 0, $18 = 0, $19 = 0, $20 = 0.0, $21 = 0.0, $22 = 0, $23 = 0, $24 = 0, $25 = 0.0, $26 = 0.0, $27 = 0.0, $28 = 0.0, $29 = 0.0;
 var $30 = 0.0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $9 = $7; //@line 1046 "instrum_dls.c"
 $10 = $9 < 6.0; //@line 1046 "instrum_dls.c"
 if ($10) {
  $7 = 6.0; //@line 1047 "instrum_dls.c"
 }
 $11 = $5; //@line 1048 "instrum_dls.c"
 $12 = ($11|0)==(0); //@line 1048 "instrum_dls.c"
 if ($12) {
  $5 = 255; //@line 1049 "instrum_dls.c"
 }
 $13 = $5; //@line 1050 "instrum_dls.c"
 $14 = $13 << 22; //@line 1050 "instrum_dls.c"
 $5 = $14; //@line 1050 "instrum_dls.c"
 $15 = $5; //@line 1051 "instrum_dls.c"
 $16 = (+($15|0)); //@line 1051 "instrum_dls.c"
 $17 = $4; //@line 1051 "instrum_dls.c"
 $18 = ((($17)) + 4|0); //@line 1051 "instrum_dls.c"
 $19 = HEAP32[$18>>2]|0; //@line 1051 "instrum_dls.c"
 $20 = (+($19|0)); //@line 1051 "instrum_dls.c"
 $21 = $16 / $20; //@line 1051 "instrum_dls.c"
 $22 = $4; //@line 1051 "instrum_dls.c"
 $23 = ((($22)) + 13060|0); //@line 1051 "instrum_dls.c"
 $24 = HEAP32[$23>>2]|0; //@line 1051 "instrum_dls.c"
 $25 = (+($24|0)); //@line 1051 "instrum_dls.c"
 $26 = $21 * $25; //@line 1051 "instrum_dls.c"
 $27 = $26 * 1000.0; //@line 1051 "instrum_dls.c"
 $28 = $7; //@line 1051 "instrum_dls.c"
 $29 = $27 / $28; //@line 1051 "instrum_dls.c"
 $8 = $29; //@line 1051 "instrum_dls.c"
 $30 = $8; //@line 1052 "instrum_dls.c"
 $31 = (~~(($30))); //@line 1052 "instrum_dls.c"
 STACKTOP = sp;return ($31|0); //@line 1052 "instrum_dls.c"
}
function _recompute_envelope($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$old = 0, $$old1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0;
 var $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $6 = $4;
 $7 = $3;
 $8 = ((($7)) + 1724|0);
 $9 = (($8) + (($6*236)|0)|0);
 $10 = ((($9)) + 220|0);
 $11 = HEAP32[$10>>2]|0;
 $5 = $11;
 $12 = $5;
 $13 = ($12|0)>(5);
 $14 = $4;
 $15 = $3;
 $16 = ((($15)) + 1724|0);
 $17 = (($16) + (($14*236)|0)|0);
 if ($13) {
  HEAP8[$17>>0] = 0;
  $2 = 1;
  $128 = $2;
  STACKTOP = sp;return ($128|0);
 }
 $18 = ((($17)) + 4|0);
 $19 = HEAP32[$18>>2]|0;
 $20 = ((($19)) + 110|0);
 $21 = HEAP8[$20>>0]|0;
 $22 = $21&255;
 $23 = $22 & 64;
 $24 = ($23|0)!=(0);
 do {
  if ($24) {
   $25 = $4;
   $26 = $3;
   $27 = ((($26)) + 1724|0);
   $28 = (($27) + (($25*236)|0)|0);
   $29 = HEAP8[$28>>0]|0;
   $30 = $29&255;
   $31 = ($30|0)==(1);
   if ($31) {
    $$old = $5;
    $$old1 = ($$old|0)>(2);
    if (!($$old1)) {
     break;
    }
   } else {
    $32 = $4;
    $33 = $3;
    $34 = ((($33)) + 1724|0);
    $35 = (($34) + (($32*236)|0)|0);
    $36 = HEAP8[$35>>0]|0;
    $37 = $36&255;
    $38 = ($37|0)==(2);
    $39 = $5;
    $40 = ($39|0)>(2);
    $or$cond = $38 & $40;
    if (!($or$cond)) {
     break;
    }
   }
   $41 = $4;
   $42 = $3;
   $43 = ((($42)) + 1724|0);
   $44 = (($43) + (($41*236)|0)|0);
   $45 = ((($44)) + 32|0);
   HEAP32[$45>>2] = 0;
   $2 = 0;
   $128 = $2;
   STACKTOP = sp;return ($128|0);
  }
 } while(0);
 $46 = $5;
 $47 = (($46) + 1)|0;
 $48 = $4;
 $49 = $3;
 $50 = ((($49)) + 1724|0);
 $51 = (($50) + (($48*236)|0)|0);
 $52 = ((($51)) + 220|0);
 HEAP32[$52>>2] = $47;
 $53 = $4;
 $54 = $3;
 $55 = ((($54)) + 1724|0);
 $56 = (($55) + (($53*236)|0)|0);
 $57 = ((($56)) + 24|0);
 $58 = HEAP32[$57>>2]|0;
 $59 = $5;
 $60 = $4;
 $61 = $3;
 $62 = ((($61)) + 1724|0);
 $63 = (($62) + (($60*236)|0)|0);
 $64 = ((($63)) + 4|0);
 $65 = HEAP32[$64>>2]|0;
 $66 = ((($65)) + 60|0);
 $67 = (($66) + ($59<<2)|0);
 $68 = HEAP32[$67>>2]|0;
 $69 = ($58|0)==($68|0);
 if ($69) {
  $70 = $3;
  $71 = $4;
  $72 = (_recompute_envelope($70,$71)|0);
  $2 = $72;
  $128 = $2;
  STACKTOP = sp;return ($128|0);
 }
 $73 = $5;
 $74 = $4;
 $75 = $3;
 $76 = ((($75)) + 1724|0);
 $77 = (($76) + (($74*236)|0)|0);
 $78 = ((($77)) + 4|0);
 $79 = HEAP32[$78>>2]|0;
 $80 = ((($79)) + 60|0);
 $81 = (($80) + ($73<<2)|0);
 $82 = HEAP32[$81>>2]|0;
 $83 = $4;
 $84 = $3;
 $85 = ((($84)) + 1724|0);
 $86 = (($85) + (($83*236)|0)|0);
 $87 = ((($86)) + 28|0);
 HEAP32[$87>>2] = $82;
 $88 = $5;
 $89 = $4;
 $90 = $3;
 $91 = ((($90)) + 1724|0);
 $92 = (($91) + (($89*236)|0)|0);
 $93 = ((($92)) + 4|0);
 $94 = HEAP32[$93>>2]|0;
 $95 = ((($94)) + 36|0);
 $96 = (($95) + ($88<<2)|0);
 $97 = HEAP32[$96>>2]|0;
 $98 = $4;
 $99 = $3;
 $100 = ((($99)) + 1724|0);
 $101 = (($100) + (($98*236)|0)|0);
 $102 = ((($101)) + 32|0);
 HEAP32[$102>>2] = $97;
 $103 = $4;
 $104 = $3;
 $105 = ((($104)) + 1724|0);
 $106 = (($105) + (($103*236)|0)|0);
 $107 = ((($106)) + 28|0);
 $108 = HEAP32[$107>>2]|0;
 $109 = $4;
 $110 = $3;
 $111 = ((($110)) + 1724|0);
 $112 = (($111) + (($109*236)|0)|0);
 $113 = ((($112)) + 24|0);
 $114 = HEAP32[$113>>2]|0;
 $115 = ($108|0)<($114|0);
 if ($115) {
  $116 = $4;
  $117 = $3;
  $118 = ((($117)) + 1724|0);
  $119 = (($118) + (($116*236)|0)|0);
  $120 = ((($119)) + 32|0);
  $121 = HEAP32[$120>>2]|0;
  $122 = (0 - ($121))|0;
  $123 = $4;
  $124 = $3;
  $125 = ((($124)) + 1724|0);
  $126 = (($125) + (($123*236)|0)|0);
  $127 = ((($126)) + 32|0);
  HEAP32[$127>>2] = $122;
 }
 $2 = 0;
 $128 = $2;
 STACKTOP = sp;return ($128|0);
}
function _apply_envelope_to_amp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$ = 0, $$1 = 0, $$2 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0;
 var $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0.0, $12 = 0, $120 = 0.0, $121 = 0.0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0.0, $130 = 0, $131 = 0, $132 = 0;
 var $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0.0, $142 = 0.0, $143 = 0.0, $144 = 0.0, $145 = 0.0, $146 = 0.0, $147 = 0.0, $148 = 0.0, $149 = 0, $15 = 0, $150 = 0;
 var $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0.0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0.0, $4 = 0.0, $40 = 0.0, $41 = 0.0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0.0, $48 = 0.0, $49 = 0.0, $5 = 0.0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0.0, $7 = 0, $70 = 0.0, $71 = 0.0, $72 = 0.0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0.0;
 var $82 = 0.0, $83 = 0.0, $84 = 0.0, $85 = 0.0, $86 = 0.0, $87 = 0.0, $88 = 0.0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0.0, $93 = 0.0, $94 = 0.0, $95 = 0.0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $2 = $0;
 $3 = $1;
 $8 = $3;
 $9 = $2;
 $10 = ((($9)) + 1724|0);
 $11 = (($10) + (($8*236)|0)|0);
 $12 = ((($11)) + 68|0);
 $13 = +HEAPF32[$12>>2];
 $4 = $13;
 $14 = $3;
 $15 = $2;
 $16 = ((($15)) + 1724|0);
 $17 = (($16) + (($14*236)|0)|0);
 $18 = ((($17)) + 232|0);
 $19 = HEAP32[$18>>2]|0;
 $20 = ($19|0)==(0);
 $21 = $3;
 $22 = $2;
 $23 = ((($22)) + 1724|0);
 $24 = (($23) + (($21*236)|0)|0);
 if ($20) {
  $25 = ((($24)) + 72|0);
  $26 = +HEAPF32[$25>>2];
  $5 = $26;
  $27 = $3;
  $28 = $2;
  $29 = ((($28)) + 1724|0);
  $30 = (($29) + (($27*236)|0)|0);
  $31 = ((($30)) + 48|0);
  $32 = HEAP32[$31>>2]|0;
  $33 = ($32|0)!=(0);
  if ($33) {
   $34 = $3;
   $35 = $2;
   $36 = ((($35)) + 1724|0);
   $37 = (($36) + (($34*236)|0)|0);
   $38 = ((($37)) + 76|0);
   $39 = +HEAPF32[$38>>2];
   $40 = $4;
   $41 = $40 * $39;
   $4 = $41;
   $42 = $3;
   $43 = $2;
   $44 = ((($43)) + 1724|0);
   $45 = (($44) + (($42*236)|0)|0);
   $46 = ((($45)) + 76|0);
   $47 = +HEAPF32[$46>>2];
   $48 = $5;
   $49 = $48 * $47;
   $5 = $49;
  }
  $50 = $3;
  $51 = $2;
  $52 = ((($51)) + 1724|0);
  $53 = (($52) + (($50*236)|0)|0);
  $54 = ((($53)) + 4|0);
  $55 = HEAP32[$54>>2]|0;
  $56 = ((($55)) + 110|0);
  $57 = HEAP8[$56>>0]|0;
  $58 = $57&255;
  $59 = $58 & 64;
  $60 = ($59|0)!=(0);
  if ($60) {
   $61 = $3;
   $62 = $2;
   $63 = ((($62)) + 1724|0);
   $64 = (($63) + (($61*236)|0)|0);
   $65 = ((($64)) + 24|0);
   $66 = HEAP32[$65>>2]|0;
   $67 = $66 >> 23;
   $68 = (8 + ($67<<3)|0);
   $69 = +HEAPF64[$68>>3];
   $70 = $69;
   $71 = $4;
   $72 = $71 * $70;
   $4 = $72;
   $73 = $3;
   $74 = $2;
   $75 = ((($74)) + 1724|0);
   $76 = (($75) + (($73*236)|0)|0);
   $77 = ((($76)) + 24|0);
   $78 = HEAP32[$77>>2]|0;
   $79 = $78 >> 23;
   $80 = (8 + ($79<<3)|0);
   $81 = +HEAPF64[$80>>3];
   $82 = $81;
   $83 = $5;
   $84 = $83 * $82;
   $5 = $84;
  }
  $85 = $4;
  $86 = $85;
  $87 = $86 * 4096.0;
  $88 = $87;
  $89 = (~~(($88)));
  $6 = $89;
  $90 = $6;
  $91 = ($90|0)>(8191);
  $$ = $91 ? 8191 : $89;
  $6 = $$;
  $92 = $5;
  $93 = $92;
  $94 = $93 * 4096.0;
  $95 = $94;
  $96 = (~~(($95)));
  $7 = $96;
  $97 = $7;
  $98 = ($97|0)>(8191);
  $$2 = $98 ? 8191 : $96;
  $7 = $$2;
  $99 = $6;
  $100 = $3;
  $101 = $2;
  $102 = ((($101)) + 1724|0);
  $103 = (($102) + (($100*236)|0)|0);
  $104 = ((($103)) + 60|0);
  HEAP32[$104>>2] = $99;
  $105 = $7;
  $106 = $3;
  $107 = $2;
  $108 = ((($107)) + 1724|0);
  $109 = (($108) + (($106*236)|0)|0);
  $110 = ((($109)) + 64|0);
  HEAP32[$110>>2] = $105;
  STACKTOP = sp;return;
 } else {
  $111 = ((($24)) + 48|0);
  $112 = HEAP32[$111>>2]|0;
  $113 = ($112|0)!=(0);
  if ($113) {
   $114 = $3;
   $115 = $2;
   $116 = ((($115)) + 1724|0);
   $117 = (($116) + (($114*236)|0)|0);
   $118 = ((($117)) + 76|0);
   $119 = +HEAPF32[$118>>2];
   $120 = $4;
   $121 = $120 * $119;
   $4 = $121;
  }
  $122 = $3;
  $123 = $2;
  $124 = ((($123)) + 1724|0);
  $125 = (($124) + (($122*236)|0)|0);
  $126 = ((($125)) + 4|0);
  $127 = HEAP32[$126>>2]|0;
  $128 = ((($127)) + 110|0);
  $129 = HEAP8[$128>>0]|0;
  $130 = $129&255;
  $131 = $130 & 64;
  $132 = ($131|0)!=(0);
  if ($132) {
   $133 = $3;
   $134 = $2;
   $135 = ((($134)) + 1724|0);
   $136 = (($135) + (($133*236)|0)|0);
   $137 = ((($136)) + 24|0);
   $138 = HEAP32[$137>>2]|0;
   $139 = $138 >> 23;
   $140 = (8 + ($139<<3)|0);
   $141 = +HEAPF64[$140>>3];
   $142 = $141;
   $143 = $4;
   $144 = $143 * $142;
   $4 = $144;
  }
  $145 = $4;
  $146 = $145;
  $147 = $146 * 4096.0;
  $148 = $147;
  $149 = (~~(($148)));
  $6 = $149;
  $150 = $6;
  $151 = ($150|0)>(8191);
  $$1 = $151 ? 8191 : $149;
  $6 = $$1;
  $152 = $6;
  $153 = $3;
  $154 = $2;
  $155 = ((($154)) + 1724|0);
  $156 = (($155) + (($153*236)|0)|0);
  $157 = ((($156)) + 60|0);
  HEAP32[$157>>2] = $152;
  STACKTOP = sp;return;
 }
}
function _mix_voice($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $7 = sp + 8|0;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 HEAP32[$7>>2] = $3;
 $10 = $4;
 $11 = ((($10)) + 1724|0);
 $12 = $6;
 $13 = (($11) + (($12*236)|0)|0);
 $8 = $13;
 $14 = $8;
 $15 = HEAP8[$14>>0]|0;
 $16 = $15&255;
 $17 = ($16|0)==(4);
 if ($17) {
  $18 = HEAP32[$7>>2]|0;
  $19 = ($18|0)>=(20);
  if ($19) {
   HEAP32[$7>>2] = 20;
  }
  $20 = $4;
  $21 = $6;
  $22 = (_resample_voice($20,$21,$7)|0);
  $9 = $22;
  $23 = $4;
  $24 = $9;
  $25 = $5;
  $26 = $6;
  $27 = HEAP32[$7>>2]|0;
  _ramp_out($23,$24,$25,$26,$27);
  $28 = $8;
  HEAP8[$28>>0] = 0;
  STACKTOP = sp;return;
 }
 $29 = $4;
 $30 = $6;
 $31 = (_resample_voice($29,$30,$7)|0);
 $9 = $31;
 $32 = $4;
 $33 = ((($32)) + 8|0);
 $34 = HEAP32[$33>>2]|0;
 $35 = $34 & 1;
 $36 = ($35|0)!=(0);
 $37 = $8;
 if ($36) {
  $38 = ((($37)) + 32|0);
  $39 = HEAP32[$38>>2]|0;
  $40 = ($39|0)!=(0);
  if (!($40)) {
   $41 = $8;
   $42 = ((($41)) + 48|0);
   $43 = HEAP32[$42>>2]|0;
   $44 = ($43|0)!=(0);
   if (!($44)) {
    $50 = $4;
    $51 = $9;
    $52 = $5;
    $53 = $6;
    $54 = HEAP32[$7>>2]|0;
    _mix_mono($50,$51,$52,$53,$54);
    STACKTOP = sp;return;
   }
  }
  $45 = $4;
  $46 = $9;
  $47 = $5;
  $48 = $6;
  $49 = HEAP32[$7>>2]|0;
  _mix_mono_signal($45,$46,$47,$48,$49);
  STACKTOP = sp;return;
 }
 $55 = ((($37)) + 232|0);
 $56 = HEAP32[$55>>2]|0;
 $57 = ($56|0)==(0);
 $58 = $8;
 if ($57) {
  $59 = ((($58)) + 32|0);
  $60 = HEAP32[$59>>2]|0;
  $61 = ($60|0)!=(0);
  if (!($61)) {
   $62 = $8;
   $63 = ((($62)) + 48|0);
   $64 = HEAP32[$63>>2]|0;
   $65 = ($64|0)!=(0);
   if (!($65)) {
    $71 = $4;
    $72 = $9;
    $73 = $5;
    $74 = $6;
    $75 = HEAP32[$7>>2]|0;
    _mix_mystery($71,$72,$73,$74,$75);
    STACKTOP = sp;return;
   }
  }
  $66 = $4;
  $67 = $9;
  $68 = $5;
  $69 = $6;
  $70 = HEAP32[$7>>2]|0;
  _mix_mystery_signal($66,$67,$68,$69,$70);
  STACKTOP = sp;return;
 }
 $76 = ((($58)) + 232|0);
 $77 = HEAP32[$76>>2]|0;
 $78 = ($77|0)==(3);
 $79 = $8;
 if ($78) {
  $80 = ((($79)) + 32|0);
  $81 = HEAP32[$80>>2]|0;
  $82 = ($81|0)!=(0);
  if (!($82)) {
   $83 = $8;
   $84 = ((($83)) + 48|0);
   $85 = HEAP32[$84>>2]|0;
   $86 = ($85|0)!=(0);
   if (!($86)) {
    $92 = $4;
    $93 = $9;
    $94 = $5;
    $95 = $6;
    $96 = HEAP32[$7>>2]|0;
    _mix_center($92,$93,$94,$95,$96);
    STACKTOP = sp;return;
   }
  }
  $87 = $4;
  $88 = $9;
  $89 = $5;
  $90 = $6;
  $91 = HEAP32[$7>>2]|0;
  _mix_center_signal($87,$88,$89,$90,$91);
  STACKTOP = sp;return;
 }
 $97 = ((($79)) + 232|0);
 $98 = HEAP32[$97>>2]|0;
 $99 = ($98|0)==(2);
 if ($99) {
  $100 = $5;
  $101 = ((($100)) + 4|0);
  $5 = $101;
 }
 $102 = $8;
 $103 = ((($102)) + 32|0);
 $104 = HEAP32[$103>>2]|0;
 $105 = ($104|0)!=(0);
 if (!($105)) {
  $106 = $8;
  $107 = ((($106)) + 48|0);
  $108 = HEAP32[$107>>2]|0;
  $109 = ($108|0)!=(0);
  if (!($109)) {
   $115 = $4;
   $116 = $9;
   $117 = $5;
   $118 = $6;
   $119 = HEAP32[$7>>2]|0;
   _mix_single($115,$116,$117,$118,$119);
   STACKTOP = sp;return;
  }
 }
 $110 = $4;
 $111 = $9;
 $112 = $5;
 $113 = $6;
 $114 = HEAP32[$7>>2]|0;
 _mix_single_signal($110,$111,$112,$113,$114);
 STACKTOP = sp;return;
}
function _ramp_out($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$1 = 0, $$2 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0;
 var $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0;
 var $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0;
 var $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0;
 var $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0;
 var $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $14 = 0;
 $15 = $9;
 $16 = ($15|0)==(0);
 if ($16) {
  $9 = 1;
 }
 $17 = $8;
 $18 = $5;
 $19 = ((($18)) + 1724|0);
 $20 = (($19) + (($17*236)|0)|0);
 $21 = ((($20)) + 60|0);
 $22 = HEAP32[$21>>2]|0;
 $10 = $22;
 $23 = $10;
 $24 = $9;
 $25 = (($23|0) / ($24|0))&-1;
 $26 = (0 - ($25))|0;
 $12 = $26;
 $27 = $12;
 $28 = ($27|0)!=(0);
 $$ = $28 ? $26 : -1;
 $12 = $$;
 $29 = $5;
 $30 = ((($29)) + 8|0);
 $31 = HEAP32[$30>>2]|0;
 $32 = $31 & 1;
 $33 = ($32|0)!=(0);
 if ($33) {
  while(1) {
   $169 = $9;
   $170 = (($169) + -1)|0;
   $9 = $170;
   $171 = ($169|0)!=(0);
   if (!($171)) {
    label = 23;
    break;
   }
   $172 = $12;
   $173 = $10;
   $174 = (($173) + ($172))|0;
   $10 = $174;
   $175 = $10;
   $176 = ($175|0)<(0);
   if ($176) {
    label = 23;
    break;
   }
   $177 = $6;
   $178 = ((($177)) + 2|0);
   $6 = $178;
   $179 = HEAP16[$177>>1]|0;
   $14 = $179;
   $180 = $10;
   $181 = $14;
   $182 = $181 << 16 >> 16;
   $183 = Math_imul($180, $182)|0;
   $184 = $7;
   $185 = ((($184)) + 4|0);
   $7 = $185;
   $186 = HEAP32[$184>>2]|0;
   $187 = (($186) + ($183))|0;
   HEAP32[$184>>2] = $187;
  }
  if ((label|0) == 23) {
   STACKTOP = sp;return;
  }
 }
 $34 = $8;
 $35 = $5;
 $36 = ((($35)) + 1724|0);
 $37 = (($36) + (($34*236)|0)|0);
 $38 = ((($37)) + 232|0);
 $39 = HEAP32[$38>>2]|0;
 $40 = ($39|0)==(0);
 $41 = $8;
 $42 = $5;
 $43 = ((($42)) + 1724|0);
 $44 = (($43) + (($41*236)|0)|0);
 if ($40) {
  $45 = ((($44)) + 64|0);
  $46 = HEAP32[$45>>2]|0;
  $11 = $46;
  $47 = $11;
  $48 = $9;
  $49 = (($47|0) / ($48|0))&-1;
  $50 = (0 - ($49))|0;
  $13 = $50;
  while(1) {
   $51 = $9;
   $52 = (($51) + -1)|0;
   $9 = $52;
   $53 = ($51|0)!=(0);
   if (!($53)) {
    break;
   }
   $54 = $12;
   $55 = $10;
   $56 = (($55) + ($54))|0;
   $10 = $56;
   $57 = $10;
   $58 = ($57|0)<(0);
   $$1 = $58 ? 0 : $56;
   $10 = $$1;
   $59 = $13;
   $60 = $11;
   $61 = (($60) + ($59))|0;
   $11 = $61;
   $62 = $11;
   $63 = ($62|0)<(0);
   $$2 = $63 ? 0 : $61;
   $11 = $$2;
   $64 = $6;
   $65 = ((($64)) + 2|0);
   $6 = $65;
   $66 = HEAP16[$64>>1]|0;
   $14 = $66;
   $67 = $10;
   $68 = $14;
   $69 = $68 << 16 >> 16;
   $70 = Math_imul($67, $69)|0;
   $71 = $7;
   $72 = ((($71)) + 4|0);
   $7 = $72;
   $73 = HEAP32[$71>>2]|0;
   $74 = (($73) + ($70))|0;
   HEAP32[$71>>2] = $74;
   $75 = $11;
   $76 = $14;
   $77 = $76 << 16 >> 16;
   $78 = Math_imul($75, $77)|0;
   $79 = $7;
   $80 = ((($79)) + 4|0);
   $7 = $80;
   $81 = HEAP32[$79>>2]|0;
   $82 = (($81) + ($78))|0;
   HEAP32[$79>>2] = $82;
  }
  STACKTOP = sp;return;
 }
 $83 = ((($44)) + 232|0);
 $84 = HEAP32[$83>>2]|0;
 $85 = ($84|0)==(3);
 if ($85) {
  while(1) {
   $86 = $9;
   $87 = (($86) + -1)|0;
   $9 = $87;
   $88 = ($86|0)!=(0);
   if (!($88)) {
    label = 23;
    break;
   }
   $89 = $12;
   $90 = $10;
   $91 = (($90) + ($89))|0;
   $10 = $91;
   $92 = $10;
   $93 = ($92|0)<(0);
   if ($93) {
    label = 23;
    break;
   }
   $94 = $6;
   $95 = ((($94)) + 2|0);
   $6 = $95;
   $96 = HEAP16[$94>>1]|0;
   $14 = $96;
   $97 = $10;
   $98 = $14;
   $99 = $98 << 16 >> 16;
   $100 = Math_imul($97, $99)|0;
   $101 = $7;
   $102 = ((($101)) + 4|0);
   $7 = $102;
   $103 = HEAP32[$101>>2]|0;
   $104 = (($103) + ($100))|0;
   HEAP32[$101>>2] = $104;
   $105 = $10;
   $106 = $14;
   $107 = $106 << 16 >> 16;
   $108 = Math_imul($105, $107)|0;
   $109 = $7;
   $110 = ((($109)) + 4|0);
   $7 = $110;
   $111 = HEAP32[$109>>2]|0;
   $112 = (($111) + ($108))|0;
   HEAP32[$109>>2] = $112;
  }
  if ((label|0) == 23) {
   STACKTOP = sp;return;
  }
 }
 $113 = $8;
 $114 = $5;
 $115 = ((($114)) + 1724|0);
 $116 = (($115) + (($113*236)|0)|0);
 $117 = ((($116)) + 232|0);
 $118 = HEAP32[$117>>2]|0;
 $119 = ($118|0)==(1);
 if ($119) {
  while(1) {
   $120 = $9;
   $121 = (($120) + -1)|0;
   $9 = $121;
   $122 = ($120|0)!=(0);
   if (!($122)) {
    label = 23;
    break;
   }
   $123 = $12;
   $124 = $10;
   $125 = (($124) + ($123))|0;
   $10 = $125;
   $126 = $10;
   $127 = ($126|0)<(0);
   if ($127) {
    label = 23;
    break;
   }
   $128 = $6;
   $129 = ((($128)) + 2|0);
   $6 = $129;
   $130 = HEAP16[$128>>1]|0;
   $14 = $130;
   $131 = $10;
   $132 = $14;
   $133 = $132 << 16 >> 16;
   $134 = Math_imul($131, $133)|0;
   $135 = $7;
   $136 = ((($135)) + 4|0);
   $7 = $136;
   $137 = HEAP32[$135>>2]|0;
   $138 = (($137) + ($134))|0;
   HEAP32[$135>>2] = $138;
   $139 = $7;
   $140 = ((($139)) + 4|0);
   $7 = $140;
  }
  if ((label|0) == 23) {
   STACKTOP = sp;return;
  }
 }
 $141 = $8;
 $142 = $5;
 $143 = ((($142)) + 1724|0);
 $144 = (($143) + (($141*236)|0)|0);
 $145 = ((($144)) + 232|0);
 $146 = HEAP32[$145>>2]|0;
 $147 = ($146|0)==(2);
 if (!($147)) {
  STACKTOP = sp;return;
 }
 while(1) {
  $148 = $9;
  $149 = (($148) + -1)|0;
  $9 = $149;
  $150 = ($148|0)!=(0);
  if (!($150)) {
   label = 23;
   break;
  }
  $151 = $12;
  $152 = $10;
  $153 = (($152) + ($151))|0;
  $10 = $153;
  $154 = $10;
  $155 = ($154|0)<(0);
  if ($155) {
   label = 23;
   break;
  }
  $156 = $6;
  $157 = ((($156)) + 2|0);
  $6 = $157;
  $158 = HEAP16[$156>>1]|0;
  $14 = $158;
  $159 = $7;
  $160 = ((($159)) + 4|0);
  $7 = $160;
  $161 = $10;
  $162 = $14;
  $163 = $162 << 16 >> 16;
  $164 = Math_imul($161, $163)|0;
  $165 = $7;
  $166 = ((($165)) + 4|0);
  $7 = $166;
  $167 = HEAP32[$165>>2]|0;
  $168 = (($167) + ($164))|0;
  HEAP32[$165>>2] = $168;
 }
 if ((label|0) == 23) {
  STACKTOP = sp;return;
 }
}
function _mix_mono_signal($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $14 = $5;
 $15 = ((($14)) + 1724|0);
 $16 = $8;
 $17 = (($15) + (($16*236)|0)|0);
 $10 = $17;
 $18 = $10;
 $19 = ((($18)) + 60|0);
 $20 = HEAP32[$19>>2]|0;
 $11 = $20;
 $21 = $10;
 $22 = ((($21)) + 224|0);
 $23 = HEAP32[$22>>2]|0;
 $12 = $23;
 $24 = ($23|0)!=(0);
 do {
  if (!($24)) {
   $25 = $5;
   $26 = ((($25)) + 13060|0);
   $27 = HEAP32[$26>>2]|0;
   $12 = $27;
   $28 = $5;
   $29 = $8;
   $30 = (_update_signal($28,$29)|0);
   $31 = ($30|0)!=(0);
   if ($31) {
    STACKTOP = sp;return;
   } else {
    $32 = $10;
    $33 = ((($32)) + 60|0);
    $34 = HEAP32[$33>>2]|0;
    $11 = $34;
    break;
   }
  }
 } while(0);
 while(1) {
  $35 = $9;
  $36 = ($35|0)!=(0);
  if (!($36)) {
   label = 14;
   break;
  }
  $37 = $12;
  $38 = $9;
  $39 = ($37|0)<($38|0);
  $40 = $12;
  $41 = $9;
  if (!($39)) {
   label = 11;
   break;
  }
  $42 = (($41) - ($40))|0;
  $9 = $42;
  while(1) {
   $43 = $12;
   $44 = (($43) + -1)|0;
   $12 = $44;
   $45 = ($43|0)!=(0);
   if (!($45)) {
    break;
   }
   $46 = $6;
   $47 = ((($46)) + 2|0);
   $6 = $47;
   $48 = HEAP16[$46>>1]|0;
   $13 = $48;
   $49 = $11;
   $50 = $13;
   $51 = $50 << 16 >> 16;
   $52 = Math_imul($49, $51)|0;
   $53 = $7;
   $54 = ((($53)) + 4|0);
   $7 = $54;
   $55 = HEAP32[$53>>2]|0;
   $56 = (($55) + ($52))|0;
   HEAP32[$53>>2] = $56;
  }
  $57 = $5;
  $58 = ((($57)) + 13060|0);
  $59 = HEAP32[$58>>2]|0;
  $12 = $59;
  $60 = $5;
  $61 = $8;
  $62 = (_update_signal($60,$61)|0);
  $63 = ($62|0)!=(0);
  if ($63) {
   label = 14;
   break;
  }
  $64 = $10;
  $65 = ((($64)) + 60|0);
  $66 = HEAP32[$65>>2]|0;
  $11 = $66;
 }
 if ((label|0) == 11) {
  $67 = (($40) - ($41))|0;
  $68 = $10;
  $69 = ((($68)) + 224|0);
  HEAP32[$69>>2] = $67;
  while(1) {
   $70 = $9;
   $71 = (($70) + -1)|0;
   $9 = $71;
   $72 = ($70|0)!=(0);
   if (!($72)) {
    break;
   }
   $73 = $6;
   $74 = ((($73)) + 2|0);
   $6 = $74;
   $75 = HEAP16[$73>>1]|0;
   $13 = $75;
   $76 = $11;
   $77 = $13;
   $78 = $77 << 16 >> 16;
   $79 = Math_imul($76, $78)|0;
   $80 = $7;
   $81 = ((($80)) + 4|0);
   $7 = $81;
   $82 = HEAP32[$80>>2]|0;
   $83 = (($82) + ($79))|0;
   HEAP32[$80>>2] = $83;
  }
  STACKTOP = sp;return;
 }
 else if ((label|0) == 14) {
  STACKTOP = sp;return;
 }
}
function _mix_mono($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $12 = $8;
 $13 = $5;
 $14 = ((($13)) + 1724|0);
 $15 = (($14) + (($12*236)|0)|0);
 $16 = ((($15)) + 60|0);
 $17 = HEAP32[$16>>2]|0;
 $10 = $17;
 while(1) {
  $18 = $9;
  $19 = (($18) + -1)|0;
  $9 = $19;
  $20 = ($18|0)!=(0);
  if (!($20)) {
   break;
  }
  $21 = $6;
  $22 = ((($21)) + 2|0);
  $6 = $22;
  $23 = HEAP16[$21>>1]|0;
  $11 = $23;
  $24 = $10;
  $25 = $11;
  $26 = $25 << 16 >> 16;
  $27 = Math_imul($24, $26)|0;
  $28 = $7;
  $29 = ((($28)) + 4|0);
  $7 = $29;
  $30 = HEAP32[$28>>2]|0;
  $31 = (($30) + ($27))|0;
  HEAP32[$28>>2] = $31;
 }
 STACKTOP = sp;return;
}
function _mix_mystery_signal($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $15 = $5;
 $16 = ((($15)) + 1724|0);
 $17 = $8;
 $18 = (($16) + (($17*236)|0)|0);
 $10 = $18;
 $19 = $10;
 $20 = ((($19)) + 60|0);
 $21 = HEAP32[$20>>2]|0;
 $11 = $21;
 $22 = $10;
 $23 = ((($22)) + 64|0);
 $24 = HEAP32[$23>>2]|0;
 $12 = $24;
 $25 = $10;
 $26 = ((($25)) + 224|0);
 $27 = HEAP32[$26>>2]|0;
 $13 = $27;
 $28 = ($27|0)!=(0);
 do {
  if (!($28)) {
   $29 = $5;
   $30 = ((($29)) + 13060|0);
   $31 = HEAP32[$30>>2]|0;
   $13 = $31;
   $32 = $5;
   $33 = $8;
   $34 = (_update_signal($32,$33)|0);
   $35 = ($34|0)!=(0);
   if ($35) {
    STACKTOP = sp;return;
   } else {
    $36 = $10;
    $37 = ((($36)) + 60|0);
    $38 = HEAP32[$37>>2]|0;
    $11 = $38;
    $39 = $10;
    $40 = ((($39)) + 64|0);
    $41 = HEAP32[$40>>2]|0;
    $12 = $41;
    break;
   }
  }
 } while(0);
 while(1) {
  $42 = $9;
  $43 = ($42|0)!=(0);
  if (!($43)) {
   label = 14;
   break;
  }
  $44 = $13;
  $45 = $9;
  $46 = ($44|0)<($45|0);
  $47 = $13;
  $48 = $9;
  if (!($46)) {
   label = 11;
   break;
  }
  $49 = (($48) - ($47))|0;
  $9 = $49;
  while(1) {
   $50 = $13;
   $51 = (($50) + -1)|0;
   $13 = $51;
   $52 = ($50|0)!=(0);
   if (!($52)) {
    break;
   }
   $53 = $6;
   $54 = ((($53)) + 2|0);
   $6 = $54;
   $55 = HEAP16[$53>>1]|0;
   $14 = $55;
   $56 = $11;
   $57 = $14;
   $58 = $57 << 16 >> 16;
   $59 = Math_imul($56, $58)|0;
   $60 = $7;
   $61 = ((($60)) + 4|0);
   $7 = $61;
   $62 = HEAP32[$60>>2]|0;
   $63 = (($62) + ($59))|0;
   HEAP32[$60>>2] = $63;
   $64 = $12;
   $65 = $14;
   $66 = $65 << 16 >> 16;
   $67 = Math_imul($64, $66)|0;
   $68 = $7;
   $69 = ((($68)) + 4|0);
   $7 = $69;
   $70 = HEAP32[$68>>2]|0;
   $71 = (($70) + ($67))|0;
   HEAP32[$68>>2] = $71;
  }
  $72 = $5;
  $73 = ((($72)) + 13060|0);
  $74 = HEAP32[$73>>2]|0;
  $13 = $74;
  $75 = $5;
  $76 = $8;
  $77 = (_update_signal($75,$76)|0);
  $78 = ($77|0)!=(0);
  if ($78) {
   label = 14;
   break;
  }
  $79 = $10;
  $80 = ((($79)) + 60|0);
  $81 = HEAP32[$80>>2]|0;
  $11 = $81;
  $82 = $10;
  $83 = ((($82)) + 64|0);
  $84 = HEAP32[$83>>2]|0;
  $12 = $84;
 }
 if ((label|0) == 11) {
  $85 = (($47) - ($48))|0;
  $86 = $10;
  $87 = ((($86)) + 224|0);
  HEAP32[$87>>2] = $85;
  while(1) {
   $88 = $9;
   $89 = (($88) + -1)|0;
   $9 = $89;
   $90 = ($88|0)!=(0);
   if (!($90)) {
    break;
   }
   $91 = $6;
   $92 = ((($91)) + 2|0);
   $6 = $92;
   $93 = HEAP16[$91>>1]|0;
   $14 = $93;
   $94 = $11;
   $95 = $14;
   $96 = $95 << 16 >> 16;
   $97 = Math_imul($94, $96)|0;
   $98 = $7;
   $99 = ((($98)) + 4|0);
   $7 = $99;
   $100 = HEAP32[$98>>2]|0;
   $101 = (($100) + ($97))|0;
   HEAP32[$98>>2] = $101;
   $102 = $12;
   $103 = $14;
   $104 = $103 << 16 >> 16;
   $105 = Math_imul($102, $104)|0;
   $106 = $7;
   $107 = ((($106)) + 4|0);
   $7 = $107;
   $108 = HEAP32[$106>>2]|0;
   $109 = (($108) + ($105))|0;
   HEAP32[$106>>2] = $109;
  }
  STACKTOP = sp;return;
 }
 else if ((label|0) == 14) {
  STACKTOP = sp;return;
 }
}
function _mix_mystery($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $13 = $8;
 $14 = $5;
 $15 = ((($14)) + 1724|0);
 $16 = (($15) + (($13*236)|0)|0);
 $17 = ((($16)) + 60|0);
 $18 = HEAP32[$17>>2]|0;
 $10 = $18;
 $19 = $8;
 $20 = $5;
 $21 = ((($20)) + 1724|0);
 $22 = (($21) + (($19*236)|0)|0);
 $23 = ((($22)) + 64|0);
 $24 = HEAP32[$23>>2]|0;
 $11 = $24;
 while(1) {
  $25 = $9;
  $26 = (($25) + -1)|0;
  $9 = $26;
  $27 = ($25|0)!=(0);
  if (!($27)) {
   break;
  }
  $28 = $6;
  $29 = ((($28)) + 2|0);
  $6 = $29;
  $30 = HEAP16[$28>>1]|0;
  $12 = $30;
  $31 = $10;
  $32 = $12;
  $33 = $32 << 16 >> 16;
  $34 = Math_imul($31, $33)|0;
  $35 = $7;
  $36 = ((($35)) + 4|0);
  $7 = $36;
  $37 = HEAP32[$35>>2]|0;
  $38 = (($37) + ($34))|0;
  HEAP32[$35>>2] = $38;
  $39 = $11;
  $40 = $12;
  $41 = $40 << 16 >> 16;
  $42 = Math_imul($39, $41)|0;
  $43 = $7;
  $44 = ((($43)) + 4|0);
  $7 = $44;
  $45 = HEAP32[$43>>2]|0;
  $46 = (($45) + ($42))|0;
  HEAP32[$43>>2] = $46;
 }
 STACKTOP = sp;return;
}
function _mix_center_signal($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $14 = $5;
 $15 = ((($14)) + 1724|0);
 $16 = $8;
 $17 = (($15) + (($16*236)|0)|0);
 $10 = $17;
 $18 = $10;
 $19 = ((($18)) + 60|0);
 $20 = HEAP32[$19>>2]|0;
 $11 = $20;
 $21 = $10;
 $22 = ((($21)) + 224|0);
 $23 = HEAP32[$22>>2]|0;
 $12 = $23;
 $24 = ($23|0)!=(0);
 do {
  if (!($24)) {
   $25 = $5;
   $26 = ((($25)) + 13060|0);
   $27 = HEAP32[$26>>2]|0;
   $12 = $27;
   $28 = $5;
   $29 = $8;
   $30 = (_update_signal($28,$29)|0);
   $31 = ($30|0)!=(0);
   if ($31) {
    STACKTOP = sp;return;
   } else {
    $32 = $10;
    $33 = ((($32)) + 60|0);
    $34 = HEAP32[$33>>2]|0;
    $11 = $34;
    break;
   }
  }
 } while(0);
 while(1) {
  $35 = $9;
  $36 = ($35|0)!=(0);
  if (!($36)) {
   label = 14;
   break;
  }
  $37 = $12;
  $38 = $9;
  $39 = ($37|0)<($38|0);
  $40 = $12;
  $41 = $9;
  if (!($39)) {
   label = 11;
   break;
  }
  $42 = (($41) - ($40))|0;
  $9 = $42;
  while(1) {
   $43 = $12;
   $44 = (($43) + -1)|0;
   $12 = $44;
   $45 = ($43|0)!=(0);
   if (!($45)) {
    break;
   }
   $46 = $6;
   $47 = ((($46)) + 2|0);
   $6 = $47;
   $48 = HEAP16[$46>>1]|0;
   $13 = $48;
   $49 = $11;
   $50 = $13;
   $51 = $50 << 16 >> 16;
   $52 = Math_imul($49, $51)|0;
   $53 = $7;
   $54 = ((($53)) + 4|0);
   $7 = $54;
   $55 = HEAP32[$53>>2]|0;
   $56 = (($55) + ($52))|0;
   HEAP32[$53>>2] = $56;
   $57 = $11;
   $58 = $13;
   $59 = $58 << 16 >> 16;
   $60 = Math_imul($57, $59)|0;
   $61 = $7;
   $62 = ((($61)) + 4|0);
   $7 = $62;
   $63 = HEAP32[$61>>2]|0;
   $64 = (($63) + ($60))|0;
   HEAP32[$61>>2] = $64;
  }
  $65 = $5;
  $66 = ((($65)) + 13060|0);
  $67 = HEAP32[$66>>2]|0;
  $12 = $67;
  $68 = $5;
  $69 = $8;
  $70 = (_update_signal($68,$69)|0);
  $71 = ($70|0)!=(0);
  if ($71) {
   label = 14;
   break;
  }
  $72 = $10;
  $73 = ((($72)) + 60|0);
  $74 = HEAP32[$73>>2]|0;
  $11 = $74;
 }
 if ((label|0) == 11) {
  $75 = (($40) - ($41))|0;
  $76 = $10;
  $77 = ((($76)) + 224|0);
  HEAP32[$77>>2] = $75;
  while(1) {
   $78 = $9;
   $79 = (($78) + -1)|0;
   $9 = $79;
   $80 = ($78|0)!=(0);
   if (!($80)) {
    break;
   }
   $81 = $6;
   $82 = ((($81)) + 2|0);
   $6 = $82;
   $83 = HEAP16[$81>>1]|0;
   $13 = $83;
   $84 = $11;
   $85 = $13;
   $86 = $85 << 16 >> 16;
   $87 = Math_imul($84, $86)|0;
   $88 = $7;
   $89 = ((($88)) + 4|0);
   $7 = $89;
   $90 = HEAP32[$88>>2]|0;
   $91 = (($90) + ($87))|0;
   HEAP32[$88>>2] = $91;
   $92 = $11;
   $93 = $13;
   $94 = $93 << 16 >> 16;
   $95 = Math_imul($92, $94)|0;
   $96 = $7;
   $97 = ((($96)) + 4|0);
   $7 = $97;
   $98 = HEAP32[$96>>2]|0;
   $99 = (($98) + ($95))|0;
   HEAP32[$96>>2] = $99;
  }
  STACKTOP = sp;return;
 }
 else if ((label|0) == 14) {
  STACKTOP = sp;return;
 }
}
function _mix_center($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $12 = $8;
 $13 = $5;
 $14 = ((($13)) + 1724|0);
 $15 = (($14) + (($12*236)|0)|0);
 $16 = ((($15)) + 60|0);
 $17 = HEAP32[$16>>2]|0;
 $10 = $17;
 while(1) {
  $18 = $9;
  $19 = (($18) + -1)|0;
  $9 = $19;
  $20 = ($18|0)!=(0);
  if (!($20)) {
   break;
  }
  $21 = $6;
  $22 = ((($21)) + 2|0);
  $6 = $22;
  $23 = HEAP16[$21>>1]|0;
  $11 = $23;
  $24 = $10;
  $25 = $11;
  $26 = $25 << 16 >> 16;
  $27 = Math_imul($24, $26)|0;
  $28 = $7;
  $29 = ((($28)) + 4|0);
  $7 = $29;
  $30 = HEAP32[$28>>2]|0;
  $31 = (($30) + ($27))|0;
  HEAP32[$28>>2] = $31;
  $32 = $10;
  $33 = $11;
  $34 = $33 << 16 >> 16;
  $35 = Math_imul($32, $34)|0;
  $36 = $7;
  $37 = ((($36)) + 4|0);
  $7 = $37;
  $38 = HEAP32[$36>>2]|0;
  $39 = (($38) + ($35))|0;
  HEAP32[$36>>2] = $39;
 }
 STACKTOP = sp;return;
}
function _mix_single_signal($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $14 = $5;
 $15 = ((($14)) + 1724|0);
 $16 = $8;
 $17 = (($15) + (($16*236)|0)|0);
 $10 = $17;
 $18 = $10;
 $19 = ((($18)) + 60|0);
 $20 = HEAP32[$19>>2]|0;
 $11 = $20;
 $21 = $10;
 $22 = ((($21)) + 224|0);
 $23 = HEAP32[$22>>2]|0;
 $12 = $23;
 $24 = ($23|0)!=(0);
 do {
  if (!($24)) {
   $25 = $5;
   $26 = ((($25)) + 13060|0);
   $27 = HEAP32[$26>>2]|0;
   $12 = $27;
   $28 = $5;
   $29 = $8;
   $30 = (_update_signal($28,$29)|0);
   $31 = ($30|0)!=(0);
   if ($31) {
    STACKTOP = sp;return;
   } else {
    $32 = $10;
    $33 = ((($32)) + 60|0);
    $34 = HEAP32[$33>>2]|0;
    $11 = $34;
    break;
   }
  }
 } while(0);
 while(1) {
  $35 = $9;
  $36 = ($35|0)!=(0);
  if (!($36)) {
   label = 14;
   break;
  }
  $37 = $12;
  $38 = $9;
  $39 = ($37|0)<($38|0);
  $40 = $12;
  $41 = $9;
  if (!($39)) {
   label = 11;
   break;
  }
  $42 = (($41) - ($40))|0;
  $9 = $42;
  while(1) {
   $43 = $12;
   $44 = (($43) + -1)|0;
   $12 = $44;
   $45 = ($43|0)!=(0);
   if (!($45)) {
    break;
   }
   $46 = $6;
   $47 = ((($46)) + 2|0);
   $6 = $47;
   $48 = HEAP16[$46>>1]|0;
   $13 = $48;
   $49 = $11;
   $50 = $13;
   $51 = $50 << 16 >> 16;
   $52 = Math_imul($49, $51)|0;
   $53 = $7;
   $54 = ((($53)) + 4|0);
   $7 = $54;
   $55 = HEAP32[$53>>2]|0;
   $56 = (($55) + ($52))|0;
   HEAP32[$53>>2] = $56;
   $57 = $7;
   $58 = ((($57)) + 4|0);
   $7 = $58;
  }
  $59 = $5;
  $60 = ((($59)) + 13060|0);
  $61 = HEAP32[$60>>2]|0;
  $12 = $61;
  $62 = $5;
  $63 = $8;
  $64 = (_update_signal($62,$63)|0);
  $65 = ($64|0)!=(0);
  if ($65) {
   label = 14;
   break;
  }
  $66 = $10;
  $67 = ((($66)) + 60|0);
  $68 = HEAP32[$67>>2]|0;
  $11 = $68;
 }
 if ((label|0) == 11) {
  $69 = (($40) - ($41))|0;
  $70 = $10;
  $71 = ((($70)) + 224|0);
  HEAP32[$71>>2] = $69;
  while(1) {
   $72 = $9;
   $73 = (($72) + -1)|0;
   $9 = $73;
   $74 = ($72|0)!=(0);
   if (!($74)) {
    break;
   }
   $75 = $6;
   $76 = ((($75)) + 2|0);
   $6 = $76;
   $77 = HEAP16[$75>>1]|0;
   $13 = $77;
   $78 = $11;
   $79 = $13;
   $80 = $79 << 16 >> 16;
   $81 = Math_imul($78, $80)|0;
   $82 = $7;
   $83 = ((($82)) + 4|0);
   $7 = $83;
   $84 = HEAP32[$82>>2]|0;
   $85 = (($84) + ($81))|0;
   HEAP32[$82>>2] = $85;
   $86 = $7;
   $87 = ((($86)) + 4|0);
   $7 = $87;
  }
  STACKTOP = sp;return;
 }
 else if ((label|0) == 14) {
  STACKTOP = sp;return;
 }
}
function _mix_single($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 $12 = $8;
 $13 = $5;
 $14 = ((($13)) + 1724|0);
 $15 = (($14) + (($12*236)|0)|0);
 $16 = ((($15)) + 60|0);
 $17 = HEAP32[$16>>2]|0;
 $10 = $17;
 while(1) {
  $18 = $9;
  $19 = (($18) + -1)|0;
  $9 = $19;
  $20 = ($18|0)!=(0);
  if (!($20)) {
   break;
  }
  $21 = $6;
  $22 = ((($21)) + 2|0);
  $6 = $22;
  $23 = HEAP16[$21>>1]|0;
  $11 = $23;
  $24 = $10;
  $25 = $11;
  $26 = $25 << 16 >> 16;
  $27 = Math_imul($24, $26)|0;
  $28 = $7;
  $29 = ((($28)) + 4|0);
  $7 = $29;
  $30 = HEAP32[$28>>2]|0;
  $31 = (($30) + ($27))|0;
  HEAP32[$28>>2] = $31;
  $32 = $7;
  $33 = ((($32)) + 4|0);
  $7 = $33;
 }
 STACKTOP = sp;return;
}
function _update_signal($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $4;
 $6 = $3;
 $7 = ((($6)) + 1724|0);
 $8 = (($7) + (($5*236)|0)|0);
 $9 = ((($8)) + 32|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = ($10|0)!=(0);
 if ($11) {
  $12 = $3;
  $13 = $4;
  $14 = (_update_envelope($12,$13)|0);
  $15 = ($14|0)!=(0);
  if ($15) {
   $2 = 1;
   $27 = $2;
   STACKTOP = sp;return ($27|0);
  }
 }
 $16 = $4;
 $17 = $3;
 $18 = ((($17)) + 1724|0);
 $19 = (($18) + (($16*236)|0)|0);
 $20 = ((($19)) + 48|0);
 $21 = HEAP32[$20>>2]|0;
 $22 = ($21|0)!=(0);
 if ($22) {
  $23 = $3;
  $24 = $4;
  _update_tremolo($23,$24);
 }
 $25 = $3;
 $26 = $4;
 _apply_envelope_to_amp($25,$26);
 $2 = 0;
 $27 = $2;
 STACKTOP = sp;return ($27|0);
}
function _update_envelope($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $4;
 $6 = $3;
 $7 = ((($6)) + 1724|0);
 $8 = (($7) + (($5*236)|0)|0);
 $9 = ((($8)) + 32|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = $4;
 $12 = $3;
 $13 = ((($12)) + 1724|0);
 $14 = (($13) + (($11*236)|0)|0);
 $15 = ((($14)) + 24|0);
 $16 = HEAP32[$15>>2]|0;
 $17 = (($16) + ($10))|0;
 HEAP32[$15>>2] = $17;
 $18 = $4;
 $19 = $3;
 $20 = ((($19)) + 1724|0);
 $21 = (($20) + (($18*236)|0)|0);
 $22 = ((($21)) + 32|0);
 $23 = HEAP32[$22>>2]|0;
 $24 = ($23|0)<(0);
 if ($24) {
  $25 = $4;
  $26 = $3;
  $27 = ((($26)) + 1724|0);
  $28 = (($27) + (($25*236)|0)|0);
  $29 = ((($28)) + 24|0);
  $30 = HEAP32[$29>>2]|0;
  $31 = $4;
  $32 = $3;
  $33 = ((($32)) + 1724|0);
  $34 = (($33) + (($31*236)|0)|0);
  $35 = ((($34)) + 28|0);
  $36 = HEAP32[$35>>2]|0;
  $37 = ($30|0)<=($36|0);
  if ($37) {
   label = 5;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $38 = $4;
  $39 = $3;
  $40 = ((($39)) + 1724|0);
  $41 = (($40) + (($38*236)|0)|0);
  $42 = ((($41)) + 32|0);
  $43 = HEAP32[$42>>2]|0;
  $44 = ($43|0)>(0);
  if ($44) {
   $45 = $4;
   $46 = $3;
   $47 = ((($46)) + 1724|0);
   $48 = (($47) + (($45*236)|0)|0);
   $49 = ((($48)) + 24|0);
   $50 = HEAP32[$49>>2]|0;
   $51 = $4;
   $52 = $3;
   $53 = ((($52)) + 1724|0);
   $54 = (($53) + (($51*236)|0)|0);
   $55 = ((($54)) + 28|0);
   $56 = HEAP32[$55>>2]|0;
   $57 = ($50|0)>=($56|0);
   if ($57) {
    label = 5;
   }
  }
 }
 if ((label|0) == 5) {
  $58 = $4;
  $59 = $3;
  $60 = ((($59)) + 1724|0);
  $61 = (($60) + (($58*236)|0)|0);
  $62 = ((($61)) + 28|0);
  $63 = HEAP32[$62>>2]|0;
  $64 = $4;
  $65 = $3;
  $66 = ((($65)) + 1724|0);
  $67 = (($66) + (($64*236)|0)|0);
  $68 = ((($67)) + 24|0);
  HEAP32[$68>>2] = $63;
  $69 = $3;
  $70 = $4;
  $71 = (_recompute_envelope($69,$70)|0);
  $72 = ($71|0)!=(0);
  if ($72) {
   $2 = 1;
   $73 = $2;
   STACKTOP = sp;return ($73|0);
  }
 }
 $2 = 0;
 $73 = $2;
 STACKTOP = sp;return ($73|0);
}
function _update_tremolo($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0.0, $74 = 0.0, $75 = 0.0, $76 = 0.0, $77 = 0, $78 = 0.0, $79 = 0.0, $8 = 0, $80 = 0.0, $81 = 0.0, $82 = 0.0;
 var $83 = 0.0, $84 = 0.0, $85 = 0.0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $5 = $3;
 $6 = $2;
 $7 = ((($6)) + 1724|0);
 $8 = (($7) + (($5*236)|0)|0);
 $9 = ((($8)) + 4|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = ((($10)) + 108|0);
 $12 = HEAP8[$11>>0]|0;
 $13 = $12&255;
 $14 = $13 << 7;
 $4 = $14;
 $15 = $3;
 $16 = $2;
 $17 = ((($16)) + 1724|0);
 $18 = (($17) + (($15*236)|0)|0);
 $19 = ((($18)) + 36|0);
 $20 = HEAP32[$19>>2]|0;
 $21 = ($20|0)!=(0);
 do {
  if ($21) {
   $22 = $3;
   $23 = $2;
   $24 = ((($23)) + 1724|0);
   $25 = (($24) + (($22*236)|0)|0);
   $26 = ((($25)) + 36|0);
   $27 = HEAP32[$26>>2]|0;
   $28 = $3;
   $29 = $2;
   $30 = ((($29)) + 1724|0);
   $31 = (($30) + (($28*236)|0)|0);
   $32 = ((($31)) + 40|0);
   $33 = HEAP32[$32>>2]|0;
   $34 = (($33) + ($27))|0;
   HEAP32[$32>>2] = $34;
   $35 = $3;
   $36 = $2;
   $37 = ((($36)) + 1724|0);
   $38 = (($37) + (($35*236)|0)|0);
   $39 = ((($38)) + 40|0);
   $40 = HEAP32[$39>>2]|0;
   $41 = ($40|0)>=(65536);
   $42 = $3;
   $43 = $2;
   $44 = ((($43)) + 1724|0);
   $45 = (($44) + (($42*236)|0)|0);
   if ($41) {
    $46 = ((($45)) + 36|0);
    HEAP32[$46>>2] = 0;
    break;
   } else {
    $47 = ((($45)) + 40|0);
    $48 = HEAP32[$47>>2]|0;
    $49 = $4;
    $50 = Math_imul($49, $48)|0;
    $4 = $50;
    $51 = $4;
    $52 = $51 >> 16;
    $4 = $52;
    break;
   }
  }
 } while(0);
 $53 = $3;
 $54 = $2;
 $55 = ((($54)) + 1724|0);
 $56 = (($55) + (($53*236)|0)|0);
 $57 = ((($56)) + 48|0);
 $58 = HEAP32[$57>>2]|0;
 $59 = $3;
 $60 = $2;
 $61 = ((($60)) + 1724|0);
 $62 = (($61) + (($59*236)|0)|0);
 $63 = ((($62)) + 44|0);
 $64 = HEAP32[$63>>2]|0;
 $65 = (($64) + ($58))|0;
 HEAP32[$63>>2] = $65;
 $66 = $3;
 $67 = $2;
 $68 = ((($67)) + 1724|0);
 $69 = (($68) + (($66*236)|0)|0);
 $70 = ((($69)) + 44|0);
 $71 = HEAP32[$70>>2]|0;
 $72 = $71 >> 5;
 $73 = (+($72|0));
 $74 = 0.0061359231515425647 * $73;
 $75 = (+Math_sin((+$74)));
 $76 = $75 + 1.0;
 $77 = $4;
 $78 = (+($77|0));
 $79 = $76 * $78;
 $80 = $79 * 1.0;
 $81 = $80 * 7.62939453125E-6;
 $82 = $81;
 $83 = $82;
 $84 = 1.0 - $83;
 $85 = $84;
 $86 = $3;
 $87 = $2;
 $88 = ((($87)) + 1724|0);
 $89 = (($88) + (($86*236)|0)|0);
 $90 = ((($89)) + 76|0);
 HEAPF32[$90>>2] = $85;
 STACKTOP = sp;return;
}
function _s32tos8($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $3;
 $6 = $8;
 while(1) {
  $9 = $5;
  $10 = (($9) + -1)|0;
  $5 = $10;
  $11 = ($9|0)!=(0);
  if (!($11)) {
   break;
  }
  $12 = $4;
  $13 = ((($12)) + 4|0);
  $4 = $13;
  $14 = HEAP32[$12>>2]|0;
  $15 = $14 >> 21;
  $7 = $15;
  $16 = $7;
  $17 = ($16|0)>(127);
  if ($17) {
   $7 = 127;
  } else {
   $18 = $7;
   $19 = ($18|0)<(-128);
   if ($19) {
    $7 = -128;
   }
  }
  $20 = $7;
  $21 = $20&255;
  $22 = $6;
  $23 = ((($22)) + 1|0);
  $6 = $23;
  HEAP8[$22>>0] = $21;
 }
 STACKTOP = sp;return;
}
function _s32tou8($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $3;
 $6 = $8;
 while(1) {
  $9 = $5;
  $10 = (($9) + -1)|0;
  $5 = $10;
  $11 = ($9|0)!=(0);
  if (!($11)) {
   break;
  }
  $12 = $4;
  $13 = ((($12)) + 4|0);
  $4 = $13;
  $14 = HEAP32[$12>>2]|0;
  $15 = $14 >> 21;
  $7 = $15;
  $16 = $7;
  $17 = ($16|0)>(127);
  if ($17) {
   $7 = 127;
  } else {
   $18 = $7;
   $19 = ($18|0)<(-128);
   if ($19) {
    $7 = -128;
   }
  }
  $20 = $7;
  $21 = $20&255;
  $22 = $21&255;
  $23 = 128 ^ $22;
  $24 = $23&255;
  $25 = $6;
  $26 = ((($25)) + 1|0);
  $6 = $26;
  HEAP8[$25>>0] = $24;
 }
 STACKTOP = sp;return;
}
function _s32tos16($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $3;
 $6 = $8;
 while(1) {
  $9 = $5;
  $10 = (($9) + -1)|0;
  $5 = $10;
  $11 = ($9|0)!=(0);
  if (!($11)) {
   break;
  }
  $12 = $4;
  $13 = ((($12)) + 4|0);
  $4 = $13;
  $14 = HEAP32[$12>>2]|0;
  $15 = $14 >> 13;
  $7 = $15;
  $16 = $7;
  $17 = ($16|0)>(32767);
  if ($17) {
   $7 = 32767;
  } else {
   $18 = $7;
   $19 = ($18|0)<(-32768);
   if ($19) {
    $7 = -32768;
   }
  }
  $20 = $7;
  $21 = $20&65535;
  $22 = $6;
  $23 = ((($22)) + 2|0);
  $6 = $23;
  HEAP16[$22>>1] = $21;
 }
 STACKTOP = sp;return;
}
function _s32tou16($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $3;
 $6 = $8;
 while(1) {
  $9 = $5;
  $10 = (($9) + -1)|0;
  $5 = $10;
  $11 = ($9|0)!=(0);
  if (!($11)) {
   break;
  }
  $12 = $4;
  $13 = ((($12)) + 4|0);
  $4 = $13;
  $14 = HEAP32[$12>>2]|0;
  $15 = $14 >> 13;
  $7 = $15;
  $16 = $7;
  $17 = ($16|0)>(32767);
  if ($17) {
   $7 = 32767;
  } else {
   $18 = $7;
   $19 = ($18|0)<(-32768);
   if ($19) {
    $7 = -32768;
   }
  }
  $20 = $7;
  $21 = $20&65535;
  $22 = $21&65535;
  $23 = 32768 ^ $22;
  $24 = $23&65535;
  $25 = $6;
  $26 = ((($25)) + 2|0);
  $6 = $26;
  HEAP16[$25>>1] = $24;
 }
 STACKTOP = sp;return;
}
function _s32tos16x($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $3;
 $6 = $8;
 while(1) {
  $9 = $5;
  $10 = (($9) + -1)|0;
  $5 = $10;
  $11 = ($9|0)!=(0);
  if (!($11)) {
   break;
  }
  $12 = $4;
  $13 = ((($12)) + 4|0);
  $4 = $13;
  $14 = HEAP32[$12>>2]|0;
  $15 = $14 >> 13;
  $7 = $15;
  $16 = $7;
  $17 = ($16|0)>(32767);
  if ($17) {
   $7 = 32767;
  } else {
   $18 = $7;
   $19 = ($18|0)<(-32768);
   if ($19) {
    $7 = -32768;
   }
  }
  $20 = $7;
  $21 = $20&65535;
  $22 = $21 << 16 >> 16;
  $23 = $22 & 255;
  $24 = $23 << 8;
  $25 = $7;
  $26 = $25&65535;
  $27 = $26 << 16 >> 16;
  $28 = $27 >> 8;
  $29 = $28 & 255;
  $30 = $24 | $29;
  $31 = $30&65535;
  $32 = $6;
  $33 = ((($32)) + 2|0);
  $6 = $33;
  HEAP16[$32>>1] = $31;
 }
 STACKTOP = sp;return;
}
function _mid_song_note_on($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $8 = sp;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 HEAP32[$8>>2] = 0; //@line 446 "playmidi.c"
 $9 = ((($8)) + 5|0); //@line 447 "playmidi.c"
 HEAP8[$9>>0] = 1; //@line 447 "playmidi.c"
 $10 = $5; //@line 448 "playmidi.c"
 $11 = $10&255; //@line 448 "playmidi.c"
 $12 = ((($8)) + 4|0); //@line 448 "playmidi.c"
 HEAP8[$12>>0] = $11; //@line 448 "playmidi.c"
 $13 = $6; //@line 449 "playmidi.c"
 $14 = $13&255; //@line 449 "playmidi.c"
 $15 = ((($8)) + 6|0); //@line 449 "playmidi.c"
 HEAP8[$15>>0] = $14; //@line 449 "playmidi.c"
 $16 = $7; //@line 450 "playmidi.c"
 $17 = $16&255; //@line 450 "playmidi.c"
 $18 = ((($8)) + 7|0); //@line 450 "playmidi.c"
 HEAP8[$18>>0] = $17; //@line 450 "playmidi.c"
 $19 = $4; //@line 452 "playmidi.c"
 _note_on($19,$8); //@line 452 "playmidi.c"
 STACKTOP = sp;return; //@line 453 "playmidi.c"
}
function _note_on($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $2 = $0;
 $3 = $1;
 $9 = $2; //@line 378 "playmidi.c"
 $10 = ((($9)) + 13052|0); //@line 378 "playmidi.c"
 $11 = HEAP32[$10>>2]|0; //@line 378 "playmidi.c"
 $4 = $11; //@line 378 "playmidi.c"
 $5 = -1; //@line 378 "playmidi.c"
 $6 = 2147483647; //@line 379 "playmidi.c"
 $12 = $3; //@line 383 "playmidi.c"
 $13 = (0|0)==($12|0); //@line 383 "playmidi.c"
 if ($13) {
  $14 = $2; //@line 384 "playmidi.c"
  $15 = ((($14)) + 13080|0); //@line 384 "playmidi.c"
  $16 = HEAP32[$15>>2]|0; //@line 384 "playmidi.c"
  $8 = $16; //@line 384 "playmidi.c"
 } else {
  $17 = $3; //@line 386 "playmidi.c"
  $8 = $17; //@line 386 "playmidi.c"
 }
 while(1) {
  $18 = $4; //@line 392 "playmidi.c"
  $19 = (($18) + -1)|0; //@line 392 "playmidi.c"
  $4 = $19; //@line 392 "playmidi.c"
  $20 = ($18|0)!=(0); //@line 392 "playmidi.c"
  if (!($20)) {
   break;
  }
  $21 = $4; //@line 394 "playmidi.c"
  $22 = $2; //@line 394 "playmidi.c"
  $23 = ((($22)) + 1724|0); //@line 394 "playmidi.c"
  $24 = (($23) + (($21*236)|0)|0); //@line 394 "playmidi.c"
  $25 = HEAP8[$24>>0]|0; //@line 394 "playmidi.c"
  $26 = $25&255; //@line 394 "playmidi.c"
  $27 = ($26|0)==(0); //@line 394 "playmidi.c"
  $28 = $4; //@line 395 "playmidi.c"
  if ($27) {
   $5 = $28; //@line 395 "playmidi.c"
   continue;
  }
  $29 = $2; //@line 396 "playmidi.c"
  $30 = ((($29)) + 1724|0); //@line 396 "playmidi.c"
  $31 = (($30) + (($28*236)|0)|0); //@line 396 "playmidi.c"
  $32 = ((($31)) + 1|0); //@line 396 "playmidi.c"
  $33 = HEAP8[$32>>0]|0; //@line 396 "playmidi.c"
  $34 = $33&255; //@line 396 "playmidi.c"
  $35 = $8; //@line 396 "playmidi.c"
  $36 = ((($35)) + 4|0); //@line 396 "playmidi.c"
  $37 = HEAP8[$36>>0]|0; //@line 396 "playmidi.c"
  $38 = $37&255; //@line 396 "playmidi.c"
  $39 = ($34|0)==($38|0); //@line 396 "playmidi.c"
  if (!($39)) {
   continue;
  }
  $40 = $4; //@line 397 "playmidi.c"
  $41 = $2; //@line 397 "playmidi.c"
  $42 = ((($41)) + 1724|0); //@line 397 "playmidi.c"
  $43 = (($42) + (($40*236)|0)|0); //@line 397 "playmidi.c"
  $44 = ((($43)) + 2|0); //@line 397 "playmidi.c"
  $45 = HEAP8[$44>>0]|0; //@line 397 "playmidi.c"
  $46 = $45&255; //@line 397 "playmidi.c"
  $47 = $8; //@line 397 "playmidi.c"
  $48 = ((($47)) + 6|0); //@line 397 "playmidi.c"
  $49 = HEAP8[$48>>0]|0; //@line 397 "playmidi.c"
  $50 = $49&255; //@line 397 "playmidi.c"
  $51 = ($46|0)==($50|0); //@line 397 "playmidi.c"
  if (!($51)) {
   $52 = $4; //@line 397 "playmidi.c"
   $53 = $2; //@line 397 "playmidi.c"
   $54 = ((($53)) + 1724|0); //@line 397 "playmidi.c"
   $55 = (($54) + (($52*236)|0)|0); //@line 397 "playmidi.c"
   $56 = ((($55)) + 1|0); //@line 397 "playmidi.c"
   $57 = HEAP8[$56>>0]|0; //@line 397 "playmidi.c"
   $58 = $57&255; //@line 397 "playmidi.c"
   $59 = $2; //@line 397 "playmidi.c"
   $60 = ((($59)) + 1084|0); //@line 397 "playmidi.c"
   $61 = (($60) + (($58*40)|0)|0); //@line 397 "playmidi.c"
   $62 = ((($61)) + 28|0); //@line 397 "playmidi.c"
   $63 = HEAP32[$62>>2]|0; //@line 397 "playmidi.c"
   $64 = ($63|0)!=(0); //@line 397 "playmidi.c"
   if (!($64)) {
    continue;
   }
  }
  $65 = $2; //@line 398 "playmidi.c"
  $66 = $4; //@line 398 "playmidi.c"
  _kill_note($65,$66); //@line 398 "playmidi.c"
 }
 $67 = $5; //@line 401 "playmidi.c"
 $68 = ($67|0)!=(-1); //@line 401 "playmidi.c"
 $69 = $2; //@line 404 "playmidi.c"
 if ($68) {
  $70 = $8; //@line 404 "playmidi.c"
  $71 = $5; //@line 404 "playmidi.c"
  _start_note($69,$70,$71); //@line 404 "playmidi.c"
  STACKTOP = sp;return; //@line 440 "playmidi.c"
 }
 $72 = ((($69)) + 13052|0); //@line 409 "playmidi.c"
 $73 = HEAP32[$72>>2]|0; //@line 409 "playmidi.c"
 $4 = $73; //@line 409 "playmidi.c"
 while(1) {
  $74 = $4; //@line 410 "playmidi.c"
  $75 = (($74) + -1)|0; //@line 410 "playmidi.c"
  $4 = $75; //@line 410 "playmidi.c"
  $76 = ($74|0)!=(0); //@line 410 "playmidi.c"
  if (!($76)) {
   break;
  }
  $77 = $4; //@line 412 "playmidi.c"
  $78 = $2; //@line 412 "playmidi.c"
  $79 = ((($78)) + 1724|0); //@line 412 "playmidi.c"
  $80 = (($79) + (($77*236)|0)|0); //@line 412 "playmidi.c"
  $81 = HEAP8[$80>>0]|0; //@line 412 "playmidi.c"
  $82 = $81&255; //@line 412 "playmidi.c"
  $83 = ($82|0)!=(1); //@line 412 "playmidi.c"
  if (!($83)) {
   continue;
  }
  $84 = $4; //@line 413 "playmidi.c"
  $85 = $2; //@line 413 "playmidi.c"
  $86 = ((($85)) + 1724|0); //@line 413 "playmidi.c"
  $87 = (($86) + (($84*236)|0)|0); //@line 413 "playmidi.c"
  $88 = HEAP8[$87>>0]|0; //@line 413 "playmidi.c"
  $89 = $88&255; //@line 413 "playmidi.c"
  $90 = ($89|0)!=(4); //@line 413 "playmidi.c"
  if (!($90)) {
   continue;
  }
  $91 = $4; //@line 415 "playmidi.c"
  $92 = $2; //@line 415 "playmidi.c"
  $93 = ((($92)) + 1724|0); //@line 415 "playmidi.c"
  $94 = (($93) + (($91*236)|0)|0); //@line 415 "playmidi.c"
  $95 = ((($94)) + 60|0); //@line 415 "playmidi.c"
  $96 = HEAP32[$95>>2]|0; //@line 415 "playmidi.c"
  $7 = $96; //@line 415 "playmidi.c"
  $97 = $4; //@line 416 "playmidi.c"
  $98 = $2; //@line 416 "playmidi.c"
  $99 = ((($98)) + 1724|0); //@line 416 "playmidi.c"
  $100 = (($99) + (($97*236)|0)|0); //@line 416 "playmidi.c"
  $101 = ((($100)) + 232|0); //@line 416 "playmidi.c"
  $102 = HEAP32[$101>>2]|0; //@line 416 "playmidi.c"
  $103 = ($102|0)==(0); //@line 416 "playmidi.c"
  if ($103) {
   $104 = $4; //@line 417 "playmidi.c"
   $105 = $2; //@line 417 "playmidi.c"
   $106 = ((($105)) + 1724|0); //@line 417 "playmidi.c"
   $107 = (($106) + (($104*236)|0)|0); //@line 417 "playmidi.c"
   $108 = ((($107)) + 64|0); //@line 417 "playmidi.c"
   $109 = HEAP32[$108>>2]|0; //@line 417 "playmidi.c"
   $110 = $7; //@line 417 "playmidi.c"
   $111 = ($109|0)>($110|0); //@line 417 "playmidi.c"
   if ($111) {
    $112 = $4; //@line 418 "playmidi.c"
    $113 = $2; //@line 418 "playmidi.c"
    $114 = ((($113)) + 1724|0); //@line 418 "playmidi.c"
    $115 = (($114) + (($112*236)|0)|0); //@line 418 "playmidi.c"
    $116 = ((($115)) + 64|0); //@line 418 "playmidi.c"
    $117 = HEAP32[$116>>2]|0; //@line 418 "playmidi.c"
    $7 = $117; //@line 418 "playmidi.c"
   }
  }
  $118 = $7; //@line 419 "playmidi.c"
  $119 = $6; //@line 419 "playmidi.c"
  $120 = ($118|0)<($119|0); //@line 419 "playmidi.c"
  if (!($120)) {
   continue;
  }
  $121 = $7; //@line 421 "playmidi.c"
  $6 = $121; //@line 421 "playmidi.c"
  $122 = $4; //@line 422 "playmidi.c"
  $5 = $122; //@line 422 "playmidi.c"
 }
 $123 = $5; //@line 427 "playmidi.c"
 $124 = ($123|0)!=(-1); //@line 427 "playmidi.c"
 $125 = $2; //@line 434 "playmidi.c"
 if ($124) {
  $126 = ((($125)) + 13068|0); //@line 434 "playmidi.c"
  $127 = HEAP32[$126>>2]|0; //@line 434 "playmidi.c"
  $128 = (($127) + 1)|0; //@line 434 "playmidi.c"
  HEAP32[$126>>2] = $128; //@line 434 "playmidi.c"
  $129 = $5; //@line 435 "playmidi.c"
  $130 = $2; //@line 435 "playmidi.c"
  $131 = ((($130)) + 1724|0); //@line 435 "playmidi.c"
  $132 = (($131) + (($129*236)|0)|0); //@line 435 "playmidi.c"
  HEAP8[$132>>0] = 0; //@line 435 "playmidi.c"
  $133 = $2; //@line 436 "playmidi.c"
  $134 = $8; //@line 436 "playmidi.c"
  $135 = $5; //@line 436 "playmidi.c"
  _start_note($133,$134,$135); //@line 436 "playmidi.c"
  STACKTOP = sp;return; //@line 440 "playmidi.c"
 } else {
  $136 = ((($125)) + 13064|0); //@line 439 "playmidi.c"
  $137 = HEAP32[$136>>2]|0; //@line 439 "playmidi.c"
  $138 = (($137) + 1)|0; //@line 439 "playmidi.c"
  HEAP32[$136>>2] = $138; //@line 439 "playmidi.c"
  STACKTOP = sp;return; //@line 440 "playmidi.c"
 }
}
function _kill_note($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $3; //@line 372 "playmidi.c"
 $5 = $2; //@line 372 "playmidi.c"
 $6 = ((($5)) + 1724|0); //@line 372 "playmidi.c"
 $7 = (($6) + (($4*236)|0)|0); //@line 372 "playmidi.c"
 HEAP8[$7>>0] = 4; //@line 372 "playmidi.c"
 STACKTOP = sp;return; //@line 373 "playmidi.c"
}
function _start_note($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0;
 var $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0;
 var $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0;
 var $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0;
 var $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0.0, $297 = 0.0, $298 = 0.0, $299 = 0.0;
 var $3 = 0, $30 = 0, $300 = 0.0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0;
 var $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0;
 var $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0.0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0;
 var $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0;
 var $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0;
 var $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0;
 var $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0;
 var $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0;
 var $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0;
 var $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0;
 var $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0;
 var $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0;
 var $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $11 = $3; //@line 263 "playmidi.c"
 $12 = ((($11)) + 13056|0); //@line 263 "playmidi.c"
 $13 = HEAP32[$12>>2]|0; //@line 263 "playmidi.c"
 $14 = $4; //@line 263 "playmidi.c"
 $15 = ((($14)) + 4|0); //@line 263 "playmidi.c"
 $16 = HEAP8[$15>>0]|0; //@line 263 "playmidi.c"
 $17 = $16&255; //@line 263 "playmidi.c"
 $18 = 1 << $17; //@line 263 "playmidi.c"
 $19 = $13 & $18; //@line 263 "playmidi.c"
 $20 = ($19|0)!=(0); //@line 263 "playmidi.c"
 $21 = $4; //@line 265 "playmidi.c"
 if ($20) {
  $22 = ((($21)) + 6|0); //@line 265 "playmidi.c"
  $23 = HEAP8[$22>>0]|0; //@line 265 "playmidi.c"
  $24 = $23&255; //@line 265 "playmidi.c"
  $25 = $4; //@line 265 "playmidi.c"
  $26 = ((($25)) + 4|0); //@line 265 "playmidi.c"
  $27 = HEAP8[$26>>0]|0; //@line 265 "playmidi.c"
  $28 = $27&255; //@line 265 "playmidi.c"
  $29 = $3; //@line 265 "playmidi.c"
  $30 = ((($29)) + 1084|0); //@line 265 "playmidi.c"
  $31 = (($30) + (($28*40)|0)|0); //@line 265 "playmidi.c"
  $32 = HEAP32[$31>>2]|0; //@line 265 "playmidi.c"
  $33 = $3; //@line 265 "playmidi.c"
  $34 = ((($33)) + 540|0); //@line 265 "playmidi.c"
  $35 = (($34) + ($32<<2)|0); //@line 265 "playmidi.c"
  $36 = HEAP32[$35>>2]|0; //@line 265 "playmidi.c"
  $37 = ((($36)) + 4|0); //@line 265 "playmidi.c"
  $38 = (($37) + ($24<<2)|0); //@line 265 "playmidi.c"
  $39 = HEAP32[$38>>2]|0; //@line 265 "playmidi.c"
  $6 = $39; //@line 265 "playmidi.c"
  $40 = ($39|0)!=(0|0); //@line 265 "playmidi.c"
  if (!($40)) {
   $41 = $4; //@line 267 "playmidi.c"
   $42 = ((($41)) + 6|0); //@line 267 "playmidi.c"
   $43 = HEAP8[$42>>0]|0; //@line 267 "playmidi.c"
   $44 = $43&255; //@line 267 "playmidi.c"
   $45 = $3; //@line 267 "playmidi.c"
   $46 = ((($45)) + 540|0); //@line 267 "playmidi.c"
   $47 = HEAP32[$46>>2]|0; //@line 267 "playmidi.c"
   $48 = ((($47)) + 4|0); //@line 267 "playmidi.c"
   $49 = (($48) + ($44<<2)|0); //@line 267 "playmidi.c"
   $50 = HEAP32[$49>>2]|0; //@line 267 "playmidi.c"
   $6 = $50; //@line 267 "playmidi.c"
   $51 = ($50|0)!=(0|0); //@line 267 "playmidi.c"
   if (!($51)) {
    STACKTOP = sp;return; //@line 368 "playmidi.c"
   }
  }
  $52 = $6; //@line 276 "playmidi.c"
  $53 = ((($52)) + 4|0); //@line 276 "playmidi.c"
  $54 = HEAP32[$53>>2]|0; //@line 276 "playmidi.c"
  $55 = ((($54)) + 112|0); //@line 276 "playmidi.c"
  $56 = HEAP8[$55>>0]|0; //@line 276 "playmidi.c"
  $57 = ($56<<24>>24)!=(0); //@line 276 "playmidi.c"
  if ($57) {
   $58 = $6; //@line 277 "playmidi.c"
   $59 = ((($58)) + 4|0); //@line 277 "playmidi.c"
   $60 = HEAP32[$59>>2]|0; //@line 277 "playmidi.c"
   $61 = ((($60)) + 112|0); //@line 277 "playmidi.c"
   $62 = HEAP8[$61>>0]|0; //@line 277 "playmidi.c"
   $63 = $62 << 24 >> 24; //@line 277 "playmidi.c"
   $64 = (4252 + ($63<<2)|0); //@line 277 "playmidi.c"
   $65 = HEAP32[$64>>2]|0; //@line 277 "playmidi.c"
   $66 = $5; //@line 277 "playmidi.c"
   $67 = $3; //@line 277 "playmidi.c"
   $68 = ((($67)) + 1724|0); //@line 277 "playmidi.c"
   $69 = (($68) + (($66*236)|0)|0); //@line 277 "playmidi.c"
   $70 = ((($69)) + 8|0); //@line 277 "playmidi.c"
   HEAP32[$70>>2] = $65; //@line 277 "playmidi.c"
  } else {
   $71 = $4; //@line 279 "playmidi.c"
   $72 = ((($71)) + 6|0); //@line 279 "playmidi.c"
   $73 = HEAP8[$72>>0]|0; //@line 279 "playmidi.c"
   $74 = $73&255; //@line 279 "playmidi.c"
   $75 = $74 & 127; //@line 279 "playmidi.c"
   $76 = (4252 + ($75<<2)|0); //@line 279 "playmidi.c"
   $77 = HEAP32[$76>>2]|0; //@line 279 "playmidi.c"
   $78 = $5; //@line 279 "playmidi.c"
   $79 = $3; //@line 279 "playmidi.c"
   $80 = ((($79)) + 1724|0); //@line 279 "playmidi.c"
   $81 = (($80) + (($78*236)|0)|0); //@line 279 "playmidi.c"
   $82 = ((($81)) + 8|0); //@line 279 "playmidi.c"
   HEAP32[$82>>2] = $77; //@line 279 "playmidi.c"
  }
  $83 = $6; //@line 282 "playmidi.c"
  $84 = ((($83)) + 4|0); //@line 282 "playmidi.c"
  $85 = HEAP32[$84>>2]|0; //@line 282 "playmidi.c"
  $86 = $5; //@line 282 "playmidi.c"
  $87 = $3; //@line 282 "playmidi.c"
  $88 = ((($87)) + 1724|0); //@line 282 "playmidi.c"
  $89 = (($88) + (($86*236)|0)|0); //@line 282 "playmidi.c"
  $90 = ((($89)) + 4|0); //@line 282 "playmidi.c"
  HEAP32[$90>>2] = $85; //@line 282 "playmidi.c"
 } else {
  $91 = ((($21)) + 4|0); //@line 286 "playmidi.c"
  $92 = HEAP8[$91>>0]|0; //@line 286 "playmidi.c"
  $93 = $92&255; //@line 286 "playmidi.c"
  $94 = (4116 + ($93<<2)|0); //@line 286 "playmidi.c"
  $95 = HEAP32[$94>>2]|0; //@line 286 "playmidi.c"
  $96 = (-1)!=($95|0); //@line 286 "playmidi.c"
  $97 = $4; //@line 288 "playmidi.c"
  $98 = ((($97)) + 4|0); //@line 288 "playmidi.c"
  $99 = HEAP8[$98>>0]|0; //@line 288 "playmidi.c"
  $100 = $99&255; //@line 288 "playmidi.c"
  $101 = $3; //@line 288 "playmidi.c"
  $102 = ((($101)) + 1084|0); //@line 288 "playmidi.c"
  $103 = (($102) + (($100*40)|0)|0); //@line 288 "playmidi.c"
  do {
   if ($96) {
    $104 = HEAP32[$103>>2]|0; //@line 288 "playmidi.c"
    $105 = $3; //@line 288 "playmidi.c"
    $106 = ((($105)) + 28|0); //@line 288 "playmidi.c"
    $107 = (($106) + ($104<<2)|0); //@line 288 "playmidi.c"
    $108 = HEAP32[$107>>2]|0; //@line 288 "playmidi.c"
    $8 = $108; //@line 288 "playmidi.c"
    $109 = $4; //@line 289 "playmidi.c"
    $110 = ((($109)) + 4|0); //@line 289 "playmidi.c"
    $111 = HEAP8[$110>>0]|0; //@line 289 "playmidi.c"
    $112 = $111&255; //@line 289 "playmidi.c"
    $113 = (4116 + ($112<<2)|0); //@line 289 "playmidi.c"
    $114 = HEAP32[$113>>2]|0; //@line 289 "playmidi.c"
    $9 = $114; //@line 289 "playmidi.c"
    $115 = $9; //@line 290 "playmidi.c"
    $116 = $8; //@line 290 "playmidi.c"
    $117 = ((($116)) + 4|0); //@line 290 "playmidi.c"
    $118 = (($117) + ($115<<2)|0); //@line 290 "playmidi.c"
    $119 = HEAP32[$118>>2]|0; //@line 290 "playmidi.c"
    $120 = (0|0)==($119|0); //@line 290 "playmidi.c"
    if ($120) {
     $10 = 0; //@line 291 "playmidi.c"
     $121 = $3; //@line 293 "playmidi.c"
     $122 = $9; //@line 294 "playmidi.c"
     $123 = $8; //@line 294 "playmidi.c"
     $124 = HEAP32[$123>>2]|0; //@line 294 "playmidi.c"
     $125 = (($124) + (($122*28)|0)|0); //@line 294 "playmidi.c"
     $126 = HEAP32[$125>>2]|0; //@line 294 "playmidi.c"
     $127 = $10; //@line 295 "playmidi.c"
     $128 = ($127|0)!=(0); //@line 295 "playmidi.c"
     $129 = $128 ? 1 : 0; //@line 295 "playmidi.c"
     $130 = $9; //@line 296 "playmidi.c"
     $131 = $8; //@line 296 "playmidi.c"
     $132 = HEAP32[$131>>2]|0; //@line 296 "playmidi.c"
     $133 = (($132) + (($130*28)|0)|0); //@line 296 "playmidi.c"
     $134 = ((($133)) + 12|0); //@line 296 "playmidi.c"
     $135 = HEAP32[$134>>2]|0; //@line 296 "playmidi.c"
     $136 = $9; //@line 297 "playmidi.c"
     $137 = $8; //@line 297 "playmidi.c"
     $138 = HEAP32[$137>>2]|0; //@line 297 "playmidi.c"
     $139 = (($138) + (($136*28)|0)|0); //@line 297 "playmidi.c"
     $140 = ((($139)) + 8|0); //@line 297 "playmidi.c"
     $141 = HEAP32[$140>>2]|0; //@line 297 "playmidi.c"
     $142 = $9; //@line 298 "playmidi.c"
     $143 = $8; //@line 298 "playmidi.c"
     $144 = HEAP32[$143>>2]|0; //@line 298 "playmidi.c"
     $145 = (($144) + (($142*28)|0)|0); //@line 298 "playmidi.c"
     $146 = ((($145)) + 4|0); //@line 298 "playmidi.c"
     $147 = HEAP32[$146>>2]|0; //@line 298 "playmidi.c"
     $148 = ($147|0)!=(-1); //@line 298 "playmidi.c"
     if ($148) {
      $149 = $9; //@line 299 "playmidi.c"
      $150 = $8; //@line 299 "playmidi.c"
      $151 = HEAP32[$150>>2]|0; //@line 299 "playmidi.c"
      $152 = (($151) + (($149*28)|0)|0); //@line 299 "playmidi.c"
      $153 = ((($152)) + 4|0); //@line 299 "playmidi.c"
      $154 = HEAP32[$153>>2]|0; //@line 299 "playmidi.c"
      $197 = $154;
     } else {
      $155 = $10; //@line 300 "playmidi.c"
      $156 = ($155|0)!=(0); //@line 300 "playmidi.c"
      $157 = $9; //@line 300 "playmidi.c"
      $158 = $156 ? $157 : -1; //@line 300 "playmidi.c"
      $197 = $158;
     }
     $159 = $9; //@line 301 "playmidi.c"
     $160 = $8; //@line 301 "playmidi.c"
     $161 = HEAP32[$160>>2]|0; //@line 301 "playmidi.c"
     $162 = (($161) + (($159*28)|0)|0); //@line 301 "playmidi.c"
     $163 = ((($162)) + 16|0); //@line 301 "playmidi.c"
     $164 = HEAP32[$163>>2]|0; //@line 301 "playmidi.c"
     $165 = ($164|0)!=(-1); //@line 301 "playmidi.c"
     if ($165) {
      $166 = $9; //@line 302 "playmidi.c"
      $167 = $8; //@line 302 "playmidi.c"
      $168 = HEAP32[$167>>2]|0; //@line 302 "playmidi.c"
      $169 = (($168) + (($166*28)|0)|0); //@line 302 "playmidi.c"
      $170 = ((($169)) + 16|0); //@line 302 "playmidi.c"
      $171 = HEAP32[$170>>2]|0; //@line 302 "playmidi.c"
      $198 = $171;
     } else {
      $172 = $10; //@line 303 "playmidi.c"
      $173 = ($172|0)!=(0); //@line 303 "playmidi.c"
      $174 = $173 ? 1 : -1; //@line 303 "playmidi.c"
      $198 = $174;
     }
     $175 = $9; //@line 304 "playmidi.c"
     $176 = $8; //@line 304 "playmidi.c"
     $177 = HEAP32[$176>>2]|0; //@line 304 "playmidi.c"
     $178 = (($177) + (($175*28)|0)|0); //@line 304 "playmidi.c"
     $179 = ((($178)) + 20|0); //@line 304 "playmidi.c"
     $180 = HEAP32[$179>>2]|0; //@line 304 "playmidi.c"
     $181 = ($180|0)!=(-1); //@line 304 "playmidi.c"
     if ($181) {
      $182 = $9; //@line 305 "playmidi.c"
      $183 = $8; //@line 305 "playmidi.c"
      $184 = HEAP32[$183>>2]|0; //@line 305 "playmidi.c"
      $185 = (($184) + (($182*28)|0)|0); //@line 305 "playmidi.c"
      $186 = ((($185)) + 20|0); //@line 305 "playmidi.c"
      $187 = HEAP32[$186>>2]|0; //@line 305 "playmidi.c"
      $199 = $187;
     } else {
      $188 = $10; //@line 306 "playmidi.c"
      $189 = ($188|0)!=(0); //@line 306 "playmidi.c"
      $190 = $189 ? 1 : -1; //@line 306 "playmidi.c"
      $199 = $190;
     }
     $191 = $9; //@line 307 "playmidi.c"
     $192 = $8; //@line 307 "playmidi.c"
     $193 = HEAP32[$192>>2]|0; //@line 307 "playmidi.c"
     $194 = (($193) + (($191*28)|0)|0); //@line 307 "playmidi.c"
     $195 = ((($194)) + 24|0); //@line 307 "playmidi.c"
     $196 = HEAP32[$195>>2]|0; //@line 307 "playmidi.c"
     $200 = (_load_instrument($121,$126,$129,$135,$141,$197,$198,$199,$196)|0); //@line 293 "playmidi.c"
     $201 = $9; //@line 292 "playmidi.c"
     $202 = $8; //@line 292 "playmidi.c"
     $203 = ((($202)) + 4|0); //@line 292 "playmidi.c"
     $204 = (($203) + ($201<<2)|0); //@line 292 "playmidi.c"
     HEAP32[$204>>2] = $200; //@line 292 "playmidi.c"
    }
    $205 = $9; //@line 309 "playmidi.c"
    $206 = $8; //@line 309 "playmidi.c"
    $207 = ((($206)) + 4|0); //@line 309 "playmidi.c"
    $208 = (($207) + ($205<<2)|0); //@line 309 "playmidi.c"
    $209 = HEAP32[$208>>2]|0; //@line 309 "playmidi.c"
    $6 = $209; //@line 309 "playmidi.c"
   } else {
    $210 = ((($103)) + 4|0); //@line 311 "playmidi.c"
    $211 = HEAP32[$210>>2]|0; //@line 311 "playmidi.c"
    $212 = ($211|0)==(-1); //@line 311 "playmidi.c"
    if ($212) {
     $213 = $3; //@line 312 "playmidi.c"
     $214 = ((($213)) + 1052|0); //@line 312 "playmidi.c"
     $215 = HEAP32[$214>>2]|0; //@line 312 "playmidi.c"
     $6 = $215; //@line 312 "playmidi.c"
     break;
    }
    $216 = $4; //@line 314 "playmidi.c"
    $217 = ((($216)) + 4|0); //@line 314 "playmidi.c"
    $218 = HEAP8[$217>>0]|0; //@line 314 "playmidi.c"
    $219 = $218&255; //@line 314 "playmidi.c"
    $220 = $3; //@line 314 "playmidi.c"
    $221 = ((($220)) + 1084|0); //@line 314 "playmidi.c"
    $222 = (($221) + (($219*40)|0)|0); //@line 314 "playmidi.c"
    $223 = ((($222)) + 4|0); //@line 314 "playmidi.c"
    $224 = HEAP32[$223>>2]|0; //@line 314 "playmidi.c"
    $225 = $4; //@line 313 "playmidi.c"
    $226 = ((($225)) + 4|0); //@line 313 "playmidi.c"
    $227 = HEAP8[$226>>0]|0; //@line 313 "playmidi.c"
    $228 = $227&255; //@line 313 "playmidi.c"
    $229 = $3; //@line 313 "playmidi.c"
    $230 = ((($229)) + 1084|0); //@line 313 "playmidi.c"
    $231 = (($230) + (($228*40)|0)|0); //@line 313 "playmidi.c"
    $232 = HEAP32[$231>>2]|0; //@line 313 "playmidi.c"
    $233 = $3; //@line 313 "playmidi.c"
    $234 = ((($233)) + 28|0); //@line 313 "playmidi.c"
    $235 = (($234) + ($232<<2)|0); //@line 313 "playmidi.c"
    $236 = HEAP32[$235>>2]|0; //@line 313 "playmidi.c"
    $237 = ((($236)) + 4|0); //@line 314 "playmidi.c"
    $238 = (($237) + ($224<<2)|0); //@line 313 "playmidi.c"
    $239 = HEAP32[$238>>2]|0; //@line 313 "playmidi.c"
    $6 = $239; //@line 313 "playmidi.c"
    $240 = ($239|0)!=(0|0); //@line 313 "playmidi.c"
    if (!($240)) {
     $241 = $4; //@line 316 "playmidi.c"
     $242 = ((($241)) + 4|0); //@line 316 "playmidi.c"
     $243 = HEAP8[$242>>0]|0; //@line 316 "playmidi.c"
     $244 = $243&255; //@line 316 "playmidi.c"
     $245 = $3; //@line 316 "playmidi.c"
     $246 = ((($245)) + 1084|0); //@line 316 "playmidi.c"
     $247 = (($246) + (($244*40)|0)|0); //@line 316 "playmidi.c"
     $248 = ((($247)) + 4|0); //@line 316 "playmidi.c"
     $249 = HEAP32[$248>>2]|0; //@line 316 "playmidi.c"
     $250 = $3; //@line 316 "playmidi.c"
     $251 = ((($250)) + 28|0); //@line 316 "playmidi.c"
     $252 = HEAP32[$251>>2]|0; //@line 316 "playmidi.c"
     $253 = ((($252)) + 4|0); //@line 316 "playmidi.c"
     $254 = (($253) + ($249<<2)|0); //@line 316 "playmidi.c"
     $255 = HEAP32[$254>>2]|0; //@line 316 "playmidi.c"
     $6 = $255; //@line 316 "playmidi.c"
     $256 = ($255|0)!=(0|0); //@line 316 "playmidi.c"
     if (!($256)) {
      STACKTOP = sp;return; //@line 368 "playmidi.c"
     }
    }
   }
  } while(0);
  $257 = $6; //@line 320 "playmidi.c"
  $258 = ((($257)) + 4|0); //@line 320 "playmidi.c"
  $259 = HEAP32[$258>>2]|0; //@line 320 "playmidi.c"
  $260 = ((($259)) + 112|0); //@line 320 "playmidi.c"
  $261 = HEAP8[$260>>0]|0; //@line 320 "playmidi.c"
  $262 = ($261<<24>>24)!=(0); //@line 320 "playmidi.c"
  if ($262) {
   $263 = $6; //@line 321 "playmidi.c"
   $264 = ((($263)) + 4|0); //@line 321 "playmidi.c"
   $265 = HEAP32[$264>>2]|0; //@line 321 "playmidi.c"
   $266 = ((($265)) + 112|0); //@line 321 "playmidi.c"
   $267 = HEAP8[$266>>0]|0; //@line 321 "playmidi.c"
   $268 = $267 << 24 >> 24; //@line 321 "playmidi.c"
   $269 = (4252 + ($268<<2)|0); //@line 321 "playmidi.c"
   $270 = HEAP32[$269>>2]|0; //@line 321 "playmidi.c"
   $271 = $5; //@line 321 "playmidi.c"
   $272 = $3; //@line 321 "playmidi.c"
   $273 = ((($272)) + 1724|0); //@line 321 "playmidi.c"
   $274 = (($273) + (($271*236)|0)|0); //@line 321 "playmidi.c"
   $275 = ((($274)) + 8|0); //@line 321 "playmidi.c"
   HEAP32[$275>>2] = $270; //@line 321 "playmidi.c"
  } else {
   $276 = $4; //@line 323 "playmidi.c"
   $277 = ((($276)) + 6|0); //@line 323 "playmidi.c"
   $278 = HEAP8[$277>>0]|0; //@line 323 "playmidi.c"
   $279 = $278&255; //@line 323 "playmidi.c"
   $280 = HEAP32[2231]|0; //@line 323 "playmidi.c"
   $281 = (($279) + ($280))|0; //@line 323 "playmidi.c"
   $282 = $281 & 127; //@line 323 "playmidi.c"
   $283 = (4252 + ($282<<2)|0); //@line 323 "playmidi.c"
   $284 = HEAP32[$283>>2]|0; //@line 323 "playmidi.c"
   $285 = $5; //@line 323 "playmidi.c"
   $286 = $3; //@line 323 "playmidi.c"
   $287 = ((($286)) + 1724|0); //@line 323 "playmidi.c"
   $288 = (($287) + (($285*236)|0)|0); //@line 323 "playmidi.c"
   $289 = ((($288)) + 8|0); //@line 323 "playmidi.c"
   HEAP32[$289>>2] = $284; //@line 323 "playmidi.c"
  }
  $290 = $5; //@line 324 "playmidi.c"
  $291 = $3; //@line 324 "playmidi.c"
  $292 = ((($291)) + 1724|0); //@line 324 "playmidi.c"
  $293 = (($292) + (($290*236)|0)|0); //@line 324 "playmidi.c"
  $294 = ((($293)) + 8|0); //@line 324 "playmidi.c"
  $295 = HEAP32[$294>>2]|0; //@line 324 "playmidi.c"
  $296 = (+($295|0)); //@line 324 "playmidi.c"
  $297 = +HEAPF32[1061]; //@line 324 "playmidi.c"
  $298 = $296 * $297; //@line 324 "playmidi.c"
  $299 = $298; //@line 324 "playmidi.c"
  $300 = $299 / 440.0; //@line 324 "playmidi.c"
  $301 = (~~(($300))); //@line 324 "playmidi.c"
  $302 = $5; //@line 324 "playmidi.c"
  $303 = $3; //@line 324 "playmidi.c"
  $304 = ((($303)) + 1724|0); //@line 324 "playmidi.c"
  $305 = (($304) + (($302*236)|0)|0); //@line 324 "playmidi.c"
  $306 = ((($305)) + 8|0); //@line 324 "playmidi.c"
  HEAP32[$306>>2] = $301; //@line 324 "playmidi.c"
  $307 = $3; //@line 325 "playmidi.c"
  $308 = $5; //@line 325 "playmidi.c"
  $309 = $6; //@line 325 "playmidi.c"
  $310 = $4; //@line 325 "playmidi.c"
  $311 = ((($310)) + 7|0); //@line 325 "playmidi.c"
  $312 = HEAP8[$311>>0]|0; //@line 325 "playmidi.c"
  $313 = $312&255; //@line 325 "playmidi.c"
  _select_sample($307,$308,$309,$313); //@line 325 "playmidi.c"
 }
 $314 = $5; //@line 328 "playmidi.c"
 $315 = $3; //@line 328 "playmidi.c"
 $316 = ((($315)) + 1724|0); //@line 328 "playmidi.c"
 $317 = (($316) + (($314*236)|0)|0); //@line 328 "playmidi.c"
 HEAP8[$317>>0] = 1; //@line 328 "playmidi.c"
 $318 = $4; //@line 329 "playmidi.c"
 $319 = ((($318)) + 4|0); //@line 329 "playmidi.c"
 $320 = HEAP8[$319>>0]|0; //@line 329 "playmidi.c"
 $321 = $5; //@line 329 "playmidi.c"
 $322 = $3; //@line 329 "playmidi.c"
 $323 = ((($322)) + 1724|0); //@line 329 "playmidi.c"
 $324 = (($323) + (($321*236)|0)|0); //@line 329 "playmidi.c"
 $325 = ((($324)) + 1|0); //@line 329 "playmidi.c"
 HEAP8[$325>>0] = $320; //@line 329 "playmidi.c"
 $326 = $4; //@line 330 "playmidi.c"
 $327 = ((($326)) + 6|0); //@line 330 "playmidi.c"
 $328 = HEAP8[$327>>0]|0; //@line 330 "playmidi.c"
 $329 = $5; //@line 330 "playmidi.c"
 $330 = $3; //@line 330 "playmidi.c"
 $331 = ((($330)) + 1724|0); //@line 330 "playmidi.c"
 $332 = (($331) + (($329*236)|0)|0); //@line 330 "playmidi.c"
 $333 = ((($332)) + 2|0); //@line 330 "playmidi.c"
 HEAP8[$333>>0] = $328; //@line 330 "playmidi.c"
 $334 = $4; //@line 331 "playmidi.c"
 $335 = ((($334)) + 7|0); //@line 331 "playmidi.c"
 $336 = HEAP8[$335>>0]|0; //@line 331 "playmidi.c"
 $337 = $4; //@line 331 "playmidi.c"
 $338 = ((($337)) + 4|0); //@line 331 "playmidi.c"
 $339 = HEAP8[$338>>0]|0; //@line 331 "playmidi.c"
 $340 = $339&255; //@line 331 "playmidi.c"
 $341 = (4180 + ($340<<2)|0); //@line 331 "playmidi.c"
 $342 = +HEAPF32[$341>>2]; //@line 331 "playmidi.c"
 $343 = (_scaled_volume($336,$342)|0); //@line 331 "playmidi.c"
 $344 = $5; //@line 331 "playmidi.c"
 $345 = $3; //@line 331 "playmidi.c"
 $346 = ((($345)) + 1724|0); //@line 331 "playmidi.c"
 $347 = (($346) + (($344*236)|0)|0); //@line 331 "playmidi.c"
 $348 = ((($347)) + 3|0); //@line 331 "playmidi.c"
 HEAP8[$348>>0] = $343; //@line 331 "playmidi.c"
 $349 = $5; //@line 332 "playmidi.c"
 $350 = $3; //@line 332 "playmidi.c"
 $351 = ((($350)) + 1724|0); //@line 332 "playmidi.c"
 $352 = (($351) + (($349*236)|0)|0); //@line 332 "playmidi.c"
 $353 = ((($352)) + 16|0); //@line 332 "playmidi.c"
 HEAP32[$353>>2] = 0; //@line 332 "playmidi.c"
 $354 = $5; //@line 333 "playmidi.c"
 $355 = $3; //@line 333 "playmidi.c"
 $356 = ((($355)) + 1724|0); //@line 333 "playmidi.c"
 $357 = (($356) + (($354*236)|0)|0); //@line 333 "playmidi.c"
 $358 = ((($357)) + 20|0); //@line 333 "playmidi.c"
 HEAP32[$358>>2] = 0; //@line 333 "playmidi.c"
 $359 = $5; //@line 335 "playmidi.c"
 $360 = $3; //@line 335 "playmidi.c"
 $361 = ((($360)) + 1724|0); //@line 335 "playmidi.c"
 $362 = (($361) + (($359*236)|0)|0); //@line 335 "playmidi.c"
 $363 = ((($362)) + 44|0); //@line 335 "playmidi.c"
 HEAP32[$363>>2] = 0; //@line 335 "playmidi.c"
 $364 = $5; //@line 336 "playmidi.c"
 $365 = $3; //@line 336 "playmidi.c"
 $366 = ((($365)) + 1724|0); //@line 336 "playmidi.c"
 $367 = (($366) + (($364*236)|0)|0); //@line 336 "playmidi.c"
 $368 = ((($367)) + 4|0); //@line 336 "playmidi.c"
 $369 = HEAP32[$368>>2]|0; //@line 336 "playmidi.c"
 $370 = ((($369)) + 96|0); //@line 336 "playmidi.c"
 $371 = HEAP32[$370>>2]|0; //@line 336 "playmidi.c"
 $372 = $5; //@line 336 "playmidi.c"
 $373 = $3; //@line 336 "playmidi.c"
 $374 = ((($373)) + 1724|0); //@line 336 "playmidi.c"
 $375 = (($374) + (($372*236)|0)|0); //@line 336 "playmidi.c"
 $376 = ((($375)) + 48|0); //@line 336 "playmidi.c"
 HEAP32[$376>>2] = $371; //@line 336 "playmidi.c"
 $377 = $5; //@line 337 "playmidi.c"
 $378 = $3; //@line 337 "playmidi.c"
 $379 = ((($378)) + 1724|0); //@line 337 "playmidi.c"
 $380 = (($379) + (($377*236)|0)|0); //@line 337 "playmidi.c"
 $381 = ((($380)) + 4|0); //@line 337 "playmidi.c"
 $382 = HEAP32[$381>>2]|0; //@line 337 "playmidi.c"
 $383 = ((($382)) + 92|0); //@line 337 "playmidi.c"
 $384 = HEAP32[$383>>2]|0; //@line 337 "playmidi.c"
 $385 = $5; //@line 337 "playmidi.c"
 $386 = $3; //@line 337 "playmidi.c"
 $387 = ((($386)) + 1724|0); //@line 337 "playmidi.c"
 $388 = (($387) + (($385*236)|0)|0); //@line 337 "playmidi.c"
 $389 = ((($388)) + 36|0); //@line 337 "playmidi.c"
 HEAP32[$389>>2] = $384; //@line 337 "playmidi.c"
 $390 = $5; //@line 338 "playmidi.c"
 $391 = $3; //@line 338 "playmidi.c"
 $392 = ((($391)) + 1724|0); //@line 338 "playmidi.c"
 $393 = (($392) + (($390*236)|0)|0); //@line 338 "playmidi.c"
 $394 = ((($393)) + 40|0); //@line 338 "playmidi.c"
 HEAP32[$394>>2] = 0; //@line 338 "playmidi.c"
 $395 = $5; //@line 340 "playmidi.c"
 $396 = $3; //@line 340 "playmidi.c"
 $397 = ((($396)) + 1724|0); //@line 340 "playmidi.c"
 $398 = (($397) + (($395*236)|0)|0); //@line 340 "playmidi.c"
 $399 = ((($398)) + 4|0); //@line 340 "playmidi.c"
 $400 = HEAP32[$399>>2]|0; //@line 340 "playmidi.c"
 $401 = ((($400)) + 100|0); //@line 340 "playmidi.c"
 $402 = HEAP32[$401>>2]|0; //@line 340 "playmidi.c"
 $403 = $5; //@line 340 "playmidi.c"
 $404 = $3; //@line 340 "playmidi.c"
 $405 = ((($404)) + 1724|0); //@line 340 "playmidi.c"
 $406 = (($405) + (($403*236)|0)|0); //@line 340 "playmidi.c"
 $407 = ((($406)) + 52|0); //@line 340 "playmidi.c"
 HEAP32[$407>>2] = $402; //@line 340 "playmidi.c"
 $408 = $5; //@line 341 "playmidi.c"
 $409 = $3; //@line 341 "playmidi.c"
 $410 = ((($409)) + 1724|0); //@line 341 "playmidi.c"
 $411 = (($410) + (($408*236)|0)|0); //@line 341 "playmidi.c"
 $412 = ((($411)) + 56|0); //@line 341 "playmidi.c"
 HEAP32[$412>>2] = 0; //@line 341 "playmidi.c"
 $413 = $5; //@line 342 "playmidi.c"
 $414 = $3; //@line 342 "playmidi.c"
 $415 = ((($414)) + 1724|0); //@line 342 "playmidi.c"
 $416 = (($415) + (($413*236)|0)|0); //@line 342 "playmidi.c"
 $417 = ((($416)) + 4|0); //@line 342 "playmidi.c"
 $418 = HEAP32[$417>>2]|0; //@line 342 "playmidi.c"
 $419 = ((($418)) + 104|0); //@line 342 "playmidi.c"
 $420 = HEAP32[$419>>2]|0; //@line 342 "playmidi.c"
 $421 = $5; //@line 342 "playmidi.c"
 $422 = $3; //@line 342 "playmidi.c"
 $423 = ((($422)) + 1724|0); //@line 342 "playmidi.c"
 $424 = (($423) + (($421*236)|0)|0); //@line 342 "playmidi.c"
 $425 = ((($424)) + 212|0); //@line 342 "playmidi.c"
 HEAP32[$425>>2] = $420; //@line 342 "playmidi.c"
 $426 = $5; //@line 343 "playmidi.c"
 $427 = $3; //@line 343 "playmidi.c"
 $428 = ((($427)) + 1724|0); //@line 343 "playmidi.c"
 $429 = (($428) + (($426*236)|0)|0); //@line 343 "playmidi.c"
 $430 = ((($429)) + 208|0); //@line 343 "playmidi.c"
 HEAP32[$430>>2] = 0; //@line 343 "playmidi.c"
 $431 = $5; //@line 343 "playmidi.c"
 $432 = $3; //@line 343 "playmidi.c"
 $433 = ((($432)) + 1724|0); //@line 343 "playmidi.c"
 $434 = (($433) + (($431*236)|0)|0); //@line 343 "playmidi.c"
 $435 = ((($434)) + 216|0); //@line 343 "playmidi.c"
 HEAP32[$435>>2] = 0; //@line 343 "playmidi.c"
 $7 = 0; //@line 344 "playmidi.c"
 while(1) {
  $436 = $7; //@line 344 "playmidi.c"
  $437 = ($436|0)<(32); //@line 344 "playmidi.c"
  if (!($437)) {
   break;
  }
  $438 = $7; //@line 345 "playmidi.c"
  $439 = $5; //@line 345 "playmidi.c"
  $440 = $3; //@line 345 "playmidi.c"
  $441 = ((($440)) + 1724|0); //@line 345 "playmidi.c"
  $442 = (($441) + (($439*236)|0)|0); //@line 345 "playmidi.c"
  $443 = ((($442)) + 80|0); //@line 345 "playmidi.c"
  $444 = (($443) + ($438<<2)|0); //@line 345 "playmidi.c"
  HEAP32[$444>>2] = 0; //@line 345 "playmidi.c"
  $445 = $7; //@line 344 "playmidi.c"
  $446 = (($445) + 1)|0; //@line 344 "playmidi.c"
  $7 = $446; //@line 344 "playmidi.c"
 }
 $447 = $4; //@line 347 "playmidi.c"
 $448 = ((($447)) + 4|0); //@line 347 "playmidi.c"
 $449 = HEAP8[$448>>0]|0; //@line 347 "playmidi.c"
 $450 = $449&255; //@line 347 "playmidi.c"
 $451 = $3; //@line 347 "playmidi.c"
 $452 = ((($451)) + 1084|0); //@line 347 "playmidi.c"
 $453 = (($452) + (($450*40)|0)|0); //@line 347 "playmidi.c"
 $454 = ((($453)) + 16|0); //@line 347 "playmidi.c"
 $455 = HEAP32[$454>>2]|0; //@line 347 "playmidi.c"
 $456 = ($455|0)!=(-1); //@line 347 "playmidi.c"
 if ($456) {
  $457 = $4; //@line 348 "playmidi.c"
  $458 = ((($457)) + 4|0); //@line 348 "playmidi.c"
  $459 = HEAP8[$458>>0]|0; //@line 348 "playmidi.c"
  $460 = $459&255; //@line 348 "playmidi.c"
  $461 = $3; //@line 348 "playmidi.c"
  $462 = ((($461)) + 1084|0); //@line 348 "playmidi.c"
  $463 = (($462) + (($460*40)|0)|0); //@line 348 "playmidi.c"
  $464 = ((($463)) + 16|0); //@line 348 "playmidi.c"
  $465 = HEAP32[$464>>2]|0; //@line 348 "playmidi.c"
  $466 = $5; //@line 348 "playmidi.c"
  $467 = $3; //@line 348 "playmidi.c"
  $468 = ((($467)) + 1724|0); //@line 348 "playmidi.c"
  $469 = (($468) + (($466*236)|0)|0); //@line 348 "playmidi.c"
  $470 = ((($469)) + 228|0); //@line 348 "playmidi.c"
  HEAP32[$470>>2] = $465; //@line 348 "playmidi.c"
 } else {
  $471 = $5; //@line 350 "playmidi.c"
  $472 = $3; //@line 350 "playmidi.c"
  $473 = ((($472)) + 1724|0); //@line 350 "playmidi.c"
  $474 = (($473) + (($471*236)|0)|0); //@line 350 "playmidi.c"
  $475 = ((($474)) + 4|0); //@line 350 "playmidi.c"
  $476 = HEAP32[$475>>2]|0; //@line 350 "playmidi.c"
  $477 = ((($476)) + 111|0); //@line 350 "playmidi.c"
  $478 = HEAP8[$477>>0]|0; //@line 350 "playmidi.c"
  $479 = $478 << 24 >> 24; //@line 350 "playmidi.c"
  $480 = $5; //@line 350 "playmidi.c"
  $481 = $3; //@line 350 "playmidi.c"
  $482 = ((($481)) + 1724|0); //@line 350 "playmidi.c"
  $483 = (($482) + (($480*236)|0)|0); //@line 350 "playmidi.c"
  $484 = ((($483)) + 228|0); //@line 350 "playmidi.c"
  HEAP32[$484>>2] = $479; //@line 350 "playmidi.c"
 }
 $485 = $3; //@line 352 "playmidi.c"
 $486 = $5; //@line 352 "playmidi.c"
 _recompute_freq($485,$486); //@line 352 "playmidi.c"
 $487 = $3; //@line 353 "playmidi.c"
 $488 = $5; //@line 353 "playmidi.c"
 _recompute_amp($487,$488); //@line 353 "playmidi.c"
 $489 = $5; //@line 354 "playmidi.c"
 $490 = $3; //@line 354 "playmidi.c"
 $491 = ((($490)) + 1724|0); //@line 354 "playmidi.c"
 $492 = (($491) + (($489*236)|0)|0); //@line 354 "playmidi.c"
 $493 = ((($492)) + 4|0); //@line 354 "playmidi.c"
 $494 = HEAP32[$493>>2]|0; //@line 354 "playmidi.c"
 $495 = ((($494)) + 110|0); //@line 354 "playmidi.c"
 $496 = HEAP8[$495>>0]|0; //@line 354 "playmidi.c"
 $497 = $496&255; //@line 354 "playmidi.c"
 $498 = $497 & 64; //@line 354 "playmidi.c"
 $499 = ($498|0)!=(0); //@line 354 "playmidi.c"
 $500 = $5; //@line 357 "playmidi.c"
 $501 = $3; //@line 357 "playmidi.c"
 $502 = ((($501)) + 1724|0); //@line 357 "playmidi.c"
 $503 = (($502) + (($500*236)|0)|0); //@line 357 "playmidi.c"
 if ($499) {
  $504 = ((($503)) + 220|0); //@line 357 "playmidi.c"
  HEAP32[$504>>2] = 0; //@line 357 "playmidi.c"
  $505 = $5; //@line 358 "playmidi.c"
  $506 = $3; //@line 358 "playmidi.c"
  $507 = ((($506)) + 1724|0); //@line 358 "playmidi.c"
  $508 = (($507) + (($505*236)|0)|0); //@line 358 "playmidi.c"
  $509 = ((($508)) + 24|0); //@line 358 "playmidi.c"
  HEAP32[$509>>2] = 0; //@line 358 "playmidi.c"
  $510 = $5; //@line 359 "playmidi.c"
  $511 = $3; //@line 359 "playmidi.c"
  $512 = ((($511)) + 1724|0); //@line 359 "playmidi.c"
  $513 = (($512) + (($510*236)|0)|0); //@line 359 "playmidi.c"
  $514 = ((($513)) + 224|0); //@line 359 "playmidi.c"
  HEAP32[$514>>2] = 0; //@line 359 "playmidi.c"
  $515 = $3; //@line 360 "playmidi.c"
  $516 = $5; //@line 360 "playmidi.c"
  (_recompute_envelope($515,$516)|0); //@line 360 "playmidi.c"
  $517 = $3; //@line 361 "playmidi.c"
  $518 = $5; //@line 361 "playmidi.c"
  _apply_envelope_to_amp($517,$518); //@line 361 "playmidi.c"
  STACKTOP = sp;return; //@line 368 "playmidi.c"
 } else {
  $519 = ((($503)) + 32|0); //@line 365 "playmidi.c"
  HEAP32[$519>>2] = 0; //@line 365 "playmidi.c"
  $520 = $3; //@line 366 "playmidi.c"
  $521 = $5; //@line 366 "playmidi.c"
  _apply_envelope_to_amp($520,$521); //@line 366 "playmidi.c"
  STACKTOP = sp;return; //@line 368 "playmidi.c"
 }
}
function _select_sample($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $15 = $6; //@line 101 "playmidi.c"
 $16 = HEAP32[$15>>2]|0; //@line 101 "playmidi.c"
 $11 = $16; //@line 101 "playmidi.c"
 $17 = $6; //@line 102 "playmidi.c"
 $18 = ((($17)) + 4|0); //@line 102 "playmidi.c"
 $19 = HEAP32[$18>>2]|0; //@line 102 "playmidi.c"
 $13 = $19; //@line 102 "playmidi.c"
 $20 = $11; //@line 104 "playmidi.c"
 $21 = ($20|0)==(1); //@line 104 "playmidi.c"
 if ($21) {
  $22 = $13; //@line 106 "playmidi.c"
  $23 = $5; //@line 106 "playmidi.c"
  $24 = $4; //@line 106 "playmidi.c"
  $25 = ((($24)) + 1724|0); //@line 106 "playmidi.c"
  $26 = (($25) + (($23*236)|0)|0); //@line 106 "playmidi.c"
  $27 = ((($26)) + 4|0); //@line 106 "playmidi.c"
  HEAP32[$27>>2] = $22; //@line 106 "playmidi.c"
  STACKTOP = sp;return; //@line 143 "playmidi.c"
 }
 $28 = $5; //@line 110 "playmidi.c"
 $29 = $4; //@line 110 "playmidi.c"
 $30 = ((($29)) + 1724|0); //@line 110 "playmidi.c"
 $31 = (($30) + (($28*236)|0)|0); //@line 110 "playmidi.c"
 $32 = ((($31)) + 8|0); //@line 110 "playmidi.c"
 $33 = HEAP32[$32>>2]|0; //@line 110 "playmidi.c"
 $8 = $33; //@line 110 "playmidi.c"
 $12 = 0; //@line 111 "playmidi.c"
 while(1) {
  $34 = $12; //@line 111 "playmidi.c"
  $35 = $11; //@line 111 "playmidi.c"
  $36 = ($34|0)<($35|0); //@line 111 "playmidi.c"
  if (!($36)) {
   break;
  }
  $37 = $13; //@line 113 "playmidi.c"
  $38 = ((($37)) + 16|0); //@line 113 "playmidi.c"
  $39 = HEAP32[$38>>2]|0; //@line 113 "playmidi.c"
  $40 = $7; //@line 113 "playmidi.c"
  $41 = ($39|0)<=($40|0); //@line 113 "playmidi.c"
  if ($41) {
   $42 = $13; //@line 113 "playmidi.c"
   $43 = ((($42)) + 20|0); //@line 113 "playmidi.c"
   $44 = HEAP32[$43>>2]|0; //@line 113 "playmidi.c"
   $45 = $7; //@line 113 "playmidi.c"
   $46 = ($44|0)>=($45|0); //@line 113 "playmidi.c"
   if ($46) {
    $47 = $13; //@line 114 "playmidi.c"
    $48 = ((($47)) + 24|0); //@line 114 "playmidi.c"
    $49 = HEAP32[$48>>2]|0; //@line 114 "playmidi.c"
    $50 = $8; //@line 114 "playmidi.c"
    $51 = ($49|0)<=($50|0); //@line 114 "playmidi.c"
    if ($51) {
     $52 = $13; //@line 114 "playmidi.c"
     $53 = ((($52)) + 28|0); //@line 114 "playmidi.c"
     $54 = HEAP32[$53>>2]|0; //@line 114 "playmidi.c"
     $55 = $8; //@line 114 "playmidi.c"
     $56 = ($54|0)>=($55|0); //@line 114 "playmidi.c"
     if ($56) {
      label = 9;
      break;
     }
    }
   }
  }
  $63 = $13; //@line 119 "playmidi.c"
  $64 = ((($63)) + 116|0); //@line 119 "playmidi.c"
  $13 = $64; //@line 119 "playmidi.c"
  $65 = $12; //@line 111 "playmidi.c"
  $66 = (($65) + 1)|0; //@line 111 "playmidi.c"
  $12 = $66; //@line 111 "playmidi.c"
 }
 if ((label|0) == 9) {
  $57 = $13; //@line 116 "playmidi.c"
  $58 = $5; //@line 116 "playmidi.c"
  $59 = $4; //@line 116 "playmidi.c"
  $60 = ((($59)) + 1724|0); //@line 116 "playmidi.c"
  $61 = (($60) + (($58*236)|0)|0); //@line 116 "playmidi.c"
  $62 = ((($61)) + 4|0); //@line 116 "playmidi.c"
  HEAP32[$62>>2] = $57; //@line 116 "playmidi.c"
  STACKTOP = sp;return; //@line 143 "playmidi.c"
 }
 $9 = 2147483647; //@line 128 "playmidi.c"
 $67 = $6; //@line 129 "playmidi.c"
 $68 = ((($67)) + 4|0); //@line 129 "playmidi.c"
 $69 = HEAP32[$68>>2]|0; //@line 129 "playmidi.c"
 $13 = $69; //@line 129 "playmidi.c"
 $14 = $69; //@line 129 "playmidi.c"
 $12 = 0; //@line 130 "playmidi.c"
 while(1) {
  $70 = $12; //@line 130 "playmidi.c"
  $71 = $11; //@line 130 "playmidi.c"
  $72 = ($70|0)<($71|0); //@line 130 "playmidi.c"
  if (!($72)) {
   break;
  }
  $73 = $13; //@line 132 "playmidi.c"
  $74 = ((($73)) + 32|0); //@line 132 "playmidi.c"
  $75 = HEAP32[$74>>2]|0; //@line 132 "playmidi.c"
  $76 = $8; //@line 132 "playmidi.c"
  $77 = (($75) - ($76))|0; //@line 132 "playmidi.c"
  $10 = $77; //@line 132 "playmidi.c"
  $78 = $10; //@line 133 "playmidi.c"
  $79 = ($78|0)<(0); //@line 133 "playmidi.c"
  if ($79) {
   $80 = $10; //@line 133 "playmidi.c"
   $81 = (0 - ($80))|0; //@line 133 "playmidi.c"
   $10 = $81; //@line 133 "playmidi.c"
  }
  $82 = $10; //@line 134 "playmidi.c"
  $83 = $9; //@line 134 "playmidi.c"
  $84 = ($82|0)<($83|0); //@line 134 "playmidi.c"
  if ($84) {
   $85 = $10; //@line 136 "playmidi.c"
   $9 = $85; //@line 136 "playmidi.c"
   $86 = $13; //@line 137 "playmidi.c"
   $14 = $86; //@line 137 "playmidi.c"
  }
  $87 = $13; //@line 139 "playmidi.c"
  $88 = ((($87)) + 116|0); //@line 139 "playmidi.c"
  $13 = $88; //@line 139 "playmidi.c"
  $89 = $12; //@line 130 "playmidi.c"
  $90 = (($89) + 1)|0; //@line 130 "playmidi.c"
  $12 = $90; //@line 130 "playmidi.c"
 }
 $91 = $14; //@line 141 "playmidi.c"
 $92 = $5; //@line 141 "playmidi.c"
 $93 = $4; //@line 141 "playmidi.c"
 $94 = ((($93)) + 1724|0); //@line 141 "playmidi.c"
 $95 = (($94) + (($92*236)|0)|0); //@line 141 "playmidi.c"
 $96 = ((($95)) + 4|0); //@line 141 "playmidi.c"
 HEAP32[$96>>2] = $91; //@line 141 "playmidi.c"
 STACKTOP = sp;return; //@line 143 "playmidi.c"
}
function _scaled_volume($0,$1) {
 $0 = $0|0;
 $1 = +$1;
 var $10 = 0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0.0, $19 = 0.0, $2 = 0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0.0, $5 = 0, $6 = 0.0, $7 = 0.0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $3 = $0;
 $4 = $1;
 $6 = $4; //@line 958 "playmidi.c"
 $7 = $6; //@line 958 "playmidi.c"
 $8 = $7 <= 1.0; //@line 958 "playmidi.c"
 $9 = $3; //@line 959 "playmidi.c"
 $10 = $9&255; //@line 959 "playmidi.c"
 if ($8) {
  $11 = (+($10|0)); //@line 959 "playmidi.c"
  $12 = $4; //@line 959 "playmidi.c"
  $13 = $11 * $12; //@line 959 "playmidi.c"
  $14 = (~~(($13))&255); //@line 959 "playmidi.c"
  $2 = $14; //@line 959 "playmidi.c"
  $32 = $2; //@line 965 "playmidi.c"
  STACKTOP = sp;return ($32|0); //@line 965 "playmidi.c"
 } else {
  $15 = $3; //@line 961 "playmidi.c"
  $16 = $15&255; //@line 961 "playmidi.c"
  $17 = (127 - ($16))|0; //@line 961 "playmidi.c"
  $18 = (+($17|0)); //@line 961 "playmidi.c"
  $19 = $4; //@line 961 "playmidi.c"
  $20 = $19; //@line 961 "playmidi.c"
  $21 = $20 - 1.0; //@line 961 "playmidi.c"
  $22 = $18 * $21; //@line 961 "playmidi.c"
  $23 = (~~(($22))&255); //@line 961 "playmidi.c"
  $24 = $23&255; //@line 961 "playmidi.c"
  $25 = (($10) + ($24))|0; //@line 961 "playmidi.c"
  $26 = $25&255; //@line 961 "playmidi.c"
  $5 = $26; //@line 961 "playmidi.c"
  $27 = $3; //@line 962 "playmidi.c"
  $28 = $27&255; //@line 962 "playmidi.c"
  $29 = $5; //@line 962 "playmidi.c"
  $30 = $29&255; //@line 962 "playmidi.c"
  HEAP32[$vararg_buffer>>2] = $28; //@line 962 "playmidi.c"
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0); //@line 962 "playmidi.c"
  HEAP32[$vararg_ptr1>>2] = $30; //@line 962 "playmidi.c"
  (_printf(5056,$vararg_buffer)|0); //@line 962 "playmidi.c"
  $31 = $5; //@line 963 "playmidi.c"
  $2 = $31; //@line 963 "playmidi.c"
  $32 = $2; //@line 965 "playmidi.c"
  STACKTOP = sp;return ($32|0); //@line 965 "playmidi.c"
 }
 return (0)|0;
}
function _recompute_freq($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0.0, $114 = 0.0, $115 = 0.0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0.0, $141 = 0.0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0.0, $149 = 0.0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0.0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0.0, $171 = 0.0;
 var $172 = 0.0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0.0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0.0, $195 = 0.0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0.0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0.0, $209 = 0.0, $21 = 0, $210 = 0.0, $211 = 0.0, $212 = 0.0, $213 = 0.0, $214 = 0, $215 = 0, $216 = 0.0, $217 = 0.0, $218 = 0.0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0.0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0.0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $2 = $0;
 $3 = $1;
 $9 = $3; //@line 148 "playmidi.c"
 $10 = $2; //@line 148 "playmidi.c"
 $11 = ((($10)) + 1724|0); //@line 148 "playmidi.c"
 $12 = (($11) + (($9*236)|0)|0); //@line 148 "playmidi.c"
 $13 = ((($12)) + 20|0); //@line 148 "playmidi.c"
 $14 = HEAP32[$13>>2]|0; //@line 148 "playmidi.c"
 $15 = ($14|0)<(0); //@line 148 "playmidi.c"
 $16 = $15&1; //@line 148 "playmidi.c"
 $4 = $16; //@line 148 "playmidi.c"
 $17 = $3; //@line 149 "playmidi.c"
 $18 = $2; //@line 149 "playmidi.c"
 $19 = ((($18)) + 1724|0); //@line 149 "playmidi.c"
 $20 = (($19) + (($17*236)|0)|0); //@line 149 "playmidi.c"
 $21 = ((($20)) + 1|0); //@line 149 "playmidi.c"
 $22 = HEAP8[$21>>0]|0; //@line 149 "playmidi.c"
 $23 = $22&255; //@line 149 "playmidi.c"
 $24 = $2; //@line 149 "playmidi.c"
 $25 = ((($24)) + 1084|0); //@line 149 "playmidi.c"
 $26 = (($25) + (($23*40)|0)|0); //@line 149 "playmidi.c"
 $27 = ((($26)) + 20|0); //@line 149 "playmidi.c"
 $28 = HEAP32[$27>>2]|0; //@line 149 "playmidi.c"
 $5 = $28; //@line 149 "playmidi.c"
 $29 = $3; //@line 152 "playmidi.c"
 $30 = $2; //@line 152 "playmidi.c"
 $31 = ((($30)) + 1724|0); //@line 152 "playmidi.c"
 $32 = (($31) + (($29*236)|0)|0); //@line 152 "playmidi.c"
 $33 = ((($32)) + 4|0); //@line 152 "playmidi.c"
 $34 = HEAP32[$33>>2]|0; //@line 152 "playmidi.c"
 $35 = ((($34)) + 12|0); //@line 152 "playmidi.c"
 $36 = HEAP32[$35>>2]|0; //@line 152 "playmidi.c"
 $37 = ($36|0)!=(0); //@line 152 "playmidi.c"
 if (!($37)) {
  STACKTOP = sp;return; //@line 199 "playmidi.c"
 }
 $38 = $3; //@line 155 "playmidi.c"
 $39 = $2; //@line 155 "playmidi.c"
 $40 = ((($39)) + 1724|0); //@line 155 "playmidi.c"
 $41 = (($40) + (($38*236)|0)|0); //@line 155 "playmidi.c"
 $42 = ((($41)) + 212|0); //@line 155 "playmidi.c"
 $43 = HEAP32[$42>>2]|0; //@line 155 "playmidi.c"
 $44 = ($43|0)!=(0); //@line 155 "playmidi.c"
 L4: do {
  if ($44) {
   $7 = 32; //@line 160 "playmidi.c"
   while(1) {
    $45 = $7; //@line 161 "playmidi.c"
    $46 = (($45) + -1)|0; //@line 161 "playmidi.c"
    $7 = $46; //@line 161 "playmidi.c"
    $47 = ($45|0)!=(0); //@line 161 "playmidi.c"
    if (!($47)) {
     break L4;
    }
    $48 = $7; //@line 162 "playmidi.c"
    $49 = $3; //@line 162 "playmidi.c"
    $50 = $2; //@line 162 "playmidi.c"
    $51 = ((($50)) + 1724|0); //@line 162 "playmidi.c"
    $52 = (($51) + (($49*236)|0)|0); //@line 162 "playmidi.c"
    $53 = ((($52)) + 80|0); //@line 162 "playmidi.c"
    $54 = (($53) + ($48<<2)|0); //@line 162 "playmidi.c"
    HEAP32[$54>>2] = 0; //@line 162 "playmidi.c"
   }
  }
 } while(0);
 $55 = $5; //@line 165 "playmidi.c"
 $56 = ($55|0)==(8192); //@line 165 "playmidi.c"
 $57 = $5; //@line 165 "playmidi.c"
 $58 = ($57|0)<(0); //@line 165 "playmidi.c"
 $or$cond = $56 | $58; //@line 165 "playmidi.c"
 $59 = $5; //@line 165 "playmidi.c"
 $60 = ($59|0)>(16383); //@line 165 "playmidi.c"
 $or$cond3 = $or$cond | $60; //@line 165 "playmidi.c"
 do {
  if ($or$cond3) {
   $61 = $3; //@line 166 "playmidi.c"
   $62 = $2; //@line 166 "playmidi.c"
   $63 = ((($62)) + 1724|0); //@line 166 "playmidi.c"
   $64 = (($63) + (($61*236)|0)|0); //@line 166 "playmidi.c"
   $65 = ((($64)) + 8|0); //@line 166 "playmidi.c"
   $66 = HEAP32[$65>>2]|0; //@line 166 "playmidi.c"
   $67 = $3; //@line 166 "playmidi.c"
   $68 = $2; //@line 166 "playmidi.c"
   $69 = ((($68)) + 1724|0); //@line 166 "playmidi.c"
   $70 = (($69) + (($67*236)|0)|0); //@line 166 "playmidi.c"
   $71 = ((($70)) + 12|0); //@line 166 "playmidi.c"
   HEAP32[$71>>2] = $66; //@line 166 "playmidi.c"
  } else {
   $72 = $5; //@line 169 "playmidi.c"
   $73 = (($72) - 8192)|0; //@line 169 "playmidi.c"
   $5 = $73; //@line 169 "playmidi.c"
   $74 = $3; //@line 170 "playmidi.c"
   $75 = $2; //@line 170 "playmidi.c"
   $76 = ((($75)) + 1724|0); //@line 170 "playmidi.c"
   $77 = (($76) + (($74*236)|0)|0); //@line 170 "playmidi.c"
   $78 = ((($77)) + 1|0); //@line 170 "playmidi.c"
   $79 = HEAP8[$78>>0]|0; //@line 170 "playmidi.c"
   $80 = $79&255; //@line 170 "playmidi.c"
   $81 = $2; //@line 170 "playmidi.c"
   $82 = ((($81)) + 1084|0); //@line 170 "playmidi.c"
   $83 = (($82) + (($80*40)|0)|0); //@line 170 "playmidi.c"
   $84 = ((($83)) + 36|0); //@line 170 "playmidi.c"
   $85 = +HEAPF32[$84>>2]; //@line 170 "playmidi.c"
   $86 = $85 != 0.0; //@line 170 "playmidi.c"
   if (!($86)) {
    $87 = $5; //@line 173 "playmidi.c"
    $88 = $3; //@line 173 "playmidi.c"
    $89 = $2; //@line 173 "playmidi.c"
    $90 = ((($89)) + 1724|0); //@line 173 "playmidi.c"
    $91 = (($90) + (($88*236)|0)|0); //@line 173 "playmidi.c"
    $92 = ((($91)) + 1|0); //@line 173 "playmidi.c"
    $93 = HEAP8[$92>>0]|0; //@line 173 "playmidi.c"
    $94 = $93&255; //@line 173 "playmidi.c"
    $95 = $2; //@line 173 "playmidi.c"
    $96 = ((($95)) + 1084|0); //@line 173 "playmidi.c"
    $97 = (($96) + (($94*40)|0)|0); //@line 173 "playmidi.c"
    $98 = ((($97)) + 32|0); //@line 173 "playmidi.c"
    $99 = HEAP32[$98>>2]|0; //@line 173 "playmidi.c"
    $100 = Math_imul($87, $99)|0; //@line 173 "playmidi.c"
    $8 = $100; //@line 173 "playmidi.c"
    $101 = $5; //@line 174 "playmidi.c"
    $102 = ($101|0)<(0); //@line 174 "playmidi.c"
    if ($102) {
     $103 = $8; //@line 175 "playmidi.c"
     $104 = (0 - ($103))|0; //@line 175 "playmidi.c"
     $8 = $104; //@line 175 "playmidi.c"
    }
    $105 = $8; //@line 177 "playmidi.c"
    $106 = $105 >> 5; //@line 177 "playmidi.c"
    $107 = $106 & 255; //@line 177 "playmidi.c"
    $108 = (1032 + ($107<<3)|0); //@line 177 "playmidi.c"
    $109 = +HEAPF64[$108>>3]; //@line 177 "playmidi.c"
    $110 = $8; //@line 177 "playmidi.c"
    $111 = $110 >> 13; //@line 177 "playmidi.c"
    $112 = (3080 + ($111<<3)|0); //@line 177 "playmidi.c"
    $113 = +HEAPF64[$112>>3]; //@line 177 "playmidi.c"
    $114 = $109 * $113; //@line 177 "playmidi.c"
    $115 = $114; //@line 177 "playmidi.c"
    $116 = $3; //@line 176 "playmidi.c"
    $117 = $2; //@line 176 "playmidi.c"
    $118 = ((($117)) + 1724|0); //@line 176 "playmidi.c"
    $119 = (($118) + (($116*236)|0)|0); //@line 176 "playmidi.c"
    $120 = ((($119)) + 1|0); //@line 176 "playmidi.c"
    $121 = HEAP8[$120>>0]|0; //@line 176 "playmidi.c"
    $122 = $121&255; //@line 176 "playmidi.c"
    $123 = $2; //@line 176 "playmidi.c"
    $124 = ((($123)) + 1084|0); //@line 176 "playmidi.c"
    $125 = (($124) + (($122*40)|0)|0); //@line 176 "playmidi.c"
    $126 = ((($125)) + 36|0); //@line 176 "playmidi.c"
    HEAPF32[$126>>2] = $115; //@line 176 "playmidi.c"
   }
   $127 = $5; //@line 179 "playmidi.c"
   $128 = ($127|0)>(0); //@line 179 "playmidi.c"
   $129 = $3; //@line 181 "playmidi.c"
   $130 = $2; //@line 181 "playmidi.c"
   $131 = ((($130)) + 1724|0); //@line 181 "playmidi.c"
   $132 = (($131) + (($129*236)|0)|0); //@line 181 "playmidi.c"
   if ($128) {
    $133 = ((($132)) + 1|0); //@line 181 "playmidi.c"
    $134 = HEAP8[$133>>0]|0; //@line 181 "playmidi.c"
    $135 = $134&255; //@line 181 "playmidi.c"
    $136 = $2; //@line 181 "playmidi.c"
    $137 = ((($136)) + 1084|0); //@line 181 "playmidi.c"
    $138 = (($137) + (($135*40)|0)|0); //@line 181 "playmidi.c"
    $139 = ((($138)) + 36|0); //@line 181 "playmidi.c"
    $140 = +HEAPF32[$139>>2]; //@line 181 "playmidi.c"
    $141 = $140; //@line 181 "playmidi.c"
    $142 = $3; //@line 182 "playmidi.c"
    $143 = $2; //@line 182 "playmidi.c"
    $144 = ((($143)) + 1724|0); //@line 182 "playmidi.c"
    $145 = (($144) + (($142*236)|0)|0); //@line 182 "playmidi.c"
    $146 = ((($145)) + 8|0); //@line 182 "playmidi.c"
    $147 = HEAP32[$146>>2]|0; //@line 182 "playmidi.c"
    $148 = (+($147|0)); //@line 182 "playmidi.c"
    $149 = $141 * $148; //@line 181 "playmidi.c"
    $150 = (~~(($149))); //@line 181 "playmidi.c"
    $151 = $3; //@line 180 "playmidi.c"
    $152 = $2; //@line 180 "playmidi.c"
    $153 = ((($152)) + 1724|0); //@line 180 "playmidi.c"
    $154 = (($153) + (($151*236)|0)|0); //@line 180 "playmidi.c"
    $155 = ((($154)) + 12|0); //@line 180 "playmidi.c"
    HEAP32[$155>>2] = $150; //@line 180 "playmidi.c"
    break;
   } else {
    $156 = ((($132)) + 8|0); //@line 185 "playmidi.c"
    $157 = HEAP32[$156>>2]|0; //@line 185 "playmidi.c"
    $158 = (+($157|0)); //@line 185 "playmidi.c"
    $159 = $3; //@line 186 "playmidi.c"
    $160 = $2; //@line 186 "playmidi.c"
    $161 = ((($160)) + 1724|0); //@line 186 "playmidi.c"
    $162 = (($161) + (($159*236)|0)|0); //@line 186 "playmidi.c"
    $163 = ((($162)) + 1|0); //@line 186 "playmidi.c"
    $164 = HEAP8[$163>>0]|0; //@line 186 "playmidi.c"
    $165 = $164&255; //@line 186 "playmidi.c"
    $166 = $2; //@line 186 "playmidi.c"
    $167 = ((($166)) + 1084|0); //@line 186 "playmidi.c"
    $168 = (($167) + (($165*40)|0)|0); //@line 186 "playmidi.c"
    $169 = ((($168)) + 36|0); //@line 186 "playmidi.c"
    $170 = +HEAPF32[$169>>2]; //@line 186 "playmidi.c"
    $171 = $170; //@line 186 "playmidi.c"
    $172 = $158 / $171; //@line 185 "playmidi.c"
    $173 = (~~(($172))); //@line 185 "playmidi.c"
    $174 = $3; //@line 184 "playmidi.c"
    $175 = $2; //@line 184 "playmidi.c"
    $176 = ((($175)) + 1724|0); //@line 184 "playmidi.c"
    $177 = (($176) + (($174*236)|0)|0); //@line 184 "playmidi.c"
    $178 = ((($177)) + 12|0); //@line 184 "playmidi.c"
    HEAP32[$178>>2] = $173; //@line 184 "playmidi.c"
    break;
   }
  }
 } while(0);
 $179 = $3; //@line 189 "playmidi.c"
 $180 = $2; //@line 189 "playmidi.c"
 $181 = ((($180)) + 1724|0); //@line 189 "playmidi.c"
 $182 = (($181) + (($179*236)|0)|0); //@line 189 "playmidi.c"
 $183 = ((($182)) + 4|0); //@line 189 "playmidi.c"
 $184 = HEAP32[$183>>2]|0; //@line 189 "playmidi.c"
 $185 = ((($184)) + 12|0); //@line 189 "playmidi.c"
 $186 = HEAP32[$185>>2]|0; //@line 189 "playmidi.c"
 $187 = (+($186|0)); //@line 189 "playmidi.c"
 $188 = $3; //@line 189 "playmidi.c"
 $189 = $2; //@line 189 "playmidi.c"
 $190 = ((($189)) + 1724|0); //@line 189 "playmidi.c"
 $191 = (($190) + (($188*236)|0)|0); //@line 189 "playmidi.c"
 $192 = ((($191)) + 12|0); //@line 189 "playmidi.c"
 $193 = HEAP32[$192>>2]|0; //@line 189 "playmidi.c"
 $194 = (+($193|0)); //@line 189 "playmidi.c"
 $195 = $187 * $194; //@line 189 "playmidi.c"
 $196 = $3; //@line 189 "playmidi.c"
 $197 = $2; //@line 189 "playmidi.c"
 $198 = ((($197)) + 1724|0); //@line 189 "playmidi.c"
 $199 = (($198) + (($196*236)|0)|0); //@line 189 "playmidi.c"
 $200 = ((($199)) + 4|0); //@line 189 "playmidi.c"
 $201 = HEAP32[$200>>2]|0; //@line 189 "playmidi.c"
 $202 = ((($201)) + 32|0); //@line 189 "playmidi.c"
 $203 = HEAP32[$202>>2]|0; //@line 189 "playmidi.c"
 $204 = (+($203|0)); //@line 189 "playmidi.c"
 $205 = $2; //@line 189 "playmidi.c"
 $206 = ((($205)) + 4|0); //@line 189 "playmidi.c"
 $207 = HEAP32[$206>>2]|0; //@line 189 "playmidi.c"
 $208 = (+($207|0)); //@line 189 "playmidi.c"
 $209 = $204 * $208; //@line 189 "playmidi.c"
 $210 = $195 / $209; //@line 189 "playmidi.c"
 $211 = $210 * 4096.0; //@line 189 "playmidi.c"
 $212 = $211; //@line 189 "playmidi.c"
 $213 = $212; //@line 189 "playmidi.c"
 $6 = $213; //@line 189 "playmidi.c"
 $214 = $4; //@line 195 "playmidi.c"
 $215 = ($214|0)!=(0); //@line 195 "playmidi.c"
 if ($215) {
  $216 = $6; //@line 196 "playmidi.c"
  $217 = -$216; //@line 196 "playmidi.c"
  $6 = $217; //@line 196 "playmidi.c"
 }
 $218 = $6; //@line 198 "playmidi.c"
 $219 = (~~(($218))); //@line 198 "playmidi.c"
 $220 = $3; //@line 198 "playmidi.c"
 $221 = $2; //@line 198 "playmidi.c"
 $222 = ((($221)) + 1724|0); //@line 198 "playmidi.c"
 $223 = (($222) + (($220*236)|0)|0); //@line 198 "playmidi.c"
 $224 = ((($223)) + 20|0); //@line 198 "playmidi.c"
 HEAP32[$224>>2] = $219; //@line 198 "playmidi.c"
 STACKTOP = sp;return; //@line 199 "playmidi.c"
}
function _recompute_amp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0.0, $108 = 0.0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0.0, $113 = 0.0, $114 = 0.0, $115 = 0.0, $116 = 0.0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0.0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0.0, $14 = 0, $140 = 0.0, $141 = 0.0, $142 = 0, $143 = 0, $144 = 0.0, $145 = 0.0, $146 = 0.0, $147 = 0.0, $148 = 0.0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0.0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0.0, $164 = 0.0, $165 = 0.0, $166 = 0, $167 = 0, $168 = 0.0, $169 = 0.0, $17 = 0, $170 = 0.0, $171 = 0.0;
 var $172 = 0.0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0.0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0.0, $191 = 0.0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0.0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0.0, $211 = 0.0, $212 = 0, $213 = 0, $214 = 0.0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0.0, $223 = 0.0, $224 = 0.0, $225 = 0;
 var $226 = 0, $227 = 0.0, $228 = 0.0, $229 = 0.0, $23 = 0, $230 = 0.0, $231 = 0.0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0.0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0.0, $72 = 0.0, $73 = 0.0, $74 = 0, $75 = 0, $76 = 0.0, $77 = 0.0, $78 = 0.0, $79 = 0.0, $8 = 0, $80 = 0.0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $5 = $3; //@line 207 "playmidi.c"
 $6 = $2; //@line 207 "playmidi.c"
 $7 = ((($6)) + 1724|0); //@line 207 "playmidi.c"
 $8 = (($7) + (($5*236)|0)|0); //@line 207 "playmidi.c"
 $9 = ((($8)) + 3|0); //@line 207 "playmidi.c"
 $10 = HEAP8[$9>>0]|0; //@line 207 "playmidi.c"
 $11 = $10&255; //@line 207 "playmidi.c"
 $12 = $3; //@line 208 "playmidi.c"
 $13 = $2; //@line 208 "playmidi.c"
 $14 = ((($13)) + 1724|0); //@line 208 "playmidi.c"
 $15 = (($14) + (($12*236)|0)|0); //@line 208 "playmidi.c"
 $16 = ((($15)) + 1|0); //@line 208 "playmidi.c"
 $17 = HEAP8[$16>>0]|0; //@line 208 "playmidi.c"
 $18 = $17&255; //@line 208 "playmidi.c"
 $19 = $2; //@line 208 "playmidi.c"
 $20 = ((($19)) + 1084|0); //@line 208 "playmidi.c"
 $21 = (($20) + (($18*40)|0)|0); //@line 208 "playmidi.c"
 $22 = ((($21)) + 8|0); //@line 208 "playmidi.c"
 $23 = HEAP32[$22>>2]|0; //@line 208 "playmidi.c"
 $24 = Math_imul($11, $23)|0; //@line 207 "playmidi.c"
 $25 = $3; //@line 209 "playmidi.c"
 $26 = $2; //@line 209 "playmidi.c"
 $27 = ((($26)) + 1724|0); //@line 209 "playmidi.c"
 $28 = (($27) + (($25*236)|0)|0); //@line 209 "playmidi.c"
 $29 = ((($28)) + 1|0); //@line 209 "playmidi.c"
 $30 = HEAP8[$29>>0]|0; //@line 209 "playmidi.c"
 $31 = $30&255; //@line 209 "playmidi.c"
 $32 = $2; //@line 209 "playmidi.c"
 $33 = ((($32)) + 1084|0); //@line 209 "playmidi.c"
 $34 = (($33) + (($31*40)|0)|0); //@line 209 "playmidi.c"
 $35 = ((($34)) + 24|0); //@line 209 "playmidi.c"
 $36 = HEAP32[$35>>2]|0; //@line 209 "playmidi.c"
 $37 = Math_imul($24, $36)|0; //@line 208 "playmidi.c"
 $4 = $37; //@line 207 "playmidi.c"
 $38 = $2; //@line 211 "playmidi.c"
 $39 = ((($38)) + 8|0); //@line 211 "playmidi.c"
 $40 = HEAP32[$39>>2]|0; //@line 211 "playmidi.c"
 $41 = $40 & 1; //@line 211 "playmidi.c"
 $42 = ($41|0)!=(0); //@line 211 "playmidi.c"
 $43 = $3; //@line 250 "playmidi.c"
 $44 = $2; //@line 250 "playmidi.c"
 $45 = ((($44)) + 1724|0); //@line 250 "playmidi.c"
 $46 = (($45) + (($43*236)|0)|0); //@line 250 "playmidi.c"
 if ($42) {
  $212 = ((($46)) + 232|0); //@line 250 "playmidi.c"
  HEAP32[$212>>2] = 3; //@line 250 "playmidi.c"
  $213 = $4; //@line 253 "playmidi.c"
  $214 = (+($213|0)); //@line 253 "playmidi.c"
  $215 = $3; //@line 253 "playmidi.c"
  $216 = $2; //@line 253 "playmidi.c"
  $217 = ((($216)) + 1724|0); //@line 253 "playmidi.c"
  $218 = (($217) + (($215*236)|0)|0); //@line 253 "playmidi.c"
  $219 = ((($218)) + 4|0); //@line 253 "playmidi.c"
  $220 = HEAP32[$219>>2]|0; //@line 253 "playmidi.c"
  $221 = ((($220)) + 84|0); //@line 253 "playmidi.c"
  $222 = +HEAPF32[$221>>2]; //@line 253 "playmidi.c"
  $223 = $222; //@line 253 "playmidi.c"
  $224 = $214 * $223; //@line 253 "playmidi.c"
  $225 = $2; //@line 253 "playmidi.c"
  $226 = ((($225)) + 16|0); //@line 253 "playmidi.c"
  $227 = +HEAPF32[$226>>2]; //@line 253 "playmidi.c"
  $228 = $227; //@line 253 "playmidi.c"
  $229 = $224 * $228; //@line 253 "playmidi.c"
  $230 = $229 * 4.76837158203125E-7; //@line 253 "playmidi.c"
  $231 = $230; //@line 253 "playmidi.c"
  $232 = $3; //@line 252 "playmidi.c"
  $233 = $2; //@line 252 "playmidi.c"
  $234 = ((($233)) + 1724|0); //@line 252 "playmidi.c"
  $235 = (($234) + (($232*236)|0)|0); //@line 252 "playmidi.c"
  $236 = ((($235)) + 68|0); //@line 252 "playmidi.c"
  HEAPF32[$236>>2] = $231; //@line 252 "playmidi.c"
  STACKTOP = sp;return; //@line 256 "playmidi.c"
 }
 $47 = ((($46)) + 228|0); //@line 213 "playmidi.c"
 $48 = HEAP32[$47>>2]|0; //@line 213 "playmidi.c"
 $49 = ($48|0)>(60); //@line 213 "playmidi.c"
 if ($49) {
  $50 = $3; //@line 213 "playmidi.c"
  $51 = $2; //@line 213 "playmidi.c"
  $52 = ((($51)) + 1724|0); //@line 213 "playmidi.c"
  $53 = (($52) + (($50*236)|0)|0); //@line 213 "playmidi.c"
  $54 = ((($53)) + 228|0); //@line 213 "playmidi.c"
  $55 = HEAP32[$54>>2]|0; //@line 213 "playmidi.c"
  $56 = ($55|0)<(68); //@line 213 "playmidi.c"
  if ($56) {
   $57 = $3; //@line 215 "playmidi.c"
   $58 = $2; //@line 215 "playmidi.c"
   $59 = ((($58)) + 1724|0); //@line 215 "playmidi.c"
   $60 = (($59) + (($57*236)|0)|0); //@line 215 "playmidi.c"
   $61 = ((($60)) + 232|0); //@line 215 "playmidi.c"
   HEAP32[$61>>2] = 3; //@line 215 "playmidi.c"
   $62 = $4; //@line 218 "playmidi.c"
   $63 = (+($62|0)); //@line 218 "playmidi.c"
   $64 = $3; //@line 218 "playmidi.c"
   $65 = $2; //@line 218 "playmidi.c"
   $66 = ((($65)) + 1724|0); //@line 218 "playmidi.c"
   $67 = (($66) + (($64*236)|0)|0); //@line 218 "playmidi.c"
   $68 = ((($67)) + 4|0); //@line 218 "playmidi.c"
   $69 = HEAP32[$68>>2]|0; //@line 218 "playmidi.c"
   $70 = ((($69)) + 84|0); //@line 218 "playmidi.c"
   $71 = +HEAPF32[$70>>2]; //@line 218 "playmidi.c"
   $72 = $71; //@line 218 "playmidi.c"
   $73 = $63 * $72; //@line 218 "playmidi.c"
   $74 = $2; //@line 218 "playmidi.c"
   $75 = ((($74)) + 16|0); //@line 218 "playmidi.c"
   $76 = +HEAPF32[$75>>2]; //@line 218 "playmidi.c"
   $77 = $76; //@line 218 "playmidi.c"
   $78 = $73 * $77; //@line 218 "playmidi.c"
   $79 = $78 * 4.76837158203125E-7; //@line 218 "playmidi.c"
   $80 = $79; //@line 218 "playmidi.c"
   $81 = $3; //@line 217 "playmidi.c"
   $82 = $2; //@line 217 "playmidi.c"
   $83 = ((($82)) + 1724|0); //@line 217 "playmidi.c"
   $84 = (($83) + (($81*236)|0)|0); //@line 217 "playmidi.c"
   $85 = ((($84)) + 68|0); //@line 217 "playmidi.c"
   HEAPF32[$85>>2] = $80; //@line 217 "playmidi.c"
   STACKTOP = sp;return; //@line 256 "playmidi.c"
  }
 }
 $86 = $3; //@line 221 "playmidi.c"
 $87 = $2; //@line 221 "playmidi.c"
 $88 = ((($87)) + 1724|0); //@line 221 "playmidi.c"
 $89 = (($88) + (($86*236)|0)|0); //@line 221 "playmidi.c"
 $90 = ((($89)) + 228|0); //@line 221 "playmidi.c"
 $91 = HEAP32[$90>>2]|0; //@line 221 "playmidi.c"
 $92 = ($91|0)<(5); //@line 221 "playmidi.c"
 $93 = $3; //@line 223 "playmidi.c"
 $94 = $2; //@line 223 "playmidi.c"
 $95 = ((($94)) + 1724|0); //@line 223 "playmidi.c"
 $96 = (($95) + (($93*236)|0)|0); //@line 223 "playmidi.c"
 if ($92) {
  $97 = ((($96)) + 232|0); //@line 223 "playmidi.c"
  HEAP32[$97>>2] = 1; //@line 223 "playmidi.c"
  $98 = $4; //@line 226 "playmidi.c"
  $99 = (+($98|0)); //@line 226 "playmidi.c"
  $100 = $3; //@line 226 "playmidi.c"
  $101 = $2; //@line 226 "playmidi.c"
  $102 = ((($101)) + 1724|0); //@line 226 "playmidi.c"
  $103 = (($102) + (($100*236)|0)|0); //@line 226 "playmidi.c"
  $104 = ((($103)) + 4|0); //@line 226 "playmidi.c"
  $105 = HEAP32[$104>>2]|0; //@line 226 "playmidi.c"
  $106 = ((($105)) + 84|0); //@line 226 "playmidi.c"
  $107 = +HEAPF32[$106>>2]; //@line 226 "playmidi.c"
  $108 = $107; //@line 226 "playmidi.c"
  $109 = $99 * $108; //@line 226 "playmidi.c"
  $110 = $2; //@line 226 "playmidi.c"
  $111 = ((($110)) + 16|0); //@line 226 "playmidi.c"
  $112 = +HEAPF32[$111>>2]; //@line 226 "playmidi.c"
  $113 = $112; //@line 226 "playmidi.c"
  $114 = $109 * $113; //@line 226 "playmidi.c"
  $115 = $114 * 9.5367431640625E-7; //@line 226 "playmidi.c"
  $116 = $115; //@line 226 "playmidi.c"
  $117 = $3; //@line 225 "playmidi.c"
  $118 = $2; //@line 225 "playmidi.c"
  $119 = ((($118)) + 1724|0); //@line 225 "playmidi.c"
  $120 = (($119) + (($117*236)|0)|0); //@line 225 "playmidi.c"
  $121 = ((($120)) + 68|0); //@line 225 "playmidi.c"
  HEAPF32[$121>>2] = $116; //@line 225 "playmidi.c"
  STACKTOP = sp;return; //@line 256 "playmidi.c"
 }
 $122 = ((($96)) + 228|0); //@line 229 "playmidi.c"
 $123 = HEAP32[$122>>2]|0; //@line 229 "playmidi.c"
 $124 = ($123|0)>(123); //@line 229 "playmidi.c"
 $125 = $3; //@line 231 "playmidi.c"
 $126 = $2; //@line 231 "playmidi.c"
 $127 = ((($126)) + 1724|0); //@line 231 "playmidi.c"
 $128 = (($127) + (($125*236)|0)|0); //@line 231 "playmidi.c"
 $129 = ((($128)) + 232|0); //@line 231 "playmidi.c"
 if ($124) {
  HEAP32[$129>>2] = 2; //@line 231 "playmidi.c"
  $130 = $4; //@line 234 "playmidi.c"
  $131 = (+($130|0)); //@line 234 "playmidi.c"
  $132 = $3; //@line 234 "playmidi.c"
  $133 = $2; //@line 234 "playmidi.c"
  $134 = ((($133)) + 1724|0); //@line 234 "playmidi.c"
  $135 = (($134) + (($132*236)|0)|0); //@line 234 "playmidi.c"
  $136 = ((($135)) + 4|0); //@line 234 "playmidi.c"
  $137 = HEAP32[$136>>2]|0; //@line 234 "playmidi.c"
  $138 = ((($137)) + 84|0); //@line 234 "playmidi.c"
  $139 = +HEAPF32[$138>>2]; //@line 234 "playmidi.c"
  $140 = $139; //@line 234 "playmidi.c"
  $141 = $131 * $140; //@line 234 "playmidi.c"
  $142 = $2; //@line 234 "playmidi.c"
  $143 = ((($142)) + 16|0); //@line 234 "playmidi.c"
  $144 = +HEAPF32[$143>>2]; //@line 234 "playmidi.c"
  $145 = $144; //@line 234 "playmidi.c"
  $146 = $141 * $145; //@line 234 "playmidi.c"
  $147 = $146 * 9.5367431640625E-7; //@line 234 "playmidi.c"
  $148 = $147; //@line 234 "playmidi.c"
  $149 = $3; //@line 233 "playmidi.c"
  $150 = $2; //@line 233 "playmidi.c"
  $151 = ((($150)) + 1724|0); //@line 233 "playmidi.c"
  $152 = (($151) + (($149*236)|0)|0); //@line 233 "playmidi.c"
  $153 = ((($152)) + 68|0); //@line 233 "playmidi.c"
  HEAPF32[$153>>2] = $148; //@line 233 "playmidi.c"
  STACKTOP = sp;return; //@line 256 "playmidi.c"
 } else {
  HEAP32[$129>>2] = 0; //@line 239 "playmidi.c"
  $154 = $4; //@line 242 "playmidi.c"
  $155 = (+($154|0)); //@line 242 "playmidi.c"
  $156 = $3; //@line 242 "playmidi.c"
  $157 = $2; //@line 242 "playmidi.c"
  $158 = ((($157)) + 1724|0); //@line 242 "playmidi.c"
  $159 = (($158) + (($156*236)|0)|0); //@line 242 "playmidi.c"
  $160 = ((($159)) + 4|0); //@line 242 "playmidi.c"
  $161 = HEAP32[$160>>2]|0; //@line 242 "playmidi.c"
  $162 = ((($161)) + 84|0); //@line 242 "playmidi.c"
  $163 = +HEAPF32[$162>>2]; //@line 242 "playmidi.c"
  $164 = $163; //@line 242 "playmidi.c"
  $165 = $155 * $164; //@line 242 "playmidi.c"
  $166 = $2; //@line 242 "playmidi.c"
  $167 = ((($166)) + 16|0); //@line 242 "playmidi.c"
  $168 = +HEAPF32[$167>>2]; //@line 242 "playmidi.c"
  $169 = $168; //@line 242 "playmidi.c"
  $170 = $165 * $169; //@line 242 "playmidi.c"
  $171 = $170 * 7.4505805969238281E-9; //@line 242 "playmidi.c"
  $172 = $171; //@line 242 "playmidi.c"
  $173 = $3; //@line 241 "playmidi.c"
  $174 = $2; //@line 241 "playmidi.c"
  $175 = ((($174)) + 1724|0); //@line 241 "playmidi.c"
  $176 = (($175) + (($173*236)|0)|0); //@line 241 "playmidi.c"
  $177 = ((($176)) + 68|0); //@line 241 "playmidi.c"
  HEAPF32[$177>>2] = $172; //@line 241 "playmidi.c"
  $178 = $3; //@line 244 "playmidi.c"
  $179 = $2; //@line 244 "playmidi.c"
  $180 = ((($179)) + 1724|0); //@line 244 "playmidi.c"
  $181 = (($180) + (($178*236)|0)|0); //@line 244 "playmidi.c"
  $182 = ((($181)) + 68|0); //@line 244 "playmidi.c"
  $183 = +HEAPF32[$182>>2]; //@line 244 "playmidi.c"
  $184 = $3; //@line 244 "playmidi.c"
  $185 = $2; //@line 244 "playmidi.c"
  $186 = ((($185)) + 1724|0); //@line 244 "playmidi.c"
  $187 = (($186) + (($184*236)|0)|0); //@line 244 "playmidi.c"
  $188 = ((($187)) + 228|0); //@line 244 "playmidi.c"
  $189 = HEAP32[$188>>2]|0; //@line 244 "playmidi.c"
  $190 = (+($189|0)); //@line 244 "playmidi.c"
  $191 = $183 * $190; //@line 244 "playmidi.c"
  $192 = $3; //@line 244 "playmidi.c"
  $193 = $2; //@line 244 "playmidi.c"
  $194 = ((($193)) + 1724|0); //@line 244 "playmidi.c"
  $195 = (($194) + (($192*236)|0)|0); //@line 244 "playmidi.c"
  $196 = ((($195)) + 72|0); //@line 244 "playmidi.c"
  HEAPF32[$196>>2] = $191; //@line 244 "playmidi.c"
  $197 = $3; //@line 245 "playmidi.c"
  $198 = $2; //@line 245 "playmidi.c"
  $199 = ((($198)) + 1724|0); //@line 245 "playmidi.c"
  $200 = (($199) + (($197*236)|0)|0); //@line 245 "playmidi.c"
  $201 = ((($200)) + 228|0); //@line 245 "playmidi.c"
  $202 = HEAP32[$201>>2]|0; //@line 245 "playmidi.c"
  $203 = (127 - ($202))|0; //@line 245 "playmidi.c"
  $204 = (+($203|0)); //@line 245 "playmidi.c"
  $205 = $3; //@line 245 "playmidi.c"
  $206 = $2; //@line 245 "playmidi.c"
  $207 = ((($206)) + 1724|0); //@line 245 "playmidi.c"
  $208 = (($207) + (($205*236)|0)|0); //@line 245 "playmidi.c"
  $209 = ((($208)) + 68|0); //@line 245 "playmidi.c"
  $210 = +HEAPF32[$209>>2]; //@line 245 "playmidi.c"
  $211 = $210 * $204; //@line 245 "playmidi.c"
  HEAPF32[$209>>2] = $211; //@line 245 "playmidi.c"
  STACKTOP = sp;return; //@line 256 "playmidi.c"
 }
}
function _note_off($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $6 = $2; //@line 476 "playmidi.c"
 $7 = ((($6)) + 13052|0); //@line 476 "playmidi.c"
 $8 = HEAP32[$7>>2]|0; //@line 476 "playmidi.c"
 $4 = $8; //@line 476 "playmidi.c"
 $9 = $3; //@line 480 "playmidi.c"
 $10 = (0|0)==($9|0); //@line 480 "playmidi.c"
 if ($10) {
  $11 = $2; //@line 481 "playmidi.c"
  $12 = ((($11)) + 13080|0); //@line 481 "playmidi.c"
  $13 = HEAP32[$12>>2]|0; //@line 481 "playmidi.c"
  $5 = $13; //@line 481 "playmidi.c"
 } else {
  $14 = $3; //@line 483 "playmidi.c"
  $5 = $14; //@line 483 "playmidi.c"
 }
 while(1) {
  $15 = $4; //@line 485 "playmidi.c"
  $16 = (($15) + -1)|0; //@line 485 "playmidi.c"
  $4 = $16; //@line 485 "playmidi.c"
  $17 = ($15|0)!=(0); //@line 485 "playmidi.c"
  if (!($17)) {
   label = 11;
   break;
  }
  $18 = $4; //@line 486 "playmidi.c"
  $19 = $2; //@line 486 "playmidi.c"
  $20 = ((($19)) + 1724|0); //@line 486 "playmidi.c"
  $21 = (($20) + (($18*236)|0)|0); //@line 486 "playmidi.c"
  $22 = HEAP8[$21>>0]|0; //@line 486 "playmidi.c"
  $23 = $22&255; //@line 486 "playmidi.c"
  $24 = ($23|0)==(1); //@line 486 "playmidi.c"
  if (!($24)) {
   continue;
  }
  $25 = $4; //@line 487 "playmidi.c"
  $26 = $2; //@line 487 "playmidi.c"
  $27 = ((($26)) + 1724|0); //@line 487 "playmidi.c"
  $28 = (($27) + (($25*236)|0)|0); //@line 487 "playmidi.c"
  $29 = ((($28)) + 1|0); //@line 487 "playmidi.c"
  $30 = HEAP8[$29>>0]|0; //@line 487 "playmidi.c"
  $31 = $30&255; //@line 487 "playmidi.c"
  $32 = $5; //@line 487 "playmidi.c"
  $33 = ((($32)) + 4|0); //@line 487 "playmidi.c"
  $34 = HEAP8[$33>>0]|0; //@line 487 "playmidi.c"
  $35 = $34&255; //@line 487 "playmidi.c"
  $36 = ($31|0)==($35|0); //@line 487 "playmidi.c"
  if (!($36)) {
   continue;
  }
  $37 = $4; //@line 488 "playmidi.c"
  $38 = $2; //@line 488 "playmidi.c"
  $39 = ((($38)) + 1724|0); //@line 488 "playmidi.c"
  $40 = (($39) + (($37*236)|0)|0); //@line 488 "playmidi.c"
  $41 = ((($40)) + 2|0); //@line 488 "playmidi.c"
  $42 = HEAP8[$41>>0]|0; //@line 488 "playmidi.c"
  $43 = $42&255; //@line 488 "playmidi.c"
  $44 = $5; //@line 488 "playmidi.c"
  $45 = ((($44)) + 6|0); //@line 488 "playmidi.c"
  $46 = HEAP8[$45>>0]|0; //@line 488 "playmidi.c"
  $47 = $46&255; //@line 488 "playmidi.c"
  $48 = ($43|0)==($47|0); //@line 488 "playmidi.c"
  if ($48) {
   break;
  }
 }
 if ((label|0) == 11) {
  STACKTOP = sp;return; //@line 498 "playmidi.c"
 }
 $49 = $5; //@line 490 "playmidi.c"
 $50 = ((($49)) + 4|0); //@line 490 "playmidi.c"
 $51 = HEAP8[$50>>0]|0; //@line 490 "playmidi.c"
 $52 = $51&255; //@line 490 "playmidi.c"
 $53 = $2; //@line 490 "playmidi.c"
 $54 = ((($53)) + 1084|0); //@line 490 "playmidi.c"
 $55 = (($54) + (($52*40)|0)|0); //@line 490 "playmidi.c"
 $56 = ((($55)) + 12|0); //@line 490 "playmidi.c"
 $57 = HEAP32[$56>>2]|0; //@line 490 "playmidi.c"
 $58 = ($57|0)!=(0); //@line 490 "playmidi.c"
 if ($58) {
  $59 = $4; //@line 492 "playmidi.c"
  $60 = $2; //@line 492 "playmidi.c"
  $61 = ((($60)) + 1724|0); //@line 492 "playmidi.c"
  $62 = (($61) + (($59*236)|0)|0); //@line 492 "playmidi.c"
  HEAP8[$62>>0] = 2; //@line 492 "playmidi.c"
  STACKTOP = sp;return; //@line 498 "playmidi.c"
 } else {
  $63 = $2; //@line 495 "playmidi.c"
  $64 = $4; //@line 495 "playmidi.c"
  _finish_note($63,$64); //@line 495 "playmidi.c"
  STACKTOP = sp;return; //@line 498 "playmidi.c"
 }
}
function _finish_note($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $3; //@line 457 "playmidi.c"
 $5 = $2; //@line 457 "playmidi.c"
 $6 = ((($5)) + 1724|0); //@line 457 "playmidi.c"
 $7 = (($6) + (($4*236)|0)|0); //@line 457 "playmidi.c"
 $8 = ((($7)) + 4|0); //@line 457 "playmidi.c"
 $9 = HEAP32[$8>>2]|0; //@line 457 "playmidi.c"
 $10 = ((($9)) + 110|0); //@line 457 "playmidi.c"
 $11 = HEAP8[$10>>0]|0; //@line 457 "playmidi.c"
 $12 = $11&255; //@line 457 "playmidi.c"
 $13 = $12 & 64; //@line 457 "playmidi.c"
 $14 = ($13|0)!=(0); //@line 457 "playmidi.c"
 $15 = $3; //@line 460 "playmidi.c"
 $16 = $2; //@line 460 "playmidi.c"
 $17 = ((($16)) + 1724|0); //@line 460 "playmidi.c"
 $18 = (($17) + (($15*236)|0)|0); //@line 460 "playmidi.c"
 if ($14) {
  $19 = ((($18)) + 220|0); //@line 460 "playmidi.c"
  HEAP32[$19>>2] = 3; //@line 460 "playmidi.c"
  $20 = $3; //@line 461 "playmidi.c"
  $21 = $2; //@line 461 "playmidi.c"
  $22 = ((($21)) + 1724|0); //@line 461 "playmidi.c"
  $23 = (($22) + (($20*236)|0)|0); //@line 461 "playmidi.c"
  HEAP8[$23>>0] = 3; //@line 461 "playmidi.c"
  $24 = $2; //@line 462 "playmidi.c"
  $25 = $3; //@line 462 "playmidi.c"
  (_recompute_envelope($24,$25)|0); //@line 462 "playmidi.c"
  $26 = $2; //@line 463 "playmidi.c"
  $27 = $3; //@line 463 "playmidi.c"
  _apply_envelope_to_amp($26,$27); //@line 463 "playmidi.c"
  STACKTOP = sp;return; //@line 472 "playmidi.c"
 } else {
  HEAP8[$18>>0] = 3; //@line 470 "playmidi.c"
  STACKTOP = sp;return; //@line 472 "playmidi.c"
 }
}
function _mid_song_start($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1; //@line 730 "playmidi.c"
 HEAP32[$2>>2] = 1; //@line 730 "playmidi.c"
 $3 = $1; //@line 731 "playmidi.c"
 _adjust_amplification($3); //@line 731 "playmidi.c"
 $4 = $1; //@line 732 "playmidi.c"
 _skip_to($4,0); //@line 732 "playmidi.c"
 STACKTOP = sp;return; //@line 733 "playmidi.c"
}
function _adjust_amplification($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1; //@line 60 "playmidi.c"
 $3 = ((($2)) + 20|0); //@line 60 "playmidi.c"
 $4 = HEAP32[$3>>2]|0; //@line 60 "playmidi.c"
 $5 = (+($4|0)); //@line 60 "playmidi.c"
 $6 = $5 / 100.0; //@line 60 "playmidi.c"
 $7 = $1; //@line 60 "playmidi.c"
 $8 = ((($7)) + 16|0); //@line 60 "playmidi.c"
 HEAPF32[$8>>2] = $6; //@line 60 "playmidi.c"
 STACKTOP = sp;return; //@line 61 "playmidi.c"
}
function _skip_to($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2; //@line 680 "playmidi.c"
 $5 = ((($4)) + 13088|0); //@line 680 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 680 "playmidi.c"
 $7 = $3; //@line 680 "playmidi.c"
 $8 = ($6|0)>($7|0); //@line 680 "playmidi.c"
 if ($8) {
  $9 = $2; //@line 681 "playmidi.c"
  $10 = ((($9)) + 13088|0); //@line 681 "playmidi.c"
  HEAP32[$10>>2] = 0; //@line 681 "playmidi.c"
 }
 $11 = $2; //@line 683 "playmidi.c"
 _reset_midi($11); //@line 683 "playmidi.c"
 $12 = $2; //@line 684 "playmidi.c"
 $13 = ((($12)) + 13076|0); //@line 684 "playmidi.c"
 $14 = HEAP32[$13>>2]|0; //@line 684 "playmidi.c"
 $15 = $2; //@line 684 "playmidi.c"
 $16 = ((($15)) + 13080|0); //@line 684 "playmidi.c"
 HEAP32[$16>>2] = $14; //@line 684 "playmidi.c"
 HEAP32[1028] = 500000; //@line 685 "playmidi.c"
 $17 = $3; //@line 688 "playmidi.c"
 $18 = ($17|0)!=(0); //@line 688 "playmidi.c"
 if (!($18)) {
  STACKTOP = sp;return; //@line 690 "playmidi.c"
 }
 $19 = $2; //@line 689 "playmidi.c"
 $20 = $3; //@line 689 "playmidi.c"
 _seek_forward($19,$20); //@line 689 "playmidi.c"
 STACKTOP = sp;return; //@line 690 "playmidi.c"
}
function _reset_midi($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = 0; //@line 83 "playmidi.c"
 while(1) {
  $3 = $2; //@line 83 "playmidi.c"
  $4 = ($3|0)<(16); //@line 83 "playmidi.c"
  $5 = $1; //@line 85 "playmidi.c"
  if (!($4)) {
   break;
  }
  $6 = $2; //@line 85 "playmidi.c"
  _reset_controllers($5,$6); //@line 85 "playmidi.c"
  $7 = $1; //@line 87 "playmidi.c"
  $8 = ((($7)) + 1056|0); //@line 87 "playmidi.c"
  $9 = HEAP32[$8>>2]|0; //@line 87 "playmidi.c"
  $10 = $2; //@line 87 "playmidi.c"
  $11 = $1; //@line 87 "playmidi.c"
  $12 = ((($11)) + 1084|0); //@line 87 "playmidi.c"
  $13 = (($12) + (($10*40)|0)|0); //@line 87 "playmidi.c"
  $14 = ((($13)) + 4|0); //@line 87 "playmidi.c"
  HEAP32[$14>>2] = $9; //@line 87 "playmidi.c"
  $15 = $2; //@line 88 "playmidi.c"
  $16 = $1; //@line 88 "playmidi.c"
  $17 = ((($16)) + 1084|0); //@line 88 "playmidi.c"
  $18 = (($17) + (($15*40)|0)|0); //@line 88 "playmidi.c"
  $19 = ((($18)) + 16|0); //@line 88 "playmidi.c"
  HEAP32[$19>>2] = -1; //@line 88 "playmidi.c"
  $20 = $2; //@line 89 "playmidi.c"
  $21 = $1; //@line 89 "playmidi.c"
  $22 = ((($21)) + 1084|0); //@line 89 "playmidi.c"
  $23 = (($22) + (($20*40)|0)|0); //@line 89 "playmidi.c"
  $24 = ((($23)) + 32|0); //@line 89 "playmidi.c"
  HEAP32[$24>>2] = 2; //@line 89 "playmidi.c"
  $25 = $2; //@line 90 "playmidi.c"
  $26 = $1; //@line 90 "playmidi.c"
  $27 = ((($26)) + 1084|0); //@line 90 "playmidi.c"
  $28 = (($27) + (($25*40)|0)|0); //@line 90 "playmidi.c"
  HEAP32[$28>>2] = 0; //@line 90 "playmidi.c"
  $29 = $2; //@line 83 "playmidi.c"
  $30 = (($29) + 1)|0; //@line 83 "playmidi.c"
  $2 = $30; //@line 83 "playmidi.c"
 }
 _reset_voices($5); //@line 92 "playmidi.c"
 STACKTOP = sp;return; //@line 93 "playmidi.c"
}
function _seek_forward($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0.0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0.0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0.0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0.0, $222 = 0.0, $223 = 0.0, $224 = 0, $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0.0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2; //@line 602 "playmidi.c"
 _reset_voices($4); //@line 602 "playmidi.c"
 L1: while(1) {
  $5 = $2; //@line 603 "playmidi.c"
  $6 = ((($5)) + 13080|0); //@line 603 "playmidi.c"
  $7 = HEAP32[$6>>2]|0; //@line 603 "playmidi.c"
  $8 = HEAP32[$7>>2]|0; //@line 603 "playmidi.c"
  $9 = (+($8|0)); //@line 603 "playmidi.c"
  $10 = +HEAPF32[1062]; //@line 603 "playmidi.c"
  $11 = $9 / $10; //@line 603 "playmidi.c"
  $12 = $3; //@line 603 "playmidi.c"
  $13 = (+($12|0)); //@line 603 "playmidi.c"
  $14 = $11 < $13; //@line 603 "playmidi.c"
  $15 = $2; //@line 605 "playmidi.c"
  $16 = ((($15)) + 13080|0); //@line 605 "playmidi.c"
  $17 = HEAP32[$16>>2]|0; //@line 605 "playmidi.c"
  if (!($14)) {
   break;
  }
  $18 = ((($17)) + 5|0); //@line 605 "playmidi.c"
  $19 = HEAP8[$18>>0]|0; //@line 605 "playmidi.c"
  $20 = $19&255; //@line 605 "playmidi.c"
  L4: do {
   switch ($20|0) {
   case 99:  {
    label = 16;
    break L1;
    break;
   }
   case 11:  {
    $21 = $2; //@line 611 "playmidi.c"
    $22 = ((($21)) + 13080|0); //@line 611 "playmidi.c"
    $23 = HEAP32[$22>>2]|0; //@line 611 "playmidi.c"
    $24 = ((($23)) + 6|0); //@line 611 "playmidi.c"
    $25 = HEAP8[$24>>0]|0; //@line 611 "playmidi.c"
    $26 = $25&255; //@line 611 "playmidi.c"
    $27 = $2; //@line 610 "playmidi.c"
    $28 = ((($27)) + 13080|0); //@line 610 "playmidi.c"
    $29 = HEAP32[$28>>2]|0; //@line 610 "playmidi.c"
    $30 = ((($29)) + 4|0); //@line 610 "playmidi.c"
    $31 = HEAP8[$30>>0]|0; //@line 610 "playmidi.c"
    $32 = $31&255; //@line 610 "playmidi.c"
    $33 = $2; //@line 610 "playmidi.c"
    $34 = ((($33)) + 1084|0); //@line 610 "playmidi.c"
    $35 = (($34) + (($32*40)|0)|0); //@line 610 "playmidi.c"
    $36 = ((($35)) + 32|0); //@line 610 "playmidi.c"
    HEAP32[$36>>2] = $26; //@line 610 "playmidi.c"
    $37 = $2; //@line 612 "playmidi.c"
    $38 = ((($37)) + 13080|0); //@line 612 "playmidi.c"
    $39 = HEAP32[$38>>2]|0; //@line 612 "playmidi.c"
    $40 = ((($39)) + 4|0); //@line 612 "playmidi.c"
    $41 = HEAP8[$40>>0]|0; //@line 612 "playmidi.c"
    $42 = $41&255; //@line 612 "playmidi.c"
    $43 = $2; //@line 612 "playmidi.c"
    $44 = ((($43)) + 1084|0); //@line 612 "playmidi.c"
    $45 = (($44) + (($42*40)|0)|0); //@line 612 "playmidi.c"
    $46 = ((($45)) + 36|0); //@line 612 "playmidi.c"
    HEAPF32[$46>>2] = 0.0; //@line 612 "playmidi.c"
    break;
   }
   case 8:  {
    $47 = $2; //@line 617 "playmidi.c"
    $48 = ((($47)) + 13080|0); //@line 617 "playmidi.c"
    $49 = HEAP32[$48>>2]|0; //@line 617 "playmidi.c"
    $50 = ((($49)) + 6|0); //@line 617 "playmidi.c"
    $51 = HEAP8[$50>>0]|0; //@line 617 "playmidi.c"
    $52 = $51&255; //@line 617 "playmidi.c"
    $53 = $2; //@line 617 "playmidi.c"
    $54 = ((($53)) + 13080|0); //@line 617 "playmidi.c"
    $55 = HEAP32[$54>>2]|0; //@line 617 "playmidi.c"
    $56 = ((($55)) + 7|0); //@line 617 "playmidi.c"
    $57 = HEAP8[$56>>0]|0; //@line 617 "playmidi.c"
    $58 = $57&255; //@line 617 "playmidi.c"
    $59 = $58<<7; //@line 617 "playmidi.c"
    $60 = (($52) + ($59))|0; //@line 617 "playmidi.c"
    $61 = $2; //@line 616 "playmidi.c"
    $62 = ((($61)) + 13080|0); //@line 616 "playmidi.c"
    $63 = HEAP32[$62>>2]|0; //@line 616 "playmidi.c"
    $64 = ((($63)) + 4|0); //@line 616 "playmidi.c"
    $65 = HEAP8[$64>>0]|0; //@line 616 "playmidi.c"
    $66 = $65&255; //@line 616 "playmidi.c"
    $67 = $2; //@line 616 "playmidi.c"
    $68 = ((($67)) + 1084|0); //@line 616 "playmidi.c"
    $69 = (($68) + (($66*40)|0)|0); //@line 616 "playmidi.c"
    $70 = ((($69)) + 20|0); //@line 616 "playmidi.c"
    HEAP32[$70>>2] = $60; //@line 616 "playmidi.c"
    $71 = $2; //@line 618 "playmidi.c"
    $72 = ((($71)) + 13080|0); //@line 618 "playmidi.c"
    $73 = HEAP32[$72>>2]|0; //@line 618 "playmidi.c"
    $74 = ((($73)) + 4|0); //@line 618 "playmidi.c"
    $75 = HEAP8[$74>>0]|0; //@line 618 "playmidi.c"
    $76 = $75&255; //@line 618 "playmidi.c"
    $77 = $2; //@line 618 "playmidi.c"
    $78 = ((($77)) + 1084|0); //@line 618 "playmidi.c"
    $79 = (($78) + (($76*40)|0)|0); //@line 618 "playmidi.c"
    $80 = ((($79)) + 36|0); //@line 618 "playmidi.c"
    HEAPF32[$80>>2] = 0.0; //@line 618 "playmidi.c"
    break;
   }
   case 4:  {
    $81 = $2; //@line 623 "playmidi.c"
    $82 = ((($81)) + 13080|0); //@line 623 "playmidi.c"
    $83 = HEAP32[$82>>2]|0; //@line 623 "playmidi.c"
    $84 = ((($83)) + 6|0); //@line 623 "playmidi.c"
    $85 = HEAP8[$84>>0]|0; //@line 623 "playmidi.c"
    $86 = $85&255; //@line 623 "playmidi.c"
    $87 = $2; //@line 622 "playmidi.c"
    $88 = ((($87)) + 13080|0); //@line 622 "playmidi.c"
    $89 = HEAP32[$88>>2]|0; //@line 622 "playmidi.c"
    $90 = ((($89)) + 4|0); //@line 622 "playmidi.c"
    $91 = HEAP8[$90>>0]|0; //@line 622 "playmidi.c"
    $92 = $91&255; //@line 622 "playmidi.c"
    $93 = $2; //@line 622 "playmidi.c"
    $94 = ((($93)) + 1084|0); //@line 622 "playmidi.c"
    $95 = (($94) + (($92*40)|0)|0); //@line 622 "playmidi.c"
    $96 = ((($95)) + 8|0); //@line 622 "playmidi.c"
    HEAP32[$96>>2] = $86; //@line 622 "playmidi.c"
    break;
   }
   case 5:  {
    $97 = $2; //@line 628 "playmidi.c"
    $98 = ((($97)) + 13080|0); //@line 628 "playmidi.c"
    $99 = HEAP32[$98>>2]|0; //@line 628 "playmidi.c"
    $100 = ((($99)) + 6|0); //@line 628 "playmidi.c"
    $101 = HEAP8[$100>>0]|0; //@line 628 "playmidi.c"
    $102 = $101&255; //@line 628 "playmidi.c"
    $103 = $2; //@line 627 "playmidi.c"
    $104 = ((($103)) + 13080|0); //@line 627 "playmidi.c"
    $105 = HEAP32[$104>>2]|0; //@line 627 "playmidi.c"
    $106 = ((($105)) + 4|0); //@line 627 "playmidi.c"
    $107 = HEAP8[$106>>0]|0; //@line 627 "playmidi.c"
    $108 = $107&255; //@line 627 "playmidi.c"
    $109 = $2; //@line 627 "playmidi.c"
    $110 = ((($109)) + 1084|0); //@line 627 "playmidi.c"
    $111 = (($110) + (($108*40)|0)|0); //@line 627 "playmidi.c"
    $112 = ((($111)) + 16|0); //@line 627 "playmidi.c"
    HEAP32[$112>>2] = $102; //@line 627 "playmidi.c"
    break;
   }
   case 7:  {
    $113 = $2; //@line 633 "playmidi.c"
    $114 = ((($113)) + 13080|0); //@line 633 "playmidi.c"
    $115 = HEAP32[$114>>2]|0; //@line 633 "playmidi.c"
    $116 = ((($115)) + 6|0); //@line 633 "playmidi.c"
    $117 = HEAP8[$116>>0]|0; //@line 633 "playmidi.c"
    $118 = $117&255; //@line 633 "playmidi.c"
    $119 = $2; //@line 632 "playmidi.c"
    $120 = ((($119)) + 13080|0); //@line 632 "playmidi.c"
    $121 = HEAP32[$120>>2]|0; //@line 632 "playmidi.c"
    $122 = ((($121)) + 4|0); //@line 632 "playmidi.c"
    $123 = HEAP8[$122>>0]|0; //@line 632 "playmidi.c"
    $124 = $123&255; //@line 632 "playmidi.c"
    $125 = $2; //@line 632 "playmidi.c"
    $126 = ((($125)) + 1084|0); //@line 632 "playmidi.c"
    $127 = (($126) + (($124*40)|0)|0); //@line 632 "playmidi.c"
    $128 = ((($127)) + 24|0); //@line 632 "playmidi.c"
    HEAP32[$128>>2] = $118; //@line 632 "playmidi.c"
    break;
   }
   case 9:  {
    $129 = $2; //@line 637 "playmidi.c"
    $130 = ((($129)) + 13056|0); //@line 637 "playmidi.c"
    $131 = HEAP32[$130>>2]|0; //@line 637 "playmidi.c"
    $132 = $2; //@line 637 "playmidi.c"
    $133 = ((($132)) + 13080|0); //@line 637 "playmidi.c"
    $134 = HEAP32[$133>>2]|0; //@line 637 "playmidi.c"
    $135 = ((($134)) + 4|0); //@line 637 "playmidi.c"
    $136 = HEAP8[$135>>0]|0; //@line 637 "playmidi.c"
    $137 = $136&255; //@line 637 "playmidi.c"
    $138 = 1 << $137; //@line 637 "playmidi.c"
    $139 = $131 & $138; //@line 637 "playmidi.c"
    $140 = ($139|0)!=(0); //@line 637 "playmidi.c"
    $141 = $2; //@line 640 "playmidi.c"
    $142 = ((($141)) + 13080|0); //@line 640 "playmidi.c"
    $143 = HEAP32[$142>>2]|0; //@line 640 "playmidi.c"
    $144 = ((($143)) + 6|0); //@line 640 "playmidi.c"
    $145 = HEAP8[$144>>0]|0; //@line 640 "playmidi.c"
    $146 = $145&255; //@line 640 "playmidi.c"
    $147 = $2; //@line 639 "playmidi.c"
    $148 = ((($147)) + 13080|0); //@line 639 "playmidi.c"
    $149 = HEAP32[$148>>2]|0; //@line 639 "playmidi.c"
    $150 = ((($149)) + 4|0); //@line 639 "playmidi.c"
    $151 = HEAP8[$150>>0]|0; //@line 639 "playmidi.c"
    $152 = $151&255; //@line 639 "playmidi.c"
    $153 = $2; //@line 639 "playmidi.c"
    $154 = ((($153)) + 1084|0); //@line 639 "playmidi.c"
    $155 = (($154) + (($152*40)|0)|0); //@line 639 "playmidi.c"
    if ($140) {
     HEAP32[$155>>2] = $146; //@line 639 "playmidi.c"
     break L4;
    } else {
     $156 = ((($155)) + 4|0); //@line 642 "playmidi.c"
     HEAP32[$156>>2] = $146; //@line 642 "playmidi.c"
     break L4;
    }
    break;
   }
   case 6:  {
    $157 = $2; //@line 648 "playmidi.c"
    $158 = ((($157)) + 13080|0); //@line 648 "playmidi.c"
    $159 = HEAP32[$158>>2]|0; //@line 648 "playmidi.c"
    $160 = ((($159)) + 6|0); //@line 648 "playmidi.c"
    $161 = HEAP8[$160>>0]|0; //@line 648 "playmidi.c"
    $162 = $161&255; //@line 648 "playmidi.c"
    $163 = $2; //@line 647 "playmidi.c"
    $164 = ((($163)) + 13080|0); //@line 647 "playmidi.c"
    $165 = HEAP32[$164>>2]|0; //@line 647 "playmidi.c"
    $166 = ((($165)) + 4|0); //@line 647 "playmidi.c"
    $167 = HEAP8[$166>>0]|0; //@line 647 "playmidi.c"
    $168 = $167&255; //@line 647 "playmidi.c"
    $169 = $2; //@line 647 "playmidi.c"
    $170 = ((($169)) + 1084|0); //@line 647 "playmidi.c"
    $171 = (($170) + (($168*40)|0)|0); //@line 647 "playmidi.c"
    $172 = ((($171)) + 12|0); //@line 647 "playmidi.c"
    HEAP32[$172>>2] = $162; //@line 647 "playmidi.c"
    break;
   }
   case 13:  {
    $173 = $2; //@line 652 "playmidi.c"
    $174 = $2; //@line 652 "playmidi.c"
    $175 = ((($174)) + 13080|0); //@line 652 "playmidi.c"
    $176 = HEAP32[$175>>2]|0; //@line 652 "playmidi.c"
    $177 = ((($176)) + 4|0); //@line 652 "playmidi.c"
    $178 = HEAP8[$177>>0]|0; //@line 652 "playmidi.c"
    $179 = $178&255; //@line 652 "playmidi.c"
    _reset_controllers($173,$179); //@line 652 "playmidi.c"
    break;
   }
   case 15:  {
    $180 = $2; //@line 657 "playmidi.c"
    $181 = ((($180)) + 13080|0); //@line 657 "playmidi.c"
    $182 = HEAP32[$181>>2]|0; //@line 657 "playmidi.c"
    $183 = ((($182)) + 6|0); //@line 657 "playmidi.c"
    $184 = HEAP8[$183>>0]|0; //@line 657 "playmidi.c"
    $185 = $184&255; //@line 657 "playmidi.c"
    $186 = $2; //@line 656 "playmidi.c"
    $187 = ((($186)) + 13080|0); //@line 656 "playmidi.c"
    $188 = HEAP32[$187>>2]|0; //@line 656 "playmidi.c"
    $189 = ((($188)) + 4|0); //@line 656 "playmidi.c"
    $190 = HEAP8[$189>>0]|0; //@line 656 "playmidi.c"
    $191 = $190&255; //@line 656 "playmidi.c"
    $192 = $2; //@line 656 "playmidi.c"
    $193 = ((($192)) + 1084|0); //@line 656 "playmidi.c"
    $194 = (($193) + (($191*40)|0)|0); //@line 656 "playmidi.c"
    HEAP32[$194>>2] = $185; //@line 656 "playmidi.c"
    break;
   }
   case 10:  {
    $195 = $2; //@line 662 "playmidi.c"
    $196 = ((($195)) + 13080|0); //@line 662 "playmidi.c"
    $197 = HEAP32[$196>>2]|0; //@line 662 "playmidi.c"
    $198 = ((($197)) + 4|0); //@line 662 "playmidi.c"
    $199 = HEAP8[$198>>0]|0; //@line 662 "playmidi.c"
    $200 = $199&255; //@line 662 "playmidi.c"
    $201 = $2; //@line 663 "playmidi.c"
    $202 = ((($201)) + 13080|0); //@line 663 "playmidi.c"
    $203 = HEAP32[$202>>2]|0; //@line 663 "playmidi.c"
    $204 = ((($203)) + 7|0); //@line 663 "playmidi.c"
    $205 = HEAP8[$204>>0]|0; //@line 663 "playmidi.c"
    $206 = $205&255; //@line 663 "playmidi.c"
    $207 = $206<<8; //@line 663 "playmidi.c"
    $208 = (($200) + ($207))|0; //@line 662 "playmidi.c"
    $209 = $2; //@line 663 "playmidi.c"
    $210 = ((($209)) + 13080|0); //@line 663 "playmidi.c"
    $211 = HEAP32[$210>>2]|0; //@line 663 "playmidi.c"
    $212 = ((($211)) + 6|0); //@line 663 "playmidi.c"
    $213 = HEAP8[$212>>0]|0; //@line 663 "playmidi.c"
    $214 = $213&255; //@line 663 "playmidi.c"
    $215 = $214<<16; //@line 663 "playmidi.c"
    $216 = (($208) + ($215))|0; //@line 663 "playmidi.c"
    HEAP32[1028] = $216; //@line 662 "playmidi.c"
    break;
   }
   default: {
   }
   }
  } while(0);
  $227 = $2; //@line 670 "playmidi.c"
  $228 = ((($227)) + 13080|0); //@line 670 "playmidi.c"
  $229 = HEAP32[$228>>2]|0; //@line 670 "playmidi.c"
  $230 = ((($229)) + 8|0); //@line 670 "playmidi.c"
  HEAP32[$228>>2] = $230; //@line 670 "playmidi.c"
 }
 if ((label|0) == 16) {
  $217 = $2; //@line 667 "playmidi.c"
  $218 = ((($217)) + 13080|0); //@line 667 "playmidi.c"
  $219 = HEAP32[$218>>2]|0; //@line 667 "playmidi.c"
  $220 = HEAP32[$219>>2]|0; //@line 667 "playmidi.c"
  $221 = (+($220|0)); //@line 667 "playmidi.c"
  $222 = +HEAPF32[1062]; //@line 667 "playmidi.c"
  $223 = $221 / $222; //@line 667 "playmidi.c"
  $224 = (~~(($223))>>>0); //@line 667 "playmidi.c"
  $225 = $2; //@line 667 "playmidi.c"
  $226 = ((($225)) + 13088|0); //@line 667 "playmidi.c"
  HEAP32[$226>>2] = $224; //@line 667 "playmidi.c"
  STACKTOP = sp;return; //@line 676 "playmidi.c"
 }
 $231 = $2; //@line 673 "playmidi.c"
 $232 = ((($231)) + 13076|0); //@line 673 "playmidi.c"
 $233 = HEAP32[$232>>2]|0; //@line 673 "playmidi.c"
 $234 = ($17|0)!=($233|0); //@line 673 "playmidi.c"
 if ($234) {
  $235 = $2; //@line 674 "playmidi.c"
  $236 = ((($235)) + 13080|0); //@line 674 "playmidi.c"
  $237 = HEAP32[$236>>2]|0; //@line 674 "playmidi.c"
  $238 = ((($237)) + -8|0); //@line 674 "playmidi.c"
  HEAP32[$236>>2] = $238; //@line 674 "playmidi.c"
 }
 $239 = $3; //@line 675 "playmidi.c"
 $240 = $2; //@line 675 "playmidi.c"
 $241 = ((($240)) + 13088|0); //@line 675 "playmidi.c"
 HEAP32[$241>>2] = $239; //@line 675 "playmidi.c"
 STACKTOP = sp;return; //@line 676 "playmidi.c"
}
function _reset_voices($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = 0; //@line 66 "playmidi.c"
 while(1) {
  $3 = $2; //@line 66 "playmidi.c"
  $4 = ($3|0)<(48); //@line 66 "playmidi.c"
  if (!($4)) {
   break;
  }
  $5 = $2; //@line 67 "playmidi.c"
  $6 = $1; //@line 67 "playmidi.c"
  $7 = ((($6)) + 1724|0); //@line 67 "playmidi.c"
  $8 = (($7) + (($5*236)|0)|0); //@line 67 "playmidi.c"
  HEAP8[$8>>0] = 0; //@line 67 "playmidi.c"
  $9 = $2; //@line 66 "playmidi.c"
  $10 = (($9) + 1)|0; //@line 66 "playmidi.c"
  $2 = $10; //@line 66 "playmidi.c"
 }
 STACKTOP = sp;return; //@line 68 "playmidi.c"
}
function _reset_controllers($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $3; //@line 73 "playmidi.c"
 $5 = $2; //@line 73 "playmidi.c"
 $6 = ((($5)) + 1084|0); //@line 73 "playmidi.c"
 $7 = (($6) + (($4*40)|0)|0); //@line 73 "playmidi.c"
 $8 = ((($7)) + 8|0); //@line 73 "playmidi.c"
 HEAP32[$8>>2] = 90; //@line 73 "playmidi.c"
 $9 = $3; //@line 74 "playmidi.c"
 $10 = $2; //@line 74 "playmidi.c"
 $11 = ((($10)) + 1084|0); //@line 74 "playmidi.c"
 $12 = (($11) + (($9*40)|0)|0); //@line 74 "playmidi.c"
 $13 = ((($12)) + 24|0); //@line 74 "playmidi.c"
 HEAP32[$13>>2] = 127; //@line 74 "playmidi.c"
 $14 = $3; //@line 75 "playmidi.c"
 $15 = $2; //@line 75 "playmidi.c"
 $16 = ((($15)) + 1084|0); //@line 75 "playmidi.c"
 $17 = (($16) + (($14*40)|0)|0); //@line 75 "playmidi.c"
 $18 = ((($17)) + 12|0); //@line 75 "playmidi.c"
 HEAP32[$18>>2] = 0; //@line 75 "playmidi.c"
 $19 = $3; //@line 76 "playmidi.c"
 $20 = $2; //@line 76 "playmidi.c"
 $21 = ((($20)) + 1084|0); //@line 76 "playmidi.c"
 $22 = (($21) + (($19*40)|0)|0); //@line 76 "playmidi.c"
 $23 = ((($22)) + 20|0); //@line 76 "playmidi.c"
 HEAP32[$23>>2] = 8192; //@line 76 "playmidi.c"
 $24 = $3; //@line 77 "playmidi.c"
 $25 = $2; //@line 77 "playmidi.c"
 $26 = ((($25)) + 1084|0); //@line 77 "playmidi.c"
 $27 = (($26) + (($24*40)|0)|0); //@line 77 "playmidi.c"
 $28 = ((($27)) + 36|0); //@line 77 "playmidi.c"
 HEAPF32[$28>>2] = 0.0; //@line 77 "playmidi.c"
 STACKTOP = sp;return; //@line 78 "playmidi.c"
}
function _mid_song_get_total_time($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1; //@line 743 "playmidi.c"
 $5 = ((($4)) + 13100|0); //@line 743 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 743 "playmidi.c"
 $7 = (($6) - 1)|0; //@line 743 "playmidi.c"
 $8 = $1; //@line 743 "playmidi.c"
 $9 = ((($8)) + 13076|0); //@line 743 "playmidi.c"
 $10 = HEAP32[$9>>2]|0; //@line 743 "playmidi.c"
 $11 = (($10) + ($7<<3)|0); //@line 743 "playmidi.c"
 $2 = $11; //@line 743 "playmidi.c"
 $12 = $2; //@line 745 "playmidi.c"
 $13 = HEAP32[$12>>2]|0; //@line 745 "playmidi.c"
 $14 = $1; //@line 745 "playmidi.c"
 $15 = ((($14)) + 4|0); //@line 745 "playmidi.c"
 $16 = HEAP32[$15>>2]|0; //@line 745 "playmidi.c"
 $17 = (($13|0) / ($16|0))&-1; //@line 745 "playmidi.c"
 $18 = ($17*1000)|0; //@line 745 "playmidi.c"
 $3 = $18; //@line 745 "playmidi.c"
 $19 = $2; //@line 746 "playmidi.c"
 $20 = HEAP32[$19>>2]|0; //@line 746 "playmidi.c"
 $21 = $1; //@line 746 "playmidi.c"
 $22 = ((($21)) + 4|0); //@line 746 "playmidi.c"
 $23 = HEAP32[$22>>2]|0; //@line 746 "playmidi.c"
 $24 = (($20|0) % ($23|0))&-1; //@line 746 "playmidi.c"
 $25 = ($24*1000)|0; //@line 746 "playmidi.c"
 $26 = $1; //@line 746 "playmidi.c"
 $27 = ((($26)) + 4|0); //@line 746 "playmidi.c"
 $28 = HEAP32[$27>>2]|0; //@line 746 "playmidi.c"
 $29 = (($25|0) / ($28|0))&-1; //@line 746 "playmidi.c"
 $30 = $3; //@line 746 "playmidi.c"
 $31 = (($30) + ($29))|0; //@line 746 "playmidi.c"
 $3 = $31; //@line 746 "playmidi.c"
 $32 = $3; //@line 747 "playmidi.c"
 STACKTOP = sp;return ($32|0); //@line 747 "playmidi.c"
}
function _mid_song_read_wave($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0;
 var $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0;
 var $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0;
 var $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0;
 var $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0.0, $286 = 0.0, $287 = 0.0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0;
 var $30 = 0, $300 = 0, $301 = 0.0, $302 = 0.0, $303 = 0.0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0.0, $38 = 0.0, $39 = 0.0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $6 = sp + 20|0;
 $5 = $0;
 HEAP32[$6>>2] = $1;
 $7 = $2;
 $8 = $3;
 $12 = $5; //@line 778 "playmidi.c"
 $13 = HEAP32[$12>>2]|0; //@line 778 "playmidi.c"
 $14 = ($13|0)!=(0); //@line 778 "playmidi.c"
 if (!($14)) {
  $4 = 0; //@line 779 "playmidi.c"
  $314 = $4; //@line 903 "playmidi.c"
  STACKTOP = sp;return ($314|0); //@line 903 "playmidi.c"
 }
 $15 = $7; //@line 781 "playmidi.c"
 $16 = $5; //@line 781 "playmidi.c"
 $17 = ((($16)) + 12|0); //@line 781 "playmidi.c"
 $18 = HEAP32[$17>>2]|0; //@line 781 "playmidi.c"
 $19 = (($15>>>0) / ($18>>>0))&-1; //@line 781 "playmidi.c"
 $11 = $19; //@line 781 "playmidi.c"
 $20 = $5; //@line 783 "playmidi.c"
 $21 = ((($20)) + 13088|0); //@line 783 "playmidi.c"
 $22 = HEAP32[$21>>2]|0; //@line 783 "playmidi.c"
 $9 = $22; //@line 783 "playmidi.c"
 $23 = $5; //@line 784 "playmidi.c"
 $24 = ((($23)) + 13088|0); //@line 784 "playmidi.c"
 $25 = HEAP32[$24>>2]|0; //@line 784 "playmidi.c"
 $26 = $11; //@line 784 "playmidi.c"
 $27 = (($25) + ($26))|0; //@line 784 "playmidi.c"
 $10 = $27; //@line 784 "playmidi.c"
 L5: while(1) {
  $28 = $5; //@line 785 "playmidi.c"
  $29 = ((($28)) + 13088|0); //@line 785 "playmidi.c"
  $30 = HEAP32[$29>>2]|0; //@line 785 "playmidi.c"
  $31 = $10; //@line 785 "playmidi.c"
  $32 = ($30|0)<($31|0); //@line 785 "playmidi.c"
  if (!($32)) {
   label = 33;
   break;
  }
  while(1) {
   $33 = $5; //@line 788 "playmidi.c"
   $34 = ((($33)) + 13080|0); //@line 788 "playmidi.c"
   $35 = HEAP32[$34>>2]|0; //@line 788 "playmidi.c"
   $36 = HEAP32[$35>>2]|0; //@line 788 "playmidi.c"
   $37 = (+($36|0)); //@line 788 "playmidi.c"
   $38 = +HEAPF32[1062]; //@line 788 "playmidi.c"
   $39 = $37 / $38; //@line 788 "playmidi.c"
   $40 = (~~(($39))>>>0); //@line 788 "playmidi.c"
   $41 = $5; //@line 788 "playmidi.c"
   $42 = ((($41)) + 13088|0); //@line 788 "playmidi.c"
   $43 = HEAP32[$42>>2]|0; //@line 788 "playmidi.c"
   $44 = ($40>>>0)<=($43>>>0); //@line 788 "playmidi.c"
   $45 = $5; //@line 789 "playmidi.c"
   $46 = ((($45)) + 13080|0); //@line 789 "playmidi.c"
   $47 = HEAP32[$46>>2]|0; //@line 789 "playmidi.c"
   if (!($44)) {
    break;
   }
   $48 = ((($47)) + 5|0); //@line 789 "playmidi.c"
   $49 = HEAP8[$48>>0]|0; //@line 789 "playmidi.c"
   $50 = $49&255; //@line 789 "playmidi.c"
   L10: do {
    switch ($50|0) {
    case 1:  {
     $51 = $5; //@line 794 "playmidi.c"
     $52 = ((($51)) + 13080|0); //@line 794 "playmidi.c"
     $53 = HEAP32[$52>>2]|0; //@line 794 "playmidi.c"
     $54 = ((($53)) + 7|0); //@line 794 "playmidi.c"
     $55 = HEAP8[$54>>0]|0; //@line 794 "playmidi.c"
     $56 = ($55<<24>>24)!=(0); //@line 794 "playmidi.c"
     $57 = $5; //@line 797 "playmidi.c"
     if ($56) {
      _note_on($57,0); //@line 797 "playmidi.c"
      break L10;
     } else {
      _note_off($57,0); //@line 795 "playmidi.c"
      break L10;
     }
     break;
    }
    case 2:  {
     $58 = $5; //@line 801 "playmidi.c"
     _note_off($58,0); //@line 801 "playmidi.c"
     break;
    }
    case 3:  {
     $59 = $5; //@line 805 "playmidi.c"
     _adjust_pressure($59); //@line 805 "playmidi.c"
     break;
    }
    case 11:  {
     $60 = $5; //@line 812 "playmidi.c"
     $61 = ((($60)) + 13080|0); //@line 812 "playmidi.c"
     $62 = HEAP32[$61>>2]|0; //@line 812 "playmidi.c"
     $63 = ((($62)) + 6|0); //@line 812 "playmidi.c"
     $64 = HEAP8[$63>>0]|0; //@line 812 "playmidi.c"
     $65 = $64&255; //@line 812 "playmidi.c"
     $66 = $5; //@line 811 "playmidi.c"
     $67 = ((($66)) + 13080|0); //@line 811 "playmidi.c"
     $68 = HEAP32[$67>>2]|0; //@line 811 "playmidi.c"
     $69 = ((($68)) + 4|0); //@line 811 "playmidi.c"
     $70 = HEAP8[$69>>0]|0; //@line 811 "playmidi.c"
     $71 = $70&255; //@line 811 "playmidi.c"
     $72 = $5; //@line 811 "playmidi.c"
     $73 = ((($72)) + 1084|0); //@line 811 "playmidi.c"
     $74 = (($73) + (($71*40)|0)|0); //@line 811 "playmidi.c"
     $75 = ((($74)) + 32|0); //@line 811 "playmidi.c"
     HEAP32[$75>>2] = $65; //@line 811 "playmidi.c"
     $76 = $5; //@line 813 "playmidi.c"
     $77 = ((($76)) + 13080|0); //@line 813 "playmidi.c"
     $78 = HEAP32[$77>>2]|0; //@line 813 "playmidi.c"
     $79 = ((($78)) + 4|0); //@line 813 "playmidi.c"
     $80 = HEAP8[$79>>0]|0; //@line 813 "playmidi.c"
     $81 = $80&255; //@line 813 "playmidi.c"
     $82 = $5; //@line 813 "playmidi.c"
     $83 = ((($82)) + 1084|0); //@line 813 "playmidi.c"
     $84 = (($83) + (($81*40)|0)|0); //@line 813 "playmidi.c"
     $85 = ((($84)) + 36|0); //@line 813 "playmidi.c"
     HEAPF32[$85>>2] = 0.0; //@line 813 "playmidi.c"
     break;
    }
    case 8:  {
     $86 = $5; //@line 818 "playmidi.c"
     $87 = ((($86)) + 13080|0); //@line 818 "playmidi.c"
     $88 = HEAP32[$87>>2]|0; //@line 818 "playmidi.c"
     $89 = ((($88)) + 6|0); //@line 818 "playmidi.c"
     $90 = HEAP8[$89>>0]|0; //@line 818 "playmidi.c"
     $91 = $90&255; //@line 818 "playmidi.c"
     $92 = $5; //@line 818 "playmidi.c"
     $93 = ((($92)) + 13080|0); //@line 818 "playmidi.c"
     $94 = HEAP32[$93>>2]|0; //@line 818 "playmidi.c"
     $95 = ((($94)) + 7|0); //@line 818 "playmidi.c"
     $96 = HEAP8[$95>>0]|0; //@line 818 "playmidi.c"
     $97 = $96&255; //@line 818 "playmidi.c"
     $98 = $97<<7; //@line 818 "playmidi.c"
     $99 = (($91) + ($98))|0; //@line 818 "playmidi.c"
     $100 = $5; //@line 817 "playmidi.c"
     $101 = ((($100)) + 13080|0); //@line 817 "playmidi.c"
     $102 = HEAP32[$101>>2]|0; //@line 817 "playmidi.c"
     $103 = ((($102)) + 4|0); //@line 817 "playmidi.c"
     $104 = HEAP8[$103>>0]|0; //@line 817 "playmidi.c"
     $105 = $104&255; //@line 817 "playmidi.c"
     $106 = $5; //@line 817 "playmidi.c"
     $107 = ((($106)) + 1084|0); //@line 817 "playmidi.c"
     $108 = (($107) + (($105*40)|0)|0); //@line 817 "playmidi.c"
     $109 = ((($108)) + 20|0); //@line 817 "playmidi.c"
     HEAP32[$109>>2] = $99; //@line 817 "playmidi.c"
     $110 = $5; //@line 819 "playmidi.c"
     $111 = ((($110)) + 13080|0); //@line 819 "playmidi.c"
     $112 = HEAP32[$111>>2]|0; //@line 819 "playmidi.c"
     $113 = ((($112)) + 4|0); //@line 819 "playmidi.c"
     $114 = HEAP8[$113>>0]|0; //@line 819 "playmidi.c"
     $115 = $114&255; //@line 819 "playmidi.c"
     $116 = $5; //@line 819 "playmidi.c"
     $117 = ((($116)) + 1084|0); //@line 819 "playmidi.c"
     $118 = (($117) + (($115*40)|0)|0); //@line 819 "playmidi.c"
     $119 = ((($118)) + 36|0); //@line 819 "playmidi.c"
     HEAPF32[$119>>2] = 0.0; //@line 819 "playmidi.c"
     $120 = $5; //@line 821 "playmidi.c"
     _adjust_pitchbend($120); //@line 821 "playmidi.c"
     break;
    }
    case 4:  {
     $121 = $5; //@line 826 "playmidi.c"
     $122 = ((($121)) + 13080|0); //@line 826 "playmidi.c"
     $123 = HEAP32[$122>>2]|0; //@line 826 "playmidi.c"
     $124 = ((($123)) + 6|0); //@line 826 "playmidi.c"
     $125 = HEAP8[$124>>0]|0; //@line 826 "playmidi.c"
     $126 = $125&255; //@line 826 "playmidi.c"
     $127 = $5; //@line 825 "playmidi.c"
     $128 = ((($127)) + 13080|0); //@line 825 "playmidi.c"
     $129 = HEAP32[$128>>2]|0; //@line 825 "playmidi.c"
     $130 = ((($129)) + 4|0); //@line 825 "playmidi.c"
     $131 = HEAP8[$130>>0]|0; //@line 825 "playmidi.c"
     $132 = $131&255; //@line 825 "playmidi.c"
     $133 = $5; //@line 825 "playmidi.c"
     $134 = ((($133)) + 1084|0); //@line 825 "playmidi.c"
     $135 = (($134) + (($132*40)|0)|0); //@line 825 "playmidi.c"
     $136 = ((($135)) + 8|0); //@line 825 "playmidi.c"
     HEAP32[$136>>2] = $126; //@line 825 "playmidi.c"
     $137 = $5; //@line 827 "playmidi.c"
     _adjust_volume($137); //@line 827 "playmidi.c"
     break;
    }
    case 5:  {
     $138 = $5; //@line 832 "playmidi.c"
     $139 = ((($138)) + 13080|0); //@line 832 "playmidi.c"
     $140 = HEAP32[$139>>2]|0; //@line 832 "playmidi.c"
     $141 = ((($140)) + 6|0); //@line 832 "playmidi.c"
     $142 = HEAP8[$141>>0]|0; //@line 832 "playmidi.c"
     $143 = $142&255; //@line 832 "playmidi.c"
     $144 = $5; //@line 831 "playmidi.c"
     $145 = ((($144)) + 13080|0); //@line 831 "playmidi.c"
     $146 = HEAP32[$145>>2]|0; //@line 831 "playmidi.c"
     $147 = ((($146)) + 4|0); //@line 831 "playmidi.c"
     $148 = HEAP8[$147>>0]|0; //@line 831 "playmidi.c"
     $149 = $148&255; //@line 831 "playmidi.c"
     $150 = $5; //@line 831 "playmidi.c"
     $151 = ((($150)) + 1084|0); //@line 831 "playmidi.c"
     $152 = (($151) + (($149*40)|0)|0); //@line 831 "playmidi.c"
     $153 = ((($152)) + 16|0); //@line 831 "playmidi.c"
     HEAP32[$153>>2] = $143; //@line 831 "playmidi.c"
     break;
    }
    case 7:  {
     $154 = $5; //@line 837 "playmidi.c"
     $155 = ((($154)) + 13080|0); //@line 837 "playmidi.c"
     $156 = HEAP32[$155>>2]|0; //@line 837 "playmidi.c"
     $157 = ((($156)) + 6|0); //@line 837 "playmidi.c"
     $158 = HEAP8[$157>>0]|0; //@line 837 "playmidi.c"
     $159 = $158&255; //@line 837 "playmidi.c"
     $160 = $5; //@line 836 "playmidi.c"
     $161 = ((($160)) + 13080|0); //@line 836 "playmidi.c"
     $162 = HEAP32[$161>>2]|0; //@line 836 "playmidi.c"
     $163 = ((($162)) + 4|0); //@line 836 "playmidi.c"
     $164 = HEAP8[$163>>0]|0; //@line 836 "playmidi.c"
     $165 = $164&255; //@line 836 "playmidi.c"
     $166 = $5; //@line 836 "playmidi.c"
     $167 = ((($166)) + 1084|0); //@line 836 "playmidi.c"
     $168 = (($167) + (($165*40)|0)|0); //@line 836 "playmidi.c"
     $169 = ((($168)) + 24|0); //@line 836 "playmidi.c"
     HEAP32[$169>>2] = $159; //@line 836 "playmidi.c"
     $170 = $5; //@line 838 "playmidi.c"
     _adjust_volume($170); //@line 838 "playmidi.c"
     break;
    }
    case 9:  {
     $171 = $5; //@line 842 "playmidi.c"
     $172 = ((($171)) + 13056|0); //@line 842 "playmidi.c"
     $173 = HEAP32[$172>>2]|0; //@line 842 "playmidi.c"
     $174 = $5; //@line 842 "playmidi.c"
     $175 = ((($174)) + 13080|0); //@line 842 "playmidi.c"
     $176 = HEAP32[$175>>2]|0; //@line 842 "playmidi.c"
     $177 = ((($176)) + 4|0); //@line 842 "playmidi.c"
     $178 = HEAP8[$177>>0]|0; //@line 842 "playmidi.c"
     $179 = $178&255; //@line 842 "playmidi.c"
     $180 = 1 << $179; //@line 842 "playmidi.c"
     $181 = $173 & $180; //@line 842 "playmidi.c"
     $182 = ($181|0)!=(0); //@line 842 "playmidi.c"
     $183 = $5; //@line 845 "playmidi.c"
     $184 = ((($183)) + 13080|0); //@line 845 "playmidi.c"
     $185 = HEAP32[$184>>2]|0; //@line 845 "playmidi.c"
     $186 = ((($185)) + 6|0); //@line 845 "playmidi.c"
     $187 = HEAP8[$186>>0]|0; //@line 845 "playmidi.c"
     $188 = $187&255; //@line 845 "playmidi.c"
     $189 = $5; //@line 844 "playmidi.c"
     $190 = ((($189)) + 13080|0); //@line 844 "playmidi.c"
     $191 = HEAP32[$190>>2]|0; //@line 844 "playmidi.c"
     $192 = ((($191)) + 4|0); //@line 844 "playmidi.c"
     $193 = HEAP8[$192>>0]|0; //@line 844 "playmidi.c"
     $194 = $193&255; //@line 844 "playmidi.c"
     $195 = $5; //@line 844 "playmidi.c"
     $196 = ((($195)) + 1084|0); //@line 844 "playmidi.c"
     $197 = (($196) + (($194*40)|0)|0); //@line 844 "playmidi.c"
     if ($182) {
      HEAP32[$197>>2] = $188; //@line 844 "playmidi.c"
      break L10;
     } else {
      $198 = ((($197)) + 4|0); //@line 848 "playmidi.c"
      HEAP32[$198>>2] = $188; //@line 848 "playmidi.c"
      break L10;
     }
     break;
    }
    case 6:  {
     $199 = $5; //@line 854 "playmidi.c"
     $200 = ((($199)) + 13080|0); //@line 854 "playmidi.c"
     $201 = HEAP32[$200>>2]|0; //@line 854 "playmidi.c"
     $202 = ((($201)) + 6|0); //@line 854 "playmidi.c"
     $203 = HEAP8[$202>>0]|0; //@line 854 "playmidi.c"
     $204 = $203&255; //@line 854 "playmidi.c"
     $205 = $5; //@line 853 "playmidi.c"
     $206 = ((($205)) + 13080|0); //@line 853 "playmidi.c"
     $207 = HEAP32[$206>>2]|0; //@line 853 "playmidi.c"
     $208 = ((($207)) + 4|0); //@line 853 "playmidi.c"
     $209 = HEAP8[$208>>0]|0; //@line 853 "playmidi.c"
     $210 = $209&255; //@line 853 "playmidi.c"
     $211 = $5; //@line 853 "playmidi.c"
     $212 = ((($211)) + 1084|0); //@line 853 "playmidi.c"
     $213 = (($212) + (($210*40)|0)|0); //@line 853 "playmidi.c"
     $214 = ((($213)) + 12|0); //@line 853 "playmidi.c"
     HEAP32[$214>>2] = $204; //@line 853 "playmidi.c"
     $215 = $5; //@line 855 "playmidi.c"
     $216 = ((($215)) + 13080|0); //@line 855 "playmidi.c"
     $217 = HEAP32[$216>>2]|0; //@line 855 "playmidi.c"
     $218 = ((($217)) + 6|0); //@line 855 "playmidi.c"
     $219 = HEAP8[$218>>0]|0; //@line 855 "playmidi.c"
     $220 = ($219<<24>>24)!=(0); //@line 855 "playmidi.c"
     if (!($220)) {
      $221 = $5; //@line 856 "playmidi.c"
      _drop_sustain($221); //@line 856 "playmidi.c"
     }
     break;
    }
    case 13:  {
     $222 = $5; //@line 860 "playmidi.c"
     $223 = $5; //@line 860 "playmidi.c"
     $224 = ((($223)) + 13080|0); //@line 860 "playmidi.c"
     $225 = HEAP32[$224>>2]|0; //@line 860 "playmidi.c"
     $226 = ((($225)) + 4|0); //@line 860 "playmidi.c"
     $227 = HEAP8[$226>>0]|0; //@line 860 "playmidi.c"
     $228 = $227&255; //@line 860 "playmidi.c"
     _reset_controllers($222,$228); //@line 860 "playmidi.c"
     break;
    }
    case 14:  {
     $229 = $5; //@line 864 "playmidi.c"
     _all_notes_off($229); //@line 864 "playmidi.c"
     break;
    }
    case 12:  {
     $230 = $5; //@line 868 "playmidi.c"
     _all_sounds_off($230); //@line 868 "playmidi.c"
     break;
    }
    case 15:  {
     $231 = $5; //@line 873 "playmidi.c"
     $232 = ((($231)) + 13080|0); //@line 873 "playmidi.c"
     $233 = HEAP32[$232>>2]|0; //@line 873 "playmidi.c"
     $234 = ((($233)) + 6|0); //@line 873 "playmidi.c"
     $235 = HEAP8[$234>>0]|0; //@line 873 "playmidi.c"
     $236 = $235&255; //@line 873 "playmidi.c"
     $237 = $5; //@line 872 "playmidi.c"
     $238 = ((($237)) + 13080|0); //@line 872 "playmidi.c"
     $239 = HEAP32[$238>>2]|0; //@line 872 "playmidi.c"
     $240 = ((($239)) + 4|0); //@line 872 "playmidi.c"
     $241 = HEAP8[$240>>0]|0; //@line 872 "playmidi.c"
     $242 = $241&255; //@line 872 "playmidi.c"
     $243 = $5; //@line 872 "playmidi.c"
     $244 = ((($243)) + 1084|0); //@line 872 "playmidi.c"
     $245 = (($244) + (($242*40)|0)|0); //@line 872 "playmidi.c"
     HEAP32[$245>>2] = $236; //@line 872 "playmidi.c"
     break;
    }
    case 10:  {
     $246 = $5; //@line 878 "playmidi.c"
     $247 = ((($246)) + 13080|0); //@line 878 "playmidi.c"
     $248 = HEAP32[$247>>2]|0; //@line 878 "playmidi.c"
     $249 = ((($248)) + 4|0); //@line 878 "playmidi.c"
     $250 = HEAP8[$249>>0]|0; //@line 878 "playmidi.c"
     $251 = $250&255; //@line 878 "playmidi.c"
     $252 = $5; //@line 878 "playmidi.c"
     $253 = ((($252)) + 13080|0); //@line 878 "playmidi.c"
     $254 = HEAP32[$253>>2]|0; //@line 878 "playmidi.c"
     $255 = ((($254)) + 7|0); //@line 878 "playmidi.c"
     $256 = HEAP8[$255>>0]|0; //@line 878 "playmidi.c"
     $257 = $256&255; //@line 878 "playmidi.c"
     $258 = $257<<8; //@line 878 "playmidi.c"
     $259 = (($251) + ($258))|0; //@line 878 "playmidi.c"
     $260 = $5; //@line 878 "playmidi.c"
     $261 = ((($260)) + 13080|0); //@line 878 "playmidi.c"
     $262 = HEAP32[$261>>2]|0; //@line 878 "playmidi.c"
     $263 = ((($262)) + 6|0); //@line 878 "playmidi.c"
     $264 = HEAP8[$263>>0]|0; //@line 878 "playmidi.c"
     $265 = $264&255; //@line 878 "playmidi.c"
     $266 = $265<<16; //@line 878 "playmidi.c"
     $267 = (($259) + ($266))|0; //@line 878 "playmidi.c"
     HEAP32[1028] = $267; //@line 878 "playmidi.c"
     break;
    }
    case 99:  {
     $268 = $8; //@line 883 "playmidi.c"
     $269 = (0)!=($268|0); //@line 883 "playmidi.c"
     if (!($269)) {
      label = 28;
      break L5;
     }
     break;
    }
    default: {
    }
    }
   } while(0);
   $280 = $5; //@line 894 "playmidi.c"
   $281 = ((($280)) + 13080|0); //@line 894 "playmidi.c"
   $282 = HEAP32[$281>>2]|0; //@line 894 "playmidi.c"
   $283 = ((($282)) + 8|0); //@line 894 "playmidi.c"
   HEAP32[$281>>2] = $283; //@line 894 "playmidi.c"
  }
  $284 = HEAP32[$47>>2]|0; //@line 897 "playmidi.c"
  $285 = (+($284|0)); //@line 897 "playmidi.c"
  $286 = +HEAPF32[1062]; //@line 897 "playmidi.c"
  $287 = $285 / $286; //@line 897 "playmidi.c"
  $288 = (~~(($287))>>>0); //@line 897 "playmidi.c"
  $289 = $10; //@line 897 "playmidi.c"
  $290 = ($288>>>0)>($289>>>0); //@line 897 "playmidi.c"
  $291 = $5; //@line 898 "playmidi.c"
  if ($290) {
   $292 = $10; //@line 898 "playmidi.c"
   $293 = $5; //@line 898 "playmidi.c"
   $294 = ((($293)) + 13088|0); //@line 898 "playmidi.c"
   $295 = HEAP32[$294>>2]|0; //@line 898 "playmidi.c"
   $296 = (($292) - ($295))|0; //@line 898 "playmidi.c"
   _compute_data($291,$6,$296); //@line 898 "playmidi.c"
   continue;
  } else {
   $297 = $5; //@line 900 "playmidi.c"
   $298 = ((($297)) + 13080|0); //@line 900 "playmidi.c"
   $299 = HEAP32[$298>>2]|0; //@line 900 "playmidi.c"
   $300 = HEAP32[$299>>2]|0; //@line 900 "playmidi.c"
   $301 = (+($300|0)); //@line 900 "playmidi.c"
   $302 = +HEAPF32[1062]; //@line 900 "playmidi.c"
   $303 = $301 / $302; //@line 900 "playmidi.c"
   $304 = (~~(($303))>>>0); //@line 900 "playmidi.c"
   $305 = $5; //@line 900 "playmidi.c"
   $306 = ((($305)) + 13088|0); //@line 900 "playmidi.c"
   $307 = HEAP32[$306>>2]|0; //@line 900 "playmidi.c"
   $308 = (($304) - ($307))|0; //@line 900 "playmidi.c"
   _compute_data($291,$6,$308); //@line 900 "playmidi.c"
   continue;
  }
 }
 if ((label|0) == 28) {
  $270 = $5; //@line 891 "playmidi.c"
  HEAP32[$270>>2] = 0; //@line 891 "playmidi.c"
  $271 = $5; //@line 892 "playmidi.c"
  $272 = ((($271)) + 13088|0); //@line 892 "playmidi.c"
  $273 = HEAP32[$272>>2]|0; //@line 892 "playmidi.c"
  $274 = $9; //@line 892 "playmidi.c"
  $275 = (($273) - ($274))|0; //@line 892 "playmidi.c"
  $276 = $5; //@line 892 "playmidi.c"
  $277 = ((($276)) + 12|0); //@line 892 "playmidi.c"
  $278 = HEAP32[$277>>2]|0; //@line 892 "playmidi.c"
  $279 = Math_imul($275, $278)|0; //@line 892 "playmidi.c"
  $4 = $279; //@line 892 "playmidi.c"
  $314 = $4; //@line 903 "playmidi.c"
  STACKTOP = sp;return ($314|0); //@line 903 "playmidi.c"
 }
 else if ((label|0) == 33) {
  $309 = $11; //@line 902 "playmidi.c"
  $310 = $5; //@line 902 "playmidi.c"
  $311 = ((($310)) + 12|0); //@line 902 "playmidi.c"
  $312 = HEAP32[$311>>2]|0; //@line 902 "playmidi.c"
  $313 = Math_imul($309, $312)|0; //@line 902 "playmidi.c"
  $4 = $313; //@line 902 "playmidi.c"
  $314 = $4; //@line 903 "playmidi.c"
  STACKTOP = sp;return ($314|0); //@line 903 "playmidi.c"
 }
 return (0)|0;
}
function _adjust_pressure($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1; //@line 549 "playmidi.c"
 $5 = ((($4)) + 13080|0); //@line 549 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 549 "playmidi.c"
 $2 = $6; //@line 549 "playmidi.c"
 $7 = $1; //@line 550 "playmidi.c"
 $8 = ((($7)) + 13052|0); //@line 550 "playmidi.c"
 $9 = HEAP32[$8>>2]|0; //@line 550 "playmidi.c"
 $3 = $9; //@line 550 "playmidi.c"
 while(1) {
  $10 = $3; //@line 552 "playmidi.c"
  $11 = (($10) + -1)|0; //@line 552 "playmidi.c"
  $3 = $11; //@line 552 "playmidi.c"
  $12 = ($10|0)!=(0); //@line 552 "playmidi.c"
  if (!($12)) {
   label = 7;
   break;
  }
  $13 = $3; //@line 553 "playmidi.c"
  $14 = $1; //@line 553 "playmidi.c"
  $15 = ((($14)) + 1724|0); //@line 553 "playmidi.c"
  $16 = (($15) + (($13*236)|0)|0); //@line 553 "playmidi.c"
  $17 = HEAP8[$16>>0]|0; //@line 553 "playmidi.c"
  $18 = $17&255; //@line 553 "playmidi.c"
  $19 = ($18|0)==(1); //@line 553 "playmidi.c"
  if (!($19)) {
   continue;
  }
  $20 = $3; //@line 554 "playmidi.c"
  $21 = $1; //@line 554 "playmidi.c"
  $22 = ((($21)) + 1724|0); //@line 554 "playmidi.c"
  $23 = (($22) + (($20*236)|0)|0); //@line 554 "playmidi.c"
  $24 = ((($23)) + 1|0); //@line 554 "playmidi.c"
  $25 = HEAP8[$24>>0]|0; //@line 554 "playmidi.c"
  $26 = $25&255; //@line 554 "playmidi.c"
  $27 = $2; //@line 554 "playmidi.c"
  $28 = ((($27)) + 4|0); //@line 554 "playmidi.c"
  $29 = HEAP8[$28>>0]|0; //@line 554 "playmidi.c"
  $30 = $29&255; //@line 554 "playmidi.c"
  $31 = ($26|0)==($30|0); //@line 554 "playmidi.c"
  if (!($31)) {
   continue;
  }
  $32 = $3; //@line 555 "playmidi.c"
  $33 = $1; //@line 555 "playmidi.c"
  $34 = ((($33)) + 1724|0); //@line 555 "playmidi.c"
  $35 = (($34) + (($32*236)|0)|0); //@line 555 "playmidi.c"
  $36 = ((($35)) + 2|0); //@line 555 "playmidi.c"
  $37 = HEAP8[$36>>0]|0; //@line 555 "playmidi.c"
  $38 = $37&255; //@line 555 "playmidi.c"
  $39 = $2; //@line 555 "playmidi.c"
  $40 = ((($39)) + 6|0); //@line 555 "playmidi.c"
  $41 = HEAP8[$40>>0]|0; //@line 555 "playmidi.c"
  $42 = $41&255; //@line 555 "playmidi.c"
  $43 = ($38|0)==($42|0); //@line 555 "playmidi.c"
  if ($43) {
   break;
  }
 }
 if ((label|0) == 7) {
  STACKTOP = sp;return; //@line 562 "playmidi.c"
 }
 $44 = $2; //@line 557 "playmidi.c"
 $45 = ((($44)) + 7|0); //@line 557 "playmidi.c"
 $46 = HEAP8[$45>>0]|0; //@line 557 "playmidi.c"
 $47 = $3; //@line 557 "playmidi.c"
 $48 = $1; //@line 557 "playmidi.c"
 $49 = ((($48)) + 1724|0); //@line 557 "playmidi.c"
 $50 = (($49) + (($47*236)|0)|0); //@line 557 "playmidi.c"
 $51 = ((($50)) + 3|0); //@line 557 "playmidi.c"
 HEAP8[$51>>0] = $46; //@line 557 "playmidi.c"
 $52 = $1; //@line 558 "playmidi.c"
 $53 = $3; //@line 558 "playmidi.c"
 _recompute_amp($52,$53); //@line 558 "playmidi.c"
 $54 = $1; //@line 559 "playmidi.c"
 $55 = $3; //@line 559 "playmidi.c"
 _apply_envelope_to_amp($54,$55); //@line 559 "playmidi.c"
 STACKTOP = sp;return; //@line 562 "playmidi.c"
}
function _adjust_pitchbend($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1; //@line 576 "playmidi.c"
 $5 = ((($4)) + 13080|0); //@line 576 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 576 "playmidi.c"
 $7 = ((($6)) + 4|0); //@line 576 "playmidi.c"
 $8 = HEAP8[$7>>0]|0; //@line 576 "playmidi.c"
 $9 = $8&255; //@line 576 "playmidi.c"
 $2 = $9; //@line 576 "playmidi.c"
 $10 = $1; //@line 577 "playmidi.c"
 $11 = ((($10)) + 13052|0); //@line 577 "playmidi.c"
 $12 = HEAP32[$11>>2]|0; //@line 577 "playmidi.c"
 $3 = $12; //@line 577 "playmidi.c"
 while(1) {
  $13 = $3; //@line 579 "playmidi.c"
  $14 = (($13) + -1)|0; //@line 579 "playmidi.c"
  $3 = $14; //@line 579 "playmidi.c"
  $15 = ($13|0)!=(0); //@line 579 "playmidi.c"
  if (!($15)) {
   break;
  }
  $16 = $3; //@line 580 "playmidi.c"
  $17 = $1; //@line 580 "playmidi.c"
  $18 = ((($17)) + 1724|0); //@line 580 "playmidi.c"
  $19 = (($18) + (($16*236)|0)|0); //@line 580 "playmidi.c"
  $20 = HEAP8[$19>>0]|0; //@line 580 "playmidi.c"
  $21 = $20&255; //@line 580 "playmidi.c"
  $22 = ($21|0)!=(0); //@line 580 "playmidi.c"
  if (!($22)) {
   continue;
  }
  $23 = $3; //@line 580 "playmidi.c"
  $24 = $1; //@line 580 "playmidi.c"
  $25 = ((($24)) + 1724|0); //@line 580 "playmidi.c"
  $26 = (($25) + (($23*236)|0)|0); //@line 580 "playmidi.c"
  $27 = ((($26)) + 1|0); //@line 580 "playmidi.c"
  $28 = HEAP8[$27>>0]|0; //@line 580 "playmidi.c"
  $29 = $28&255; //@line 580 "playmidi.c"
  $30 = $2; //@line 580 "playmidi.c"
  $31 = ($29|0)==($30|0); //@line 580 "playmidi.c"
  if (!($31)) {
   continue;
  }
  $32 = $1; //@line 582 "playmidi.c"
  $33 = $3; //@line 582 "playmidi.c"
  _recompute_freq($32,$33); //@line 582 "playmidi.c"
 }
 STACKTOP = sp;return; //@line 584 "playmidi.c"
}
function _adjust_volume($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1; //@line 588 "playmidi.c"
 $5 = ((($4)) + 13080|0); //@line 588 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 588 "playmidi.c"
 $7 = ((($6)) + 4|0); //@line 588 "playmidi.c"
 $8 = HEAP8[$7>>0]|0; //@line 588 "playmidi.c"
 $9 = $8&255; //@line 588 "playmidi.c"
 $2 = $9; //@line 588 "playmidi.c"
 $10 = $1; //@line 589 "playmidi.c"
 $11 = ((($10)) + 13052|0); //@line 589 "playmidi.c"
 $12 = HEAP32[$11>>2]|0; //@line 589 "playmidi.c"
 $3 = $12; //@line 589 "playmidi.c"
 while(1) {
  $13 = $3; //@line 591 "playmidi.c"
  $14 = (($13) + -1)|0; //@line 591 "playmidi.c"
  $3 = $14; //@line 591 "playmidi.c"
  $15 = ($13|0)!=(0); //@line 591 "playmidi.c"
  if (!($15)) {
   break;
  }
  $16 = $3; //@line 592 "playmidi.c"
  $17 = $1; //@line 592 "playmidi.c"
  $18 = ((($17)) + 1724|0); //@line 592 "playmidi.c"
  $19 = (($18) + (($16*236)|0)|0); //@line 592 "playmidi.c"
  $20 = ((($19)) + 1|0); //@line 592 "playmidi.c"
  $21 = HEAP8[$20>>0]|0; //@line 592 "playmidi.c"
  $22 = $21&255; //@line 592 "playmidi.c"
  $23 = $2; //@line 592 "playmidi.c"
  $24 = ($22|0)==($23|0); //@line 592 "playmidi.c"
  if (!($24)) {
   continue;
  }
  $25 = $3; //@line 593 "playmidi.c"
  $26 = $1; //@line 593 "playmidi.c"
  $27 = ((($26)) + 1724|0); //@line 593 "playmidi.c"
  $28 = (($27) + (($25*236)|0)|0); //@line 593 "playmidi.c"
  $29 = HEAP8[$28>>0]|0; //@line 593 "playmidi.c"
  $30 = $29&255; //@line 593 "playmidi.c"
  $31 = ($30|0)==(1); //@line 593 "playmidi.c"
  if (!($31)) {
   $32 = $3; //@line 593 "playmidi.c"
   $33 = $1; //@line 593 "playmidi.c"
   $34 = ((($33)) + 1724|0); //@line 593 "playmidi.c"
   $35 = (($34) + (($32*236)|0)|0); //@line 593 "playmidi.c"
   $36 = HEAP8[$35>>0]|0; //@line 593 "playmidi.c"
   $37 = $36&255; //@line 593 "playmidi.c"
   $38 = ($37|0)==(2); //@line 593 "playmidi.c"
   if (!($38)) {
    continue;
   }
  }
  $39 = $1; //@line 595 "playmidi.c"
  $40 = $3; //@line 595 "playmidi.c"
  _recompute_amp($39,$40); //@line 595 "playmidi.c"
  $41 = $1; //@line 596 "playmidi.c"
  $42 = $3; //@line 596 "playmidi.c"
  _apply_envelope_to_amp($41,$42); //@line 596 "playmidi.c"
 }
 STACKTOP = sp;return; //@line 598 "playmidi.c"
}
function _drop_sustain($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1; //@line 566 "playmidi.c"
 $5 = ((($4)) + 13052|0); //@line 566 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 566 "playmidi.c"
 $2 = $6; //@line 566 "playmidi.c"
 $7 = $1; //@line 567 "playmidi.c"
 $8 = ((($7)) + 13080|0); //@line 567 "playmidi.c"
 $9 = HEAP32[$8>>2]|0; //@line 567 "playmidi.c"
 $10 = ((($9)) + 4|0); //@line 567 "playmidi.c"
 $11 = HEAP8[$10>>0]|0; //@line 567 "playmidi.c"
 $12 = $11&255; //@line 567 "playmidi.c"
 $3 = $12; //@line 567 "playmidi.c"
 while(1) {
  $13 = $2; //@line 569 "playmidi.c"
  $14 = (($13) + -1)|0; //@line 569 "playmidi.c"
  $2 = $14; //@line 569 "playmidi.c"
  $15 = ($13|0)!=(0); //@line 569 "playmidi.c"
  if (!($15)) {
   break;
  }
  $16 = $2; //@line 570 "playmidi.c"
  $17 = $1; //@line 570 "playmidi.c"
  $18 = ((($17)) + 1724|0); //@line 570 "playmidi.c"
  $19 = (($18) + (($16*236)|0)|0); //@line 570 "playmidi.c"
  $20 = HEAP8[$19>>0]|0; //@line 570 "playmidi.c"
  $21 = $20&255; //@line 570 "playmidi.c"
  $22 = ($21|0)==(2); //@line 570 "playmidi.c"
  if (!($22)) {
   continue;
  }
  $23 = $2; //@line 570 "playmidi.c"
  $24 = $1; //@line 570 "playmidi.c"
  $25 = ((($24)) + 1724|0); //@line 570 "playmidi.c"
  $26 = (($25) + (($23*236)|0)|0); //@line 570 "playmidi.c"
  $27 = ((($26)) + 1|0); //@line 570 "playmidi.c"
  $28 = HEAP8[$27>>0]|0; //@line 570 "playmidi.c"
  $29 = $28&255; //@line 570 "playmidi.c"
  $30 = $3; //@line 570 "playmidi.c"
  $31 = ($29|0)==($30|0); //@line 570 "playmidi.c"
  if (!($31)) {
   continue;
  }
  $32 = $1; //@line 571 "playmidi.c"
  $33 = $2; //@line 571 "playmidi.c"
  _finish_note($32,$33); //@line 571 "playmidi.c"
 }
 STACKTOP = sp;return; //@line 572 "playmidi.c"
}
function _all_notes_off($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1; //@line 517 "playmidi.c"
 $5 = ((($4)) + 13052|0); //@line 517 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 517 "playmidi.c"
 $2 = $6; //@line 517 "playmidi.c"
 $7 = $1; //@line 518 "playmidi.c"
 $8 = ((($7)) + 13080|0); //@line 518 "playmidi.c"
 $9 = HEAP32[$8>>2]|0; //@line 518 "playmidi.c"
 $10 = ((($9)) + 4|0); //@line 518 "playmidi.c"
 $11 = HEAP8[$10>>0]|0; //@line 518 "playmidi.c"
 $12 = $11&255; //@line 518 "playmidi.c"
 $3 = $12; //@line 518 "playmidi.c"
 while(1) {
  $13 = $2; //@line 521 "playmidi.c"
  $14 = (($13) + -1)|0; //@line 521 "playmidi.c"
  $2 = $14; //@line 521 "playmidi.c"
  $15 = ($13|0)!=(0); //@line 521 "playmidi.c"
  if (!($15)) {
   break;
  }
  $16 = $2; //@line 522 "playmidi.c"
  $17 = $1; //@line 522 "playmidi.c"
  $18 = ((($17)) + 1724|0); //@line 522 "playmidi.c"
  $19 = (($18) + (($16*236)|0)|0); //@line 522 "playmidi.c"
  $20 = HEAP8[$19>>0]|0; //@line 522 "playmidi.c"
  $21 = $20&255; //@line 522 "playmidi.c"
  $22 = ($21|0)==(1); //@line 522 "playmidi.c"
  if (!($22)) {
   continue;
  }
  $23 = $2; //@line 523 "playmidi.c"
  $24 = $1; //@line 523 "playmidi.c"
  $25 = ((($24)) + 1724|0); //@line 523 "playmidi.c"
  $26 = (($25) + (($23*236)|0)|0); //@line 523 "playmidi.c"
  $27 = ((($26)) + 1|0); //@line 523 "playmidi.c"
  $28 = HEAP8[$27>>0]|0; //@line 523 "playmidi.c"
  $29 = $28&255; //@line 523 "playmidi.c"
  $30 = $3; //@line 523 "playmidi.c"
  $31 = ($29|0)==($30|0); //@line 523 "playmidi.c"
  if (!($31)) {
   continue;
  }
  $32 = $3; //@line 525 "playmidi.c"
  $33 = $1; //@line 525 "playmidi.c"
  $34 = ((($33)) + 1084|0); //@line 525 "playmidi.c"
  $35 = (($34) + (($32*40)|0)|0); //@line 525 "playmidi.c"
  $36 = ((($35)) + 12|0); //@line 525 "playmidi.c"
  $37 = HEAP32[$36>>2]|0; //@line 525 "playmidi.c"
  $38 = ($37|0)!=(0); //@line 525 "playmidi.c"
  if ($38) {
   $39 = $2; //@line 526 "playmidi.c"
   $40 = $1; //@line 526 "playmidi.c"
   $41 = ((($40)) + 1724|0); //@line 526 "playmidi.c"
   $42 = (($41) + (($39*236)|0)|0); //@line 526 "playmidi.c"
   HEAP8[$42>>0] = 2; //@line 526 "playmidi.c"
   continue;
  } else {
   $43 = $1; //@line 528 "playmidi.c"
   $44 = $2; //@line 528 "playmidi.c"
   _finish_note($43,$44); //@line 528 "playmidi.c"
   continue;
  }
 }
 STACKTOP = sp;return; //@line 530 "playmidi.c"
}
function _all_sounds_off($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1; //@line 535 "playmidi.c"
 $5 = ((($4)) + 13052|0); //@line 535 "playmidi.c"
 $6 = HEAP32[$5>>2]|0; //@line 535 "playmidi.c"
 $2 = $6; //@line 535 "playmidi.c"
 $7 = $1; //@line 536 "playmidi.c"
 $8 = ((($7)) + 13080|0); //@line 536 "playmidi.c"
 $9 = HEAP32[$8>>2]|0; //@line 536 "playmidi.c"
 $10 = ((($9)) + 4|0); //@line 536 "playmidi.c"
 $11 = HEAP8[$10>>0]|0; //@line 536 "playmidi.c"
 $12 = $11&255; //@line 536 "playmidi.c"
 $3 = $12; //@line 536 "playmidi.c"
 while(1) {
  $13 = $2; //@line 538 "playmidi.c"
  $14 = (($13) + -1)|0; //@line 538 "playmidi.c"
  $2 = $14; //@line 538 "playmidi.c"
  $15 = ($13|0)!=(0); //@line 538 "playmidi.c"
  if (!($15)) {
   break;
  }
  $16 = $2; //@line 539 "playmidi.c"
  $17 = $1; //@line 539 "playmidi.c"
  $18 = ((($17)) + 1724|0); //@line 539 "playmidi.c"
  $19 = (($18) + (($16*236)|0)|0); //@line 539 "playmidi.c"
  $20 = ((($19)) + 1|0); //@line 539 "playmidi.c"
  $21 = HEAP8[$20>>0]|0; //@line 539 "playmidi.c"
  $22 = $21&255; //@line 539 "playmidi.c"
  $23 = $3; //@line 539 "playmidi.c"
  $24 = ($22|0)==($23|0); //@line 539 "playmidi.c"
  if (!($24)) {
   continue;
  }
  $25 = $2; //@line 540 "playmidi.c"
  $26 = $1; //@line 540 "playmidi.c"
  $27 = ((($26)) + 1724|0); //@line 540 "playmidi.c"
  $28 = (($27) + (($25*236)|0)|0); //@line 540 "playmidi.c"
  $29 = HEAP8[$28>>0]|0; //@line 540 "playmidi.c"
  $30 = $29&255; //@line 540 "playmidi.c"
  $31 = ($30|0)!=(0); //@line 540 "playmidi.c"
  if (!($31)) {
   continue;
  }
  $32 = $2; //@line 541 "playmidi.c"
  $33 = $1; //@line 541 "playmidi.c"
  $34 = ((($33)) + 1724|0); //@line 541 "playmidi.c"
  $35 = (($34) + (($32*236)|0)|0); //@line 541 "playmidi.c"
  $36 = HEAP8[$35>>0]|0; //@line 541 "playmidi.c"
  $37 = $36&255; //@line 541 "playmidi.c"
  $38 = ($37|0)!=(4); //@line 541 "playmidi.c"
  if (!($38)) {
   continue;
  }
  $39 = $1; //@line 543 "playmidi.c"
  $40 = $2; //@line 543 "playmidi.c"
  _kill_note($39,$40); //@line 543 "playmidi.c"
 }
 STACKTOP = sp;return; //@line 545 "playmidi.c"
}
function _compute_data($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $8 = $3; //@line 711 "playmidi.c"
 $9 = ((($8)) + 8|0); //@line 711 "playmidi.c"
 $10 = HEAP32[$9>>2]|0; //@line 711 "playmidi.c"
 $11 = $10 & 1; //@line 711 "playmidi.c"
 $12 = ($11|0)!=(0); //@line 711 "playmidi.c"
 if ($12) {
  $6 = 1; //@line 712 "playmidi.c"
 } else {
  $6 = 2; //@line 714 "playmidi.c"
 }
 while(1) {
  $13 = $5; //@line 716 "playmidi.c"
  $14 = ($13|0)!=(0); //@line 716 "playmidi.c"
  if (!($14)) {
   break;
  }
  $15 = $5; //@line 718 "playmidi.c"
  $7 = $15; //@line 718 "playmidi.c"
  $16 = $7; //@line 719 "playmidi.c"
  $17 = $3; //@line 719 "playmidi.c"
  $18 = ((($17)) + 1064|0); //@line 719 "playmidi.c"
  $19 = HEAP32[$18>>2]|0; //@line 719 "playmidi.c"
  $20 = ($16|0)>($19|0); //@line 719 "playmidi.c"
  if ($20) {
   $21 = $3; //@line 720 "playmidi.c"
   $22 = ((($21)) + 1064|0); //@line 720 "playmidi.c"
   $23 = HEAP32[$22>>2]|0; //@line 720 "playmidi.c"
   $7 = $23; //@line 720 "playmidi.c"
  }
  $24 = $3; //@line 721 "playmidi.c"
  $25 = $7; //@line 721 "playmidi.c"
  _do_compute_data($24,$25); //@line 721 "playmidi.c"
  $26 = $3; //@line 722 "playmidi.c"
  $27 = ((($26)) + 1060|0); //@line 722 "playmidi.c"
  $28 = HEAP32[$27>>2]|0; //@line 722 "playmidi.c"
  $29 = $4; //@line 722 "playmidi.c"
  $30 = HEAP32[$29>>2]|0; //@line 722 "playmidi.c"
  $31 = $3; //@line 722 "playmidi.c"
  $32 = ((($31)) + 1072|0); //@line 722 "playmidi.c"
  $33 = HEAP32[$32>>2]|0; //@line 722 "playmidi.c"
  $34 = $6; //@line 722 "playmidi.c"
  $35 = $7; //@line 722 "playmidi.c"
  $36 = Math_imul($34, $35)|0; //@line 722 "playmidi.c"
  FUNCTION_TABLE_viii[$28 & 15]($30,$33,$36); //@line 722 "playmidi.c"
  $37 = $3; //@line 723 "playmidi.c"
  $38 = ((($37)) + 12|0); //@line 723 "playmidi.c"
  $39 = HEAP32[$38>>2]|0; //@line 723 "playmidi.c"
  $40 = $7; //@line 723 "playmidi.c"
  $41 = Math_imul($39, $40)|0; //@line 723 "playmidi.c"
  $42 = $4; //@line 723 "playmidi.c"
  $43 = HEAP32[$42>>2]|0; //@line 723 "playmidi.c"
  $44 = (($43) + ($41)|0); //@line 723 "playmidi.c"
  HEAP32[$42>>2] = $44; //@line 723 "playmidi.c"
  $45 = $7; //@line 724 "playmidi.c"
  $46 = $5; //@line 724 "playmidi.c"
  $47 = (($46) - ($45))|0; //@line 724 "playmidi.c"
  $5 = $47; //@line 724 "playmidi.c"
 }
 STACKTOP = sp;return; //@line 726 "playmidi.c"
}
function _do_compute_data($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $5 = $2; //@line 695 "playmidi.c"
 $6 = ((($5)) + 1072|0); //@line 695 "playmidi.c"
 $7 = HEAP32[$6>>2]|0; //@line 695 "playmidi.c"
 $8 = $2; //@line 696 "playmidi.c"
 $9 = ((($8)) + 8|0); //@line 696 "playmidi.c"
 $10 = HEAP32[$9>>2]|0; //@line 696 "playmidi.c"
 $11 = $10 & 1; //@line 696 "playmidi.c"
 $12 = ($11|0)!=(0); //@line 696 "playmidi.c"
 $13 = $3; //@line 696 "playmidi.c"
 $14 = $13<<2; //@line 696 "playmidi.c"
 $15 = $13<<3; //@line 696 "playmidi.c"
 $16 = $12 ? $14 : $15; //@line 696 "playmidi.c"
 _memset(($7|0),0,($16|0))|0; //@line 695 "playmidi.c"
 $4 = 0; //@line 697 "playmidi.c"
 while(1) {
  $17 = $4; //@line 697 "playmidi.c"
  $18 = $2; //@line 697 "playmidi.c"
  $19 = ((($18)) + 13052|0); //@line 697 "playmidi.c"
  $20 = HEAP32[$19>>2]|0; //@line 697 "playmidi.c"
  $21 = ($17|0)<($20|0); //@line 697 "playmidi.c"
  if (!($21)) {
   break;
  }
  $22 = $4; //@line 699 "playmidi.c"
  $23 = $2; //@line 699 "playmidi.c"
  $24 = ((($23)) + 1724|0); //@line 699 "playmidi.c"
  $25 = (($24) + (($22*236)|0)|0); //@line 699 "playmidi.c"
  $26 = HEAP8[$25>>0]|0; //@line 699 "playmidi.c"
  $27 = $26&255; //@line 699 "playmidi.c"
  $28 = ($27|0)!=(0); //@line 699 "playmidi.c"
  if ($28) {
   $29 = $2; //@line 700 "playmidi.c"
   $30 = $2; //@line 700 "playmidi.c"
   $31 = ((($30)) + 1072|0); //@line 700 "playmidi.c"
   $32 = HEAP32[$31>>2]|0; //@line 700 "playmidi.c"
   $33 = $4; //@line 700 "playmidi.c"
   $34 = $3; //@line 700 "playmidi.c"
   _mix_voice($29,$32,$33,$34); //@line 700 "playmidi.c"
  }
  $35 = $4; //@line 697 "playmidi.c"
  $36 = (($35) + 1)|0; //@line 697 "playmidi.c"
  $4 = $36; //@line 697 "playmidi.c"
 }
 $37 = $3; //@line 702 "playmidi.c"
 $38 = $2; //@line 702 "playmidi.c"
 $39 = ((($38)) + 13088|0); //@line 702 "playmidi.c"
 $40 = HEAP32[$39>>2]|0; //@line 702 "playmidi.c"
 $41 = (($40) + ($37))|0; //@line 702 "playmidi.c"
 HEAP32[$39>>2] = $41; //@line 702 "playmidi.c"
 STACKTOP = sp;return; //@line 703 "playmidi.c"
}
function _read_midi_file($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $9 = sp + 8|0;
 $11 = sp + 36|0;
 $12 = sp + 34|0;
 $13 = sp + 32|0;
 $15 = sp + 40|0;
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $16 = $6;
 $17 = ((($16)) + 13092|0);
 HEAP32[$17>>2] = 0;
 $18 = $6;
 $19 = ((($18)) + 13096|0);
 HEAP32[$19>>2] = 0;
 $20 = $6;
 $21 = ((($20)) + 13084|0);
 HEAP32[$21>>2] = 0;
 $22 = $5;
 $23 = (_mid_istream_read($22,$15,1,4)|0);
 $24 = ($23|0)!=(4);
 if (!($24)) {
  $25 = $5;
  $26 = (_mid_istream_read($25,$9,4,1)|0);
  $27 = ($26|0)!=(1);
  if (!($27)) {
   $28 = HEAP32[$9>>2]|0;
   $29 = $28 & 255;
   $30 = $29 << 24;
   $31 = HEAP32[$9>>2]|0;
   $32 = $31 & 65280;
   $33 = $32 << 8;
   $34 = $30 | $33;
   $35 = HEAP32[$9>>2]|0;
   $36 = $35 & 16711680;
   $37 = $36 >> 8;
   $38 = $34 | $37;
   $39 = HEAP32[$9>>2]|0;
   $40 = $39 >> 24;
   $41 = $40 & 255;
   $42 = $38 | $41;
   HEAP32[$9>>2] = $42;
   $43 = (_memcmp($15,5072,4)|0);
   $44 = ($43|0)!=(0);
   $45 = HEAP32[$9>>2]|0;
   $46 = ($45|0)<(6);
   $or$cond = $44 | $46;
   if ($or$cond) {
    $4 = 0;
    $154 = $4;
    STACKTOP = sp;return ($154|0);
   }
   $47 = $5;
   (_mid_istream_read($47,$11,2,1)|0);
   $48 = $5;
   (_mid_istream_read($48,$12,2,1)|0);
   $49 = $5;
   (_mid_istream_read($49,$13,2,1)|0);
   $50 = HEAP16[$11>>1]|0;
   $51 = $50 << 16 >> 16;
   $52 = $51 & 255;
   $53 = $52 << 8;
   $54 = HEAP16[$11>>1]|0;
   $55 = $54 << 16 >> 16;
   $56 = $55 >> 8;
   $57 = $56 & 255;
   $58 = $53 | $57;
   $59 = $58&65535;
   HEAP16[$11>>1] = $59;
   $60 = HEAP16[$12>>1]|0;
   $61 = $60 << 16 >> 16;
   $62 = $61 & 255;
   $63 = $62 << 8;
   $64 = HEAP16[$12>>1]|0;
   $65 = $64 << 16 >> 16;
   $66 = $65 >> 8;
   $67 = $66 & 255;
   $68 = $63 | $67;
   $69 = $68&65535;
   HEAP16[$12>>1] = $69;
   $70 = HEAP16[$13>>1]|0;
   $71 = $70 << 16 >> 16;
   $72 = $71 & 255;
   $73 = $72 << 8;
   $74 = HEAP16[$13>>1]|0;
   $75 = $74 << 16 >> 16;
   $76 = $75 >> 8;
   $77 = $76 & 255;
   $78 = $73 | $77;
   $79 = $78&65535;
   HEAP16[$13>>1] = $79;
   $80 = HEAP16[$13>>1]|0;
   $81 = $80 << 16 >> 16;
   $82 = ($81|0)<(0);
   $83 = HEAP16[$13>>1]|0;
   $84 = $83 << 16 >> 16;
   if ($82) {
    $85 = (($84|0) / 256)&-1;
    $86 = (0 - ($85))|0;
    $87 = HEAP16[$13>>1]|0;
    $88 = $87 << 16 >> 16;
    $89 = $88 & 255;
    $90 = Math_imul($86, $89)|0;
    $10 = $90;
   } else {
    $10 = $84;
   }
   $91 = HEAP32[$9>>2]|0;
   $92 = ($91|0)>(6);
   if ($92) {
    $93 = $5;
    $94 = HEAP32[$9>>2]|0;
    $95 = (($94) - 6)|0;
    _mid_istream_skip($93,$95);
   }
   $96 = HEAP16[$11>>1]|0;
   $97 = $96 << 16 >> 16;
   $98 = ($97|0)<(0);
   if (!($98)) {
    $99 = HEAP16[$11>>1]|0;
    $100 = $99 << 16 >> 16;
    $101 = ($100|0)>(2);
    if (!($101)) {
     $102 = (_safe_malloc(12)|0);
     $103 = $6;
     $104 = ((($103)) + 13084|0);
     HEAP32[$104>>2] = $102;
     $105 = $6;
     $106 = ((($105)) + 13084|0);
     $107 = HEAP32[$106>>2]|0;
     HEAP32[$107>>2] = 0;
     $108 = $6;
     $109 = ((($108)) + 13084|0);
     $110 = HEAP32[$109>>2]|0;
     $111 = ((($110)) + 5|0);
     HEAP8[$111>>0] = 0;
     $112 = $6;
     $113 = ((($112)) + 13084|0);
     $114 = HEAP32[$113>>2]|0;
     $115 = ((($114)) + 8|0);
     HEAP32[$115>>2] = 0;
     $116 = $6;
     $117 = ((($116)) + 13092|0);
     $118 = HEAP32[$117>>2]|0;
     $119 = (($118) + 1)|0;
     HEAP32[$117>>2] = $119;
     $120 = HEAP16[$11>>1]|0;
     $121 = $120 << 16 >> 16;
     L18: do {
      switch ($121|0) {
      case 0:  {
       $122 = $5;
       $123 = $6;
       $124 = (_read_track($122,$123,0)|0);
       $125 = ($124|0)!=(0);
       if ($125) {
        $126 = $6;
        _free_midi_list($126);
        $4 = 0;
        $154 = $4;
        STACKTOP = sp;return ($154|0);
       }
       break;
      }
      case 1:  {
       $14 = 0;
       while(1) {
        $127 = $14;
        $128 = HEAP16[$12>>1]|0;
        $129 = $128 << 16 >> 16;
        $130 = ($127|0)<($129|0);
        if (!($130)) {
         break L18;
        }
        $131 = $5;
        $132 = $6;
        $133 = (_read_track($131,$132,0)|0);
        $134 = ($133|0)!=(0);
        if ($134) {
         break;
        }
        $136 = $14;
        $137 = (($136) + 1)|0;
        $14 = $137;
       }
       $135 = $6;
       _free_midi_list($135);
       $4 = 0;
       $154 = $4;
       STACKTOP = sp;return ($154|0);
       break;
      }
      case 2:  {
       $14 = 0;
       while(1) {
        $138 = $14;
        $139 = HEAP16[$12>>1]|0;
        $140 = $139 << 16 >> 16;
        $141 = ($138|0)<($140|0);
        if (!($141)) {
         break L18;
        }
        $142 = $5;
        $143 = $6;
        $144 = (_read_track($142,$143,1)|0);
        $145 = ($144|0)!=(0);
        if ($145) {
         break;
        }
        $147 = $14;
        $148 = (($147) + 1)|0;
        $14 = $148;
       }
       $146 = $6;
       _free_midi_list($146);
       $4 = 0;
       $154 = $4;
       STACKTOP = sp;return ($154|0);
       break;
      }
      default: {
      }
      }
     } while(0);
     $149 = $6;
     $150 = $10;
     $151 = $7;
     $152 = $8;
     $153 = (_groom_list($149,$150,$151,$152)|0);
     $4 = $153;
     $154 = $4;
     STACKTOP = sp;return ($154|0);
    }
   }
   $4 = 0;
   $154 = $4;
   STACKTOP = sp;return ($154|0);
  }
 }
 $4 = 0;
 $154 = $4;
 STACKTOP = sp;return ($154|0);
}
function _read_track($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $10 = sp;
 $11 = sp + 32|0;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $12 = $5;
 $13 = ((($12)) + 13084|0);
 $14 = HEAP32[$13>>2]|0;
 $7 = $14;
 $15 = $6;
 $16 = ($15|0)!=(0);
 $17 = $7;
 $18 = ($17|0)!=(0|0);
 $or$cond = $16 & $18;
 if ($or$cond) {
  while(1) {
   $19 = $7;
   $20 = ((($19)) + 8|0);
   $21 = HEAP32[$20>>2]|0;
   $22 = ($21|0)!=(0|0);
   $23 = $7;
   if (!($22)) {
    break;
   }
   $24 = ((($23)) + 8|0);
   $25 = HEAP32[$24>>2]|0;
   $7 = $25;
  }
  $26 = HEAP32[$23>>2]|0;
  $27 = $5;
  $28 = ((($27)) + 13096|0);
  HEAP32[$28>>2] = $26;
 } else {
  $29 = $5;
  $30 = ((($29)) + 13096|0);
  HEAP32[$30>>2] = 0;
 }
 $31 = $4;
 $32 = (_mid_istream_read($31,$11,1,4)|0);
 $33 = ($32|0)!=(4);
 if (!($33)) {
  $34 = $4;
  $35 = (_mid_istream_read($34,$10,4,1)|0);
  $36 = ($35|0)!=(1);
  if (!($36)) {
   $37 = HEAP32[$10>>2]|0;
   $38 = $37 & 255;
   $39 = $38 << 24;
   $40 = HEAP32[$10>>2]|0;
   $41 = $40 & 65280;
   $42 = $41 << 8;
   $43 = $39 | $42;
   $44 = HEAP32[$10>>2]|0;
   $45 = $44 & 16711680;
   $46 = $45 >> 8;
   $47 = $43 | $46;
   $48 = HEAP32[$10>>2]|0;
   $49 = $48 >> 24;
   $50 = $49 & 255;
   $51 = $47 | $50;
   HEAP32[$10>>2] = $51;
   $52 = (_memcmp($11,5077,4)|0);
   $53 = ($52|0)!=(0);
   if ($53) {
    $3 = -2;
    $84 = $3;
    STACKTOP = sp;return ($84|0);
   }
   while(1) {
    $54 = $4;
    $55 = $5;
    $56 = (_read_midi_event($54,$55)|0);
    $9 = $56;
    $57 = ($56|0)!=(0|0);
    if (!($57)) {
     label = 12;
     break;
    }
    $58 = $9;
    $59 = ($58|0)==((-1)|0);
    if ($59) {
     label = 14;
     break;
    }
    $60 = $7;
    $61 = ((($60)) + 8|0);
    $62 = HEAP32[$61>>2]|0;
    $8 = $62;
    while(1) {
     $63 = $8;
     $64 = ($63|0)!=(0|0);
     if ($64) {
      $65 = $8;
      $66 = HEAP32[$65>>2]|0;
      $67 = $9;
      $68 = HEAP32[$67>>2]|0;
      $69 = ($66|0)<($68|0);
      $85 = $69;
     } else {
      $85 = 0;
     }
     $70 = $8;
     if (!($85)) {
      break;
     }
     $7 = $70;
     $71 = $7;
     $72 = ((($71)) + 8|0);
     $73 = HEAP32[$72>>2]|0;
     $8 = $73;
    }
    $74 = $9;
    $75 = ((($74)) + 8|0);
    HEAP32[$75>>2] = $70;
    $76 = $9;
    $77 = $7;
    $78 = ((($77)) + 8|0);
    HEAP32[$78>>2] = $76;
    $79 = $5;
    $80 = ((($79)) + 13092|0);
    $81 = HEAP32[$80>>2]|0;
    $82 = (($81) + 1)|0;
    HEAP32[$80>>2] = $82;
    $83 = $9;
    $7 = $83;
   }
   if ((label|0) == 12) {
    $3 = -2;
    $84 = $3;
    STACKTOP = sp;return ($84|0);
   }
   else if ((label|0) == 14) {
    $3 = 0;
    $84 = $3;
    STACKTOP = sp;return ($84|0);
   }
  }
 }
 $3 = -1;
 $84 = $3;
 STACKTOP = sp;return ($84|0);
}
function _free_midi_list($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $4 = $1;
 $5 = ((($4)) + 13084|0);
 $6 = HEAP32[$5>>2]|0;
 $2 = $6;
 $7 = ($6|0)!=(0|0);
 if (!($7)) {
  STACKTOP = sp;return;
 }
 while(1) {
  $8 = $2;
  $9 = ($8|0)!=(0|0);
  if (!($9)) {
   break;
  }
  $10 = $2;
  $11 = ((($10)) + 8|0);
  $12 = HEAP32[$11>>2]|0;
  $3 = $12;
  $13 = $2;
  _free($13);
  $14 = $3;
  $2 = $14;
 }
 $15 = $1;
 $16 = ((($15)) + 13084|0);
 HEAP32[$16>>2] = 0;
 STACKTOP = sp;return;
}
function _groom_list($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0;
 var $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0;
 var $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0;
 var $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0;
 var $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0;
 var $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0;
 var $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(272|0);
 $22 = sp + 128|0;
 $23 = sp + 64|0;
 $24 = sp;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $11 = 0;
 while(1) {
  $25 = $11;
  $26 = ($25|0)<(16);
  if (!($26)) {
   break;
  }
  $27 = $11;
  $28 = (($22) + ($27<<2)|0);
  HEAP32[$28>>2] = 0;
  $29 = $11;
  $30 = (($23) + ($29<<2)|0);
  HEAP32[$30>>2] = 0;
  $31 = $4;
  $32 = ((($31)) + 1056|0);
  $33 = HEAP32[$32>>2]|0;
  $34 = $11;
  $35 = (($24) + ($34<<2)|0);
  HEAP32[$35>>2] = $33;
  $36 = $11;
  $37 = (($36) + 1)|0;
  $11 = $37;
 }
 $13 = 500000;
 $38 = $4;
 $39 = $13;
 $40 = $5;
 _compute_sample_increment($38,$39,$40);
 $41 = $4;
 $42 = ((($41)) + 13092|0);
 $43 = HEAP32[$42>>2]|0;
 $44 = (($43) + 1)|0;
 $45 = $44<<3;
 $46 = (_safe_malloc($45)|0);
 $9 = $46;
 $8 = $46;
 $47 = $4;
 $48 = ((($47)) + 13084|0);
 $49 = HEAP32[$48>>2]|0;
 $10 = $49;
 $12 = 0;
 $16 = 0;
 $18 = 0;
 $19 = 0;
 $21 = 0;
 $11 = 0;
 while(1) {
  $50 = $11;
  $51 = $4;
  $52 = ((($51)) + 13092|0);
  $53 = HEAP32[$52>>2]|0;
  $54 = ($50|0)<($53|0);
  if (!($54)) {
   break;
  }
  $14 = 0;
  $55 = $10;
  $56 = ((($55)) + 5|0);
  $57 = HEAP8[$56>>0]|0;
  $58 = $57&255;
  L8: do {
   switch ($58|0) {
   case 9:  {
    $59 = $4;
    $60 = ((($59)) + 13056|0);
    $61 = HEAP32[$60>>2]|0;
    $62 = $10;
    $63 = ((($62)) + 4|0);
    $64 = HEAP8[$63>>0]|0;
    $65 = $64&255;
    $66 = 1 << $65;
    $67 = $61 & $66;
    $68 = ($67|0)!=(0);
    $69 = $10;
    $70 = ((($69)) + 6|0);
    $71 = HEAP8[$70>>0]|0;
    $72 = $71&255;
    if (!($68)) {
     $15 = $72;
     $96 = $10;
     $97 = ((($96)) + 4|0);
     $98 = HEAP8[$97>>0]|0;
     $99 = $98&255;
     $100 = (($24) + ($99<<2)|0);
     $101 = HEAP32[$100>>2]|0;
     $102 = ($101|0)!=(-1);
     if ($102) {
      $103 = $10;
      $104 = ((($103)) + 4|0);
      $105 = HEAP8[$104>>0]|0;
      $106 = $105&255;
      $107 = (($24) + ($106<<2)|0);
      $108 = HEAP32[$107>>2]|0;
      $109 = $15;
      $110 = ($108|0)!=($109|0);
      if ($110) {
       $111 = $15;
       $112 = $10;
       $113 = ((($112)) + 4|0);
       $114 = HEAP8[$113>>0]|0;
       $115 = $114&255;
       $116 = (($24) + ($115<<2)|0);
       HEAP32[$116>>2] = $111;
       break L8;
      }
     }
     $14 = 1;
     break L8;
    }
    $73 = $4;
    $74 = ((($73)) + 540|0);
    $75 = (($74) + ($72<<2)|0);
    $76 = HEAP32[$75>>2]|0;
    $77 = ($76|0)!=(0|0);
    $78 = $10;
    $79 = ((($78)) + 6|0);
    if ($77) {
     $80 = HEAP8[$79>>0]|0;
     $81 = $80&255;
     $15 = $81;
    } else {
     HEAP8[$79>>0] = 0;
     $15 = 0;
    }
    $82 = $10;
    $83 = ((($82)) + 4|0);
    $84 = HEAP8[$83>>0]|0;
    $85 = $84&255;
    $86 = (($23) + ($85<<2)|0);
    $87 = HEAP32[$86>>2]|0;
    $88 = $15;
    $89 = ($87|0)!=($88|0);
    if ($89) {
     $90 = $15;
     $91 = $10;
     $92 = ((($91)) + 4|0);
     $93 = HEAP8[$92>>0]|0;
     $94 = $93&255;
     $95 = (($23) + ($94<<2)|0);
     HEAP32[$95>>2] = $90;
     break L8;
    } else {
     $14 = 1;
     break L8;
    }
    break;
   }
   case 1:  {
    $117 = $21;
    $118 = ($117|0)!=(0);
    if ($118) {
     $21 = 1;
    }
    $119 = $4;
    $120 = ((($119)) + 13056|0);
    $121 = HEAP32[$120>>2]|0;
    $122 = $10;
    $123 = ((($122)) + 4|0);
    $124 = HEAP8[$123>>0]|0;
    $125 = $124&255;
    $126 = 1 << $125;
    $127 = $121 & $126;
    $128 = ($127|0)!=(0);
    $129 = $10;
    if ($128) {
     $130 = ((($129)) + 6|0);
     $131 = HEAP8[$130>>0]|0;
     $132 = $131&255;
     $133 = $10;
     $134 = ((($133)) + 4|0);
     $135 = HEAP8[$134>>0]|0;
     $136 = $135&255;
     $137 = (($23) + ($136<<2)|0);
     $138 = HEAP32[$137>>2]|0;
     $139 = $4;
     $140 = ((($139)) + 540|0);
     $141 = (($140) + ($138<<2)|0);
     $142 = HEAP32[$141>>2]|0;
     $143 = ((($142)) + 4|0);
     $144 = (($143) + ($132<<2)|0);
     $145 = HEAP32[$144>>2]|0;
     $146 = ($145|0)!=(0|0);
     if ($146) {
      break L8;
     }
     $147 = $10;
     $148 = ((($147)) + 6|0);
     $149 = HEAP8[$148>>0]|0;
     $150 = $149&255;
     $151 = $10;
     $152 = ((($151)) + 4|0);
     $153 = HEAP8[$152>>0]|0;
     $154 = $153&255;
     $155 = (($23) + ($154<<2)|0);
     $156 = HEAP32[$155>>2]|0;
     $157 = $4;
     $158 = ((($157)) + 540|0);
     $159 = (($158) + ($156<<2)|0);
     $160 = HEAP32[$159>>2]|0;
     $161 = ((($160)) + 4|0);
     $162 = (($161) + ($150<<2)|0);
     HEAP32[$162>>2] = (-1);
     break L8;
    }
    $163 = ((($129)) + 4|0);
    $164 = HEAP8[$163>>0]|0;
    $165 = $164&255;
    $166 = (($24) + ($165<<2)|0);
    $167 = HEAP32[$166>>2]|0;
    $168 = ($167|0)==(-1);
    if (!($168)) {
     $169 = $10;
     $170 = ((($169)) + 4|0);
     $171 = HEAP8[$170>>0]|0;
     $172 = $171&255;
     $173 = (($24) + ($172<<2)|0);
     $174 = HEAP32[$173>>2]|0;
     $175 = $10;
     $176 = ((($175)) + 4|0);
     $177 = HEAP8[$176>>0]|0;
     $178 = $177&255;
     $179 = (($22) + ($178<<2)|0);
     $180 = HEAP32[$179>>2]|0;
     $181 = $4;
     $182 = ((($181)) + 28|0);
     $183 = (($182) + ($180<<2)|0);
     $184 = HEAP32[$183>>2]|0;
     $185 = ((($184)) + 4|0);
     $186 = (($185) + ($174<<2)|0);
     $187 = HEAP32[$186>>2]|0;
     $188 = ($187|0)!=(0|0);
     if (!($188)) {
      $189 = $10;
      $190 = ((($189)) + 4|0);
      $191 = HEAP8[$190>>0]|0;
      $192 = $191&255;
      $193 = (($24) + ($192<<2)|0);
      $194 = HEAP32[$193>>2]|0;
      $195 = $10;
      $196 = ((($195)) + 4|0);
      $197 = HEAP8[$196>>0]|0;
      $198 = $197&255;
      $199 = (($22) + ($198<<2)|0);
      $200 = HEAP32[$199>>2]|0;
      $201 = $4;
      $202 = ((($201)) + 28|0);
      $203 = (($202) + ($200<<2)|0);
      $204 = HEAP32[$203>>2]|0;
      $205 = ((($204)) + 4|0);
      $206 = (($205) + ($194<<2)|0);
      HEAP32[$206>>2] = (-1);
     }
    }
    break;
   }
   case 15:  {
    $207 = $4;
    $208 = ((($207)) + 13056|0);
    $209 = HEAP32[$208>>2]|0;
    $210 = $10;
    $211 = ((($210)) + 4|0);
    $212 = HEAP8[$211>>0]|0;
    $213 = $212&255;
    $214 = 1 << $213;
    $215 = $209 & $214;
    $216 = ($215|0)!=(0);
    if ($216) {
     $14 = 1;
     break L8;
    }
    $217 = $10;
    $218 = ((($217)) + 6|0);
    $219 = HEAP8[$218>>0]|0;
    $220 = $219&255;
    $221 = $4;
    $222 = ((($221)) + 28|0);
    $223 = (($222) + ($220<<2)|0);
    $224 = HEAP32[$223>>2]|0;
    $225 = ($224|0)!=(0|0);
    $226 = $10;
    $227 = ((($226)) + 6|0);
    if ($225) {
     $228 = HEAP8[$227>>0]|0;
     $229 = $228&255;
     $15 = $229;
    } else {
     HEAP8[$227>>0] = 0;
     $15 = 0;
    }
    $230 = $10;
    $231 = ((($230)) + 4|0);
    $232 = HEAP8[$231>>0]|0;
    $233 = $232&255;
    $234 = (($22) + ($233<<2)|0);
    $235 = HEAP32[$234>>2]|0;
    $236 = $15;
    $237 = ($235|0)!=($236|0);
    if ($237) {
     $238 = $15;
     $239 = $10;
     $240 = ((($239)) + 4|0);
     $241 = HEAP8[$240>>0]|0;
     $242 = $241&255;
     $243 = (($22) + ($242<<2)|0);
     HEAP32[$243>>2] = $238;
     break L8;
    } else {
     $14 = 1;
     break L8;
    }
    break;
   }
   default: {
   }
   }
  } while(0);
  $244 = $10;
  $245 = HEAP32[$244>>2]|0;
  $246 = $18;
  $247 = (($245) - ($246))|0;
  $20 = $247;
  $248 = ($247|0)==(0);
  $249 = $21;
  $250 = ($249|0)!=(0);
  $or$cond = $248 | $250;
  if ($or$cond) {
   $276 = $21;
   $277 = ($276|0)==(1);
   if ($277) {
    $21 = 0;
   }
  } else {
   $251 = $4;
   $252 = ((($251)) + 1076|0);
   $253 = HEAP32[$252>>2]|0;
   $254 = $20;
   $255 = Math_imul($253, $254)|0;
   $17 = $255;
   $256 = $4;
   $257 = ((($256)) + 1080|0);
   $258 = HEAP32[$257>>2]|0;
   $259 = $20;
   $260 = Math_imul($258, $259)|0;
   $261 = $16;
   $262 = (($261) + ($260))|0;
   $16 = $262;
   $263 = $16;
   $264 = $263 & -65536;
   $265 = ($264|0)!=(0);
   if ($265) {
    $266 = $16;
    $267 = $266 >> 16;
    $268 = $267 & 65535;
    $269 = $17;
    $270 = (($269) + ($268))|0;
    $17 = $270;
    $271 = $16;
    $272 = $271 & 65535;
    $16 = $272;
   }
   $273 = $17;
   $274 = $19;
   $275 = (($274) + ($273))|0;
   $19 = $275;
  }
  $278 = $10;
  $279 = ((($278)) + 5|0);
  $280 = HEAP8[$279>>0]|0;
  $281 = $280&255;
  $282 = ($281|0)==(10);
  if ($282) {
   $283 = $10;
   $284 = ((($283)) + 4|0);
   $285 = HEAP8[$284>>0]|0;
   $286 = $285&255;
   $287 = $10;
   $288 = ((($287)) + 7|0);
   $289 = HEAP8[$288>>0]|0;
   $290 = $289&255;
   $291 = $290<<8;
   $292 = (($286) + ($291))|0;
   $293 = $10;
   $294 = ((($293)) + 6|0);
   $295 = HEAP8[$294>>0]|0;
   $296 = $295&255;
   $297 = $296<<16;
   $298 = (($292) + ($297))|0;
   $13 = $298;
   $299 = $4;
   $300 = $13;
   $301 = $5;
   _compute_sample_increment($299,$300,$301);
  }
  $302 = $14;
  $303 = ($302|0)!=(0);
  if (!($303)) {
   $304 = $9;
   $305 = $10;
   ;HEAP32[$304>>2]=HEAP32[$305>>2]|0;HEAP32[$304+4>>2]=HEAP32[$305+4>>2]|0;
   $306 = $19;
   $307 = $9;
   HEAP32[$307>>2] = $306;
   $308 = $9;
   $309 = ((($308)) + 8|0);
   $9 = $309;
   $310 = $12;
   $311 = (($310) + 1)|0;
   $12 = $311;
  }
  $312 = $10;
  $313 = HEAP32[$312>>2]|0;
  $18 = $313;
  $314 = $10;
  $315 = ((($314)) + 8|0);
  $316 = HEAP32[$315>>2]|0;
  $10 = $316;
  $317 = $11;
  $318 = (($317) + 1)|0;
  $11 = $318;
 }
 $319 = $19;
 $320 = $9;
 HEAP32[$320>>2] = $319;
 $321 = $9;
 $322 = ((($321)) + 5|0);
 HEAP8[$322>>0] = 99;
 $323 = $12;
 $324 = (($323) + 1)|0;
 $12 = $324;
 $325 = $4;
 _free_midi_list($325);
 $326 = $12;
 $327 = $6;
 HEAP32[$327>>2] = $326;
 $328 = $19;
 $329 = $7;
 HEAP32[$329>>2] = $328;
 $330 = $8;
 STACKTOP = sp;return ($330|0);
}
function _compute_sample_increment($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0.0, $7 = 0, $8 = 0.0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $7 = $4;
 $8 = (+($7|0));
 $9 = $3;
 $10 = ((($9)) + 4|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = (+($11|0));
 $13 = $8 * $12;
 $14 = $13 * 0.065535999999999997;
 $15 = $5;
 $16 = (+($15|0));
 $17 = $14 / $16;
 $6 = $17;
 $18 = $6;
 $19 = (~~(($18)));
 $20 = $19 & 65535;
 $21 = $3;
 $22 = ((($21)) + 1080|0);
 HEAP32[$22>>2] = $20;
 $23 = $6;
 $24 = (~~(($23)));
 $25 = $24 >> 16;
 $26 = $3;
 $27 = ((($26)) + 1076|0);
 HEAP32[$27>>2] = $25;
 STACKTOP = sp;return;
}
function _read_midi_event($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0;
 var $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $switch$split2D = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = sp + 28|0;
 $6 = sp + 27|0;
 $7 = sp + 26|0;
 $8 = sp + 25|0;
 $9 = sp + 24|0;
 $3 = $0;
 $4 = $1;
 L1: while(1) {
  $13 = $3;
  $14 = (_getvl($13)|0);
  $15 = $4;
  $16 = ((($15)) + 13096|0);
  $17 = HEAP32[$16>>2]|0;
  $18 = (($17) + ($14))|0;
  HEAP32[$16>>2] = $18;
  $19 = $3;
  $20 = (_mid_istream_read($19,$5,1,1)|0);
  $21 = ($20|0)!=(1);
  if ($21) {
   label = 3;
   break;
  }
  $22 = HEAP8[$5>>0]|0;
  $23 = $22&255;
  $24 = ($23|0)==(240);
  if (!($24)) {
   $25 = HEAP8[$5>>0]|0;
   $26 = $25&255;
   $27 = ($26|0)==(247);
   if (!($27)) {
    $32 = HEAP8[$5>>0]|0;
    $33 = $32&255;
    $34 = ($33|0)==(255);
    if ($34) {
     $35 = $3;
     (_mid_istream_read($35,$6,1,1)|0);
     $36 = $3;
     $37 = (_getvl($36)|0);
     $10 = $37;
     $38 = HEAP8[$6>>0]|0;
     $39 = $38&255;
     $40 = ($39|0)>(0);
     if ($40) {
      $41 = HEAP8[$6>>0]|0;
      $42 = $41&255;
      $43 = ($42|0)<(16);
      if ($43) {
       $44 = $3;
       $45 = $10;
       $46 = HEAP8[$6>>0]|0;
       $47 = $4;
       (_read_meta_data($44,$45,$46,$47)|0);
       continue;
      }
     }
     $48 = HEAP8[$6>>0]|0;
     $49 = $48&255;
     switch ($49|0) {
     case 47:  {
      label = 12;
      break L1;
      break;
     }
     case 81:  {
      label = 13;
      break L1;
      break;
     }
     default: {
     }
     }
     $72 = $3;
     $73 = $10;
     _mid_istream_skip($72,$73);
     continue;
    }
    $74 = HEAP8[$5>>0]|0;
    HEAP8[$7>>0] = $74;
    $75 = HEAP8[$7>>0]|0;
    $76 = $75&255;
    $77 = $76 & 128;
    $78 = ($77|0)!=(0);
    if ($78) {
     $79 = HEAP8[$7>>0]|0;
     $80 = $79&255;
     $81 = $80 & 15;
     $82 = $81&255;
     HEAP8[10516] = $82;
     $83 = HEAP8[$7>>0]|0;
     $84 = $83&255;
     $85 = $84 >> 4;
     $86 = $85 & 7;
     $87 = $86&255;
     HEAP8[10517] = $87;
     $88 = $3;
     (_mid_istream_read($88,$7,1,1)|0);
     $89 = HEAP8[$7>>0]|0;
     $90 = $89&255;
     $91 = $90 & 127;
     $92 = $91&255;
     HEAP8[$7>>0] = $92;
    }
    $93 = HEAP8[10517]|0;
    $94 = $93&255;
    switch ($94|0) {
    case 0:  {
     label = 18;
     break L1;
     break;
    }
    case 1:  {
     label = 19;
     break L1;
     break;
    }
    case 2:  {
     label = 20;
     break L1;
     break;
    }
    case 4:  {
     label = 42;
     break L1;
     break;
    }
    case 6:  {
     label = 43;
     break L1;
     break;
    }
    case 3:  {
     break;
    }
    default: {
     continue L1;
    }
    }
    $167 = $3;
    (_mid_istream_read($167,$8,1,1)|0);
    $168 = HEAP8[$8>>0]|0;
    $169 = $168&255;
    $170 = $169 & 127;
    $171 = $170&255;
    HEAP8[$8>>0] = $171;
    $12 = 255;
    $172 = HEAP8[$7>>0]|0;
    $173 = $172&255;
    L19: do {
     switch ($173|0) {
     case 7:  {
      $12 = 4;
      break;
     }
     case 10:  {
      $12 = 5;
      break;
     }
     case 11:  {
      $12 = 7;
      break;
     }
     case 64:  {
      $12 = 6;
      break;
     }
     case 120:  {
      $12 = 12;
      break;
     }
     case 121:  {
      $12 = 13;
      break;
     }
     case 123:  {
      $12 = 14;
      break;
     }
     case 0:  {
      $12 = 15;
      break;
     }
     case 32:  {
      $174 = HEAP8[$8>>0]|0;
      $175 = $174&255;
      $176 = ($175|0)!=(0);
      if (!($176)) {
       $12 = 15;
      }
      break;
     }
     case 100:  {
      HEAP8[10518] = 0;
      $177 = HEAP8[$8>>0]|0;
      $178 = HEAP8[10516]|0;
      $179 = $178&255;
      $180 = (10519 + ($179)|0);
      HEAP8[$180>>0] = $177;
      break;
     }
     case 101:  {
      HEAP8[10518] = 0;
      $181 = HEAP8[$8>>0]|0;
      $182 = HEAP8[10516]|0;
      $183 = $182&255;
      $184 = (10535 + ($183)|0);
      HEAP8[$184>>0] = $181;
      break;
     }
     case 99:  {
      HEAP8[10518] = 1;
      $185 = HEAP8[$8>>0]|0;
      $186 = HEAP8[10516]|0;
      $187 = $186&255;
      $188 = (10519 + ($187)|0);
      HEAP8[$188>>0] = $185;
      break;
     }
     case 98:  {
      HEAP8[10518] = 1;
      $189 = HEAP8[$8>>0]|0;
      $190 = HEAP8[10516]|0;
      $191 = $190&255;
      $192 = (10535 + ($191)|0);
      HEAP8[$192>>0] = $189;
      break;
     }
     case 6:  {
      $193 = HEAP8[10518]|0;
      $194 = ($193<<24>>24)!=(0);
      if (!($194)) {
       $195 = HEAP8[10516]|0;
       $196 = $195&255;
       $197 = (10519 + ($196)|0);
       $198 = HEAP8[$197>>0]|0;
       $199 = $198&255;
       $200 = $199 << 8;
       $201 = HEAP8[10516]|0;
       $202 = $201&255;
       $203 = (10535 + ($202)|0);
       $204 = HEAP8[$203>>0]|0;
       $205 = $204&255;
       $206 = $200 | $205;
       $switch$split2D = ($206|0)<(32639);
       if (!($switch$split2D)) {
        switch ($206|0) {
        case 32639:  {
         label = 39;
         break L1;
         break;
        }
        default: {
         break L19;
        }
        }
       }
       switch ($206|0) {
       case 0:  {
        break;
       }
       default: {
        break L19;
       }
       }
       $12 = 11;
      }
      break;
     }
     default: {
     }
     }
    } while(0);
    $224 = $12;
    $225 = ($224|0)!=(255);
    if ($225) {
     label = 41;
     break;
    } else {
     continue;
    }
   }
  }
  $28 = $3;
  $29 = (_getvl($28)|0);
  $10 = $29;
  $30 = $3;
  $31 = $10;
  _mid_istream_skip($30,$31);
 }
 switch (label|0) {
  case 3: {
   $2 = 0;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 12: {
   $2 = (-1);
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 13: {
   $50 = $3;
   (_mid_istream_read($50,$7,1,1)|0);
   $51 = $3;
   (_mid_istream_read($51,$8,1,1)|0);
   $52 = $3;
   (_mid_istream_read($52,$9,1,1)|0);
   $53 = (_safe_malloc(12)|0);
   $11 = $53;
   $54 = $4;
   $55 = ((($54)) + 13096|0);
   $56 = HEAP32[$55>>2]|0;
   $57 = $11;
   HEAP32[$57>>2] = $56;
   $58 = $11;
   $59 = ((($58)) + 5|0);
   HEAP8[$59>>0] = 10;
   $60 = HEAP8[$9>>0]|0;
   $61 = $11;
   $62 = ((($61)) + 4|0);
   HEAP8[$62>>0] = $60;
   $63 = HEAP8[$7>>0]|0;
   $64 = $11;
   $65 = ((($64)) + 6|0);
   HEAP8[$65>>0] = $63;
   $66 = HEAP8[$8>>0]|0;
   $67 = $11;
   $68 = ((($67)) + 7|0);
   HEAP8[$68>>0] = $66;
   $69 = $11;
   $70 = ((($69)) + 8|0);
   HEAP32[$70>>2] = 0;
   $71 = $11;
   $2 = $71;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 18: {
   $95 = $3;
   (_mid_istream_read($95,$8,1,1)|0);
   $96 = HEAP8[$8>>0]|0;
   $97 = $96&255;
   $98 = $97 & 127;
   $99 = $98&255;
   HEAP8[$8>>0] = $99;
   $100 = (_safe_malloc(12)|0);
   $11 = $100;
   $101 = $4;
   $102 = ((($101)) + 13096|0);
   $103 = HEAP32[$102>>2]|0;
   $104 = $11;
   HEAP32[$104>>2] = $103;
   $105 = $11;
   $106 = ((($105)) + 5|0);
   HEAP8[$106>>0] = 2;
   $107 = HEAP8[10516]|0;
   $108 = $11;
   $109 = ((($108)) + 4|0);
   HEAP8[$109>>0] = $107;
   $110 = HEAP8[$7>>0]|0;
   $111 = $11;
   $112 = ((($111)) + 6|0);
   HEAP8[$112>>0] = $110;
   $113 = HEAP8[$8>>0]|0;
   $114 = $11;
   $115 = ((($114)) + 7|0);
   HEAP8[$115>>0] = $113;
   $116 = $11;
   $117 = ((($116)) + 8|0);
   HEAP32[$117>>2] = 0;
   $118 = $11;
   $2 = $118;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 19: {
   $119 = $3;
   (_mid_istream_read($119,$8,1,1)|0);
   $120 = HEAP8[$8>>0]|0;
   $121 = $120&255;
   $122 = $121 & 127;
   $123 = $122&255;
   HEAP8[$8>>0] = $123;
   $124 = (_safe_malloc(12)|0);
   $11 = $124;
   $125 = $4;
   $126 = ((($125)) + 13096|0);
   $127 = HEAP32[$126>>2]|0;
   $128 = $11;
   HEAP32[$128>>2] = $127;
   $129 = $11;
   $130 = ((($129)) + 5|0);
   HEAP8[$130>>0] = 1;
   $131 = HEAP8[10516]|0;
   $132 = $11;
   $133 = ((($132)) + 4|0);
   HEAP8[$133>>0] = $131;
   $134 = HEAP8[$7>>0]|0;
   $135 = $11;
   $136 = ((($135)) + 6|0);
   HEAP8[$136>>0] = $134;
   $137 = HEAP8[$8>>0]|0;
   $138 = $11;
   $139 = ((($138)) + 7|0);
   HEAP8[$139>>0] = $137;
   $140 = $11;
   $141 = ((($140)) + 8|0);
   HEAP32[$141>>2] = 0;
   $142 = $11;
   $2 = $142;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 20: {
   $143 = $3;
   (_mid_istream_read($143,$8,1,1)|0);
   $144 = HEAP8[$8>>0]|0;
   $145 = $144&255;
   $146 = $145 & 127;
   $147 = $146&255;
   HEAP8[$8>>0] = $147;
   $148 = (_safe_malloc(12)|0);
   $11 = $148;
   $149 = $4;
   $150 = ((($149)) + 13096|0);
   $151 = HEAP32[$150>>2]|0;
   $152 = $11;
   HEAP32[$152>>2] = $151;
   $153 = $11;
   $154 = ((($153)) + 5|0);
   HEAP8[$154>>0] = 3;
   $155 = HEAP8[10516]|0;
   $156 = $11;
   $157 = ((($156)) + 4|0);
   HEAP8[$157>>0] = $155;
   $158 = HEAP8[$7>>0]|0;
   $159 = $11;
   $160 = ((($159)) + 6|0);
   HEAP8[$160>>0] = $158;
   $161 = HEAP8[$8>>0]|0;
   $162 = $11;
   $163 = ((($162)) + 7|0);
   HEAP8[$163>>0] = $161;
   $164 = $11;
   $165 = ((($164)) + 8|0);
   HEAP32[$165>>2] = 0;
   $166 = $11;
   $2 = $166;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 39: {
   $207 = (_safe_malloc(12)|0);
   $11 = $207;
   $208 = $4;
   $209 = ((($208)) + 13096|0);
   $210 = HEAP32[$209>>2]|0;
   $211 = $11;
   HEAP32[$211>>2] = $210;
   $212 = $11;
   $213 = ((($212)) + 5|0);
   HEAP8[$213>>0] = 11;
   $214 = HEAP8[10516]|0;
   $215 = $11;
   $216 = ((($215)) + 4|0);
   HEAP8[$216>>0] = $214;
   $217 = $11;
   $218 = ((($217)) + 6|0);
   HEAP8[$218>>0] = 2;
   $219 = $11;
   $220 = ((($219)) + 7|0);
   HEAP8[$220>>0] = 0;
   $221 = $11;
   $222 = ((($221)) + 8|0);
   HEAP32[$222>>2] = 0;
   $223 = $11;
   $2 = $223;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 41: {
   $226 = (_safe_malloc(12)|0);
   $11 = $226;
   $227 = $4;
   $228 = ((($227)) + 13096|0);
   $229 = HEAP32[$228>>2]|0;
   $230 = $11;
   HEAP32[$230>>2] = $229;
   $231 = $12;
   $232 = $231&255;
   $233 = $11;
   $234 = ((($233)) + 5|0);
   HEAP8[$234>>0] = $232;
   $235 = HEAP8[10516]|0;
   $236 = $11;
   $237 = ((($236)) + 4|0);
   HEAP8[$237>>0] = $235;
   $238 = HEAP8[$8>>0]|0;
   $239 = $11;
   $240 = ((($239)) + 6|0);
   HEAP8[$240>>0] = $238;
   $241 = $11;
   $242 = ((($241)) + 7|0);
   HEAP8[$242>>0] = 0;
   $243 = $11;
   $244 = ((($243)) + 8|0);
   HEAP32[$244>>2] = 0;
   $245 = $11;
   $2 = $245;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 42: {
   $246 = HEAP8[$7>>0]|0;
   $247 = $246&255;
   $248 = $247 & 127;
   $249 = $248&255;
   HEAP8[$7>>0] = $249;
   $250 = (_safe_malloc(12)|0);
   $11 = $250;
   $251 = $4;
   $252 = ((($251)) + 13096|0);
   $253 = HEAP32[$252>>2]|0;
   $254 = $11;
   HEAP32[$254>>2] = $253;
   $255 = $11;
   $256 = ((($255)) + 5|0);
   HEAP8[$256>>0] = 9;
   $257 = HEAP8[10516]|0;
   $258 = $11;
   $259 = ((($258)) + 4|0);
   HEAP8[$259>>0] = $257;
   $260 = HEAP8[$7>>0]|0;
   $261 = $11;
   $262 = ((($261)) + 6|0);
   HEAP8[$262>>0] = $260;
   $263 = $11;
   $264 = ((($263)) + 7|0);
   HEAP8[$264>>0] = 0;
   $265 = $11;
   $266 = ((($265)) + 8|0);
   HEAP32[$266>>2] = 0;
   $267 = $11;
   $2 = $267;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
  case 43: {
   $268 = $3;
   (_mid_istream_read($268,$8,1,1)|0);
   $269 = HEAP8[$8>>0]|0;
   $270 = $269&255;
   $271 = $270 & 127;
   $272 = $271&255;
   HEAP8[$8>>0] = $272;
   $273 = (_safe_malloc(12)|0);
   $11 = $273;
   $274 = $4;
   $275 = ((($274)) + 13096|0);
   $276 = HEAP32[$275>>2]|0;
   $277 = $11;
   HEAP32[$277>>2] = $276;
   $278 = $11;
   $279 = ((($278)) + 5|0);
   HEAP8[$279>>0] = 8;
   $280 = HEAP8[10516]|0;
   $281 = $11;
   $282 = ((($281)) + 4|0);
   HEAP8[$282>>0] = $280;
   $283 = HEAP8[$7>>0]|0;
   $284 = $11;
   $285 = ((($284)) + 6|0);
   HEAP8[$285>>0] = $283;
   $286 = HEAP8[$8>>0]|0;
   $287 = $11;
   $288 = ((($287)) + 7|0);
   HEAP8[$288>>0] = $286;
   $289 = $11;
   $290 = ((($289)) + 8|0);
   HEAP32[$290>>2] = 0;
   $291 = $11;
   $2 = $291;
   $292 = $2;
   STACKTOP = sp;return ($292|0);
   break;
  }
 }
 return (0)|0;
}
function _getvl($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = sp + 8|0;
 $1 = $0;
 $2 = 0;
 while(1) {
  $4 = $1;
  (_mid_istream_read($4,$3,1,1)|0);
  $5 = HEAP8[$3>>0]|0;
  $6 = $5&255;
  $7 = $6 & 127;
  $8 = $2;
  $9 = (($8) + ($7))|0;
  $2 = $9;
  $10 = HEAP8[$3>>0]|0;
  $11 = $10&255;
  $12 = $11 & 128;
  $13 = ($12|0)!=(0);
  $14 = $2;
  if (!($13)) {
   break;
  }
  $15 = $14 << 7;
  $2 = $15;
 }
 STACKTOP = sp;return ($14|0);
}
function _read_meta_data($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $11 = $6;
 $12 = (($11) + 1)|0;
 $13 = (_safe_malloc($12)|0);
 $9 = $13;
 $14 = $6;
 $15 = $5;
 $16 = $9;
 $17 = $6;
 $18 = (_mid_istream_read($15,$16,1,$17)|0);
 $19 = ($14|0)!=($18|0);
 if ($19) {
  $20 = $9;
  _free($20);
  $4 = -1;
  $57 = $4;
  STACKTOP = sp;return ($57|0);
 }
 $21 = $6;
 $22 = $9;
 $23 = (($22) + ($21)|0);
 HEAP8[$23>>0] = 0;
 while(1) {
  $24 = $6;
  $25 = (($24) + -1)|0;
  $6 = $25;
  $26 = ($24|0)!=(0);
  if (!($26)) {
   break;
  }
  $27 = $6;
  $28 = $9;
  $29 = (($28) + ($27)|0);
  $30 = HEAP8[$29>>0]|0;
  $31 = $30&255;
  $32 = ($31|0)<(32);
  if (!($32)) {
   continue;
  }
  $33 = $6;
  $34 = $9;
  $35 = (($34) + ($33)|0);
  HEAP8[$35>>0] = 46;
 }
 $36 = $7;
 $37 = $36&255;
 switch ($37|0) {
 case 1:  {
  $10 = 0;
  break;
 }
 case 2:  {
  $10 = 1;
  break;
 }
 default: {
  $38 = $9;
  _free($38);
  $9 = 0;
 }
 }
 $39 = $9;
 $40 = ($39|0)!=(0|0);
 if ($40) {
  $41 = $10;
  $42 = $8;
  $43 = ((($42)) + 13104|0);
  $44 = (($43) + ($41<<2)|0);
  $45 = HEAP32[$44>>2]|0;
  $46 = ($45|0)!=(0|0);
  if ($46) {
   $47 = $10;
   $48 = $8;
   $49 = ((($48)) + 13104|0);
   $50 = (($49) + ($47<<2)|0);
   $51 = HEAP32[$50>>2]|0;
   _free($51);
  }
  $52 = $9;
  $53 = $10;
  $54 = $8;
  $55 = ((($54)) + 13104|0);
  $56 = (($55) + ($53<<2)|0);
  HEAP32[$56>>2] = $52;
 }
 $4 = 0;
 $57 = $4;
 STACKTOP = sp;return ($57|0);
}
function _resample_voice($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $10 = $5;
 $11 = $4;
 $12 = ((($11)) + 1724|0);
 $13 = (($12) + (($10*236)|0)|0);
 $9 = $13;
 $14 = $9;
 $15 = ((($14)) + 4|0);
 $16 = HEAP32[$15>>2]|0;
 $17 = ((($16)) + 12|0);
 $18 = HEAP32[$17>>2]|0;
 $19 = ($18|0)!=(0);
 $20 = $9;
 if (!($19)) {
  $21 = ((($20)) + 16|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = $22 >> 12;
  $7 = $23;
  $24 = $6;
  $25 = HEAP32[$24>>2]|0;
  $26 = $9;
  $27 = ((($26)) + 4|0);
  $28 = HEAP32[$27>>2]|0;
  $29 = ((($28)) + 8|0);
  $30 = HEAP32[$29>>2]|0;
  $31 = $30 >> 12;
  $32 = $7;
  $33 = (($31) - ($32))|0;
  $34 = ($25|0)>=($33|0);
  if ($34) {
   $35 = $9;
   HEAP8[$35>>0] = 0;
   $36 = $9;
   $37 = ((($36)) + 4|0);
   $38 = HEAP32[$37>>2]|0;
   $39 = ((($38)) + 8|0);
   $40 = HEAP32[$39>>2]|0;
   $41 = $40 >> 12;
   $42 = $7;
   $43 = (($41) - ($42))|0;
   $44 = $6;
   HEAP32[$44>>2] = $43;
  } else {
   $45 = $6;
   $46 = HEAP32[$45>>2]|0;
   $47 = $46 << 12;
   $48 = $9;
   $49 = ((($48)) + 16|0);
   $50 = HEAP32[$49>>2]|0;
   $51 = (($50) + ($47))|0;
   HEAP32[$49>>2] = $51;
  }
  $52 = $9;
  $53 = ((($52)) + 4|0);
  $54 = HEAP32[$53>>2]|0;
  $55 = ((($54)) + 88|0);
  $56 = HEAP32[$55>>2]|0;
  $57 = $7;
  $58 = (($56) + ($57<<1)|0);
  $3 = $58;
  $123 = $3;
  STACKTOP = sp;return ($123|0);
 }
 $59 = ((($20)) + 4|0);
 $60 = HEAP32[$59>>2]|0;
 $61 = ((($60)) + 110|0);
 $62 = HEAP8[$61>>0]|0;
 $8 = $62;
 $63 = $9;
 $64 = ((($63)) + 212|0);
 $65 = HEAP32[$64>>2]|0;
 $66 = ($65|0)!=(0);
 $67 = $8;
 $68 = $67&255;
 $69 = $68 & 4;
 $70 = ($69|0)!=(0);
 if ($66) {
  do {
   if ($70) {
    $71 = $8;
    $72 = $71&255;
    $73 = $72 & 64;
    $74 = ($73|0)!=(0);
    if (!($74)) {
     $75 = $9;
     $76 = HEAP8[$75>>0]|0;
     $77 = $76&255;
     $78 = ($77|0)==(1);
     if (!($78)) {
      $79 = $9;
      $80 = HEAP8[$79>>0]|0;
      $81 = $80&255;
      $82 = ($81|0)==(2);
      if (!($82)) {
       break;
      }
     }
    }
    $83 = $8;
    $84 = $83&255;
    $85 = $84 & 8;
    $86 = ($85|0)!=(0);
    $87 = $4;
    $88 = $9;
    $89 = $6;
    $90 = HEAP32[$89>>2]|0;
    if ($86) {
     $91 = (_rs_vib_bidir($87,$88,$90)|0);
     $3 = $91;
     $123 = $3;
     STACKTOP = sp;return ($123|0);
    } else {
     $92 = (_rs_vib_loop($87,$88,$90)|0);
     $3 = $92;
     $123 = $3;
     STACKTOP = sp;return ($123|0);
    }
   }
  } while(0);
  $93 = $4;
  $94 = $5;
  $95 = $6;
  $96 = (_rs_vib_plain($93,$94,$95)|0);
  $3 = $96;
  $123 = $3;
  STACKTOP = sp;return ($123|0);
 } else {
  do {
   if ($70) {
    $97 = $8;
    $98 = $97&255;
    $99 = $98 & 64;
    $100 = ($99|0)!=(0);
    if (!($100)) {
     $101 = $9;
     $102 = HEAP8[$101>>0]|0;
     $103 = $102&255;
     $104 = ($103|0)==(1);
     if (!($104)) {
      $105 = $9;
      $106 = HEAP8[$105>>0]|0;
      $107 = $106&255;
      $108 = ($107|0)==(2);
      if (!($108)) {
       break;
      }
     }
    }
    $109 = $8;
    $110 = $109&255;
    $111 = $110 & 8;
    $112 = ($111|0)!=(0);
    $113 = $4;
    $114 = $9;
    $115 = $6;
    $116 = HEAP32[$115>>2]|0;
    if ($112) {
     $117 = (_rs_bidir($113,$114,$116)|0);
     $3 = $117;
     $123 = $3;
     STACKTOP = sp;return ($123|0);
    } else {
     $118 = (_rs_loop($113,$114,$116)|0);
     $3 = $118;
     $123 = $3;
     STACKTOP = sp;return ($123|0);
    }
   }
  } while(0);
  $119 = $4;
  $120 = $5;
  $121 = $6;
  $122 = (_rs_plain($119,$120,$121)|0);
  $3 = $122;
  $123 = $3;
  STACKTOP = sp;return ($123|0);
 }
 return (0)|0;
}
function _rs_vib_bidir($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $19 = $4;
 $20 = ((($19)) + 16|0);
 $21 = HEAP32[$20>>2]|0;
 $8 = $21;
 $22 = $4;
 $23 = ((($22)) + 20|0);
 $24 = HEAP32[$23>>2]|0;
 $9 = $24;
 $25 = $4;
 $26 = ((($25)) + 4|0);
 $27 = HEAP32[$26>>2]|0;
 $28 = ((($27)) + 4|0);
 $29 = HEAP32[$28>>2]|0;
 $10 = $29;
 $30 = $4;
 $31 = ((($30)) + 4|0);
 $32 = HEAP32[$31>>2]|0;
 $33 = HEAP32[$32>>2]|0;
 $11 = $33;
 $34 = $3;
 $35 = ((($34)) + 1068|0);
 $36 = HEAP32[$35>>2]|0;
 $12 = $36;
 $37 = $4;
 $38 = ((($37)) + 4|0);
 $39 = HEAP32[$38>>2]|0;
 $40 = ((($39)) + 88|0);
 $41 = HEAP32[$40>>2]|0;
 $13 = $41;
 $42 = $4;
 $43 = ((($42)) + 216|0);
 $44 = HEAP32[$43>>2]|0;
 $14 = $44;
 $45 = $10;
 $46 = $45 << 1;
 $15 = $46;
 $47 = $11;
 $48 = $47 << 1;
 $16 = $48;
 $18 = 0;
 while(1) {
  $49 = $5;
  $50 = ($49|0)!=(0);
  if (!($50)) {
   break;
  }
  $51 = $8;
  $52 = $11;
  $53 = ($51|0)<=($52|0);
  if (!($53)) {
   break;
  }
  $54 = $11;
  $55 = $8;
  $56 = (($54) - ($55))|0;
  $57 = $9;
  $58 = (($56|0) / ($57|0))&-1;
  $59 = (($58) + 1)|0;
  $17 = $59;
  $60 = $17;
  $61 = $5;
  $62 = ($60|0)>($61|0);
  if ($62) {
   $63 = $5;
   $17 = $63;
  }
  $64 = $17;
  $65 = $14;
  $66 = ($64|0)>($65|0);
  if ($66) {
   $67 = $14;
   $17 = $67;
   $18 = 1;
  } else {
   $68 = $17;
   $69 = $14;
   $70 = (($69) - ($68))|0;
   $14 = $70;
  }
  $71 = $17;
  $72 = $5;
  $73 = (($72) - ($71))|0;
  $5 = $73;
  while(1) {
   $74 = $17;
   $75 = (($74) + -1)|0;
   $17 = $75;
   $76 = ($74|0)!=(0);
   if (!($76)) {
    break;
   }
   $77 = $8;
   $78 = $77 >> 12;
   $79 = $13;
   $80 = (($79) + ($78<<1)|0);
   $81 = HEAP16[$80>>1]|0;
   $6 = $81;
   $82 = $8;
   $83 = $82 >> 12;
   $84 = (($83) + 1)|0;
   $85 = $13;
   $86 = (($85) + ($84<<1)|0);
   $87 = HEAP16[$86>>1]|0;
   $7 = $87;
   $88 = $6;
   $89 = $88 << 16 >> 16;
   $90 = $7;
   $91 = $90 << 16 >> 16;
   $92 = $6;
   $93 = $92 << 16 >> 16;
   $94 = (($91) - ($93))|0;
   $95 = $8;
   $96 = $95 & 4095;
   $97 = Math_imul($94, $96)|0;
   $98 = $97 >>> 12;
   $99 = (($89) + ($98))|0;
   $100 = $99&65535;
   $101 = $12;
   $102 = ((($101)) + 2|0);
   $12 = $102;
   HEAP16[$101>>1] = $100;
   $103 = $9;
   $104 = $8;
   $105 = (($104) + ($103))|0;
   $8 = $105;
  }
  $106 = $18;
  $107 = ($106|0)!=(0);
  if (!($107)) {
   continue;
  }
  $108 = $4;
  $109 = ((($108)) + 212|0);
  $110 = HEAP32[$109>>2]|0;
  $14 = $110;
  $111 = $3;
  $112 = $4;
  $113 = (_update_vibrato($111,$112,0)|0);
  $9 = $113;
  $18 = 0;
 }
 while(1) {
  $114 = $5;
  $115 = ($114|0)!=(0);
  if (!($115)) {
   break;
  }
  $116 = $9;
  $117 = ($116|0)>(0);
  $118 = $10;
  $119 = $11;
  $120 = $117 ? $118 : $119;
  $121 = $8;
  $122 = (($120) - ($121))|0;
  $123 = $9;
  $124 = (($122|0) / ($123|0))&-1;
  $125 = (($124) + 1)|0;
  $17 = $125;
  $126 = $17;
  $127 = $5;
  $128 = ($126|0)>($127|0);
  if ($128) {
   $129 = $5;
   $17 = $129;
  }
  $130 = $17;
  $131 = $14;
  $132 = ($130|0)>($131|0);
  if ($132) {
   $133 = $14;
   $17 = $133;
   $18 = 1;
  } else {
   $134 = $17;
   $135 = $14;
   $136 = (($135) - ($134))|0;
   $14 = $136;
  }
  $137 = $17;
  $138 = $5;
  $139 = (($138) - ($137))|0;
  $5 = $139;
  while(1) {
   $140 = $17;
   $141 = (($140) + -1)|0;
   $17 = $141;
   $142 = ($140|0)!=(0);
   if (!($142)) {
    break;
   }
   $143 = $8;
   $144 = $143 >> 12;
   $145 = $13;
   $146 = (($145) + ($144<<1)|0);
   $147 = HEAP16[$146>>1]|0;
   $6 = $147;
   $148 = $8;
   $149 = $148 >> 12;
   $150 = (($149) + 1)|0;
   $151 = $13;
   $152 = (($151) + ($150<<1)|0);
   $153 = HEAP16[$152>>1]|0;
   $7 = $153;
   $154 = $6;
   $155 = $154 << 16 >> 16;
   $156 = $7;
   $157 = $156 << 16 >> 16;
   $158 = $6;
   $159 = $158 << 16 >> 16;
   $160 = (($157) - ($159))|0;
   $161 = $8;
   $162 = $161 & 4095;
   $163 = Math_imul($160, $162)|0;
   $164 = $163 >>> 12;
   $165 = (($155) + ($164))|0;
   $166 = $165&65535;
   $167 = $12;
   $168 = ((($167)) + 2|0);
   $12 = $168;
   HEAP16[$167>>1] = $166;
   $169 = $9;
   $170 = $8;
   $171 = (($170) + ($169))|0;
   $8 = $171;
  }
  $172 = $18;
  $173 = ($172|0)!=(0);
  if ($173) {
   $174 = $4;
   $175 = ((($174)) + 212|0);
   $176 = HEAP32[$175>>2]|0;
   $14 = $176;
   $177 = $3;
   $178 = $4;
   $179 = $9;
   $180 = ($179|0)<(0);
   $181 = $180&1;
   $182 = (_update_vibrato($177,$178,$181)|0);
   $9 = $182;
   $18 = 0;
  }
  $183 = $8;
  $184 = $10;
  $185 = ($183|0)>=($184|0);
  if ($185) {
   $186 = $15;
   $187 = $8;
   $188 = (($186) - ($187))|0;
   $8 = $188;
   $189 = $9;
   $190 = Math_imul($189, -1)|0;
   $9 = $190;
   continue;
  }
  $191 = $8;
  $192 = $11;
  $193 = ($191|0)<=($192|0);
  if (!($193)) {
   continue;
  }
  $194 = $16;
  $195 = $8;
  $196 = (($194) - ($195))|0;
  $8 = $196;
  $197 = $9;
  $198 = Math_imul($197, -1)|0;
  $9 = $198;
 }
 $199 = $14;
 $200 = $4;
 $201 = ((($200)) + 216|0);
 HEAP32[$201>>2] = $199;
 $202 = $9;
 $203 = $4;
 $204 = ((($203)) + 20|0);
 HEAP32[$204>>2] = $202;
 $205 = $8;
 $206 = $4;
 $207 = ((($206)) + 16|0);
 HEAP32[$207>>2] = $205;
 $208 = $3;
 $209 = ((($208)) + 1068|0);
 $210 = HEAP32[$209>>2]|0;
 STACKTOP = sp;return ($210|0);
}
function _rs_vib_loop($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0;
 var $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0;
 var $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $17 = $4;
 $18 = ((($17)) + 16|0);
 $19 = HEAP32[$18>>2]|0;
 $8 = $19;
 $20 = $4;
 $21 = ((($20)) + 20|0);
 $22 = HEAP32[$21>>2]|0;
 $9 = $22;
 $23 = $4;
 $24 = ((($23)) + 4|0);
 $25 = HEAP32[$24>>2]|0;
 $26 = ((($25)) + 4|0);
 $27 = HEAP32[$26>>2]|0;
 $10 = $27;
 $28 = $10;
 $29 = $4;
 $30 = ((($29)) + 4|0);
 $31 = HEAP32[$30>>2]|0;
 $32 = HEAP32[$31>>2]|0;
 $33 = (($28) - ($32))|0;
 $11 = $33;
 $34 = $3;
 $35 = ((($34)) + 1068|0);
 $36 = HEAP32[$35>>2]|0;
 $12 = $36;
 $37 = $4;
 $38 = ((($37)) + 4|0);
 $39 = HEAP32[$38>>2]|0;
 $40 = ((($39)) + 88|0);
 $41 = HEAP32[$40>>2]|0;
 $13 = $41;
 $42 = $4;
 $43 = ((($42)) + 216|0);
 $44 = HEAP32[$43>>2]|0;
 $14 = $44;
 $16 = 0;
 while(1) {
  $45 = $5;
  $46 = ($45|0)!=(0);
  if (!($46)) {
   break;
  }
  $47 = $8;
  $48 = $10;
  $49 = ($47|0)>=($48|0);
  if ($49) {
   $50 = $11;
   $51 = $8;
   $52 = (($51) - ($50))|0;
   $8 = $52;
  }
  $53 = $10;
  $54 = $8;
  $55 = (($53) - ($54))|0;
  $56 = $9;
  $57 = (($55|0) / ($56|0))&-1;
  $58 = (($57) + 1)|0;
  $15 = $58;
  $59 = $15;
  $60 = $5;
  $61 = ($59|0)>($60|0);
  if ($61) {
   $62 = $5;
   $15 = $62;
  }
  $63 = $15;
  $64 = $14;
  $65 = ($63|0)>($64|0);
  if ($65) {
   $66 = $14;
   $15 = $66;
   $16 = 1;
  } else {
   $67 = $15;
   $68 = $14;
   $69 = (($68) - ($67))|0;
   $14 = $69;
  }
  $70 = $15;
  $71 = $5;
  $72 = (($71) - ($70))|0;
  $5 = $72;
  while(1) {
   $73 = $15;
   $74 = (($73) + -1)|0;
   $15 = $74;
   $75 = ($73|0)!=(0);
   if (!($75)) {
    break;
   }
   $76 = $8;
   $77 = $76 >> 12;
   $78 = $13;
   $79 = (($78) + ($77<<1)|0);
   $80 = HEAP16[$79>>1]|0;
   $6 = $80;
   $81 = $8;
   $82 = $81 >> 12;
   $83 = (($82) + 1)|0;
   $84 = $13;
   $85 = (($84) + ($83<<1)|0);
   $86 = HEAP16[$85>>1]|0;
   $7 = $86;
   $87 = $6;
   $88 = $87 << 16 >> 16;
   $89 = $7;
   $90 = $89 << 16 >> 16;
   $91 = $6;
   $92 = $91 << 16 >> 16;
   $93 = (($90) - ($92))|0;
   $94 = $8;
   $95 = $94 & 4095;
   $96 = Math_imul($93, $95)|0;
   $97 = $96 >>> 12;
   $98 = (($88) + ($97))|0;
   $99 = $98&65535;
   $100 = $12;
   $101 = ((($100)) + 2|0);
   $12 = $101;
   HEAP16[$100>>1] = $99;
   $102 = $9;
   $103 = $8;
   $104 = (($103) + ($102))|0;
   $8 = $104;
  }
  $105 = $16;
  $106 = ($105|0)!=(0);
  if (!($106)) {
   continue;
  }
  $107 = $4;
  $108 = ((($107)) + 212|0);
  $109 = HEAP32[$108>>2]|0;
  $14 = $109;
  $110 = $3;
  $111 = $4;
  $112 = (_update_vibrato($110,$111,0)|0);
  $9 = $112;
  $16 = 0;
 }
 $113 = $14;
 $114 = $4;
 $115 = ((($114)) + 216|0);
 HEAP32[$115>>2] = $113;
 $116 = $9;
 $117 = $4;
 $118 = ((($117)) + 20|0);
 HEAP32[$118>>2] = $116;
 $119 = $8;
 $120 = $4;
 $121 = ((($120)) + 16|0);
 HEAP32[$121>>2] = $119;
 $122 = $3;
 $123 = ((($122)) + 1068|0);
 $124 = HEAP32[$123>>2]|0;
 STACKTOP = sp;return ($124|0);
}
function _rs_vib_plain($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $16 = $4;
 $17 = $3;
 $18 = ((($17)) + 1724|0);
 $19 = (($18) + (($16*236)|0)|0);
 $8 = $19;
 $20 = $3;
 $21 = ((($20)) + 1068|0);
 $22 = HEAP32[$21>>2]|0;
 $9 = $22;
 $23 = $8;
 $24 = ((($23)) + 4|0);
 $25 = HEAP32[$24>>2]|0;
 $26 = ((($25)) + 88|0);
 $27 = HEAP32[$26>>2]|0;
 $10 = $27;
 $28 = $8;
 $29 = ((($28)) + 4|0);
 $30 = HEAP32[$29>>2]|0;
 $31 = ((($30)) + 8|0);
 $32 = HEAP32[$31>>2]|0;
 $11 = $32;
 $33 = $8;
 $34 = ((($33)) + 16|0);
 $35 = HEAP32[$34>>2]|0;
 $12 = $35;
 $36 = $8;
 $37 = ((($36)) + 20|0);
 $38 = HEAP32[$37>>2]|0;
 $13 = $38;
 $39 = $5;
 $40 = HEAP32[$39>>2]|0;
 $14 = $40;
 $41 = $8;
 $42 = ((($41)) + 216|0);
 $43 = HEAP32[$42>>2]|0;
 $15 = $43;
 $44 = $13;
 $45 = ($44|0)<(0);
 if ($45) {
  $46 = $13;
  $47 = (0 - ($46))|0;
  $13 = $47;
 }
 while(1) {
  $48 = $14;
  $49 = (($48) + -1)|0;
  $14 = $49;
  $50 = ($48|0)!=(0);
  if (!($50)) {
   label = 10;
   break;
  }
  $51 = $15;
  $52 = (($51) + -1)|0;
  $15 = $52;
  $53 = ($51|0)!=(0);
  if (!($53)) {
   $54 = $8;
   $55 = ((($54)) + 212|0);
   $56 = HEAP32[$55>>2]|0;
   $15 = $56;
   $57 = $3;
   $58 = $8;
   $59 = (_update_vibrato($57,$58,0)|0);
   $13 = $59;
  }
  $60 = $12;
  $61 = $60 >> 12;
  $62 = $10;
  $63 = (($62) + ($61<<1)|0);
  $64 = HEAP16[$63>>1]|0;
  $6 = $64;
  $65 = $12;
  $66 = $65 >> 12;
  $67 = (($66) + 1)|0;
  $68 = $10;
  $69 = (($68) + ($67<<1)|0);
  $70 = HEAP16[$69>>1]|0;
  $7 = $70;
  $71 = $6;
  $72 = $71 << 16 >> 16;
  $73 = $7;
  $74 = $73 << 16 >> 16;
  $75 = $6;
  $76 = $75 << 16 >> 16;
  $77 = (($74) - ($76))|0;
  $78 = $12;
  $79 = $78 & 4095;
  $80 = Math_imul($77, $79)|0;
  $81 = $80 >>> 12;
  $82 = (($72) + ($81))|0;
  $83 = $82&65535;
  $84 = $9;
  $85 = ((($84)) + 2|0);
  $9 = $85;
  HEAP16[$84>>1] = $83;
  $86 = $13;
  $87 = $12;
  $88 = (($87) + ($86))|0;
  $12 = $88;
  $89 = $12;
  $90 = $11;
  $91 = ($89|0)>=($90|0);
  if ($91) {
   break;
  }
 }
 if ((label|0) == 10) {
  $108 = $15;
  $109 = $8;
  $110 = ((($109)) + 216|0);
  HEAP32[$110>>2] = $108;
  $111 = $13;
  $112 = $8;
  $113 = ((($112)) + 20|0);
  HEAP32[$113>>2] = $111;
  $114 = $12;
  $115 = $8;
  $116 = ((($115)) + 16|0);
  HEAP32[$116>>2] = $114;
  $117 = $3;
  $118 = ((($117)) + 1068|0);
  $119 = HEAP32[$118>>2]|0;
  STACKTOP = sp;return ($119|0);
 }
 $92 = $12;
 $93 = $11;
 $94 = ($92|0)==($93|0);
 if ($94) {
  $95 = $12;
  $96 = $95 >> 12;
  $97 = $10;
  $98 = (($97) + ($96<<1)|0);
  $99 = HEAP16[$98>>1]|0;
  $100 = $9;
  $101 = ((($100)) + 2|0);
  $9 = $101;
  HEAP16[$100>>1] = $99;
 }
 $102 = $8;
 HEAP8[$102>>0] = 0;
 $103 = $14;
 $104 = (($103) + 1)|0;
 $105 = $5;
 $106 = HEAP32[$105>>2]|0;
 $107 = (($106) - ($104))|0;
 HEAP32[$105>>2] = $107;
 $108 = $15;
 $109 = $8;
 $110 = ((($109)) + 216|0);
 HEAP32[$110>>2] = $108;
 $111 = $13;
 $112 = $8;
 $113 = ((($112)) + 20|0);
 HEAP32[$113>>2] = $111;
 $114 = $12;
 $115 = $8;
 $116 = ((($115)) + 16|0);
 HEAP32[$116>>2] = $114;
 $117 = $3;
 $118 = ((($117)) + 1068|0);
 $119 = HEAP32[$118>>2]|0;
 STACKTOP = sp;return ($119|0);
}
function _rs_bidir($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $17 = $4;
 $18 = ((($17)) + 16|0);
 $19 = HEAP32[$18>>2]|0;
 $8 = $19;
 $20 = $4;
 $21 = ((($20)) + 20|0);
 $22 = HEAP32[$21>>2]|0;
 $9 = $22;
 $23 = $4;
 $24 = ((($23)) + 4|0);
 $25 = HEAP32[$24>>2]|0;
 $26 = ((($25)) + 4|0);
 $27 = HEAP32[$26>>2]|0;
 $10 = $27;
 $28 = $4;
 $29 = ((($28)) + 4|0);
 $30 = HEAP32[$29>>2]|0;
 $31 = HEAP32[$30>>2]|0;
 $11 = $31;
 $32 = $3;
 $33 = ((($32)) + 1068|0);
 $34 = HEAP32[$33>>2]|0;
 $12 = $34;
 $35 = $4;
 $36 = ((($35)) + 4|0);
 $37 = HEAP32[$36>>2]|0;
 $38 = ((($37)) + 88|0);
 $39 = HEAP32[$38>>2]|0;
 $13 = $39;
 $40 = $10;
 $41 = $40 << 1;
 $14 = $41;
 $42 = $11;
 $43 = $42 << 1;
 $15 = $43;
 $44 = $8;
 $45 = $11;
 $46 = ($44|0)<=($45|0);
 L1: do {
  if ($46) {
   $47 = $11;
   $48 = $8;
   $49 = (($47) - ($48))|0;
   $50 = $9;
   $51 = (($49|0) / ($50|0))&-1;
   $52 = (($51) + 1)|0;
   $16 = $52;
   $53 = $16;
   $54 = $5;
   $55 = ($53|0)>($54|0);
   if ($55) {
    $56 = $5;
    $16 = $56;
    $5 = 0;
   } else {
    $57 = $16;
    $58 = $5;
    $59 = (($58) - ($57))|0;
    $5 = $59;
   }
   while(1) {
    $60 = $16;
    $61 = (($60) + -1)|0;
    $16 = $61;
    $62 = ($60|0)!=(0);
    if (!($62)) {
     break L1;
    }
    $63 = $8;
    $64 = $63 >> 12;
    $65 = $13;
    $66 = (($65) + ($64<<1)|0);
    $67 = HEAP16[$66>>1]|0;
    $6 = $67;
    $68 = $8;
    $69 = $68 >> 12;
    $70 = (($69) + 1)|0;
    $71 = $13;
    $72 = (($71) + ($70<<1)|0);
    $73 = HEAP16[$72>>1]|0;
    $7 = $73;
    $74 = $6;
    $75 = $74 << 16 >> 16;
    $76 = $7;
    $77 = $76 << 16 >> 16;
    $78 = $6;
    $79 = $78 << 16 >> 16;
    $80 = (($77) - ($79))|0;
    $81 = $8;
    $82 = $81 & 4095;
    $83 = Math_imul($80, $82)|0;
    $84 = $83 >>> 12;
    $85 = (($75) + ($84))|0;
    $86 = $85&65535;
    $87 = $12;
    $88 = ((($87)) + 2|0);
    $12 = $88;
    HEAP16[$87>>1] = $86;
    $89 = $9;
    $90 = $8;
    $91 = (($90) + ($89))|0;
    $8 = $91;
   }
  }
 } while(0);
 while(1) {
  $92 = $5;
  $93 = ($92|0)!=(0);
  $94 = $9;
  if (!($93)) {
   break;
  }
  $95 = ($94|0)>(0);
  $96 = $10;
  $97 = $11;
  $98 = $95 ? $96 : $97;
  $99 = $8;
  $100 = (($98) - ($99))|0;
  $101 = $9;
  $102 = (($100|0) / ($101|0))&-1;
  $103 = (($102) + 1)|0;
  $16 = $103;
  $104 = $16;
  $105 = $5;
  $106 = ($104|0)>($105|0);
  if ($106) {
   $107 = $5;
   $16 = $107;
   $5 = 0;
  } else {
   $108 = $16;
   $109 = $5;
   $110 = (($109) - ($108))|0;
   $5 = $110;
  }
  while(1) {
   $111 = $16;
   $112 = (($111) + -1)|0;
   $16 = $112;
   $113 = ($111|0)!=(0);
   $114 = $8;
   if (!($113)) {
    break;
   }
   $115 = $114 >> 12;
   $116 = $13;
   $117 = (($116) + ($115<<1)|0);
   $118 = HEAP16[$117>>1]|0;
   $6 = $118;
   $119 = $8;
   $120 = $119 >> 12;
   $121 = (($120) + 1)|0;
   $122 = $13;
   $123 = (($122) + ($121<<1)|0);
   $124 = HEAP16[$123>>1]|0;
   $7 = $124;
   $125 = $6;
   $126 = $125 << 16 >> 16;
   $127 = $7;
   $128 = $127 << 16 >> 16;
   $129 = $6;
   $130 = $129 << 16 >> 16;
   $131 = (($128) - ($130))|0;
   $132 = $8;
   $133 = $132 & 4095;
   $134 = Math_imul($131, $133)|0;
   $135 = $134 >>> 12;
   $136 = (($126) + ($135))|0;
   $137 = $136&65535;
   $138 = $12;
   $139 = ((($138)) + 2|0);
   $12 = $139;
   HEAP16[$138>>1] = $137;
   $140 = $9;
   $141 = $8;
   $142 = (($141) + ($140))|0;
   $8 = $142;
  }
  $143 = $10;
  $144 = ($114|0)>=($143|0);
  if ($144) {
   $145 = $14;
   $146 = $8;
   $147 = (($145) - ($146))|0;
   $8 = $147;
   $148 = $9;
   $149 = Math_imul($148, -1)|0;
   $9 = $149;
   continue;
  }
  $150 = $8;
  $151 = $11;
  $152 = ($150|0)<=($151|0);
  if (!($152)) {
   continue;
  }
  $153 = $15;
  $154 = $8;
  $155 = (($153) - ($154))|0;
  $8 = $155;
  $156 = $9;
  $157 = Math_imul($156, -1)|0;
  $9 = $157;
 }
 $158 = $4;
 $159 = ((($158)) + 20|0);
 HEAP32[$159>>2] = $94;
 $160 = $8;
 $161 = $4;
 $162 = ((($161)) + 16|0);
 HEAP32[$162>>2] = $160;
 $163 = $3;
 $164 = ((($163)) + 1068|0);
 $165 = HEAP32[$164>>2]|0;
 STACKTOP = sp;return ($165|0);
}
function _rs_loop($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $15 = $4;
 $16 = ((($15)) + 16|0);
 $17 = HEAP32[$16>>2]|0;
 $8 = $17;
 $18 = $4;
 $19 = ((($18)) + 20|0);
 $20 = HEAP32[$19>>2]|0;
 $9 = $20;
 $21 = $4;
 $22 = ((($21)) + 4|0);
 $23 = HEAP32[$22>>2]|0;
 $24 = ((($23)) + 4|0);
 $25 = HEAP32[$24>>2]|0;
 $10 = $25;
 $26 = $10;
 $27 = $4;
 $28 = ((($27)) + 4|0);
 $29 = HEAP32[$28>>2]|0;
 $30 = HEAP32[$29>>2]|0;
 $31 = (($26) - ($30))|0;
 $11 = $31;
 $32 = $3;
 $33 = ((($32)) + 1068|0);
 $34 = HEAP32[$33>>2]|0;
 $12 = $34;
 $35 = $4;
 $36 = ((($35)) + 4|0);
 $37 = HEAP32[$36>>2]|0;
 $38 = ((($37)) + 88|0);
 $39 = HEAP32[$38>>2]|0;
 $13 = $39;
 L1: while(1) {
  $40 = $5;
  $41 = ($40|0)!=(0);
  $42 = $8;
  if (!($41)) {
   break;
  }
  $43 = $10;
  $44 = ($42|0)>=($43|0);
  if ($44) {
   $45 = $11;
   $46 = $8;
   $47 = (($46) - ($45))|0;
   $8 = $47;
  }
  $48 = $10;
  $49 = $8;
  $50 = (($48) - ($49))|0;
  $51 = $9;
  $52 = (($50|0) / ($51|0))&-1;
  $53 = (($52) + 1)|0;
  $14 = $53;
  $54 = $14;
  $55 = $5;
  $56 = ($54|0)>($55|0);
  if ($56) {
   $57 = $5;
   $14 = $57;
   $5 = 0;
  } else {
   $58 = $14;
   $59 = $5;
   $60 = (($59) - ($58))|0;
   $5 = $60;
  }
  while(1) {
   $61 = $14;
   $62 = (($61) + -1)|0;
   $14 = $62;
   $63 = ($61|0)!=(0);
   if (!($63)) {
    continue L1;
   }
   $64 = $8;
   $65 = $64 >> 12;
   $66 = $13;
   $67 = (($66) + ($65<<1)|0);
   $68 = HEAP16[$67>>1]|0;
   $6 = $68;
   $69 = $8;
   $70 = $69 >> 12;
   $71 = (($70) + 1)|0;
   $72 = $13;
   $73 = (($72) + ($71<<1)|0);
   $74 = HEAP16[$73>>1]|0;
   $7 = $74;
   $75 = $6;
   $76 = $75 << 16 >> 16;
   $77 = $7;
   $78 = $77 << 16 >> 16;
   $79 = $6;
   $80 = $79 << 16 >> 16;
   $81 = (($78) - ($80))|0;
   $82 = $8;
   $83 = $82 & 4095;
   $84 = Math_imul($81, $83)|0;
   $85 = $84 >>> 12;
   $86 = (($76) + ($85))|0;
   $87 = $86&65535;
   $88 = $12;
   $89 = ((($88)) + 2|0);
   $12 = $89;
   HEAP16[$88>>1] = $87;
   $90 = $9;
   $91 = $8;
   $92 = (($91) + ($90))|0;
   $8 = $92;
  }
 }
 $93 = $4;
 $94 = ((($93)) + 16|0);
 HEAP32[$94>>2] = $42;
 $95 = $3;
 $96 = ((($95)) + 1068|0);
 $97 = HEAP32[$96>>2]|0;
 STACKTOP = sp;return ($97|0);
}
function _rs_plain($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $16 = $4;
 $17 = $3;
 $18 = ((($17)) + 1724|0);
 $19 = (($18) + (($16*236)|0)|0);
 $8 = $19;
 $20 = $3;
 $21 = ((($20)) + 1068|0);
 $22 = HEAP32[$21>>2]|0;
 $9 = $22;
 $23 = $8;
 $24 = ((($23)) + 4|0);
 $25 = HEAP32[$24>>2]|0;
 $26 = ((($25)) + 88|0);
 $27 = HEAP32[$26>>2]|0;
 $10 = $27;
 $28 = $8;
 $29 = ((($28)) + 16|0);
 $30 = HEAP32[$29>>2]|0;
 $11 = $30;
 $31 = $8;
 $32 = ((($31)) + 20|0);
 $33 = HEAP32[$32>>2]|0;
 $12 = $33;
 $34 = $8;
 $35 = ((($34)) + 4|0);
 $36 = HEAP32[$35>>2]|0;
 $37 = ((($36)) + 8|0);
 $38 = HEAP32[$37>>2]|0;
 $13 = $38;
 $39 = $5;
 $40 = HEAP32[$39>>2]|0;
 $14 = $40;
 $41 = $12;
 $42 = ($41|0)<(0);
 if ($42) {
  $43 = $12;
  $44 = (0 - ($43))|0;
  $12 = $44;
 }
 $45 = $13;
 $46 = $11;
 $47 = (($45) - ($46))|0;
 $48 = $12;
 $49 = (($47|0) / ($48|0))&-1;
 $50 = (($49) + 1)|0;
 $15 = $50;
 $51 = $15;
 $52 = $14;
 $53 = ($51|0)>($52|0);
 if ($53) {
  $54 = $14;
  $15 = $54;
  $14 = 0;
 } else {
  $55 = $15;
  $56 = $14;
  $57 = (($56) - ($55))|0;
  $14 = $57;
 }
 while(1) {
  $58 = $15;
  $59 = (($58) + -1)|0;
  $15 = $59;
  $60 = ($58|0)!=(0);
  $61 = $11;
  if (!($60)) {
   break;
  }
  $62 = $61 >> 12;
  $63 = $10;
  $64 = (($63) + ($62<<1)|0);
  $65 = HEAP16[$64>>1]|0;
  $6 = $65;
  $66 = $11;
  $67 = $66 >> 12;
  $68 = (($67) + 1)|0;
  $69 = $10;
  $70 = (($69) + ($68<<1)|0);
  $71 = HEAP16[$70>>1]|0;
  $7 = $71;
  $72 = $6;
  $73 = $72 << 16 >> 16;
  $74 = $7;
  $75 = $74 << 16 >> 16;
  $76 = $6;
  $77 = $76 << 16 >> 16;
  $78 = (($75) - ($77))|0;
  $79 = $11;
  $80 = $79 & 4095;
  $81 = Math_imul($78, $80)|0;
  $82 = $81 >>> 12;
  $83 = (($73) + ($82))|0;
  $84 = $83&65535;
  $85 = $9;
  $86 = ((($85)) + 2|0);
  $9 = $86;
  HEAP16[$85>>1] = $84;
  $87 = $12;
  $88 = $11;
  $89 = (($88) + ($87))|0;
  $11 = $89;
 }
 $90 = $13;
 $91 = ($61|0)>=($90|0);
 if (!($91)) {
  $108 = $11;
  $109 = $8;
  $110 = ((($109)) + 16|0);
  HEAP32[$110>>2] = $108;
  $111 = $3;
  $112 = ((($111)) + 1068|0);
  $113 = HEAP32[$112>>2]|0;
  STACKTOP = sp;return ($113|0);
 }
 $92 = $11;
 $93 = $13;
 $94 = ($92|0)==($93|0);
 if ($94) {
  $95 = $11;
  $96 = $95 >> 12;
  $97 = $10;
  $98 = (($97) + ($96<<1)|0);
  $99 = HEAP16[$98>>1]|0;
  $100 = $9;
  $101 = ((($100)) + 2|0);
  $9 = $101;
  HEAP16[$100>>1] = $99;
 }
 $102 = $8;
 HEAP8[$102>>0] = 0;
 $103 = $14;
 $104 = (($103) + 1)|0;
 $105 = $5;
 $106 = HEAP32[$105>>2]|0;
 $107 = (($106) - ($104))|0;
 HEAP32[$105>>2] = $107;
 $108 = $11;
 $109 = $8;
 $110 = ((($109)) + 16|0);
 HEAP32[$110>>2] = $108;
 $111 = $3;
 $112 = ((($111)) + 1068|0);
 $113 = HEAP32[$112>>2]|0;
 STACKTOP = sp;return ($113|0);
}
function _update_vibrato($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0.0, $100 = 0.0, $101 = 0.0, $102 = 0.0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0.0, $113 = 0, $114 = 0, $115 = 0, $116 = 0.0, $117 = 0.0;
 var $118 = 0.0, $119 = 0.0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0.0, $124 = 0, $125 = 0, $126 = 0, $127 = 0.0, $128 = 0.0, $129 = 0.0, $13 = 0, $130 = 0.0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0.0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0.0, $144 = 0.0, $145 = 0.0, $146 = 0, $147 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0.0, $72 = 0, $73 = 0, $74 = 0, $75 = 0.0, $76 = 0.0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0.0, $83 = 0, $84 = 0, $85 = 0, $86 = 0.0, $87 = 0.0, $88 = 0.0, $89 = 0.0, $9 = 0, $90 = 0.0, $91 = 0.0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0.0, $97 = 0.0, $98 = 0.0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $11 = $5;
 $12 = ((($11)) + 208|0);
 $13 = HEAP32[$12>>2]|0;
 $14 = (($13) + 1)|0;
 HEAP32[$12>>2] = $14;
 $15 = ($13|0)>=(63);
 if ($15) {
  $16 = $5;
  $17 = ((($16)) + 208|0);
  HEAP32[$17>>2] = 0;
 }
 $18 = $5;
 $19 = ((($18)) + 208|0);
 $20 = HEAP32[$19>>2]|0;
 $21 = (_vib_phase_to_inc_ptr($20)|0);
 $8 = $21;
 $22 = $8;
 $23 = $5;
 $24 = ((($23)) + 80|0);
 $25 = (($24) + ($22<<2)|0);
 $26 = HEAP32[$25>>2]|0;
 $27 = ($26|0)!=(0);
 if ($27) {
  $28 = $6;
  $29 = ($28|0)!=(0);
  $30 = $8;
  $31 = $5;
  $32 = ((($31)) + 80|0);
  $33 = (($32) + ($30<<2)|0);
  $34 = HEAP32[$33>>2]|0;
  if ($29) {
   $35 = (0 - ($34))|0;
   $3 = $35;
   $147 = $3;
   STACKTOP = sp;return ($147|0);
  } else {
   $3 = $34;
   $147 = $3;
   STACKTOP = sp;return ($147|0);
  }
 }
 $36 = $5;
 $37 = ((($36)) + 4|0);
 $38 = HEAP32[$37>>2]|0;
 $39 = ((($38)) + 109|0);
 $40 = HEAP8[$39>>0]|0;
 $41 = $40&255;
 $42 = $41 << 7;
 $7 = $42;
 $43 = $5;
 $44 = ((($43)) + 52|0);
 $45 = HEAP32[$44>>2]|0;
 $46 = ($45|0)!=(0);
 do {
  if ($46) {
   $47 = $5;
   $48 = ((($47)) + 52|0);
   $49 = HEAP32[$48>>2]|0;
   $50 = $5;
   $51 = ((($50)) + 56|0);
   $52 = HEAP32[$51>>2]|0;
   $53 = (($52) + ($49))|0;
   HEAP32[$51>>2] = $53;
   $54 = $5;
   $55 = ((($54)) + 56|0);
   $56 = HEAP32[$55>>2]|0;
   $57 = ($56|0)>=(65536);
   $58 = $5;
   if ($57) {
    $59 = ((($58)) + 52|0);
    HEAP32[$59>>2] = 0;
    break;
   } else {
    $60 = ((($58)) + 56|0);
    $61 = HEAP32[$60>>2]|0;
    $62 = $7;
    $63 = Math_imul($62, $61)|0;
    $7 = $63;
    $64 = $7;
    $65 = $64 >> 16;
    $7 = $65;
    break;
   }
  }
 } while(0);
 $66 = $5;
 $67 = ((($66)) + 4|0);
 $68 = HEAP32[$67>>2]|0;
 $69 = ((($68)) + 12|0);
 $70 = HEAP32[$69>>2]|0;
 $71 = (+($70|0));
 $72 = $5;
 $73 = ((($72)) + 12|0);
 $74 = HEAP32[$73>>2]|0;
 $75 = (+($74|0));
 $76 = $71 * $75;
 $77 = $5;
 $78 = ((($77)) + 4|0);
 $79 = HEAP32[$78>>2]|0;
 $80 = ((($79)) + 32|0);
 $81 = HEAP32[$80>>2]|0;
 $82 = (+($81|0));
 $83 = $4;
 $84 = ((($83)) + 4|0);
 $85 = HEAP32[$84>>2]|0;
 $86 = (+($85|0));
 $87 = $82 * $86;
 $88 = $76 / $87;
 $89 = $88 * 4096.0;
 $90 = $89;
 $91 = $90;
 $10 = $91;
 $92 = $5;
 $93 = ((($92)) + 208|0);
 $94 = HEAP32[$93>>2]|0;
 $95 = $94<<4;
 $96 = (+($95|0));
 $97 = 0.0061359231515425647 * $96;
 $98 = (+Math_sin((+$97)));
 $99 = $7;
 $100 = (+($99|0));
 $101 = $98 * $100;
 $102 = $101 * 1.0;
 $103 = (~~(($102)));
 $9 = $103;
 $104 = $9;
 $105 = ($104|0)<(0);
 $106 = $9;
 if ($105) {
  $107 = (0 - ($106))|0;
  $9 = $107;
  $108 = $9;
  $109 = $108 >> 5;
  $110 = $109 & 255;
  $111 = (1032 + ($110<<3)|0);
  $112 = +HEAPF64[$111>>3];
  $113 = $9;
  $114 = $113 >> 13;
  $115 = (3080 + ($114<<3)|0);
  $116 = +HEAPF64[$115>>3];
  $117 = $112 * $116;
  $118 = $10;
  $119 = $118 / $117;
  $10 = $119;
 } else {
  $120 = $106 >> 5;
  $121 = $120 & 255;
  $122 = (1032 + ($121<<3)|0);
  $123 = +HEAPF64[$122>>3];
  $124 = $9;
  $125 = $124 >> 13;
  $126 = (3080 + ($125<<3)|0);
  $127 = +HEAPF64[$126>>3];
  $128 = $123 * $127;
  $129 = $10;
  $130 = $129 * $128;
  $10 = $130;
 }
 $131 = $5;
 $132 = ((($131)) + 52|0);
 $133 = HEAP32[$132>>2]|0;
 $134 = ($133|0)!=(0);
 if (!($134)) {
  $135 = $10;
  $136 = (~~(($135)));
  $137 = $8;
  $138 = $5;
  $139 = ((($138)) + 80|0);
  $140 = (($139) + ($137<<2)|0);
  HEAP32[$140>>2] = $136;
 }
 $141 = $6;
 $142 = ($141|0)!=(0);
 if ($142) {
  $143 = $10;
  $144 = -$143;
  $10 = $144;
 }
 $145 = $10;
 $146 = (~~(($145)));
 $3 = $146;
 $147 = $3;
 STACKTOP = sp;return ($147|0);
}
function _vib_phase_to_inc_ptr($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $2;
 $4 = ($3|0)<(16);
 $5 = $2;
 do {
  if ($4) {
   $6 = (15 - ($5))|0;
   $1 = $6;
  } else {
   $7 = ($5|0)>=(48);
   $8 = $2;
   if ($7) {
    $9 = (79 - ($8))|0;
    $1 = $9;
    break;
   } else {
    $10 = (($8) - 16)|0;
    $1 = $10;
    break;
   }
  }
 } while(0);
 $11 = $1;
 STACKTOP = sp;return ($11|0);
}
function _pre_resample($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0.0, $102 = 0.0, $103 = 0.0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0.0, $119 = 0.0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0.0, $131 = 0.0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0.0, $146 = 0.0, $147 = 0.0, $148 = 0.0, $149 = 0.0, $15 = 0, $150 = 0.0, $151 = 0.0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0.0, $195 = 0.0, $196 = 0.0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0.0, $203 = 0.0, $204 = 0.0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $22 = 0, $23 = 0, $24 = 0.0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0.0;
 var $32 = 0.0, $33 = 0, $34 = 0, $35 = 0, $36 = 0.0, $37 = 0, $38 = 0, $39 = 0, $4 = 0.0, $40 = 0.0, $41 = 0.0, $42 = 0.0, $43 = 0, $44 = 0, $45 = 0, $46 = 0.0, $47 = 0.0, $48 = 0.0, $49 = 0, $5 = 0.0;
 var $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0.0, $96 = 0.0, $97 = 0.0, $98 = 0.0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $2 = $0;
 $3 = $1;
 $18 = $3;
 $19 = ((($18)) + 88|0);
 $20 = HEAP32[$19>>2]|0;
 $12 = $20;
 $21 = $3;
 $22 = ((($21)) + 12|0);
 $23 = HEAP32[$22>>2]|0;
 $24 = (+($23|0));
 $25 = $3;
 $26 = ((($25)) + 112|0);
 $27 = HEAP8[$26>>0]|0;
 $28 = $27 << 24 >> 24;
 $29 = (4252 + ($28<<2)|0);
 $30 = HEAP32[$29>>2]|0;
 $31 = (+($30|0));
 $32 = $24 * $31;
 $33 = $3;
 $34 = ((($33)) + 32|0);
 $35 = HEAP32[$34>>2]|0;
 $36 = (+($35|0));
 $37 = $2;
 $38 = ((($37)) + 4|0);
 $39 = HEAP32[$38>>2]|0;
 $40 = (+($39|0));
 $41 = $36 * $40;
 $42 = $32 / $41;
 $4 = $42;
 $43 = $3;
 $44 = ((($43)) + 8|0);
 $45 = HEAP32[$44>>2]|0;
 $46 = (+($45|0));
 $47 = $4;
 $48 = $46 / $47;
 $49 = (~~(($48)));
 $8 = $49;
 $50 = $8;
 $51 = $50 >> 11;
 $52 = (_safe_malloc($51)|0);
 $10 = $52;
 $11 = $52;
 $53 = $8;
 $54 = $53 >> 12;
 $55 = (($54) - 1)|0;
 $9 = $55;
 $56 = $3;
 $57 = ((($56)) + 8|0);
 $58 = HEAP32[$57>>2]|0;
 $59 = (($58) - 4096)|0;
 $60 = $9;
 $61 = (($59|0) / ($60|0))&-1;
 $6 = $61;
 $7 = $61;
 $62 = $9;
 $63 = (($62) + -1)|0;
 $9 = $63;
 $64 = ($63|0)!=(0);
 if ($64) {
  $65 = $12;
  $66 = HEAP16[$65>>1]|0;
  $67 = $11;
  $68 = ((($67)) + 2|0);
  $11 = $68;
  HEAP16[$67>>1] = $66;
 }
 while(1) {
  $69 = $9;
  $70 = (($69) + -1)|0;
  $9 = $70;
  $71 = ($70|0)!=(0);
  if (!($71)) {
   break;
  }
  $72 = $12;
  $73 = $7;
  $74 = $73 >> 12;
  $75 = (($72) + ($74<<1)|0);
  $17 = $75;
  $76 = $17;
  $77 = $12;
  $78 = ($76>>>0)>($77>>>0);
  if ($78) {
   $79 = $17;
   $80 = ((($79)) + -2|0);
   $81 = HEAP16[$80>>1]|0;
   $82 = $81 << 16 >> 16;
   $84 = $82;
  } else {
   $84 = 0;
  }
  $83 = $84&65535;
  $13 = $83;
  $85 = $17;
  $86 = HEAP16[$85>>1]|0;
  $14 = $86;
  $87 = $17;
  $88 = ((($87)) + 2|0);
  $89 = HEAP16[$88>>1]|0;
  $15 = $89;
  $90 = $17;
  $91 = ((($90)) + 4|0);
  $92 = HEAP16[$91>>1]|0;
  $16 = $92;
  $93 = $7;
  $94 = $93 & 4095;
  $95 = (+($94>>>0));
  $96 = $95 * 2.44140625E-4;
  $97 = $96;
  $98 = $97;
  $5 = $98;
  $99 = $14;
  $100 = $99 << 16 >> 16;
  $101 = (+($100|0));
  $102 = $5;
  $103 = $102 / 6.0;
  $104 = $13;
  $105 = $104 << 16 >> 16;
  $106 = Math_imul(-2, $105)|0;
  $107 = $14;
  $108 = $107 << 16 >> 16;
  $109 = ($108*3)|0;
  $110 = (($106) - ($109))|0;
  $111 = $15;
  $112 = $111 << 16 >> 16;
  $113 = ($112*6)|0;
  $114 = (($110) + ($113))|0;
  $115 = $16;
  $116 = $115 << 16 >> 16;
  $117 = (($114) - ($116))|0;
  $118 = (+($117|0));
  $119 = $5;
  $120 = $13;
  $121 = $120 << 16 >> 16;
  $122 = $14;
  $123 = $122 << 16 >> 16;
  $124 = $123<<1;
  $125 = (($121) - ($124))|0;
  $126 = $15;
  $127 = $126 << 16 >> 16;
  $128 = (($125) + ($127))|0;
  $129 = ($128*3)|0;
  $130 = (+($129|0));
  $131 = $5;
  $132 = $13;
  $133 = $132 << 16 >> 16;
  $134 = (0 - ($133))|0;
  $135 = $14;
  $136 = $135 << 16 >> 16;
  $137 = $15;
  $138 = $137 << 16 >> 16;
  $139 = (($136) - ($138))|0;
  $140 = ($139*3)|0;
  $141 = (($134) + ($140))|0;
  $142 = $16;
  $143 = $142 << 16 >> 16;
  $144 = (($141) + ($143))|0;
  $145 = (+($144|0));
  $146 = $131 * $145;
  $147 = $130 + $146;
  $148 = $119 * $147;
  $149 = $118 + $148;
  $150 = $103 * $149;
  $151 = $101 + $150;
  $152 = (~~(($151)));
  $153 = $11;
  $154 = ((($153)) + 2|0);
  $11 = $154;
  HEAP16[$153>>1] = $152;
  $155 = $6;
  $156 = $7;
  $157 = (($156) + ($155))|0;
  $7 = $157;
 }
 $158 = $7;
 $159 = $158 & 4095;
 $160 = ($159|0)!=(0);
 $161 = $7;
 $162 = $161 >> 12;
 $163 = $12;
 $164 = (($163) + ($162<<1)|0);
 $165 = HEAP16[$164>>1]|0;
 if ($160) {
  $13 = $165;
  $166 = $7;
  $167 = $166 >> 12;
  $168 = (($167) + 1)|0;
  $169 = $12;
  $170 = (($169) + ($168<<1)|0);
  $171 = HEAP16[$170>>1]|0;
  $14 = $171;
  $172 = $13;
  $173 = $172 << 16 >> 16;
  $174 = $14;
  $175 = $174 << 16 >> 16;
  $176 = $13;
  $177 = $176 << 16 >> 16;
  $178 = (($175) - ($177))|0;
  $179 = $7;
  $180 = $179 & 4095;
  $181 = Math_imul($178, $180)|0;
  $182 = $181 >>> 12;
  $183 = (($173) + ($182))|0;
  $184 = $183&65535;
  $185 = $11;
  $186 = ((($185)) + 2|0);
  $11 = $186;
  HEAP16[$185>>1] = $184;
  $189 = $8;
  $190 = $3;
  $191 = ((($190)) + 8|0);
  HEAP32[$191>>2] = $189;
  $192 = $3;
  $193 = HEAP32[$192>>2]|0;
  $194 = (+($193|0));
  $195 = $4;
  $196 = $194 / $195;
  $197 = (~~(($196)));
  $198 = $3;
  HEAP32[$198>>2] = $197;
  $199 = $3;
  $200 = ((($199)) + 4|0);
  $201 = HEAP32[$200>>2]|0;
  $202 = (+($201|0));
  $203 = $4;
  $204 = $202 / $203;
  $205 = (~~(($204)));
  $206 = $3;
  $207 = ((($206)) + 4|0);
  HEAP32[$207>>2] = $205;
  $208 = $3;
  $209 = ((($208)) + 88|0);
  $210 = HEAP32[$209>>2]|0;
  _free($210);
  $211 = $10;
  $212 = $3;
  $213 = ((($212)) + 88|0);
  HEAP32[$213>>2] = $211;
  $214 = $3;
  $215 = ((($214)) + 12|0);
  HEAP32[$215>>2] = 0;
  STACKTOP = sp;return;
 } else {
  $187 = $11;
  $188 = ((($187)) + 2|0);
  $11 = $188;
  HEAP16[$187>>1] = $165;
  $189 = $8;
  $190 = $3;
  $191 = ((($190)) + 8|0);
  HEAP32[$191>>2] = $189;
  $192 = $3;
  $193 = HEAP32[$192>>2]|0;
  $194 = (+($193|0));
  $195 = $4;
  $196 = $194 / $195;
  $197 = (~~(($196)));
  $198 = $3;
  HEAP32[$198>>2] = $197;
  $199 = $3;
  $200 = ((($199)) + 4|0);
  $201 = HEAP32[$200>>2]|0;
  $202 = (+($201|0));
  $203 = $4;
  $204 = $202 / $203;
  $205 = (~~(($204)));
  $206 = $3;
  $207 = ((($206)) + 4|0);
  HEAP32[$207>>2] = $205;
  $208 = $3;
  $209 = ((($208)) + 88|0);
  $210 = HEAP32[$209>>2]|0;
  _free($210);
  $211 = $10;
  $212 = $3;
  $213 = ((($212)) + 88|0);
  HEAP32[$213>>2] = $211;
  $214 = $3;
  $215 = ((($214)) + 12|0);
  HEAP32[$215>>2] = 0;
  STACKTOP = sp;return;
 }
}
function _stdio_istream_read($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = $5;
 $9 = $6;
 $10 = $7;
 $11 = $4;
 $12 = HEAP32[$11>>2]|0;
 $13 = (_fread($8,$9,$10,$12)|0);
 STACKTOP = sp;return ($13|0);
}
function _stdio_istream_close($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = 0;
 $3 = $1;
 $4 = ((($3)) + 4|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = ($5|0)!=(0);
 if ($6) {
  $7 = $1;
  $8 = HEAP32[$7>>2]|0;
  $9 = (_fclose($8)|0);
  $2 = $9;
 }
 $10 = $1;
 _free($10);
 $11 = $2;
 STACKTOP = sp;return ($11|0);
}
function _mem_istream_read($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $10 = $4;
 $8 = $10;
 $11 = $7;
 $9 = $11;
 $12 = $8;
 $13 = ((($12)) + 4|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = $9;
 $16 = $6;
 $17 = Math_imul($15, $16)|0;
 $18 = (($14) + ($17)|0);
 $19 = $8;
 $20 = ((($19)) + 8|0);
 $21 = HEAP32[$20>>2]|0;
 $22 = ($18>>>0)>($21>>>0);
 if ($22) {
  $23 = $8;
  $24 = ((($23)) + 8|0);
  $25 = HEAP32[$24>>2]|0;
  $26 = $8;
  $27 = ((($26)) + 4|0);
  $28 = HEAP32[$27>>2]|0;
  $29 = $25;
  $30 = $28;
  $31 = (($29) - ($30))|0;
  $32 = $6;
  $33 = (($31>>>0) / ($32>>>0))&-1;
  $9 = $33;
 }
 $34 = $5;
 $35 = $8;
 $36 = ((($35)) + 4|0);
 $37 = HEAP32[$36>>2]|0;
 $38 = $9;
 $39 = $6;
 $40 = Math_imul($38, $39)|0;
 _memcpy(($34|0),($37|0),($40|0))|0;
 $41 = $9;
 $42 = $6;
 $43 = Math_imul($41, $42)|0;
 $44 = $8;
 $45 = ((($44)) + 4|0);
 $46 = HEAP32[$45>>2]|0;
 $47 = (($46) + ($43)|0);
 HEAP32[$45>>2] = $47;
 $48 = $9;
 STACKTOP = sp;return ($48|0);
}
function _mem_istream_close($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ((($2)) + 12|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($4|0)!=(0);
 if ($5) {
  $6 = $1;
  $7 = HEAP32[$6>>2]|0;
  _free($7);
 }
 $8 = $1;
 _free($8);
 STACKTOP = sp;return 0;
}
function _mid_istream_open_fp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $7 = (_safe_malloc(12)|0);
 $6 = $7;
 $8 = $6;
 $9 = ($8|0)==(0|0);
 if ($9) {
  $2 = 0;
  $26 = $2;
  STACKTOP = sp;return ($26|0);
 }
 $10 = (_safe_malloc(8)|0);
 $5 = $10;
 $11 = $5;
 $12 = ($11|0)==(0|0);
 if ($12) {
  $13 = $6;
  _free($13);
  $2 = 0;
  $26 = $2;
  STACKTOP = sp;return ($26|0);
 } else {
  $14 = $3;
  $15 = $5;
  HEAP32[$15>>2] = $14;
  $16 = $4;
  $17 = $5;
  $18 = ((($17)) + 4|0);
  HEAP32[$18>>2] = $16;
  $19 = $5;
  $20 = $6;
  $21 = ((($20)) + 8|0);
  HEAP32[$21>>2] = $19;
  $22 = $6;
  HEAP32[$22>>2] = 5;
  $23 = $6;
  $24 = ((($23)) + 4|0);
  HEAP32[$24>>2] = 6;
  $25 = $6;
  $2 = $25;
  $26 = $2;
  STACKTOP = sp;return ($26|0);
 }
 return (0)|0;
}
function _mid_istream_open_file($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $4 = $2;
 $5 = (_fopen($4,5082)|0);
 $3 = $5;
 $6 = $3;
 $7 = ($6|0)==(0|0);
 if ($7) {
  $1 = 0;
 } else {
  $8 = $3;
  $9 = (_mid_istream_open_fp($8,1)|0);
  $1 = $9;
 }
 $10 = $1;
 STACKTOP = sp;return ($10|0);
}
function _mid_istream_open_mem($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $9 = (_safe_malloc(12)|0);
 $8 = $9;
 $10 = $8;
 $11 = ($10|0)==(0|0);
 if ($11) {
  $3 = 0;
  $36 = $3;
  STACKTOP = sp;return ($36|0);
 }
 $12 = (_safe_malloc(16)|0);
 $7 = $12;
 $13 = $7;
 $14 = ($13|0)==(0|0);
 if ($14) {
  $15 = $8;
  _free($15);
  $3 = 0;
  $36 = $3;
  STACKTOP = sp;return ($36|0);
 } else {
  $16 = $4;
  $17 = $7;
  HEAP32[$17>>2] = $16;
  $18 = $4;
  $19 = $7;
  $20 = ((($19)) + 4|0);
  HEAP32[$20>>2] = $18;
  $21 = $4;
  $22 = $5;
  $23 = (($21) + ($22)|0);
  $24 = $7;
  $25 = ((($24)) + 8|0);
  HEAP32[$25>>2] = $23;
  $26 = $6;
  $27 = $7;
  $28 = ((($27)) + 12|0);
  HEAP32[$28>>2] = $26;
  $29 = $7;
  $30 = $8;
  $31 = ((($30)) + 8|0);
  HEAP32[$31>>2] = $29;
  $32 = $8;
  HEAP32[$32>>2] = 7;
  $33 = $8;
  $34 = ((($33)) + 4|0);
  HEAP32[$34>>2] = 8;
  $35 = $8;
  $3 = $35;
  $36 = $3;
  STACKTOP = sp;return ($36|0);
 }
 return (0)|0;
}
function _mid_istream_read($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = $4;
 $9 = HEAP32[$8>>2]|0;
 $10 = $4;
 $11 = ((($10)) + 8|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = $5;
 $14 = $6;
 $15 = $7;
 $16 = (FUNCTION_TABLE_iiiii[$9 & 7]($12,$13,$14,$15)|0);
 STACKTOP = sp;return ($16|0);
}
function _mid_istream_skip($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1040|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(1040|0);
 $5 = sp + 16|0;
 $2 = $0;
 $3 = $1;
 while(1) {
  $6 = $3;
  $7 = ($6>>>0)>(0);
  if (!($7)) {
   break;
  }
  $8 = $3;
  $4 = $8;
  $9 = $4;
  $10 = ($9>>>0)>(1024);
  $$ = $10 ? 1024 : $8;
  $4 = $$;
  $11 = $4;
  $12 = $3;
  $13 = (($12) - ($11))|0;
  $3 = $13;
  $14 = $2;
  $15 = $4;
  (_mid_istream_read($14,$5,1,$15)|0);
 }
 STACKTOP = sp;return;
}
function _mid_istream_close($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $3 = $1;
 $4 = ((($3)) + 4|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = $1;
 $7 = ((($6)) + 8|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (FUNCTION_TABLE_ii[$5 & 15]($8)|0);
 $2 = $9;
 $10 = $1;
 _free($10);
 $11 = $2;
 STACKTOP = sp;return ($11|0);
}
function _mid_init_no_config() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_safe_malloc(516)|0);
 HEAP32[2232] = $0;
 $1 = HEAP32[2232]|0;
 _memset(($1|0),0,516)|0;
 $2 = (_safe_malloc(3584)|0);
 $3 = HEAP32[2232]|0;
 HEAP32[$3>>2] = $2;
 $4 = HEAP32[2232]|0;
 $5 = HEAP32[$4>>2]|0;
 _memset(($5|0),0,3584)|0;
 $6 = (_safe_malloc(516)|0);
 HEAP32[2360] = $6;
 $7 = HEAP32[2360]|0;
 _memset(($7|0),0,516)|0;
 $8 = (_safe_malloc(3584)|0);
 $9 = HEAP32[2360]|0;
 HEAP32[$9>>2] = $8;
 $10 = HEAP32[2360]|0;
 $11 = HEAP32[$10>>2]|0;
 _memset(($11|0),0,3584)|0;
 return 0;
}
function _mid_init($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1040|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(1040|0);
 $vararg_buffer = sp;
 $2 = sp + 16|0;
 $1 = $0;
 $4 = $1;
 $5 = ($4|0)!=(0|0);
 if ($5) {
  $6 = $1;
  $7 = (_strlen($6)|0);
  $8 = ($7>>>0)<(1024);
  if ($8) {
   $9 = $1;
   (_strcpy($2,$9)|0);
   $10 = $1;
   $11 = (_strrchr($10,47)|0);
   $3 = $11;
   $12 = $3;
   $13 = ($12|0)!=(0|0);
   if ($13) {
    $14 = $3;
    $15 = $1;
    $16 = $14;
    $17 = $15;
    $18 = (($16) - ($17))|0;
    $19 = (($2) + ($18)|0);
    HEAP8[$19>>0] = 0;
    $20 = HEAP32[1191]|0;
    HEAP32[$vararg_buffer>>2] = $2;
    (_fprintf($20,5085,$vararg_buffer)|0);
    _add_to_pathlist($2);
   }
  }
 }
 (_mid_init_no_config()|0);
 $21 = $1;
 $22 = ($21|0)==(0|0);
 if (!($22)) {
  $23 = $1;
  $24 = HEAP8[$23>>0]|0;
  $25 = $24 << 24 >> 24;
  $26 = ($25|0)==(0);
  if (!($26)) {
   $27 = $1;
   $28 = (_read_config_file($27)|0);
   STACKTOP = sp;return ($28|0);
  }
 }
 $1 = 5106;
 $27 = $1;
 $28 = (_read_config_file($27)|0);
 STACKTOP = sp;return ($28|0);
}
function _read_config_file($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0;
 var $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0;
 var $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0;
 var $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0;
 var $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0;
 var $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0;
 var $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0;
 var $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0;
 var $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0;
 var $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0;
 var $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0;
 var $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0;
 var $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0;
 var $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond10 = 0, $or$cond12 = 0, $or$cond14 = 0, $or$cond4 = 0, $or$cond6 = 0, $or$cond8 = 0, $vararg_buffer = 0, $vararg_buffer15 = 0, $vararg_buffer17 = 0, $vararg_buffer19 = 0, $vararg_buffer22 = 0, $vararg_buffer24 = 0;
 var $vararg_buffer26 = 0, $vararg_buffer29 = 0, $vararg_buffer31 = 0, $vararg_buffer33 = 0, $vararg_buffer37 = 0, $vararg_buffer41 = 0, $vararg_buffer45 = 0, $vararg_buffer49 = 0, $vararg_buffer53 = 0, $vararg_buffer57 = 0, $vararg_buffer61 = 0, $vararg_buffer65 = 0, $vararg_buffer69 = 0, $vararg_buffer73 = 0, $vararg_buffer78 = 0, $vararg_buffer83 = 0, $vararg_buffer87 = 0, $vararg_buffer91 = 0, $vararg_buffer95 = 0, $vararg_buffer99 = 0;
 var $vararg_ptr102 = 0, $vararg_ptr103 = 0, $vararg_ptr36 = 0, $vararg_ptr40 = 0, $vararg_ptr44 = 0, $vararg_ptr48 = 0, $vararg_ptr52 = 0, $vararg_ptr56 = 0, $vararg_ptr60 = 0, $vararg_ptr64 = 0, $vararg_ptr68 = 0, $vararg_ptr72 = 0, $vararg_ptr76 = 0, $vararg_ptr77 = 0, $vararg_ptr81 = 0, $vararg_ptr82 = 0, $vararg_ptr86 = 0, $vararg_ptr90 = 0, $vararg_ptr94 = 0, $vararg_ptr98 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1344|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(1344|0);
 $vararg_buffer99 = sp + 216|0;
 $vararg_buffer95 = sp + 208|0;
 $vararg_buffer91 = sp + 200|0;
 $vararg_buffer87 = sp + 192|0;
 $vararg_buffer83 = sp + 184|0;
 $vararg_buffer78 = sp + 168|0;
 $vararg_buffer73 = sp + 152|0;
 $vararg_buffer69 = sp + 144|0;
 $vararg_buffer65 = sp + 136|0;
 $vararg_buffer61 = sp + 128|0;
 $vararg_buffer57 = sp + 120|0;
 $vararg_buffer53 = sp + 112|0;
 $vararg_buffer49 = sp + 104|0;
 $vararg_buffer45 = sp + 96|0;
 $vararg_buffer41 = sp + 88|0;
 $vararg_buffer37 = sp + 80|0;
 $vararg_buffer33 = sp + 72|0;
 $vararg_buffer31 = sp + 64|0;
 $vararg_buffer29 = sp + 56|0;
 $vararg_buffer26 = sp + 48|0;
 $vararg_buffer24 = sp + 40|0;
 $vararg_buffer22 = sp + 32|0;
 $vararg_buffer19 = sp + 24|0;
 $vararg_buffer17 = sp + 16|0;
 $vararg_buffer15 = sp + 8|0;
 $vararg_buffer = sp;
 $4 = sp + 312|0;
 $5 = sp + 256|0;
 $2 = $0;
 $7 = 0;
 $11 = 0;
 $13 = HEAP32[2488]|0;
 $14 = ($13|0)>(50);
 if ($14) {
  $15 = HEAP32[1191]|0;
  (_fprintf($15,5119,$vararg_buffer)|0);
  $1 = -1;
  $487 = $1;
  STACKTOP = sp;return ($487|0);
 }
 $16 = $2;
 $17 = (_open_file($16)|0);
 $3 = $17;
 $18 = ($17|0)!=(0|0);
 if (!($18)) {
  $19 = HEAP32[1191]|0;
  $20 = $2;
  HEAP32[$vararg_buffer15>>2] = $20;
  (_fprintf($19,5164,$vararg_buffer15)|0);
  $1 = -1;
  $487 = $1;
  STACKTOP = sp;return ($487|0);
 }
 L8: while(1) {
  $21 = $3;
  $22 = (___fgets($4,1024,$21)|0);
  $23 = ($22|0)!=(0|0);
  if (!($23)) {
   label = 123;
   break;
  }
  $24 = $11;
  $25 = (($24) + 1)|0;
  $11 = $25;
  $26 = (_strtok($4,5197)|0);
  $12 = 0;
  HEAP32[$5>>2] = $26;
  $27 = HEAP32[$5>>2]|0;
  $28 = ($27|0)!=(0|0);
  if (!($28)) {
   continue;
  }
  $29 = HEAP32[$5>>2]|0;
  $30 = (_strcmp($29,5201)|0);
  $31 = ($30|0)==(0);
  if ($31) {
   $12 = -1;
  } else {
   $32 = HEAP32[$5>>2]|0;
   $33 = HEAP8[$32>>0]|0;
   $34 = $33 << 24 >> 24;
   $35 = ($34|0)==(35);
   if ($35) {
    continue;
   }
  }
  while(1) {
   $36 = $12;
   $37 = (($5) + ($36<<2)|0);
   $38 = HEAP32[$37>>2]|0;
   $39 = ($38|0)!=(0|0);
   if (!($39)) {
    break;
   }
   $40 = $12;
   $41 = (($5) + ($40<<2)|0);
   $42 = HEAP32[$41>>2]|0;
   $43 = HEAP8[$42>>0]|0;
   $44 = $43 << 24 >> 24;
   $45 = ($44|0)!=(35);
   $46 = $12;
   $47 = ($46|0)<(10);
   $or$cond14 = $45 & $47;
   if (!($or$cond14)) {
    break;
   }
   $48 = (_strtok(0,5197)|0);
   $49 = $12;
   $50 = (($49) + 1)|0;
   $12 = $50;
   $51 = (($5) + ($50<<2)|0);
   HEAP32[$51>>2] = $48;
  }
  $52 = HEAP32[$5>>2]|0;
  $53 = (_strcmp($52,5212)|0);
  $54 = ($53|0)!=(0);
  if (!($54)) {
   continue;
  }
  $55 = HEAP32[$5>>2]|0;
  $56 = (_strcmp($55,5217)|0);
  $57 = ($56|0)!=(0);
  if (!($57)) {
   continue;
  }
  $58 = HEAP32[$5>>2]|0;
  $59 = (_strcmp($58,5227)|0);
  $60 = ($59|0)!=(0);
  if (!($60)) {
   continue;
  }
  $61 = HEAP32[$5>>2]|0;
  $62 = (_strcmp($61,5236)|0);
  $63 = ($62|0)!=(0);
  if (!($63)) {
   continue;
  }
  $64 = HEAP32[$5>>2]|0;
  $65 = (_strcmp($64,5245)|0);
  $66 = ($65|0)!=(0);
  if (!($66)) {
   continue;
  }
  $67 = HEAP32[$5>>2]|0;
  $68 = (_strcmp($67,5249)|0);
  $69 = ($68|0)!=(0);
  if (!($69)) {
   $70 = HEAP32[1191]|0;
   (_fprintf($70,5257,$vararg_buffer17)|0);
   continue;
  }
  $71 = HEAP32[$5>>2]|0;
  $72 = (_strcmp($71,5305)|0);
  $73 = ($72|0)!=(0);
  if ($73) {
   $74 = HEAP32[$5>>2]|0;
   $75 = (_strcmp($74,5317)|0);
   $76 = ($75|0)!=(0);
   if ($76) {
    $79 = HEAP32[$5>>2]|0;
    $80 = (_strcmp($79,5369)|0);
    $81 = ($80|0)!=(0);
    if (!($81)) {
     $82 = HEAP32[1191]|0;
     (_fprintf($82,5375,$vararg_buffer22)|0);
     continue;
    }
    $83 = HEAP32[$5>>2]|0;
    $84 = (_strcmp($83,5421)|0);
    $85 = ($84|0)!=(0);
    if (!($85)) {
     $86 = HEAP32[1191]|0;
     (_fprintf($86,5431,$vararg_buffer24)|0);
     continue;
    }
    $87 = HEAP32[$5>>2]|0;
    $88 = (_strcmp($87,5481)|0);
    $89 = ($88|0)!=(0);
    if ($89) {
     $90 = HEAP32[$5>>2]|0;
     $91 = (_strcmp($90,5491)|0);
     $92 = ($91|0)!=(0);
     if ($92) {
      $95 = HEAP32[$5>>2]|0;
      $96 = (_strcmp($95,5540)|0);
      $97 = ($96|0)!=(0);
      if (!($97)) {
       $98 = HEAP32[1191]|0;
       (_fprintf($98,5549,$vararg_buffer29)|0);
       continue;
      }
      $99 = HEAP32[$5>>2]|0;
      $100 = (_strcmp($99,5598)|0);
      $101 = ($100|0)!=(0);
      if (!($101)) {
       $102 = HEAP32[1191]|0;
       (_fprintf($102,5602,$vararg_buffer31)|0);
       continue;
      }
      $103 = HEAP32[$5>>2]|0;
      $104 = (_strcmp($103,5646)|0);
      $105 = ($104|0)!=(0);
      if (!($105)) {
       $106 = $12;
       $107 = ($106|0)<(2);
       if ($107) {
        label = 36;
        break;
       }
       $8 = 1;
       while(1) {
        $111 = $8;
        $112 = $12;
        $113 = ($111|0)<($112|0);
        if (!($113)) {
         continue L8;
        }
        $114 = $8;
        $115 = (($5) + ($114<<2)|0);
        $116 = HEAP32[$115>>2]|0;
        _add_to_pathlist($116);
        $117 = $8;
        $118 = (($117) + 1)|0;
        $8 = $118;
       }
      }
      $119 = HEAP32[$5>>2]|0;
      $120 = (_strcmp($119,5683)|0);
      $121 = ($120|0)!=(0);
      if (!($121)) {
       $122 = $12;
       $123 = ($122|0)<(2);
       if ($123) {
        label = 42;
        break;
       }
       $8 = 1;
       while(1) {
        $127 = $8;
        $128 = $12;
        $129 = ($127|0)<($128|0);
        if (!($129)) {
         continue L8;
        }
        $130 = HEAP32[2488]|0;
        $131 = (($130) + 1)|0;
        HEAP32[2488] = $131;
        $132 = $8;
        $133 = (($5) + ($132<<2)|0);
        $134 = HEAP32[$133>>2]|0;
        (_read_config_file($134)|0);
        $135 = HEAP32[2488]|0;
        $136 = (($135) + -1)|0;
        HEAP32[2488] = $136;
        $137 = $8;
        $138 = (($137) + 1)|0;
        $8 = $138;
       }
      }
      $139 = HEAP32[$5>>2]|0;
      $140 = (_strcmp($139,5723)|0);
      $141 = ($140|0)!=(0);
      if (!($141)) {
       $142 = $12;
       $143 = ($142|0)!=(2);
       if ($143) {
        label = 48;
        break;
       }
       $147 = ((($5)) + 4|0);
       $148 = HEAP32[$147>>2]|0;
       (_strncpy(10551,$148,255)|0);
       HEAP8[(10806)>>0] = 0;
       continue;
      }
      $149 = HEAP32[$5>>2]|0;
      $150 = (_strcmp($149,5781)|0);
      $151 = ($150|0)!=(0);
      if (!($151)) {
       $152 = $12;
       $153 = ($152|0)<(2);
       if ($153) {
        label = 52;
        break;
       }
       $157 = ((($5)) + 4|0);
       $158 = HEAP32[$157>>2]|0;
       $159 = (_atoi($158)|0);
       $8 = $159;
       $160 = $8;
       $161 = ($160|0)<(0);
       $162 = $8;
       $163 = ($162|0)>(127);
       $or$cond = $161 | $163;
       if ($or$cond) {
        label = 54;
        break;
       }
       $167 = $8;
       $168 = (9440 + ($167<<2)|0);
       $169 = HEAP32[$168>>2]|0;
       $170 = ($169|0)!=(0|0);
       if (!($170)) {
        $171 = (_safe_malloc(516)|0);
        $172 = $8;
        $173 = (9440 + ($172<<2)|0);
        HEAP32[$173>>2] = $171;
        $174 = $8;
        $175 = (9440 + ($174<<2)|0);
        $176 = HEAP32[$175>>2]|0;
        _memset(($176|0),0,516)|0;
        $177 = (_safe_malloc(3584)|0);
        $178 = $8;
        $179 = (9440 + ($178<<2)|0);
        $180 = HEAP32[$179>>2]|0;
        HEAP32[$180>>2] = $177;
        $181 = $8;
        $182 = (9440 + ($181<<2)|0);
        $183 = HEAP32[$182>>2]|0;
        $184 = HEAP32[$183>>2]|0;
        _memset(($184|0),0,3584)|0;
       }
       $185 = $8;
       $186 = (9440 + ($185<<2)|0);
       $187 = HEAP32[$186>>2]|0;
       $7 = $187;
       continue;
      }
      $188 = HEAP32[$5>>2]|0;
      $189 = (_strcmp($188,5877)|0);
      $190 = ($189|0)!=(0);
      $191 = $12;
      $192 = ($191|0)<(2);
      if (!($190)) {
       if ($192) {
        label = 60;
        break;
       }
       $196 = ((($5)) + 4|0);
       $197 = HEAP32[$196>>2]|0;
       $198 = (_atoi($197)|0);
       $8 = $198;
       $199 = $8;
       $200 = ($199|0)<(0);
       $201 = $8;
       $202 = ($201|0)>(127);
       $or$cond4 = $200 | $202;
       if ($or$cond4) {
        label = 62;
        break;
       }
       $206 = $8;
       $207 = (8928 + ($206<<2)|0);
       $208 = HEAP32[$207>>2]|0;
       $209 = ($208|0)!=(0|0);
       if (!($209)) {
        $210 = (_safe_malloc(516)|0);
        $211 = $8;
        $212 = (8928 + ($211<<2)|0);
        HEAP32[$212>>2] = $210;
        $213 = $8;
        $214 = (8928 + ($213<<2)|0);
        $215 = HEAP32[$214>>2]|0;
        _memset(($215|0),0,516)|0;
        $216 = (_safe_malloc(3584)|0);
        $217 = $8;
        $218 = (8928 + ($217<<2)|0);
        $219 = HEAP32[$218>>2]|0;
        HEAP32[$219>>2] = $216;
        $220 = $8;
        $221 = (8928 + ($220<<2)|0);
        $222 = HEAP32[$221>>2]|0;
        $223 = HEAP32[$222>>2]|0;
        _memset(($223|0),0,3584)|0;
       }
       $224 = $8;
       $225 = (8928 + ($224<<2)|0);
       $226 = HEAP32[$225>>2]|0;
       $7 = $226;
       continue;
      }
      if ($192) {
       label = 69;
       break;
      }
      $227 = HEAP32[$5>>2]|0;
      $228 = HEAP8[$227>>0]|0;
      $229 = $228 << 24 >> 24;
      $230 = ($229|0)<(48);
      if ($230) {
       label = 69;
       break;
      }
      $231 = HEAP32[$5>>2]|0;
      $232 = HEAP8[$231>>0]|0;
      $233 = $232 << 24 >> 24;
      $234 = ($233|0)>(57);
      if ($234) {
       label = 69;
       break;
      }
      $238 = HEAP32[$5>>2]|0;
      $239 = (_atoi($238)|0);
      $8 = $239;
      $240 = $8;
      $241 = ($240|0)<(0);
      $242 = $8;
      $243 = ($242|0)>(127);
      $or$cond6 = $241 | $243;
      if ($or$cond6) {
       label = 71;
       break;
      }
      $247 = $7;
      $248 = ($247|0)!=(0|0);
      if (!($248)) {
       label = 73;
       break;
      }
      $252 = $8;
      $253 = $7;
      $254 = HEAP32[$253>>2]|0;
      $255 = (($254) + (($252*28)|0)|0);
      $256 = HEAP32[$255>>2]|0;
      $257 = ($256|0)!=(0|0);
      if ($257) {
       $258 = $8;
       $259 = $7;
       $260 = HEAP32[$259>>2]|0;
       $261 = (($260) + (($258*28)|0)|0);
       $262 = HEAP32[$261>>2]|0;
       _free($262);
      }
      $263 = ((($5)) + 4|0);
      $264 = HEAP32[$263>>2]|0;
      $265 = (_strlen($264)|0);
      $266 = (($265) + 1)|0;
      $267 = (_safe_malloc($266)|0);
      $268 = $8;
      $269 = $7;
      $270 = HEAP32[$269>>2]|0;
      $271 = (($270) + (($268*28)|0)|0);
      HEAP32[$271>>2] = $267;
      $272 = ((($5)) + 4|0);
      $273 = HEAP32[$272>>2]|0;
      (_strcpy($267,$273)|0);
      $274 = $8;
      $275 = $7;
      $276 = HEAP32[$275>>2]|0;
      $277 = (($276) + (($274*28)|0)|0);
      $278 = ((($277)) + 24|0);
      HEAP32[$278>>2] = -1;
      $279 = $8;
      $280 = $7;
      $281 = HEAP32[$280>>2]|0;
      $282 = (($281) + (($279*28)|0)|0);
      $283 = ((($282)) + 20|0);
      HEAP32[$283>>2] = -1;
      $284 = $8;
      $285 = $7;
      $286 = HEAP32[$285>>2]|0;
      $287 = (($286) + (($284*28)|0)|0);
      $288 = ((($287)) + 16|0);
      HEAP32[$288>>2] = -1;
      $289 = $8;
      $290 = $7;
      $291 = HEAP32[$290>>2]|0;
      $292 = (($291) + (($289*28)|0)|0);
      $293 = ((($292)) + 12|0);
      HEAP32[$293>>2] = -1;
      $294 = $8;
      $295 = $7;
      $296 = HEAP32[$295>>2]|0;
      $297 = (($296) + (($294*28)|0)|0);
      $298 = ((($297)) + 8|0);
      HEAP32[$298>>2] = -1;
      $299 = $8;
      $300 = $7;
      $301 = HEAP32[$300>>2]|0;
      $302 = (($301) + (($299*28)|0)|0);
      $303 = ((($302)) + 4|0);
      HEAP32[$303>>2] = -1;
      $9 = 2;
      while(1) {
       $304 = $9;
       $305 = $12;
       $306 = ($304|0)<($305|0);
       if (!($306)) {
        continue L8;
       }
       $307 = $9;
       $308 = (($5) + ($307<<2)|0);
       $309 = HEAP32[$308>>2]|0;
       $310 = (_strchr($309,61)|0);
       $6 = $310;
       $311 = ($310|0)!=(0|0);
       if (!($311)) {
        label = 79;
        break L8;
       }
       $318 = $6;
       $319 = ((($318)) + 1|0);
       $6 = $319;
       HEAP8[$318>>0] = 0;
       $320 = $9;
       $321 = (($5) + ($320<<2)|0);
       $322 = HEAP32[$321>>2]|0;
       $323 = (_strcmp($322,6143)|0);
       $324 = ($323|0)!=(0);
       do {
        if ($324) {
         $348 = $9;
         $349 = (($5) + ($348<<2)|0);
         $350 = HEAP32[$349>>2]|0;
         $351 = (_strcmp($350,6200)|0);
         $352 = ($351|0)!=(0);
         if (!($352)) {
          $353 = $6;
          $354 = (_atoi($353)|0);
          $10 = $354;
          $355 = $10;
          $356 = ($355|0)<(0);
          $357 = $10;
          $358 = ($357|0)>(127);
          $or$cond10 = $356 | $358;
          if ($or$cond10) {
           label = 90;
           break L8;
          }
          $359 = $6;
          $360 = HEAP8[$359>>0]|0;
          $361 = $360 << 24 >> 24;
          $362 = ($361|0)<(48);
          if ($362) {
           label = 90;
           break L8;
          }
          $363 = $6;
          $364 = HEAP8[$363>>0]|0;
          $365 = $364 << 24 >> 24;
          $366 = ($365|0)>(57);
          if ($366) {
           label = 90;
           break L8;
          }
          $370 = $10;
          $371 = $8;
          $372 = $7;
          $373 = HEAP32[$372>>2]|0;
          $374 = (($373) + (($371*28)|0)|0);
          $375 = ((($374)) + 4|0);
          HEAP32[$375>>2] = $370;
          break;
         }
         $376 = $9;
         $377 = (($5) + ($376<<2)|0);
         $378 = HEAP32[$377>>2]|0;
         $379 = (_strcmp($378,6250)|0);
         $380 = ($379|0)!=(0);
         if ($380) {
          $422 = $9;
          $423 = (($5) + ($422<<2)|0);
          $424 = HEAP32[$423>>2]|0;
          $425 = (_strcmp($424,6347)|0);
          $426 = ($425|0)!=(0);
          if (!($426)) {
           $427 = $6;
           $428 = (_strcmp($427,6352)|0);
           $429 = ($428|0)!=(0);
           if (!($429)) {
            $430 = $8;
            $431 = $7;
            $432 = HEAP32[$431>>2]|0;
            $433 = (($432) + (($430*28)|0)|0);
            $434 = ((($433)) + 20|0);
            HEAP32[$434>>2] = 0;
            break;
           }
           $435 = $6;
           $436 = (_strcmp($435,6356)|0);
           $437 = ($436|0)!=(0);
           if ($437) {
            label = 112;
            break L8;
           }
           $438 = $8;
           $439 = $7;
           $440 = HEAP32[$439>>2]|0;
           $441 = (($440) + (($438*28)|0)|0);
           $442 = ((($441)) + 16|0);
           HEAP32[$442>>2] = 0;
           break;
          }
          $446 = $9;
          $447 = (($5) + ($446<<2)|0);
          $448 = HEAP32[$447>>2]|0;
          $449 = (_strcmp($448,6400)|0);
          $450 = ($449|0)!=(0);
          if ($450) {
           label = 121;
           break L8;
          }
          $451 = $6;
          $452 = (_strcmp($451,6352)|0);
          $453 = ($452|0)!=(0);
          if (!($453)) {
           $454 = $8;
           $455 = $7;
           $456 = HEAP32[$455>>2]|0;
           $457 = (($456) + (($454*28)|0)|0);
           $458 = ((($457)) + 20|0);
           HEAP32[$458>>2] = 1;
           break;
          }
          $459 = $6;
          $460 = (_strcmp($459,6356)|0);
          $461 = ($460|0)!=(0);
          if (!($461)) {
           $462 = $8;
           $463 = $7;
           $464 = HEAP32[$463>>2]|0;
           $465 = (($464) + (($462*28)|0)|0);
           $466 = ((($465)) + 16|0);
           HEAP32[$466>>2] = 1;
           break;
          }
          $467 = $6;
          $468 = (_strcmp($467,6406)|0);
          $469 = ($468|0)!=(0);
          if ($469) {
           label = 120;
           break L8;
          }
          $470 = $8;
          $471 = $7;
          $472 = HEAP32[$471>>2]|0;
          $473 = (($472) + (($470*28)|0)|0);
          $474 = ((($473)) + 24|0);
          HEAP32[$474>>2] = 1;
          break;
         }
         $381 = $6;
         $382 = (_strcmp($381,6254)|0);
         $383 = ($382|0)!=(0);
         do {
          if ($383) {
           $384 = $6;
           $385 = (_strcmp($384,6261)|0);
           $386 = ($385|0)!=(0);
           if (!($386)) {
            $10 = 0;
            break;
           }
           $387 = $6;
           $388 = (_strcmp($387,6266)|0);
           $389 = ($388|0)!=(0);
           if ($389) {
            $390 = $6;
            $391 = (_atoi($390)|0);
            $392 = (($391) + 100)|0;
            $393 = ($392*100)|0;
            $394 = (($393|0) / 157)&-1;
            $10 = $394;
            break;
           } else {
            $10 = 127;
            break;
           }
          } else {
           $10 = 64;
          }
         } while(0);
         $395 = $10;
         $396 = ($395|0)<(0);
         $397 = $10;
         $398 = ($397|0)>(127);
         $or$cond12 = $396 | $398;
         if ($or$cond12) {
          label = 105;
          break L8;
         }
         $399 = $10;
         $400 = ($399|0)==(0);
         do {
          if ($400) {
           $401 = $6;
           $402 = HEAP8[$401>>0]|0;
           $403 = $402 << 24 >> 24;
           $404 = ($403|0)!=(45);
           if (!($404)) {
            break;
           }
           $405 = $6;
           $406 = HEAP8[$405>>0]|0;
           $407 = $406 << 24 >> 24;
           $408 = ($407|0)<(48);
           if ($408) {
            label = 105;
            break L8;
           }
           $409 = $6;
           $410 = HEAP8[$409>>0]|0;
           $411 = $410 << 24 >> 24;
           $412 = ($411|0)>(57);
           if ($412) {
            label = 105;
            break L8;
           }
          }
         } while(0);
         $416 = $10;
         $417 = $8;
         $418 = $7;
         $419 = HEAP32[$418>>2]|0;
         $420 = (($419) + (($417*28)|0)|0);
         $421 = ((($420)) + 12|0);
         HEAP32[$421>>2] = $416;
        } else {
         $325 = $6;
         $326 = (_atoi($325)|0);
         $10 = $326;
         $327 = $10;
         $328 = ($327|0)<(0);
         $329 = $10;
         $330 = ($329|0)>(800);
         $or$cond8 = $328 | $330;
         if ($or$cond8) {
          label = 84;
          break L8;
         }
         $331 = $6;
         $332 = HEAP8[$331>>0]|0;
         $333 = $332 << 24 >> 24;
         $334 = ($333|0)<(48);
         if ($334) {
          label = 84;
          break L8;
         }
         $335 = $6;
         $336 = HEAP8[$335>>0]|0;
         $337 = $336 << 24 >> 24;
         $338 = ($337|0)>(57);
         if ($338) {
          label = 84;
          break L8;
         }
         $342 = $10;
         $343 = $8;
         $344 = $7;
         $345 = HEAP32[$344>>2]|0;
         $346 = (($345) + (($343*28)|0)|0);
         $347 = ((($346)) + 8|0);
         HEAP32[$347>>2] = $342;
        }
       } while(0);
       $484 = $9;
       $485 = (($484) + 1)|0;
       $9 = $485;
      }
     }
    }
    $93 = HEAP32[1191]|0;
    $94 = HEAP32[$5>>2]|0;
    HEAP32[$vararg_buffer26>>2] = $94;
    (_fprintf($93,5496,$vararg_buffer26)|0);
    continue;
   }
  }
  $77 = HEAP32[1191]|0;
  $78 = HEAP32[$5>>2]|0;
  HEAP32[$vararg_buffer19>>2] = $78;
  (_fprintf($77,5326,$vararg_buffer19)|0);
 }
 switch (label|0) {
  case 36: {
   $108 = HEAP32[1191]|0;
   $109 = $2;
   $110 = $11;
   HEAP32[$vararg_buffer33>>2] = $109;
   $vararg_ptr36 = ((($vararg_buffer33)) + 4|0);
   HEAP32[$vararg_ptr36>>2] = $110;
   (_fprintf($108,5650,$vararg_buffer33)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 42: {
   $124 = HEAP32[1191]|0;
   $125 = $2;
   $126 = $11;
   HEAP32[$vararg_buffer37>>2] = $125;
   $vararg_ptr40 = ((($vararg_buffer37)) + 4|0);
   HEAP32[$vararg_ptr40>>2] = $126;
   (_fprintf($124,5690,$vararg_buffer37)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 48: {
   $144 = HEAP32[1191]|0;
   $145 = $2;
   $146 = $11;
   HEAP32[$vararg_buffer41>>2] = $145;
   $vararg_ptr44 = ((($vararg_buffer41)) + 4|0);
   HEAP32[$vararg_ptr44>>2] = $146;
   (_fprintf($144,5731,$vararg_buffer41)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 52: {
   $154 = HEAP32[1191]|0;
   $155 = $2;
   $156 = $11;
   HEAP32[$vararg_buffer45>>2] = $155;
   $vararg_ptr48 = ((($vararg_buffer45)) + 4|0);
   HEAP32[$vararg_ptr48>>2] = $156;
   (_fprintf($154,5789,$vararg_buffer45)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 54: {
   $164 = HEAP32[1191]|0;
   $165 = $2;
   $166 = $11;
   HEAP32[$vararg_buffer49>>2] = $165;
   $vararg_ptr52 = ((($vararg_buffer49)) + 4|0);
   HEAP32[$vararg_ptr52>>2] = $166;
   (_fprintf($164,5828,$vararg_buffer49)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 60: {
   $193 = HEAP32[1191]|0;
   $194 = $2;
   $195 = $11;
   HEAP32[$vararg_buffer53>>2] = $194;
   $vararg_ptr56 = ((($vararg_buffer53)) + 4|0);
   HEAP32[$vararg_ptr56>>2] = $195;
   (_fprintf($193,5882,$vararg_buffer53)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 62: {
   $203 = HEAP32[1191]|0;
   $204 = $2;
   $205 = $11;
   HEAP32[$vararg_buffer57>>2] = $204;
   $vararg_ptr60 = ((($vararg_buffer57)) + 4|0);
   HEAP32[$vararg_ptr60>>2] = $205;
   (_fprintf($203,5917,$vararg_buffer57)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 69: {
   $235 = HEAP32[1191]|0;
   $236 = $2;
   $237 = $11;
   HEAP32[$vararg_buffer61>>2] = $236;
   $vararg_ptr64 = ((($vararg_buffer61)) + 4|0);
   HEAP32[$vararg_ptr64>>2] = $237;
   (_fprintf($235,5967,$vararg_buffer61)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 71: {
   $244 = HEAP32[1191]|0;
   $245 = $2;
   $246 = $11;
   HEAP32[$vararg_buffer65>>2] = $245;
   $vararg_ptr68 = ((($vararg_buffer65)) + 4|0);
   HEAP32[$vararg_ptr68>>2] = $246;
   (_fprintf($244,5994,$vararg_buffer65)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 73: {
   $249 = HEAP32[1191]|0;
   $250 = $2;
   $251 = $11;
   HEAP32[$vararg_buffer69>>2] = $250;
   $vararg_ptr72 = ((($vararg_buffer69)) + 4|0);
   HEAP32[$vararg_ptr72>>2] = $251;
   (_fprintf($249,6042,$vararg_buffer69)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 79: {
   $312 = HEAP32[1191]|0;
   $313 = $2;
   $314 = $11;
   $315 = $9;
   $316 = (($5) + ($315<<2)|0);
   $317 = HEAP32[$316>>2]|0;
   HEAP32[$vararg_buffer73>>2] = $313;
   $vararg_ptr76 = ((($vararg_buffer73)) + 4|0);
   HEAP32[$vararg_ptr76>>2] = $314;
   $vararg_ptr77 = ((($vararg_buffer73)) + 8|0);
   HEAP32[$vararg_ptr77>>2] = $317;
   (_fprintf($312,6109,$vararg_buffer73)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 84: {
   $339 = HEAP32[1191]|0;
   $340 = $2;
   $341 = $11;
   HEAP32[$vararg_buffer78>>2] = $340;
   $vararg_ptr81 = ((($vararg_buffer78)) + 4|0);
   HEAP32[$vararg_ptr81>>2] = $341;
   $vararg_ptr82 = ((($vararg_buffer78)) + 8|0);
   HEAP32[$vararg_ptr82>>2] = 800;
   (_fprintf($339,6147,$vararg_buffer78)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 90: {
   $367 = HEAP32[1191]|0;
   $368 = $2;
   $369 = $11;
   HEAP32[$vararg_buffer83>>2] = $368;
   $vararg_ptr86 = ((($vararg_buffer83)) + 4|0);
   HEAP32[$vararg_ptr86>>2] = $369;
   (_fprintf($367,6205,$vararg_buffer83)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 105: {
   $413 = HEAP32[1191]|0;
   $414 = $2;
   $415 = $11;
   HEAP32[$vararg_buffer87>>2] = $414;
   $vararg_ptr90 = ((($vararg_buffer87)) + 4|0);
   HEAP32[$vararg_ptr90>>2] = $415;
   (_fprintf($413,6272,$vararg_buffer87)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 112: {
   $443 = HEAP32[1191]|0;
   $444 = $2;
   $445 = $11;
   HEAP32[$vararg_buffer91>>2] = $444;
   $vararg_ptr94 = ((($vararg_buffer91)) + 4|0);
   HEAP32[$vararg_ptr94>>2] = $445;
   (_fprintf($443,6361,$vararg_buffer91)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 120: {
   $475 = HEAP32[1191]|0;
   $476 = $2;
   $477 = $11;
   HEAP32[$vararg_buffer95>>2] = $476;
   $vararg_ptr98 = ((($vararg_buffer95)) + 4|0);
   HEAP32[$vararg_ptr98>>2] = $477;
   (_fprintf($475,6411,$vararg_buffer95)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 121: {
   $478 = HEAP32[1191]|0;
   $479 = $2;
   $480 = $11;
   $481 = $9;
   $482 = (($5) + ($481<<2)|0);
   $483 = HEAP32[$482>>2]|0;
   HEAP32[$vararg_buffer99>>2] = $479;
   $vararg_ptr102 = ((($vararg_buffer99)) + 4|0);
   HEAP32[$vararg_ptr102>>2] = $480;
   $vararg_ptr103 = ((($vararg_buffer99)) + 8|0);
   HEAP32[$vararg_ptr103>>2] = $483;
   (_fprintf($478,6109,$vararg_buffer99)|0);
   $1 = -2;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
  case 123: {
   $486 = $3;
   (_fclose($486)|0);
   $1 = 0;
   $487 = $1;
   STACKTOP = sp;return ($487|0);
   break;
  }
 }
 return (0)|0;
}
function ___fgets($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $6 = 0;
 $7 = 0;
 while(1) {
  $8 = $6;
  $9 = $4;
  $10 = ($8|0)<($9|0);
  if (!($10)) {
   break;
  }
  $11 = $7;
  $12 = ($11|0)!=(0);
  $13 = $12 ^ 1;
  if (!($13)) {
   break;
  }
  $14 = $6;
  $15 = $3;
  $16 = (($15) + ($14)|0);
  $17 = $5;
  $18 = (_fread($16,1,1,$17)|0);
  $19 = ($18|0)!=(1);
  if ($19) {
   break;
  }
  $20 = $6;
  $21 = $3;
  $22 = (($21) + ($20)|0);
  $23 = HEAP8[$22>>0]|0;
  $24 = $23 << 24 >> 24;
  $25 = ($24|0)==(10);
  if ($25) {
   label = 7;
  } else {
   $26 = $6;
   $27 = $3;
   $28 = (($27) + ($26)|0);
   $29 = HEAP8[$28>>0]|0;
   $30 = $29 << 24 >> 24;
   $31 = ($30|0)==(13);
   if ($31) {
    label = 7;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $32 = $6;
   $33 = $3;
   $34 = (($33) + ($32)|0);
   HEAP8[$34>>0] = 0;
   $7 = 1;
  }
  $35 = $6;
  $36 = (($35) + 1)|0;
  $6 = $36;
 }
 $37 = $6;
 $38 = $3;
 $39 = (($38) + ($37)|0);
 HEAP8[$39>>0] = 0;
 $40 = $6;
 $41 = ($40|0)!=(0);
 $42 = $3;
 $43 = $41 ? $42 : 0;
 STACKTOP = sp;return ($43|0);
}
function _mid_create_options($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = $4;
 HEAP32[2489] = $8;
 $9 = $5;
 HEAP16[(9960)>>1] = $9;
 $10 = $6;
 HEAP8[(9962)>>0] = $10;
 $11 = $7;
 HEAP16[(9964)>>1] = $11;
 STACKTOP = sp;return (9956|0);
}
function _mid_song_load_dls($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $switch$split2D = 0, $switch$split62D = 0, $switch$split92D = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $9 = $4;
 $10 = ($9|0)==(0|0);
 if ($10) {
  $3 = 0;
  $203 = $3;
  STACKTOP = sp;return ($203|0);
 }
 $11 = (_safe_malloc(14164)|0);
 $7 = $11;
 $12 = $7;
 _memset(($12|0),0,14164)|0;
 $13 = $5;
 $14 = $7;
 $15 = ((($14)) + 24|0);
 HEAP32[$15>>2] = $13;
 $8 = 0;
 while(1) {
  $16 = $8;
  $17 = ($16|0)<(128);
  if (!($17)) {
   break;
  }
  $18 = $8;
  $19 = (8928 + ($18<<2)|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ($20|0)!=(0|0);
  if ($21) {
   $22 = (_safe_malloc(516)|0);
   $23 = $8;
   $24 = $7;
   $25 = ((($24)) + 28|0);
   $26 = (($25) + ($23<<2)|0);
   HEAP32[$26>>2] = $22;
   $27 = $8;
   $28 = $7;
   $29 = ((($28)) + 28|0);
   $30 = (($29) + ($27<<2)|0);
   $31 = HEAP32[$30>>2]|0;
   _memset(($31|0),0,516)|0;
   $32 = $8;
   $33 = (8928 + ($32<<2)|0);
   $34 = HEAP32[$33>>2]|0;
   $35 = HEAP32[$34>>2]|0;
   $36 = $8;
   $37 = $7;
   $38 = ((($37)) + 28|0);
   $39 = (($38) + ($36<<2)|0);
   $40 = HEAP32[$39>>2]|0;
   HEAP32[$40>>2] = $35;
  }
  $41 = $8;
  $42 = (9440 + ($41<<2)|0);
  $43 = HEAP32[$42>>2]|0;
  $44 = ($43|0)!=(0|0);
  if ($44) {
   $45 = (_safe_malloc(516)|0);
   $46 = $8;
   $47 = $7;
   $48 = ((($47)) + 540|0);
   $49 = (($48) + ($46<<2)|0);
   HEAP32[$49>>2] = $45;
   $50 = $8;
   $51 = $7;
   $52 = ((($51)) + 540|0);
   $53 = (($52) + ($50<<2)|0);
   $54 = HEAP32[$53>>2]|0;
   _memset(($54|0),0,516)|0;
   $55 = $8;
   $56 = (9440 + ($55<<2)|0);
   $57 = HEAP32[$56>>2]|0;
   $58 = HEAP32[$57>>2]|0;
   $59 = $8;
   $60 = $7;
   $61 = ((($60)) + 540|0);
   $62 = (($61) + ($59<<2)|0);
   $63 = HEAP32[$62>>2]|0;
   HEAP32[$63>>2] = $58;
  }
  $64 = $8;
  $65 = (($64) + 1)|0;
  $8 = $65;
 }
 $66 = $7;
 $67 = ((($66)) + 20|0);
 HEAP32[$67>>2] = 70;
 $68 = $7;
 $69 = ((($68)) + 13052|0);
 HEAP32[$69>>2] = 32;
 $70 = $7;
 $71 = ((($70)) + 13056|0);
 HEAP32[$71>>2] = 33280;
 $72 = $6;
 $73 = HEAP32[$72>>2]|0;
 $74 = $7;
 $75 = ((($74)) + 4|0);
 HEAP32[$75>>2] = $73;
 $76 = $7;
 $77 = ((($76)) + 8|0);
 HEAP32[$77>>2] = 0;
 $78 = $6;
 $79 = ((($78)) + 4|0);
 $80 = HEAP16[$79>>1]|0;
 $81 = $80&65535;
 $82 = $81 & 255;
 $83 = ($82|0)==(16);
 if ($83) {
  $84 = $7;
  $85 = ((($84)) + 8|0);
  $86 = HEAP32[$85>>2]|0;
  $87 = $86 | 4;
  HEAP32[$85>>2] = $87;
 }
 $88 = $6;
 $89 = ((($88)) + 4|0);
 $90 = HEAP16[$89>>1]|0;
 $91 = $90&65535;
 $92 = $91 & 32768;
 $93 = ($92|0)!=(0);
 if ($93) {
  $94 = $7;
  $95 = ((($94)) + 8|0);
  $96 = HEAP32[$95>>2]|0;
  $97 = $96 | 2;
  HEAP32[$95>>2] = $97;
 }
 $98 = $6;
 $99 = ((($98)) + 6|0);
 $100 = HEAP8[$99>>0]|0;
 $101 = $100&255;
 $102 = ($101|0)==(1);
 if ($102) {
  $103 = $7;
  $104 = ((($103)) + 8|0);
  $105 = HEAP32[$104>>2]|0;
  $106 = $105 | 1;
  HEAP32[$104>>2] = $106;
 }
 $107 = $6;
 $108 = ((($107)) + 4|0);
 $109 = HEAP16[$108>>1]|0;
 $110 = $109&65535;
 $switch$split2D = ($110|0)<(32776);
 L24: do {
  if ($switch$split2D) {
   switch ($110|0) {
   case 8:  {
    $113 = $7;
    $114 = ((($113)) + 1060|0);
    HEAP32[$114>>2] = 10;
    break L24;
    break;
   }
   case 16:  {
    $119 = $7;
    $120 = ((($119)) + 1060|0);
    HEAP32[$120>>2] = 13;
    break L24;
    break;
   }
   default: {
    label = 22;
    break L24;
   }
   }
  } else {
   $switch$split62D = ($110|0)<(32784);
   if ($switch$split62D) {
    switch ($110|0) {
    case 32776:  {
     break;
    }
    default: {
     label = 22;
     break L24;
    }
    }
    $111 = $7;
    $112 = ((($111)) + 1060|0);
    HEAP32[$112>>2] = 9;
    break;
   }
   $switch$split92D = ($110|0)<(36880);
   if ($switch$split92D) {
    switch ($110|0) {
    case 32784:  {
     break;
    }
    default: {
     label = 22;
     break L24;
    }
    }
    $115 = $7;
    $116 = ((($115)) + 1060|0);
    HEAP32[$116>>2] = 11;
    break;
   } else {
    switch ($110|0) {
    case 36880:  {
     break;
    }
    default: {
     label = 22;
     break L24;
    }
    }
    $117 = $7;
    $118 = ((($117)) + 1060|0);
    HEAP32[$118>>2] = 12;
    break;
   }
  }
 } while(0);
 if ((label|0) == 22) {
  $121 = HEAP32[1191]|0;
  (_fprintf($121,6458,$vararg_buffer)|0);
  $122 = $7;
  $123 = ((($122)) + 1060|0);
  HEAP32[$123>>2] = 13;
 }
 $124 = $6;
 $125 = ((($124)) + 8|0);
 $126 = HEAP16[$125>>1]|0;
 $127 = $126&65535;
 $128 = $7;
 $129 = ((($128)) + 1064|0);
 HEAP32[$129>>2] = $127;
 $130 = $6;
 $131 = ((($130)) + 8|0);
 $132 = HEAP16[$131>>1]|0;
 $133 = $132&65535;
 $134 = $133<<1;
 $135 = (_safe_malloc($134)|0);
 $136 = $7;
 $137 = ((($136)) + 1068|0);
 HEAP32[$137>>2] = $135;
 $138 = $6;
 $139 = ((($138)) + 8|0);
 $140 = HEAP16[$139>>1]|0;
 $141 = $140&65535;
 $142 = $141<<1;
 $143 = $142<<2;
 $144 = (_safe_malloc($143)|0);
 $145 = $7;
 $146 = ((($145)) + 1072|0);
 HEAP32[$146>>2] = $144;
 $147 = $7;
 $148 = ((($147)) + 8|0);
 $149 = HEAP32[$148>>2]|0;
 $150 = $149 & 1;
 $151 = ($150|0)!=(0);
 $152 = $151 ? 1 : 2;
 $153 = $7;
 $154 = ((($153)) + 8|0);
 $155 = HEAP32[$154>>2]|0;
 $156 = $155 & 4;
 $157 = ($156|0)!=(0);
 $158 = $157 ? 2 : 1;
 $159 = Math_imul($152, $158)|0;
 $160 = $7;
 $161 = ((($160)) + 12|0);
 HEAP32[$161>>2] = $159;
 $162 = $6;
 $163 = HEAP32[$162>>2]|0;
 $164 = (($163|0) / 1000)&-1;
 $165 = $7;
 $166 = ((($165)) + 13060|0);
 HEAP32[$166>>2] = $164;
 $167 = $7;
 $168 = ((($167)) + 13060|0);
 $169 = HEAP32[$168>>2]|0;
 $170 = ($169|0)<(1);
 $171 = $7;
 $172 = ((($171)) + 13060|0);
 if ($170) {
  HEAP32[$172>>2] = 1;
 } else {
  $173 = HEAP32[$172>>2]|0;
  $174 = ($173|0)>(255);
  if ($174) {
   $175 = $7;
   $176 = ((($175)) + 13060|0);
   HEAP32[$176>>2] = 255;
  }
 }
 $177 = $7;
 $178 = ((($177)) + 13064|0);
 HEAP32[$178>>2] = 0;
 $179 = $7;
 $180 = ((($179)) + 13068|0);
 HEAP32[$180>>2] = 0;
 $181 = $4;
 $182 = $7;
 $183 = $7;
 $184 = ((($183)) + 13100|0);
 $185 = $7;
 $186 = ((($185)) + 13072|0);
 $187 = (_read_midi_file($181,$182,$184,$186)|0);
 $188 = $7;
 $189 = ((($188)) + 13076|0);
 HEAP32[$189>>2] = $187;
 $190 = $7;
 $191 = ((($190)) + 13076|0);
 $192 = HEAP32[$191>>2]|0;
 $193 = ($192|0)!=(0|0);
 $194 = $7;
 if (!($193)) {
  _free($194);
  $3 = 0;
  $203 = $3;
  STACKTOP = sp;return ($203|0);
 }
 $195 = ((($194)) + 1052|0);
 HEAP32[$195>>2] = 0;
 $196 = $7;
 $197 = ((($196)) + 1056|0);
 HEAP32[$197>>2] = 0;
 $198 = HEAP8[10551]|0;
 $199 = ($198<<24>>24)!=(0);
 if ($199) {
  $200 = $7;
  (_set_default_instrument($200,10551)|0);
 }
 $201 = $7;
 (_load_missing_instruments($201)|0);
 $202 = $7;
 $3 = $202;
 $203 = $3;
 STACKTOP = sp;return ($203|0);
}
function _mid_song_load($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2;
 $5 = $3;
 $6 = (_mid_song_load_dls($4,0,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _mid_song_free($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $3 = $1;
 _free_instruments($3);
 $2 = 0;
 while(1) {
  $4 = $2;
  $5 = ($4|0)<(128);
  if (!($5)) {
   break;
  }
  $6 = $2;
  $7 = $1;
  $8 = ((($7)) + 28|0);
  $9 = (($8) + ($6<<2)|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ($10|0)!=(0|0);
  if ($11) {
   $12 = $2;
   $13 = $1;
   $14 = ((($13)) + 28|0);
   $15 = (($14) + ($12<<2)|0);
   $16 = HEAP32[$15>>2]|0;
   _free($16);
  }
  $17 = $2;
  $18 = $1;
  $19 = ((($18)) + 540|0);
  $20 = (($19) + ($17<<2)|0);
  $21 = HEAP32[$20>>2]|0;
  $22 = ($21|0)!=(0|0);
  if ($22) {
   $23 = $2;
   $24 = $1;
   $25 = ((($24)) + 540|0);
   $26 = (($25) + ($23<<2)|0);
   $27 = HEAP32[$26>>2]|0;
   _free($27);
  }
  $28 = $2;
  $29 = (($28) + 1)|0;
  $2 = $29;
 }
 $30 = $1;
 $31 = ((($30)) + 1072|0);
 $32 = HEAP32[$31>>2]|0;
 _free($32);
 $33 = $1;
 $34 = ((($33)) + 1068|0);
 $35 = HEAP32[$34>>2]|0;
 _free($35);
 $36 = $1;
 $37 = ((($36)) + 13076|0);
 $38 = HEAP32[$37>>2]|0;
 _free($38);
 $2 = 0;
 while(1) {
  $39 = $2;
  $40 = ($39>>>0)<(8);
  if (!($40)) {
   break;
  }
  $41 = $2;
  $42 = $1;
  $43 = ((($42)) + 13104|0);
  $44 = (($43) + ($41<<2)|0);
  $45 = HEAP32[$44>>2]|0;
  $46 = ($45|0)!=(0|0);
  if ($46) {
   $47 = $2;
   $48 = $1;
   $49 = ((($48)) + 13104|0);
   $50 = (($49) + ($47<<2)|0);
   $51 = HEAP32[$50>>2]|0;
   _free($51);
  }
  $52 = $2;
  $53 = (($52) + 1)|0;
  $2 = $53;
 }
 $54 = $1;
 _free($54);
 STACKTOP = sp;return;
}
function _mid_exit() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $0 = 0;
 while(1) {
  $4 = $0;
  $5 = ($4|0)<(128);
  if (!($5)) {
   break;
  }
  $6 = $0;
  $7 = (8928 + ($6<<2)|0);
  $8 = HEAP32[$7>>2]|0;
  $9 = ($8|0)!=(0|0);
  if ($9) {
   $10 = $0;
   $11 = (8928 + ($10<<2)|0);
   $12 = HEAP32[$11>>2]|0;
   $13 = HEAP32[$12>>2]|0;
   $2 = $13;
   $14 = $2;
   $15 = ($14|0)!=(0|0);
   if ($15) {
    $1 = 0;
    while(1) {
     $16 = $1;
     $17 = ($16|0)<(128);
     if (!($17)) {
      break;
     }
     $18 = $1;
     $19 = $2;
     $20 = (($19) + (($18*28)|0)|0);
     $21 = HEAP32[$20>>2]|0;
     $22 = ($21|0)!=(0|0);
     if ($22) {
      $23 = $1;
      $24 = $2;
      $25 = (($24) + (($23*28)|0)|0);
      $26 = HEAP32[$25>>2]|0;
      _free($26);
     }
     $27 = $1;
     $28 = (($27) + 1)|0;
     $1 = $28;
    }
    $29 = $2;
    _free($29);
   }
   $30 = $0;
   $31 = (8928 + ($30<<2)|0);
   $32 = HEAP32[$31>>2]|0;
   _free($32);
  }
  $33 = $0;
  $34 = (9440 + ($33<<2)|0);
  $35 = HEAP32[$34>>2]|0;
  $36 = ($35|0)!=(0|0);
  if ($36) {
   $37 = $0;
   $38 = (9440 + ($37<<2)|0);
   $39 = HEAP32[$38>>2]|0;
   $40 = HEAP32[$39>>2]|0;
   $3 = $40;
   $41 = $3;
   $42 = ($41|0)!=(0|0);
   if ($42) {
    $1 = 0;
    while(1) {
     $43 = $1;
     $44 = ($43|0)<(128);
     if (!($44)) {
      break;
     }
     $45 = $1;
     $46 = $3;
     $47 = (($46) + (($45*28)|0)|0);
     $48 = HEAP32[$47>>2]|0;
     $49 = ($48|0)!=(0|0);
     if ($49) {
      $50 = $1;
      $51 = $3;
      $52 = (($51) + (($50*28)|0)|0);
      $53 = HEAP32[$52>>2]|0;
      _free($53);
     }
     $54 = $1;
     $55 = (($54) + 1)|0;
     $1 = $55;
    }
    $56 = $3;
    _free($56);
   }
   $57 = $0;
   $58 = (9440 + ($57<<2)|0);
   $59 = HEAP32[$58>>2]|0;
   _free($59);
  }
  $60 = $0;
  $61 = (($60) + 1)|0;
  $0 = $61;
 }
 _free_pathlist();
 STACKTOP = sp;return;
}
function ___stdio_close($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $1 = ((($0)) + 60|0);
 $2 = HEAP32[$1>>2]|0;
 HEAP32[$vararg_buffer>>2] = $2;
 $3 = (___syscall6(6,($vararg_buffer|0))|0);
 $4 = (___syscall_ret($3)|0);
 STACKTOP = sp;return ($4|0);
}
function ___stdio_read($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$026 = 0, $$cast = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 HEAP32[$3>>2] = $1;
 $4 = ((($3)) + 4|0);
 $5 = ((($0)) + 48|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ($6|0)!=(0);
 $8 = $7&1;
 $9 = (($2) - ($8))|0;
 HEAP32[$4>>2] = $9;
 $10 = ((($3)) + 8|0);
 $11 = ((($0)) + 44|0);
 $12 = HEAP32[$11>>2]|0;
 HEAP32[$10>>2] = $12;
 $13 = ((($3)) + 12|0);
 HEAP32[$13>>2] = $6;
 $14 = HEAP32[2492]|0;
 $15 = ($14|0)==(0|0);
 if ($15) {
  $20 = ((($0)) + 60|0);
  $21 = HEAP32[$20>>2]|0;
  HEAP32[$vararg_buffer3>>2] = $21;
  $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
  HEAP32[$vararg_ptr6>>2] = $3;
  $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
  HEAP32[$vararg_ptr7>>2] = 2;
  $22 = (___syscall145(145,($vararg_buffer3|0))|0);
  $23 = (___syscall_ret($22)|0);
  $$0 = $23;
 } else {
  _pthread_cleanup_push((14|0),($0|0));
  $16 = ((($0)) + 60|0);
  $17 = HEAP32[$16>>2]|0;
  HEAP32[$vararg_buffer>>2] = $17;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = $3;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = 2;
  $18 = (___syscall145(145,($vararg_buffer|0))|0);
  $19 = (___syscall_ret($18)|0);
  _pthread_cleanup_pop(0);
  $$0 = $19;
 }
 $24 = ($$0|0)<(1);
 if ($24) {
  $25 = $$0 & 48;
  $26 = $25 ^ 16;
  $27 = HEAP32[$0>>2]|0;
  $28 = $27 | $26;
  HEAP32[$0>>2] = $28;
  $29 = ((($0)) + 8|0);
  HEAP32[$29>>2] = 0;
  $30 = ((($0)) + 4|0);
  HEAP32[$30>>2] = 0;
  $$026 = $$0;
 } else {
  $31 = HEAP32[$4>>2]|0;
  $32 = ($$0>>>0)>($31>>>0);
  if ($32) {
   $33 = (($$0) - ($31))|0;
   $34 = HEAP32[$11>>2]|0;
   $35 = ((($0)) + 4|0);
   HEAP32[$35>>2] = $34;
   $$cast = $34;
   $36 = (($$cast) + ($33)|0);
   $37 = ((($0)) + 8|0);
   HEAP32[$37>>2] = $36;
   $38 = HEAP32[$5>>2]|0;
   $39 = ($38|0)==(0);
   if ($39) {
    $$026 = $2;
   } else {
    $40 = ((($$cast)) + 1|0);
    HEAP32[$35>>2] = $40;
    $41 = HEAP8[$$cast>>0]|0;
    $42 = (($2) + -1)|0;
    $43 = (($1) + ($42)|0);
    HEAP8[$43>>0] = $41;
    $$026 = $2;
   }
  } else {
   $$026 = $$0;
  }
 }
 STACKTOP = sp;return ($$026|0);
}
function ___stdio_seek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $3 = sp + 20|0;
 $4 = ((($0)) + 60|0);
 $5 = HEAP32[$4>>2]|0;
 HEAP32[$vararg_buffer>>2] = $5;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = 0;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $1;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $3;
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 HEAP32[$vararg_ptr4>>2] = $2;
 $6 = (___syscall140(140,($vararg_buffer|0))|0);
 $7 = (___syscall_ret($6)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  HEAP32[$3>>2] = -1;
  $9 = -1;
 } else {
  $$pre = HEAP32[$3>>2]|0;
  $9 = $$pre;
 }
 STACKTOP = sp;return ($9|0);
}
function ___syscall_ret($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0>>>0)>(4294963200);
 if ($1) {
  $2 = (0 - ($0))|0;
  $3 = (___errno_location()|0);
  HEAP32[$3>>2] = $2;
  $$0 = -1;
 } else {
  $$0 = $0;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[2492]|0;
 $1 = ($0|0)==(0|0);
 if ($1) {
  $$0 = 10012;
 } else {
  $2 = (_pthread_self()|0);
  $3 = ((($2)) + 64|0);
  $4 = HEAP32[$3>>2]|0;
  $$0 = $4;
 }
 return ($$0|0);
}
function _cleanup_109($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 68|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)==(0);
 if ($3) {
  ___unlockfile($0);
 }
 return;
}
function ___unlockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdio_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$056 = 0, $$058 = 0, $$059 = 0, $$061 = 0, $$1 = 0, $$157 = 0, $$160 = 0, $$phi$trans$insert = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 $4 = ((($0)) + 28|0);
 $5 = HEAP32[$4>>2]|0;
 HEAP32[$3>>2] = $5;
 $6 = ((($3)) + 4|0);
 $7 = ((($0)) + 20|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (($8) - ($5))|0;
 HEAP32[$6>>2] = $9;
 $10 = ((($3)) + 8|0);
 HEAP32[$10>>2] = $1;
 $11 = ((($3)) + 12|0);
 HEAP32[$11>>2] = $2;
 $12 = (($9) + ($2))|0;
 $13 = ((($0)) + 60|0);
 $14 = ((($0)) + 44|0);
 $$056 = 2;$$058 = $12;$$059 = $3;
 while(1) {
  $15 = HEAP32[2492]|0;
  $16 = ($15|0)==(0|0);
  if ($16) {
   $20 = HEAP32[$13>>2]|0;
   HEAP32[$vararg_buffer3>>2] = $20;
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   HEAP32[$vararg_ptr6>>2] = $$059;
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   HEAP32[$vararg_ptr7>>2] = $$056;
   $21 = (___syscall146(146,($vararg_buffer3|0))|0);
   $22 = (___syscall_ret($21)|0);
   $$0 = $22;
  } else {
   _pthread_cleanup_push((15|0),($0|0));
   $17 = HEAP32[$13>>2]|0;
   HEAP32[$vararg_buffer>>2] = $17;
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   HEAP32[$vararg_ptr1>>2] = $$059;
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   HEAP32[$vararg_ptr2>>2] = $$056;
   $18 = (___syscall146(146,($vararg_buffer|0))|0);
   $19 = (___syscall_ret($18)|0);
   _pthread_cleanup_pop(0);
   $$0 = $19;
  }
  $23 = ($$058|0)==($$0|0);
  if ($23) {
   label = 6;
   break;
  }
  $30 = ($$0|0)<(0);
  if ($30) {
   label = 8;
   break;
  }
  $38 = (($$058) - ($$0))|0;
  $39 = ((($$059)) + 4|0);
  $40 = HEAP32[$39>>2]|0;
  $41 = ($$0>>>0)>($40>>>0);
  if ($41) {
   $42 = HEAP32[$14>>2]|0;
   HEAP32[$4>>2] = $42;
   HEAP32[$7>>2] = $42;
   $43 = (($$0) - ($40))|0;
   $44 = ((($$059)) + 8|0);
   $45 = (($$056) + -1)|0;
   $$phi$trans$insert = ((($$059)) + 12|0);
   $$pre = HEAP32[$$phi$trans$insert>>2]|0;
   $$1 = $43;$$157 = $45;$$160 = $44;$53 = $$pre;
  } else {
   $46 = ($$056|0)==(2);
   if ($46) {
    $47 = HEAP32[$4>>2]|0;
    $48 = (($47) + ($$0)|0);
    HEAP32[$4>>2] = $48;
    $$1 = $$0;$$157 = 2;$$160 = $$059;$53 = $40;
   } else {
    $$1 = $$0;$$157 = $$056;$$160 = $$059;$53 = $40;
   }
  }
  $49 = HEAP32[$$160>>2]|0;
  $50 = (($49) + ($$1)|0);
  HEAP32[$$160>>2] = $50;
  $51 = ((($$160)) + 4|0);
  $52 = (($53) - ($$1))|0;
  HEAP32[$51>>2] = $52;
  $$056 = $$157;$$058 = $38;$$059 = $$160;
 }
 if ((label|0) == 6) {
  $24 = HEAP32[$14>>2]|0;
  $25 = ((($0)) + 48|0);
  $26 = HEAP32[$25>>2]|0;
  $27 = (($24) + ($26)|0);
  $28 = ((($0)) + 16|0);
  HEAP32[$28>>2] = $27;
  $29 = $24;
  HEAP32[$4>>2] = $29;
  HEAP32[$7>>2] = $29;
  $$061 = $2;
 }
 else if ((label|0) == 8) {
  $31 = ((($0)) + 16|0);
  HEAP32[$31>>2] = 0;
  HEAP32[$4>>2] = 0;
  HEAP32[$7>>2] = 0;
  $32 = HEAP32[$0>>2]|0;
  $33 = $32 | 32;
  HEAP32[$0>>2] = $33;
  $34 = ($$056|0)==(2);
  if ($34) {
   $$061 = 0;
  } else {
   $35 = ((($$059)) + 4|0);
   $36 = HEAP32[$35>>2]|0;
   $37 = (($2) - ($36))|0;
   $$061 = $37;
  }
 }
 STACKTOP = sp;return ($$061|0);
}
function _cleanup($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 68|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)==(0);
 if ($3) {
  ___unlockfile($0);
 }
 return;
}
function ___stdout_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $vararg_buffer = sp;
 $3 = sp + 12|0;
 $4 = ((($0)) + 36|0);
 HEAP32[$4>>2] = 2;
 $5 = HEAP32[$0>>2]|0;
 $6 = $5 & 64;
 $7 = ($6|0)==(0);
 if ($7) {
  $8 = ((($0)) + 60|0);
  $9 = HEAP32[$8>>2]|0;
  HEAP32[$vararg_buffer>>2] = $9;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = 21505;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = $3;
  $10 = (___syscall54(54,($vararg_buffer|0))|0);
  $11 = ($10|0)==(0);
  if (!($11)) {
   $12 = ((($0)) + 75|0);
   HEAP8[$12>>0] = -1;
  }
 }
 $13 = (___stdio_write($0,$1,$2)|0);
 STACKTOP = sp;return ($13|0);
}
function ___towrite($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 HEAP8[$1>>0] = $6;
 $7 = HEAP32[$0>>2]|0;
 $8 = $7 & 8;
 $9 = ($8|0)==(0);
 if ($9) {
  $11 = ((($0)) + 8|0);
  HEAP32[$11>>2] = 0;
  $12 = ((($0)) + 4|0);
  HEAP32[$12>>2] = 0;
  $13 = ((($0)) + 44|0);
  $14 = HEAP32[$13>>2]|0;
  $15 = ((($0)) + 28|0);
  HEAP32[$15>>2] = $14;
  $16 = ((($0)) + 20|0);
  HEAP32[$16>>2] = $14;
  $17 = $14;
  $18 = ((($0)) + 48|0);
  $19 = HEAP32[$18>>2]|0;
  $20 = (($17) + ($19)|0);
  $21 = ((($0)) + 16|0);
  HEAP32[$21>>2] = $20;
  $$0 = 0;
 } else {
  $10 = $7 | 32;
  HEAP32[$0>>2] = $10;
  $$0 = -1;
 }
 return ($$0|0);
}
function ___lockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function _printf($0,$varargs) {
 $0 = $0|0;
 $varargs = $varargs|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 HEAP32[$1>>2] = $varargs;
 $2 = HEAP32[1220]|0;
 $3 = (_vfprintf($2,$0,$1)|0);
 STACKTOP = sp;return ($3|0);
}
function _vfprintf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $$1$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $vacopy_currentptr = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(224|0);
 $3 = sp + 120|0;
 $4 = sp + 80|0;
 $5 = sp;
 $6 = sp + 136|0;
 dest=$4; stop=dest+40|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $vacopy_currentptr = HEAP32[$2>>2]|0;
 HEAP32[$3>>2] = $vacopy_currentptr;
 $7 = (_printf_core(0,$1,$3,$5,$4)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  $$0 = -1;
 } else {
  $9 = ((($0)) + 76|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ($10|0)>(-1);
  if ($11) {
   $12 = (___lockfile($0)|0);
   $39 = $12;
  } else {
   $39 = 0;
  }
  $13 = HEAP32[$0>>2]|0;
  $14 = $13 & 32;
  $15 = ((($0)) + 74|0);
  $16 = HEAP8[$15>>0]|0;
  $17 = ($16<<24>>24)<(1);
  if ($17) {
   $18 = $13 & -33;
   HEAP32[$0>>2] = $18;
  }
  $19 = ((($0)) + 48|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ($20|0)==(0);
  if ($21) {
   $23 = ((($0)) + 44|0);
   $24 = HEAP32[$23>>2]|0;
   HEAP32[$23>>2] = $6;
   $25 = ((($0)) + 28|0);
   HEAP32[$25>>2] = $6;
   $26 = ((($0)) + 20|0);
   HEAP32[$26>>2] = $6;
   HEAP32[$19>>2] = 80;
   $27 = ((($6)) + 80|0);
   $28 = ((($0)) + 16|0);
   HEAP32[$28>>2] = $27;
   $29 = (_printf_core($0,$1,$3,$5,$4)|0);
   $30 = ($24|0)==(0|0);
   if ($30) {
    $$1 = $29;
   } else {
    $31 = ((($0)) + 36|0);
    $32 = HEAP32[$31>>2]|0;
    (FUNCTION_TABLE_iiii[$32 & 31]($0,0,0)|0);
    $33 = HEAP32[$26>>2]|0;
    $34 = ($33|0)==(0|0);
    $$ = $34 ? -1 : $29;
    HEAP32[$23>>2] = $24;
    HEAP32[$19>>2] = 0;
    HEAP32[$28>>2] = 0;
    HEAP32[$25>>2] = 0;
    HEAP32[$26>>2] = 0;
    $$1 = $$;
   }
  } else {
   $22 = (_printf_core($0,$1,$3,$5,$4)|0);
   $$1 = $22;
  }
  $35 = HEAP32[$0>>2]|0;
  $36 = $35 & 32;
  $37 = ($36|0)==(0);
  $$1$ = $37 ? $$1 : -1;
  $38 = $35 | $14;
  HEAP32[$0>>2] = $38;
  $40 = ($39|0)==(0);
  if (!($40)) {
   ___unlockfile($0);
  }
  $$0 = $$1$;
 }
 STACKTOP = sp;return ($$0|0);
}
function _printf_core($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$3484$i = 0, $$$3484705$i = 0, $$$3484706$i = 0, $$$3501$i = 0, $$$4266 = 0, $$$4502$i = 0, $$$5 = 0, $$$i = 0, $$0 = 0, $$0$i = 0, $$0$lcssa$i300 = 0, $$0228 = 0, $$0229396 = 0, $$0232 = 0, $$0235 = 0, $$0237 = 0;
 var $$0240$lcssa = 0, $$0240$lcssa460 = 0, $$0240395 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0, $$0249383 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$ = 0, $$0259 = 0, $$0262342 = 0, $$0262390 = 0, $$0269 = 0, $$0269$phi = 0, $$0321 = 0, $$0463$lcssa$i = 0, $$0463594$i = 0, $$0464603$i = 0;
 var $$0466$i = 0.0, $$0470$i = 0, $$0471$i = 0.0, $$0479$i = 0, $$0487652$i = 0, $$0488$i = 0, $$0488663$i = 0, $$0488665$i = 0, $$0496$$9$i = 0, $$0497664$i = 0, $$0498$i = 0, $$05$lcssa$i = 0, $$0509592$i = 0.0, $$0510$i = 0, $$0511$i = 0, $$0514647$i = 0, $$0520$i = 0, $$0522$$i = 0, $$0522$i = 0, $$0524$i = 0;
 var $$0526$i = 0, $$0528$i = 0, $$0528639$i = 0, $$0528641$i = 0, $$0531646$i = 0, $$056$i = 0, $$06$i = 0, $$06$i290 = 0, $$06$i298 = 0, $$1 = 0, $$1230407 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241406 = 0, $$1244394 = 0, $$1248 = 0, $$1250 = 0, $$1255 = 0, $$1260 = 0;
 var $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$1322 = 0, $$1465$i = 0, $$1467$i = 0.0, $$1469$i = 0.0, $$1472$i = 0.0, $$1480$i = 0, $$1482$lcssa$i = 0, $$1482671$i = 0, $$1489651$i = 0, $$1499$lcssa$i = 0, $$1499670$i = 0, $$1508593$i = 0, $$1512$lcssa$i = 0, $$1512617$i = 0, $$1515$i = 0, $$1521$i = 0, $$1525$i = 0;
 var $$1527$i = 0, $$1529624$i = 0, $$1532$lcssa$i = 0, $$1532640$i = 0, $$1607$i = 0, $$2 = 0, $$2$i = 0, $$2234 = 0, $$2239 = 0, $$2242381 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2261 = 0, $$2271 = 0, $$2323$lcssa = 0, $$2323382 = 0, $$2473$i = 0.0, $$2476$$545$i = 0;
 var $$2476$$547$i = 0, $$2476$i = 0, $$2483$ph$i = 0, $$2490$lcssa$i = 0, $$2490632$i = 0, $$2500$i = 0, $$2513$i = 0, $$2516628$i = 0, $$2530$i = 0, $$2533627$i = 0, $$3$i = 0.0, $$3257 = 0, $$3265 = 0, $$3272 = 0, $$331 = 0, $$332 = 0, $$333 = 0, $$3379 = 0, $$3477$i = 0, $$3484$lcssa$i = 0;
 var $$3484658$i = 0, $$3501$lcssa$i = 0, $$3501657$i = 0, $$3534623$i = 0, $$4$i = 0.0, $$4258458 = 0, $$4266 = 0, $$4325 = 0, $$4478$lcssa$i = 0, $$4478600$i = 0, $$4492$i = 0, $$4502$i = 0, $$4518$i = 0, $$5 = 0, $$5$lcssa$i = 0, $$537$i = 0, $$538$$i = 0, $$538$i = 0, $$541$i = 0.0, $$544$i = 0;
 var $$546$i = 0, $$5486$lcssa$i = 0, $$5486633$i = 0, $$5493606$i = 0, $$5519$ph$i = 0, $$553$i = 0, $$554$i = 0, $$557$i = 0.0, $$5611$i = 0, $$6 = 0, $$6$i = 0, $$6268 = 0, $$6494599$i = 0, $$7 = 0, $$7495610$i = 0, $$7505$$i = 0, $$7505$i = 0, $$7505$ph$i = 0, $$8$i = 0, $$9$ph$i = 0;
 var $$lcssa683$i = 0, $$neg$i = 0, $$neg572$i = 0, $$pn$i = 0, $$pr = 0, $$pr$i = 0, $$pr571$i = 0, $$pre = 0, $$pre$i = 0, $$pre$phi704$iZ2D = 0, $$pre452 = 0, $$pre453 = 0, $$pre454 = 0, $$pre697$i = 0, $$pre700$i = 0, $$pre703$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0;
 var $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0;
 var $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0;
 var $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0;
 var $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0;
 var $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0;
 var $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0;
 var $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0;
 var $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0;
 var $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0;
 var $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0.0, $372 = 0, $373 = 0, $374 = 0, $375 = 0.0;
 var $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0;
 var $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0.0, $404 = 0.0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0;
 var $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0.0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0.0, $424 = 0.0, $425 = 0.0, $426 = 0.0, $427 = 0.0, $428 = 0.0, $429 = 0, $43 = 0;
 var $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0;
 var $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0.0, $455 = 0.0, $456 = 0.0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0;
 var $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0;
 var $485 = 0, $486 = 0, $487 = 0.0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0.0, $494 = 0.0, $495 = 0.0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0;
 var $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0;
 var $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0;
 var $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0;
 var $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0;
 var $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0;
 var $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0.0, $606 = 0.0, $607 = 0, $608 = 0.0, $609 = 0, $61 = 0;
 var $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0;
 var $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0;
 var $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0;
 var $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0;
 var $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0;
 var $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0;
 var $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0;
 var $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0;
 var $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0;
 var $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0;
 var $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0;
 var $809 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i292 = 0, $isdigit275 = 0;
 var $isdigit277 = 0, $isdigit5$i = 0, $isdigit5$i288 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i291 = 0, $isdigittmp274 = 0, $isdigittmp276 = 0, $isdigittmp4$i = 0, $isdigittmp4$i287 = 0, $isdigittmp7$i = 0, $isdigittmp7$i289 = 0, $notlhs$i = 0, $notrhs$i = 0, $or$cond = 0, $or$cond$i = 0, $or$cond280 = 0, $or$cond282 = 0, $or$cond285 = 0;
 var $or$cond3$not$i = 0, $or$cond412 = 0, $or$cond540$i = 0, $or$cond543$i = 0, $or$cond552$i = 0, $or$cond6$i = 0, $scevgep694$i = 0, $scevgep694695$i = 0, $storemerge = 0, $storemerge273345 = 0, $storemerge273389 = 0, $storemerge278 = 0, $sum = 0, $trunc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(624|0);
 $5 = sp + 24|0;
 $6 = sp + 16|0;
 $7 = sp + 588|0;
 $8 = sp + 576|0;
 $9 = sp;
 $10 = sp + 536|0;
 $11 = sp + 8|0;
 $12 = sp + 528|0;
 $13 = ($0|0)!=(0|0);
 $14 = ((($10)) + 40|0);
 $15 = $14;
 $16 = ((($10)) + 39|0);
 $17 = ((($11)) + 4|0);
 $18 = $7;
 $19 = (0 - ($18))|0;
 $20 = ((($8)) + 12|0);
 $21 = ((($8)) + 11|0);
 $22 = $20;
 $23 = (($22) - ($18))|0;
 $24 = (-2 - ($18))|0;
 $25 = (($22) + 2)|0;
 $26 = ((($5)) + 288|0);
 $27 = ((($7)) + 9|0);
 $28 = $27;
 $29 = ((($7)) + 8|0);
 $$0243 = 0;$$0247 = 0;$$0269 = 0;$$0321 = $1;
 L1: while(1) {
  $30 = ($$0247|0)>(-1);
  do {
   if ($30) {
    $31 = (2147483647 - ($$0247))|0;
    $32 = ($$0243|0)>($31|0);
    if ($32) {
     $33 = (___errno_location()|0);
     HEAP32[$33>>2] = 75;
     $$1248 = -1;
     break;
    } else {
     $34 = (($$0243) + ($$0247))|0;
     $$1248 = $34;
     break;
    }
   } else {
    $$1248 = $$0247;
   }
  } while(0);
  $35 = HEAP8[$$0321>>0]|0;
  $36 = ($35<<24>>24)==(0);
  if ($36) {
   label = 243;
   break;
  } else {
   $$1322 = $$0321;$37 = $35;
  }
  L9: while(1) {
   switch ($37<<24>>24) {
   case 37:  {
    $$0249383 = $$1322;$$2323382 = $$1322;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $$0249$lcssa = $$1322;$$2323$lcssa = $$1322;
    break L9;
    break;
   }
   default: {
   }
   }
   $38 = ((($$1322)) + 1|0);
   $$pre = HEAP8[$38>>0]|0;
   $$1322 = $38;$37 = $$pre;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $39 = ((($$2323382)) + 1|0);
     $40 = HEAP8[$39>>0]|0;
     $41 = ($40<<24>>24)==(37);
     if (!($41)) {
      $$0249$lcssa = $$0249383;$$2323$lcssa = $$2323382;
      break L12;
     }
     $42 = ((($$0249383)) + 1|0);
     $43 = ((($$2323382)) + 2|0);
     $44 = HEAP8[$43>>0]|0;
     $45 = ($44<<24>>24)==(37);
     if ($45) {
      $$0249383 = $42;$$2323382 = $43;
      label = 9;
     } else {
      $$0249$lcssa = $42;$$2323$lcssa = $43;
      break;
     }
    }
   }
  } while(0);
  $46 = $$0249$lcssa;
  $47 = $$0321;
  $48 = (($46) - ($47))|0;
  if ($13) {
   $49 = HEAP32[$0>>2]|0;
   $50 = $49 & 32;
   $51 = ($50|0)==(0);
   if ($51) {
    (___fwritex($$0321,$48,$0)|0);
   }
  }
  $52 = ($48|0)==(0);
  if (!($52)) {
   $$0269$phi = $$0269;$$0243 = $48;$$0247 = $$1248;$$0321 = $$2323$lcssa;$$0269 = $$0269$phi;
   continue;
  }
  $53 = ((($$2323$lcssa)) + 1|0);
  $54 = HEAP8[$53>>0]|0;
  $55 = $54 << 24 >> 24;
  $isdigittmp = (($55) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $56 = ((($$2323$lcssa)) + 2|0);
   $57 = HEAP8[$56>>0]|0;
   $58 = ($57<<24>>24)==(36);
   $59 = ((($$2323$lcssa)) + 3|0);
   $$331 = $58 ? $59 : $53;
   $$$0269 = $58 ? 1 : $$0269;
   $isdigittmp$ = $58 ? $isdigittmp : -1;
   $$pre452 = HEAP8[$$331>>0]|0;
   $$0253 = $isdigittmp$;$$1270 = $$$0269;$61 = $$pre452;$storemerge = $$331;
  } else {
   $$0253 = -1;$$1270 = $$0269;$61 = $54;$storemerge = $53;
  }
  $60 = $61 << 24 >> 24;
  $62 = (($60) + -32)|0;
  $63 = ($62>>>0)<(32);
  L25: do {
   if ($63) {
    $$0262390 = 0;$65 = $62;$69 = $61;$storemerge273389 = $storemerge;
    while(1) {
     $64 = 1 << $65;
     $66 = $64 & 75913;
     $67 = ($66|0)==(0);
     if ($67) {
      $$0262342 = $$0262390;$78 = $69;$storemerge273345 = $storemerge273389;
      break L25;
     }
     $68 = $69 << 24 >> 24;
     $70 = (($68) + -32)|0;
     $71 = 1 << $70;
     $72 = $71 | $$0262390;
     $73 = ((($storemerge273389)) + 1|0);
     $74 = HEAP8[$73>>0]|0;
     $75 = $74 << 24 >> 24;
     $76 = (($75) + -32)|0;
     $77 = ($76>>>0)<(32);
     if ($77) {
      $$0262390 = $72;$65 = $76;$69 = $74;$storemerge273389 = $73;
     } else {
      $$0262342 = $72;$78 = $74;$storemerge273345 = $73;
      break;
     }
    }
   } else {
    $$0262342 = 0;$78 = $61;$storemerge273345 = $storemerge;
   }
  } while(0);
  $79 = ($78<<24>>24)==(42);
  do {
   if ($79) {
    $80 = ((($storemerge273345)) + 1|0);
    $81 = HEAP8[$80>>0]|0;
    $82 = $81 << 24 >> 24;
    $isdigittmp276 = (($82) + -48)|0;
    $isdigit277 = ($isdigittmp276>>>0)<(10);
    if ($isdigit277) {
     $83 = ((($storemerge273345)) + 2|0);
     $84 = HEAP8[$83>>0]|0;
     $85 = ($84<<24>>24)==(36);
     if ($85) {
      $86 = (($4) + ($isdigittmp276<<2)|0);
      HEAP32[$86>>2] = 10;
      $87 = HEAP8[$80>>0]|0;
      $88 = $87 << 24 >> 24;
      $89 = (($88) + -48)|0;
      $90 = (($3) + ($89<<3)|0);
      $91 = $90;
      $92 = $91;
      $93 = HEAP32[$92>>2]|0;
      $94 = (($91) + 4)|0;
      $95 = $94;
      $96 = HEAP32[$95>>2]|0;
      $97 = ((($storemerge273345)) + 3|0);
      $$0259 = $93;$$2271 = 1;$storemerge278 = $97;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $98 = ($$1270|0)==(0);
     if (!($98)) {
      $$0 = -1;
      break L1;
     }
     if (!($13)) {
      $$1260 = 0;$$1263 = $$0262342;$$3272 = 0;$$4325 = $80;$$pr = $81;
      break;
     }
     $arglist_current = HEAP32[$2>>2]|0;
     $99 = $arglist_current;
     $100 = ((0) + 4|0);
     $expanded4 = $100;
     $expanded = (($expanded4) - 1)|0;
     $101 = (($99) + ($expanded))|0;
     $102 = ((0) + 4|0);
     $expanded8 = $102;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $103 = $101 & $expanded6;
     $104 = $103;
     $105 = HEAP32[$104>>2]|0;
     $arglist_next = ((($104)) + 4|0);
     HEAP32[$2>>2] = $arglist_next;
     $$0259 = $105;$$2271 = 0;$storemerge278 = $80;
    }
    $106 = ($$0259|0)<(0);
    $107 = $$0262342 | 8192;
    $108 = (0 - ($$0259))|0;
    $$$0262 = $106 ? $107 : $$0262342;
    $$$0259 = $106 ? $108 : $$0259;
    $$pre453 = HEAP8[$storemerge278>>0]|0;
    $$1260 = $$$0259;$$1263 = $$$0262;$$3272 = $$2271;$$4325 = $storemerge278;$$pr = $$pre453;
   } else {
    $109 = $78 << 24 >> 24;
    $isdigittmp4$i = (($109) + -48)|0;
    $isdigit5$i = ($isdigittmp4$i>>>0)<(10);
    if ($isdigit5$i) {
     $$06$i = 0;$113 = $storemerge273345;$isdigittmp7$i = $isdigittmp4$i;
     while(1) {
      $110 = ($$06$i*10)|0;
      $111 = (($110) + ($isdigittmp7$i))|0;
      $112 = ((($113)) + 1|0);
      $114 = HEAP8[$112>>0]|0;
      $115 = $114 << 24 >> 24;
      $isdigittmp$i = (($115) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $$06$i = $111;$113 = $112;$isdigittmp7$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $116 = ($111|0)<(0);
     if ($116) {
      $$0 = -1;
      break L1;
     } else {
      $$1260 = $111;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $112;$$pr = $114;
     }
    } else {
     $$1260 = 0;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $storemerge273345;$$pr = $78;
    }
   }
  } while(0);
  $117 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($117) {
    $118 = ((($$4325)) + 1|0);
    $119 = HEAP8[$118>>0]|0;
    $120 = ($119<<24>>24)==(42);
    if (!($120)) {
     $147 = $119 << 24 >> 24;
     $isdigittmp4$i287 = (($147) + -48)|0;
     $isdigit5$i288 = ($isdigittmp4$i287>>>0)<(10);
     if ($isdigit5$i288) {
      $$06$i290 = 0;$151 = $118;$isdigittmp7$i289 = $isdigittmp4$i287;
     } else {
      $$0254 = 0;$$6 = $118;
      break;
     }
     while(1) {
      $148 = ($$06$i290*10)|0;
      $149 = (($148) + ($isdigittmp7$i289))|0;
      $150 = ((($151)) + 1|0);
      $152 = HEAP8[$150>>0]|0;
      $153 = $152 << 24 >> 24;
      $isdigittmp$i291 = (($153) + -48)|0;
      $isdigit$i292 = ($isdigittmp$i291>>>0)<(10);
      if ($isdigit$i292) {
       $$06$i290 = $149;$151 = $150;$isdigittmp7$i289 = $isdigittmp$i291;
      } else {
       $$0254 = $149;$$6 = $150;
       break L45;
      }
     }
    }
    $121 = ((($$4325)) + 2|0);
    $122 = HEAP8[$121>>0]|0;
    $123 = $122 << 24 >> 24;
    $isdigittmp274 = (($123) + -48)|0;
    $isdigit275 = ($isdigittmp274>>>0)<(10);
    if ($isdigit275) {
     $124 = ((($$4325)) + 3|0);
     $125 = HEAP8[$124>>0]|0;
     $126 = ($125<<24>>24)==(36);
     if ($126) {
      $127 = (($4) + ($isdigittmp274<<2)|0);
      HEAP32[$127>>2] = 10;
      $128 = HEAP8[$121>>0]|0;
      $129 = $128 << 24 >> 24;
      $130 = (($129) + -48)|0;
      $131 = (($3) + ($130<<3)|0);
      $132 = $131;
      $133 = $132;
      $134 = HEAP32[$133>>2]|0;
      $135 = (($132) + 4)|0;
      $136 = $135;
      $137 = HEAP32[$136>>2]|0;
      $138 = ((($$4325)) + 4|0);
      $$0254 = $134;$$6 = $138;
      break;
     }
    }
    $139 = ($$3272|0)==(0);
    if (!($139)) {
     $$0 = -1;
     break L1;
    }
    if ($13) {
     $arglist_current2 = HEAP32[$2>>2]|0;
     $140 = $arglist_current2;
     $141 = ((0) + 4|0);
     $expanded11 = $141;
     $expanded10 = (($expanded11) - 1)|0;
     $142 = (($140) + ($expanded10))|0;
     $143 = ((0) + 4|0);
     $expanded15 = $143;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $144 = $142 & $expanded13;
     $145 = $144;
     $146 = HEAP32[$145>>2]|0;
     $arglist_next3 = ((($145)) + 4|0);
     HEAP32[$2>>2] = $arglist_next3;
     $$0254 = $146;$$6 = $121;
    } else {
     $$0254 = 0;$$6 = $121;
    }
   } else {
    $$0254 = -1;$$6 = $$4325;
   }
  } while(0);
  $$0252 = 0;$$7 = $$6;
  while(1) {
   $154 = HEAP8[$$7>>0]|0;
   $155 = $154 << 24 >> 24;
   $156 = (($155) + -65)|0;
   $157 = ($156>>>0)>(57);
   if ($157) {
    $$0 = -1;
    break L1;
   }
   $158 = ((($$7)) + 1|0);
   $159 = ((6484 + (($$0252*58)|0)|0) + ($156)|0);
   $160 = HEAP8[$159>>0]|0;
   $161 = $160&255;
   $162 = (($161) + -1)|0;
   $163 = ($162>>>0)<(8);
   if ($163) {
    $$0252 = $161;$$7 = $158;
   } else {
    break;
   }
  }
  $164 = ($160<<24>>24)==(0);
  if ($164) {
   $$0 = -1;
   break;
  }
  $165 = ($160<<24>>24)==(19);
  $166 = ($$0253|0)>(-1);
  do {
   if ($165) {
    if ($166) {
     $$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($166) {
     $167 = (($4) + ($$0253<<2)|0);
     HEAP32[$167>>2] = $161;
     $168 = (($3) + ($$0253<<3)|0);
     $169 = $168;
     $170 = $169;
     $171 = HEAP32[$170>>2]|0;
     $172 = (($169) + 4)|0;
     $173 = $172;
     $174 = HEAP32[$173>>2]|0;
     $175 = $9;
     $176 = $175;
     HEAP32[$176>>2] = $171;
     $177 = (($175) + 4)|0;
     $178 = $177;
     HEAP32[$178>>2] = $174;
     label = 51;
     break;
    }
    if (!($13)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg_38($9,$161,$2);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($13)) {
    $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
    continue;
   }
  }
  $179 = HEAP8[$$7>>0]|0;
  $180 = $179 << 24 >> 24;
  $181 = ($$0252|0)!=(0);
  $182 = $180 & 15;
  $183 = ($182|0)==(3);
  $or$cond280 = $181 & $183;
  $184 = $180 & -33;
  $$0235 = $or$cond280 ? $184 : $180;
  $185 = $$1263 & 8192;
  $186 = ($185|0)==(0);
  $187 = $$1263 & -65537;
  $$1263$ = $186 ? $$1263 : $187;
  L74: do {
   switch ($$0235|0) {
   case 110:  {
    $trunc = $$0252&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $194 = HEAP32[$9>>2]|0;
     HEAP32[$194>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
     break;
    }
    case 1:  {
     $195 = HEAP32[$9>>2]|0;
     HEAP32[$195>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
     break;
    }
    case 2:  {
     $196 = ($$1248|0)<(0);
     $197 = $196 << 31 >> 31;
     $198 = HEAP32[$9>>2]|0;
     $199 = $198;
     $200 = $199;
     HEAP32[$200>>2] = $$1248;
     $201 = (($199) + 4)|0;
     $202 = $201;
     HEAP32[$202>>2] = $197;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
     break;
    }
    case 3:  {
     $203 = $$1248&65535;
     $204 = HEAP32[$9>>2]|0;
     HEAP16[$204>>1] = $203;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
     break;
    }
    case 4:  {
     $205 = $$1248&255;
     $206 = HEAP32[$9>>2]|0;
     HEAP8[$206>>0] = $205;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
     break;
    }
    case 6:  {
     $207 = HEAP32[$9>>2]|0;
     HEAP32[$207>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
     break;
    }
    case 7:  {
     $208 = ($$1248|0)<(0);
     $209 = $208 << 31 >> 31;
     $210 = HEAP32[$9>>2]|0;
     $211 = $210;
     $212 = $211;
     HEAP32[$212>>2] = $$1248;
     $213 = (($211) + 4)|0;
     $214 = $213;
     HEAP32[$214>>2] = $209;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
     break;
    }
    default: {
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $215 = ($$0254>>>0)>(8);
    $216 = $215 ? $$0254 : 8;
    $217 = $$1263$ | 8;
    $$1236 = 120;$$1255 = $216;$$3265 = $217;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $$1236 = $$0235;$$1255 = $$0254;$$3265 = $$1263$;
    label = 63;
    break;
   }
   case 111:  {
    $257 = $9;
    $258 = $257;
    $259 = HEAP32[$258>>2]|0;
    $260 = (($257) + 4)|0;
    $261 = $260;
    $262 = HEAP32[$261>>2]|0;
    $263 = ($259|0)==(0);
    $264 = ($262|0)==(0);
    $265 = $263 & $264;
    if ($265) {
     $$0$lcssa$i300 = $14;
    } else {
     $$06$i298 = $14;$267 = $259;$271 = $262;
     while(1) {
      $266 = $267 & 7;
      $268 = $266 | 48;
      $269 = $268&255;
      $270 = ((($$06$i298)) + -1|0);
      HEAP8[$270>>0] = $269;
      $272 = (_bitshift64Lshr(($267|0),($271|0),3)|0);
      $273 = tempRet0;
      $274 = ($272|0)==(0);
      $275 = ($273|0)==(0);
      $276 = $274 & $275;
      if ($276) {
       $$0$lcssa$i300 = $270;
       break;
      } else {
       $$06$i298 = $270;$267 = $272;$271 = $273;
      }
     }
    }
    $277 = $$1263$ & 8;
    $278 = ($277|0)==(0);
    if ($278) {
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 6964;$$2256 = $$0254;$$4266 = $$1263$;
     label = 76;
    } else {
     $279 = $$0$lcssa$i300;
     $280 = (($15) - ($279))|0;
     $281 = ($$0254|0)>($280|0);
     $282 = (($280) + 1)|0;
     $$0254$ = $281 ? $$0254 : $282;
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 6964;$$2256 = $$0254$;$$4266 = $$1263$;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $283 = $9;
    $284 = $283;
    $285 = HEAP32[$284>>2]|0;
    $286 = (($283) + 4)|0;
    $287 = $286;
    $288 = HEAP32[$287>>2]|0;
    $289 = ($288|0)<(0);
    if ($289) {
     $290 = (_i64Subtract(0,0,($285|0),($288|0))|0);
     $291 = tempRet0;
     $292 = $9;
     $293 = $292;
     HEAP32[$293>>2] = $290;
     $294 = (($292) + 4)|0;
     $295 = $294;
     HEAP32[$295>>2] = $291;
     $$0232 = 1;$$0237 = 6964;$300 = $290;$301 = $291;
     label = 75;
     break L74;
    }
    $296 = $$1263$ & 2048;
    $297 = ($296|0)==(0);
    if ($297) {
     $298 = $$1263$ & 1;
     $299 = ($298|0)==(0);
     $$ = $299 ? 6964 : (6966);
     $$0232 = $298;$$0237 = $$;$300 = $285;$301 = $288;
     label = 75;
    } else {
     $$0232 = 1;$$0237 = (6965);$300 = $285;$301 = $288;
     label = 75;
    }
    break;
   }
   case 117:  {
    $188 = $9;
    $189 = $188;
    $190 = HEAP32[$189>>2]|0;
    $191 = (($188) + 4)|0;
    $192 = $191;
    $193 = HEAP32[$192>>2]|0;
    $$0232 = 0;$$0237 = 6964;$300 = $190;$301 = $193;
    label = 75;
    break;
   }
   case 99:  {
    $321 = $9;
    $322 = $321;
    $323 = HEAP32[$322>>2]|0;
    $324 = (($321) + 4)|0;
    $325 = $324;
    $326 = HEAP32[$325>>2]|0;
    $327 = $323&255;
    HEAP8[$16>>0] = $327;
    $$2 = $16;$$2234 = 0;$$2239 = 6964;$$2251 = $14;$$5 = 1;$$6268 = $187;
    break;
   }
   case 109:  {
    $328 = (___errno_location()|0);
    $329 = HEAP32[$328>>2]|0;
    $330 = (_strerror($329)|0);
    $$1 = $330;
    label = 81;
    break;
   }
   case 115:  {
    $331 = HEAP32[$9>>2]|0;
    $332 = ($331|0)!=(0|0);
    $333 = $332 ? $331 : 6974;
    $$1 = $333;
    label = 81;
    break;
   }
   case 67:  {
    $340 = $9;
    $341 = $340;
    $342 = HEAP32[$341>>2]|0;
    $343 = (($340) + 4)|0;
    $344 = $343;
    $345 = HEAP32[$344>>2]|0;
    HEAP32[$11>>2] = $342;
    HEAP32[$17>>2] = 0;
    HEAP32[$9>>2] = $11;
    $$4258458 = -1;$809 = $11;
    label = 85;
    break;
   }
   case 83:  {
    $$pre454 = HEAP32[$9>>2]|0;
    $346 = ($$0254|0)==(0);
    if ($346) {
     _pad($0,32,$$1260,0,$$1263$);
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$4258458 = $$0254;$809 = $$pre454;
     label = 85;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $371 = +HEAPF64[$9>>3];
    HEAP32[$6>>2] = 0;
    HEAPF64[tempDoublePtr>>3] = $371;$372 = HEAP32[tempDoublePtr>>2]|0;
    $373 = HEAP32[tempDoublePtr+4>>2]|0;
    $374 = ($373|0)<(0);
    if ($374) {
     $375 = -$371;
     $$0471$i = $375;$$0520$i = 1;$$0522$i = 6981;
    } else {
     $376 = $$1263$ & 2048;
     $377 = ($376|0)==(0);
     $378 = $$1263$ & 1;
     if ($377) {
      $379 = ($378|0)==(0);
      $$$i = $379 ? (6982) : (6987);
      $$0471$i = $371;$$0520$i = $378;$$0522$i = $$$i;
     } else {
      $$0471$i = $371;$$0520$i = 1;$$0522$i = (6984);
     }
    }
    HEAPF64[tempDoublePtr>>3] = $$0471$i;$380 = HEAP32[tempDoublePtr>>2]|0;
    $381 = HEAP32[tempDoublePtr+4>>2]|0;
    $382 = $381 & 2146435072;
    $383 = ($382>>>0)<(2146435072);
    $384 = (0)<(0);
    $385 = ($382|0)==(2146435072);
    $386 = $385 & $384;
    $387 = $383 | $386;
    do {
     if ($387) {
      $403 = (+_frexpl($$0471$i,$6));
      $404 = $403 * 2.0;
      $405 = $404 != 0.0;
      if ($405) {
       $406 = HEAP32[$6>>2]|0;
       $407 = (($406) + -1)|0;
       HEAP32[$6>>2] = $407;
      }
      $408 = $$0235 | 32;
      $409 = ($408|0)==(97);
      if ($409) {
       $410 = $$0235 & 32;
       $411 = ($410|0)==(0);
       $412 = ((($$0522$i)) + 9|0);
       $$0522$$i = $411 ? $$0522$i : $412;
       $413 = $$0520$i | 2;
       $414 = ($$0254>>>0)>(11);
       $415 = (12 - ($$0254))|0;
       $416 = ($415|0)==(0);
       $417 = $414 | $416;
       do {
        if ($417) {
         $$1472$i = $404;
        } else {
         $$0509592$i = 8.0;$$1508593$i = $415;
         while(1) {
          $418 = (($$1508593$i) + -1)|0;
          $419 = $$0509592$i * 16.0;
          $420 = ($418|0)==(0);
          if ($420) {
           break;
          } else {
           $$0509592$i = $419;$$1508593$i = $418;
          }
         }
         $421 = HEAP8[$$0522$$i>>0]|0;
         $422 = ($421<<24>>24)==(45);
         if ($422) {
          $423 = -$404;
          $424 = $423 - $419;
          $425 = $419 + $424;
          $426 = -$425;
          $$1472$i = $426;
          break;
         } else {
          $427 = $404 + $419;
          $428 = $427 - $419;
          $$1472$i = $428;
          break;
         }
        }
       } while(0);
       $429 = HEAP32[$6>>2]|0;
       $430 = ($429|0)<(0);
       $431 = (0 - ($429))|0;
       $432 = $430 ? $431 : $429;
       $433 = ($432|0)<(0);
       $434 = $433 << 31 >> 31;
       $435 = (_fmt_u($432,$434,$20)|0);
       $436 = ($435|0)==($20|0);
       if ($436) {
        HEAP8[$21>>0] = 48;
        $$0511$i = $21;
       } else {
        $$0511$i = $435;
       }
       $437 = $429 >> 31;
       $438 = $437 & 2;
       $439 = (($438) + 43)|0;
       $440 = $439&255;
       $441 = ((($$0511$i)) + -1|0);
       HEAP8[$441>>0] = $440;
       $442 = (($$0235) + 15)|0;
       $443 = $442&255;
       $444 = ((($$0511$i)) + -2|0);
       HEAP8[$444>>0] = $443;
       $notrhs$i = ($$0254|0)<(1);
       $445 = $$1263$ & 8;
       $446 = ($445|0)==(0);
       $$0524$i = $7;$$2473$i = $$1472$i;
       while(1) {
        $447 = (~~(($$2473$i)));
        $448 = (6948 + ($447)|0);
        $449 = HEAP8[$448>>0]|0;
        $450 = $449&255;
        $451 = $450 | $410;
        $452 = $451&255;
        $453 = ((($$0524$i)) + 1|0);
        HEAP8[$$0524$i>>0] = $452;
        $454 = (+($447|0));
        $455 = $$2473$i - $454;
        $456 = $455 * 16.0;
        $457 = $453;
        $458 = (($457) - ($18))|0;
        $459 = ($458|0)==(1);
        do {
         if ($459) {
          $notlhs$i = $456 == 0.0;
          $or$cond3$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $446 & $or$cond3$not$i;
          if ($or$cond$i) {
           $$1525$i = $453;
           break;
          }
          $460 = ((($$0524$i)) + 2|0);
          HEAP8[$453>>0] = 46;
          $$1525$i = $460;
         } else {
          $$1525$i = $453;
         }
        } while(0);
        $461 = $456 != 0.0;
        if ($461) {
         $$0524$i = $$1525$i;$$2473$i = $456;
        } else {
         break;
        }
       }
       $462 = ($$0254|0)!=(0);
       $$pre700$i = $$1525$i;
       $463 = (($24) + ($$pre700$i))|0;
       $464 = ($463|0)<($$0254|0);
       $or$cond412 = $462 & $464;
       $465 = $444;
       $466 = (($25) + ($$0254))|0;
       $467 = (($466) - ($465))|0;
       $468 = (($23) - ($465))|0;
       $469 = (($468) + ($$pre700$i))|0;
       $$0526$i = $or$cond412 ? $467 : $469;
       $470 = (($$0526$i) + ($413))|0;
       _pad($0,32,$$1260,$470,$$1263$);
       $471 = HEAP32[$0>>2]|0;
       $472 = $471 & 32;
       $473 = ($472|0)==(0);
       if ($473) {
        (___fwritex($$0522$$i,$413,$0)|0);
       }
       $474 = $$1263$ ^ 65536;
       _pad($0,48,$$1260,$470,$474);
       $475 = (($$pre700$i) - ($18))|0;
       $476 = HEAP32[$0>>2]|0;
       $477 = $476 & 32;
       $478 = ($477|0)==(0);
       if ($478) {
        (___fwritex($7,$475,$0)|0);
       }
       $479 = (($22) - ($465))|0;
       $sum = (($475) + ($479))|0;
       $480 = (($$0526$i) - ($sum))|0;
       _pad($0,48,$480,0,0);
       $481 = HEAP32[$0>>2]|0;
       $482 = $481 & 32;
       $483 = ($482|0)==(0);
       if ($483) {
        (___fwritex($444,$479,$0)|0);
       }
       $484 = $$1263$ ^ 8192;
       _pad($0,32,$$1260,$470,$484);
       $485 = ($470|0)<($$1260|0);
       $$537$i = $485 ? $$1260 : $470;
       $$0470$i = $$537$i;
       break;
      }
      $486 = ($$0254|0)<(0);
      $$538$i = $486 ? 6 : $$0254;
      if ($405) {
       $487 = $404 * 268435456.0;
       $488 = HEAP32[$6>>2]|0;
       $489 = (($488) + -28)|0;
       HEAP32[$6>>2] = $489;
       $$3$i = $487;$$pr$i = $489;
      } else {
       $$pre697$i = HEAP32[$6>>2]|0;
       $$3$i = $404;$$pr$i = $$pre697$i;
      }
      $490 = ($$pr$i|0)<(0);
      $$554$i = $490 ? $5 : $26;
      $$0498$i = $$554$i;$$4$i = $$3$i;
      while(1) {
       $491 = (~~(($$4$i))>>>0);
       HEAP32[$$0498$i>>2] = $491;
       $492 = ((($$0498$i)) + 4|0);
       $493 = (+($491>>>0));
       $494 = $$4$i - $493;
       $495 = $494 * 1.0E+9;
       $496 = $495 != 0.0;
       if ($496) {
        $$0498$i = $492;$$4$i = $495;
       } else {
        break;
       }
      }
      $497 = ($$pr$i|0)>(0);
      if ($497) {
       $$1482671$i = $$554$i;$$1499670$i = $492;$498 = $$pr$i;
       while(1) {
        $499 = ($498|0)>(29);
        $500 = $499 ? 29 : $498;
        $$0488663$i = ((($$1499670$i)) + -4|0);
        $501 = ($$0488663$i>>>0)<($$1482671$i>>>0);
        do {
         if ($501) {
          $$2483$ph$i = $$1482671$i;
         } else {
          $$0488665$i = $$0488663$i;$$0497664$i = 0;
          while(1) {
           $502 = HEAP32[$$0488665$i>>2]|0;
           $503 = (_bitshift64Shl(($502|0),0,($500|0))|0);
           $504 = tempRet0;
           $505 = (_i64Add(($503|0),($504|0),($$0497664$i|0),0)|0);
           $506 = tempRet0;
           $507 = (___uremdi3(($505|0),($506|0),1000000000,0)|0);
           $508 = tempRet0;
           HEAP32[$$0488665$i>>2] = $507;
           $509 = (___udivdi3(($505|0),($506|0),1000000000,0)|0);
           $510 = tempRet0;
           $$0488$i = ((($$0488665$i)) + -4|0);
           $511 = ($$0488$i>>>0)<($$1482671$i>>>0);
           if ($511) {
            break;
           } else {
            $$0488665$i = $$0488$i;$$0497664$i = $509;
           }
          }
          $512 = ($509|0)==(0);
          if ($512) {
           $$2483$ph$i = $$1482671$i;
           break;
          }
          $513 = ((($$1482671$i)) + -4|0);
          HEAP32[$513>>2] = $509;
          $$2483$ph$i = $513;
         }
        } while(0);
        $$2500$i = $$1499670$i;
        while(1) {
         $514 = ($$2500$i>>>0)>($$2483$ph$i>>>0);
         if (!($514)) {
          break;
         }
         $515 = ((($$2500$i)) + -4|0);
         $516 = HEAP32[$515>>2]|0;
         $517 = ($516|0)==(0);
         if ($517) {
          $$2500$i = $515;
         } else {
          break;
         }
        }
        $518 = HEAP32[$6>>2]|0;
        $519 = (($518) - ($500))|0;
        HEAP32[$6>>2] = $519;
        $520 = ($519|0)>(0);
        if ($520) {
         $$1482671$i = $$2483$ph$i;$$1499670$i = $$2500$i;$498 = $519;
        } else {
         $$1482$lcssa$i = $$2483$ph$i;$$1499$lcssa$i = $$2500$i;$$pr571$i = $519;
         break;
        }
       }
      } else {
       $$1482$lcssa$i = $$554$i;$$1499$lcssa$i = $492;$$pr571$i = $$pr$i;
      }
      $521 = ($$pr571$i|0)<(0);
      if ($521) {
       $522 = (($$538$i) + 25)|0;
       $523 = (($522|0) / 9)&-1;
       $524 = (($523) + 1)|0;
       $525 = ($408|0)==(102);
       $$3484658$i = $$1482$lcssa$i;$$3501657$i = $$1499$lcssa$i;$527 = $$pr571$i;
       while(1) {
        $526 = (0 - ($527))|0;
        $528 = ($526|0)>(9);
        $529 = $528 ? 9 : $526;
        $530 = ($$3484658$i>>>0)<($$3501657$i>>>0);
        do {
         if ($530) {
          $534 = 1 << $529;
          $535 = (($534) + -1)|0;
          $536 = 1000000000 >>> $529;
          $$0487652$i = 0;$$1489651$i = $$3484658$i;
          while(1) {
           $537 = HEAP32[$$1489651$i>>2]|0;
           $538 = $537 & $535;
           $539 = $537 >>> $529;
           $540 = (($539) + ($$0487652$i))|0;
           HEAP32[$$1489651$i>>2] = $540;
           $541 = Math_imul($538, $536)|0;
           $542 = ((($$1489651$i)) + 4|0);
           $543 = ($542>>>0)<($$3501657$i>>>0);
           if ($543) {
            $$0487652$i = $541;$$1489651$i = $542;
           } else {
            break;
           }
          }
          $544 = HEAP32[$$3484658$i>>2]|0;
          $545 = ($544|0)==(0);
          $546 = ((($$3484658$i)) + 4|0);
          $$$3484$i = $545 ? $546 : $$3484658$i;
          $547 = ($541|0)==(0);
          if ($547) {
           $$$3484706$i = $$$3484$i;$$4502$i = $$3501657$i;
           break;
          }
          $548 = ((($$3501657$i)) + 4|0);
          HEAP32[$$3501657$i>>2] = $541;
          $$$3484706$i = $$$3484$i;$$4502$i = $548;
         } else {
          $531 = HEAP32[$$3484658$i>>2]|0;
          $532 = ($531|0)==(0);
          $533 = ((($$3484658$i)) + 4|0);
          $$$3484705$i = $532 ? $533 : $$3484658$i;
          $$$3484706$i = $$$3484705$i;$$4502$i = $$3501657$i;
         }
        } while(0);
        $549 = $525 ? $$554$i : $$$3484706$i;
        $550 = $$4502$i;
        $551 = $549;
        $552 = (($550) - ($551))|0;
        $553 = $552 >> 2;
        $554 = ($553|0)>($524|0);
        $555 = (($549) + ($524<<2)|0);
        $$$4502$i = $554 ? $555 : $$4502$i;
        $556 = HEAP32[$6>>2]|0;
        $557 = (($556) + ($529))|0;
        HEAP32[$6>>2] = $557;
        $558 = ($557|0)<(0);
        if ($558) {
         $$3484658$i = $$$3484706$i;$$3501657$i = $$$4502$i;$527 = $557;
        } else {
         $$3484$lcssa$i = $$$3484706$i;$$3501$lcssa$i = $$$4502$i;
         break;
        }
       }
      } else {
       $$3484$lcssa$i = $$1482$lcssa$i;$$3501$lcssa$i = $$1499$lcssa$i;
      }
      $559 = ($$3484$lcssa$i>>>0)<($$3501$lcssa$i>>>0);
      $560 = $$554$i;
      do {
       if ($559) {
        $561 = $$3484$lcssa$i;
        $562 = (($560) - ($561))|0;
        $563 = $562 >> 2;
        $564 = ($563*9)|0;
        $565 = HEAP32[$$3484$lcssa$i>>2]|0;
        $566 = ($565>>>0)<(10);
        if ($566) {
         $$1515$i = $564;
         break;
        } else {
         $$0514647$i = $564;$$0531646$i = 10;
        }
        while(1) {
         $567 = ($$0531646$i*10)|0;
         $568 = (($$0514647$i) + 1)|0;
         $569 = ($565>>>0)<($567>>>0);
         if ($569) {
          $$1515$i = $568;
          break;
         } else {
          $$0514647$i = $568;$$0531646$i = $567;
         }
        }
       } else {
        $$1515$i = 0;
       }
      } while(0);
      $570 = ($408|0)!=(102);
      $571 = $570 ? $$1515$i : 0;
      $572 = (($$538$i) - ($571))|0;
      $573 = ($408|0)==(103);
      $574 = ($$538$i|0)!=(0);
      $575 = $574 & $573;
      $$neg$i = $575 << 31 >> 31;
      $576 = (($572) + ($$neg$i))|0;
      $577 = $$3501$lcssa$i;
      $578 = (($577) - ($560))|0;
      $579 = $578 >> 2;
      $580 = ($579*9)|0;
      $581 = (($580) + -9)|0;
      $582 = ($576|0)<($581|0);
      if ($582) {
       $583 = ((($$554$i)) + 4|0);
       $584 = (($576) + 9216)|0;
       $585 = (($584|0) / 9)&-1;
       $586 = (($585) + -1024)|0;
       $587 = (($583) + ($586<<2)|0);
       $588 = (($584|0) % 9)&-1;
       $$0528639$i = (($588) + 1)|0;
       $589 = ($$0528639$i|0)<(9);
       if ($589) {
        $$0528641$i = $$0528639$i;$$1532640$i = 10;
        while(1) {
         $590 = ($$1532640$i*10)|0;
         $$0528$i = (($$0528641$i) + 1)|0;
         $exitcond$i = ($$0528$i|0)==(9);
         if ($exitcond$i) {
          $$1532$lcssa$i = $590;
          break;
         } else {
          $$0528641$i = $$0528$i;$$1532640$i = $590;
         }
        }
       } else {
        $$1532$lcssa$i = 10;
       }
       $591 = HEAP32[$587>>2]|0;
       $592 = (($591>>>0) % ($$1532$lcssa$i>>>0))&-1;
       $593 = ($592|0)==(0);
       $594 = ((($587)) + 4|0);
       $595 = ($594|0)==($$3501$lcssa$i|0);
       $or$cond540$i = $595 & $593;
       do {
        if ($or$cond540$i) {
         $$4492$i = $587;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
        } else {
         $596 = (($591>>>0) / ($$1532$lcssa$i>>>0))&-1;
         $597 = $596 & 1;
         $598 = ($597|0)==(0);
         $$541$i = $598 ? 9007199254740992.0 : 9007199254740994.0;
         $599 = (($$1532$lcssa$i|0) / 2)&-1;
         $600 = ($592>>>0)<($599>>>0);
         if ($600) {
          $$0466$i = 0.5;
         } else {
          $601 = ($592|0)==($599|0);
          $or$cond543$i = $595 & $601;
          $$557$i = $or$cond543$i ? 1.0 : 1.5;
          $$0466$i = $$557$i;
         }
         $602 = ($$0520$i|0)==(0);
         do {
          if ($602) {
           $$1467$i = $$0466$i;$$1469$i = $$541$i;
          } else {
           $603 = HEAP8[$$0522$i>>0]|0;
           $604 = ($603<<24>>24)==(45);
           if (!($604)) {
            $$1467$i = $$0466$i;$$1469$i = $$541$i;
            break;
           }
           $605 = -$$541$i;
           $606 = -$$0466$i;
           $$1467$i = $606;$$1469$i = $605;
          }
         } while(0);
         $607 = (($591) - ($592))|0;
         HEAP32[$587>>2] = $607;
         $608 = $$1469$i + $$1467$i;
         $609 = $608 != $$1469$i;
         if (!($609)) {
          $$4492$i = $587;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
          break;
         }
         $610 = (($607) + ($$1532$lcssa$i))|0;
         HEAP32[$587>>2] = $610;
         $611 = ($610>>>0)>(999999999);
         if ($611) {
          $$2490632$i = $587;$$5486633$i = $$3484$lcssa$i;
          while(1) {
           $612 = ((($$2490632$i)) + -4|0);
           HEAP32[$$2490632$i>>2] = 0;
           $613 = ($612>>>0)<($$5486633$i>>>0);
           if ($613) {
            $614 = ((($$5486633$i)) + -4|0);
            HEAP32[$614>>2] = 0;
            $$6$i = $614;
           } else {
            $$6$i = $$5486633$i;
           }
           $615 = HEAP32[$612>>2]|0;
           $616 = (($615) + 1)|0;
           HEAP32[$612>>2] = $616;
           $617 = ($616>>>0)>(999999999);
           if ($617) {
            $$2490632$i = $612;$$5486633$i = $$6$i;
           } else {
            $$2490$lcssa$i = $612;$$5486$lcssa$i = $$6$i;
            break;
           }
          }
         } else {
          $$2490$lcssa$i = $587;$$5486$lcssa$i = $$3484$lcssa$i;
         }
         $618 = $$5486$lcssa$i;
         $619 = (($560) - ($618))|0;
         $620 = $619 >> 2;
         $621 = ($620*9)|0;
         $622 = HEAP32[$$5486$lcssa$i>>2]|0;
         $623 = ($622>>>0)<(10);
         if ($623) {
          $$4492$i = $$2490$lcssa$i;$$4518$i = $621;$$8$i = $$5486$lcssa$i;
          break;
         } else {
          $$2516628$i = $621;$$2533627$i = 10;
         }
         while(1) {
          $624 = ($$2533627$i*10)|0;
          $625 = (($$2516628$i) + 1)|0;
          $626 = ($622>>>0)<($624>>>0);
          if ($626) {
           $$4492$i = $$2490$lcssa$i;$$4518$i = $625;$$8$i = $$5486$lcssa$i;
           break;
          } else {
           $$2516628$i = $625;$$2533627$i = $624;
          }
         }
        }
       } while(0);
       $627 = ((($$4492$i)) + 4|0);
       $628 = ($$3501$lcssa$i>>>0)>($627>>>0);
       $$$3501$i = $628 ? $627 : $$3501$lcssa$i;
       $$5519$ph$i = $$4518$i;$$7505$ph$i = $$$3501$i;$$9$ph$i = $$8$i;
      } else {
       $$5519$ph$i = $$1515$i;$$7505$ph$i = $$3501$lcssa$i;$$9$ph$i = $$3484$lcssa$i;
      }
      $629 = (0 - ($$5519$ph$i))|0;
      $$7505$i = $$7505$ph$i;
      while(1) {
       $630 = ($$7505$i>>>0)>($$9$ph$i>>>0);
       if (!($630)) {
        $$lcssa683$i = 0;
        break;
       }
       $631 = ((($$7505$i)) + -4|0);
       $632 = HEAP32[$631>>2]|0;
       $633 = ($632|0)==(0);
       if ($633) {
        $$7505$i = $631;
       } else {
        $$lcssa683$i = 1;
        break;
       }
      }
      do {
       if ($573) {
        $634 = $574&1;
        $635 = $634 ^ 1;
        $$538$$i = (($635) + ($$538$i))|0;
        $636 = ($$538$$i|0)>($$5519$ph$i|0);
        $637 = ($$5519$ph$i|0)>(-5);
        $or$cond6$i = $636 & $637;
        if ($or$cond6$i) {
         $638 = (($$0235) + -1)|0;
         $$neg572$i = (($$538$$i) + -1)|0;
         $639 = (($$neg572$i) - ($$5519$ph$i))|0;
         $$0479$i = $638;$$2476$i = $639;
        } else {
         $640 = (($$0235) + -2)|0;
         $641 = (($$538$$i) + -1)|0;
         $$0479$i = $640;$$2476$i = $641;
        }
        $642 = $$1263$ & 8;
        $643 = ($642|0)==(0);
        if (!($643)) {
         $$1480$i = $$0479$i;$$3477$i = $$2476$i;$$pre$phi704$iZ2D = $642;
         break;
        }
        do {
         if ($$lcssa683$i) {
          $644 = ((($$7505$i)) + -4|0);
          $645 = HEAP32[$644>>2]|0;
          $646 = ($645|0)==(0);
          if ($646) {
           $$2530$i = 9;
           break;
          }
          $647 = (($645>>>0) % 10)&-1;
          $648 = ($647|0)==(0);
          if ($648) {
           $$1529624$i = 0;$$3534623$i = 10;
          } else {
           $$2530$i = 0;
           break;
          }
          while(1) {
           $649 = ($$3534623$i*10)|0;
           $650 = (($$1529624$i) + 1)|0;
           $651 = (($645>>>0) % ($649>>>0))&-1;
           $652 = ($651|0)==(0);
           if ($652) {
            $$1529624$i = $650;$$3534623$i = $649;
           } else {
            $$2530$i = $650;
            break;
           }
          }
         } else {
          $$2530$i = 9;
         }
        } while(0);
        $653 = $$0479$i | 32;
        $654 = ($653|0)==(102);
        $655 = $$7505$i;
        $656 = (($655) - ($560))|0;
        $657 = $656 >> 2;
        $658 = ($657*9)|0;
        $659 = (($658) + -9)|0;
        if ($654) {
         $660 = (($659) - ($$2530$i))|0;
         $661 = ($660|0)<(0);
         $$544$i = $661 ? 0 : $660;
         $662 = ($$2476$i|0)<($$544$i|0);
         $$2476$$545$i = $662 ? $$2476$i : $$544$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$545$i;$$pre$phi704$iZ2D = 0;
         break;
        } else {
         $663 = (($659) + ($$5519$ph$i))|0;
         $664 = (($663) - ($$2530$i))|0;
         $665 = ($664|0)<(0);
         $$546$i = $665 ? 0 : $664;
         $666 = ($$2476$i|0)<($$546$i|0);
         $$2476$$547$i = $666 ? $$2476$i : $$546$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$547$i;$$pre$phi704$iZ2D = 0;
         break;
        }
       } else {
        $$pre703$i = $$1263$ & 8;
        $$1480$i = $$0235;$$3477$i = $$538$i;$$pre$phi704$iZ2D = $$pre703$i;
       }
      } while(0);
      $667 = $$3477$i | $$pre$phi704$iZ2D;
      $668 = ($667|0)!=(0);
      $669 = $668&1;
      $670 = $$1480$i | 32;
      $671 = ($670|0)==(102);
      if ($671) {
       $672 = ($$5519$ph$i|0)>(0);
       $673 = $672 ? $$5519$ph$i : 0;
       $$2513$i = 0;$$pn$i = $673;
      } else {
       $674 = ($$5519$ph$i|0)<(0);
       $675 = $674 ? $629 : $$5519$ph$i;
       $676 = ($675|0)<(0);
       $677 = $676 << 31 >> 31;
       $678 = (_fmt_u($675,$677,$20)|0);
       $679 = $678;
       $680 = (($22) - ($679))|0;
       $681 = ($680|0)<(2);
       if ($681) {
        $$1512617$i = $678;
        while(1) {
         $682 = ((($$1512617$i)) + -1|0);
         HEAP8[$682>>0] = 48;
         $683 = $682;
         $684 = (($22) - ($683))|0;
         $685 = ($684|0)<(2);
         if ($685) {
          $$1512617$i = $682;
         } else {
          $$1512$lcssa$i = $682;
          break;
         }
        }
       } else {
        $$1512$lcssa$i = $678;
       }
       $686 = $$5519$ph$i >> 31;
       $687 = $686 & 2;
       $688 = (($687) + 43)|0;
       $689 = $688&255;
       $690 = ((($$1512$lcssa$i)) + -1|0);
       HEAP8[$690>>0] = $689;
       $691 = $$1480$i&255;
       $692 = ((($$1512$lcssa$i)) + -2|0);
       HEAP8[$692>>0] = $691;
       $693 = $692;
       $694 = (($22) - ($693))|0;
       $$2513$i = $692;$$pn$i = $694;
      }
      $695 = (($$0520$i) + 1)|0;
      $696 = (($695) + ($$3477$i))|0;
      $$1527$i = (($696) + ($669))|0;
      $697 = (($$1527$i) + ($$pn$i))|0;
      _pad($0,32,$$1260,$697,$$1263$);
      $698 = HEAP32[$0>>2]|0;
      $699 = $698 & 32;
      $700 = ($699|0)==(0);
      if ($700) {
       (___fwritex($$0522$i,$$0520$i,$0)|0);
      }
      $701 = $$1263$ ^ 65536;
      _pad($0,48,$$1260,$697,$701);
      do {
       if ($671) {
        $702 = ($$9$ph$i>>>0)>($$554$i>>>0);
        $$0496$$9$i = $702 ? $$554$i : $$9$ph$i;
        $$5493606$i = $$0496$$9$i;
        while(1) {
         $703 = HEAP32[$$5493606$i>>2]|0;
         $704 = (_fmt_u($703,0,$27)|0);
         $705 = ($$5493606$i|0)==($$0496$$9$i|0);
         do {
          if ($705) {
           $711 = ($704|0)==($27|0);
           if (!($711)) {
            $$1465$i = $704;
            break;
           }
           HEAP8[$29>>0] = 48;
           $$1465$i = $29;
          } else {
           $706 = ($704>>>0)>($7>>>0);
           if (!($706)) {
            $$1465$i = $704;
            break;
           }
           $707 = $704;
           $708 = (($707) - ($18))|0;
           _memset(($7|0),48,($708|0))|0;
           $$0464603$i = $704;
           while(1) {
            $709 = ((($$0464603$i)) + -1|0);
            $710 = ($709>>>0)>($7>>>0);
            if ($710) {
             $$0464603$i = $709;
            } else {
             $$1465$i = $709;
             break;
            }
           }
          }
         } while(0);
         $712 = HEAP32[$0>>2]|0;
         $713 = $712 & 32;
         $714 = ($713|0)==(0);
         if ($714) {
          $715 = $$1465$i;
          $716 = (($28) - ($715))|0;
          (___fwritex($$1465$i,$716,$0)|0);
         }
         $717 = ((($$5493606$i)) + 4|0);
         $718 = ($717>>>0)>($$554$i>>>0);
         if ($718) {
          break;
         } else {
          $$5493606$i = $717;
         }
        }
        $719 = ($667|0)==(0);
        do {
         if (!($719)) {
          $720 = HEAP32[$0>>2]|0;
          $721 = $720 & 32;
          $722 = ($721|0)==(0);
          if (!($722)) {
           break;
          }
          (___fwritex(7016,1,$0)|0);
         }
        } while(0);
        $723 = ($717>>>0)<($$7505$i>>>0);
        $724 = ($$3477$i|0)>(0);
        $725 = $724 & $723;
        if ($725) {
         $$4478600$i = $$3477$i;$$6494599$i = $717;
         while(1) {
          $726 = HEAP32[$$6494599$i>>2]|0;
          $727 = (_fmt_u($726,0,$27)|0);
          $728 = ($727>>>0)>($7>>>0);
          if ($728) {
           $729 = $727;
           $730 = (($729) - ($18))|0;
           _memset(($7|0),48,($730|0))|0;
           $$0463594$i = $727;
           while(1) {
            $731 = ((($$0463594$i)) + -1|0);
            $732 = ($731>>>0)>($7>>>0);
            if ($732) {
             $$0463594$i = $731;
            } else {
             $$0463$lcssa$i = $731;
             break;
            }
           }
          } else {
           $$0463$lcssa$i = $727;
          }
          $733 = HEAP32[$0>>2]|0;
          $734 = $733 & 32;
          $735 = ($734|0)==(0);
          if ($735) {
           $736 = ($$4478600$i|0)>(9);
           $737 = $736 ? 9 : $$4478600$i;
           (___fwritex($$0463$lcssa$i,$737,$0)|0);
          }
          $738 = ((($$6494599$i)) + 4|0);
          $739 = (($$4478600$i) + -9)|0;
          $740 = ($738>>>0)<($$7505$i>>>0);
          $741 = ($$4478600$i|0)>(9);
          $742 = $741 & $740;
          if ($742) {
           $$4478600$i = $739;$$6494599$i = $738;
          } else {
           $$4478$lcssa$i = $739;
           break;
          }
         }
        } else {
         $$4478$lcssa$i = $$3477$i;
        }
        $743 = (($$4478$lcssa$i) + 9)|0;
        _pad($0,48,$743,9,0);
       } else {
        $744 = ((($$9$ph$i)) + 4|0);
        $$7505$$i = $$lcssa683$i ? $$7505$i : $744;
        $745 = ($$3477$i|0)>(-1);
        if ($745) {
         $746 = ($$pre$phi704$iZ2D|0)==(0);
         $$5611$i = $$3477$i;$$7495610$i = $$9$ph$i;
         while(1) {
          $747 = HEAP32[$$7495610$i>>2]|0;
          $748 = (_fmt_u($747,0,$27)|0);
          $749 = ($748|0)==($27|0);
          if ($749) {
           HEAP8[$29>>0] = 48;
           $$0$i = $29;
          } else {
           $$0$i = $748;
          }
          $750 = ($$7495610$i|0)==($$9$ph$i|0);
          do {
           if ($750) {
            $754 = ((($$0$i)) + 1|0);
            $755 = HEAP32[$0>>2]|0;
            $756 = $755 & 32;
            $757 = ($756|0)==(0);
            if ($757) {
             (___fwritex($$0$i,1,$0)|0);
            }
            $758 = ($$5611$i|0)<(1);
            $or$cond552$i = $746 & $758;
            if ($or$cond552$i) {
             $$2$i = $754;
             break;
            }
            $759 = HEAP32[$0>>2]|0;
            $760 = $759 & 32;
            $761 = ($760|0)==(0);
            if (!($761)) {
             $$2$i = $754;
             break;
            }
            (___fwritex(7016,1,$0)|0);
            $$2$i = $754;
           } else {
            $751 = ($$0$i>>>0)>($7>>>0);
            if (!($751)) {
             $$2$i = $$0$i;
             break;
            }
            $scevgep694$i = (($$0$i) + ($19)|0);
            $scevgep694695$i = $scevgep694$i;
            _memset(($7|0),48,($scevgep694695$i|0))|0;
            $$1607$i = $$0$i;
            while(1) {
             $752 = ((($$1607$i)) + -1|0);
             $753 = ($752>>>0)>($7>>>0);
             if ($753) {
              $$1607$i = $752;
             } else {
              $$2$i = $752;
              break;
             }
            }
           }
          } while(0);
          $762 = $$2$i;
          $763 = (($28) - ($762))|0;
          $764 = HEAP32[$0>>2]|0;
          $765 = $764 & 32;
          $766 = ($765|0)==(0);
          if ($766) {
           $767 = ($$5611$i|0)>($763|0);
           $768 = $767 ? $763 : $$5611$i;
           (___fwritex($$2$i,$768,$0)|0);
          }
          $769 = (($$5611$i) - ($763))|0;
          $770 = ((($$7495610$i)) + 4|0);
          $771 = ($770>>>0)<($$7505$$i>>>0);
          $772 = ($769|0)>(-1);
          $773 = $771 & $772;
          if ($773) {
           $$5611$i = $769;$$7495610$i = $770;
          } else {
           $$5$lcssa$i = $769;
           break;
          }
         }
        } else {
         $$5$lcssa$i = $$3477$i;
        }
        $774 = (($$5$lcssa$i) + 18)|0;
        _pad($0,48,$774,18,0);
        $775 = HEAP32[$0>>2]|0;
        $776 = $775 & 32;
        $777 = ($776|0)==(0);
        if (!($777)) {
         break;
        }
        $778 = $$2513$i;
        $779 = (($22) - ($778))|0;
        (___fwritex($$2513$i,$779,$0)|0);
       }
      } while(0);
      $780 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$697,$780);
      $781 = ($697|0)<($$1260|0);
      $$553$i = $781 ? $$1260 : $697;
      $$0470$i = $$553$i;
     } else {
      $388 = $$0235 & 32;
      $389 = ($388|0)!=(0);
      $390 = $389 ? 7000 : 7004;
      $391 = ($$0471$i != $$0471$i) | (0.0 != 0.0);
      $392 = $389 ? 7008 : 7012;
      $$1521$i = $391 ? 0 : $$0520$i;
      $$0510$i = $391 ? $392 : $390;
      $393 = (($$1521$i) + 3)|0;
      _pad($0,32,$$1260,$393,$187);
      $394 = HEAP32[$0>>2]|0;
      $395 = $394 & 32;
      $396 = ($395|0)==(0);
      if ($396) {
       (___fwritex($$0522$i,$$1521$i,$0)|0);
       $$pre$i = HEAP32[$0>>2]|0;
       $398 = $$pre$i;
      } else {
       $398 = $394;
      }
      $397 = $398 & 32;
      $399 = ($397|0)==(0);
      if ($399) {
       (___fwritex($$0510$i,3,$0)|0);
      }
      $400 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$393,$400);
      $401 = ($393|0)<($$1260|0);
      $402 = $401 ? $$1260 : $393;
      $$0470$i = $402;
     }
    } while(0);
    $$0243 = $$0470$i;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
    continue L1;
    break;
   }
   default: {
    $$2 = $$0321;$$2234 = 0;$$2239 = 6964;$$2251 = $14;$$5 = $$0254;$$6268 = $$1263$;
   }
   }
  } while(0);
  L310: do {
   if ((label|0) == 63) {
    label = 0;
    $218 = $9;
    $219 = $218;
    $220 = HEAP32[$219>>2]|0;
    $221 = (($218) + 4)|0;
    $222 = $221;
    $223 = HEAP32[$222>>2]|0;
    $224 = $$1236 & 32;
    $225 = ($220|0)==(0);
    $226 = ($223|0)==(0);
    $227 = $225 & $226;
    if ($227) {
     $$05$lcssa$i = $14;$248 = 0;$250 = 0;
    } else {
     $$056$i = $14;$229 = $220;$236 = $223;
     while(1) {
      $228 = $229 & 15;
      $230 = (6948 + ($228)|0);
      $231 = HEAP8[$230>>0]|0;
      $232 = $231&255;
      $233 = $232 | $224;
      $234 = $233&255;
      $235 = ((($$056$i)) + -1|0);
      HEAP8[$235>>0] = $234;
      $237 = (_bitshift64Lshr(($229|0),($236|0),4)|0);
      $238 = tempRet0;
      $239 = ($237|0)==(0);
      $240 = ($238|0)==(0);
      $241 = $239 & $240;
      if ($241) {
       break;
      } else {
       $$056$i = $235;$229 = $237;$236 = $238;
      }
     }
     $242 = $9;
     $243 = $242;
     $244 = HEAP32[$243>>2]|0;
     $245 = (($242) + 4)|0;
     $246 = $245;
     $247 = HEAP32[$246>>2]|0;
     $$05$lcssa$i = $235;$248 = $244;$250 = $247;
    }
    $249 = ($248|0)==(0);
    $251 = ($250|0)==(0);
    $252 = $249 & $251;
    $253 = $$3265 & 8;
    $254 = ($253|0)==(0);
    $or$cond282 = $254 | $252;
    $255 = $$1236 >> 4;
    $256 = (6964 + ($255)|0);
    $$332 = $or$cond282 ? 6964 : $256;
    $$333 = $or$cond282 ? 0 : 2;
    $$0228 = $$05$lcssa$i;$$1233 = $$333;$$1238 = $$332;$$2256 = $$1255;$$4266 = $$3265;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $302 = (_fmt_u($300,$301,$14)|0);
    $$0228 = $302;$$1233 = $$0232;$$1238 = $$0237;$$2256 = $$0254;$$4266 = $$1263$;
    label = 76;
   }
   else if ((label|0) == 81) {
    label = 0;
    $334 = (_memchr($$1,0,$$0254)|0);
    $335 = ($334|0)==(0|0);
    $336 = $334;
    $337 = $$1;
    $338 = (($336) - ($337))|0;
    $339 = (($$1) + ($$0254)|0);
    $$3257 = $335 ? $$0254 : $338;
    $$1250 = $335 ? $339 : $334;
    $$2 = $$1;$$2234 = 0;$$2239 = 6964;$$2251 = $$1250;$$5 = $$3257;$$6268 = $187;
   }
   else if ((label|0) == 85) {
    label = 0;
    $$0229396 = $809;$$0240395 = 0;$$1244394 = 0;
    while(1) {
     $347 = HEAP32[$$0229396>>2]|0;
     $348 = ($347|0)==(0);
     if ($348) {
      $$0240$lcssa = $$0240395;$$2245 = $$1244394;
      break;
     }
     $349 = (_wctomb($12,$347)|0);
     $350 = ($349|0)<(0);
     $351 = (($$4258458) - ($$0240395))|0;
     $352 = ($349>>>0)>($351>>>0);
     $or$cond285 = $350 | $352;
     if ($or$cond285) {
      $$0240$lcssa = $$0240395;$$2245 = $349;
      break;
     }
     $353 = ((($$0229396)) + 4|0);
     $354 = (($349) + ($$0240395))|0;
     $355 = ($$4258458>>>0)>($354>>>0);
     if ($355) {
      $$0229396 = $353;$$0240395 = $354;$$1244394 = $349;
     } else {
      $$0240$lcssa = $354;$$2245 = $349;
      break;
     }
    }
    $356 = ($$2245|0)<(0);
    if ($356) {
     $$0 = -1;
     break L1;
    }
    _pad($0,32,$$1260,$$0240$lcssa,$$1263$);
    $357 = ($$0240$lcssa|0)==(0);
    if ($357) {
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$1230407 = $809;$$1241406 = 0;
     while(1) {
      $358 = HEAP32[$$1230407>>2]|0;
      $359 = ($358|0)==(0);
      if ($359) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $360 = ((($$1230407)) + 4|0);
      $361 = (_wctomb($12,$358)|0);
      $362 = (($361) + ($$1241406))|0;
      $363 = ($362|0)>($$0240$lcssa|0);
      if ($363) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $364 = HEAP32[$0>>2]|0;
      $365 = $364 & 32;
      $366 = ($365|0)==(0);
      if ($366) {
       (___fwritex($12,$361,$0)|0);
      }
      $367 = ($362>>>0)<($$0240$lcssa>>>0);
      if ($367) {
       $$1230407 = $360;$$1241406 = $362;
      } else {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $368 = $$1263$ ^ 8192;
   _pad($0,32,$$1260,$$0240$lcssa460,$368);
   $369 = ($$1260|0)>($$0240$lcssa460|0);
   $370 = $369 ? $$1260 : $$0240$lcssa460;
   $$0243 = $370;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $303 = ($$2256|0)>(-1);
   $304 = $$4266 & -65537;
   $$$4266 = $303 ? $304 : $$4266;
   $305 = $9;
   $306 = $305;
   $307 = HEAP32[$306>>2]|0;
   $308 = (($305) + 4)|0;
   $309 = $308;
   $310 = HEAP32[$309>>2]|0;
   $311 = ($307|0)!=(0);
   $312 = ($310|0)!=(0);
   $313 = $311 | $312;
   $314 = ($$2256|0)!=(0);
   $or$cond = $314 | $313;
   if ($or$cond) {
    $315 = $$0228;
    $316 = (($15) - ($315))|0;
    $317 = $313&1;
    $318 = $317 ^ 1;
    $319 = (($318) + ($316))|0;
    $320 = ($$2256|0)>($319|0);
    $$2256$ = $320 ? $$2256 : $319;
    $$2 = $$0228;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = $$2256$;$$6268 = $$$4266;
   } else {
    $$2 = $14;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = 0;$$6268 = $$$4266;
   }
  }
  $782 = $$2251;
  $783 = $$2;
  $784 = (($782) - ($783))|0;
  $785 = ($$5|0)<($784|0);
  $$$5 = $785 ? $784 : $$5;
  $786 = (($$$5) + ($$2234))|0;
  $787 = ($$1260|0)<($786|0);
  $$2261 = $787 ? $786 : $$1260;
  _pad($0,32,$$2261,$786,$$6268);
  $788 = HEAP32[$0>>2]|0;
  $789 = $788 & 32;
  $790 = ($789|0)==(0);
  if ($790) {
   (___fwritex($$2239,$$2234,$0)|0);
  }
  $791 = $$6268 ^ 65536;
  _pad($0,48,$$2261,$786,$791);
  _pad($0,48,$$$5,$784,0);
  $792 = HEAP32[$0>>2]|0;
  $793 = $792 & 32;
  $794 = ($793|0)==(0);
  if ($794) {
   (___fwritex($$2,$784,$0)|0);
  }
  $795 = $$6268 ^ 8192;
  _pad($0,32,$$2261,$786,$795);
  $$0243 = $$2261;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $158;
 }
 L345: do {
  if ((label|0) == 243) {
   $796 = ($0|0)==(0|0);
   if ($796) {
    $797 = ($$0269|0)==(0);
    if ($797) {
     $$0 = 0;
    } else {
     $$2242381 = 1;
     while(1) {
      $798 = (($4) + ($$2242381<<2)|0);
      $799 = HEAP32[$798>>2]|0;
      $800 = ($799|0)==(0);
      if ($800) {
       $$3379 = $$2242381;
       break;
      }
      $801 = (($3) + ($$2242381<<3)|0);
      _pop_arg_38($801,$799,$2);
      $802 = (($$2242381) + 1)|0;
      $803 = ($802|0)<(10);
      if ($803) {
       $$2242381 = $802;
      } else {
       $$0 = 1;
       break L345;
      }
     }
     while(1) {
      $806 = (($4) + ($$3379<<2)|0);
      $807 = HEAP32[$806>>2]|0;
      $808 = ($807|0)==(0);
      $804 = (($$3379) + 1)|0;
      if (!($808)) {
       $$0 = -1;
       break L345;
      }
      $805 = ($804|0)<(10);
      if ($805) {
       $$3379 = $804;
      } else {
       $$0 = 1;
       break;
      }
     }
    }
   } else {
    $$0 = $$1248;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___fwritex($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$032 = 0, $$033 = 0, $$034 = 0, $$1 = 0, $$pre = 0, $$pre38 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($2)) + 16|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($4|0)==(0|0);
 if ($5) {
  $7 = (___towrite($2)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = HEAP32[$3>>2]|0;
   $12 = $$pre;
   label = 5;
  } else {
   $$032 = 0;
  }
 } else {
  $6 = $4;
  $12 = $6;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $9 = ((($2)) + 20|0);
   $10 = HEAP32[$9>>2]|0;
   $11 = (($12) - ($10))|0;
   $13 = ($11>>>0)<($1>>>0);
   $14 = $10;
   if ($13) {
    $15 = ((($2)) + 36|0);
    $16 = HEAP32[$15>>2]|0;
    $17 = (FUNCTION_TABLE_iiii[$16 & 31]($2,$0,$1)|0);
    $$032 = $17;
    break;
   }
   $18 = ((($2)) + 75|0);
   $19 = HEAP8[$18>>0]|0;
   $20 = ($19<<24>>24)>(-1);
   L10: do {
    if ($20) {
     $$0 = $1;
     while(1) {
      $21 = ($$0|0)==(0);
      if ($21) {
       $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
       break L10;
      }
      $22 = (($$0) + -1)|0;
      $23 = (($0) + ($22)|0);
      $24 = HEAP8[$23>>0]|0;
      $25 = ($24<<24>>24)==(10);
      if ($25) {
       break;
      } else {
       $$0 = $22;
      }
     }
     $26 = ((($2)) + 36|0);
     $27 = HEAP32[$26>>2]|0;
     $28 = (FUNCTION_TABLE_iiii[$27 & 31]($2,$0,$$0)|0);
     $29 = ($28>>>0)<($$0>>>0);
     if ($29) {
      $$032 = $$0;
      break L5;
     }
     $30 = (($0) + ($$0)|0);
     $31 = (($1) - ($$0))|0;
     $$pre38 = HEAP32[$9>>2]|0;
     $$033 = $31;$$034 = $30;$$1 = $$0;$32 = $$pre38;
    } else {
     $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
    }
   } while(0);
   _memcpy(($32|0),($$034|0),($$033|0))|0;
   $33 = HEAP32[$9>>2]|0;
   $34 = (($33) + ($$033)|0);
   HEAP32[$9>>2] = $34;
   $35 = (($$1) + ($$033))|0;
   $$032 = $35;
  }
 } while(0);
 return ($$032|0);
}
function _pop_arg_38($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$mask = 0, $$mask31 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0;
 var $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded30 = 0, $expanded31 = 0;
 var $expanded32 = 0, $expanded34 = 0, $expanded35 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded41 = 0, $expanded42 = 0, $expanded44 = 0, $expanded45 = 0, $expanded46 = 0, $expanded48 = 0, $expanded49 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded55 = 0, $expanded56 = 0, $expanded58 = 0, $expanded59 = 0;
 var $expanded60 = 0, $expanded62 = 0, $expanded63 = 0, $expanded65 = 0, $expanded66 = 0, $expanded67 = 0, $expanded69 = 0, $expanded70 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded76 = 0, $expanded77 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded83 = 0, $expanded84 = 0, $expanded86 = 0, $expanded87 = 0;
 var $expanded88 = 0, $expanded90 = 0, $expanded91 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(20);
 L1: do {
  if (!($3)) {
   do {
    switch ($1|0) {
    case 9:  {
     $arglist_current = HEAP32[$2>>2]|0;
     $4 = $arglist_current;
     $5 = ((0) + 4|0);
     $expanded28 = $5;
     $expanded = (($expanded28) - 1)|0;
     $6 = (($4) + ($expanded))|0;
     $7 = ((0) + 4|0);
     $expanded32 = $7;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $8 = $6 & $expanded30;
     $9 = $8;
     $10 = HEAP32[$9>>2]|0;
     $arglist_next = ((($9)) + 4|0);
     HEAP32[$2>>2] = $arglist_next;
     HEAP32[$0>>2] = $10;
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = HEAP32[$2>>2]|0;
     $11 = $arglist_current2;
     $12 = ((0) + 4|0);
     $expanded35 = $12;
     $expanded34 = (($expanded35) - 1)|0;
     $13 = (($11) + ($expanded34))|0;
     $14 = ((0) + 4|0);
     $expanded39 = $14;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $15 = $13 & $expanded37;
     $16 = $15;
     $17 = HEAP32[$16>>2]|0;
     $arglist_next3 = ((($16)) + 4|0);
     HEAP32[$2>>2] = $arglist_next3;
     $18 = ($17|0)<(0);
     $19 = $18 << 31 >> 31;
     $20 = $0;
     $21 = $20;
     HEAP32[$21>>2] = $17;
     $22 = (($20) + 4)|0;
     $23 = $22;
     HEAP32[$23>>2] = $19;
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = HEAP32[$2>>2]|0;
     $24 = $arglist_current5;
     $25 = ((0) + 4|0);
     $expanded42 = $25;
     $expanded41 = (($expanded42) - 1)|0;
     $26 = (($24) + ($expanded41))|0;
     $27 = ((0) + 4|0);
     $expanded46 = $27;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $28 = $26 & $expanded44;
     $29 = $28;
     $30 = HEAP32[$29>>2]|0;
     $arglist_next6 = ((($29)) + 4|0);
     HEAP32[$2>>2] = $arglist_next6;
     $31 = $0;
     $32 = $31;
     HEAP32[$32>>2] = $30;
     $33 = (($31) + 4)|0;
     $34 = $33;
     HEAP32[$34>>2] = 0;
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = HEAP32[$2>>2]|0;
     $35 = $arglist_current8;
     $36 = ((0) + 8|0);
     $expanded49 = $36;
     $expanded48 = (($expanded49) - 1)|0;
     $37 = (($35) + ($expanded48))|0;
     $38 = ((0) + 8|0);
     $expanded53 = $38;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $39 = $37 & $expanded51;
     $40 = $39;
     $41 = $40;
     $42 = $41;
     $43 = HEAP32[$42>>2]|0;
     $44 = (($41) + 4)|0;
     $45 = $44;
     $46 = HEAP32[$45>>2]|0;
     $arglist_next9 = ((($40)) + 8|0);
     HEAP32[$2>>2] = $arglist_next9;
     $47 = $0;
     $48 = $47;
     HEAP32[$48>>2] = $43;
     $49 = (($47) + 4)|0;
     $50 = $49;
     HEAP32[$50>>2] = $46;
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = HEAP32[$2>>2]|0;
     $51 = $arglist_current11;
     $52 = ((0) + 4|0);
     $expanded56 = $52;
     $expanded55 = (($expanded56) - 1)|0;
     $53 = (($51) + ($expanded55))|0;
     $54 = ((0) + 4|0);
     $expanded60 = $54;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $55 = $53 & $expanded58;
     $56 = $55;
     $57 = HEAP32[$56>>2]|0;
     $arglist_next12 = ((($56)) + 4|0);
     HEAP32[$2>>2] = $arglist_next12;
     $58 = $57&65535;
     $59 = $58 << 16 >> 16;
     $60 = ($59|0)<(0);
     $61 = $60 << 31 >> 31;
     $62 = $0;
     $63 = $62;
     HEAP32[$63>>2] = $59;
     $64 = (($62) + 4)|0;
     $65 = $64;
     HEAP32[$65>>2] = $61;
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = HEAP32[$2>>2]|0;
     $66 = $arglist_current14;
     $67 = ((0) + 4|0);
     $expanded63 = $67;
     $expanded62 = (($expanded63) - 1)|0;
     $68 = (($66) + ($expanded62))|0;
     $69 = ((0) + 4|0);
     $expanded67 = $69;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $70 = $68 & $expanded65;
     $71 = $70;
     $72 = HEAP32[$71>>2]|0;
     $arglist_next15 = ((($71)) + 4|0);
     HEAP32[$2>>2] = $arglist_next15;
     $$mask31 = $72 & 65535;
     $73 = $0;
     $74 = $73;
     HEAP32[$74>>2] = $$mask31;
     $75 = (($73) + 4)|0;
     $76 = $75;
     HEAP32[$76>>2] = 0;
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = HEAP32[$2>>2]|0;
     $77 = $arglist_current17;
     $78 = ((0) + 4|0);
     $expanded70 = $78;
     $expanded69 = (($expanded70) - 1)|0;
     $79 = (($77) + ($expanded69))|0;
     $80 = ((0) + 4|0);
     $expanded74 = $80;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $81 = $79 & $expanded72;
     $82 = $81;
     $83 = HEAP32[$82>>2]|0;
     $arglist_next18 = ((($82)) + 4|0);
     HEAP32[$2>>2] = $arglist_next18;
     $84 = $83&255;
     $85 = $84 << 24 >> 24;
     $86 = ($85|0)<(0);
     $87 = $86 << 31 >> 31;
     $88 = $0;
     $89 = $88;
     HEAP32[$89>>2] = $85;
     $90 = (($88) + 4)|0;
     $91 = $90;
     HEAP32[$91>>2] = $87;
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = HEAP32[$2>>2]|0;
     $92 = $arglist_current20;
     $93 = ((0) + 4|0);
     $expanded77 = $93;
     $expanded76 = (($expanded77) - 1)|0;
     $94 = (($92) + ($expanded76))|0;
     $95 = ((0) + 4|0);
     $expanded81 = $95;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $96 = $94 & $expanded79;
     $97 = $96;
     $98 = HEAP32[$97>>2]|0;
     $arglist_next21 = ((($97)) + 4|0);
     HEAP32[$2>>2] = $arglist_next21;
     $$mask = $98 & 255;
     $99 = $0;
     $100 = $99;
     HEAP32[$100>>2] = $$mask;
     $101 = (($99) + 4)|0;
     $102 = $101;
     HEAP32[$102>>2] = 0;
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = HEAP32[$2>>2]|0;
     $103 = $arglist_current23;
     $104 = ((0) + 8|0);
     $expanded84 = $104;
     $expanded83 = (($expanded84) - 1)|0;
     $105 = (($103) + ($expanded83))|0;
     $106 = ((0) + 8|0);
     $expanded88 = $106;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $107 = $105 & $expanded86;
     $108 = $107;
     $109 = +HEAPF64[$108>>3];
     $arglist_next24 = ((($108)) + 8|0);
     HEAP32[$2>>2] = $arglist_next24;
     HEAPF64[$0>>3] = $109;
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = HEAP32[$2>>2]|0;
     $110 = $arglist_current26;
     $111 = ((0) + 8|0);
     $expanded91 = $111;
     $expanded90 = (($expanded91) - 1)|0;
     $112 = (($110) + ($expanded90))|0;
     $113 = ((0) + 8|0);
     $expanded95 = $113;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $114 = $112 & $expanded93;
     $115 = $114;
     $116 = +HEAPF64[$115>>3];
     $arglist_next27 = ((($115)) + 8|0);
     HEAP32[$2>>2] = $arglist_next27;
     HEAPF64[$0>>3] = $116;
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_u($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$010$lcssa$off0 = 0, $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(0);
 $4 = ($0>>>0)>(4294967295);
 $5 = ($1|0)==(0);
 $6 = $5 & $4;
 $7 = $3 | $6;
 if ($7) {
  $$0914 = $2;$8 = $0;$9 = $1;
  while(1) {
   $10 = (___uremdi3(($8|0),($9|0),10,0)|0);
   $11 = tempRet0;
   $12 = $10 | 48;
   $13 = $12&255;
   $14 = ((($$0914)) + -1|0);
   HEAP8[$14>>0] = $13;
   $15 = (___udivdi3(($8|0),($9|0),10,0)|0);
   $16 = tempRet0;
   $17 = ($9>>>0)>(9);
   $18 = ($8>>>0)>(4294967295);
   $19 = ($9|0)==(9);
   $20 = $19 & $18;
   $21 = $17 | $20;
   if ($21) {
    $$0914 = $14;$8 = $15;$9 = $16;
   } else {
    break;
   }
  }
  $$010$lcssa$off0 = $15;$$09$lcssa = $14;
 } else {
  $$010$lcssa$off0 = $0;$$09$lcssa = $2;
 }
 $22 = ($$010$lcssa$off0|0)==(0);
 if ($22) {
  $$1$lcssa = $$09$lcssa;
 } else {
  $$012 = $$010$lcssa$off0;$$111 = $$09$lcssa;
  while(1) {
   $23 = (($$012>>>0) % 10)&-1;
   $24 = $23 | 48;
   $25 = $24&255;
   $26 = ((($$111)) + -1|0);
   HEAP8[$26>>0] = $25;
   $27 = (($$012>>>0) / 10)&-1;
   $28 = ($$012>>>0)<(10);
   if ($28) {
    $$1$lcssa = $26;
    break;
   } else {
    $$012 = $27;$$111 = $26;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _strerror($0) {
 $0 = $0|0;
 var $$011$lcssa = 0, $$01113 = 0, $$015 = 0, $$112 = 0, $$114 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$015 = 0;
 while(1) {
  $2 = (7018 + ($$015)|0);
  $3 = HEAP8[$2>>0]|0;
  $4 = $3&255;
  $5 = ($4|0)==($0|0);
  if ($5) {
   label = 2;
   break;
  }
  $6 = (($$015) + 1)|0;
  $7 = ($6|0)==(87);
  if ($7) {
   $$01113 = 7106;$$114 = 87;
   label = 5;
   break;
  } else {
   $$015 = $6;
  }
 }
 if ((label|0) == 2) {
  $1 = ($$015|0)==(0);
  if ($1) {
   $$011$lcssa = 7106;
  } else {
   $$01113 = 7106;$$114 = $$015;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $$112 = $$01113;
   while(1) {
    $8 = HEAP8[$$112>>0]|0;
    $9 = ($8<<24>>24)==(0);
    $10 = ((($$112)) + 1|0);
    if ($9) {
     break;
    } else {
     $$112 = $10;
    }
   }
   $11 = (($$114) + -1)|0;
   $12 = ($11|0)==(0);
   if ($12) {
    $$011$lcssa = $10;
    break;
   } else {
    $$01113 = $10;$$114 = $11;
    label = 5;
   }
  }
 }
 return ($$011$lcssa|0);
}
function _memchr($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$035$lcssa = 0, $$035$lcssa65 = 0, $$03555 = 0, $$036$lcssa = 0, $$036$lcssa64 = 0, $$03654 = 0, $$046 = 0, $$137$lcssa = 0, $$13745 = 0, $$140 = 0, $$2 = 0, $$23839 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond53 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1 & 255;
 $4 = $0;
 $5 = $4 & 3;
 $6 = ($5|0)!=(0);
 $7 = ($2|0)!=(0);
 $or$cond53 = $7 & $6;
 L1: do {
  if ($or$cond53) {
   $8 = $1&255;
   $$03555 = $0;$$03654 = $2;
   while(1) {
    $9 = HEAP8[$$03555>>0]|0;
    $10 = ($9<<24>>24)==($8<<24>>24);
    if ($10) {
     $$035$lcssa65 = $$03555;$$036$lcssa64 = $$03654;
     label = 6;
     break L1;
    }
    $11 = ((($$03555)) + 1|0);
    $12 = (($$03654) + -1)|0;
    $13 = $11;
    $14 = $13 & 3;
    $15 = ($14|0)!=(0);
    $16 = ($12|0)!=(0);
    $or$cond = $16 & $15;
    if ($or$cond) {
     $$03555 = $11;$$03654 = $12;
    } else {
     $$035$lcssa = $11;$$036$lcssa = $12;$$lcssa = $16;
     label = 5;
     break;
    }
   }
  } else {
   $$035$lcssa = $0;$$036$lcssa = $2;$$lcssa = $7;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($$lcssa) {
   $$035$lcssa65 = $$035$lcssa;$$036$lcssa64 = $$036$lcssa;
   label = 6;
  } else {
   $$2 = $$035$lcssa;$$3 = 0;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $17 = HEAP8[$$035$lcssa65>>0]|0;
   $18 = $1&255;
   $19 = ($17<<24>>24)==($18<<24>>24);
   if ($19) {
    $$2 = $$035$lcssa65;$$3 = $$036$lcssa64;
   } else {
    $20 = Math_imul($3, 16843009)|0;
    $21 = ($$036$lcssa64>>>0)>(3);
    L11: do {
     if ($21) {
      $$046 = $$035$lcssa65;$$13745 = $$036$lcssa64;
      while(1) {
       $22 = HEAP32[$$046>>2]|0;
       $23 = $22 ^ $20;
       $24 = (($23) + -16843009)|0;
       $25 = $23 & -2139062144;
       $26 = $25 ^ -2139062144;
       $27 = $26 & $24;
       $28 = ($27|0)==(0);
       if (!($28)) {
        break;
       }
       $29 = ((($$046)) + 4|0);
       $30 = (($$13745) + -4)|0;
       $31 = ($30>>>0)>(3);
       if ($31) {
        $$046 = $29;$$13745 = $30;
       } else {
        $$0$lcssa = $29;$$137$lcssa = $30;
        label = 11;
        break L11;
       }
      }
      $$140 = $$046;$$23839 = $$13745;
     } else {
      $$0$lcssa = $$035$lcssa65;$$137$lcssa = $$036$lcssa64;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $32 = ($$137$lcssa|0)==(0);
     if ($32) {
      $$2 = $$0$lcssa;$$3 = 0;
      break;
     } else {
      $$140 = $$0$lcssa;$$23839 = $$137$lcssa;
     }
    }
    while(1) {
     $33 = HEAP8[$$140>>0]|0;
     $34 = ($33<<24>>24)==($18<<24>>24);
     if ($34) {
      $$2 = $$140;$$3 = $$23839;
      break L8;
     }
     $35 = ((($$140)) + 1|0);
     $36 = (($$23839) + -1)|0;
     $37 = ($36|0)==(0);
     if ($37) {
      $$2 = $35;$$3 = 0;
      break;
     } else {
      $$140 = $35;$$23839 = $36;
     }
    }
   }
  }
 } while(0);
 $38 = ($$3|0)!=(0);
 $39 = $38 ? $$2 : 0;
 return ($39|0);
}
function _pad($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa16 = 0, $$012 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(256|0);
 $5 = sp;
 $6 = $4 & 73728;
 $7 = ($6|0)==(0);
 $8 = ($2|0)>($3|0);
 $or$cond = $8 & $7;
 do {
  if ($or$cond) {
   $9 = (($2) - ($3))|0;
   $10 = ($9>>>0)>(256);
   $11 = $10 ? 256 : $9;
   _memset(($5|0),($1|0),($11|0))|0;
   $12 = ($9>>>0)>(255);
   $13 = HEAP32[$0>>2]|0;
   $14 = $13 & 32;
   $15 = ($14|0)==(0);
   if ($12) {
    $16 = (($2) - ($3))|0;
    $$012 = $9;$23 = $13;$24 = $15;
    while(1) {
     if ($24) {
      (___fwritex($5,256,$0)|0);
      $$pre = HEAP32[$0>>2]|0;
      $20 = $$pre;
     } else {
      $20 = $23;
     }
     $17 = (($$012) + -256)|0;
     $18 = ($17>>>0)>(255);
     $19 = $20 & 32;
     $21 = ($19|0)==(0);
     if ($18) {
      $$012 = $17;$23 = $20;$24 = $21;
     } else {
      break;
     }
    }
    $22 = $16 & 255;
    if ($21) {
     $$0$lcssa16 = $22;
    } else {
     break;
    }
   } else {
    if ($15) {
     $$0$lcssa16 = $9;
    } else {
     break;
    }
   }
   (___fwritex($5,$$0$lcssa16,$0)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = (_wcrtomb($0,$1,0)|0);
  $$0 = $3;
 }
 return ($$0|0);
}
function _frexpl($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_frexp($0,$1));
 return (+$2);
}
function _frexp($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$0 = 0.0, $$016 = 0.0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0.0, $storemerge = 0, $trunc$clear = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$2 = HEAP32[tempDoublePtr>>2]|0;
 $3 = HEAP32[tempDoublePtr+4>>2]|0;
 $4 = (_bitshift64Lshr(($2|0),($3|0),52)|0);
 $5 = tempRet0;
 $6 = $4&65535;
 $trunc$clear = $6 & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $7 = $0 != 0.0;
  if ($7) {
   $8 = $0 * 1.8446744073709552E+19;
   $9 = (+_frexp($8,$1));
   $10 = HEAP32[$1>>2]|0;
   $11 = (($10) + -64)|0;
   $$016 = $9;$storemerge = $11;
  } else {
   $$016 = $0;$storemerge = 0;
  }
  HEAP32[$1>>2] = $storemerge;
  $$0 = $$016;
  break;
 }
 case 2047:  {
  $$0 = $0;
  break;
 }
 default: {
  $12 = $4 & 2047;
  $13 = (($12) + -1022)|0;
  HEAP32[$1>>2] = $13;
  $14 = $3 & -2146435073;
  $15 = $14 | 1071644672;
  HEAP32[tempDoublePtr>>2] = $2;HEAP32[tempDoublePtr+4>>2] = $15;$16 = +HEAPF64[tempDoublePtr>>3];
  $$0 = $16;
 }
 }
 return (+$$0);
}
function _wcrtomb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0|0);
 do {
  if ($3) {
   $$0 = 1;
  } else {
   $4 = ($1>>>0)<(128);
   if ($4) {
    $5 = $1&255;
    HEAP8[$0>>0] = $5;
    $$0 = 1;
    break;
   }
   $6 = ($1>>>0)<(2048);
   if ($6) {
    $7 = $1 >>> 6;
    $8 = $7 | 192;
    $9 = $8&255;
    $10 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $9;
    $11 = $1 & 63;
    $12 = $11 | 128;
    $13 = $12&255;
    HEAP8[$10>>0] = $13;
    $$0 = 2;
    break;
   }
   $14 = ($1>>>0)<(55296);
   $15 = $1 & -8192;
   $16 = ($15|0)==(57344);
   $or$cond = $14 | $16;
   if ($or$cond) {
    $17 = $1 >>> 12;
    $18 = $17 | 224;
    $19 = $18&255;
    $20 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $19;
    $21 = $1 >>> 6;
    $22 = $21 & 63;
    $23 = $22 | 128;
    $24 = $23&255;
    $25 = ((($0)) + 2|0);
    HEAP8[$20>>0] = $24;
    $26 = $1 & 63;
    $27 = $26 | 128;
    $28 = $27&255;
    HEAP8[$25>>0] = $28;
    $$0 = 3;
    break;
   }
   $29 = (($1) + -65536)|0;
   $30 = ($29>>>0)<(1048576);
   if ($30) {
    $31 = $1 >>> 18;
    $32 = $31 | 240;
    $33 = $32&255;
    $34 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $33;
    $35 = $1 >>> 12;
    $36 = $35 & 63;
    $37 = $36 | 128;
    $38 = $37&255;
    $39 = ((($0)) + 2|0);
    HEAP8[$34>>0] = $38;
    $40 = $1 >>> 6;
    $41 = $40 & 63;
    $42 = $41 | 128;
    $43 = $42&255;
    $44 = ((($0)) + 3|0);
    HEAP8[$39>>0] = $43;
    $45 = $1 & 63;
    $46 = $45 | 128;
    $47 = $46&255;
    HEAP8[$44>>0] = $47;
    $$0 = 4;
    break;
   } else {
    $48 = (___errno_location()|0);
    HEAP32[$48>>2] = 84;
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function _fflush($0) {
 $0 = $0|0;
 var $$0 = 0, $$023 = 0, $$02325 = 0, $$02327 = 0, $$024$lcssa = 0, $$02426 = 0, $$1 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 do {
  if ($1) {
   $8 = HEAP32[1249]|0;
   $9 = ($8|0)==(0|0);
   if ($9) {
    $28 = 0;
   } else {
    $10 = HEAP32[1249]|0;
    $11 = (_fflush($10)|0);
    $28 = $11;
   }
   ___lock(((9996)|0));
   $$02325 = HEAP32[(9992)>>2]|0;
   $12 = ($$02325|0)==(0|0);
   if ($12) {
    $$024$lcssa = $28;
   } else {
    $$02327 = $$02325;$$02426 = $28;
    while(1) {
     $13 = ((($$02327)) + 76|0);
     $14 = HEAP32[$13>>2]|0;
     $15 = ($14|0)>(-1);
     if ($15) {
      $16 = (___lockfile($$02327)|0);
      $24 = $16;
     } else {
      $24 = 0;
     }
     $17 = ((($$02327)) + 20|0);
     $18 = HEAP32[$17>>2]|0;
     $19 = ((($$02327)) + 28|0);
     $20 = HEAP32[$19>>2]|0;
     $21 = ($18>>>0)>($20>>>0);
     if ($21) {
      $22 = (___fflush_unlocked($$02327)|0);
      $23 = $22 | $$02426;
      $$1 = $23;
     } else {
      $$1 = $$02426;
     }
     $25 = ($24|0)==(0);
     if (!($25)) {
      ___unlockfile($$02327);
     }
     $26 = ((($$02327)) + 56|0);
     $$023 = HEAP32[$26>>2]|0;
     $27 = ($$023|0)==(0|0);
     if ($27) {
      $$024$lcssa = $$1;
      break;
     } else {
      $$02327 = $$023;$$02426 = $$1;
     }
    }
   }
   ___unlock(((9996)|0));
   $$0 = $$024$lcssa;
  } else {
   $2 = ((($0)) + 76|0);
   $3 = HEAP32[$2>>2]|0;
   $4 = ($3|0)>(-1);
   if (!($4)) {
    $5 = (___fflush_unlocked($0)|0);
    $$0 = $5;
    break;
   }
   $6 = (___lockfile($0)|0);
   $phitmp = ($6|0)==(0);
   $7 = (___fflush_unlocked($0)|0);
   if ($phitmp) {
    $$0 = $7;
   } else {
    ___unlockfile($0);
    $$0 = $7;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___fflush_unlocked($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 20|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ((($0)) + 28|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($2>>>0)>($4>>>0);
 if ($5) {
  $6 = ((($0)) + 36|0);
  $7 = HEAP32[$6>>2]|0;
  (FUNCTION_TABLE_iiii[$7 & 31]($0,0,0)|0);
  $8 = HEAP32[$1>>2]|0;
  $9 = ($8|0)==(0|0);
  if ($9) {
   $$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $10 = ((($0)) + 4|0);
  $11 = HEAP32[$10>>2]|0;
  $12 = ((($0)) + 8|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ($11>>>0)<($13>>>0);
  if ($14) {
   $15 = ((($0)) + 40|0);
   $16 = HEAP32[$15>>2]|0;
   $17 = $11;
   $18 = $13;
   $19 = (($17) - ($18))|0;
   (FUNCTION_TABLE_iiii[$16 & 31]($0,$19,1)|0);
  }
  $20 = ((($0)) + 16|0);
  HEAP32[$20>>2] = 0;
  HEAP32[$3>>2] = 0;
  HEAP32[$1>>2] = 0;
  HEAP32[$12>>2] = 0;
  HEAP32[$10>>2] = 0;
  $$0 = 0;
 }
 return ($$0|0);
}
function ___fseeko($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 76|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($4|0)>(-1);
 if ($5) {
  $7 = (___lockfile($0)|0);
  $phitmp = ($7|0)==(0);
  $8 = (___fseeko_unlocked($0,$1,$2)|0);
  if ($phitmp) {
   $9 = $8;
  } else {
   ___unlockfile($0);
   $9 = $8;
  }
 } else {
  $6 = (___fseeko_unlocked($0,$1,$2)|0);
  $9 = $6;
 }
 return ($9|0);
}
function ___fseeko_unlocked($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$019 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2|0)==(1);
 if ($3) {
  $4 = ((($0)) + 8|0);
  $5 = HEAP32[$4>>2]|0;
  $6 = ((($0)) + 4|0);
  $7 = HEAP32[$6>>2]|0;
  $8 = (($1) - ($5))|0;
  $9 = (($8) + ($7))|0;
  $$019 = $9;
 } else {
  $$019 = $1;
 }
 $10 = ((($0)) + 20|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = ((($0)) + 28|0);
 $13 = HEAP32[$12>>2]|0;
 $14 = ($11>>>0)>($13>>>0);
 if ($14) {
  $15 = ((($0)) + 36|0);
  $16 = HEAP32[$15>>2]|0;
  (FUNCTION_TABLE_iiii[$16 & 31]($0,0,0)|0);
  $17 = HEAP32[$10>>2]|0;
  $18 = ($17|0)==(0|0);
  if ($18) {
   $$0 = -1;
  } else {
   label = 5;
  }
 } else {
  label = 5;
 }
 if ((label|0) == 5) {
  $19 = ((($0)) + 16|0);
  HEAP32[$19>>2] = 0;
  HEAP32[$12>>2] = 0;
  HEAP32[$10>>2] = 0;
  $20 = ((($0)) + 40|0);
  $21 = HEAP32[$20>>2]|0;
  $22 = (FUNCTION_TABLE_iiii[$21 & 31]($0,$$019,$2)|0);
  $23 = ($22|0)<(0);
  if ($23) {
   $$0 = -1;
  } else {
   $24 = ((($0)) + 8|0);
   HEAP32[$24>>2] = 0;
   $25 = ((($0)) + 4|0);
   HEAP32[$25>>2] = 0;
   $26 = HEAP32[$0>>2]|0;
   $27 = $26 & -17;
   HEAP32[$0>>2] = $27;
   $$0 = 0;
  }
 }
 return ($$0|0);
}
function _strlen($0) {
 $0 = $0|0;
 var $$0 = 0, $$014 = 0, $$015$lcssa = 0, $$01518 = 0, $$1$lcssa = 0, $$pn = 0, $$pn29 = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 & 3;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$015$lcssa = $0;
   label = 4;
  } else {
   $$01518 = $0;$22 = $1;
   while(1) {
    $4 = HEAP8[$$01518>>0]|0;
    $5 = ($4<<24>>24)==(0);
    if ($5) {
     $$pn = $22;
     break L1;
    }
    $6 = ((($$01518)) + 1|0);
    $7 = $6;
    $8 = $7 & 3;
    $9 = ($8|0)==(0);
    if ($9) {
     $$015$lcssa = $6;
     label = 4;
     break;
    } else {
     $$01518 = $6;$22 = $7;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0 = $$015$lcssa;
  while(1) {
   $10 = HEAP32[$$0>>2]|0;
   $11 = (($10) + -16843009)|0;
   $12 = $10 & -2139062144;
   $13 = $12 ^ -2139062144;
   $14 = $13 & $11;
   $15 = ($14|0)==(0);
   $16 = ((($$0)) + 4|0);
   if ($15) {
    $$0 = $16;
   } else {
    break;
   }
  }
  $17 = $10&255;
  $18 = ($17<<24>>24)==(0);
  if ($18) {
   $$1$lcssa = $$0;
  } else {
   $$pn29 = $$0;
   while(1) {
    $19 = ((($$pn29)) + 1|0);
    $$pre = HEAP8[$19>>0]|0;
    $20 = ($$pre<<24>>24)==(0);
    if ($20) {
     $$1$lcssa = $19;
     break;
    } else {
     $$pn29 = $19;
    }
   }
  }
  $21 = $$1$lcssa;
  $$pn = $21;
 }
 $$014 = (($$pn) - ($1))|0;
 return ($$014|0);
}
function ___toread($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 HEAP8[$1>>0] = $6;
 $7 = ((($0)) + 20|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ((($0)) + 44|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = ($8>>>0)>($10>>>0);
 if ($11) {
  $12 = ((($0)) + 36|0);
  $13 = HEAP32[$12>>2]|0;
  (FUNCTION_TABLE_iiii[$13 & 31]($0,0,0)|0);
 }
 $14 = ((($0)) + 16|0);
 HEAP32[$14>>2] = 0;
 $15 = ((($0)) + 28|0);
 HEAP32[$15>>2] = 0;
 HEAP32[$7>>2] = 0;
 $16 = HEAP32[$0>>2]|0;
 $17 = $16 & 20;
 $18 = ($17|0)==(0);
 if ($18) {
  $22 = HEAP32[$9>>2]|0;
  $23 = ((($0)) + 8|0);
  HEAP32[$23>>2] = $22;
  $24 = ((($0)) + 4|0);
  HEAP32[$24>>2] = $22;
  $$0 = 0;
 } else {
  $19 = $16 & 4;
  $20 = ($19|0)==(0);
  if ($20) {
   $$0 = -1;
  } else {
   $21 = $16 | 32;
   HEAP32[$0>>2] = $21;
   $$0 = -1;
  }
 }
 return ($$0|0);
}
function _isspace($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(32);
 $2 = (($0) + -9)|0;
 $3 = ($2>>>0)<(5);
 $4 = $1 | $3;
 $5 = $4&1;
 return ($5|0);
}
function _fread($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$ = 0, $$0 = 0, $$053$ph = 0, $$05357 = 0, $$054$ph = 0, $$05456 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = Math_imul($2, $1)|0;
 $5 = ((($3)) + 76|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ($6|0)>(-1);
 if ($7) {
  $8 = (___lockfile($3)|0);
  $34 = $8;
 } else {
  $34 = 0;
 }
 $9 = ((($3)) + 74|0);
 $10 = HEAP8[$9>>0]|0;
 $11 = $10 << 24 >> 24;
 $12 = (($11) + 255)|0;
 $13 = $12 | $11;
 $14 = $13&255;
 HEAP8[$9>>0] = $14;
 $15 = ((($3)) + 8|0);
 $16 = HEAP32[$15>>2]|0;
 $17 = ((($3)) + 4|0);
 $18 = HEAP32[$17>>2]|0;
 $19 = (($16) - ($18))|0;
 $20 = ($19|0)>(0);
 $21 = $18;
 if ($20) {
  $22 = ($19>>>0)<($4>>>0);
  $$ = $22 ? $19 : $4;
  _memcpy(($0|0),($21|0),($$|0))|0;
  $23 = (($21) + ($$)|0);
  HEAP32[$17>>2] = $23;
  $24 = (($0) + ($$)|0);
  $25 = (($4) - ($$))|0;
  $$053$ph = $25;$$054$ph = $24;
 } else {
  $$053$ph = $4;$$054$ph = $0;
 }
 $26 = ($$053$ph|0)==(0);
 L7: do {
  if ($26) {
   label = 13;
  } else {
   $27 = ((($3)) + 32|0);
   $$05357 = $$053$ph;$$05456 = $$054$ph;
   while(1) {
    $28 = (___toread($3)|0);
    $29 = ($28|0)==(0);
    if (!($29)) {
     break;
    }
    $30 = HEAP32[$27>>2]|0;
    $31 = (FUNCTION_TABLE_iiii[$30 & 31]($3,$$05456,$$05357)|0);
    $32 = (($31) + 1)|0;
    $33 = ($32>>>0)<(2);
    if ($33) {
     break;
    }
    $38 = (($$05357) - ($31))|0;
    $39 = (($$05456) + ($31)|0);
    $40 = ($38|0)==(0);
    if ($40) {
     label = 13;
     break L7;
    } else {
     $$05357 = $38;$$05456 = $39;
    }
   }
   $35 = ($34|0)==(0);
   if (!($35)) {
    ___unlockfile($3);
   }
   $36 = (($4) - ($$05357))|0;
   $37 = (($36>>>0) / ($1>>>0))&-1;
   $$0 = $37;
  }
 } while(0);
 if ((label|0) == 13) {
  $41 = ($34|0)==(0);
  if ($41) {
   $$0 = $2;
  } else {
   ___unlockfile($3);
   $$0 = $2;
  }
 }
 return ($$0|0);
}
function _fopen($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $memchr = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $memchr = (_memchr(8910,$3,4)|0);
 $4 = ($memchr|0)==(0|0);
 if ($4) {
  $5 = (___errno_location()|0);
  HEAP32[$5>>2] = 22;
  $$0 = 0;
 } else {
  $6 = (___fmodeflags($1)|0);
  $7 = $6 | 32768;
  HEAP32[$vararg_buffer>>2] = $0;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = $7;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = 438;
  $8 = (___syscall5(5,($vararg_buffer|0))|0);
  $9 = (___syscall_ret($8)|0);
  $10 = ($9|0)<(0);
  if ($10) {
   $$0 = 0;
  } else {
   $11 = (___fdopen($9,$1)|0);
   $12 = ($11|0)==(0|0);
   if ($12) {
    HEAP32[$vararg_buffer3>>2] = $9;
    (___syscall6(6,($vararg_buffer3|0))|0);
    $$0 = 0;
   } else {
    $$0 = $11;
   }
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function ___fmodeflags($0) {
 $0 = $0|0;
 var $$ = 0, $$$4 = 0, $$0 = 0, $$0$ = 0, $$2 = 0, $$2$ = 0, $$4 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (_strchr($0,43)|0);
 $2 = ($1|0)==(0|0);
 $3 = HEAP8[$0>>0]|0;
 $not$ = ($3<<24>>24)!=(114);
 $$ = $not$&1;
 $$0 = $2 ? $$ : 2;
 $4 = (_strchr($0,120)|0);
 $5 = ($4|0)==(0|0);
 $6 = $$0 | 128;
 $$0$ = $5 ? $$0 : $6;
 $7 = (_strchr($0,101)|0);
 $8 = ($7|0)==(0|0);
 $9 = $$0$ | 524288;
 $$2 = $8 ? $$0$ : $9;
 $10 = ($3<<24>>24)==(114);
 $11 = $$2 | 64;
 $$2$ = $10 ? $$2 : $11;
 $12 = ($3<<24>>24)==(119);
 $13 = $$2$ | 512;
 $$4 = $12 ? $13 : $$2$;
 $14 = ($3<<24>>24)==(97);
 $15 = $$4 | 1024;
 $$$4 = $14 ? $15 : $$4;
 return ($$$4|0);
}
function ___fdopen($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$cast = 0, $$pre = 0, $$pre34 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $memchr = 0, $vararg_buffer = 0, $vararg_buffer12 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr10 = 0, $vararg_ptr11 = 0, $vararg_ptr15 = 0, $vararg_ptr16 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, dest = 0, label = 0;
 var sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(112|0);
 $vararg_buffer12 = sp + 40|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $2 = sp + 52|0;
 $3 = HEAP8[$1>>0]|0;
 $4 = $3 << 24 >> 24;
 $memchr = (_memchr(8910,$4,4)|0);
 $5 = ($memchr|0)==(0|0);
 if ($5) {
  $6 = (___errno_location()|0);
  HEAP32[$6>>2] = 22;
  $$0 = 0;
 } else {
  $7 = (_malloc(1144)|0);
  $8 = ($7|0)==(0|0);
  if ($8) {
   $$0 = 0;
  } else {
   dest=$7; stop=dest+112|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
   $9 = (_strchr($1,43)|0);
   $10 = ($9|0)==(0|0);
   if ($10) {
    $11 = ($3<<24>>24)==(114);
    $12 = $11 ? 8 : 4;
    HEAP32[$7>>2] = $12;
   }
   $13 = (_strchr($1,101)|0);
   $14 = ($13|0)==(0|0);
   if ($14) {
    $15 = $3;
   } else {
    HEAP32[$vararg_buffer>>2] = $0;
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    HEAP32[$vararg_ptr1>>2] = 2;
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    HEAP32[$vararg_ptr2>>2] = 1;
    (___syscall221(221,($vararg_buffer|0))|0);
    $$pre = HEAP8[$1>>0]|0;
    $15 = $$pre;
   }
   $16 = ($15<<24>>24)==(97);
   if ($16) {
    HEAP32[$vararg_buffer3>>2] = $0;
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    HEAP32[$vararg_ptr6>>2] = 3;
    $17 = (___syscall221(221,($vararg_buffer3|0))|0);
    $18 = $17 & 1024;
    $19 = ($18|0)==(0);
    if ($19) {
     $20 = $17 | 1024;
     HEAP32[$vararg_buffer7>>2] = $0;
     $vararg_ptr10 = ((($vararg_buffer7)) + 4|0);
     HEAP32[$vararg_ptr10>>2] = 4;
     $vararg_ptr11 = ((($vararg_buffer7)) + 8|0);
     HEAP32[$vararg_ptr11>>2] = $20;
     (___syscall221(221,($vararg_buffer7|0))|0);
    }
    $21 = HEAP32[$7>>2]|0;
    $22 = $21 | 128;
    HEAP32[$7>>2] = $22;
    $29 = $22;
   } else {
    $$pre34 = HEAP32[$7>>2]|0;
    $29 = $$pre34;
   }
   $23 = ((($7)) + 60|0);
   HEAP32[$23>>2] = $0;
   $24 = ((($7)) + 120|0);
   $25 = ((($7)) + 44|0);
   HEAP32[$25>>2] = $24;
   $26 = ((($7)) + 48|0);
   HEAP32[$26>>2] = 1024;
   $27 = ((($7)) + 75|0);
   HEAP8[$27>>0] = -1;
   $28 = $29 & 8;
   $30 = ($28|0)==(0);
   if ($30) {
    HEAP32[$vararg_buffer12>>2] = $0;
    $vararg_ptr15 = ((($vararg_buffer12)) + 4|0);
    HEAP32[$vararg_ptr15>>2] = 21505;
    $vararg_ptr16 = ((($vararg_buffer12)) + 8|0);
    HEAP32[$vararg_ptr16>>2] = $2;
    $31 = (___syscall54(54,($vararg_buffer12|0))|0);
    $32 = ($31|0)==(0);
    if ($32) {
     HEAP8[$27>>0] = 10;
    }
   }
   $33 = ((($7)) + 32|0);
   HEAP32[$33>>2] = 16;
   $34 = ((($7)) + 36|0);
   HEAP32[$34>>2] = 2;
   $35 = ((($7)) + 40|0);
   HEAP32[$35>>2] = 3;
   $36 = ((($7)) + 12|0);
   HEAP32[$36>>2] = 1;
   $37 = HEAP32[(9972)>>2]|0;
   $38 = ($37|0)==(0);
   if ($38) {
    $39 = ((($7)) + 76|0);
    HEAP32[$39>>2] = -1;
   }
   ___lock(((9996)|0));
   $40 = HEAP32[(9992)>>2]|0;
   $41 = ((($7)) + 56|0);
   HEAP32[$41>>2] = $40;
   $42 = ($40|0)==(0);
   if (!($42)) {
    $$cast = $40;
    $43 = ((($$cast)) + 52|0);
    HEAP32[$43>>2] = $7;
   }
   HEAP32[(9992)>>2] = $7;
   ___unlock(((9996)|0));
   $$0 = $7;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function _strchr($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (___strchrnul($0,$1)|0);
 $3 = HEAP8[$2>>0]|0;
 $4 = $1&255;
 $5 = ($3<<24>>24)==($4<<24>>24);
 $6 = $5 ? $2 : 0;
 return ($6|0);
}
function ___strchrnul($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$029$lcssa = 0, $$02936 = 0, $$030$lcssa = 0, $$03039 = 0, $$1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond33 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $1 & 255;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $8 = (_strlen($0)|0);
   $9 = (($0) + ($8)|0);
   $$0 = $9;
  } else {
   $4 = $0;
   $5 = $4 & 3;
   $6 = ($5|0)==(0);
   if ($6) {
    $$030$lcssa = $0;
   } else {
    $7 = $1&255;
    $$03039 = $0;
    while(1) {
     $10 = HEAP8[$$03039>>0]|0;
     $11 = ($10<<24>>24)==(0);
     $12 = ($10<<24>>24)==($7<<24>>24);
     $or$cond = $11 | $12;
     if ($or$cond) {
      $$0 = $$03039;
      break L1;
     }
     $13 = ((($$03039)) + 1|0);
     $14 = $13;
     $15 = $14 & 3;
     $16 = ($15|0)==(0);
     if ($16) {
      $$030$lcssa = $13;
      break;
     } else {
      $$03039 = $13;
     }
    }
   }
   $17 = Math_imul($2, 16843009)|0;
   $18 = HEAP32[$$030$lcssa>>2]|0;
   $19 = (($18) + -16843009)|0;
   $20 = $18 & -2139062144;
   $21 = $20 ^ -2139062144;
   $22 = $21 & $19;
   $23 = ($22|0)==(0);
   L10: do {
    if ($23) {
     $$02936 = $$030$lcssa;$25 = $18;
     while(1) {
      $24 = $25 ^ $17;
      $26 = (($24) + -16843009)|0;
      $27 = $24 & -2139062144;
      $28 = $27 ^ -2139062144;
      $29 = $28 & $26;
      $30 = ($29|0)==(0);
      if (!($30)) {
       $$029$lcssa = $$02936;
       break L10;
      }
      $31 = ((($$02936)) + 4|0);
      $32 = HEAP32[$31>>2]|0;
      $33 = (($32) + -16843009)|0;
      $34 = $32 & -2139062144;
      $35 = $34 ^ -2139062144;
      $36 = $35 & $33;
      $37 = ($36|0)==(0);
      if ($37) {
       $$02936 = $31;$25 = $32;
      } else {
       $$029$lcssa = $31;
       break;
      }
     }
    } else {
     $$029$lcssa = $$030$lcssa;
    }
   } while(0);
   $38 = $1&255;
   $$1 = $$029$lcssa;
   while(1) {
    $39 = HEAP8[$$1>>0]|0;
    $40 = ($39<<24>>24)==(0);
    $41 = ($39<<24>>24)==($38<<24>>24);
    $or$cond33 = $40 | $41;
    $42 = ((($$1)) + 1|0);
    if ($or$cond33) {
     $$0 = $$1;
     break;
    } else {
     $$1 = $42;
    }
   }
  }
 } while(0);
 return ($$0|0);
}
function _fclose($0) {
 $0 = $0|0;
 var $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 76|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)>(-1);
 if ($3) {
 }
 $4 = HEAP32[$0>>2]|0;
 $5 = $4 & 1;
 $6 = ($5|0)!=(0);
 if (!($6)) {
  ___lock(((9996)|0));
  $7 = ((($0)) + 52|0);
  $8 = HEAP32[$7>>2]|0;
  $9 = ($8|0)==(0|0);
  $10 = $8;
  $$pre = ((($0)) + 56|0);
  if (!($9)) {
   $11 = HEAP32[$$pre>>2]|0;
   $12 = ((($8)) + 56|0);
   HEAP32[$12>>2] = $11;
  }
  $13 = HEAP32[$$pre>>2]|0;
  $14 = ($13|0)==(0|0);
  $15 = $13;
  if (!($14)) {
   $16 = ((($13)) + 52|0);
   HEAP32[$16>>2] = $10;
  }
  $17 = HEAP32[(9992)>>2]|0;
  $18 = ($17|0)==($0|0);
  if ($18) {
   HEAP32[(9992)>>2] = $15;
  }
  ___unlock(((9996)|0));
 }
 $19 = (_fflush($0)|0);
 $20 = ((($0)) + 12|0);
 $21 = HEAP32[$20>>2]|0;
 $22 = (FUNCTION_TABLE_ii[$21 & 15]($0)|0);
 $23 = $22 | $19;
 $24 = ((($0)) + 92|0);
 $25 = HEAP32[$24>>2]|0;
 $26 = ($25|0)==(0|0);
 if (!($26)) {
  _free($25);
 }
 if (!($6)) {
  _free($0);
 }
 return ($23|0);
}
function _fprintf($0,$1,$varargs) {
 $0 = $0|0;
 $1 = $1|0;
 $varargs = $varargs|0;
 var $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = sp;
 HEAP32[$2>>2] = $varargs;
 $3 = (_vfprintf($0,$1,$2)|0);
 STACKTOP = sp;return ($3|0);
}
function _fseek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = (___fseeko($0,$1,$2)|0);
 return ($3|0);
}
function _strcpy($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___stpcpy($0,$1)|0);
 return ($0|0);
}
function _memcmp($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$01318 = 0, $$01417 = 0, $$019 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $14 = 0;
  } else {
   $$01318 = $0;$$01417 = $2;$$019 = $1;
   while(1) {
    $4 = HEAP8[$$01318>>0]|0;
    $5 = HEAP8[$$019>>0]|0;
    $6 = ($4<<24>>24)==($5<<24>>24);
    if (!($6)) {
     break;
    }
    $7 = (($$01417) + -1)|0;
    $8 = ((($$01318)) + 1|0);
    $9 = ((($$019)) + 1|0);
    $10 = ($7|0)==(0);
    if ($10) {
     $14 = 0;
     break L1;
    } else {
     $$01318 = $8;$$01417 = $7;$$019 = $9;
    }
   }
   $11 = $4&255;
   $12 = $5&255;
   $13 = (($11) - ($12))|0;
   $14 = $13;
  }
 } while(0);
 return ($14|0);
}
function ___stpcpy($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$lcssa = 0, $$025$lcssa = 0, $$02536 = 0, $$026$lcssa = 0, $$02642 = 0, $$027$lcssa = 0, $$02741 = 0, $$029 = 0, $$037 = 0, $$1$ph = 0, $$128$ph = 0, $$12834 = 0, $$135 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $1;
 $3 = $0;
 $4 = $2 ^ $3;
 $5 = $4 & 3;
 $6 = ($5|0)==(0);
 L1: do {
  if ($6) {
   $7 = $2 & 3;
   $8 = ($7|0)==(0);
   if ($8) {
    $$026$lcssa = $1;$$027$lcssa = $0;
   } else {
    $$02642 = $1;$$02741 = $0;
    while(1) {
     $9 = HEAP8[$$02642>>0]|0;
     HEAP8[$$02741>>0] = $9;
     $10 = ($9<<24>>24)==(0);
     if ($10) {
      $$029 = $$02741;
      break L1;
     }
     $11 = ((($$02642)) + 1|0);
     $12 = ((($$02741)) + 1|0);
     $13 = $11;
     $14 = $13 & 3;
     $15 = ($14|0)==(0);
     if ($15) {
      $$026$lcssa = $11;$$027$lcssa = $12;
      break;
     } else {
      $$02642 = $11;$$02741 = $12;
     }
    }
   }
   $16 = HEAP32[$$026$lcssa>>2]|0;
   $17 = (($16) + -16843009)|0;
   $18 = $16 & -2139062144;
   $19 = $18 ^ -2139062144;
   $20 = $19 & $17;
   $21 = ($20|0)==(0);
   if ($21) {
    $$02536 = $$027$lcssa;$$037 = $$026$lcssa;$24 = $16;
    while(1) {
     $22 = ((($$037)) + 4|0);
     $23 = ((($$02536)) + 4|0);
     HEAP32[$$02536>>2] = $24;
     $25 = HEAP32[$22>>2]|0;
     $26 = (($25) + -16843009)|0;
     $27 = $25 & -2139062144;
     $28 = $27 ^ -2139062144;
     $29 = $28 & $26;
     $30 = ($29|0)==(0);
     if ($30) {
      $$02536 = $23;$$037 = $22;$24 = $25;
     } else {
      $$0$lcssa = $22;$$025$lcssa = $23;
      break;
     }
    }
   } else {
    $$0$lcssa = $$026$lcssa;$$025$lcssa = $$027$lcssa;
   }
   $$1$ph = $$0$lcssa;$$128$ph = $$025$lcssa;
   label = 8;
  } else {
   $$1$ph = $1;$$128$ph = $0;
   label = 8;
  }
 } while(0);
 if ((label|0) == 8) {
  $31 = HEAP8[$$1$ph>>0]|0;
  HEAP8[$$128$ph>>0] = $31;
  $32 = ($31<<24>>24)==(0);
  if ($32) {
   $$029 = $$128$ph;
  } else {
   $$12834 = $$128$ph;$$135 = $$1$ph;
   while(1) {
    $33 = ((($$135)) + 1|0);
    $34 = ((($$12834)) + 1|0);
    $35 = HEAP8[$33>>0]|0;
    HEAP8[$34>>0] = $35;
    $36 = ($35<<24>>24)==(0);
    if ($36) {
     $$029 = $34;
     break;
    } else {
     $$12834 = $34;$$135 = $33;
    }
   }
  }
 }
 return ($$029|0);
}
function _strncpy($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___stpncpy($0,$1,$2)|0);
 return ($0|0);
}
function ___stpncpy($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$037$lcssa = 0, $$03753 = 0, $$038$lcssa = 0, $$038$lcssa79 = 0, $$03866 = 0, $$039$lcssa = 0, $$039$lcssa78 = 0, $$03965 = 0, $$041$lcssa = 0, $$041$lcssa77 = 0, $$04164 = 0, $$054 = 0, $$1$lcssa = 0, $$140$ph = 0, $$14046 = 0, $$142$ph = 0, $$14245 = 0, $$152 = 0, $$2$ph = 0;
 var $$243 = 0, $$247 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $or$cond = 0, $or$cond63 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1;
 $4 = $0;
 $5 = $3 ^ $4;
 $6 = $5 & 3;
 $7 = ($6|0)==(0);
 do {
  if ($7) {
   $8 = $3 & 3;
   $9 = ($8|0)!=(0);
   $10 = ($2|0)!=(0);
   $or$cond63 = $10 & $9;
   L3: do {
    if ($or$cond63) {
     $$03866 = $2;$$03965 = $1;$$04164 = $0;
     while(1) {
      $11 = HEAP8[$$03965>>0]|0;
      HEAP8[$$04164>>0] = $11;
      $12 = ($11<<24>>24)==(0);
      if ($12) {
       $$038$lcssa79 = $$03866;$$039$lcssa78 = $$03965;$$041$lcssa77 = $$04164;
       break L3;
      }
      $13 = (($$03866) + -1)|0;
      $14 = ((($$03965)) + 1|0);
      $15 = ((($$04164)) + 1|0);
      $16 = $14;
      $17 = $16 & 3;
      $18 = ($17|0)!=(0);
      $19 = ($13|0)!=(0);
      $or$cond = $19 & $18;
      if ($or$cond) {
       $$03866 = $13;$$03965 = $14;$$04164 = $15;
      } else {
       $$038$lcssa = $13;$$039$lcssa = $14;$$041$lcssa = $15;$$lcssa = $19;
       label = 5;
       break;
      }
     }
    } else {
     $$038$lcssa = $2;$$039$lcssa = $1;$$041$lcssa = $0;$$lcssa = $10;
     label = 5;
    }
   } while(0);
   if ((label|0) == 5) {
    if ($$lcssa) {
     $$038$lcssa79 = $$038$lcssa;$$039$lcssa78 = $$039$lcssa;$$041$lcssa77 = $$041$lcssa;
    } else {
     $$243 = $$041$lcssa;$$3 = 0;
     break;
    }
   }
   $20 = HEAP8[$$039$lcssa78>>0]|0;
   $21 = ($20<<24>>24)==(0);
   if ($21) {
    $$243 = $$041$lcssa77;$$3 = $$038$lcssa79;
   } else {
    $22 = ($$038$lcssa79>>>0)>(3);
    L11: do {
     if ($22) {
      $$03753 = $$041$lcssa77;$$054 = $$039$lcssa78;$$152 = $$038$lcssa79;
      while(1) {
       $23 = HEAP32[$$054>>2]|0;
       $24 = (($23) + -16843009)|0;
       $25 = $23 & -2139062144;
       $26 = $25 ^ -2139062144;
       $27 = $26 & $24;
       $28 = ($27|0)==(0);
       if (!($28)) {
        $$0$lcssa = $$054;$$037$lcssa = $$03753;$$1$lcssa = $$152;
        break L11;
       }
       HEAP32[$$03753>>2] = $23;
       $29 = (($$152) + -4)|0;
       $30 = ((($$054)) + 4|0);
       $31 = ((($$03753)) + 4|0);
       $32 = ($29>>>0)>(3);
       if ($32) {
        $$03753 = $31;$$054 = $30;$$152 = $29;
       } else {
        $$0$lcssa = $30;$$037$lcssa = $31;$$1$lcssa = $29;
        break;
       }
      }
     } else {
      $$0$lcssa = $$039$lcssa78;$$037$lcssa = $$041$lcssa77;$$1$lcssa = $$038$lcssa79;
     }
    } while(0);
    $$140$ph = $$0$lcssa;$$142$ph = $$037$lcssa;$$2$ph = $$1$lcssa;
    label = 11;
   }
  } else {
   $$140$ph = $1;$$142$ph = $0;$$2$ph = $2;
   label = 11;
  }
 } while(0);
 L16: do {
  if ((label|0) == 11) {
   $33 = ($$2$ph|0)==(0);
   if ($33) {
    $$243 = $$142$ph;$$3 = 0;
   } else {
    $$14046 = $$140$ph;$$14245 = $$142$ph;$$247 = $$2$ph;
    while(1) {
     $34 = HEAP8[$$14046>>0]|0;
     HEAP8[$$14245>>0] = $34;
     $35 = ($34<<24>>24)==(0);
     if ($35) {
      $$243 = $$14245;$$3 = $$247;
      break L16;
     }
     $36 = (($$247) + -1)|0;
     $37 = ((($$14046)) + 1|0);
     $38 = ((($$14245)) + 1|0);
     $39 = ($36|0)==(0);
     if ($39) {
      $$243 = $38;$$3 = 0;
      break;
     } else {
      $$14046 = $37;$$14245 = $38;$$247 = $36;
     }
    }
   }
  }
 } while(0);
 _memset(($$243|0),0,($$3|0))|0;
 return ($$243|0);
}
function _strcmp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$011 = 0, $$0710 = 0, $$lcssa = 0, $$lcssa8 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $2 = HEAP8[$0>>0]|0;
 $3 = HEAP8[$1>>0]|0;
 $4 = ($2<<24>>24)!=($3<<24>>24);
 $5 = ($2<<24>>24)==(0);
 $or$cond9 = $5 | $4;
 if ($or$cond9) {
  $$lcssa = $3;$$lcssa8 = $2;
 } else {
  $$011 = $1;$$0710 = $0;
  while(1) {
   $6 = ((($$0710)) + 1|0);
   $7 = ((($$011)) + 1|0);
   $8 = HEAP8[$6>>0]|0;
   $9 = HEAP8[$7>>0]|0;
   $10 = ($8<<24>>24)!=($9<<24>>24);
   $11 = ($8<<24>>24)==(0);
   $or$cond = $11 | $10;
   if ($or$cond) {
    $$lcssa = $9;$$lcssa8 = $8;
    break;
   } else {
    $$011 = $7;$$0710 = $6;
   }
  }
 }
 $12 = $$lcssa8&255;
 $13 = $$lcssa&255;
 $14 = (($12) - ($13))|0;
 return ($14|0);
}
function _strspn($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$01925 = 0, $$020 = 0, $$1$lcssa = 0, $$123 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $div = 0, $div21 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $2 = sp;
 ;HEAP32[$2>>2]=0|0;HEAP32[$2+4>>2]=0|0;HEAP32[$2+8>>2]=0|0;HEAP32[$2+12>>2]=0|0;HEAP32[$2+16>>2]=0|0;HEAP32[$2+20>>2]=0|0;HEAP32[$2+24>>2]=0|0;HEAP32[$2+28>>2]=0|0;
 $3 = HEAP8[$1>>0]|0;
 $4 = ($3<<24>>24)==(0);
 do {
  if ($4) {
   $$0 = 0;
  } else {
   $5 = ((($1)) + 1|0);
   $6 = HEAP8[$5>>0]|0;
   $7 = ($6<<24>>24)==(0);
   if ($7) {
    $$020 = $0;
    while(1) {
     $8 = HEAP8[$$020>>0]|0;
     $9 = ($8<<24>>24)==($3<<24>>24);
     $10 = ((($$020)) + 1|0);
     if ($9) {
      $$020 = $10;
     } else {
      break;
     }
    }
    $11 = $$020;
    $12 = $0;
    $13 = (($11) - ($12))|0;
    $$0 = $13;
    break;
   } else {
    $$01925 = $1;$17 = $3;
   }
   while(1) {
    $16 = $17 & 31;
    $18 = $16&255;
    $19 = 1 << $18;
    $div21 = ($17&255) >>> 5;
    $20 = $div21&255;
    $21 = (($2) + ($20<<2)|0);
    $22 = HEAP32[$21>>2]|0;
    $23 = $22 | $19;
    HEAP32[$21>>2] = $23;
    $24 = ((($$01925)) + 1|0);
    $25 = HEAP8[$24>>0]|0;
    $26 = ($25<<24>>24)==(0);
    if ($26) {
     break;
    } else {
     $$01925 = $24;$17 = $25;
    }
   }
   $14 = HEAP8[$0>>0]|0;
   $15 = ($14<<24>>24)==(0);
   L10: do {
    if ($15) {
     $$1$lcssa = $0;
    } else {
     $$123 = $0;$27 = $14;
     while(1) {
      $div = ($27&255) >>> 5;
      $28 = $div&255;
      $29 = (($2) + ($28<<2)|0);
      $30 = HEAP32[$29>>2]|0;
      $31 = $27 & 31;
      $32 = $31&255;
      $33 = 1 << $32;
      $34 = $30 & $33;
      $35 = ($34|0)==(0);
      if ($35) {
       $$1$lcssa = $$123;
       break L10;
      }
      $36 = ((($$123)) + 1|0);
      $37 = HEAP8[$36>>0]|0;
      $38 = ($37<<24>>24)==(0);
      if ($38) {
       $$1$lcssa = $36;
       break;
      } else {
       $$123 = $36;$27 = $37;
      }
     }
    }
   } while(0);
   $39 = $$1$lcssa;
   $40 = $0;
   $41 = (($39) - ($40))|0;
   $$0 = $41;
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function _atoi($0) {
 $0 = $0|0;
 var $$0 = 0, $$010$lcssa = 0, $$01016 = 0, $$011 = 0, $$1$ph = 0, $$112$ph = 0, $$11215 = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $isdigit = 0, $isdigit14 = 0, $isdigittmp = 0, $isdigittmp13 = 0, $isdigittmp17 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$011 = $0;
 while(1) {
  $1 = HEAP8[$$011>>0]|0;
  $2 = $1 << 24 >> 24;
  $3 = (_isspace($2)|0);
  $4 = ($3|0)==(0);
  $5 = ((($$011)) + 1|0);
  if ($4) {
   break;
  } else {
   $$011 = $5;
  }
 }
 switch ($2|0) {
 case 45:  {
  $$0 = 1;
  label = 5;
  break;
 }
 case 43:  {
  $$0 = 0;
  label = 5;
  break;
 }
 default: {
  $$1$ph = 0;$$112$ph = $$011;$7 = $1;
 }
 }
 if ((label|0) == 5) {
  $$pre = HEAP8[$5>>0]|0;
  $$1$ph = $$0;$$112$ph = $5;$7 = $$pre;
 }
 $6 = $7 << 24 >> 24;
 $isdigittmp13 = (($6) + -48)|0;
 $isdigit14 = ($isdigittmp13>>>0)<(10);
 if ($isdigit14) {
  $$01016 = 0;$$11215 = $$112$ph;$isdigittmp17 = $isdigittmp13;
  while(1) {
   $8 = ($$01016*10)|0;
   $9 = ((($$11215)) + 1|0);
   $10 = (($8) - ($isdigittmp17))|0;
   $11 = HEAP8[$9>>0]|0;
   $12 = $11 << 24 >> 24;
   $isdigittmp = (($12) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $$01016 = $10;$$11215 = $9;$isdigittmp17 = $isdigittmp;
   } else {
    $$010$lcssa = $10;
    break;
   }
  }
 } else {
  $$010$lcssa = 0;
 }
 $13 = ($$1$ph|0)!=(0);
 $14 = (0 - ($$010$lcssa))|0;
 $15 = $13 ? $$010$lcssa : $14;
 return ($15|0);
}
function _strcspn($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$01823 = 0, $$019$lcssa = 0, $$01921 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $div = 0, $div20 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $2 = sp;
 $3 = HEAP8[$1>>0]|0;
 $4 = ($3<<24>>24)==(0);
 if ($4) {
  label = 3;
 } else {
  $5 = ((($1)) + 1|0);
  $6 = HEAP8[$5>>0]|0;
  $7 = ($6<<24>>24)==(0);
  if ($7) {
   label = 3;
  } else {
   ;HEAP32[$2>>2]=0|0;HEAP32[$2+4>>2]=0|0;HEAP32[$2+8>>2]=0|0;HEAP32[$2+12>>2]=0|0;HEAP32[$2+16>>2]=0|0;HEAP32[$2+20>>2]=0|0;HEAP32[$2+24>>2]=0|0;HEAP32[$2+28>>2]=0|0;
   $$01823 = $1;$16 = $3;
   while(1) {
    $15 = $16 & 31;
    $17 = $15&255;
    $18 = 1 << $17;
    $div20 = ($16&255) >>> 5;
    $19 = $div20&255;
    $20 = (($2) + ($19<<2)|0);
    $21 = HEAP32[$20>>2]|0;
    $22 = $21 | $18;
    HEAP32[$20>>2] = $22;
    $23 = ((($$01823)) + 1|0);
    $24 = HEAP8[$23>>0]|0;
    $25 = ($24<<24>>24)==(0);
    if ($25) {
     break;
    } else {
     $$01823 = $23;$16 = $24;
    }
   }
   $13 = HEAP8[$0>>0]|0;
   $14 = ($13<<24>>24)==(0);
   L7: do {
    if ($14) {
     $$019$lcssa = $0;
    } else {
     $$01921 = $0;$26 = $13;
     while(1) {
      $div = ($26&255) >>> 5;
      $27 = $div&255;
      $28 = (($2) + ($27<<2)|0);
      $29 = HEAP32[$28>>2]|0;
      $30 = $26 & 31;
      $31 = $30&255;
      $32 = 1 << $31;
      $33 = $29 & $32;
      $34 = ($33|0)==(0);
      if (!($34)) {
       $$019$lcssa = $$01921;
       break L7;
      }
      $35 = ((($$01921)) + 1|0);
      $36 = HEAP8[$35>>0]|0;
      $37 = ($36<<24>>24)==(0);
      if ($37) {
       $$019$lcssa = $35;
       break;
      } else {
       $$01921 = $35;$26 = $36;
      }
     }
    }
   } while(0);
   $38 = $$019$lcssa;
   $39 = $0;
   $40 = (($38) - ($39))|0;
   $$0 = $40;
  }
 }
 if ((label|0) == 3) {
  $8 = $3 << 24 >> 24;
  $9 = (___strchrnul($0,$8)|0);
  $10 = $9;
  $11 = $0;
  $12 = (($10) - ($11))|0;
  $$0 = $12;
 }
 STACKTOP = sp;return ($$0|0);
}
function _strrchr($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (_strlen($0)|0);
 $3 = (($2) + 1)|0;
 $4 = (___memrchr($0,$1,$3)|0);
 return ($4|0);
}
function ___memrchr($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$09 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1&255;
 $$09 = $2;
 while(1) {
  $4 = (($$09) + -1)|0;
  $5 = ($$09|0)==(0);
  if ($5) {
   $$0 = 0;
   break;
  }
  $6 = (($0) + ($4)|0);
  $7 = HEAP8[$6>>0]|0;
  $8 = ($7<<24>>24)==($3<<24>>24);
  if ($8) {
   $$0 = $6;
   break;
  } else {
   $$09 = $4;
  }
 }
 return ($$0|0);
}
function _strcat($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (_strlen($0)|0);
 $3 = (($0) + ($2)|0);
 (_strcpy($3,$1)|0);
 return ($0|0);
}
function _strtok($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$010 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $3 = HEAP32[2504]|0;
  $4 = ($3|0)==(0|0);
  if ($4) {
   $$0 = 0;
  } else {
   $$010 = $3;
   label = 3;
  }
 } else {
  $$010 = $0;
  label = 3;
 }
 do {
  if ((label|0) == 3) {
   $5 = (_strspn($$010,$1)|0);
   $6 = (($$010) + ($5)|0);
   $7 = HEAP8[$6>>0]|0;
   $8 = ($7<<24>>24)==(0);
   if ($8) {
    HEAP32[2504] = 0;
    $$0 = 0;
    break;
   }
   $9 = (_strcspn($6,$1)|0);
   $10 = (($6) + ($9)|0);
   HEAP32[2504] = $10;
   $11 = HEAP8[$10>>0]|0;
   $12 = ($11<<24>>24)==(0);
   if ($12) {
    HEAP32[2504] = 0;
    $$0 = $6;
    break;
   } else {
    $13 = ((($10)) + 1|0);
    HEAP32[2504] = $13;
    HEAP8[$10>>0] = 0;
    $$0 = $6;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function _malloc($0) {
 $0 = $0|0;
 var $$$0190$i = 0, $$$0191$i = 0, $$$4349$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i17$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0187$i = 0, $$0189$i = 0, $$0190$i = 0, $$0191$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0;
 var $$024370$i = 0, $$0286$i$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0294$i$i = 0, $$0295$i$i = 0, $$0340$i = 0, $$0342$i = 0, $$0343$i = 0, $$0345$i = 0, $$0351$i = 0, $$0356$i = 0, $$0357$$i = 0, $$0357$i = 0, $$0359$i = 0, $$0360$i = 0, $$0366$i = 0, $$1194$i = 0, $$1196$i = 0, $$124469$i = 0;
 var $$1290$i$i = 0, $$1292$i$i = 0, $$1341$i = 0, $$1346$i = 0, $$1361$i = 0, $$1368$i = 0, $$1372$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2353$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3348$i = 0, $$3370$i = 0, $$4$lcssa$i = 0, $$413$i = 0, $$4349$lcssa$i = 0, $$434912$i = 0, $$4355$$4$i = 0;
 var $$4355$ph$i = 0, $$435511$i = 0, $$5256$i = 0, $$723947$i = 0, $$748$i = 0, $$not$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i19$i = 0, $$pre$i205 = 0, $$pre$i208 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i206Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi10$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre9$i$i = 0, $1 = 0;
 var $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0;
 var $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0;
 var $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0;
 var $1053 = 0, $1054 = 0, $1055 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0;
 var $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0;
 var $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0;
 var $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0;
 var $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0;
 var $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0;
 var $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0;
 var $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0;
 var $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0;
 var $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0;
 var $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0;
 var $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0;
 var $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0;
 var $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0;
 var $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0;
 var $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0;
 var $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0;
 var $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0;
 var $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0;
 var $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0;
 var $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0;
 var $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0;
 var $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0;
 var $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0;
 var $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0;
 var $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0;
 var $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0;
 var $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0;
 var $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0;
 var $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0;
 var $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0;
 var $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0;
 var $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0;
 var $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0;
 var $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0;
 var $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0;
 var $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0;
 var $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0;
 var $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0;
 var $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0;
 var $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0;
 var $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0;
 var $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0;
 var $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0;
 var $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i204 = 0, $exitcond$i$i = 0, $not$$i$i = 0, $not$$i22$i = 0;
 var $not$7$i = 0, $or$cond$i = 0, $or$cond$i211 = 0, $or$cond1$i = 0, $or$cond1$i210 = 0, $or$cond10$i = 0, $or$cond11$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond7$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 $2 = ($0>>>0)<(245);
 do {
  if ($2) {
   $3 = ($0>>>0)<(11);
   $4 = (($0) + 11)|0;
   $5 = $4 & -8;
   $6 = $3 ? 16 : $5;
   $7 = $6 >>> 3;
   $8 = HEAP32[2505]|0;
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10|0)==(0);
   if (!($11)) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = (($13) + ($7))|0;
    $15 = $14 << 1;
    $16 = (10060 + ($15<<2)|0);
    $17 = ((($16)) + 8|0);
    $18 = HEAP32[$17>>2]|0;
    $19 = ((($18)) + 8|0);
    $20 = HEAP32[$19>>2]|0;
    $21 = ($16|0)==($20|0);
    do {
     if ($21) {
      $22 = 1 << $14;
      $23 = $22 ^ -1;
      $24 = $8 & $23;
      HEAP32[2505] = $24;
     } else {
      $25 = HEAP32[(10036)>>2]|0;
      $26 = ($20>>>0)<($25>>>0);
      if ($26) {
       _abort();
       // unreachable;
      }
      $27 = ((($20)) + 12|0);
      $28 = HEAP32[$27>>2]|0;
      $29 = ($28|0)==($18|0);
      if ($29) {
       HEAP32[$27>>2] = $16;
       HEAP32[$17>>2] = $20;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $30 = $14 << 3;
    $31 = $30 | 3;
    $32 = ((($18)) + 4|0);
    HEAP32[$32>>2] = $31;
    $33 = (($18) + ($30)|0);
    $34 = ((($33)) + 4|0);
    $35 = HEAP32[$34>>2]|0;
    $36 = $35 | 1;
    HEAP32[$34>>2] = $36;
    $$0 = $19;
    STACKTOP = sp;return ($$0|0);
   }
   $37 = HEAP32[(10028)>>2]|0;
   $38 = ($6>>>0)>($37>>>0);
   if ($38) {
    $39 = ($9|0)==(0);
    if (!($39)) {
     $40 = $9 << $7;
     $41 = 2 << $7;
     $42 = (0 - ($41))|0;
     $43 = $41 | $42;
     $44 = $40 & $43;
     $45 = (0 - ($44))|0;
     $46 = $44 & $45;
     $47 = (($46) + -1)|0;
     $48 = $47 >>> 12;
     $49 = $48 & 16;
     $50 = $47 >>> $49;
     $51 = $50 >>> 5;
     $52 = $51 & 8;
     $53 = $52 | $49;
     $54 = $50 >>> $52;
     $55 = $54 >>> 2;
     $56 = $55 & 4;
     $57 = $53 | $56;
     $58 = $54 >>> $56;
     $59 = $58 >>> 1;
     $60 = $59 & 2;
     $61 = $57 | $60;
     $62 = $58 >>> $60;
     $63 = $62 >>> 1;
     $64 = $63 & 1;
     $65 = $61 | $64;
     $66 = $62 >>> $64;
     $67 = (($65) + ($66))|0;
     $68 = $67 << 1;
     $69 = (10060 + ($68<<2)|0);
     $70 = ((($69)) + 8|0);
     $71 = HEAP32[$70>>2]|0;
     $72 = ((($71)) + 8|0);
     $73 = HEAP32[$72>>2]|0;
     $74 = ($69|0)==($73|0);
     do {
      if ($74) {
       $75 = 1 << $67;
       $76 = $75 ^ -1;
       $77 = $8 & $76;
       HEAP32[2505] = $77;
       $98 = $77;
      } else {
       $78 = HEAP32[(10036)>>2]|0;
       $79 = ($73>>>0)<($78>>>0);
       if ($79) {
        _abort();
        // unreachable;
       }
       $80 = ((($73)) + 12|0);
       $81 = HEAP32[$80>>2]|0;
       $82 = ($81|0)==($71|0);
       if ($82) {
        HEAP32[$80>>2] = $69;
        HEAP32[$70>>2] = $73;
        $98 = $8;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $83 = $67 << 3;
     $84 = (($83) - ($6))|0;
     $85 = $6 | 3;
     $86 = ((($71)) + 4|0);
     HEAP32[$86>>2] = $85;
     $87 = (($71) + ($6)|0);
     $88 = $84 | 1;
     $89 = ((($87)) + 4|0);
     HEAP32[$89>>2] = $88;
     $90 = (($87) + ($84)|0);
     HEAP32[$90>>2] = $84;
     $91 = ($37|0)==(0);
     if (!($91)) {
      $92 = HEAP32[(10040)>>2]|0;
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = (10060 + ($94<<2)|0);
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97|0)==(0);
      if ($99) {
       $100 = $98 | $96;
       HEAP32[2505] = $100;
       $$pre = ((($95)) + 8|0);
       $$0199 = $95;$$pre$phiZ2D = $$pre;
      } else {
       $101 = ((($95)) + 8|0);
       $102 = HEAP32[$101>>2]|0;
       $103 = HEAP32[(10036)>>2]|0;
       $104 = ($102>>>0)<($103>>>0);
       if ($104) {
        _abort();
        // unreachable;
       } else {
        $$0199 = $102;$$pre$phiZ2D = $101;
       }
      }
      HEAP32[$$pre$phiZ2D>>2] = $92;
      $105 = ((($$0199)) + 12|0);
      HEAP32[$105>>2] = $92;
      $106 = ((($92)) + 8|0);
      HEAP32[$106>>2] = $$0199;
      $107 = ((($92)) + 12|0);
      HEAP32[$107>>2] = $95;
     }
     HEAP32[(10028)>>2] = $84;
     HEAP32[(10040)>>2] = $87;
     $$0 = $72;
     STACKTOP = sp;return ($$0|0);
    }
    $108 = HEAP32[(10024)>>2]|0;
    $109 = ($108|0)==(0);
    if ($109) {
     $$0197 = $6;
    } else {
     $110 = (0 - ($108))|0;
     $111 = $108 & $110;
     $112 = (($111) + -1)|0;
     $113 = $112 >>> 12;
     $114 = $113 & 16;
     $115 = $112 >>> $114;
     $116 = $115 >>> 5;
     $117 = $116 & 8;
     $118 = $117 | $114;
     $119 = $115 >>> $117;
     $120 = $119 >>> 2;
     $121 = $120 & 4;
     $122 = $118 | $121;
     $123 = $119 >>> $121;
     $124 = $123 >>> 1;
     $125 = $124 & 2;
     $126 = $122 | $125;
     $127 = $123 >>> $125;
     $128 = $127 >>> 1;
     $129 = $128 & 1;
     $130 = $126 | $129;
     $131 = $127 >>> $129;
     $132 = (($130) + ($131))|0;
     $133 = (10324 + ($132<<2)|0);
     $134 = HEAP32[$133>>2]|0;
     $135 = ((($134)) + 4|0);
     $136 = HEAP32[$135>>2]|0;
     $137 = $136 & -8;
     $138 = (($137) - ($6))|0;
     $$0189$i = $134;$$0190$i = $134;$$0191$i = $138;
     while(1) {
      $139 = ((($$0189$i)) + 16|0);
      $140 = HEAP32[$139>>2]|0;
      $141 = ($140|0)==(0|0);
      if ($141) {
       $142 = ((($$0189$i)) + 20|0);
       $143 = HEAP32[$142>>2]|0;
       $144 = ($143|0)==(0|0);
       if ($144) {
        break;
       } else {
        $146 = $143;
       }
      } else {
       $146 = $140;
      }
      $145 = ((($146)) + 4|0);
      $147 = HEAP32[$145>>2]|0;
      $148 = $147 & -8;
      $149 = (($148) - ($6))|0;
      $150 = ($149>>>0)<($$0191$i>>>0);
      $$$0191$i = $150 ? $149 : $$0191$i;
      $$$0190$i = $150 ? $146 : $$0190$i;
      $$0189$i = $146;$$0190$i = $$$0190$i;$$0191$i = $$$0191$i;
     }
     $151 = HEAP32[(10036)>>2]|0;
     $152 = ($$0190$i>>>0)<($151>>>0);
     if ($152) {
      _abort();
      // unreachable;
     }
     $153 = (($$0190$i) + ($6)|0);
     $154 = ($$0190$i>>>0)<($153>>>0);
     if (!($154)) {
      _abort();
      // unreachable;
     }
     $155 = ((($$0190$i)) + 24|0);
     $156 = HEAP32[$155>>2]|0;
     $157 = ((($$0190$i)) + 12|0);
     $158 = HEAP32[$157>>2]|0;
     $159 = ($158|0)==($$0190$i|0);
     do {
      if ($159) {
       $169 = ((($$0190$i)) + 20|0);
       $170 = HEAP32[$169>>2]|0;
       $171 = ($170|0)==(0|0);
       if ($171) {
        $172 = ((($$0190$i)) + 16|0);
        $173 = HEAP32[$172>>2]|0;
        $174 = ($173|0)==(0|0);
        if ($174) {
         $$3$i = 0;
         break;
        } else {
         $$1194$i = $173;$$1196$i = $172;
        }
       } else {
        $$1194$i = $170;$$1196$i = $169;
       }
       while(1) {
        $175 = ((($$1194$i)) + 20|0);
        $176 = HEAP32[$175>>2]|0;
        $177 = ($176|0)==(0|0);
        if (!($177)) {
         $$1194$i = $176;$$1196$i = $175;
         continue;
        }
        $178 = ((($$1194$i)) + 16|0);
        $179 = HEAP32[$178>>2]|0;
        $180 = ($179|0)==(0|0);
        if ($180) {
         break;
        } else {
         $$1194$i = $179;$$1196$i = $178;
        }
       }
       $181 = ($$1196$i>>>0)<($151>>>0);
       if ($181) {
        _abort();
        // unreachable;
       } else {
        HEAP32[$$1196$i>>2] = 0;
        $$3$i = $$1194$i;
        break;
       }
      } else {
       $160 = ((($$0190$i)) + 8|0);
       $161 = HEAP32[$160>>2]|0;
       $162 = ($161>>>0)<($151>>>0);
       if ($162) {
        _abort();
        // unreachable;
       }
       $163 = ((($161)) + 12|0);
       $164 = HEAP32[$163>>2]|0;
       $165 = ($164|0)==($$0190$i|0);
       if (!($165)) {
        _abort();
        // unreachable;
       }
       $166 = ((($158)) + 8|0);
       $167 = HEAP32[$166>>2]|0;
       $168 = ($167|0)==($$0190$i|0);
       if ($168) {
        HEAP32[$163>>2] = $158;
        HEAP32[$166>>2] = $161;
        $$3$i = $158;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $182 = ($156|0)==(0|0);
     do {
      if (!($182)) {
       $183 = ((($$0190$i)) + 28|0);
       $184 = HEAP32[$183>>2]|0;
       $185 = (10324 + ($184<<2)|0);
       $186 = HEAP32[$185>>2]|0;
       $187 = ($$0190$i|0)==($186|0);
       if ($187) {
        HEAP32[$185>>2] = $$3$i;
        $cond$i = ($$3$i|0)==(0|0);
        if ($cond$i) {
         $188 = 1 << $184;
         $189 = $188 ^ -1;
         $190 = $108 & $189;
         HEAP32[(10024)>>2] = $190;
         break;
        }
       } else {
        $191 = HEAP32[(10036)>>2]|0;
        $192 = ($156>>>0)<($191>>>0);
        if ($192) {
         _abort();
         // unreachable;
        }
        $193 = ((($156)) + 16|0);
        $194 = HEAP32[$193>>2]|0;
        $195 = ($194|0)==($$0190$i|0);
        if ($195) {
         HEAP32[$193>>2] = $$3$i;
        } else {
         $196 = ((($156)) + 20|0);
         HEAP32[$196>>2] = $$3$i;
        }
        $197 = ($$3$i|0)==(0|0);
        if ($197) {
         break;
        }
       }
       $198 = HEAP32[(10036)>>2]|0;
       $199 = ($$3$i>>>0)<($198>>>0);
       if ($199) {
        _abort();
        // unreachable;
       }
       $200 = ((($$3$i)) + 24|0);
       HEAP32[$200>>2] = $156;
       $201 = ((($$0190$i)) + 16|0);
       $202 = HEAP32[$201>>2]|0;
       $203 = ($202|0)==(0|0);
       do {
        if (!($203)) {
         $204 = ($202>>>0)<($198>>>0);
         if ($204) {
          _abort();
          // unreachable;
         } else {
          $205 = ((($$3$i)) + 16|0);
          HEAP32[$205>>2] = $202;
          $206 = ((($202)) + 24|0);
          HEAP32[$206>>2] = $$3$i;
          break;
         }
        }
       } while(0);
       $207 = ((($$0190$i)) + 20|0);
       $208 = HEAP32[$207>>2]|0;
       $209 = ($208|0)==(0|0);
       if (!($209)) {
        $210 = HEAP32[(10036)>>2]|0;
        $211 = ($208>>>0)<($210>>>0);
        if ($211) {
         _abort();
         // unreachable;
        } else {
         $212 = ((($$3$i)) + 20|0);
         HEAP32[$212>>2] = $208;
         $213 = ((($208)) + 24|0);
         HEAP32[$213>>2] = $$3$i;
         break;
        }
       }
      }
     } while(0);
     $214 = ($$0191$i>>>0)<(16);
     if ($214) {
      $215 = (($$0191$i) + ($6))|0;
      $216 = $215 | 3;
      $217 = ((($$0190$i)) + 4|0);
      HEAP32[$217>>2] = $216;
      $218 = (($$0190$i) + ($215)|0);
      $219 = ((($218)) + 4|0);
      $220 = HEAP32[$219>>2]|0;
      $221 = $220 | 1;
      HEAP32[$219>>2] = $221;
     } else {
      $222 = $6 | 3;
      $223 = ((($$0190$i)) + 4|0);
      HEAP32[$223>>2] = $222;
      $224 = $$0191$i | 1;
      $225 = ((($153)) + 4|0);
      HEAP32[$225>>2] = $224;
      $226 = (($153) + ($$0191$i)|0);
      HEAP32[$226>>2] = $$0191$i;
      $227 = ($37|0)==(0);
      if (!($227)) {
       $228 = HEAP32[(10040)>>2]|0;
       $229 = $37 >>> 3;
       $230 = $229 << 1;
       $231 = (10060 + ($230<<2)|0);
       $232 = 1 << $229;
       $233 = $8 & $232;
       $234 = ($233|0)==(0);
       if ($234) {
        $235 = $8 | $232;
        HEAP32[2505] = $235;
        $$pre$i = ((($231)) + 8|0);
        $$0187$i = $231;$$pre$phi$iZ2D = $$pre$i;
       } else {
        $236 = ((($231)) + 8|0);
        $237 = HEAP32[$236>>2]|0;
        $238 = HEAP32[(10036)>>2]|0;
        $239 = ($237>>>0)<($238>>>0);
        if ($239) {
         _abort();
         // unreachable;
        } else {
         $$0187$i = $237;$$pre$phi$iZ2D = $236;
        }
       }
       HEAP32[$$pre$phi$iZ2D>>2] = $228;
       $240 = ((($$0187$i)) + 12|0);
       HEAP32[$240>>2] = $228;
       $241 = ((($228)) + 8|0);
       HEAP32[$241>>2] = $$0187$i;
       $242 = ((($228)) + 12|0);
       HEAP32[$242>>2] = $231;
      }
      HEAP32[(10028)>>2] = $$0191$i;
      HEAP32[(10040)>>2] = $153;
     }
     $243 = ((($$0190$i)) + 8|0);
     $$0 = $243;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $$0197 = $6;
   }
  } else {
   $244 = ($0>>>0)>(4294967231);
   if ($244) {
    $$0197 = -1;
   } else {
    $245 = (($0) + 11)|0;
    $246 = $245 & -8;
    $247 = HEAP32[(10024)>>2]|0;
    $248 = ($247|0)==(0);
    if ($248) {
     $$0197 = $246;
    } else {
     $249 = (0 - ($246))|0;
     $250 = $245 >>> 8;
     $251 = ($250|0)==(0);
     if ($251) {
      $$0356$i = 0;
     } else {
      $252 = ($246>>>0)>(16777215);
      if ($252) {
       $$0356$i = 31;
      } else {
       $253 = (($250) + 1048320)|0;
       $254 = $253 >>> 16;
       $255 = $254 & 8;
       $256 = $250 << $255;
       $257 = (($256) + 520192)|0;
       $258 = $257 >>> 16;
       $259 = $258 & 4;
       $260 = $259 | $255;
       $261 = $256 << $259;
       $262 = (($261) + 245760)|0;
       $263 = $262 >>> 16;
       $264 = $263 & 2;
       $265 = $260 | $264;
       $266 = (14 - ($265))|0;
       $267 = $261 << $264;
       $268 = $267 >>> 15;
       $269 = (($266) + ($268))|0;
       $270 = $269 << 1;
       $271 = (($269) + 7)|0;
       $272 = $246 >>> $271;
       $273 = $272 & 1;
       $274 = $273 | $270;
       $$0356$i = $274;
      }
     }
     $275 = (10324 + ($$0356$i<<2)|0);
     $276 = HEAP32[$275>>2]|0;
     $277 = ($276|0)==(0|0);
     L123: do {
      if ($277) {
       $$2353$i = 0;$$3$i201 = 0;$$3348$i = $249;
       label = 86;
      } else {
       $278 = ($$0356$i|0)==(31);
       $279 = $$0356$i >>> 1;
       $280 = (25 - ($279))|0;
       $281 = $278 ? 0 : $280;
       $282 = $246 << $281;
       $$0340$i = 0;$$0345$i = $249;$$0351$i = $276;$$0357$i = $282;$$0360$i = 0;
       while(1) {
        $283 = ((($$0351$i)) + 4|0);
        $284 = HEAP32[$283>>2]|0;
        $285 = $284 & -8;
        $286 = (($285) - ($246))|0;
        $287 = ($286>>>0)<($$0345$i>>>0);
        if ($287) {
         $288 = ($286|0)==(0);
         if ($288) {
          $$413$i = $$0351$i;$$434912$i = 0;$$435511$i = $$0351$i;
          label = 90;
          break L123;
         } else {
          $$1341$i = $$0351$i;$$1346$i = $286;
         }
        } else {
         $$1341$i = $$0340$i;$$1346$i = $$0345$i;
        }
        $289 = ((($$0351$i)) + 20|0);
        $290 = HEAP32[$289>>2]|0;
        $291 = $$0357$i >>> 31;
        $292 = (((($$0351$i)) + 16|0) + ($291<<2)|0);
        $293 = HEAP32[$292>>2]|0;
        $294 = ($290|0)==(0|0);
        $295 = ($290|0)==($293|0);
        $or$cond1$i = $294 | $295;
        $$1361$i = $or$cond1$i ? $$0360$i : $290;
        $296 = ($293|0)==(0|0);
        $297 = $296&1;
        $298 = $297 ^ 1;
        $$0357$$i = $$0357$i << $298;
        if ($296) {
         $$2353$i = $$1361$i;$$3$i201 = $$1341$i;$$3348$i = $$1346$i;
         label = 86;
         break;
        } else {
         $$0340$i = $$1341$i;$$0345$i = $$1346$i;$$0351$i = $293;$$0357$i = $$0357$$i;$$0360$i = $$1361$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $299 = ($$2353$i|0)==(0|0);
      $300 = ($$3$i201|0)==(0|0);
      $or$cond$i = $299 & $300;
      if ($or$cond$i) {
       $301 = 2 << $$0356$i;
       $302 = (0 - ($301))|0;
       $303 = $301 | $302;
       $304 = $247 & $303;
       $305 = ($304|0)==(0);
       if ($305) {
        $$0197 = $246;
        break;
       }
       $306 = (0 - ($304))|0;
       $307 = $304 & $306;
       $308 = (($307) + -1)|0;
       $309 = $308 >>> 12;
       $310 = $309 & 16;
       $311 = $308 >>> $310;
       $312 = $311 >>> 5;
       $313 = $312 & 8;
       $314 = $313 | $310;
       $315 = $311 >>> $313;
       $316 = $315 >>> 2;
       $317 = $316 & 4;
       $318 = $314 | $317;
       $319 = $315 >>> $317;
       $320 = $319 >>> 1;
       $321 = $320 & 2;
       $322 = $318 | $321;
       $323 = $319 >>> $321;
       $324 = $323 >>> 1;
       $325 = $324 & 1;
       $326 = $322 | $325;
       $327 = $323 >>> $325;
       $328 = (($326) + ($327))|0;
       $329 = (10324 + ($328<<2)|0);
       $330 = HEAP32[$329>>2]|0;
       $$4355$ph$i = $330;
      } else {
       $$4355$ph$i = $$2353$i;
      }
      $331 = ($$4355$ph$i|0)==(0|0);
      if ($331) {
       $$4$lcssa$i = $$3$i201;$$4349$lcssa$i = $$3348$i;
      } else {
       $$413$i = $$3$i201;$$434912$i = $$3348$i;$$435511$i = $$4355$ph$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $332 = ((($$435511$i)) + 4|0);
       $333 = HEAP32[$332>>2]|0;
       $334 = $333 & -8;
       $335 = (($334) - ($246))|0;
       $336 = ($335>>>0)<($$434912$i>>>0);
       $$$4349$i = $336 ? $335 : $$434912$i;
       $$4355$$4$i = $336 ? $$435511$i : $$413$i;
       $337 = ((($$435511$i)) + 16|0);
       $338 = HEAP32[$337>>2]|0;
       $339 = ($338|0)==(0|0);
       if (!($339)) {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $338;
        label = 90;
        continue;
       }
       $340 = ((($$435511$i)) + 20|0);
       $341 = HEAP32[$340>>2]|0;
       $342 = ($341|0)==(0|0);
       if ($342) {
        $$4$lcssa$i = $$4355$$4$i;$$4349$lcssa$i = $$$4349$i;
        break;
       } else {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $341;
        label = 90;
       }
      }
     }
     $343 = ($$4$lcssa$i|0)==(0|0);
     if ($343) {
      $$0197 = $246;
     } else {
      $344 = HEAP32[(10028)>>2]|0;
      $345 = (($344) - ($246))|0;
      $346 = ($$4349$lcssa$i>>>0)<($345>>>0);
      if ($346) {
       $347 = HEAP32[(10036)>>2]|0;
       $348 = ($$4$lcssa$i>>>0)<($347>>>0);
       if ($348) {
        _abort();
        // unreachable;
       }
       $349 = (($$4$lcssa$i) + ($246)|0);
       $350 = ($$4$lcssa$i>>>0)<($349>>>0);
       if (!($350)) {
        _abort();
        // unreachable;
       }
       $351 = ((($$4$lcssa$i)) + 24|0);
       $352 = HEAP32[$351>>2]|0;
       $353 = ((($$4$lcssa$i)) + 12|0);
       $354 = HEAP32[$353>>2]|0;
       $355 = ($354|0)==($$4$lcssa$i|0);
       do {
        if ($355) {
         $365 = ((($$4$lcssa$i)) + 20|0);
         $366 = HEAP32[$365>>2]|0;
         $367 = ($366|0)==(0|0);
         if ($367) {
          $368 = ((($$4$lcssa$i)) + 16|0);
          $369 = HEAP32[$368>>2]|0;
          $370 = ($369|0)==(0|0);
          if ($370) {
           $$3370$i = 0;
           break;
          } else {
           $$1368$i = $369;$$1372$i = $368;
          }
         } else {
          $$1368$i = $366;$$1372$i = $365;
         }
         while(1) {
          $371 = ((($$1368$i)) + 20|0);
          $372 = HEAP32[$371>>2]|0;
          $373 = ($372|0)==(0|0);
          if (!($373)) {
           $$1368$i = $372;$$1372$i = $371;
           continue;
          }
          $374 = ((($$1368$i)) + 16|0);
          $375 = HEAP32[$374>>2]|0;
          $376 = ($375|0)==(0|0);
          if ($376) {
           break;
          } else {
           $$1368$i = $375;$$1372$i = $374;
          }
         }
         $377 = ($$1372$i>>>0)<($347>>>0);
         if ($377) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$$1372$i>>2] = 0;
          $$3370$i = $$1368$i;
          break;
         }
        } else {
         $356 = ((($$4$lcssa$i)) + 8|0);
         $357 = HEAP32[$356>>2]|0;
         $358 = ($357>>>0)<($347>>>0);
         if ($358) {
          _abort();
          // unreachable;
         }
         $359 = ((($357)) + 12|0);
         $360 = HEAP32[$359>>2]|0;
         $361 = ($360|0)==($$4$lcssa$i|0);
         if (!($361)) {
          _abort();
          // unreachable;
         }
         $362 = ((($354)) + 8|0);
         $363 = HEAP32[$362>>2]|0;
         $364 = ($363|0)==($$4$lcssa$i|0);
         if ($364) {
          HEAP32[$359>>2] = $354;
          HEAP32[$362>>2] = $357;
          $$3370$i = $354;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $378 = ($352|0)==(0|0);
       do {
        if ($378) {
         $470 = $247;
        } else {
         $379 = ((($$4$lcssa$i)) + 28|0);
         $380 = HEAP32[$379>>2]|0;
         $381 = (10324 + ($380<<2)|0);
         $382 = HEAP32[$381>>2]|0;
         $383 = ($$4$lcssa$i|0)==($382|0);
         if ($383) {
          HEAP32[$381>>2] = $$3370$i;
          $cond$i204 = ($$3370$i|0)==(0|0);
          if ($cond$i204) {
           $384 = 1 << $380;
           $385 = $384 ^ -1;
           $386 = $247 & $385;
           HEAP32[(10024)>>2] = $386;
           $470 = $386;
           break;
          }
         } else {
          $387 = HEAP32[(10036)>>2]|0;
          $388 = ($352>>>0)<($387>>>0);
          if ($388) {
           _abort();
           // unreachable;
          }
          $389 = ((($352)) + 16|0);
          $390 = HEAP32[$389>>2]|0;
          $391 = ($390|0)==($$4$lcssa$i|0);
          if ($391) {
           HEAP32[$389>>2] = $$3370$i;
          } else {
           $392 = ((($352)) + 20|0);
           HEAP32[$392>>2] = $$3370$i;
          }
          $393 = ($$3370$i|0)==(0|0);
          if ($393) {
           $470 = $247;
           break;
          }
         }
         $394 = HEAP32[(10036)>>2]|0;
         $395 = ($$3370$i>>>0)<($394>>>0);
         if ($395) {
          _abort();
          // unreachable;
         }
         $396 = ((($$3370$i)) + 24|0);
         HEAP32[$396>>2] = $352;
         $397 = ((($$4$lcssa$i)) + 16|0);
         $398 = HEAP32[$397>>2]|0;
         $399 = ($398|0)==(0|0);
         do {
          if (!($399)) {
           $400 = ($398>>>0)<($394>>>0);
           if ($400) {
            _abort();
            // unreachable;
           } else {
            $401 = ((($$3370$i)) + 16|0);
            HEAP32[$401>>2] = $398;
            $402 = ((($398)) + 24|0);
            HEAP32[$402>>2] = $$3370$i;
            break;
           }
          }
         } while(0);
         $403 = ((($$4$lcssa$i)) + 20|0);
         $404 = HEAP32[$403>>2]|0;
         $405 = ($404|0)==(0|0);
         if ($405) {
          $470 = $247;
         } else {
          $406 = HEAP32[(10036)>>2]|0;
          $407 = ($404>>>0)<($406>>>0);
          if ($407) {
           _abort();
           // unreachable;
          } else {
           $408 = ((($$3370$i)) + 20|0);
           HEAP32[$408>>2] = $404;
           $409 = ((($404)) + 24|0);
           HEAP32[$409>>2] = $$3370$i;
           $470 = $247;
           break;
          }
         }
        }
       } while(0);
       $410 = ($$4349$lcssa$i>>>0)<(16);
       do {
        if ($410) {
         $411 = (($$4349$lcssa$i) + ($246))|0;
         $412 = $411 | 3;
         $413 = ((($$4$lcssa$i)) + 4|0);
         HEAP32[$413>>2] = $412;
         $414 = (($$4$lcssa$i) + ($411)|0);
         $415 = ((($414)) + 4|0);
         $416 = HEAP32[$415>>2]|0;
         $417 = $416 | 1;
         HEAP32[$415>>2] = $417;
        } else {
         $418 = $246 | 3;
         $419 = ((($$4$lcssa$i)) + 4|0);
         HEAP32[$419>>2] = $418;
         $420 = $$4349$lcssa$i | 1;
         $421 = ((($349)) + 4|0);
         HEAP32[$421>>2] = $420;
         $422 = (($349) + ($$4349$lcssa$i)|0);
         HEAP32[$422>>2] = $$4349$lcssa$i;
         $423 = $$4349$lcssa$i >>> 3;
         $424 = ($$4349$lcssa$i>>>0)<(256);
         if ($424) {
          $425 = $423 << 1;
          $426 = (10060 + ($425<<2)|0);
          $427 = HEAP32[2505]|0;
          $428 = 1 << $423;
          $429 = $427 & $428;
          $430 = ($429|0)==(0);
          if ($430) {
           $431 = $427 | $428;
           HEAP32[2505] = $431;
           $$pre$i205 = ((($426)) + 8|0);
           $$0366$i = $426;$$pre$phi$i206Z2D = $$pre$i205;
          } else {
           $432 = ((($426)) + 8|0);
           $433 = HEAP32[$432>>2]|0;
           $434 = HEAP32[(10036)>>2]|0;
           $435 = ($433>>>0)<($434>>>0);
           if ($435) {
            _abort();
            // unreachable;
           } else {
            $$0366$i = $433;$$pre$phi$i206Z2D = $432;
           }
          }
          HEAP32[$$pre$phi$i206Z2D>>2] = $349;
          $436 = ((($$0366$i)) + 12|0);
          HEAP32[$436>>2] = $349;
          $437 = ((($349)) + 8|0);
          HEAP32[$437>>2] = $$0366$i;
          $438 = ((($349)) + 12|0);
          HEAP32[$438>>2] = $426;
          break;
         }
         $439 = $$4349$lcssa$i >>> 8;
         $440 = ($439|0)==(0);
         if ($440) {
          $$0359$i = 0;
         } else {
          $441 = ($$4349$lcssa$i>>>0)>(16777215);
          if ($441) {
           $$0359$i = 31;
          } else {
           $442 = (($439) + 1048320)|0;
           $443 = $442 >>> 16;
           $444 = $443 & 8;
           $445 = $439 << $444;
           $446 = (($445) + 520192)|0;
           $447 = $446 >>> 16;
           $448 = $447 & 4;
           $449 = $448 | $444;
           $450 = $445 << $448;
           $451 = (($450) + 245760)|0;
           $452 = $451 >>> 16;
           $453 = $452 & 2;
           $454 = $449 | $453;
           $455 = (14 - ($454))|0;
           $456 = $450 << $453;
           $457 = $456 >>> 15;
           $458 = (($455) + ($457))|0;
           $459 = $458 << 1;
           $460 = (($458) + 7)|0;
           $461 = $$4349$lcssa$i >>> $460;
           $462 = $461 & 1;
           $463 = $462 | $459;
           $$0359$i = $463;
          }
         }
         $464 = (10324 + ($$0359$i<<2)|0);
         $465 = ((($349)) + 28|0);
         HEAP32[$465>>2] = $$0359$i;
         $466 = ((($349)) + 16|0);
         $467 = ((($466)) + 4|0);
         HEAP32[$467>>2] = 0;
         HEAP32[$466>>2] = 0;
         $468 = 1 << $$0359$i;
         $469 = $470 & $468;
         $471 = ($469|0)==(0);
         if ($471) {
          $472 = $470 | $468;
          HEAP32[(10024)>>2] = $472;
          HEAP32[$464>>2] = $349;
          $473 = ((($349)) + 24|0);
          HEAP32[$473>>2] = $464;
          $474 = ((($349)) + 12|0);
          HEAP32[$474>>2] = $349;
          $475 = ((($349)) + 8|0);
          HEAP32[$475>>2] = $349;
          break;
         }
         $476 = HEAP32[$464>>2]|0;
         $477 = ($$0359$i|0)==(31);
         $478 = $$0359$i >>> 1;
         $479 = (25 - ($478))|0;
         $480 = $477 ? 0 : $479;
         $481 = $$4349$lcssa$i << $480;
         $$0342$i = $481;$$0343$i = $476;
         while(1) {
          $482 = ((($$0343$i)) + 4|0);
          $483 = HEAP32[$482>>2]|0;
          $484 = $483 & -8;
          $485 = ($484|0)==($$4349$lcssa$i|0);
          if ($485) {
           label = 148;
           break;
          }
          $486 = $$0342$i >>> 31;
          $487 = (((($$0343$i)) + 16|0) + ($486<<2)|0);
          $488 = $$0342$i << 1;
          $489 = HEAP32[$487>>2]|0;
          $490 = ($489|0)==(0|0);
          if ($490) {
           label = 145;
           break;
          } else {
           $$0342$i = $488;$$0343$i = $489;
          }
         }
         if ((label|0) == 145) {
          $491 = HEAP32[(10036)>>2]|0;
          $492 = ($487>>>0)<($491>>>0);
          if ($492) {
           _abort();
           // unreachable;
          } else {
           HEAP32[$487>>2] = $349;
           $493 = ((($349)) + 24|0);
           HEAP32[$493>>2] = $$0343$i;
           $494 = ((($349)) + 12|0);
           HEAP32[$494>>2] = $349;
           $495 = ((($349)) + 8|0);
           HEAP32[$495>>2] = $349;
           break;
          }
         }
         else if ((label|0) == 148) {
          $496 = ((($$0343$i)) + 8|0);
          $497 = HEAP32[$496>>2]|0;
          $498 = HEAP32[(10036)>>2]|0;
          $499 = ($497>>>0)>=($498>>>0);
          $not$7$i = ($$0343$i>>>0)>=($498>>>0);
          $500 = $499 & $not$7$i;
          if ($500) {
           $501 = ((($497)) + 12|0);
           HEAP32[$501>>2] = $349;
           HEAP32[$496>>2] = $349;
           $502 = ((($349)) + 8|0);
           HEAP32[$502>>2] = $497;
           $503 = ((($349)) + 12|0);
           HEAP32[$503>>2] = $$0343$i;
           $504 = ((($349)) + 24|0);
           HEAP32[$504>>2] = 0;
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $505 = ((($$4$lcssa$i)) + 8|0);
       $$0 = $505;
       STACKTOP = sp;return ($$0|0);
      } else {
       $$0197 = $246;
      }
     }
    }
   }
  }
 } while(0);
 $506 = HEAP32[(10028)>>2]|0;
 $507 = ($506>>>0)<($$0197>>>0);
 if (!($507)) {
  $508 = (($506) - ($$0197))|0;
  $509 = HEAP32[(10040)>>2]|0;
  $510 = ($508>>>0)>(15);
  if ($510) {
   $511 = (($509) + ($$0197)|0);
   HEAP32[(10040)>>2] = $511;
   HEAP32[(10028)>>2] = $508;
   $512 = $508 | 1;
   $513 = ((($511)) + 4|0);
   HEAP32[$513>>2] = $512;
   $514 = (($511) + ($508)|0);
   HEAP32[$514>>2] = $508;
   $515 = $$0197 | 3;
   $516 = ((($509)) + 4|0);
   HEAP32[$516>>2] = $515;
  } else {
   HEAP32[(10028)>>2] = 0;
   HEAP32[(10040)>>2] = 0;
   $517 = $506 | 3;
   $518 = ((($509)) + 4|0);
   HEAP32[$518>>2] = $517;
   $519 = (($509) + ($506)|0);
   $520 = ((($519)) + 4|0);
   $521 = HEAP32[$520>>2]|0;
   $522 = $521 | 1;
   HEAP32[$520>>2] = $522;
  }
  $523 = ((($509)) + 8|0);
  $$0 = $523;
  STACKTOP = sp;return ($$0|0);
 }
 $524 = HEAP32[(10032)>>2]|0;
 $525 = ($524>>>0)>($$0197>>>0);
 if ($525) {
  $526 = (($524) - ($$0197))|0;
  HEAP32[(10032)>>2] = $526;
  $527 = HEAP32[(10044)>>2]|0;
  $528 = (($527) + ($$0197)|0);
  HEAP32[(10044)>>2] = $528;
  $529 = $526 | 1;
  $530 = ((($528)) + 4|0);
  HEAP32[$530>>2] = $529;
  $531 = $$0197 | 3;
  $532 = ((($527)) + 4|0);
  HEAP32[$532>>2] = $531;
  $533 = ((($527)) + 8|0);
  $$0 = $533;
  STACKTOP = sp;return ($$0|0);
 }
 $534 = HEAP32[2623]|0;
 $535 = ($534|0)==(0);
 if ($535) {
  HEAP32[(10500)>>2] = 4096;
  HEAP32[(10496)>>2] = 4096;
  HEAP32[(10504)>>2] = -1;
  HEAP32[(10508)>>2] = -1;
  HEAP32[(10512)>>2] = 0;
  HEAP32[(10464)>>2] = 0;
  $536 = $1;
  $537 = $536 & -16;
  $538 = $537 ^ 1431655768;
  HEAP32[$1>>2] = $538;
  HEAP32[2623] = $538;
  $542 = 4096;
 } else {
  $$pre$i208 = HEAP32[(10500)>>2]|0;
  $542 = $$pre$i208;
 }
 $539 = (($$0197) + 48)|0;
 $540 = (($$0197) + 47)|0;
 $541 = (($542) + ($540))|0;
 $543 = (0 - ($542))|0;
 $544 = $541 & $543;
 $545 = ($544>>>0)>($$0197>>>0);
 if (!($545)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $546 = HEAP32[(10460)>>2]|0;
 $547 = ($546|0)==(0);
 if (!($547)) {
  $548 = HEAP32[(10452)>>2]|0;
  $549 = (($548) + ($544))|0;
  $550 = ($549>>>0)<=($548>>>0);
  $551 = ($549>>>0)>($546>>>0);
  $or$cond1$i210 = $550 | $551;
  if ($or$cond1$i210) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $552 = HEAP32[(10464)>>2]|0;
 $553 = $552 & 4;
 $554 = ($553|0)==(0);
 L255: do {
  if ($554) {
   $555 = HEAP32[(10044)>>2]|0;
   $556 = ($555|0)==(0|0);
   L257: do {
    if ($556) {
     label = 172;
    } else {
     $$0$i17$i = (10468);
     while(1) {
      $557 = HEAP32[$$0$i17$i>>2]|0;
      $558 = ($557>>>0)>($555>>>0);
      if (!($558)) {
       $559 = ((($$0$i17$i)) + 4|0);
       $560 = HEAP32[$559>>2]|0;
       $561 = (($557) + ($560)|0);
       $562 = ($561>>>0)>($555>>>0);
       if ($562) {
        break;
       }
      }
      $563 = ((($$0$i17$i)) + 8|0);
      $564 = HEAP32[$563>>2]|0;
      $565 = ($564|0)==(0|0);
      if ($565) {
       label = 172;
       break L257;
      } else {
       $$0$i17$i = $564;
      }
     }
     $588 = (($541) - ($524))|0;
     $589 = $588 & $543;
     $590 = ($589>>>0)<(2147483647);
     if ($590) {
      $591 = (_sbrk(($589|0))|0);
      $592 = HEAP32[$$0$i17$i>>2]|0;
      $593 = HEAP32[$559>>2]|0;
      $594 = (($592) + ($593)|0);
      $595 = ($591|0)==($594|0);
      if ($595) {
       $596 = ($591|0)==((-1)|0);
       if (!($596)) {
        $$723947$i = $589;$$748$i = $591;
        label = 190;
        break L255;
       }
      } else {
       $$2247$ph$i = $591;$$2253$ph$i = $589;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $566 = (_sbrk(0)|0);
     $567 = ($566|0)==((-1)|0);
     if (!($567)) {
      $568 = $566;
      $569 = HEAP32[(10496)>>2]|0;
      $570 = (($569) + -1)|0;
      $571 = $570 & $568;
      $572 = ($571|0)==(0);
      $573 = (($570) + ($568))|0;
      $574 = (0 - ($569))|0;
      $575 = $573 & $574;
      $576 = (($575) - ($568))|0;
      $577 = $572 ? 0 : $576;
      $$$i = (($577) + ($544))|0;
      $578 = HEAP32[(10452)>>2]|0;
      $579 = (($$$i) + ($578))|0;
      $580 = ($$$i>>>0)>($$0197>>>0);
      $581 = ($$$i>>>0)<(2147483647);
      $or$cond$i211 = $580 & $581;
      if ($or$cond$i211) {
       $582 = HEAP32[(10460)>>2]|0;
       $583 = ($582|0)==(0);
       if (!($583)) {
        $584 = ($579>>>0)<=($578>>>0);
        $585 = ($579>>>0)>($582>>>0);
        $or$cond2$i = $584 | $585;
        if ($or$cond2$i) {
         break;
        }
       }
       $586 = (_sbrk(($$$i|0))|0);
       $587 = ($586|0)==($566|0);
       if ($587) {
        $$723947$i = $$$i;$$748$i = $566;
        label = 190;
        break L255;
       } else {
        $$2247$ph$i = $586;$$2253$ph$i = $$$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $597 = (0 - ($$2253$ph$i))|0;
     $598 = ($$2247$ph$i|0)!=((-1)|0);
     $599 = ($$2253$ph$i>>>0)<(2147483647);
     $or$cond7$i = $599 & $598;
     $600 = ($539>>>0)>($$2253$ph$i>>>0);
     $or$cond10$i = $600 & $or$cond7$i;
     do {
      if ($or$cond10$i) {
       $601 = HEAP32[(10500)>>2]|0;
       $602 = (($540) - ($$2253$ph$i))|0;
       $603 = (($602) + ($601))|0;
       $604 = (0 - ($601))|0;
       $605 = $603 & $604;
       $606 = ($605>>>0)<(2147483647);
       if ($606) {
        $607 = (_sbrk(($605|0))|0);
        $608 = ($607|0)==((-1)|0);
        if ($608) {
         (_sbrk(($597|0))|0);
         break L274;
        } else {
         $609 = (($605) + ($$2253$ph$i))|0;
         $$5256$i = $609;
         break;
        }
       } else {
        $$5256$i = $$2253$ph$i;
       }
      } else {
       $$5256$i = $$2253$ph$i;
      }
     } while(0);
     $610 = ($$2247$ph$i|0)==((-1)|0);
     if (!($610)) {
      $$723947$i = $$5256$i;$$748$i = $$2247$ph$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $611 = HEAP32[(10464)>>2]|0;
   $612 = $611 | 4;
   HEAP32[(10464)>>2] = $612;
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $613 = ($544>>>0)<(2147483647);
  if ($613) {
   $614 = (_sbrk(($544|0))|0);
   $615 = (_sbrk(0)|0);
   $616 = ($614|0)!=((-1)|0);
   $617 = ($615|0)!=((-1)|0);
   $or$cond5$i = $616 & $617;
   $618 = ($614>>>0)<($615>>>0);
   $or$cond11$i = $618 & $or$cond5$i;
   if ($or$cond11$i) {
    $619 = $615;
    $620 = $614;
    $621 = (($619) - ($620))|0;
    $622 = (($$0197) + 40)|0;
    $$not$i = ($621>>>0)>($622>>>0);
    if ($$not$i) {
     $$723947$i = $621;$$748$i = $614;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $623 = HEAP32[(10452)>>2]|0;
  $624 = (($623) + ($$723947$i))|0;
  HEAP32[(10452)>>2] = $624;
  $625 = HEAP32[(10456)>>2]|0;
  $626 = ($624>>>0)>($625>>>0);
  if ($626) {
   HEAP32[(10456)>>2] = $624;
  }
  $627 = HEAP32[(10044)>>2]|0;
  $628 = ($627|0)==(0|0);
  do {
   if ($628) {
    $629 = HEAP32[(10036)>>2]|0;
    $630 = ($629|0)==(0|0);
    $631 = ($$748$i>>>0)<($629>>>0);
    $or$cond12$i = $630 | $631;
    if ($or$cond12$i) {
     HEAP32[(10036)>>2] = $$748$i;
    }
    HEAP32[(10468)>>2] = $$748$i;
    HEAP32[(10472)>>2] = $$723947$i;
    HEAP32[(10480)>>2] = 0;
    $632 = HEAP32[2623]|0;
    HEAP32[(10056)>>2] = $632;
    HEAP32[(10052)>>2] = -1;
    $$01$i$i = 0;
    while(1) {
     $633 = $$01$i$i << 1;
     $634 = (10060 + ($633<<2)|0);
     $635 = ((($634)) + 12|0);
     HEAP32[$635>>2] = $634;
     $636 = ((($634)) + 8|0);
     HEAP32[$636>>2] = $634;
     $637 = (($$01$i$i) + 1)|0;
     $exitcond$i$i = ($637|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $$01$i$i = $637;
     }
    }
    $638 = (($$723947$i) + -40)|0;
    $639 = ((($$748$i)) + 8|0);
    $640 = $639;
    $641 = $640 & 7;
    $642 = ($641|0)==(0);
    $643 = (0 - ($640))|0;
    $644 = $643 & 7;
    $645 = $642 ? 0 : $644;
    $646 = (($$748$i) + ($645)|0);
    $647 = (($638) - ($645))|0;
    HEAP32[(10044)>>2] = $646;
    HEAP32[(10032)>>2] = $647;
    $648 = $647 | 1;
    $649 = ((($646)) + 4|0);
    HEAP32[$649>>2] = $648;
    $650 = (($646) + ($647)|0);
    $651 = ((($650)) + 4|0);
    HEAP32[$651>>2] = 40;
    $652 = HEAP32[(10508)>>2]|0;
    HEAP32[(10048)>>2] = $652;
   } else {
    $$024370$i = (10468);
    while(1) {
     $653 = HEAP32[$$024370$i>>2]|0;
     $654 = ((($$024370$i)) + 4|0);
     $655 = HEAP32[$654>>2]|0;
     $656 = (($653) + ($655)|0);
     $657 = ($$748$i|0)==($656|0);
     if ($657) {
      label = 200;
      break;
     }
     $658 = ((($$024370$i)) + 8|0);
     $659 = HEAP32[$658>>2]|0;
     $660 = ($659|0)==(0|0);
     if ($660) {
      break;
     } else {
      $$024370$i = $659;
     }
    }
    if ((label|0) == 200) {
     $661 = ((($$024370$i)) + 12|0);
     $662 = HEAP32[$661>>2]|0;
     $663 = $662 & 8;
     $664 = ($663|0)==(0);
     if ($664) {
      $665 = ($627>>>0)>=($653>>>0);
      $666 = ($627>>>0)<($$748$i>>>0);
      $or$cond50$i = $666 & $665;
      if ($or$cond50$i) {
       $667 = (($655) + ($$723947$i))|0;
       HEAP32[$654>>2] = $667;
       $668 = HEAP32[(10032)>>2]|0;
       $669 = ((($627)) + 8|0);
       $670 = $669;
       $671 = $670 & 7;
       $672 = ($671|0)==(0);
       $673 = (0 - ($670))|0;
       $674 = $673 & 7;
       $675 = $672 ? 0 : $674;
       $676 = (($627) + ($675)|0);
       $677 = (($$723947$i) - ($675))|0;
       $678 = (($677) + ($668))|0;
       HEAP32[(10044)>>2] = $676;
       HEAP32[(10032)>>2] = $678;
       $679 = $678 | 1;
       $680 = ((($676)) + 4|0);
       HEAP32[$680>>2] = $679;
       $681 = (($676) + ($678)|0);
       $682 = ((($681)) + 4|0);
       HEAP32[$682>>2] = 40;
       $683 = HEAP32[(10508)>>2]|0;
       HEAP32[(10048)>>2] = $683;
       break;
      }
     }
    }
    $684 = HEAP32[(10036)>>2]|0;
    $685 = ($$748$i>>>0)<($684>>>0);
    if ($685) {
     HEAP32[(10036)>>2] = $$748$i;
     $749 = $$748$i;
    } else {
     $749 = $684;
    }
    $686 = (($$748$i) + ($$723947$i)|0);
    $$124469$i = (10468);
    while(1) {
     $687 = HEAP32[$$124469$i>>2]|0;
     $688 = ($687|0)==($686|0);
     if ($688) {
      label = 208;
      break;
     }
     $689 = ((($$124469$i)) + 8|0);
     $690 = HEAP32[$689>>2]|0;
     $691 = ($690|0)==(0|0);
     if ($691) {
      $$0$i$i$i = (10468);
      break;
     } else {
      $$124469$i = $690;
     }
    }
    if ((label|0) == 208) {
     $692 = ((($$124469$i)) + 12|0);
     $693 = HEAP32[$692>>2]|0;
     $694 = $693 & 8;
     $695 = ($694|0)==(0);
     if ($695) {
      HEAP32[$$124469$i>>2] = $$748$i;
      $696 = ((($$124469$i)) + 4|0);
      $697 = HEAP32[$696>>2]|0;
      $698 = (($697) + ($$723947$i))|0;
      HEAP32[$696>>2] = $698;
      $699 = ((($$748$i)) + 8|0);
      $700 = $699;
      $701 = $700 & 7;
      $702 = ($701|0)==(0);
      $703 = (0 - ($700))|0;
      $704 = $703 & 7;
      $705 = $702 ? 0 : $704;
      $706 = (($$748$i) + ($705)|0);
      $707 = ((($686)) + 8|0);
      $708 = $707;
      $709 = $708 & 7;
      $710 = ($709|0)==(0);
      $711 = (0 - ($708))|0;
      $712 = $711 & 7;
      $713 = $710 ? 0 : $712;
      $714 = (($686) + ($713)|0);
      $715 = $714;
      $716 = $706;
      $717 = (($715) - ($716))|0;
      $718 = (($706) + ($$0197)|0);
      $719 = (($717) - ($$0197))|0;
      $720 = $$0197 | 3;
      $721 = ((($706)) + 4|0);
      HEAP32[$721>>2] = $720;
      $722 = ($714|0)==($627|0);
      do {
       if ($722) {
        $723 = HEAP32[(10032)>>2]|0;
        $724 = (($723) + ($719))|0;
        HEAP32[(10032)>>2] = $724;
        HEAP32[(10044)>>2] = $718;
        $725 = $724 | 1;
        $726 = ((($718)) + 4|0);
        HEAP32[$726>>2] = $725;
       } else {
        $727 = HEAP32[(10040)>>2]|0;
        $728 = ($714|0)==($727|0);
        if ($728) {
         $729 = HEAP32[(10028)>>2]|0;
         $730 = (($729) + ($719))|0;
         HEAP32[(10028)>>2] = $730;
         HEAP32[(10040)>>2] = $718;
         $731 = $730 | 1;
         $732 = ((($718)) + 4|0);
         HEAP32[$732>>2] = $731;
         $733 = (($718) + ($730)|0);
         HEAP32[$733>>2] = $730;
         break;
        }
        $734 = ((($714)) + 4|0);
        $735 = HEAP32[$734>>2]|0;
        $736 = $735 & 3;
        $737 = ($736|0)==(1);
        if ($737) {
         $738 = $735 & -8;
         $739 = $735 >>> 3;
         $740 = ($735>>>0)<(256);
         L326: do {
          if ($740) {
           $741 = ((($714)) + 8|0);
           $742 = HEAP32[$741>>2]|0;
           $743 = ((($714)) + 12|0);
           $744 = HEAP32[$743>>2]|0;
           $745 = $739 << 1;
           $746 = (10060 + ($745<<2)|0);
           $747 = ($742|0)==($746|0);
           do {
            if (!($747)) {
             $748 = ($742>>>0)<($749>>>0);
             if ($748) {
              _abort();
              // unreachable;
             }
             $750 = ((($742)) + 12|0);
             $751 = HEAP32[$750>>2]|0;
             $752 = ($751|0)==($714|0);
             if ($752) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $753 = ($744|0)==($742|0);
           if ($753) {
            $754 = 1 << $739;
            $755 = $754 ^ -1;
            $756 = HEAP32[2505]|0;
            $757 = $756 & $755;
            HEAP32[2505] = $757;
            break;
           }
           $758 = ($744|0)==($746|0);
           do {
            if ($758) {
             $$pre9$i$i = ((($744)) + 8|0);
             $$pre$phi10$i$iZ2D = $$pre9$i$i;
            } else {
             $759 = ($744>>>0)<($749>>>0);
             if ($759) {
              _abort();
              // unreachable;
             }
             $760 = ((($744)) + 8|0);
             $761 = HEAP32[$760>>2]|0;
             $762 = ($761|0)==($714|0);
             if ($762) {
              $$pre$phi10$i$iZ2D = $760;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $763 = ((($742)) + 12|0);
           HEAP32[$763>>2] = $744;
           HEAP32[$$pre$phi10$i$iZ2D>>2] = $742;
          } else {
           $764 = ((($714)) + 24|0);
           $765 = HEAP32[$764>>2]|0;
           $766 = ((($714)) + 12|0);
           $767 = HEAP32[$766>>2]|0;
           $768 = ($767|0)==($714|0);
           do {
            if ($768) {
             $778 = ((($714)) + 16|0);
             $779 = ((($778)) + 4|0);
             $780 = HEAP32[$779>>2]|0;
             $781 = ($780|0)==(0|0);
             if ($781) {
              $782 = HEAP32[$778>>2]|0;
              $783 = ($782|0)==(0|0);
              if ($783) {
               $$3$i$i = 0;
               break;
              } else {
               $$1290$i$i = $782;$$1292$i$i = $778;
              }
             } else {
              $$1290$i$i = $780;$$1292$i$i = $779;
             }
             while(1) {
              $784 = ((($$1290$i$i)) + 20|0);
              $785 = HEAP32[$784>>2]|0;
              $786 = ($785|0)==(0|0);
              if (!($786)) {
               $$1290$i$i = $785;$$1292$i$i = $784;
               continue;
              }
              $787 = ((($$1290$i$i)) + 16|0);
              $788 = HEAP32[$787>>2]|0;
              $789 = ($788|0)==(0|0);
              if ($789) {
               break;
              } else {
               $$1290$i$i = $788;$$1292$i$i = $787;
              }
             }
             $790 = ($$1292$i$i>>>0)<($749>>>0);
             if ($790) {
              _abort();
              // unreachable;
             } else {
              HEAP32[$$1292$i$i>>2] = 0;
              $$3$i$i = $$1290$i$i;
              break;
             }
            } else {
             $769 = ((($714)) + 8|0);
             $770 = HEAP32[$769>>2]|0;
             $771 = ($770>>>0)<($749>>>0);
             if ($771) {
              _abort();
              // unreachable;
             }
             $772 = ((($770)) + 12|0);
             $773 = HEAP32[$772>>2]|0;
             $774 = ($773|0)==($714|0);
             if (!($774)) {
              _abort();
              // unreachable;
             }
             $775 = ((($767)) + 8|0);
             $776 = HEAP32[$775>>2]|0;
             $777 = ($776|0)==($714|0);
             if ($777) {
              HEAP32[$772>>2] = $767;
              HEAP32[$775>>2] = $770;
              $$3$i$i = $767;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $791 = ($765|0)==(0|0);
           if ($791) {
            break;
           }
           $792 = ((($714)) + 28|0);
           $793 = HEAP32[$792>>2]|0;
           $794 = (10324 + ($793<<2)|0);
           $795 = HEAP32[$794>>2]|0;
           $796 = ($714|0)==($795|0);
           do {
            if ($796) {
             HEAP32[$794>>2] = $$3$i$i;
             $cond$i$i = ($$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $797 = 1 << $793;
             $798 = $797 ^ -1;
             $799 = HEAP32[(10024)>>2]|0;
             $800 = $799 & $798;
             HEAP32[(10024)>>2] = $800;
             break L326;
            } else {
             $801 = HEAP32[(10036)>>2]|0;
             $802 = ($765>>>0)<($801>>>0);
             if ($802) {
              _abort();
              // unreachable;
             }
             $803 = ((($765)) + 16|0);
             $804 = HEAP32[$803>>2]|0;
             $805 = ($804|0)==($714|0);
             if ($805) {
              HEAP32[$803>>2] = $$3$i$i;
             } else {
              $806 = ((($765)) + 20|0);
              HEAP32[$806>>2] = $$3$i$i;
             }
             $807 = ($$3$i$i|0)==(0|0);
             if ($807) {
              break L326;
             }
            }
           } while(0);
           $808 = HEAP32[(10036)>>2]|0;
           $809 = ($$3$i$i>>>0)<($808>>>0);
           if ($809) {
            _abort();
            // unreachable;
           }
           $810 = ((($$3$i$i)) + 24|0);
           HEAP32[$810>>2] = $765;
           $811 = ((($714)) + 16|0);
           $812 = HEAP32[$811>>2]|0;
           $813 = ($812|0)==(0|0);
           do {
            if (!($813)) {
             $814 = ($812>>>0)<($808>>>0);
             if ($814) {
              _abort();
              // unreachable;
             } else {
              $815 = ((($$3$i$i)) + 16|0);
              HEAP32[$815>>2] = $812;
              $816 = ((($812)) + 24|0);
              HEAP32[$816>>2] = $$3$i$i;
              break;
             }
            }
           } while(0);
           $817 = ((($811)) + 4|0);
           $818 = HEAP32[$817>>2]|0;
           $819 = ($818|0)==(0|0);
           if ($819) {
            break;
           }
           $820 = HEAP32[(10036)>>2]|0;
           $821 = ($818>>>0)<($820>>>0);
           if ($821) {
            _abort();
            // unreachable;
           } else {
            $822 = ((($$3$i$i)) + 20|0);
            HEAP32[$822>>2] = $818;
            $823 = ((($818)) + 24|0);
            HEAP32[$823>>2] = $$3$i$i;
            break;
           }
          }
         } while(0);
         $824 = (($714) + ($738)|0);
         $825 = (($738) + ($719))|0;
         $$0$i18$i = $824;$$0286$i$i = $825;
        } else {
         $$0$i18$i = $714;$$0286$i$i = $719;
        }
        $826 = ((($$0$i18$i)) + 4|0);
        $827 = HEAP32[$826>>2]|0;
        $828 = $827 & -2;
        HEAP32[$826>>2] = $828;
        $829 = $$0286$i$i | 1;
        $830 = ((($718)) + 4|0);
        HEAP32[$830>>2] = $829;
        $831 = (($718) + ($$0286$i$i)|0);
        HEAP32[$831>>2] = $$0286$i$i;
        $832 = $$0286$i$i >>> 3;
        $833 = ($$0286$i$i>>>0)<(256);
        if ($833) {
         $834 = $832 << 1;
         $835 = (10060 + ($834<<2)|0);
         $836 = HEAP32[2505]|0;
         $837 = 1 << $832;
         $838 = $836 & $837;
         $839 = ($838|0)==(0);
         do {
          if ($839) {
           $840 = $836 | $837;
           HEAP32[2505] = $840;
           $$pre$i19$i = ((($835)) + 8|0);
           $$0294$i$i = $835;$$pre$phi$i20$iZ2D = $$pre$i19$i;
          } else {
           $841 = ((($835)) + 8|0);
           $842 = HEAP32[$841>>2]|0;
           $843 = HEAP32[(10036)>>2]|0;
           $844 = ($842>>>0)<($843>>>0);
           if (!($844)) {
            $$0294$i$i = $842;$$pre$phi$i20$iZ2D = $841;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         HEAP32[$$pre$phi$i20$iZ2D>>2] = $718;
         $845 = ((($$0294$i$i)) + 12|0);
         HEAP32[$845>>2] = $718;
         $846 = ((($718)) + 8|0);
         HEAP32[$846>>2] = $$0294$i$i;
         $847 = ((($718)) + 12|0);
         HEAP32[$847>>2] = $835;
         break;
        }
        $848 = $$0286$i$i >>> 8;
        $849 = ($848|0)==(0);
        do {
         if ($849) {
          $$0295$i$i = 0;
         } else {
          $850 = ($$0286$i$i>>>0)>(16777215);
          if ($850) {
           $$0295$i$i = 31;
           break;
          }
          $851 = (($848) + 1048320)|0;
          $852 = $851 >>> 16;
          $853 = $852 & 8;
          $854 = $848 << $853;
          $855 = (($854) + 520192)|0;
          $856 = $855 >>> 16;
          $857 = $856 & 4;
          $858 = $857 | $853;
          $859 = $854 << $857;
          $860 = (($859) + 245760)|0;
          $861 = $860 >>> 16;
          $862 = $861 & 2;
          $863 = $858 | $862;
          $864 = (14 - ($863))|0;
          $865 = $859 << $862;
          $866 = $865 >>> 15;
          $867 = (($864) + ($866))|0;
          $868 = $867 << 1;
          $869 = (($867) + 7)|0;
          $870 = $$0286$i$i >>> $869;
          $871 = $870 & 1;
          $872 = $871 | $868;
          $$0295$i$i = $872;
         }
        } while(0);
        $873 = (10324 + ($$0295$i$i<<2)|0);
        $874 = ((($718)) + 28|0);
        HEAP32[$874>>2] = $$0295$i$i;
        $875 = ((($718)) + 16|0);
        $876 = ((($875)) + 4|0);
        HEAP32[$876>>2] = 0;
        HEAP32[$875>>2] = 0;
        $877 = HEAP32[(10024)>>2]|0;
        $878 = 1 << $$0295$i$i;
        $879 = $877 & $878;
        $880 = ($879|0)==(0);
        if ($880) {
         $881 = $877 | $878;
         HEAP32[(10024)>>2] = $881;
         HEAP32[$873>>2] = $718;
         $882 = ((($718)) + 24|0);
         HEAP32[$882>>2] = $873;
         $883 = ((($718)) + 12|0);
         HEAP32[$883>>2] = $718;
         $884 = ((($718)) + 8|0);
         HEAP32[$884>>2] = $718;
         break;
        }
        $885 = HEAP32[$873>>2]|0;
        $886 = ($$0295$i$i|0)==(31);
        $887 = $$0295$i$i >>> 1;
        $888 = (25 - ($887))|0;
        $889 = $886 ? 0 : $888;
        $890 = $$0286$i$i << $889;
        $$0287$i$i = $890;$$0288$i$i = $885;
        while(1) {
         $891 = ((($$0288$i$i)) + 4|0);
         $892 = HEAP32[$891>>2]|0;
         $893 = $892 & -8;
         $894 = ($893|0)==($$0286$i$i|0);
         if ($894) {
          label = 278;
          break;
         }
         $895 = $$0287$i$i >>> 31;
         $896 = (((($$0288$i$i)) + 16|0) + ($895<<2)|0);
         $897 = $$0287$i$i << 1;
         $898 = HEAP32[$896>>2]|0;
         $899 = ($898|0)==(0|0);
         if ($899) {
          label = 275;
          break;
         } else {
          $$0287$i$i = $897;$$0288$i$i = $898;
         }
        }
        if ((label|0) == 275) {
         $900 = HEAP32[(10036)>>2]|0;
         $901 = ($896>>>0)<($900>>>0);
         if ($901) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$896>>2] = $718;
          $902 = ((($718)) + 24|0);
          HEAP32[$902>>2] = $$0288$i$i;
          $903 = ((($718)) + 12|0);
          HEAP32[$903>>2] = $718;
          $904 = ((($718)) + 8|0);
          HEAP32[$904>>2] = $718;
          break;
         }
        }
        else if ((label|0) == 278) {
         $905 = ((($$0288$i$i)) + 8|0);
         $906 = HEAP32[$905>>2]|0;
         $907 = HEAP32[(10036)>>2]|0;
         $908 = ($906>>>0)>=($907>>>0);
         $not$$i22$i = ($$0288$i$i>>>0)>=($907>>>0);
         $909 = $908 & $not$$i22$i;
         if ($909) {
          $910 = ((($906)) + 12|0);
          HEAP32[$910>>2] = $718;
          HEAP32[$905>>2] = $718;
          $911 = ((($718)) + 8|0);
          HEAP32[$911>>2] = $906;
          $912 = ((($718)) + 12|0);
          HEAP32[$912>>2] = $$0288$i$i;
          $913 = ((($718)) + 24|0);
          HEAP32[$913>>2] = 0;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1044 = ((($706)) + 8|0);
      $$0 = $1044;
      STACKTOP = sp;return ($$0|0);
     } else {
      $$0$i$i$i = (10468);
     }
    }
    while(1) {
     $914 = HEAP32[$$0$i$i$i>>2]|0;
     $915 = ($914>>>0)>($627>>>0);
     if (!($915)) {
      $916 = ((($$0$i$i$i)) + 4|0);
      $917 = HEAP32[$916>>2]|0;
      $918 = (($914) + ($917)|0);
      $919 = ($918>>>0)>($627>>>0);
      if ($919) {
       break;
      }
     }
     $920 = ((($$0$i$i$i)) + 8|0);
     $921 = HEAP32[$920>>2]|0;
     $$0$i$i$i = $921;
    }
    $922 = ((($918)) + -47|0);
    $923 = ((($922)) + 8|0);
    $924 = $923;
    $925 = $924 & 7;
    $926 = ($925|0)==(0);
    $927 = (0 - ($924))|0;
    $928 = $927 & 7;
    $929 = $926 ? 0 : $928;
    $930 = (($922) + ($929)|0);
    $931 = ((($627)) + 16|0);
    $932 = ($930>>>0)<($931>>>0);
    $933 = $932 ? $627 : $930;
    $934 = ((($933)) + 8|0);
    $935 = ((($933)) + 24|0);
    $936 = (($$723947$i) + -40)|0;
    $937 = ((($$748$i)) + 8|0);
    $938 = $937;
    $939 = $938 & 7;
    $940 = ($939|0)==(0);
    $941 = (0 - ($938))|0;
    $942 = $941 & 7;
    $943 = $940 ? 0 : $942;
    $944 = (($$748$i) + ($943)|0);
    $945 = (($936) - ($943))|0;
    HEAP32[(10044)>>2] = $944;
    HEAP32[(10032)>>2] = $945;
    $946 = $945 | 1;
    $947 = ((($944)) + 4|0);
    HEAP32[$947>>2] = $946;
    $948 = (($944) + ($945)|0);
    $949 = ((($948)) + 4|0);
    HEAP32[$949>>2] = 40;
    $950 = HEAP32[(10508)>>2]|0;
    HEAP32[(10048)>>2] = $950;
    $951 = ((($933)) + 4|0);
    HEAP32[$951>>2] = 27;
    ;HEAP32[$934>>2]=HEAP32[(10468)>>2]|0;HEAP32[$934+4>>2]=HEAP32[(10468)+4>>2]|0;HEAP32[$934+8>>2]=HEAP32[(10468)+8>>2]|0;HEAP32[$934+12>>2]=HEAP32[(10468)+12>>2]|0;
    HEAP32[(10468)>>2] = $$748$i;
    HEAP32[(10472)>>2] = $$723947$i;
    HEAP32[(10480)>>2] = 0;
    HEAP32[(10476)>>2] = $934;
    $$0$i$i = $935;
    while(1) {
     $952 = ((($$0$i$i)) + 4|0);
     HEAP32[$952>>2] = 7;
     $953 = ((($952)) + 4|0);
     $954 = ($953>>>0)<($918>>>0);
     if ($954) {
      $$0$i$i = $952;
     } else {
      break;
     }
    }
    $955 = ($933|0)==($627|0);
    if (!($955)) {
     $956 = $933;
     $957 = $627;
     $958 = (($956) - ($957))|0;
     $959 = HEAP32[$951>>2]|0;
     $960 = $959 & -2;
     HEAP32[$951>>2] = $960;
     $961 = $958 | 1;
     $962 = ((($627)) + 4|0);
     HEAP32[$962>>2] = $961;
     HEAP32[$933>>2] = $958;
     $963 = $958 >>> 3;
     $964 = ($958>>>0)<(256);
     if ($964) {
      $965 = $963 << 1;
      $966 = (10060 + ($965<<2)|0);
      $967 = HEAP32[2505]|0;
      $968 = 1 << $963;
      $969 = $967 & $968;
      $970 = ($969|0)==(0);
      if ($970) {
       $971 = $967 | $968;
       HEAP32[2505] = $971;
       $$pre$i$i = ((($966)) + 8|0);
       $$0211$i$i = $966;$$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $972 = ((($966)) + 8|0);
       $973 = HEAP32[$972>>2]|0;
       $974 = HEAP32[(10036)>>2]|0;
       $975 = ($973>>>0)<($974>>>0);
       if ($975) {
        _abort();
        // unreachable;
       } else {
        $$0211$i$i = $973;$$pre$phi$i$iZ2D = $972;
       }
      }
      HEAP32[$$pre$phi$i$iZ2D>>2] = $627;
      $976 = ((($$0211$i$i)) + 12|0);
      HEAP32[$976>>2] = $627;
      $977 = ((($627)) + 8|0);
      HEAP32[$977>>2] = $$0211$i$i;
      $978 = ((($627)) + 12|0);
      HEAP32[$978>>2] = $966;
      break;
     }
     $979 = $958 >>> 8;
     $980 = ($979|0)==(0);
     if ($980) {
      $$0212$i$i = 0;
     } else {
      $981 = ($958>>>0)>(16777215);
      if ($981) {
       $$0212$i$i = 31;
      } else {
       $982 = (($979) + 1048320)|0;
       $983 = $982 >>> 16;
       $984 = $983 & 8;
       $985 = $979 << $984;
       $986 = (($985) + 520192)|0;
       $987 = $986 >>> 16;
       $988 = $987 & 4;
       $989 = $988 | $984;
       $990 = $985 << $988;
       $991 = (($990) + 245760)|0;
       $992 = $991 >>> 16;
       $993 = $992 & 2;
       $994 = $989 | $993;
       $995 = (14 - ($994))|0;
       $996 = $990 << $993;
       $997 = $996 >>> 15;
       $998 = (($995) + ($997))|0;
       $999 = $998 << 1;
       $1000 = (($998) + 7)|0;
       $1001 = $958 >>> $1000;
       $1002 = $1001 & 1;
       $1003 = $1002 | $999;
       $$0212$i$i = $1003;
      }
     }
     $1004 = (10324 + ($$0212$i$i<<2)|0);
     $1005 = ((($627)) + 28|0);
     HEAP32[$1005>>2] = $$0212$i$i;
     $1006 = ((($627)) + 20|0);
     HEAP32[$1006>>2] = 0;
     HEAP32[$931>>2] = 0;
     $1007 = HEAP32[(10024)>>2]|0;
     $1008 = 1 << $$0212$i$i;
     $1009 = $1007 & $1008;
     $1010 = ($1009|0)==(0);
     if ($1010) {
      $1011 = $1007 | $1008;
      HEAP32[(10024)>>2] = $1011;
      HEAP32[$1004>>2] = $627;
      $1012 = ((($627)) + 24|0);
      HEAP32[$1012>>2] = $1004;
      $1013 = ((($627)) + 12|0);
      HEAP32[$1013>>2] = $627;
      $1014 = ((($627)) + 8|0);
      HEAP32[$1014>>2] = $627;
      break;
     }
     $1015 = HEAP32[$1004>>2]|0;
     $1016 = ($$0212$i$i|0)==(31);
     $1017 = $$0212$i$i >>> 1;
     $1018 = (25 - ($1017))|0;
     $1019 = $1016 ? 0 : $1018;
     $1020 = $958 << $1019;
     $$0206$i$i = $1020;$$0207$i$i = $1015;
     while(1) {
      $1021 = ((($$0207$i$i)) + 4|0);
      $1022 = HEAP32[$1021>>2]|0;
      $1023 = $1022 & -8;
      $1024 = ($1023|0)==($958|0);
      if ($1024) {
       label = 304;
       break;
      }
      $1025 = $$0206$i$i >>> 31;
      $1026 = (((($$0207$i$i)) + 16|0) + ($1025<<2)|0);
      $1027 = $$0206$i$i << 1;
      $1028 = HEAP32[$1026>>2]|0;
      $1029 = ($1028|0)==(0|0);
      if ($1029) {
       label = 301;
       break;
      } else {
       $$0206$i$i = $1027;$$0207$i$i = $1028;
      }
     }
     if ((label|0) == 301) {
      $1030 = HEAP32[(10036)>>2]|0;
      $1031 = ($1026>>>0)<($1030>>>0);
      if ($1031) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$1026>>2] = $627;
       $1032 = ((($627)) + 24|0);
       HEAP32[$1032>>2] = $$0207$i$i;
       $1033 = ((($627)) + 12|0);
       HEAP32[$1033>>2] = $627;
       $1034 = ((($627)) + 8|0);
       HEAP32[$1034>>2] = $627;
       break;
      }
     }
     else if ((label|0) == 304) {
      $1035 = ((($$0207$i$i)) + 8|0);
      $1036 = HEAP32[$1035>>2]|0;
      $1037 = HEAP32[(10036)>>2]|0;
      $1038 = ($1036>>>0)>=($1037>>>0);
      $not$$i$i = ($$0207$i$i>>>0)>=($1037>>>0);
      $1039 = $1038 & $not$$i$i;
      if ($1039) {
       $1040 = ((($1036)) + 12|0);
       HEAP32[$1040>>2] = $627;
       HEAP32[$1035>>2] = $627;
       $1041 = ((($627)) + 8|0);
       HEAP32[$1041>>2] = $1036;
       $1042 = ((($627)) + 12|0);
       HEAP32[$1042>>2] = $$0207$i$i;
       $1043 = ((($627)) + 24|0);
       HEAP32[$1043>>2] = 0;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1045 = HEAP32[(10032)>>2]|0;
  $1046 = ($1045>>>0)>($$0197>>>0);
  if ($1046) {
   $1047 = (($1045) - ($$0197))|0;
   HEAP32[(10032)>>2] = $1047;
   $1048 = HEAP32[(10044)>>2]|0;
   $1049 = (($1048) + ($$0197)|0);
   HEAP32[(10044)>>2] = $1049;
   $1050 = $1047 | 1;
   $1051 = ((($1049)) + 4|0);
   HEAP32[$1051>>2] = $1050;
   $1052 = $$0197 | 3;
   $1053 = ((($1048)) + 4|0);
   HEAP32[$1053>>2] = $1052;
   $1054 = ((($1048)) + 8|0);
   $$0 = $1054;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $1055 = (___errno_location()|0);
 HEAP32[$1055>>2] = 12;
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($0) {
 $0 = $0|0;
 var $$0211$i = 0, $$0211$in$i = 0, $$0381 = 0, $$0382 = 0, $$0394 = 0, $$0401 = 0, $$1 = 0, $$1380 = 0, $$1385 = 0, $$1388 = 0, $$1396 = 0, $$1400 = 0, $$2 = 0, $$3 = 0, $$3398 = 0, $$pre = 0, $$pre$phi439Z2D = 0, $$pre$phi441Z2D = 0, $$pre$phiZ2D = 0, $$pre438 = 0;
 var $$pre440 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $cond418 = 0, $cond419 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + -8|0);
 $3 = HEAP32[(10036)>>2]|0;
 $4 = ($2>>>0)<($3>>>0);
 if ($4) {
  _abort();
  // unreachable;
 }
 $5 = ((($0)) + -4|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = $6 & 3;
 $8 = ($7|0)==(1);
 if ($8) {
  _abort();
  // unreachable;
 }
 $9 = $6 & -8;
 $10 = (($2) + ($9)|0);
 $11 = $6 & 1;
 $12 = ($11|0)==(0);
 do {
  if ($12) {
   $13 = HEAP32[$2>>2]|0;
   $14 = ($7|0)==(0);
   if ($14) {
    return;
   }
   $15 = (0 - ($13))|0;
   $16 = (($2) + ($15)|0);
   $17 = (($13) + ($9))|0;
   $18 = ($16>>>0)<($3>>>0);
   if ($18) {
    _abort();
    // unreachable;
   }
   $19 = HEAP32[(10040)>>2]|0;
   $20 = ($16|0)==($19|0);
   if ($20) {
    $105 = ((($10)) + 4|0);
    $106 = HEAP32[$105>>2]|0;
    $107 = $106 & 3;
    $108 = ($107|0)==(3);
    if (!($108)) {
     $$1 = $16;$$1380 = $17;
     break;
    }
    HEAP32[(10028)>>2] = $17;
    $109 = $106 & -2;
    HEAP32[$105>>2] = $109;
    $110 = $17 | 1;
    $111 = ((($16)) + 4|0);
    HEAP32[$111>>2] = $110;
    $112 = (($16) + ($17)|0);
    HEAP32[$112>>2] = $17;
    return;
   }
   $21 = $13 >>> 3;
   $22 = ($13>>>0)<(256);
   if ($22) {
    $23 = ((($16)) + 8|0);
    $24 = HEAP32[$23>>2]|0;
    $25 = ((($16)) + 12|0);
    $26 = HEAP32[$25>>2]|0;
    $27 = $21 << 1;
    $28 = (10060 + ($27<<2)|0);
    $29 = ($24|0)==($28|0);
    if (!($29)) {
     $30 = ($24>>>0)<($3>>>0);
     if ($30) {
      _abort();
      // unreachable;
     }
     $31 = ((($24)) + 12|0);
     $32 = HEAP32[$31>>2]|0;
     $33 = ($32|0)==($16|0);
     if (!($33)) {
      _abort();
      // unreachable;
     }
    }
    $34 = ($26|0)==($24|0);
    if ($34) {
     $35 = 1 << $21;
     $36 = $35 ^ -1;
     $37 = HEAP32[2505]|0;
     $38 = $37 & $36;
     HEAP32[2505] = $38;
     $$1 = $16;$$1380 = $17;
     break;
    }
    $39 = ($26|0)==($28|0);
    if ($39) {
     $$pre440 = ((($26)) + 8|0);
     $$pre$phi441Z2D = $$pre440;
    } else {
     $40 = ($26>>>0)<($3>>>0);
     if ($40) {
      _abort();
      // unreachable;
     }
     $41 = ((($26)) + 8|0);
     $42 = HEAP32[$41>>2]|0;
     $43 = ($42|0)==($16|0);
     if ($43) {
      $$pre$phi441Z2D = $41;
     } else {
      _abort();
      // unreachable;
     }
    }
    $44 = ((($24)) + 12|0);
    HEAP32[$44>>2] = $26;
    HEAP32[$$pre$phi441Z2D>>2] = $24;
    $$1 = $16;$$1380 = $17;
    break;
   }
   $45 = ((($16)) + 24|0);
   $46 = HEAP32[$45>>2]|0;
   $47 = ((($16)) + 12|0);
   $48 = HEAP32[$47>>2]|0;
   $49 = ($48|0)==($16|0);
   do {
    if ($49) {
     $59 = ((($16)) + 16|0);
     $60 = ((($59)) + 4|0);
     $61 = HEAP32[$60>>2]|0;
     $62 = ($61|0)==(0|0);
     if ($62) {
      $63 = HEAP32[$59>>2]|0;
      $64 = ($63|0)==(0|0);
      if ($64) {
       $$3 = 0;
       break;
      } else {
       $$1385 = $63;$$1388 = $59;
      }
     } else {
      $$1385 = $61;$$1388 = $60;
     }
     while(1) {
      $65 = ((($$1385)) + 20|0);
      $66 = HEAP32[$65>>2]|0;
      $67 = ($66|0)==(0|0);
      if (!($67)) {
       $$1385 = $66;$$1388 = $65;
       continue;
      }
      $68 = ((($$1385)) + 16|0);
      $69 = HEAP32[$68>>2]|0;
      $70 = ($69|0)==(0|0);
      if ($70) {
       break;
      } else {
       $$1385 = $69;$$1388 = $68;
      }
     }
     $71 = ($$1388>>>0)<($3>>>0);
     if ($71) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$$1388>>2] = 0;
      $$3 = $$1385;
      break;
     }
    } else {
     $50 = ((($16)) + 8|0);
     $51 = HEAP32[$50>>2]|0;
     $52 = ($51>>>0)<($3>>>0);
     if ($52) {
      _abort();
      // unreachable;
     }
     $53 = ((($51)) + 12|0);
     $54 = HEAP32[$53>>2]|0;
     $55 = ($54|0)==($16|0);
     if (!($55)) {
      _abort();
      // unreachable;
     }
     $56 = ((($48)) + 8|0);
     $57 = HEAP32[$56>>2]|0;
     $58 = ($57|0)==($16|0);
     if ($58) {
      HEAP32[$53>>2] = $48;
      HEAP32[$56>>2] = $51;
      $$3 = $48;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $72 = ($46|0)==(0|0);
   if ($72) {
    $$1 = $16;$$1380 = $17;
   } else {
    $73 = ((($16)) + 28|0);
    $74 = HEAP32[$73>>2]|0;
    $75 = (10324 + ($74<<2)|0);
    $76 = HEAP32[$75>>2]|0;
    $77 = ($16|0)==($76|0);
    if ($77) {
     HEAP32[$75>>2] = $$3;
     $cond418 = ($$3|0)==(0|0);
     if ($cond418) {
      $78 = 1 << $74;
      $79 = $78 ^ -1;
      $80 = HEAP32[(10024)>>2]|0;
      $81 = $80 & $79;
      HEAP32[(10024)>>2] = $81;
      $$1 = $16;$$1380 = $17;
      break;
     }
    } else {
     $82 = HEAP32[(10036)>>2]|0;
     $83 = ($46>>>0)<($82>>>0);
     if ($83) {
      _abort();
      // unreachable;
     }
     $84 = ((($46)) + 16|0);
     $85 = HEAP32[$84>>2]|0;
     $86 = ($85|0)==($16|0);
     if ($86) {
      HEAP32[$84>>2] = $$3;
     } else {
      $87 = ((($46)) + 20|0);
      HEAP32[$87>>2] = $$3;
     }
     $88 = ($$3|0)==(0|0);
     if ($88) {
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
    $89 = HEAP32[(10036)>>2]|0;
    $90 = ($$3>>>0)<($89>>>0);
    if ($90) {
     _abort();
     // unreachable;
    }
    $91 = ((($$3)) + 24|0);
    HEAP32[$91>>2] = $46;
    $92 = ((($16)) + 16|0);
    $93 = HEAP32[$92>>2]|0;
    $94 = ($93|0)==(0|0);
    do {
     if (!($94)) {
      $95 = ($93>>>0)<($89>>>0);
      if ($95) {
       _abort();
       // unreachable;
      } else {
       $96 = ((($$3)) + 16|0);
       HEAP32[$96>>2] = $93;
       $97 = ((($93)) + 24|0);
       HEAP32[$97>>2] = $$3;
       break;
      }
     }
    } while(0);
    $98 = ((($92)) + 4|0);
    $99 = HEAP32[$98>>2]|0;
    $100 = ($99|0)==(0|0);
    if ($100) {
     $$1 = $16;$$1380 = $17;
    } else {
     $101 = HEAP32[(10036)>>2]|0;
     $102 = ($99>>>0)<($101>>>0);
     if ($102) {
      _abort();
      // unreachable;
     } else {
      $103 = ((($$3)) + 20|0);
      HEAP32[$103>>2] = $99;
      $104 = ((($99)) + 24|0);
      HEAP32[$104>>2] = $$3;
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
   }
  } else {
   $$1 = $2;$$1380 = $9;
  }
 } while(0);
 $113 = ($$1>>>0)<($10>>>0);
 if (!($113)) {
  _abort();
  // unreachable;
 }
 $114 = ((($10)) + 4|0);
 $115 = HEAP32[$114>>2]|0;
 $116 = $115 & 1;
 $117 = ($116|0)==(0);
 if ($117) {
  _abort();
  // unreachable;
 }
 $118 = $115 & 2;
 $119 = ($118|0)==(0);
 if ($119) {
  $120 = HEAP32[(10044)>>2]|0;
  $121 = ($10|0)==($120|0);
  if ($121) {
   $122 = HEAP32[(10032)>>2]|0;
   $123 = (($122) + ($$1380))|0;
   HEAP32[(10032)>>2] = $123;
   HEAP32[(10044)>>2] = $$1;
   $124 = $123 | 1;
   $125 = ((($$1)) + 4|0);
   HEAP32[$125>>2] = $124;
   $126 = HEAP32[(10040)>>2]|0;
   $127 = ($$1|0)==($126|0);
   if (!($127)) {
    return;
   }
   HEAP32[(10040)>>2] = 0;
   HEAP32[(10028)>>2] = 0;
   return;
  }
  $128 = HEAP32[(10040)>>2]|0;
  $129 = ($10|0)==($128|0);
  if ($129) {
   $130 = HEAP32[(10028)>>2]|0;
   $131 = (($130) + ($$1380))|0;
   HEAP32[(10028)>>2] = $131;
   HEAP32[(10040)>>2] = $$1;
   $132 = $131 | 1;
   $133 = ((($$1)) + 4|0);
   HEAP32[$133>>2] = $132;
   $134 = (($$1) + ($131)|0);
   HEAP32[$134>>2] = $131;
   return;
  }
  $135 = $115 & -8;
  $136 = (($135) + ($$1380))|0;
  $137 = $115 >>> 3;
  $138 = ($115>>>0)<(256);
  do {
   if ($138) {
    $139 = ((($10)) + 8|0);
    $140 = HEAP32[$139>>2]|0;
    $141 = ((($10)) + 12|0);
    $142 = HEAP32[$141>>2]|0;
    $143 = $137 << 1;
    $144 = (10060 + ($143<<2)|0);
    $145 = ($140|0)==($144|0);
    if (!($145)) {
     $146 = HEAP32[(10036)>>2]|0;
     $147 = ($140>>>0)<($146>>>0);
     if ($147) {
      _abort();
      // unreachable;
     }
     $148 = ((($140)) + 12|0);
     $149 = HEAP32[$148>>2]|0;
     $150 = ($149|0)==($10|0);
     if (!($150)) {
      _abort();
      // unreachable;
     }
    }
    $151 = ($142|0)==($140|0);
    if ($151) {
     $152 = 1 << $137;
     $153 = $152 ^ -1;
     $154 = HEAP32[2505]|0;
     $155 = $154 & $153;
     HEAP32[2505] = $155;
     break;
    }
    $156 = ($142|0)==($144|0);
    if ($156) {
     $$pre438 = ((($142)) + 8|0);
     $$pre$phi439Z2D = $$pre438;
    } else {
     $157 = HEAP32[(10036)>>2]|0;
     $158 = ($142>>>0)<($157>>>0);
     if ($158) {
      _abort();
      // unreachable;
     }
     $159 = ((($142)) + 8|0);
     $160 = HEAP32[$159>>2]|0;
     $161 = ($160|0)==($10|0);
     if ($161) {
      $$pre$phi439Z2D = $159;
     } else {
      _abort();
      // unreachable;
     }
    }
    $162 = ((($140)) + 12|0);
    HEAP32[$162>>2] = $142;
    HEAP32[$$pre$phi439Z2D>>2] = $140;
   } else {
    $163 = ((($10)) + 24|0);
    $164 = HEAP32[$163>>2]|0;
    $165 = ((($10)) + 12|0);
    $166 = HEAP32[$165>>2]|0;
    $167 = ($166|0)==($10|0);
    do {
     if ($167) {
      $178 = ((($10)) + 16|0);
      $179 = ((($178)) + 4|0);
      $180 = HEAP32[$179>>2]|0;
      $181 = ($180|0)==(0|0);
      if ($181) {
       $182 = HEAP32[$178>>2]|0;
       $183 = ($182|0)==(0|0);
       if ($183) {
        $$3398 = 0;
        break;
       } else {
        $$1396 = $182;$$1400 = $178;
       }
      } else {
       $$1396 = $180;$$1400 = $179;
      }
      while(1) {
       $184 = ((($$1396)) + 20|0);
       $185 = HEAP32[$184>>2]|0;
       $186 = ($185|0)==(0|0);
       if (!($186)) {
        $$1396 = $185;$$1400 = $184;
        continue;
       }
       $187 = ((($$1396)) + 16|0);
       $188 = HEAP32[$187>>2]|0;
       $189 = ($188|0)==(0|0);
       if ($189) {
        break;
       } else {
        $$1396 = $188;$$1400 = $187;
       }
      }
      $190 = HEAP32[(10036)>>2]|0;
      $191 = ($$1400>>>0)<($190>>>0);
      if ($191) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$$1400>>2] = 0;
       $$3398 = $$1396;
       break;
      }
     } else {
      $168 = ((($10)) + 8|0);
      $169 = HEAP32[$168>>2]|0;
      $170 = HEAP32[(10036)>>2]|0;
      $171 = ($169>>>0)<($170>>>0);
      if ($171) {
       _abort();
       // unreachable;
      }
      $172 = ((($169)) + 12|0);
      $173 = HEAP32[$172>>2]|0;
      $174 = ($173|0)==($10|0);
      if (!($174)) {
       _abort();
       // unreachable;
      }
      $175 = ((($166)) + 8|0);
      $176 = HEAP32[$175>>2]|0;
      $177 = ($176|0)==($10|0);
      if ($177) {
       HEAP32[$172>>2] = $166;
       HEAP32[$175>>2] = $169;
       $$3398 = $166;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $192 = ($164|0)==(0|0);
    if (!($192)) {
     $193 = ((($10)) + 28|0);
     $194 = HEAP32[$193>>2]|0;
     $195 = (10324 + ($194<<2)|0);
     $196 = HEAP32[$195>>2]|0;
     $197 = ($10|0)==($196|0);
     if ($197) {
      HEAP32[$195>>2] = $$3398;
      $cond419 = ($$3398|0)==(0|0);
      if ($cond419) {
       $198 = 1 << $194;
       $199 = $198 ^ -1;
       $200 = HEAP32[(10024)>>2]|0;
       $201 = $200 & $199;
       HEAP32[(10024)>>2] = $201;
       break;
      }
     } else {
      $202 = HEAP32[(10036)>>2]|0;
      $203 = ($164>>>0)<($202>>>0);
      if ($203) {
       _abort();
       // unreachable;
      }
      $204 = ((($164)) + 16|0);
      $205 = HEAP32[$204>>2]|0;
      $206 = ($205|0)==($10|0);
      if ($206) {
       HEAP32[$204>>2] = $$3398;
      } else {
       $207 = ((($164)) + 20|0);
       HEAP32[$207>>2] = $$3398;
      }
      $208 = ($$3398|0)==(0|0);
      if ($208) {
       break;
      }
     }
     $209 = HEAP32[(10036)>>2]|0;
     $210 = ($$3398>>>0)<($209>>>0);
     if ($210) {
      _abort();
      // unreachable;
     }
     $211 = ((($$3398)) + 24|0);
     HEAP32[$211>>2] = $164;
     $212 = ((($10)) + 16|0);
     $213 = HEAP32[$212>>2]|0;
     $214 = ($213|0)==(0|0);
     do {
      if (!($214)) {
       $215 = ($213>>>0)<($209>>>0);
       if ($215) {
        _abort();
        // unreachable;
       } else {
        $216 = ((($$3398)) + 16|0);
        HEAP32[$216>>2] = $213;
        $217 = ((($213)) + 24|0);
        HEAP32[$217>>2] = $$3398;
        break;
       }
      }
     } while(0);
     $218 = ((($212)) + 4|0);
     $219 = HEAP32[$218>>2]|0;
     $220 = ($219|0)==(0|0);
     if (!($220)) {
      $221 = HEAP32[(10036)>>2]|0;
      $222 = ($219>>>0)<($221>>>0);
      if ($222) {
       _abort();
       // unreachable;
      } else {
       $223 = ((($$3398)) + 20|0);
       HEAP32[$223>>2] = $219;
       $224 = ((($219)) + 24|0);
       HEAP32[$224>>2] = $$3398;
       break;
      }
     }
    }
   }
  } while(0);
  $225 = $136 | 1;
  $226 = ((($$1)) + 4|0);
  HEAP32[$226>>2] = $225;
  $227 = (($$1) + ($136)|0);
  HEAP32[$227>>2] = $136;
  $228 = HEAP32[(10040)>>2]|0;
  $229 = ($$1|0)==($228|0);
  if ($229) {
   HEAP32[(10028)>>2] = $136;
   return;
  } else {
   $$2 = $136;
  }
 } else {
  $230 = $115 & -2;
  HEAP32[$114>>2] = $230;
  $231 = $$1380 | 1;
  $232 = ((($$1)) + 4|0);
  HEAP32[$232>>2] = $231;
  $233 = (($$1) + ($$1380)|0);
  HEAP32[$233>>2] = $$1380;
  $$2 = $$1380;
 }
 $234 = $$2 >>> 3;
 $235 = ($$2>>>0)<(256);
 if ($235) {
  $236 = $234 << 1;
  $237 = (10060 + ($236<<2)|0);
  $238 = HEAP32[2505]|0;
  $239 = 1 << $234;
  $240 = $238 & $239;
  $241 = ($240|0)==(0);
  if ($241) {
   $242 = $238 | $239;
   HEAP32[2505] = $242;
   $$pre = ((($237)) + 8|0);
   $$0401 = $237;$$pre$phiZ2D = $$pre;
  } else {
   $243 = ((($237)) + 8|0);
   $244 = HEAP32[$243>>2]|0;
   $245 = HEAP32[(10036)>>2]|0;
   $246 = ($244>>>0)<($245>>>0);
   if ($246) {
    _abort();
    // unreachable;
   } else {
    $$0401 = $244;$$pre$phiZ2D = $243;
   }
  }
  HEAP32[$$pre$phiZ2D>>2] = $$1;
  $247 = ((($$0401)) + 12|0);
  HEAP32[$247>>2] = $$1;
  $248 = ((($$1)) + 8|0);
  HEAP32[$248>>2] = $$0401;
  $249 = ((($$1)) + 12|0);
  HEAP32[$249>>2] = $237;
  return;
 }
 $250 = $$2 >>> 8;
 $251 = ($250|0)==(0);
 if ($251) {
  $$0394 = 0;
 } else {
  $252 = ($$2>>>0)>(16777215);
  if ($252) {
   $$0394 = 31;
  } else {
   $253 = (($250) + 1048320)|0;
   $254 = $253 >>> 16;
   $255 = $254 & 8;
   $256 = $250 << $255;
   $257 = (($256) + 520192)|0;
   $258 = $257 >>> 16;
   $259 = $258 & 4;
   $260 = $259 | $255;
   $261 = $256 << $259;
   $262 = (($261) + 245760)|0;
   $263 = $262 >>> 16;
   $264 = $263 & 2;
   $265 = $260 | $264;
   $266 = (14 - ($265))|0;
   $267 = $261 << $264;
   $268 = $267 >>> 15;
   $269 = (($266) + ($268))|0;
   $270 = $269 << 1;
   $271 = (($269) + 7)|0;
   $272 = $$2 >>> $271;
   $273 = $272 & 1;
   $274 = $273 | $270;
   $$0394 = $274;
  }
 }
 $275 = (10324 + ($$0394<<2)|0);
 $276 = ((($$1)) + 28|0);
 HEAP32[$276>>2] = $$0394;
 $277 = ((($$1)) + 16|0);
 $278 = ((($$1)) + 20|0);
 HEAP32[$278>>2] = 0;
 HEAP32[$277>>2] = 0;
 $279 = HEAP32[(10024)>>2]|0;
 $280 = 1 << $$0394;
 $281 = $279 & $280;
 $282 = ($281|0)==(0);
 do {
  if ($282) {
   $283 = $279 | $280;
   HEAP32[(10024)>>2] = $283;
   HEAP32[$275>>2] = $$1;
   $284 = ((($$1)) + 24|0);
   HEAP32[$284>>2] = $275;
   $285 = ((($$1)) + 12|0);
   HEAP32[$285>>2] = $$1;
   $286 = ((($$1)) + 8|0);
   HEAP32[$286>>2] = $$1;
  } else {
   $287 = HEAP32[$275>>2]|0;
   $288 = ($$0394|0)==(31);
   $289 = $$0394 >>> 1;
   $290 = (25 - ($289))|0;
   $291 = $288 ? 0 : $290;
   $292 = $$2 << $291;
   $$0381 = $292;$$0382 = $287;
   while(1) {
    $293 = ((($$0382)) + 4|0);
    $294 = HEAP32[$293>>2]|0;
    $295 = $294 & -8;
    $296 = ($295|0)==($$2|0);
    if ($296) {
     label = 130;
     break;
    }
    $297 = $$0381 >>> 31;
    $298 = (((($$0382)) + 16|0) + ($297<<2)|0);
    $299 = $$0381 << 1;
    $300 = HEAP32[$298>>2]|0;
    $301 = ($300|0)==(0|0);
    if ($301) {
     label = 127;
     break;
    } else {
     $$0381 = $299;$$0382 = $300;
    }
   }
   if ((label|0) == 127) {
    $302 = HEAP32[(10036)>>2]|0;
    $303 = ($298>>>0)<($302>>>0);
    if ($303) {
     _abort();
     // unreachable;
    } else {
     HEAP32[$298>>2] = $$1;
     $304 = ((($$1)) + 24|0);
     HEAP32[$304>>2] = $$0382;
     $305 = ((($$1)) + 12|0);
     HEAP32[$305>>2] = $$1;
     $306 = ((($$1)) + 8|0);
     HEAP32[$306>>2] = $$1;
     break;
    }
   }
   else if ((label|0) == 130) {
    $307 = ((($$0382)) + 8|0);
    $308 = HEAP32[$307>>2]|0;
    $309 = HEAP32[(10036)>>2]|0;
    $310 = ($308>>>0)>=($309>>>0);
    $not$ = ($$0382>>>0)>=($309>>>0);
    $311 = $310 & $not$;
    if ($311) {
     $312 = ((($308)) + 12|0);
     HEAP32[$312>>2] = $$1;
     HEAP32[$307>>2] = $$1;
     $313 = ((($$1)) + 8|0);
     HEAP32[$313>>2] = $308;
     $314 = ((($$1)) + 12|0);
     HEAP32[$314>>2] = $$0382;
     $315 = ((($$1)) + 24|0);
     HEAP32[$315>>2] = 0;
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $316 = HEAP32[(10052)>>2]|0;
 $317 = (($316) + -1)|0;
 HEAP32[(10052)>>2] = $317;
 $318 = ($317|0)==(0);
 if ($318) {
  $$0211$in$i = (10476);
 } else {
  return;
 }
 while(1) {
  $$0211$i = HEAP32[$$0211$in$i>>2]|0;
  $319 = ($$0211$i|0)==(0|0);
  $320 = ((($$0211$i)) + 8|0);
  if ($319) {
   break;
  } else {
   $$0211$in$i = $320;
  }
 }
 HEAP32[(10052)>>2] = -1;
 return;
}
function runPostSets() {
}
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return ((tempRet0 = h,l|0)|0);
}
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return ((tempRet0 = h,l|0)|0);
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
    stop = (ptr + num)|0;
    if ((num|0) >= 20) {
      // This is unaligned, but quite large, so work hard to get to aligned settings
      value = value & 0xff;
      unaligned = ptr & 3;
      value4 = value | (value << 8) | (value << 16) | (value << 24);
      stop4 = stop & ~3;
      if (unaligned) {
        unaligned = (ptr + 4 - unaligned)|0;
        while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
          HEAP8[((ptr)>>0)]=value;
          ptr = (ptr+1)|0;
        }
      }
      while ((ptr|0) < (stop4|0)) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    while ((ptr|0) < (stop|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (ptr-num)|0;
}
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >>> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = 0;
    return (high >>> (bits - 32))|0;
}
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = (high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits));
      return low << bits;
    }
    tempRet0 = low << (bits - 32);
    return 0;
}
function _llvm_cttz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = ((HEAP8[(((cttz_i8)+(x & 0xff))>>0)])|0);
    if ((ret|0) < 8) return ret|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 8)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 8)|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 16)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 16)|0;
    return (((HEAP8[(((cttz_i8)+(x >>> 24))>>0)])|0) + 24)|0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    $rem = $rem | 0;
    var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
    $n_sroa_0_0_extract_trunc = $a$0;
    $n_sroa_1_4_extract_shift$0 = $a$1;
    $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
    $d_sroa_0_0_extract_trunc = $b$0;
    $d_sroa_1_4_extract_shift$0 = $b$1;
    $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
    if (($n_sroa_1_4_extract_trunc | 0) == 0) {
      $4 = ($rem | 0) != 0;
      if (($d_sroa_1_4_extract_trunc | 0) == 0) {
        if ($4) {
          HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$4) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
    }
    $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
    do {
      if (($d_sroa_0_0_extract_trunc | 0) == 0) {
        if ($17) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
            HEAP32[$rem + 4 >> 2] = 0;
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        if (($n_sroa_0_0_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0;
            HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
        if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0 | $a$0 & -1;
            HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
          }
          $_0$1 = 0;
          $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
        $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($51 >>> 0 <= 30) {
          $57 = $51 + 1 | 0;
          $58 = 31 - $51 | 0;
          $sr_1_ph = $57;
          $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$17) {
          $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
          $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          if ($119 >>> 0 <= 31) {
            $125 = $119 + 1 | 0;
            $126 = 31 - $119 | 0;
            $130 = $119 - 31 >> 31;
            $sr_1_ph = $125;
            $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
            $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
            $q_sroa_0_1_ph = 0;
            $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
            break;
          }
          if (($rem | 0) == 0) {
            $_0$1 = 0;
            $_0$0 = 0;
            return (tempRet0 = $_0$1, $_0$0) | 0;
          }
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
        if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
          $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
          $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          $89 = 64 - $88 | 0;
          $91 = 32 - $88 | 0;
          $92 = $91 >> 31;
          $95 = $88 - 32 | 0;
          $105 = $95 >> 31;
          $sr_1_ph = $88;
          $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
          $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
          $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
          $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
          break;
        }
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
          HEAP32[$rem + 4 >> 2] = 0;
        }
        if (($d_sroa_0_0_extract_trunc | 0) == 1) {
          $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$0 = 0 | $a$0 & -1;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        } else {
          $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
          $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
          $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
      }
    } while (0);
    if (($sr_1_ph | 0) == 0) {
      $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
      $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
      $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
      $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = 0;
    } else {
      $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
      $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
      $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0;
      $137$1 = tempRet0;
      $q_sroa_1_1198 = $q_sroa_1_1_ph;
      $q_sroa_0_1199 = $q_sroa_0_1_ph;
      $r_sroa_1_1200 = $r_sroa_1_1_ph;
      $r_sroa_0_1201 = $r_sroa_0_1_ph;
      $sr_1202 = $sr_1_ph;
      $carry_0203 = 0;
      while (1) {
        $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
        $149 = $carry_0203 | $q_sroa_0_1199 << 1;
        $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
        $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
        _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0;
        $150$1 = tempRet0;
        $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
        $152 = $151$0 & 1;
        $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0, $151$0 & $d_sroa_0_0_insert_insert99$0 | 0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1 | 0) | 0;
        $r_sroa_0_0_extract_trunc = $154$0;
        $r_sroa_1_4_extract_trunc = tempRet0;
        $155 = $sr_1202 - 1 | 0;
        if (($155 | 0) == 0) {
          break;
        } else {
          $q_sroa_1_1198 = $147;
          $q_sroa_0_1199 = $149;
          $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
          $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
          $sr_1202 = $155;
          $carry_0203 = $152;
        }
      }
      $q_sroa_1_1_lcssa = $147;
      $q_sroa_0_1_lcssa = $149;
      $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
      $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = $152;
    }
    $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
    $q_sroa_0_0_insert_ext75$1 = 0;
    $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
    if (($rem | 0) != 0) {
      HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
      HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
    }
    $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
    $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
    return (tempRet0 = $_0$1, $_0$0) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $1$0 = 0;
    $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
    return $1$0 | 0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $rem = 0, __stackBase__ = 0;
    __stackBase__ = STACKTOP;
    STACKTOP = STACKTOP + 16 | 0;
    $rem = __stackBase__ | 0;
    ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0;
    STACKTOP = __stackBase__;
    return (tempRet0 = HEAP32[$rem + 4 >> 2] | 0, HEAP32[$rem >> 2] | 0) | 0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if ((num|0) >= 4096) return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    ret = dest|0;
    if ((dest&3) == (src&3)) {
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      while ((num|0) >= 4) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
        num = (num-4)|0;
      }
    }
    while ((num|0) > 0) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
      num = (num-1)|0;
    }
    return ret|0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&15](a1|0)|0;
}


function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&31](a1|0,a2|0,a3|0)|0;
}


function dynCall_iiiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  return FUNCTION_TABLE_iiiii[index&7](a1|0,a2|0,a3|0,a4|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&15](a1|0,a2|0,a3|0);
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&15](a1|0);
}

function b0(p0) {
 p0 = p0|0; nullFunc_ii(0);return 0;
}
function b1(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_iiii(1);return 0;
}
function b2(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_iiiii(2);return 0;
}
function b3(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(3);
}
function b4(p0) {
 p0 = p0|0; nullFunc_vi(4);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,___stdio_close,b0,b0,b0,b0,_stdio_istream_close,b0,_mem_istream_close,b0,b0,b0,b0,b0,b0,b0];
var FUNCTION_TABLE_iiii = [b1,b1,___stdio_write,___stdio_seek,___stdout_write,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,___stdio_read,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1];
var FUNCTION_TABLE_iiiii = [b2,b2,b2,b2,b2,_stdio_istream_read,b2,_mem_istream_read];
var FUNCTION_TABLE_viii = [b3,b3,b3,b3,b3,b3,b3,b3,b3,_s32tos8,_s32tou8,_s32tos16,_s32tos16x,_s32tou16,b3,b3];
var FUNCTION_TABLE_vi = [b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,_cleanup_109,_cleanup];

  return { _mid_create_options: _mid_create_options, _memset: _memset, _mid_istream_open_file: _mid_istream_open_file, _mid_song_read_wave: _mid_song_read_wave, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, _mid_exit: _mid_exit, _fflush: _fflush, _mid_song_note_on: _mid_song_note_on, _mid_istream_open_mem: _mid_istream_open_mem, _sbrk: _sbrk, _memcpy: _memcpy, _mid_song_get_num_missing_instruments: _mid_song_get_num_missing_instruments, ___uremdi3: ___uremdi3, _mid_song_get_missing_instrument: _mid_song_get_missing_instrument, _mid_song_get_total_time: _mid_song_get_total_time, _i64Subtract: _i64Subtract, _mid_istream_close: _mid_istream_close, ___udivmoddi4: ___udivmoddi4, _i64Add: _i64Add, _pthread_self: _pthread_self, _mid_song_free: _mid_song_free, _mid_init: _mid_init, _mid_song_load: _mid_song_load, _mid_song_start: _mid_song_start, _llvm_cttz_i32: _llvm_cttz_i32, ___udivdi3: ___udivdi3, ___errno_location: ___errno_location, _free: _free, _malloc: _malloc, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_iiiii: dynCall_iiiii, dynCall_viii: dynCall_viii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var real__mid_create_options = asm["_mid_create_options"]; asm["_mid_create_options"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_create_options.apply(null, arguments);
};

var real__mid_istream_open_mem = asm["_mid_istream_open_mem"]; asm["_mid_istream_open_mem"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_istream_open_mem.apply(null, arguments);
};

var real__mid_istream_open_file = asm["_mid_istream_open_file"]; asm["_mid_istream_open_file"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_istream_open_file.apply(null, arguments);
};

var real__mid_song_read_wave = asm["_mid_song_read_wave"]; asm["_mid_song_read_wave"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_read_wave.apply(null, arguments);
};

var real__bitshift64Lshr = asm["_bitshift64Lshr"]; asm["_bitshift64Lshr"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Lshr.apply(null, arguments);
};

var real__bitshift64Shl = asm["_bitshift64Shl"]; asm["_bitshift64Shl"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Shl.apply(null, arguments);
};

var real__mid_exit = asm["_mid_exit"]; asm["_mid_exit"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_exit.apply(null, arguments);
};

var real__fflush = asm["_fflush"]; asm["_fflush"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__fflush.apply(null, arguments);
};

var real__mid_song_note_on = asm["_mid_song_note_on"]; asm["_mid_song_note_on"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_note_on.apply(null, arguments);
};

var real__sbrk = asm["_sbrk"]; asm["_sbrk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__sbrk.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____errno_location.apply(null, arguments);
};

var real____uremdi3 = asm["___uremdi3"]; asm["___uremdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____uremdi3.apply(null, arguments);
};

var real__mid_song_get_missing_instrument = asm["_mid_song_get_missing_instrument"]; asm["_mid_song_get_missing_instrument"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_get_missing_instrument.apply(null, arguments);
};

var real__mid_song_get_total_time = asm["_mid_song_get_total_time"]; asm["_mid_song_get_total_time"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_get_total_time.apply(null, arguments);
};

var real__i64Subtract = asm["_i64Subtract"]; asm["_i64Subtract"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Subtract.apply(null, arguments);
};

var real__mid_istream_close = asm["_mid_istream_close"]; asm["_mid_istream_close"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_istream_close.apply(null, arguments);
};

var real____udivmoddi4 = asm["___udivmoddi4"]; asm["___udivmoddi4"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivmoddi4.apply(null, arguments);
};

var real__i64Add = asm["_i64Add"]; asm["_i64Add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Add.apply(null, arguments);
};

var real__pthread_self = asm["_pthread_self"]; asm["_pthread_self"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__pthread_self.apply(null, arguments);
};

var real__mid_song_free = asm["_mid_song_free"]; asm["_mid_song_free"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_free.apply(null, arguments);
};

var real__mid_init = asm["_mid_init"]; asm["_mid_init"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_init.apply(null, arguments);
};

var real__mid_song_load = asm["_mid_song_load"]; asm["_mid_song_load"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_load.apply(null, arguments);
};

var real__mid_song_start = asm["_mid_song_start"]; asm["_mid_song_start"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_start.apply(null, arguments);
};

var real__llvm_cttz_i32 = asm["_llvm_cttz_i32"]; asm["_llvm_cttz_i32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__llvm_cttz_i32.apply(null, arguments);
};

var real____udivdi3 = asm["___udivdi3"]; asm["___udivdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivdi3.apply(null, arguments);
};

var real__mid_song_get_num_missing_instruments = asm["_mid_song_get_num_missing_instruments"]; asm["_mid_song_get_num_missing_instruments"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mid_song_get_num_missing_instruments.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__free.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__malloc.apply(null, arguments);
};
var _mid_create_options = Module["_mid_create_options"] = asm["_mid_create_options"];
var _mid_istream_open_mem = Module["_mid_istream_open_mem"] = asm["_mid_istream_open_mem"];
var _mid_istream_open_file = Module["_mid_istream_open_file"] = asm["_mid_istream_open_file"];
var _mid_song_read_wave = Module["_mid_song_read_wave"] = asm["_mid_song_read_wave"];
var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];
var _mid_exit = Module["_mid_exit"] = asm["_mid_exit"];
var _fflush = Module["_fflush"] = asm["_fflush"];
var _mid_song_note_on = Module["_mid_song_note_on"] = asm["_mid_song_note_on"];
var _memset = Module["_memset"] = asm["_memset"];
var _sbrk = Module["_sbrk"] = asm["_sbrk"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var ___errno_location = Module["___errno_location"] = asm["___errno_location"];
var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];
var _mid_song_get_missing_instrument = Module["_mid_song_get_missing_instrument"] = asm["_mid_song_get_missing_instrument"];
var _mid_song_get_total_time = Module["_mid_song_get_total_time"] = asm["_mid_song_get_total_time"];
var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];
var _mid_istream_close = Module["_mid_istream_close"] = asm["_mid_istream_close"];
var ___udivmoddi4 = Module["___udivmoddi4"] = asm["___udivmoddi4"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _pthread_self = Module["_pthread_self"] = asm["_pthread_self"];
var _mid_song_free = Module["_mid_song_free"] = asm["_mid_song_free"];
var _mid_init = Module["_mid_init"] = asm["_mid_init"];
var _mid_song_load = Module["_mid_song_load"] = asm["_mid_song_load"];
var _mid_song_start = Module["_mid_song_start"] = asm["_mid_song_start"];
var _llvm_cttz_i32 = Module["_llvm_cttz_i32"] = asm["_llvm_cttz_i32"];
var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];
var _mid_song_get_num_missing_instruments = Module["_mid_song_get_num_missing_instruments"] = asm["_mid_song_get_num_missing_instruments"];
var _free = Module["_free"] = asm["_free"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
;

Runtime.stackAlloc = asm['stackAlloc'];
Runtime.stackSave = asm['stackSave'];
Runtime.stackRestore = asm['stackRestore'];
Runtime.establishStackSpace = asm['establishStackSpace'];

Runtime.setTempRet0 = asm['setTempRet0'];
Runtime.getTempRet0 = asm['getTempRet0'];



// === Auto-generated postamble setup entry stuff ===





function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString(Module['thisProgram']), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);


  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}




function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
      Module.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (Module['_main'] && shouldRunNow) Module['callMain'](args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = Module.run = run;

function exit(status, implicit) {
  if (implicit && Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)');
    return;
  }

  if (Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)');
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  } else if (ENVIRONMENT_IS_SHELL && typeof quit === 'function') {
    quit(status);
  }
  // if we reach here, we must throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;

var abortDecorators = [];

function abort(what) {
  if (what !== undefined) {
    Module.print(what);
    Module.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';

  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}


run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}



//# sourceMappingURL=/assets/script/map/libtimidity.js.map