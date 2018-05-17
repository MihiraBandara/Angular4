
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';

export class TableDatabase {
  dataChange: BehaviorSubject<InitialData[]> = new BehaviorSubject<InitialData[]>([]);
  public get data(): InitialData[] { return this.dataChange.value; }

  constructor(productList: any) {
    for (let i = 0; i < productList.length; i++) { this.addProduct(productList[i]); }
  }


  addProduct(product: any) {
    var copiedData = this.data.slice();


    copiedData.push(product);
    this.dataChange.next(copiedData);
  }

}

export class TableDataSource extends DataSource<any> {
  constructor(public _exampleDatabase: TableDatabase) {
    super();
  }
  connect(): Observable<InitialData[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() { }
}


export interface InitialData {
}