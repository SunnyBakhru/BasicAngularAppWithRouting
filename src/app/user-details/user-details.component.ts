import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CustomerDetails } from '../classes/Customer.Details';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html' ,
  styleUrls: ['./user-details.component.css'],
})

export class UserDetailsComponent implements OnInit {


  username123: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.username123 = params.myUserName;
      });
  }

}
