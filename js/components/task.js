
function renderTask(projectId, dataset) {
  const container = document.getElementById('task-section');
  const filtered = dataset.filter(row => row['Progetto'] === projectId);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-sm text-slate-500">Nessun dato disponibile.</p>';
    return;
  }

  const html = filtered.slice(0, 5).map(r => {
    const values = Object.values(r).slice(0, 2).join(' - ');
    return `<li>${values}</li>`;
  }).join('');

  container.innerHTML = `
    <ul class="list-disc ml-5 text-sm text-slate-700">${html}</ul>
    <p class="mt-2 text-xs text-slate-400">($renderTask - dati limitati)</p>
  `;
}
