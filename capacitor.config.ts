import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.822928377e6f447882ebe602eddbc5a1',
  appName: 'FitTrack',
  webDir: 'dist',
  server: {
    url: 'https://82292837-7e6f-4478-82eb-e602eddbc5a1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
