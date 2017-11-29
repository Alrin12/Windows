import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-house',
  template: `
  <div class="Hosting-Form-Container">
  <div><button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">Toggle Button</button></div>

  <mat-horizontal-stepper [linear]="isLinear">
  <mat-step [stepControl]="representationFormGroup" class="Stepper-Hosting-Form-Group">
  <form [formGroup]="representationFormGroup">


  <!-- Representation 삽입 영역 -->


  <button mat-button matStepperNext>다음</button>
    </form>
    </mat-step>

    <mat-step [stepControl]="houseFormGroup" class="Stepper-Hosting-Form-Group">
    <form [formGroup]="houseFormGroup">

    <ng-template matStepLabel>제공하실 숙소의 정보를 입력해주세요.</ng-template>
    <span><h1>등록하실 숙소 종류는 무엇인가요?</h1></span>
    <br>

    <div class="house-form type-of-houses">
      <span><h4>숙소 유형을 골라주세요.</h4></span>
        <mat-form-field>
        <mat-select placeholder="숙소 유형" name="houseTypeControl" formControlName="houseTypeControl" disableRipple required>
          <mat-option *ngFor="let house of typeOfHouses" [value]="house.id">
          {{ house.description }}
          </mat-option>
          </mat-select>
          <mat-error *ngIf="houseTypeControl.hasError('required')">집 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>





    <div class="house-form type-of-room">
      <span><h4>게스트가 묵을 방 유형</h4></span>
       <mat-form-field>
        <mat-select placeholder="집 전체" name="roomTypeControl" formControlName="roomTypeControl" disableRipple required>
          <mat-option *ngFor="let room of typeOfRooms" [value]="room.id">
          {{ room.description }}
          </mat-option>
        </mat-select>
          <mat-error *ngIf="roomTypeControl.hasError('required')">방 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>




    <div id="how-many-guests" class="house-form">
      <div>
        <span class="how-many-people-can-stay"><h4>숙소에 얼마나 많은 인원이 숙박할 수 있나요?</h4></span>
        <div class="count-guest-button"><button mat-mini-fab>-</button><button mat-mini-fab>+</button></div>
      </div>
    </div>


    <div class="house-form meal-type">
      <span><h3>식사 제공 여부를 골라주세요.</h3></span>
        <mat-form-field>
          <mat-select placeholder="식사 유형" name="mealTypeControl" formControlName="mealTypeControl" disableRipple required>
            <mat-option *ngFor="let meal of typeOfMeals" [value]="meal.id">
            {{ meal.description }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="mealTypeControl.hasError('required')">제공하실 식사 유형을 선택해주세요!</mat-error>
        </mat-form-field>
    </div>



      <div id="facilities-info">
        <span><h3>숙소의 시설을 입력해주세요.</h3></span>
        <mat-form-field>
            <mat-select placeholder="인터넷 제공 여부" name="facilityControl" formControlName="facilityControl" disableRipple required>
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

   <mat-step [stepControl]="addressFormGroup" class="stepper-Form-Group">
    <form [formGroup]="addressFormGroup">




    <!-- Address 삽입 영역 -->





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
    .count-peoplebutton {
      position: relative;
      display: block;
      width: 200px;
      float: left;
      margin-top: 10px;
    }
    .how-many-people-can-stay {
      display: block;
      width: 350px;
      float: left;
    }
    .meal-type {
      clear: left;
    }
  `
  ]
})
export class HouseComponent implements OnInit {
  // houseCategoryControl = new FormControl('', [Validators.required]);
  // houseTypeControl = new FormControl('', [Validators.required]);
  // roomTypeControl = new FormControl('', [Validators.required]);
  // mealTypeControl = new FormControl('', [Validators.required]);
  // facilityControl = new FormControl('', [Validators.required]);

  // hostingFormGroup: FormGroup;
  representationFormGroup: FormGroup;
  houseFormGroup: FormGroup;
  addressFormGroup: FormGroup;

  isLinear = false;

  typeOfHouses = [
    { id: 1, type: 'Apartment', description: '아파트' },
    { id: 2, type: 'House', description: '주택' },
    { id: 3, type: 'Guesthouse', description: '게스트하우스' },
    { id: 4, type: 'Office', description: '사무실' },
    { id: 5, type: 'Dormitory', description: '기숙사' }
  ];

  typeOfRooms = [
    { id: 1, type: 'Private room', description: '개인실' },
    { id: 2, type: 'Shared room', description: '다인실' }
  ];

  typeOfMeals = [
    { id: 1, type: 'It\'s a deal! We share a meal!', description: '식사를 제공합니다.' },
    { id: 2, type: 'Make your dishes using host\'s ingredient', description: '호스트의 재료를 사용해서 직접 요리하세요!' },
  ];

  // No Internet이 가장 상단으로 와야함, 옵션 수정 해야함 -> 와이파이와 유선 랜 모두 제공하는 옵션
  provideInternetTypes = [
    { id: 1, type: 'wifi', description: '와이파이' },
    { id: 2, type: 'Only LAN', description: '유선랜' },
    { id: 3, type: 'No Internet', description: '제공안함' }
  ];

  constructor(public _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.houseFormGroup = this._formBuilder.group({
      houseTypeControl: ['', Validators.required],
      roomTypeControl: ['', Validators.required],
      mealTypeControl: ['', Validators.required],
      facilityControl: ['', Validators.required]
    });
  }

  get houseTypeControl() {
    return this.houseFormGroup.get('houseTypeControl');
  }

  get roomTypeControl() {
    return this.houseFormGroup.get('roomTypeControl');
  }

  get mealTypeControl() {
    return this.houseFormGroup.get('mealTypeControl');
  }

  get facilityControl() {
    return  this.houseFormGroup.get('facilityControl');
  }
}
