import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isRightPanelActive: boolean = false;

  toggleSignUp(): void {
    this.isRightPanelActive = true;
  }

  toggleSignIn(): void {
    this.isRightPanelActive = false;
  }
}
