import React from 'react'
import { StyleSheet , TextInput , View , Button, FlatList , Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import {getfilmfromAPI}  from '../API/TMDBApi'



class Search extends React.Component {
   
  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: []
    }
  }
 
  _loadFilms() {
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      getfilmfromAPI(this.searchedText).then(data => {
          this.setState({ films: data.results })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate("FilmDetail" , {idFilm:idFilm})
  }
      
    
  render() {
    console.log("RENDER")
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container:{
        marginTop:50,
        flex:1
    },
    textinput: {
        marginLeft:10, 
        marginRight:10, 
        height:50, 
        borderColor:'#000000', 
        borderWidth:1, 
        paddingLeft:5
    }
})
    


export default Search








  

  

  

  