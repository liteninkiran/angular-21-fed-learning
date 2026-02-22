import {
  AccordionContent,
  AccordionGroup,
  AccordionPanel,
  AccordionTrigger,
} from '@angular/aria/accordion';
import { Grid, GridRow, GridCell, GridCellWidget } from '@angular/aria/grid';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-aria',
  imports: [
    AccordionGroup,
    AccordionTrigger,
    AccordionPanel,
    AccordionContent,
    Grid,
    GridRow,
    GridCell,
    GridCellWidget,
  ],
  templateUrl: './aria.html',
  styleUrl: './aria.scss',
})
export class Aria {
  public tags = signal(['Unleash', 'Your', 'Creativity', 'With', 'Angular', 'Aria']);

  public removeTag(index: number) {
    this.tags.update((tags) => [...tags.slice(0, index), ...tags.slice(index + 1)]);
  }
}
