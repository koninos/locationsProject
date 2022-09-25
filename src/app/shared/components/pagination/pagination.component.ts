import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnChanges {

  @Input() set items(items: any[]) {
    this._items = items;
    this.collectionSize = items?.length;
  }

  get items(): any[] {
    return this._items;
  }

  @Output() refreshItems = new EventEmitter<any>();

  public collectionSize: number = 0;
  public currentPage = 1;
  public pageSize = 10;

  private _items: any[];

  constructor() {}

  ngOnChanges(): void {
    this.onRefreshItems();
  }

  public onRefreshItems(): void {
    this.refreshItems.emit({ currentPage: this.currentPage, pageSize: this.pageSize });
  }

}
