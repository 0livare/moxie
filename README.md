# Moxie

### Preparing your project

Download npm dependencies:

```sh
npm i -g react-native-cli
npm install
react-native link react-native-svg
```

### Running your project

From project dir, run:

#### iOS
1. Run the packager

	```
	npm run start
	```
	

2. Open the project in xcode from `ios/moxie.xcodeproj`
3. Build and run from Xcode

#### Android
1. Start an emulator
2. Build and run

	```sh
	react-native run-android
	```
	This would also start a packager if not already started


3. Set your Emulator to live reload changes `⌘`+`m`  (`cmd`+`m`) => `Enable Hot Reloading`

---

To open packager manually, from project dir run:

```sh
react-native start
```

