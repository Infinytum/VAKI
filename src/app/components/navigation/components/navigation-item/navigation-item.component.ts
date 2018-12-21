import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {

  @Input()
  public icon: string = null;

  @Input()
  public image: string = null;

  @Input()
  public route: string = null;

  constructor() { }

  ngOnInit() {
  }

}
