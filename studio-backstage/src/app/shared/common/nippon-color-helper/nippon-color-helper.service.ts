import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NipponColorHelperService {

  constructor(

  ) {

  }

  private NipponColorsContainer = [] as string[];
  private NipponColors = new BehaviorSubject(this.NipponColorsContainer);
  SharedNipponColors = this.NipponColors.asObservable();

  GetNipponColors(NipponColor: any) {

    let RandomColorsIndex = [] as number[];
    let RandomColors = [] as string[];

    console.log('NipponColor[47]', NipponColor[47]);

    while (RandomColorsIndex.length < 3) {
      let NowNum = this.GetRandom(1, 250);
      if (RandomColorsIndex.indexOf(NowNum) == -1) {
        console.log('NowNum', NowNum);
        RandomColorsIndex.push(NowNum);
        RandomColors.push(NipponColor[NowNum].value);
      }
    }

    return RandomColors;
  }

  GetRandom(Min: number, Max: number) {
    return Math.floor(Math.random() * (Max - Min + 1)) + Min;
  };

  SetNipponColorsInit(RandomColors: any) {
    this.NipponColors.next(RandomColors);
  }
}
