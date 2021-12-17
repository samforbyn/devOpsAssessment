
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('Draw Button shows up when page loads', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const displayed = await drawBtn.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('See all Bots button shows on page load', async () => {
    const seeAll = await driver.findElement(By.id('see-all'))
    const displayed = await seeAll.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})