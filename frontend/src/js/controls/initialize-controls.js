import initializeLoadPointsFromFileControl from './initialize-load-points-from-file-control';
import initializeApiKeyControl from './initialize-api-key-control';
import initializeSetLocationControl from './initialize-set-location-control';
import initializeLoadPointsFromDbControl from './initialize-load-points-from-db-control';
import initializeExportAllPointsControl from './initialize-export-all-points-control';

/**
 * Initialize the controls.  Pretty much just delegate out to methods that attach event handlers.
 * @module
 */
export default function () {
  initializeLoadPointsFromFileControl();
  initializeSetLocationControl();
  initializeApiKeyControl();
  initializeLoadPointsFromDbControl();
  initializeExportAllPointsControl();
}
