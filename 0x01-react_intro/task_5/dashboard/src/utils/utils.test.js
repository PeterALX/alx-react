import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";
test("testing getFullYear", () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});
test("testing getFooterCopy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});
test("testing getLatestNotification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
