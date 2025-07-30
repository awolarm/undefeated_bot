import time
from seleniumbase import SB
from bs4 import BeautifulSoup

with SB(uc=True, headless=False) as sb: 
    email_field = 'input[id="email"]'
    input_field3 = 'button:contains("Continue")'
    submit_button = 'button:contains("Enter now")'
    
    for i in range(3):
        sb.driver.uc_open_with_reconnect("https://raffle.undefeated.com/en-US/launch/undefeated-x-jordan-aj-4-retro-global-online-raffle", 10)
        sb.uc_click(submit_button, reconnect_time=4)
        sb.type(email_field, "armg296@gmail.com")
        sb.uc_click(input_field3)
        
        ##time.sleep(4)

     
    ##sb.type(input_field3, "Xugboz-tinsed-gemsa6")

