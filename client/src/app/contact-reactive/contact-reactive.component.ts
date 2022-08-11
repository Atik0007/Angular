import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  /* myField = new FormControl(); */
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
    //this.onPathValue();
    // this.setValue();
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'John' });
  }
  setValue(): void {
    // this.contactForm.setValue({ Comment: 'test' });
  }

  onSubmit(): void {
    console.log('submit', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    });
  }
}
