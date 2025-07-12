
function openProjectDetail(projectId, data) {
  const container = document.getElementById('main-content');
  const progetto = data.progetti.find(p => p['Id Progetto'] === projectId);

  container.innerHTML = `
    <div class="mb-6">
      <button onclick="renderProjects(globalData)" class="text-sm text-blue-600 hover:underline mb-2">
        ← Torna ai progetti
      </button>
      <h2 class="text-2xl font-bold text-slate-800">${progetto['Nome Progetto']}</h2>
      <p class="text-slate-600">Cliente: ${progetto['Cliente']} | PM: ${progetto['PM responsabile']}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="font-semibold mb-2">Milestone</h3>
        <div id="milestone-section"></div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="font-semibold mb-2">Task</h3>
        <div id="task-section"></div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="font-semibold mb-2">Imprevisti</h3>
        <div id="imprevisti-section"></div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="font-semibold mb-2">Varianti</h3>
        <div id="varianti-section"></div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow lg:col-span-2">
        <h3 class="font-semibold mb-2">Decisioni</h3>
        <div id="decisioni-section"></div>
      </div>
    </div>
  `;

  // Chiama i renderizzatori (da definire)
  renderMilestone(projectId, data.milestone);
  renderTask(projectId, data.task);
  renderImprevisti(projectId, data.imprevisti);
  renderVarianti(projectId, data.varianti);
  renderDecisioni(projectId, data.decisioni);
}
