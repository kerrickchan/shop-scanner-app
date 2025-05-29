import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-slate-50 px-6 py-8">
      <View className="flex-1 justify-center items-center">
        {/* Main Card */}
        <View className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm border border-gray-100">
          <Text className="text-4xl font-bold text-center text-gray-800 mb-2">
            ShopScan
          </Text>
          <Text className="text-lg text-center text-blue-600 font-semibold mb-8">
            Rewards
          </Text>
          
          {/* Button Container */}
          <View className="gap-4">
            <Link href="/screens/ScannerScreen" asChild>
              <TouchableOpacity className="bg-blue-500 rounded-xl py-4 px-6 shadow-md">
                <Text className="text-white text-lg font-semibold text-center">
                  📱 Scan Products
                </Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/screens/MapScreen" asChild>
              <TouchableOpacity className="bg-green-500 rounded-xl py-4 px-6 shadow-md">
                <Text className="text-white text-lg font-semibold text-center">
                  🗺️ Find Stores
                </Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/screens/ProfileScreen" asChild>
              <TouchableOpacity className="bg-purple-500 rounded-xl py-4 px-6 shadow-md">
                <Text className="text-white text-lg font-semibold text-center">
                  🏆 My Rewards
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        
        {/* Points Card */}
        <View className="mt-8 bg-white rounded-2xl p-4 w-full max-w-sm border border-gray-100">
          <Text className="text-center text-gray-600 text-sm">
            Earn points with every scan!
          </Text>
          <Text className="text-center text-blue-600 font-bold text-lg mt-1">
            500 Points Available
          </Text>
        </View>
      </View>
    </View>
  );
}
