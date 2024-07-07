// @ts-check
const { test, expect } = require('@playwright/test');

test('task-add', async ({ page }) => {

	await page.waitForTimeout(1000);
  await page.goto('http://vuetex.ba-va.eu/#/tasks');

	// Waiting for all tasks to load
	await page.waitForSelector('.tasks-block_area-task');

	// Getting all task elements
	const tasks = await page.$$('.tasks-block_area-task');

	// Displaying the number of tasks in the console
	console.log(`Number of tasks before adding: ${tasks.length}`);

  // Entering text in an input field
  await page.fill('input[aria-label="Task text"]', 'add playwright test task');

  // Clicking the "Add task" button
  await page.click('button:has-text("Add task")');

  // Wait a bit for the new task to appear in the list
  await page.waitForTimeout(1000);

  // Getting all task elements
  const tasksAdd = await page.$$('.tasks-block_area-task');

  // Outputting the updated number of tasks to the console
  console.log(`Number of tasks after adding: ${tasksAdd.length}`);


});
