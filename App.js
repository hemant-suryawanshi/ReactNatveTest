/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {
  Button,
  Linking,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {WebView} from 'react-native-webview';

const App = () => {
  const [text, onChangeText] = React.useState('');
  const [state, setState] = React.useState(false);

  const userAgent =
    'Mozilla/5.0 (Linux; An33qdroid 10; Android SDK built for x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.185 Mobile Safari/537.36';
  const url = 'https://getkyc.syntizen.com/d=XNFPqTsPPcck';

  useEffect(() => {
    cameraPermission();
    micPermission();
  }, []);

  const cameraPermission = async () => {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs access to your camera ' + 'so others can see you.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  };

  const micPermission = async () => {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Audio Permission',
        message: 'App needs access to your audio / microphone',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Microphone');
    } else {
      console.log('Microphone permission denied');
    }
  };

  return (
    <View style={styles.container}>
      {!state && (
        <>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Enter the url"
            value={text}
          />
          <Button
            title="Press me"
            color="#1167b1"
            // style={styles.button}
            onPress={() => setState(!state)}
          />
        </>
      )}
      {state && (
        <WebView
          onLoadStart={() => {
            console.log('Start');
          }}
          userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
          source={{uri: text}}
          originWhitelist={['*']}
          allowsInlineMediaPlayback
          javaScriptEnabled
          scalesPageToFit
          allowInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState
          onNavigationStateChange={val => {
            console.log('========sdfsdfdsfsd', val);
          }}
          style={styles.video}
          javaScriptEnabledAndroid
          geolocationEnabled={true}
          useWebkit
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  video: {
    marginTop: 20,
    maxHeight: 1000,
    width: 390,
    flex: 1,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 'auto',
    borderWidth: 1,
    // border: '1px solid gray',
    // marginBottom:"100px"
  },
  // button: {
  //   width: '80%',
  // },
});

export default App;
