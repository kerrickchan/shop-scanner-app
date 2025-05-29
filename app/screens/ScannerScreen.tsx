import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Link } from 'expo-router';

export default function ScannerScreen() {
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View className="flex-1 bg-black" />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center bg-slate-50 p-6">
        <View className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 w-full max-w-sm">
          <Text className="text-xl font-semibold text-gray-800 text-center mb-4">
            Camera Permission Required
          </Text>
          <Text className="text-gray-600 text-center mb-6">
            We need your permission to access the camera for scanning products
          </Text>
          <TouchableOpacity 
            onPress={requestPermission}
            className="bg-blue-500 rounded-xl py-3 px-6 shadow-md"
          >
            <Text className="text-white text-lg font-semibold text-center">
              Grant Permission
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    alert(`Product scanned: ${data}`);
  };

  return (
    <View className="flex-1">
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'pdf417', 'ean13', 'ean8', 'upc_e', 'code39', 'code128']
        }}
      />
      
      {/* Overlay UI */}
      <View className="absolute inset-0 justify-center items-center">
        <View className="w-64 h-64 border-4 border-white rounded-2xl opacity-80" />
        <Text className="text-white text-lg font-semibold mt-4 bg-black/50 px-4 py-2 rounded-lg">
          Position barcode within the frame
        </Text>
      </View>
      
      {/* Bottom Controls */}
      <View className="absolute bottom-0 left-0 right-0 p-6">
        <View className="flex-row justify-between items-center">
          <Link href="/" asChild>
            <TouchableOpacity className="bg-white/90 rounded-full p-4 shadow-lg">
              <Text className="text-gray-800 font-semibold">← Back</Text>
            </TouchableOpacity>
          </Link>
          
          <TouchableOpacity 
            onPress={() => setFacing(facing === 'back' ? 'front' : 'back')}
            className="bg-white/90 rounded-full p-4 shadow-lg"
          >
            <Text className="text-gray-800 font-semibold">🔄 Flip</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {scanned && (
        <View className="absolute inset-0 bg-black/80 justify-center items-center">
          <View className="bg-white rounded-2xl p-8 mx-6 shadow-xl">
            <Text className="text-2xl font-bold text-center text-gray-800 mb-4">
              ✅ Product Scanned!
            </Text>
            <Text className="text-gray-600 text-center mb-6">
              Congratulations! You've earned points for this scan.
            </Text>
            <View className="gap-3">
              <TouchableOpacity 
                onPress={() => setScanned(false)}
                className="bg-blue-500 rounded-xl py-3 px-6 shadow-md"
              >
                <Text className="text-white text-lg font-semibold text-center">
                  Scan Another
                </Text>
              </TouchableOpacity>
              <Link href="/" asChild>
                <TouchableOpacity className="bg-gray-500 rounded-xl py-3 px-6 shadow-md">
                  <Text className="text-white text-lg font-semibold text-center">
                    Back to Home
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
