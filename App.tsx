import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter'

import { Home } from "./src/screens/Home";
import { Loading } from './src/components/Loading';


export default function App() {
  const [ fontsLoaded ] = useFonts({ Inter_400Regular, Inter_700Bold })

  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <Home />
  )
}

