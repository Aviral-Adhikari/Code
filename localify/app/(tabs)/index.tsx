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

export default function LocalifyDashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
        <Text style={styles.location}>Exploring Kathmandu</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search food, places, hotels, experiences"
        />
      </View>


      <View style={styles.heroimage}>
        <Image
          source={{uri: "https://github.com/ificodeinclusive/ificodeweb/blob/main/images/banner.png?raw=true"}}
          style={styles.heroImageStyle}
          resizeMode="cover"
        />
      </View>

      <View style={styles.row}>
        <CategoryCard title="Local Hotels" />
        <CategoryCard title="Food and Cafes" />
      </View>

      <View style={styles.row}>
        <CategoryCard title="Hidden Gems" />
        <CategoryCard title="Local Experiences" />
      </View>

      <View style={styles.row}>
        <CategoryCard title="Markets and Shops" />
        <CategoryCard title="Nature and Views" />
      </View>

      <Text style={styles.sectionTitle}>Hidden Gems Near You</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <PlaceCard name="Kispang Gaupali" distance="5 Hours Away" />
        <PlaceCard name="Rani Jhula" distance="1.5 Hours Away" />
        <PlaceCard name="Manichud Daha" distance="1 Day" />
      </ScrollView>

      <Text style={styles.sectionTitle}>Loved by Locals</Text>

      <LocalPick
        name="Sunrise at Nagarkot"
        rating="4.8"
        note="Recommended by locals"
      />

      <LocalPick
        name="Narayanhiti Palace"
        rating="4.7"
        note="History of Nepal"
      />

      <LocalPick
        name="Asan Bazaar"
        rating="4.2"
        note="Explore Local Markets"
      />


      <View style={styles.mapCard}>
        <Text style={styles.mapTitle}>Discover on the Map</Text>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Open Full Map</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}


const CategoryCard = ({ title }) => (
  <TouchableOpacity style={styles.categoryCard}>
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const PlaceCard = ({ name, distance }) => (
  <View style={styles.placeCard}>
    <Text style={styles.placeName}>{name}</Text>
    <Text style={styles.placeDistance}>{distance}</Text>
  </View>
);

const LocalPick = ({ name, rating, note }) => (
  <View style={styles.localPick}>
    <Text style={styles.localName}>{name}</Text>
    <Text style={styles.localNote}>{note}</Text>
    <Text style={styles.localRating}>{rating}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  location: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    marginTop: 25,
    padding: 10,
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  heroimage: {
    marginBottom: 20,
  },
  heroImageStyle: {
    width: "100%",
    height: 180,
    borderRadius: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  categoryCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 22,
    borderRadius: 14,
    alignItems: "center",
    elevation: 2,
  },
  categoryText: {
    fontWeight: "600",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 15,
  },
  placeCard: {
    width: 180,
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginRight: 12,
    elevation: 2,
  },
  placeName: {
    fontWeight: "700",
    fontSize: 15,
  },
  placeDistance: {
    marginTop: 6,
    color: "#555",
  },
  localPick: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    elevation: 2,
  },
  localName: {
    fontWeight: "700",
    fontSize: 16,
  },
  localNote: {
    marginTop: 4,
    color: "#555",
  },
  localRating: {
    marginTop: 6,
    color: "#2563EB",
    fontWeight: "600",
  },
  mapCard: {
    backgroundColor: "#E8F1FF",
    padding: 18,
    borderRadius: 16,
    marginVertical: 25,
    alignItems: "center",
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  mapButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  mapButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
