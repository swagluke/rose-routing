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
  imageUrl: string;

  constructor(private route: ActivatedRoute) {
    // Router params DO NOT NEED to unsubscribe later. 
    this.routerSubscription = this.route.params.subscribe( (params: Params) =>{
        var floor = params['floor'];
        this.message = `Moench ${floor}`;
        this.imageUrl = `./assets/images/moench${floor}.png`;
    });
  }

  ngOnInit() {
    var moenchTrigger = window.document.querySelector("#moench-trigger");
    moenchTrigger.classList.add("active");

  }

  ngOnDestroy(): void {
    var moenchTrigger = window.document.querySelector("#moench-trigger");
    moenchTrigger.classList.remove("active");
    this.routerSubscription.unsubscribe();
  }
}
