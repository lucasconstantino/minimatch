
var minimatch = require('./minimatch');

// Export to browserify requirements.
if (typeof module !== 'undefined') module.exports = minimatch;

// Expose lib to window.
if (typeof window !== 'undefined') window.minimatch = minimatch;
