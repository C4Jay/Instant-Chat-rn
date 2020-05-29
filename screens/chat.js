import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { db } from '../configs/db.js';
import axios from '../axios-chat.js';
import moment from 'moment';

class ChatScreen extends Component {
  
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
  this.send = this.send.bind(this);
        
      }

    state = {
        user: 'Cee Jay',
        chats: [],
        content: '',
        writeError: null,
        writeErroe: null
    }

    async componentDidMount() {
        
        try {
            db.ref('chats').on('value', snapshot => {
              let chats = [];
              snapshot.forEach((snap) => {
                chats.push(snap.val());
              });
              this.setState({ chats });
              console.log(this.state.chats)
            });
          } catch (error) {
            this.setState({ readError: error.message });
          }
        
        
        /* try {
          db.ref("chats").on("value", snapshot => {
            let chats = [];
            snapshot.forEach((snap) => {
              chats.push(snap.val());
            });
            this.setState({ chats });
          });
        } catch (error) {
          this.setState({ readError: error.message });
        } */



        /* try {
            axios.get('/chats.json')
            .then((response => {
                const chats = []
                const obj = response.data
                for(let key in obj) {
                    chats.push({
                        id: key,
                        content: obj[key].content,
                        timestamp: obj[key].timestamp,
                        uid: obj[key].uid
                    }); 
          
                }
                this.setState({ chats })
            }
            ))
            .catch(err => {
                console.log(err)
            })
        }catch (err) {
            console.log(err)
        } */
    }

      handleChange(event) {
          this.setState({
              content: event.target.value
          })
      }

      async send() {
        //   console.log(this.state.content)
    //    event.preventDefault();
        this.setState({ writeError: null });
    /*     try {
          await db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user
          });
          this.setState({ content: '' });
        } catch (error) {
          this.setState({ writeError: error.message });
        } */
       
       
         try {
            axios.post('/chats.json',{
                content: this.state.content,
                timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
                
                uid: this.state.user
            });
            this.setState({content: ''});
        } catch (error) {
            console.log(error)
        }

       /*  try {
            db.ref('chats').push();

            chat.set({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user
            })

            chat.once('value', (data) => {
                console.log("done")
            })
        } catch(err) {
            console.log(err)
        } */
        /* try {
            await db.ref('chats').push({
              content: this.state.content,
              timestamp: Date.now(),
              uid: this.state.user.uid
            });
            this.setState({ content: '' });
          } catch (error) {
            this.setState({ writeError: error.message });
          } */

        
      }

      inputHandler = (number) => {
          this.setState({
              content: number
          })
      }

    

      render() {

        
        return (
        
          <View style={{marginTop: 60, flex: 1, width: 368}}>  
            <ScrollView>
              {/* <Text>Hey</Text> */}
              <View>
                  {this.state.chats.map(chat => {
                      return <View style={[chat.uid == 'Cee Jay' ? styles.tile1 : styles.tile2]} key={chat.timestamp}><Text >{chat.timestamp}: {chat.content}</Text></View>                 
                  })}
              </View>

              
              </ScrollView>
              <TextInput onChangeText={this.inputHandler} value={this.state.content}></TextInput>
              <Button onPress={this.send} title="send"></Button>

              <View>
                  <Text>Login as : {this.state.user}</Text>
              </View>

         
          </View>
        );
      }

    
}

const styles = StyleSheet.create({
  tile1: {
    // height: 35,
    backgroundColor: '#aeedf5',
    width: 218,
    marginTop: 1,
    marginBottom: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    right: -30,
    minHeight: 35
    

    
  },
  tile2: {
    // height: 35,
    backgroundColor: '#f2cee7',
    width: 218,
    marginTop: 1,
    marginBottom: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    left: 100,
    minHeight: 35
  
  }
})

export default ChatScreen;