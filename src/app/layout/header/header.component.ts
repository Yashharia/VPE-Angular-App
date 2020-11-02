import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  

 

sticky:boolean=false;
menuPosition:any;

  constructor() { }

  ngOnInit() {
  }

  
ngAfterViewInit(){
  this.menuPosition=this.menuPosition.nativeElement.offsetTop
}

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
    const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
}

}
