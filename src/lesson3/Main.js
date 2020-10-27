import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
/*
const fetchData_Then = () => {
  //let myData = [];

  console.log('starting then fetch');

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response.data);
      //myData = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  //console.log(myData);
  console.log('ending then fetch');
};

const fetchData_Await = async () => {
  console.log('starting await fetch');

  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  console.log(response.data);
  console.log('end await fetch');
};
*/

const Main = (props) => {
  const [userData, setUserData] = useState([]);

  const fetchData_Then = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      setUserData(data);
      //response.data=({data})
    });
  };

  const fetchData_Await = async () => {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setUserData(data);
  };

  function promiseFunction(number) {
    return new Promise((resolve, reject) => {
      if (number > 5) {
        resolve('higher than 5');
      } else {
        reject('less than 5');
      }
    });
  }

  const checkNumber = () =>
    promiseFunction(10)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <SafeAreaView>
      <View>
        <Text>Main</Text>
        <Button title="Fetch Data" onPress={fetchData_Then} />
        <Button title="Fetch Await Data" onPress={fetchData_Await} />
        <Button title="Number" onPress={checkNumber} />

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={userData}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};
export default Main;

//PROMISE yapisi (then kullanimi)
//await ve then promise function da kullanilir
// then blogu bagimsiz calisir nezaman cevap veri gelirse calisir
// nested then yapisini then icinde kullanabiliriz
// catch nezaman hata alirsak calisir
// await cevap gelesiye kadar altindaki kodlar bekler
/*
const fetchData = () => {
    console.log("starting fetch..");

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response);
            // ic ice then yapisi // axios.get('https://jsonplaceholder.typicode.com/users/todo').then
        })
        .catch((error) => {
            console.log(error);
        })

    console.log("end fetch..");
}*/
