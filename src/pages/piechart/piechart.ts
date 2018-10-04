import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PiechartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-piechart',
  templateUrl: 'piechart.html',
})
export class PiechartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiechartPage');
  }

  displayMonthlyChart() {
    this.navCtrl.setRoot('DashboardPage', {}, {animate: true, direction: 'backward'});
  }

  displayProgressBar() {
    var progress_circle = $(".my-progress-bar").gmpc({
      // color
      color: "#000000",
      // height
      height: "300px",
      // width
      width: "300px",
      // line width
      line_width: 8,
      // stating value
      starting_position: 25,
      // max value
      percent: 100,
      // false = counterclockwise
      counter_clockwise: false,
      // show value
      percentage: true,
      // custom counter text
      text: ''
    });

    var progress_circle = $(".my-progress-bar").gmpc({
      // options here
    })
  }

}
