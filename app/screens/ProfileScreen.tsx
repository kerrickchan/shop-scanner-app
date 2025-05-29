import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50">
      <View className="p-6">
        {/* Header Card */}
        <View className="bg-white rounded-2xl p-6 mb-6 shadow-md border border-gray-100">
          <Text className="text-2xl font-bold text-gray-800 mb-2">Your Rewards</Text>
          <View className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-4">
            <Text className="text-3xl font-bold text-white text-center">500 Points</Text>
            <Text className="text-white text-center opacity-90">Available to redeem</Text>
          </View>
        </View>

        {/* Recent Scans Section */}
        <View className="bg-white rounded-2xl p-6 mb-6 shadow-md border border-gray-100">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Recent Scans</Text>
          
          <View className="bg-gray-50 rounded-xl p-4 mb-3 border-l-4 border-green-400">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-800 font-medium">Product A</Text>
              <Text className="text-green-600 font-bold">+50 points</Text>
            </View>
            <Text className="text-gray-500 text-sm mt-1">2 hours ago</Text>
          </View>
          
          <View className="bg-gray-50 rounded-xl p-4 mb-3 border-l-4 border-blue-400">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-800 font-medium">Product B</Text>
              <Text className="text-blue-600 font-bold">+100 points</Text>
            </View>
            <Text className="text-gray-500 text-sm mt-1">1 day ago</Text>
          </View>
          
          <View className="bg-gray-50 rounded-xl p-4 border-l-4 border-purple-400">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-800 font-medium">Product C</Text>
              <Text className="text-purple-600 font-bold">+75 points</Text>
            </View>
            <Text className="text-gray-500 text-sm mt-1">3 days ago</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="gap-3 mb-6">
          <TouchableOpacity className="bg-blue-500 rounded-xl py-4 px-6 shadow-md">
            <Text className="text-white text-lg font-semibold text-center">
              🎁 Redeem Rewards
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-gray-500 rounded-xl py-4 px-6 shadow-md">
            <Text className="text-white text-lg font-semibold text-center">
              📊 View History
            </Text>
          </TouchableOpacity>
        </View>

        {/* Back to Home Link */}
        <Link href="/" asChild>
          <TouchableOpacity className="bg-white border-2 border-gray-300 rounded-xl py-3 px-6">
            <Text className="text-gray-700 text-center font-medium">
              ← Back to Home
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
