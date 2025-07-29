import { test, expect } from "@playwright/test";

test("the Hero Classes grid has 6 buttons", async ({ page }) => {
  await page.goto("/");

  const classGrid = page.getByRole("grid", {
    name: "Hero Classes",
  });

  await expect(classGrid).toBeVisible();
  const items = classGrid.getByRole("link");
  await expect(items).toHaveCount(6);

  await expect(classGrid).toHaveScreenshot("class-grid.png");
});
