(() => {
  const STORAGE_KEY = "tasks_v1";

  /** @type {{id: string, text: string}[]} */
  let tasks = [];

  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        if (parsed.length > 0 && typeof parsed[0] === "string") {
          // Compatibilidad: si se guardó como array de strings.
          tasks = parsed
            .map((text) => String(text))
            .filter((text) => text.trim().length > 0)
            .map((text) => ({ id: makeId(), text: text.trim() }));
        } else {
          // Formato esperado: array de objetos {id, text}
          tasks = parsed.filter(
            (t) =>
              t &&
              typeof t.id === "string" &&
              typeof t.text === "string" &&
              t.text.trim().length > 0
          );
        }
      }
    } catch {
      // Si localStorage falla, arrancamos con lista vacia.
      tasks = [];
    }
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  function makeId() {
    const rand = Math.random().toString(36).slice(2);
    return `${Date.now().toString(36)}_${rand}`;
  }

  /**
   * @param {{id: string, text: string}} task
   * @returns {HTMLLIElement}
   */
  function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.dataset.taskId = task.id;

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.type = "button";
    delBtn.textContent = "Eliminar";
    delBtn.setAttribute("aria-label", `Eliminar tarea: ${task.text}`);
    delBtn.addEventListener("click", () => {
      removeTask(task.id);
    });

    li.appendChild(text);
    li.appendChild(delBtn);
    return li;
  }

  function renderTasks() {
    taskList.innerHTML = "";
    for (const task of tasks) {
      taskList.appendChild(createTaskElement(task));
    }
  }

  function addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const task = { id: makeId(), text: trimmed };
    tasks.push(task);
    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
  }

  function removeTask(taskId) {
    tasks = tasks.filter((t) => t.id !== taskId);
    saveTasks();
    renderTasks();
  }

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(taskInput.value);
  });

  // Cargar al iniciar
  loadTasks();

  // Si no había tareas guardadas, mostramos ejemplos para que la vista
  // coincida mejor con la referencia.
  if (tasks.length === 0) {
    tasks = ["Tarea 1", "Tarea 2", "Tarea 3"].map((text) => ({
      id: makeId(),
      text,
    }));
    saveTasks();
  }

  renderTasks();
})();

