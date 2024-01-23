

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-chart',
  template: `
    <div>
      
      <h3>Language Chart</h3>
      <div *ngIf="data && data.length > 0" class="chart-container">
        
        <ul>
          <li *ngFor="let item of data">
            {{ item.language }}: {{ item.value }}
          </li>
        </ul>
      </div>
      <div *ngIf="!data || data.length === 0" class="no-data-message">
        No language data available.
      </div>
    </div>
  `,
})
export class LanguageChartComponent {
  @Input() data: { language: string; value: number }[] = [];
}
