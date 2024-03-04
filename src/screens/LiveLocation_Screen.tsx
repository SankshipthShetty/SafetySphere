import React,{useState,useRef, useEffect} from 'react'
import MapView, {PROVIDER_GOOGLE,LatLng, Marker} from 'react-native-maps';
import { Dimensions, StyleSheet, View,SafeAreaView,Text, TouchableOpacity,Linking} from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API} from '../../mapapi';
import MapViewDirections from 'react-native-maps-directions';
import GetLocation from 'react-native-get-location'
import SendSMS, { AndroidSuccessTypes } from 'react-native-sms'


const{width,height}=Dimensions.get("window");
const ASPECT_RATIO=width/height;
const LATITUDE_DELTA=0.02;
const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO;
const INITIAL_POSITION={
  latitude: 12.867077,
  longitude: 74.925747,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};


type InputAutoCompleteProps={
  label:string,
  placeholder?:string,
  onPlaceSelected:(details:GooglePlaceDetail | null)=>void,
};

function InputAutoComplete({
  label,
  placeholder,
  onPlaceSelected,
}:InputAutoCompleteProps) {
  return (
    <>
    <Text style={styles.label}>{label}</Text>
      <GooglePlacesAutocomplete
      styles={{textInput:styles.input,rowText: styles.rowText}}
      placeholder={placeholder || ""}
      fetchDetails
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        onPlaceSelected(details);
        // console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAPS_API,
        language: 'en',
      }}
      onFail={(error) => {
        console.error('Autocomplete failed:', error);
      }}
      renderRow={(rowData) => (
        <Text style={styles.rowText}>{rowData.description}</Text> // Style the text color here
      )}
      />
      </>
  );
      }

const LiveLocationScreen= ()=>{
  const [origin, setOrigin] = useState<LatLng | null>()
  const [destination, setDestination] = useState<LatLng| null>()
  const [showDirections, setShowDirections] = useState(false)  
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [warningVisible, setWarningVisible] = useState(false);
  const [safewarningVisible, setsafeWarningVisible] = useState(false); // State to track warning visibility
  const [trackingMode, setTrackingMode] = useState(false);
  const mapRef=useRef<MapView>(null);

  const toggleTrackingMode = () => {
    setTrackingMode(!trackingMode);
    setWarningVisible(!trackingMode);
    setsafeWarningVisible(!trackingMode);
  };
 

  const moveTo= async (position:LatLng)=>{
const camera=await mapRef.current?.getCamera();
if (camera){
  camera.center=position;
  mapRef.current?.animateCamera(camera,{duration:1000});
}
  };
  const calculateDistance = (point1: LatLng, point2: LatLng) => {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = point1.latitude * Math.PI / 180;
    const lon1 = point1.longitude * Math.PI / 180;
    const lat2 = point2.latitude * Math.PI / 180;
    const lon2 = point2.longitude * Math.PI / 180;
    const dLon = lon2 - lon1;
    const dLat = lat2 - lat1;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const sendalert=()=>{
      SendSMS.send({
        body: 'Hi Arpan, I am in danger. Please help me. My current location is: 12.867077, 74.925747. Please help me as soon as possible.',
        recipients: ['+91 8848609637'],
        successTypes: ['sent' as AndroidSuccessTypes, 'queued' as AndroidSuccessTypes],
        allowAndroidSendWithoutReadPermission: true
      }, (completed, cancelled, error) => {
        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
      });
    }
      const getCurrentLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: false, //reduced the accuracy for syncing fast
        timeout:  1000,
        
      });
      
      console.log(location);
      setCurrentLocation({ latitude: location.latitude, longitude: location.longitude });
      if (origin && destination && trackingMode) {
        const routeDistance = calculateDistance(origin, destination);
        const currentDistance = calculateDistance({ latitude: location.latitude, longitude: location.longitude }, destination);
        // If current distance from destination exceeds a certain threshold, show warning
        setWarningVisible(currentDistance > routeDistance);
      }
    } catch (error) {
      console.warn('Error getting current location:', error);
    }
  };


  //UNCOMMENT LATER <<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------------
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getCurrentLocation();
  //   },2000);
  //   getCurrentLocation();
  //   return () => clearInterval(interval);
  // }, []);
//<<<<<<<<<<<<<<<<<<<<<<------------------------------------------------------------


  const edgePaddingValue=70
  const edgePadding={
  top:edgePaddingValue,
  right:edgePaddingValue,
  bottom:edgePaddingValue,
  left:edgePaddingValue,
  }
 
  
  const traceRouteonReady=(args:any)=>{
    if(args){

      setDistance(args.distance)
      setDuration(args.duration)

    }
  }
  const traceRoute=()=>{ 
    if(origin && destination){
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin,destination],{edgePadding})
    }
  };
  const onPlaceSelected = (details: GooglePlaceDetail | null, flag: "origin" | "destination") => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  //-----------------test---------------------------
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 60000,
  // })
  // .then(location => {
  //     console.log(location);
  //     console.log(location.latitude,location.longitude);
  //     // const emergencymail="sankshipthshetty@gmail.com"
  //     // const emailBody = `Hey there!\n\nI'm currently at latitude: ${location.latitude}, longitude: ${location.longitude}. Check out my location on the map!\n\nRegards,`;
  //     // // Open email client with pre-filled email body
  //     // Linking.openURL(`mailto:${emergencymail}?body=${emailBody}`);
  // })
  // .catch(error => {
  //     const { code, message } = error;
  //     console.warn(code, message);
  // })
//------------------test-----------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentLocation();
    }, 2000);
    // getCurrentLocation(); // Initial call to getCurrentLocation
    return () => clearInterval(interval);
  }, [trackingMode]);

return (
  <View style={styles.container}>
    <MapView ref={mapRef} style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION} >
      {origin && <Marker coordinate={origin}/>}
      {destination && <Marker coordinate={destination}/>}
      {showDirections && origin && destination &&<MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_API}
        strokeColor='#6644ff'
        strokeWidth={4}
        onReady={traceRouteonReady}
      />}
      {currentLocation && <Marker coordinate={currentLocation} pinColor="#007bff" />}
    </MapView>

    <View style={styles.searchContainer}>
      <>
        <InputAutoComplete label="Origin" onPlaceSelected={(details)=>{onPlaceSelected(details,"origin")}}/>
        <InputAutoComplete label="Destination" onPlaceSelected={(details)=>{onPlaceSelected(details,"destination")}}/>
      </>
      <TouchableOpacity style={styles.button} onPress={traceRoute}>
        <Text style={styles.buttontext}>Show route</Text>
      </TouchableOpacity>
      {distance && duration ? (
        <View>
          <Text style={styles.infotext}>Distance: {distance.toFixed(2)} km</Text>
          <Text style={styles.infotext}>Duration: {Math.ceil(duration)} min</Text>
        </View>
      ) : null}
    </View>

    <View style={styles.shareContainer}>
    <TouchableOpacity style={styles.trackButton} onPress={toggleTrackingMode}>
  <Text style={styles.trackButtonText}>{trackingMode ? 'Stop Tracking' : 'Track'}</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.sharebutton} onPress={sendalert}>
        <Text style={styles.sharebuttonText}>Share Live Location</Text>
      </TouchableOpacity>
      {warningVisible && (
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>You are off route!</Text>
        </View>
      )}
      {safewarningVisible && !warningVisible &&  (
        <View style={styles.safeContainer}>
          <Text style={styles.safeText}>You are on route!</Text>
        </View>
      )}
      
    </View>
  </View>
);
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {  
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    top:20,
    left:19,
    width: '90%',
    backgroundColor:"white",
    shadowColor:"black",
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    elevation:4,
    padding:8,
    borderRadius:8,
  },
  input: {
    borderColor:"#888",
    borderWidth:1,
    color:"black",
    
  },
  rowText: {
    color: "black", 
  },
  label:{
    color:"black",
  },
  button:{
    backgroundColor:"#007bff",
    paddingVertical:12,
    marginTop:8,
    borderRadius:8,
  },
  buttontext:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold",
  },
  infotext:{
    color:"black",
    fontWeight:"bold",
  },
  sharebutton:{
    backgroundColor:"#007bff",
    paddingVertical:12,
    marginTop:50,
    borderRadius:8,
  },
  sharebuttonText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold",
  },
  shareContainer: {
    position: 'absolute',
    bottom: 40, // Adjust as needed
    left: 19,
    width: '90%',
    
  },
  trackButton: {
    position: 'absolute',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width:'100%',
  },
  trackButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
 warningContainer: {
    position: 'absolute',
     // Adjust as needed
    
     bottom:120,
    left: 19,
    right: 19,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 8,
    zIndex: 100,
    
  },
  warningText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  safeContainer: {
    position: 'absolute',
     // Adjust as needed
     bottom:120,
    left: 19,
    right: 19,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 8,
    zIndex: 100,
  },
  safeText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default LiveLocationScreen;
