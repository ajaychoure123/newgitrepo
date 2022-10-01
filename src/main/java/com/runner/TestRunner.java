package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

 @RunWith(Cucumber.class)
 @CucumberOptions(
		
		 features="src/main/java/com/features",
		 glue="com.stepdefn",
		 plugin="html:target",// TO GENERATE REPORT
		 dryRun=false,// TO CAMPILE FEATURE FILE
		 monochrome=true,// READABLE OUTPUT
		 tags="@HRM2" // TO RUN SPECIFIC SCENARIO
		 )

public class TestRunner {
	 
	// 1 Scenarios ([36m1 skipped[0m)
	// 3 Steps ([36m3 skipped[0m)
	// 0m0.000s

	// 1 Scenarios (1 passed)
	// 3 Steps (3 passed)
	// 0m20.390s

    //2 Scenarios (2 passed)
	// 5 Steps (5 passed)
	// 0m29.189s

	 }



