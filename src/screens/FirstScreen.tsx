import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';

import planes from '../assets/Images/smurfs.jpg';

import profile from '../assets/Images/profile.jpg';
import notProfile from '../assets/Images/notProfile.jpeg';
import Icon from '../assets/Images/envelope.png';
import Alarm from '../assets/Images/alarm-clock.png';

import Back from '../assets/Images/back.png';

const array = ['first', 'second', 'third', 'fourth', 'fifth'];

const FirstScreen = ({navigation}) => {
  return (
    <>
      <View style={{margin: 30}}>
        <Pressable
          onPress={() => navigation.navigate('Second')}
          style={{flexDirection: 'row'}}>
          <Image
            source={Back}
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: 'rgba(0,0,0,0.1)',
              marginRight: 5,
            }}
          />
          <Text style={{fontWeight: '900', fontSize: 15}}>Carbon Quests</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.containerFirst}>
          <Image
            source={Icon}
            style={{height: 30, width: 30, marginBottom: 20}}
          />
          <Text>Complete quests score Carbon Credits</Text>
        </View>
        <View style={styles.containerSecond}>
          <View style={{width: '20%'}}>
            <Image source={Icon} style={{height: 30, width: 30}} />
          </View>

          <View style={{width: '80%'}}>
            <Text style={{color: '#000', fontWeight: '900', fontSize: 13}}>
              Invite 5 friends and earn 30 Carbon Credits
            </Text>
            <Text>
              Do you have our mission? Let your friends know about the Carbon
              games.
            </Text>
          </View>
        </View>
        <ScrollView style={styles.scrollBarStyle}>
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
                    <Image
                      source={Alarm}
                      style={{height: 10, width: 10, marginRight: 5}}
                    />
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
        </ScrollView>
      </View>
    </>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFirst: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    marginVertical: 30,
  },
  containerSecond: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#9b999947',
    width: Dimensions.get('window').width - 20,
    borderRadius: 10,
  },
  scrollBarStyle: {
    padding: 10,
    marginBottom: 120,
  },
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
