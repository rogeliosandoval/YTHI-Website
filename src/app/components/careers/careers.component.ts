import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title mx-auto">Application Submitted!</h4>
      <i class="fa fa-close float-right" style="font-size:30px; color:red; cursor:pointer;" (click)="activeModal.dismiss('Cross click')"></i>
    </div>
    <div class="modal-body">
      <p class="text-center">Thank you for applying! We will get back to you in a couple of days after we review your application.</p>
    </div>
    <div class="modal-footer d-flex justify-content-center">
      <div type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</div>
    </div>
  `,
  styles: ['']
})
export class NgbdModalContent {
//   @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.css']
})

export class Careers {
    constructor(private modalService: NgbModal) {}
    myVar = true;

    careerForm = new FormGroup({
        First: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
        Last: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        Phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(7)]),
        Salary: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(6)]),
        StartDate: new FormControl('', [Validators.required]),
        Skills: new FormControl('', Validators.maxLength(3000)),
        Education: new FormControl('')
    })

    onSubmit() {
        this.modalService.open(NgbdModalContent);
        console.log(this.careerForm.value);
        this.careerForm.reset();
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView({behavior: 'smooth'});
    }

    get First() {
        return this.careerForm.get('First');
    }

    get Last() {
        return this.careerForm.get('Last');
    }

    get Email() {
        return this.careerForm.get('Email');
    }

    get Phone() {
        return this.careerForm.get('Phone');
    }

    get Salary() {
        return this.careerForm.get('Salary');
    }

    get StartDate() {
        return this.careerForm.get('StartDate');
    }
}