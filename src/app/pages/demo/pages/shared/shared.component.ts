import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form = this.fb.group({
    input: [null],
  });

  patchValue(): void {
    this.form.patchValue({ input: 'test' });
  }

  handleSubmit(): void {
    const inputValue = this.form.value.input;

    if (inputValue) {
      alert(`The input value is "${this.form.value.input}"`);
    } else {
      alert('There is no value');
    }
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}
}
