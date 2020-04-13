module.exports = async (selector, text) => {
  await page.waitForFunction(
    `document.querySelector("${selector}").innerText.includes("${text}")`,
  );
};
