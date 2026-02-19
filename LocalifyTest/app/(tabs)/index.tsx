import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function LocalifyDashboard() {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.exploring}>📍 Exploring</Text>
            <Text style={styles.location}>Kathmandu</Text>
          </View>
          <Ionicons name="person-circle-outline" size={36} color="#333" />
        </View>

        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search places, food, hotels"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.filterBtn} activeOpacity={0.85}>
            <Ionicons name="options-outline" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://github.com/ificodeinclusive/ificodeweb/blob/main/images/banner.png?raw=true",
          }}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.categoryWrap}>
          {["Hotels", "Food", "Experiences", "Markets", "Nature", "Hidden Gems"].map((item) => (
            <TouchableOpacity key={item} style={styles.categoryPill} activeOpacity={0.85}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Hidden Gems Near You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PlaceCard title="Kispang Gaupali" />
          <PlaceCard title="Rani Jhula" />
          <PlaceCard title="Manichud Daha" />
        </ScrollView>

        <Text style={styles.sectionTitle}>Loved by Locals</Text>
        <PlaceCard title="Sunrise at Nagarkot" full />
        <PlaceCard title="Narayanhiti Palace" full />

        <Text style={styles.sectionTitle}>Local Food Places</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PlaceCard title="Honacha Bhatti" />
          <PlaceCard title="Newari Bhoj Ghar" />
          <PlaceCard title="Thakali Kitchen" />
        </ScrollView>

        <View style={styles.mapCard}>
          <Text style={styles.mapTitle}>Discover on Map</Text>
          <TouchableOpacity style={styles.mapButton} activeOpacity={0.9}>
            <Ionicons name="map-outline" size={18} color="#fff" />
            <Text style={styles.mapButtonText}> Open Full Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavItem icon="home" label="Home" active />
        <NavItem icon="compass" label="Explore" />
        <NavItem icon="settings" label="Setting" />
      </View>
    </View>
  );
}

function PlaceCard({ title, full }: { title: string; full?: boolean }) {
  return (
    <View style={[styles.placeCard, full ? styles.placeCardFull : undefined]}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.placeTitle}>{title}</Text>
      <Text style={styles.placeDesc}>Place description</Text>
    </View>
  );
}

function NavItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <View style={styles.navItem}>
      <Ionicons name={icon} size={22} color={active ? "#2563EB" : "#777"} />
      <Text style={[styles.navText, active ? styles.activeText : undefined]}>{label}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 110,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  exploring: {
    fontSize: 12,
    color: "#777",
  },
  location: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  searchRow: {
    flexDirection: "row",
    marginVertical: 15,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    elevation: 2,
  },
  filterBtn: {
    marginLeft: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    borderRadius: 14,
    justifyContent: "center",
    elevation: 2,
  },
  heroImage: {
    width: "100%",
    height: 160,
    borderRadius: 18,
    marginBottom: 15,
    backgroundColor: "#E5E7EB",
  },
  categoryWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  categoryPill: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 1,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111",
  },
  placeCard: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginRight: 12,
    elevation: 2,
    marginBottom: 10,
  },
  placeCardFull: {
    width: "100%",
    marginRight: 0,
  },
  imagePlaceholder: {
    height: 80,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    marginBottom: 8,
  },
  placeTitle: {
    fontWeight: "700",
    color: "#111",
  },
  placeDesc: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
  mapCard: {
    backgroundColor: "#E8F1FF",
    padding: 18,
    borderRadius: 16,
    marginVertical: 20,
    alignItems: "center",
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },
  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
  },
  mapButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  bottomNav: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 12,
    elevation: 6,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  navText: {
    fontSize: 12,
    color: "#777",
    fontWeight: "600",
  },
  activeText: {
    color: "#2563EB",
  },
});
