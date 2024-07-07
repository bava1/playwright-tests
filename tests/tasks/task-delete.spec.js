// @ts-check
const { test, expect } = require('@playwright/test');

test('task-delete', async ({ page }) => {

	await page.waitForTimeout(1000);
  await page.goto('http://vuetex.ba-va.eu/#/tasks');

	// Waiting for all tasks to load
	await page.waitForSelector('.tasks-block_area-task');
	// Getting all task elements
	const tasks = await page.$$('.tasks-block_area-task');
	// Displaying the number of tasks in the console before deleting
	console.log(`Number of tasks before deletion: ${tasks.length}`);
	//Delay 3 seconds
	await page.waitForTimeout(3000);
	//Deleting the first task
  await page.click('i.q-icon.text-green-7[role="presentation"]:nth-child(2)');
	//Delay 3 seconds
	await page.waitForTimeout(1000);
	// Getting all task elements
	const tasks2 = await page.$$('.tasks-block_area-task');
	// Displaying the number of tasks in the console after deletion
	console.log(`Number of tasks after removal: ${tasks2.length}`);

});
