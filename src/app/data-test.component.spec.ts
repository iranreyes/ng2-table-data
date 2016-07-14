import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DataTestAppComponent } from '../app/data-test.component';

beforeEachProviders(() => [DataTestAppComponent]);

describe('App: DataTest', () => {
  it('should create the app',
      inject([DataTestAppComponent], (app: DataTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'data-test works!\'',
      inject([DataTestAppComponent], (app: DataTestAppComponent) => {
    expect(app.title).toEqual('data-test works!');
  }));
});
