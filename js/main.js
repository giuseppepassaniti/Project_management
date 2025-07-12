
document.getElementById('btn-carica').addEventListener('click', () => {
  const files = {
    progetti: document.getElementById('file-progetti').files[0],
    milestone: document.getElementById('file-milestone').files[0],
    task: document.getElementById('file-task').files[0],
    imprevisti: document.getElementById('file-imprevisti').files[0],
    varianti: document.getElementById('file-varianti').files[0],
    decisioni: document.getElementById('file-decisioni').files[0]
  };

  const allLoaded = Object.values(files).every(file => file);
  if (!allLoaded) {
    alert('Carica tutti i file prima di procedere.');
    return;
  }

  Promise.all([
    parseCSV(files.progetti),
    parseCSV(files.milestone),
    parseCSV(files.task),
    parseCSV(files.imprevisti),
    parseCSV(files.varianti),
    parseCSV(files.decisioni)
  ]).then(([progetti, milestone, task, imprevisti, varianti, decisioni]) => {
    const data = { progetti, milestone, task, imprevisti, varianti, decisioni };
    renderProjects(data);
  }).catch(err => {
  console.error('❌ Errore nel parsing dei CSV:', err);
  alert('Errore nel caricamento dei file. Controlla la console (F12).');
});
});
