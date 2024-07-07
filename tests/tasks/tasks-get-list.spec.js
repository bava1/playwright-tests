// @ts-check
const { test } = require('@playwright/test');

test('tasks-get-list', async ({ page }) => {

	await page.waitForTimeout(1000);
  await page.goto('http://vuetex.ba-va.eu/#/tasks');

	// Waiting for all tasks to load
	await page.waitForSelector('.tasks-block_area-task');

	// Getting all task elements
	const tasks = await page.$$('.tasks-block_area-task');

  console.log(`Total number of tasks: ${tasks.length}`);

  // Enumerating all tasks and outputting their text to the console
  for (const task of tasks) {
    const taskText = await task.$eval('.tasks-block_area-task_text > div', el => el.textContent || '');
    console.log(`Task: ${taskText.trim()}`);
  }

});
