import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.controldegastos',
  appName: 'controldegastos',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    SplashScreen:{
    launchShowDuration: 1000
    }
  }
};

export default config;
