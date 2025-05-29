import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Link } from 'expo-router';

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 22.3193,
    longitude: 114.1694,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Sample store locations (would come from API in real app)
  const stores = [
    { id: 1, name: 'Central Store', latitude: 22.3193, longitude: 114.1694 },
    { id: 2, name: 'Wan Chai Store', latitude: 22.2793, longitude: 114.1794 },
    { id: 3, name: 'Tsim Sha Tsui Store', latitude: 22.2993, longitude: 114.1594 },
  ];

  return (
    <View className="flex-1">
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={region}
        onRegionChangeComplete={setRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {stores.map(store => (
          <Marker
            key={store.id}
            coordinate={{ latitude: store.latitude, longitude: store.longitude }}
            title={store.name}
            description="ShopScan partner store"
          />
        ))}
      </MapView>
      
      {/* Top Info Card */}
      <View className="absolute top-4 left-4 right-4">
        <View className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <Text className="text-lg font-semibold text-gray-800 mb-1">
            🏪 Store Locator
          </Text>
          <Text className="text-gray-600 text-sm">
            Find nearby ShopScan partner stores
          </Text>
        </View>
      </View>
      
      {/* Bottom Controls */}
      <View className="absolute bottom-6 left-4 right-4">
        <View className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-4">
          <Text className="text-center text-gray-600 text-sm mb-2">
            📍 {stores.length} stores found nearby
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-blue-500 rounded-xl py-2 px-4 flex-1 mr-2">
              <Text className="text-white font-semibold text-center text-sm">
                Find Nearest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 rounded-xl py-2 px-4 flex-1 ml-2">
              <Text className="text-white font-semibold text-center text-sm">
                Get Directions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Link href="/" asChild>
          <TouchableOpacity className="bg-gray-800 rounded-2xl py-3 px-6 shadow-lg">
            <Text className="text-white text-center font-semibold">
              ← Back to Home
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
