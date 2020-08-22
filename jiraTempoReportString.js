const getReport = (date) => {
  const currentDateColumn = document.getElementById(date).children[0];
  const completedTasks = Array.from(currentDateColumn.children)
    .filter((_, i, tasks) => i !== 0 && i !== tasks.length - 1)
    .map((task) => task.children[0])
    .map((card) => card.children[0])
    .map((header) => header.children[1])
    .map((comment) => comment.title)
    .map((title) => title.charAt(0).toLowerCase() + title.slice(1))
    .join(', ');
  const firstLetter = completedTasks.charAt(0);
  return completedTasks.replace(firstLetter, firstLetter.toUpperCase());
};

const currentDate = new Date().toISOString().slice(0, 10);
console.log(getReport(currentDate));