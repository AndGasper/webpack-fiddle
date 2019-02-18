Some days I'm in my yeezy's
Some days I'm in my vans



I don't think the jest configs belong in the package.json. 
If the package.json is meant to be a manifest of the application's dependencies, then I'd argue that runtime configurations (wording?) do not belong in such a manifest.

Perhaps a structure like the webpack listing style or gradle build files for specifying the test environment?


Hmm.. Added complexity of having the test files in "non-standard" locations 

https://github.com/facebook/jest/issues/3613