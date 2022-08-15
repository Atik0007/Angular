import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;
  /* myField = new FormControl(); */
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['name'];
    });
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
