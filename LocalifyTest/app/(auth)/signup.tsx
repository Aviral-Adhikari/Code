import React, { useState } from "react";
import { router } from "expo-router";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SignupScreen() {
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Logo</Text>
        </View>

        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} autoCapitalize="words" />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} autoCapitalize="none" keyboardType="email-address" />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} secureTextEntry />
        </View>

        <TouchableOpacity
          style={styles.checkRow}
          activeOpacity={0.85}
          onPress={() => setAgree((v) => !v)}>
          <Ionicons name={agree ? "checkbox-outline" : "square-outline"} size={16} color="#111" />
          <Text style={styles.checkText}>I agree to all Terms and Condition</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerTabs}>
        <TouchableOpacity
          style={styles.footerTab}
          activeOpacity={0.9}
          onPress={() => router.replace("/(auth)/login")}>
          <Text style={styles.footerTabText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerTab, styles.footerTabActive]} activeOpacity={0.9}>
          <Text style={[styles.footerTabText, styles.footerTabTextActive]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 28,
    justifyContent: "space-between",
  },
  content: {
    gap: 18,
  },
  logoBox: {
    width: 92,
    height: 48,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#F9FAFB",
  },
  logoText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111",
    marginTop: 6,
  },
  field: {
    gap: 8,
  },
  label: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: "600",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#111",
    paddingVertical: 10,
    fontSize: 14,
    color: "#111",
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },
  checkText: {
    fontSize: 12,
    color: "#111",
    fontWeight: "600",
    flex: 1,
  },
  primaryButton: {
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#E5E7EB",
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 24,
  },
  primaryButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#111",
  },
  footerTabs: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    padding: 4,
  },
  footerTab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  footerTabActive: {
    backgroundColor: "#FFFFFF",
  },
  footerTabText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6B7280",
  },
  footerTabTextActive: {
    color: "#111",
  },
});
