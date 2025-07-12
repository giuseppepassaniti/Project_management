
function parseCSV(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transform: value => value.trim(),
      complete: results => resolve(results.data),
      error: err => reject(err)
    });
  });
}

function parseCurrency(str) {
  return parseFloat(str?.replace(/[.€\s]/g, '').replace(',', '.')) || 0;
}

function parsePercentage(str) {
  return parseInt(str?.replace('%', ''), 10) || 0;
}
