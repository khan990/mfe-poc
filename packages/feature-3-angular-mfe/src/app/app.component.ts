import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  @ViewChild(MatDrawer) private matDrawerElement!: MatDrawer;
  @ViewChild('matModal') private matModalElement!: TemplateRef<any>;

  constructor(
    public dialog: MatDialog
  ) {}

  public onClickOpenModalBtn(): void {
    this.dialog.open(this.matModalElement, {
    });
  }

  public onClickOpenDrawerBtn(): void {
    this.matDrawerElement.open();
  }

}
