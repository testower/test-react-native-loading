# How to reproduce

Requirements:

  * yarn
  * Node v10
  * react-native-cli

In one terminal:

    cd react-app
    yarn && yarn start

In another terminal

    cd nativeapp
    yarn && react-native run-ios

When iOS simulator has loaded, press ⌘D and press "Start remote JS Debugging". Open the console in Developer tools in chrome when the debugger window opens there.

Follow the console while clicking the link that shows up in the webview on the simulator.
