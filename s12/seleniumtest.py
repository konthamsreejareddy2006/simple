from selenium import webdriver

driver = webdriver.Chrome()

driver.get("https://www.python.org")

print("Page Title:", driver.title)

driver.quit()