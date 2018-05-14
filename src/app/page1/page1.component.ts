import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpacexApiService } from '../providers/spacex-api.service';
import { Launch } from '../../../Models/Launch';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

    tabOne = 'Tab One';
    tabTwo = 'Tab Two';
    tabOneContent = 'Hello From Tab One';

    user = {
      name : 'toto',
      age : 2,
      email : 'toto@free.fr'
    };

    launches: Launch[];
  
  constructor(
    private spaceService : SpacexApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.spaceService.fetchUpComingLaunches().subscribe(
      (data: Launch[]) => this.launches = data
    );
  }

  navigateToPage2() {
    this.router.navigate(['page2'])  
  }

}