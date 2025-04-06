const tasksData = [
  { id: 1, title: "Задача 1", status: "Выполнена" },
  { id: 2, title: "Задача 2", status: "В процессе" },
  { id: 3, title: "Задача 3", status: "Не начата" },
  { id: 4, title: "Задача 4", status: "Выполнена" },
  { id: 5, title: "Задача 5", status: "Выполнена" },
  { id: 6, title: "Задача 6", status: "В процессе" },
  { id: 7, title: "Задача 7", status: "Ждет согласования" },
  { id: 8, title: "Задача 8", status: "Ждет согласования" },
  { id: 9, title: "Задача 9", status: "Не одобрена" },
  { id: 10, title: "Задача 10", status: "Ждет согласования" },
];
// Функция для отображения данных в таблице
function displayTasks() {
  const tableBody = document.querySelector("#tasksTable tbody");
  tasksData.forEach((task) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${task.id}</td>
          <td>${task.title}</td>
          <td>${task.status}</td>`;
    tableBody.appendChild(row);
  });
}
// Функция для построения графика
function renderChart() {
  const statusCounts = tasksData.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  const chart = new Chart(
    document.getElementById("tasksChart").getContext("2d"),
    {
      type: "doughnut",
      data: {
        labels: Object.keys(statusCounts),
        datasets: [
          {
            label: "Количество задач по статусу",
            data: Object.values(statusCounts),
            backgroundColor: [
              "rgb(8, 209, 15)",
              "rgb(238, 241, 8)",
              "rgb(247, 83, 7)",
              "rgb(11, 171, 246)",
              "rgb(73, 9, 222)",
            ],
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true /* график будет масштабирован */,
        maintainAspectRatio: false /* график забывает о своих пропорциях */,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    }
  );
}
// Инициализация
$(document).ready(function () {
  displayTasks();
  renderChart();
});
