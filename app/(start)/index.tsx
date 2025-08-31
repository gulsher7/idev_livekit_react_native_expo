import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';



export default function StartScreen() {
  const router = useRouter();
  const [isConnecting, setConnecting] = useState(false);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(logoScale, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    // Pulse animation for logo
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );
    pulseAnimation.start();

    return () => pulseAnimation.stop();
  }, []);



  const getToken = async () => {
    try {
      setConnecting(true);
      const result = await axios.get("https://6ff5b14ed404.ngrok-free.app/getToken");
      console.log("result", result.data);


      setTimeout(() => {
        setConnecting(false)
        router.push({
          pathname: "/assistant",
          params: { token: result.data },
        });
      }, 500);
    } catch (error) {
      setConnecting(false);
      console.error("Connection error:", error);
    }
  };

  const connectText = isConnecting ? 'Connecting...' : 'Start Voice Assistant';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Background Gradient */}
      <LinearGradient
        colors={['#0A0A0F', '#1A1A2E', '#16213E']}
        style={styles.gradient}
        locations={[0, 0.6, 1]}
      />
      
      {/* Animated Background Elements */}
      <View style={styles.backgroundElements}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>

      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        {/* Logo Section */}
        <Animated.View 
          style={[
            styles.logoContainer,
            {
              transform: [
                { scale: logoScale },
                { scale: pulseAnim },
              ],
            },
          ]}
        >
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/start-logo.png')}
            />
            <View style={styles.logoGlow} />
          </View>
        </Animated.View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>AI Voice Assistant</Text>
          <Text style={styles.subtitle}>
            Experience the future of conversation
          </Text>
          <Text style={styles.description}>
            Chat live with your intelligent voice AI agent. 
            Natural conversations, instant responses.
          </Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity
          onPress={getToken}
          style={[
            styles.button,
            isConnecting && styles.buttonConnecting,
          ]}
          activeOpacity={0.8}
          disabled={isConnecting}
        >
          <LinearGradient
            colors={isConnecting ? ['#4A5568', '#2D3748'] : ['#667EEA', '#764BA2']}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {isConnecting && (
              <ActivityIndicator
                size="small"
                color="#ffffff"
                style={styles.activityIndicator}
              />
            )}
            <Text style={styles.buttonText}>{connectText}</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Features */}
        <View style={styles.features}>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>🎤</Text>
            </View>
            <Text style={styles.featureText}>Voice Recognition</Text>
          </View>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>⚡</Text>
            </View>
            <Text style={styles.featureText}>Real-time Response</Text>
          </View>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>🧠</Text>
            </View>
            <Text style={styles.featureText}>AI Intelligence</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
