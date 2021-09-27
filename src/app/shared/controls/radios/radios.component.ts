import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItem } from '@app/models/frontend';
export { ControlItem } from '@app/models/frontend';

@Component({
    selector: 'app-radios',
    templateUrl: './radios.component.html',
    styleUrls: ['./radios.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadiosComponent),
            multi: true
        }
    ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

    @Input() items: ControlItem[];

    @Output() changed = new EventEmitter<primitive>();

    value: primitive;
    isDisabled: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    private propagateChange: any = () => { };

    writeValue(value: primitive): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    onChanged(value: primitive): void {
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    isChecked(value: primitive): boolean {
        return this.value === value;
    }

}
