import './gesture-handler.native'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/navigator/stack-navigator'

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
