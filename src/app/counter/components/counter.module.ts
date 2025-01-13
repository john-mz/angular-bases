import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  exports: [CounterComponent],
  declarations: [CounterComponent]
})

export class CounterModule {}
