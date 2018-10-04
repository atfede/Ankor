import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';

import { Profile } from '../../models/profile'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  profile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  async createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      console.log(auth);
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile).then(() => {
        this.navCtrl.setRoot('DashboardPage', {
          justLogged: true
        });
      });
    })
  }


}
