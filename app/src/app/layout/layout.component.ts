import { Component } from '@angular/core';
import { NLocalStorageService } from 'neutrinos-seed-services';
import { NTokenService, NLoginService } from 'neutrinos-seed-services';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
             <n-snackbar></n-snackbar>`
})
export class LayoutComponent {
  constructor(private nLocalstorage: NLocalStorageService, private nTokenService: NTokenService, private loginservice: NLoginService, private router: Router) { }
  ngOnInit() {
    console.log('sccessToken ', this.nLocalstorage.getValue('accessToken'));
    if (this.nLocalstorage.getValue('accessToken')) {
      this.nTokenService.updateSessionStorage();
    }
    let login = this.loginservice.isLoggedIn().then(result => {
      console.log(login);
      if (result) {
        this.router.navigate(['/home']);
      }

    })
  }
}
