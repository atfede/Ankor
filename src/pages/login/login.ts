import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/User';
// import { Dashboard } from '../dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
    private toast: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async  login() {
    try {

      const logAttemp = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(f => {

        console.log(logAttemp);

        // Successful login
        if (logAttemp) {
          if(f.additionalUserInfo.isNewUser){
            this.navCtrl.push('ProfilePage');
          }else{
            this.navCtrl.push('DashboardPage');
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
}
