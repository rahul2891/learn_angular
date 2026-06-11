import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class InvestmentResult {
 private investmentService = inject(InvestmentService);

 results = computed(() => this.investmentService.resultsData());
}
