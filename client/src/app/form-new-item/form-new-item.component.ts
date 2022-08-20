import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent {
  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  @Output() onAddNewItemEvent = new EventEmitter<string>();
  @Output() onUpdateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: string): void {
    this.onAddNewItemEvent.emit(item);
  }

  onUpdateItem(item: City, change: string): void {
    console.log(item, change);
    const city: City = {
      _id: item._id,
      name: change,
    };

    this.onUpdateItemEvent.emit(city);
  }
}
