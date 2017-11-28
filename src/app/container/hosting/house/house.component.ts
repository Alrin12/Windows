import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-house',
  template: `
  <div class="house-type-container">
  <div><button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">test</button></div>

  <mat-horizontal-stepper [linear]="isLinear">
  <mat-step [stepControl]="firstFormGroup" class="Stepper-Form-Group">
  <form [formGroup]="firstFormGroup">
  <ng-template matStepLabel>제공하실 숙소의 정보를 입력해주세요.</ng-template>
    <h3>등록하실 숙소 종류는 무엇인가요?</h3>
    <br>
    <div id="type-of-houses">
      <p>숙소 유형을 집, 호텔, 기타 중에서 골라주세요.</p>
        <mat-form-field>
        <mat-select placeholder="숙소 유형" [(ngModel)]="typeOfHousesId" [formControl]="houseTypeControl" disableRipple required>
          <mat-option *ngFor="let house of typeOfHouses" [value]="house.id">
          {{ house.type }}
          </mat-option>
          </mat-select>
          <mat-error *ngIf="houseTypeControl.hasError('required')">집 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>

    <div id="category-of-houses">
      <p>숙소의 건물 유형을 알려주세요.</p>
      <mat-form-field>
        <mat-select placeholder="하나를 선택해주세요." [formControl]="houseCategoryControl" disableRipple required>
          <mat-option *ngFor="let building of categoryOfHouses" [value]="building.id">
          {{ building.category }}
          </mat-option>
        </mat-select>
        <mat-error *ngIf="houseCategoryControl.hasError('required')">건물 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>

    <div id="type-of-room">
      <p>게스트가 묵을 방 유형</p>
       <mat-form-field>
        <mat-select placeholder="집 전체" [formControl]="roomTypeControl" disableRipple required>
          <mat-option *ngFor="let room of typeOfRooms" [value]="room.id">
          {{ room.type }}
          </mat-option>
          </mat-select>
          <mat-error *ngIf="roomTypeControl.hasError('required')">방 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>

    <div id="house-option">
      <p>게스트만 사용하도록 만들어진 숙소인가요?</p>
      <mat-radio-group>
        <mat-radio-button value="1">예. 게스트용으로 따로 마련된 숙소입니다.</mat-radio-button>
        <br>
        <mat-radio-button value="2">아니요. 제 개인 물건이 숙소에 있습니다.</mat-radio-button>
      </mat-radio-group>
    </div>
    <div>
    <button mat-button matStepperNext>다음</button>
    </div>
    </form>
    </mat-step>

    <mat-step [stepControl]="secondFormGroup" class="stepper-Form-Group">
    <form [formGroup]="secondFormGroup">
    <ng-template matStepLabel>숙소에 대한 추가 정보를 입력해주세요.</ng-template>
    <div id="how-many-guests">

    <div>
    <span class="how-many-people"><h3>숙소에 얼마나 많은 인원이 숙박할 수 있나요?</h3></span>
    <div class="count-button"><button mat-mini-fab>-</button><button mat-mini-fab>+</button></div>
    </div>
    </div>

      <div id="meal-type">
      <p>제공하실 식사 유형을 골라주세요.</p>
        <mat-form-field>
        <mat-select placeholder="식사 유형" [formControl]="mealTypeControl" disableRipple required>
          <mat-option *ngFor="let meal of typeOfMeals" [value]="meal.id">
          {{ meal.type }}
          </mat-option>
          </mat-select>
          <mat-error *ngIf="mealTypeControl.hasError('required')">제공하실 식사 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>
      <div>
        <button mat-button matStepperPrevious>이전</button>
        <button mat-button matStepperNext>다음</button>
      </div>
    </form>
    </mat-step>

   <mat-step [stepControl]="thirdFormGroup" class="stepper-Form-Group">
    <form [formGroup]="thirdFormGroup">
    <ng-template matStepLabel>숙소 시설에 대한 정보를 입력해주세요.</ng-template>
   
    <div id="facilities-info">
    <span><h3>숙소의 시설을 입력해주세요.</h3></span>
    <mat-form-field>
        <mat-select placeholder="인터넷 제공 여부" [formControl]="facilityControl" disableRipple required>
          <mat-option *ngFor="let internetType of provideInternetTypes" [value]="internetType.id">
          {{ internetType.description }}
          </mat-option>
          </mat-select>
          <mat-error *ngIf="facilityControl.hasError('required')">제공하실 인터넷 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>

    <div>
        <button mat-button matStepperPrevious>이전</button>
        <button mat-button matStepperNext>다음</button>
      </div>
    </form>
    </mat-step>
    </mat-horizontal-stepper>
  </div>

  <!-- 메시지 형식의 툴팁 -->
  <mat-card class="description-card description-house-type">
  <span>집 전체</span><br>
  <span>게스트에게 집 전체를 빌려줍니다.
  별채도 가능합니다.</span>


  <span>개인실</span><br>
  <span>침실은 게스트가 단독으로 사용하지만, 이외의 공간은 호스트나 다른 게스트와 공유할 수 있습니다.</span>

  <span>다인실</span><br>
  <span>게스트는 사적 공간 없이, 침실을 포함한 모든 공간을 호스트나 다른 게스트와 함께 이용합니다.</span>
  </mat-card>

  <mat-card class="description-card description-personal-stuff">
  <span>개인물건</span><br>
  <span>게스트는 숙소에 머물 때 사진이나 의류 등 호스트의 개인 물건이 있는지 알고싶어합니다.</span>
  </mat-card>

`,

  styles: [`
    .description-card {
      width: 220px;
    }
    .count-button {
      position: relative;
      display: block;
      width: 200px;
      float: left;
      margin-top: 10px;
    }
    .how-many-people {
      display: block;
      width: 350px;
      float: left;
    }
    #meal-type {
      clear: left;
    }
  `
  ]
})
export class HouseComponent implements OnInit {
  houseTypeControl = new FormControl('', [Validators.required]);
  houseCategoryControl = new FormControl('', [Validators.required]);
  roomTypeControl = new FormControl('', [Validators.required]);
  mealTypeControl = new FormControl('', [Validators.required]);
  facilityControl = new FormControl('', [Validators.required]);

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  typeOfHouses = [
    { id: 1, type: '집' },
    { id: 2, type: '호텔' },
    { id: 3, type: '기타' }
  ];

  categoryOfHouses = [
    { id: 1, category: '아파트' },
    { id: 2, category: '게스트하우스' },
    { id: 3, category: '주택' },
    { id: 4, category: '별채' },
    { id: 5, category: '휴가용별장' },
    { id: 6, category: '오두막' },
    { id: 7, category: '이글루' },
    { id: 8, category: '통나무집' },
    { id: 9, category: '트리하우스' }
  ];

  typeOfRooms = [
    { id: 1, type: '집 전체' },
    { id: 2, type: '개인실' },
    { id: 3, type: '다인실' }
  ];

  typeOfMeals = [
    { id: 1, type: '제공안함' },
    { id: 2, type: '양식' },
    { id: 3, type: '중식' },
    { id: 4, type: '아시아' }
  ];

  // No Internet이 가장 상단으로 와야함, 옵션 수정 해야함 -> 와이파이와 유선 랜 모두 제공하는 옵션
  provideInternetTypes = [
    { id: 1, type: 'wifi', description: '와이파이' },
    { id: 2, type: 'Only LAN', description: '유선랜' },
    { id: 3, type: 'No Internet', description: '제공안함' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstControl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondControl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdControl: ['', Validators.required]
    });
  }

}
