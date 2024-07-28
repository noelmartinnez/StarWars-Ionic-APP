import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private toastController: ToastController) {}

  async showWelcomeToast() {
    const toast = await this.toastController.create({
      message: 'Welcome to the Star Wars Wiki App!',
      duration: 3000,
      position: 'bottom',
      color: 'primary'
    });
    await toast.present();
  }
  
  ngOnInit() {
    this.showWelcomeToast();
  }
}
