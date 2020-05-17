import { Component } from '@angular/core'

@Component({
    selector:`section-comp`,
    templateUrl: `./section.component.html`,
    styleUrls : ['./section.component.css']
})
export class Section{
    message: string = "";
    isPersonal = false;
    isEducation = false;
    isExp = false;
    isMarquee = true;
    personalOnClick()
    {
        this.isPersonal = true;
        this.isEducation = false;
        this.isExp = false;
        this.isMarquee = false;
    }
    educationOnClick()
    {
        this.isPersonal = false;
        this.isEducation = true;
        this.isExp = false;
        this.isMarquee = false;

    }
    expOnClick()
    {
        this.isPersonal = false;
        this.isEducation = false;
        this.isExp = true;
         this.isMarquee = false;

    }
}