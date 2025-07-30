import time
from seleniumbase import SB
from bs4 import BeautifulSoup

with SB(uc=True, incognito=False, headless=False) as sb: 
    email_field = 'input[placeholder="Email"]'
    ##input_field3 = 'input[id="uid_34"]'
    submit_button = 'button:contains("Enter now")'
    
    for i in range(3):
        sb.driver.uc_open_with_reconnect("https://raffle.undefeated.com/en-US/launch/undefeated-x-jordan-aj-4-retro-global-online-raffle", 10)
        sb.type(email_field, "armg296@gmail.com")
        ##time.sleep(4)

     
    ##sb.type(input_field3, "Xugboz-tinsed-gemsa6")
    sb.uc_click(submit_button, reconnect_time=4)

