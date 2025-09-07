import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_join";  // ✅ use shared join styles
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGO } from "@/constants";

export default function SignIn() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top nav */}
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
          <Image source={HEROLOGO} />
        </View>

        {/* Title */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in to your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to sign in.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.formControl} />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        {/* Primary button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don’t have an account? </Text>
          <Text 
            style={styles.signupSubTitleText} 
            onPress={() => router.push("/join")}
          >
            Join now
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
