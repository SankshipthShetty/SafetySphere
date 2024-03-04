/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {FIREBASE_API,FIREBASE_PID,FIREBASE_STORAGE_BUCKET,FIRBASE_MOBILEID} from '@env'

AppRegistry.registerComponent(appName, () => App);

const  firebaseConfig = {
    apiKey:FIREBASE_API,
    projectId:FIREBASE_PID,
    storage_bucket: FIREBASE_STORAGE_BUCKET,
    mobilesdk_app_id: FIRBASE_MOBILEID
}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
