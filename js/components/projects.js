
function renderProjects(data) {
  const container = document.getElementById('main-content');
  const progetti = data.progetti.map(row => ({
    id: row['Id Progetto'],
    name: row['Nome Progetto'],
    client: row['Cliente'],
    pm: row['PM responsabile'],
    status: row['Stato'],
    budget: parseCurrency(row['Budget Iniziale']),
    costs: parseCurrency(row['Costi Sostenuti']),
    forecast: parseCurrency(row['Previsione Finale Costi']),
    progress: parsePercentage(row['% Avanzamento'])
  }));

  const statusBadge = status => {
    switch (status) {
      case 'In corso': return 'bg-yellow-100 text-yellow-800';
      case 'Completato': return 'bg-green-100 text-green-800';
      case 'Da approvare': return 'bg-blue-100 text-blue-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const formatCurrency = val =>
    new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(val);

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      ${progetti.map(p => `
        <div class="bg-white rounded-lg shadow p-4 project-card">
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-bold text-lg">${p.name}</h3>
            <span class="text-xs font-semibold px-2 py-1 rounded-full ${statusBadge(p.status)}">${p.status}</span>
          </div>
          <p class="text-sm text-slate-600 mb-3">${p.client} | PM: ${p.pm}</p>
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-1">
              <span>Avanzamento</span><span>${p.progress}%</span>
            </div>
            <div class="bg-slate-200 h-2 rounded-full">
              <div class="bg-blue-600 h-2 rounded-full" style="width: ${p.progress}%"></div>
            </div>
          </div>
          <div class="grid grid-cols-3 text-center text-sm mb-4">
            <div><p class="text-slate-500">Budget</p><p class="font-bold">${formatCurrency(p.budget)}</p></div>
            <div><p class="text-slate-500">Costi</p><p class="font-bold">${formatCurrency(p.costs)}</p></div>
            <div><p class="text-slate-500">Previsto</p><p class="font-bold">${formatCurrency(p.forecast)}</p></div>
          </div>
          <div class="text-right">
            <button class="text-blue-600 text-sm font-semibold hover:underline" onclick="openProjectDetail('${p.id}', data)">
              Apri Progetto
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
