# ShopScan Rewards

A React Native mobile application built with Expo that allows users to scan product barcodes and earn reward points. The app features a modern UI with NativeWind (Tailwind CSS for React Native) and includes store locating functionality with maps integration.

## Features

- 📱 **Barcode Scanning**: Scan various barcode types (QR, EAN13, EAN8, UPC-E, Code39, Code128, PDF417)
- 🏆 **Rewards System**: Earn points for each product scan with profile management
- 🗺️ **Store Locator**: Find nearby partner stores with interactive map using React Native Maps
- 👤 **Profile Management**: View scan history, points balance, and recent activity
- 🎨 **Modern UI**: Clean, responsive design with NativeWind (Tailwind CSS)

## Tech Stack

- **Framework**: [Expo](https://expo.dev/) ~53.0.9
- **Runtime**: React Native 0.79.2 with React 19.0.0
- **Navigation**: [Expo Router](https://expo.github.io/router/) v5.0.7 (file-based routing)
- **Styling**: [NativeWind](https://www.nativewind.dev/) v4.1.23 (Tailwind CSS for React Native)
- **Camera**: [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/) v16.1.6
- **Maps**: [React Native Maps](https://github.com/react-native-maps/react-native-maps) v1.20.1
- **Location**: [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) v18.1.5
- **Notifications**: [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) v0.31.2
- **Language**: TypeScript with strict mode enabled

## Project Structure

```
shop-scanner-app/
├── app/                          # Expo Router app directory
│   ├── _layout.tsx              # Root layout with navigation stack
│   ├── index.tsx                # Home screen
│   └── screens/                 # App screens
│       ├── ScannerScreen.tsx    # Barcode scanner with camera
│       ├── MapScreen.tsx        # Store locator with maps
│       └── ProfileScreen.tsx    # User profile and rewards
├── my-expo-app/                 # Secondary Expo app (legacy/testing)
├── assets/                      # App icons and images
├── global.css                   # Tailwind CSS imports
├── babel.config.js              # Babel configuration for NativeWind
├── metro.config.js              # Metro bundler config with NativeWind
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── app.json                     # Expo app configuration
```

## Prerequisites

- **Node.js** (>= 16)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **iOS Simulator** (for iOS development) or **Android Emulator** (for Android development)
- **Expo Go app** on your physical device (optional)

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd shop-scanner-app
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Start the development server**

   ```bash
   npm start
   # or
   expo start
   ```
4. **Run on specific platforms**

   ```bash
   # iOS Simulator
   npm run ios

   # Android Emulator
   npm run android

   # Web browser
   npm run web
   ```

## Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS Simulator
- `npm run android` - Run on Android Emulator
- `npm run web` - Run in web browser

### Key Features Implementation

#### Barcode Scanner

- Uses `expo-camera` with comprehensive barcode type support
- Real-time scanning with visual feedback
- Points reward system integration

#### Store Locator

- Interactive maps using `react-native-maps`
- Sample store locations with markers
- User location integration

#### Rewards Profile

- Points tracking and display
- Scan history with timestamps
- Recent activity feed

### Styling

The app uses **NativeWind** for styling, which brings Tailwind CSS to React Native:

- Utility-first CSS framework
- Responsive design support
- Consistent design system
- Custom color schemes and themes

### Navigation

Built with **Expo Router** providing:

- File-based routing system
- Type-safe navigation
- Stack navigation with headers
- Smooth transitions between screens

## Permissions Required

The app requires the following permissions:

- **Camera**: For barcode scanning functionality
- **Location**: For store locator and nearby stores feature

Permissions are requested at runtime when features are accessed.

## Configuration

### Camera Settings

Configured to scan multiple barcode formats:

- QR codes
- EAN13, EAN8
- UPC-E
- Code39, Code128
- PDF417

### Map Configuration

- Default region: Hong Kong (configurable)
- Sample store locations included
- User location display enabled

## Deployment

For production deployment:

1. **Build for production**

   ```bash
   expo build:ios    # iOS
   expo build:android # Android
   ```
2. **EAS Build** (recommended)

   ```bash
   npm install -g eas-cli
   eas build --platform all
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on both iOS and Android
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:

- Create an issue in the repository
- Check Expo documentation: https://docs.expo.dev/
- NativeWind documentation: https://www.nativewind.dev/
