import React, { useRef } from 'react';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';

const SafetyMeasures = () => {
  // Refs for each section container
  const earthquakeRef = useRef(null);
  const fireRef = useRef(null);
  const theftRef = useRef(null);
  const heartAttackRef = useRef(null);
  const accidentRef = useRef(null);
  const floodRef = useRef(null);
  const firstAidRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    setImmediate(() => ref.current.scrollIntoView({ inline: "center", }));
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Safety Measures</Text>
        <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
                <Button title="Earthquake Safety Measures" onPress={() => scrollToSection(earthquakeRef)} />
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Fire Safety Measures" onPress={() => scrollToSection(fireRef)} />      
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Theft Safety Measures" onPress={() => scrollToSection(theftRef)} />  
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Heart Attack Safety Measures" onPress={() => scrollToSection(heartAttackRef)} />  
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Accident Safety Measures" onPress={() => scrollToSection(accidentRef)} />     
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Flood Safety Measures" onPress={() => scrollToSection(floodRef)} />   
            </View>
            <View style={styles.buttonWrapper}>
            <Button title="First Aid Safety Measures" onPress={() => scrollToSection(firstAidRef)} />      
            </View>
        </View>


      <View ref={earthquakeRef} style={[styles.sectionContainer, styles.border]}>
        <Text style={styles.sectionTitle}>1. Earthquake Safety Measures</Text>
            <Text>- Drop, Cover, and Hold On</Text>
            <Text>- Stay indoors and away from windows</Text>
            <Text>- If outdoors, move to an open area away from buildings</Text>
            <Text>- Stay away from heavy furniture or appliances that may fall</Text>
            <Text>- Be prepared for aftershocks</Text>
            <Text>- Have an emergency kit with food, water, and supplies</Text>
            <Text>- Know the safe spots in each room of your home</Text>
            <Text>- Plan evacuation routes from your home and workplace</Text>
            <Text>- Practice earthquake drills regularly</Text>
            <Text>- Secure heavy items and furniture to prevent them from falling</Text>
      </View>

      <View ref={fireRef} style={[styles.sectionContainer, styles.border]}>
        <Text style={styles.sectionTitle}>2. Fire Safety Measures</Text>
            <Text>- Install smoke alarms on every level of your home</Text>
            <Text>- Test smoke alarms monthly and replace batteries as needed</Text>
            <Text>- Create a fire escape plan and practice it with your family</Text>
            <Text>- Teach children how to escape in case of fire</Text>
            <Text>- Keep flammable materials away from heat sources</Text>
            <Text>- Never leave cooking unattended</Text>
            <Text>- Keep space heaters at least three feet away from anything that can burn</Text>
            <Text>- Store matches and lighters out of reach of children</Text>
            <Text>- Install fire extinguishers in key areas of your home</Text>
            <Text>- Close doors behind you as you escape to slow the spread of fire</Text>
      </View>

      <View ref={theftRef} style={[styles.sectionContainer, styles.border]}>
        <Text style={styles.sectionTitle}>3. Theft Safety Measures</Text>
            <Text>- Install a home security system</Text>
            <Text>- Use strong and unique passwords for online accounts</Text>
            <Text>- Lock doors and windows when leaving home</Text>
            <Text>- Keep valuables out of sight</Text>
            <Text>- Avoid leaving keys or personal items unattended</Text>
            <Text>- Be cautious of sharing personal information online</Text>
            <Text>- Report any suspicious activity to authorities</Text>
            <Text>- Keep important documents in a secure location</Text>
            <Text>- Mark valuable items with identifying information</Text>
            <Text>- Consider joining a neighborhood watch program</Text>
      </View>

      <View ref={heartAttackRef} style={[styles.sectionContainer, styles.border]}>
        <Text style={styles.sectionTitle}>4. Heart Attack Safety Measures</Text>
            <Text>- Recognize the signs and symptoms of a heart attack</Text>
            <Text>- Call emergency services immediately if you suspect a heart attack</Text>
            <Text>- Assist the person in finding a comfortable position</Text>
            <Text>- Administer CPR if trained and necessary</Text>
            <Text>- Stay with the person until help arrives</Text>
            <Text>- Encourage the person to take prescribed medication if available</Text>
            <Text>- Keep the person calm and reassure them</Text>
            <Text>- Do not give the person anything to eat or drink unless instructed by medical professionals</Text>
            <Text>- Be prepared to provide information to emergency responders</Text>
            <Text>- Follow up with medical care as advised</Text>
        </View>

      <View ref={accidentRef} style={[styles.sectionContainer, styles.border]}>
        <Text style={styles.sectionTitle}>5. Accident Safety Measures</Text>
            <Text>- Wear seat belts while driving or riding in a vehicle</Text>
            <Text>- Obey traffic laws and signals</Text>
            <Text>- Avoid distractions such as texting while driving</Text>
            <Text>- Use protective gear when engaging in activities such as cycling or skating</Text>
            <Text>- Keep emergency contact information easily accessible</Text>
            <Text>- Stay alert and aware of your surroundings</Text>
            <Text>- Avoid risky behaviors such as driving under the influence of alcohol or drugs</Text>
            <Text>- Follow safety guidelines when using tools or machinery</Text>
            <Text>- Practice safe swimming and water safety measures</Text>
            <Text>- Know basic first aid techniques</Text>
      </View>

      <View ref={floodRef} style={[styles.sectionContainer, styles.border]}>
        <Text style={styles.sectionTitle}>6. Flood Safety Measures</Text>
            <Text>- Stay informed about weather conditions and flood risks in your area</Text>
            <Text>- Have an emergency kit with essential supplies</Text>
            <Text>- Keep important documents in a waterproof container</Text>
            <Text>- Elevate electrical appliances and utilities</Text>
            <Text>- Avoid walking or driving through flooded areas</Text>
            <Text>- Follow evacuation orders if issued</Text>
            <Text>- Turn off utilities if instructed to do so</Text>
            <Text>- Seek higher ground during a flood</Text>
            <Text>- Monitor local news and radio for updates</Text>
            <Text>- Do not enter floodwaters or areas with standing water</Text>
      </View>

      <View ref={firstAidRef} style={[styles.sectionContainer, styles.border]}>
        <Text style={styles.sectionTitle}>7. First Aid Safety Measures</Text>
            <Text>- Take a first aid course to learn basic lifesaving skills</Text>
            <Text>- Keep a first aid kit in your home and car</Text>
            <Text>- Learn how to treat common injuries such as cuts, burns, and sprains</Text>
            <Text>- Know when to call for emergency assistance</Text>
            <Text>- Stay calm and assess the situation before providing aid</Text>
            <Text>- Keep emergency phone numbers and contacts readily available</Text>
            <Text>- Use personal protective equipment when providing first aid</Text>
            <Text>- Keep first aid supplies well-stocked and up-to-date</Text>
            <Text>- Provide comfort and reassurance to the injured person</Text>
            <Text>- Attend regular first aid refresher courses to maintain skills</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionContainer: {
    marginBottom: 24,
    padding: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'darkblue',
  },
  buttonContainer: {
    marginBottom: 15,
    
  },
  buttonWrapper: {
    marginBottom: 10,
    borderRadius: 10, // Adjust margin between buttons as needed
    overflow: 'hidden',
    
  },
});

export default SafetyMeasures;
