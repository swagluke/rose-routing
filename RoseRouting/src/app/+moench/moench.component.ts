import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-moench',
  templateUrl: './moench.component.html',
  styleUrls: ['./moench.component.css']
})
export class MoenchComponent implements OnInit, OnDestroy {

  private routerSubscription: Subscription;
  message: string;

  constructor(private route: ActivatedRoute) {
    // Router params DO NOT NEED to unsubscribe later. 
    this.routerSubscription = this.route.params.subscribe( (params: Params) =>{
        var floor = params['floor'];
        console.log(`The param is ${floor}.`);
        this.message = `Moench ${floor}`;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
