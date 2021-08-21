import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder?: string;

  @Output() change = new EventEmitter<string | null>();

  value: string | null = null;
  
  disabled: boolean = false;

  handleChange(event: HTMLElementEvent<HTMLInputElement>): void {
    const {value} = event.target;

    this.value = value;
    this.onChange(value);
    this.change.emit(value);
  }

  handleBlur(): void {
    this.onTouched();
  }

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: CallableFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: CallableFunction): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  private onChange: CallableFunction;

  private onTouched: CallableFunction;
}
