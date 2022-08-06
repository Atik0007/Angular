import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent {
  @Input() className = 'btn-primary';
  @Input() label!: string;

  @Output() onAddNewItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    console.log('item: ', item);
    this.onAddNewItemEvent.emit(item);
  }
}
