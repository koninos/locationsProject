import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { LocalStorageService } from './core/local-storage.service';
import { getLocations } from './store/actions/app.actions';
import { AppState } from './store/reducers/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'trg-assessment';
  public activeId = 1;

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService,
    private localStorageService: LocalStorageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getLocations());
    this.initLocalization();
    this.setActiveTab();
  }

  public changeTranslation(locale: 'en' | 'fr') {
    this.localStorageService.setItem('locale', locale)
    this.translate.use(locale)
  }

  private initLocalization(): void {
    const locale = this.localStorageService.getItem('locale') ?? 'en';

    if (locale) {
      this.translate.setDefaultLang(locale);
    }
  }

  private setActiveTab(): void {
    this.activeId = this.location.path().includes('table') ? 2 : 1;
  }
}
