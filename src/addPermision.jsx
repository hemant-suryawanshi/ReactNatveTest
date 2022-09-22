// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import {Platform} from 'react-native';

// const PLATFORM_MICROPHONE_PERMISION = {
//   ios: PERMISSIONS.IOS.MICROPHONE,
//   android: PERMISSIONS.ANDROID.RECORD_AUDIO,
// };

// const REQUEST_PERMISION_TYPE = {
//   microphone: PLATFORM_MICROPHONE_PERMISION,
// };

// const PERMISION_TYPE = {
//   microphone: 'microphone',
// };

// class AppPermision {
//   checkPermision = async (type): Promise<boolean> => {
//     const permisions = REQUEST_PERMISION_TYPE[type][Platform.OS];
//     if (!permisions) {
//       return true;
//     }

//     try {
//       const result = await check(permisions);
//       if (result == RESULTS.GRANTED) {
//         return true;
//       }
//       return this.requestPermision()
//     } catch (err) {
//       return false;
//     }
//   };

//   requestPermision = async (permisions): Promise<boolean> => {
//     try {
//       const result = await request(permisions);
//       return result === RESULTS.GRANTED;
//     } catch (err) {
//       return false;
//     }
//   };
// }


// const permision = new AppPermision()

// export {permision,PERMISION_TYPE}