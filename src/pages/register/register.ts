import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from '../../models/User';
import {AngularFireAuth} from 'angularfire2/auth';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private http: HttpClient) {
  }

  /*listCert(): Observable<any> {
    console.log(JSON.stringify(this.http.get('http://www.suitedb.com/atfede/dbConnection2.php')));
    this.user.certificate =  JSON.stringify(this.http.get('http://www.suitedb.com/atfede/dbConnection2.php'));

    return this.http.get('http://www.suitedb.com/atfede/dbConnection2.php');
  }*/

  /* getWriterWithFavBooks(): Observable<any> {
     return this.http.get(this.writerUrl);
   }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.setRoot('DashboardPage');
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
  }

}


