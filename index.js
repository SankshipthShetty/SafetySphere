/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


AppRegistry.registerComponent(appName, () => App);

const  firebaseConfig = {
    apiKey:"AIzaSyBic2-y5FRIwfp2_JRit0KZLt_3uOmAr7A",
    projectId:"safetysphere-8faeb",
    storage_bucket: "safetysphere-8faeb.appspot.com",
    mobilesdk_app_id: "1:149462374658:android:1ce1df718f23b7f9048a1b"
}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);