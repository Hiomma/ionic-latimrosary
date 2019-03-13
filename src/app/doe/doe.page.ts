import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doe',
  templateUrl: './doe.page.html',
  styleUrls: ['./doe.page.scss'],
})
export class DoePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  abrirUrl(){
      window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KHVD29TG8CKME&source=url");
  }

  voltar(){
      this.router.navigateByUrl("/");
  }

}
