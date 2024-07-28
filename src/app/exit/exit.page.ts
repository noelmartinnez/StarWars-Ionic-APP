import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) {}


  ngOnInit() {
  }

  async confirmExit() {
    const alert = await this.alertController.create({
      header: 'Exit',
      message: 'You have decided to close the app.',
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToWiki() {
    this.navCtrl.navigateRoot('/tabs/wiki');
  }

}
