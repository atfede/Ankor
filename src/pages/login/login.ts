import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {User} from '../../models/User';
import {UserData} from '../../models/UserData';
// import { Dashboard } from '../dashboardmes/dashboardmes';
import {AngularFireAuth} from 'angularfire2/auth';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Globals} from "../../components/Globals";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
              private toast: ToastController, private http: HttpClient, private globals: Globals) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    try {
      const logAttemp = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(f => {

        // console.log(logAttemp);
        this.globals.loggedUser = this.user.email;
        this.globals.setLoggedUserIndex(this.user.email);

        // Successful login
        if (logAttemp) {

          this.globals.CURRENT_PAGE = 7; //TODO: poner en 0 cuando quiera hacer previous y next company con los botones
          this.globals.setNumberOfCompanies(this.globals.loggedUserIndex, this.globals.loggedUser);
          this.globals.getMetasCliente(this.globals.loggedUser);
          this.getUser();

          if (!f.additionalUserInfo.isNewUser) {
            this.navCtrl.setRoot('DashboardPage', {
              justLogged: true
            });
          } else {
            this.navCtrl.setRoot('ProfilePage');
          }
        } else {
          this.toast.create({
            message: `Nome de usuário ou senha incorretos`,
            duration: 3000
          }).present();
        }

      }).catch(er => {
        this.toast.create({
          message: `Nome de usuário ou senha incorretos`,
          duration: 3000
        }).present();
        console.log(er);

      });
    } catch (e) {
      this.toast.create({
        message: `Nome de usuário ou senha incorretos`,
        duration: 3000
      }).present();
      console.log('ERROR ' + e)
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  getUser(): Observable<UserData> {
    //console.log(this.http.get('http://www.suitedb.com/atfede/dbConnection2.php?user_name=' + this.user.email + '&password=' + this.user.password));

    return this.http.get<UserData>('http://www.suitedb.com/atfede/dbConnection2.php?user_name=' + this.user.email + '&password=' + this.user.password);
  }

  /*  public getUsers(url: string): Observable<IUser[]> {
      return this._http.get<IUser[]>(url);
    }*/

}
