import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  public showFirst:boolean = false;
  public showSecond:boolean = false;
  public showThird:boolean = false;

  private fragment: string | null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      if(!!this.fragment) {
        document.querySelector('#' + this.fragment)?.scrollIntoView();
      }
    } catch (e) { }
  }

  toggle(element: string) {
    const subject = document.getElementById(element);

    if (subject != null) {
      if (subject.id == 'subject-1') {
        if (!this.showFirst) {
          subject.style.padding = '10%';
          this.showFirst = true;
        } else {
          subject.style.padding = '3%';
          this.showFirst = false;
          subject.scrollIntoView();
        }
      } else if (subject.id == 'subject-2') {
        if (!this.showSecond) {
          subject.style.padding = '10%';
          this.showSecond = true;
        } else {
          subject.style.padding = '3%';
          this.showSecond = false;
          subject.scrollIntoView();
        }
      } else if (subject.id == 'subject-3') {
        if (!this.showThird) {
          subject.style.padding = '10%';
          this.showThird = true;
        } else {
          subject.style.padding = '3%';
          this.showThird = false;
          subject.scrollIntoView();
        }
      }
    }
  }

}
