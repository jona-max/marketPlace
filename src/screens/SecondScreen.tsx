import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

import planes from '../assets/Images/smurfs.jpg';

import profile from '../assets/Images/profile.jpg';
import notProfile from '../assets/Images/notProfile.jpeg';
import Icon from '../assets/Images/envelope.png';

const array = ['first', 'second', 'third', 'fourth', 'fifth'];

const SecondScreen = () => {
  const [currentTab, setCurrentTab] = React.useState({
    physical: true,
    digital: false,
    blockChain: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerFirst}>
        <Image
          source={Icon}
          style={{height: 30, width: 30, marginBottom: 20}}
        />
        <Text>Find the best deals on our market place</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() =>
            setCurrentTab({blockChain: false, physical: true, digital: false})
          }
          style={[
            styles.buttonContainer,
            {backgroundColor: currentTab.physical ? 'black' : 'transparent'},
          ]}>
          <Text style={{color: currentTab.physical ? 'white' : 'black'}}>
            Physical goods
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setCurrentTab({blockChain: false, physical: false, digital: true})
          }
          style={[
            styles.buttonContainer,
            {backgroundColor: currentTab.digital ? 'black' : 'transparent'},
          ]}>
          <Text style={{color: currentTab.digital ? 'white' : 'black'}}>
            Digital goods
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setCurrentTab({blockChain: true, physical: false, digital: false})
          }
          style={[
            styles.buttonContainer,
            {backgroundColor: currentTab.blockChain ? 'black' : 'transparent'},
          ]}>
          <Text style={{color: currentTab.blockChain ? 'white' : 'black'}}>
            BlockChain goods
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollBarStyle}>
        {currentTab.physical && (
          <>
            {array.map((val, index) => {
              return (
                <ImageBackground
                  source={planes}
                  style={styles.ImageBackContainer}
                  key={index}
                  imageStyle={styles.imageStyler}>
                  <View style={styles.topImage}>
                    <View style={styles.pillGreen}>
                      <Text style={styles.textStyle}>1000</Text>
                    </View>
                    <View style={styles.pillRed}>
                      <Text style={styles.textStyle}>remaining</Text>
                    </View>
                  </View>
                  <View style={styles.ImageBody}>
                    <Text style={styles.textTitleStyle}>
                      Carpool to save 100kg in CO2 emissions
                    </Text>
                    <Text style={styles.textStyle}>
                      Share in 3000 Carbon credits bet made for this goal.
                    </Text>
                  </View>
                  <View style={styles.bottomImage}>
                    <View>
                      <Text style={styles.textStyle}>Goal</Text>
                      <Text style={styles.textTitleStyle}>100 EV Carpools</Text>
                      <View style={styles.progressContainer}>
                        <View style={styles.progressBar} />
                      </View>
                    </View>
                    <View>
                      <Text style={styles.textStyle}>Participating</Text>
                      <View style={styles.avatarContainer}>
                        <ImageBackground
                          source={profile}
                          style={[styles.avatar, styles.indexingAvatar]}
                          imageStyle={styles.imageAvatar}
                        />
                        <ImageBackground
                          source={notProfile}
                          style={styles.avatar}
                          imageStyle={styles.imageAvatar}
                        />
                        <View style={styles.customAvatar}>
                          <Text style={styles.customAvatarText}>12K</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              );
            })}
          </>
        )}
        {currentTab.blockChain && (
          <View style={styles.cardContainer}>
            {array.map((val, index) => {
              return (
                <View key={index} style={styles.SecondCard}>
                  <Image source={planes} style={styles.CardImage} />
                  <View style={{marginTop: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Clementina #45</Text>
                    <Text style={{fontSize: 13}}>Pablo Picasso</Text>
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={{fontWeight: 'bold', color: '#53b456'}}>
                      O 45
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>N</Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  //   new card
  cardContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  SecondCard: {
    // height: 300,
    flexDirection: 'column',
    width: 166,

    backgroundColor: '#706e6e42',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    marginRight: 30,
  },
  CardImage: {height: 150, width: '100%', borderRadius: 10},
  cardFooter: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 45,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFirst: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    marginVertical: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#9b999947',
    width: Dimensions.get('window').width - 20,
    // padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  scrollBarStyle: {
    padding: 10,
    marginBottom: 120,
  },
  //
  topImage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ImageBody: {},
  ImageBackContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 300,
    width: Dimensions.get('window').width - 30,
    marginBottom: 30,
    padding: 10,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 8,
  },
  bottomImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressContainer: {
    marginTop: 2,
    height: 10,
    width: 100,
    backgroundColor: '#a39e9e',
    borderRadius: 10,
  },
  progressBar: {
    height: 10,
    width: 40,
    backgroundColor: '#53b456',
    borderRadius: 10,
  },
  pillRed: {
    borderRadius: 30,
    backgroundColor: '#f56157',
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  pillGreen: {
    borderRadius: 30,
    backgroundColor: '#53b456',
    paddingVertical: 3,
    paddingHorizontal: 15,
  },
  imageStyler: {
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 13,
  },
  textTitleStyle: {
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
  avatarContainer: {
    marginTop: 2,
    flexDirection: 'row',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: -10,
    zIndex: 1,
  },
  imageAvatar: {
    borderRadius: 20,
  },
  customAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#e6e3e3',
  },
  customAvatarText: {
    fontWeight: '900',
    color: '#312e2e',
  },
  indexingAvatar: {
    zIndex: 1000,
  },
});
