import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Platform } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    circle: {
      position: 'absolute',
      borderRadius: 999,
      opacity: 0.1,
    },
    circle1: {
      width: 200,
      height: 200,
      backgroundColor: '#667EEA',
      top: height * 0.1,
      right: -100,
    },
    circle2: {
      width: 150,
      height: 150,
      backgroundColor: '#764BA2',
      bottom: height * 0.2,
      left: -75,
    },
    circle3: {
      width: 100,
      height: 100,
      backgroundColor: '#F093FB',
      top: height * 0.3,
      left: width * 0.2,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
      paddingTop: Platform.OS === 'ios' ? 60 : 40,
    },
    logoContainer: {
      marginBottom: 40,
      alignItems: 'center',
    },
    logoWrapper: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 80,
      height: 76,
      zIndex: 2,
    },
    logoGlow: {
      position: 'absolute',
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#667EEA',
      opacity: 0.3,
      shadowColor: '#667EEA',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
      elevation: 20,
    },
    textContainer: {
      alignItems: 'center',
      marginBottom: 50,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 12,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '500',
      color: '#A0AEC0',
      textAlign: 'center',
      marginBottom: 16,
      letterSpacing: 0.2,
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      color: '#718096',
      textAlign: 'center',
      lineHeight: 24,
      paddingHorizontal: 20,
    },
    button: {
      marginBottom: 40,
      borderRadius: 30,
      shadowColor: '#667EEA',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    buttonConnecting: {
      shadowOpacity: 0.1,
    },
    buttonGradient: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      paddingHorizontal: 32,
      borderRadius: 30,
      minWidth: 260,
    },
    activityIndicator: {
      marginRight: 12,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
      letterSpacing: 0.5,
    },
    features: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingHorizontal: 20,
    },
    feature: {
      alignItems: 'center',
      flex: 1,
    },
    featureIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    featureIconText: {
      fontSize: 20,
    },
    featureText: {
      fontSize: 12,
      fontWeight: '500',
      color: '#A0AEC0',
      textAlign: 'center',
      letterSpacing: 0.3,
    },
  });
  

export default styles;