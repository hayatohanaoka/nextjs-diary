import { test, expect } from "@playwright/test";
import assert from "node:assert";
import { assertHeader } from "../../common/common";

test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる",async ({ page }) => {
  await assertHeader("/diary", "日記帳アプリ", page);
})

test("ユーザーはタイトル下部のリンクから適切なページに遷移することができる", async ({ page }) => {
	const expectedShowPageLinkText   = "閲覧";
	const expectedCreatePageLinkText = "作成";
	const expectedDeletePageLinkText = "削除";
	const expectedUpdatePageLinkText = "編集";
	
	const expectedShowLinkUrl   = "/diary/show";
	const expectedCreateLinkUrl = "/diary/create";
	const expectedDeleteLinkUrl = "/diary/delete";
	const expectedUpdateLinkUrl = "/diary/update";
	
	await page.goto("/diary");
	const showDiaryLinkElem   = await page.locator("[data-test-id='showLink']");
	const createDiaryLinkElem = await page.locator("[data-test-id='createLink']");
	const deleteDiaryLinkElem = await page.locator("[data-test-id='deleteLink']");
	const updateDiaryLinkElem = await page.locator("[data-test-id='updateLink']");

	await expect(showDiaryLinkElem).toHaveText(expectedShowPageLinkText);
	await expect(createDiaryLinkElem).toHaveText(expectedCreatePageLinkText);
	await expect(deleteDiaryLinkElem).toHaveText(expectedDeletePageLinkText);
	await expect(updateDiaryLinkElem).toHaveText(expectedUpdatePageLinkText);

	await expect(showDiaryLinkElem).toHaveAttribute("href", expectedShowLinkUrl);
	await expect(createDiaryLinkElem).toHaveAttribute("href", expectedCreateLinkUrl);
	await expect(deleteDiaryLinkElem).toHaveAttribute("href", expectedDeleteLinkUrl);
	await expect(updateDiaryLinkElem).toHaveAttribute("href", expectedUpdateLinkUrl);
})