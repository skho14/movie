import {createAppContainer} from '@react-navigation/native'
import Search from '../Components/Search'
import { createStackNavigator } from 'react-navigation-stack'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator ({
    Search: {
        screen: Search,
        navigationOptions: {
            title:"Recherche"
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

export default createAppContainer(SearchStackNavigator)
