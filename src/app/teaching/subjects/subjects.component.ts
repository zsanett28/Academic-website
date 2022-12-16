import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  public showFirst:boolean = false;
  public showSecond:boolean = false;
  public showThird:boolean = false;

  ngOnInit () {  }

  toggle(element: string) {
    const subject = document.getElementById(element);

    if (subject != null) {
      console.log(subject.id);
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
