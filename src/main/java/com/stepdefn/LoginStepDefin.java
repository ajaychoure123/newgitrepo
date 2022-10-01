package com.stepdefn;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefin {

	WebDriver driver=null;
	
	@Before //before every scenario
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\lenovo\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");
		 driver=new ChromeDriver();
	}
	
	@After //after ever scenario
	public void teardown() {
		driver.close();
	}
	 
	 @Given("^user on login page$")
	 public void user_on_login_page() {
	    
		 driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
		 
		 driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
	 }

	 @When("^user enter \"([^\"]*)\"and \"([^\"]*)\"$")
	 public void user_enter_and(String uname, String pass) throws Throwable {
	     
		 driver.findElement(By.xpath("//*[@name='username']")).sendKeys(uname);
		 driver.findElement(By.xpath("//*[@name='password']")).sendKeys(pass);
		 driver.findElement(By.xpath("//*[@type='submit']")).click();
		  
		 
	 }

	 @Then("^user should be on homepage$")
	 public void user_should_be_on_homepage() {
	     
		 Assert.assertEquals("OrangeHRM",driver.getTitle());
	
}
	 @Then("^user should see OrangeHRM Logo$")
	 public void user_should_see_OrangeHRM_Logo() throws Throwable {

		 WebElement logo=driver.findElement(By.tagName("img"));
		 
		 Assert.assertTrue(logo.isDisplayed());
	 }

}