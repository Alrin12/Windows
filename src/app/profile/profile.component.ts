import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  // TEST_DUMMY_USER_DATA
  DUMMY_USER_PROFILE = {
    Name: '김경훈',
    Article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test',
    Resume: [{ pk: 1, type: 'Job', content: '지식서비스 Nanum Founder' }, {pk: 2, type:'Job', content: '대통령'}, { pk: 3, type: 'School', content: '성균관대학교' }, { pk: 4, type: 'School', content: '서울고등학교' }],
    Activity: {
      Answer_View: '555',
      Answers: '1,400',
      Stars: '77,777',
      Follow: '100',
      Follower: '200'
    }
  };




  // Test Logic

  userArticle: string;
  userResume: object;
  isArticleOvered: boolean;
  isClicked: boolean;
  isSignIn: boolean;
  // 사진 업로드 테스트!
  dataUrl: any[] = [];

  ngOnInit() {
    this.userArticle = this.DUMMY_USER_PROFILE.Article;
    this.userResume = this.DUMMY_USER_PROFILE.Resume;
    this.isArticleOvered = false;
    this.isClicked = false;
    this.isSignIn = true; // 추후에 로그인 관련 컴포넌트가 개발 완료되면 기본값으로 false를 부여할 예정
  }

  // 사진 업로드 테스트!
  readUrl($event) {
    for (let i = 0; i < $event.target.files.length; i++) {
      const reader = new FileReader();
      reader.onload = (loadEvent: any) => {
        this.dataUrl.push(loadEvent.target.result);
      }
      reader.readAsDataURL($event.target.files[i]);
    }
  }



  getUserName(): string {
    return this.DUMMY_USER_PROFILE.Name;
  }

  getUserArticle(): string[] {
    // this.userArticle = this.DUMMY_UserArticle;
    const _userArticle = this.DUMMY_USER_PROFILE.Article.split('');

    // is Article.length > 200 ?
    if (this.DUMMY_USER_PROFILE.Article.length > 200) {
      const _userArticle_COPY: string[] = _userArticle.slice(0, 200);

      this.isArticleOvered = true;
      return _userArticle_COPY;
    }

    return _userArticle;
  }

  toggleShowArticle() {
    this.isClicked = !this.isClicked;
  }

  // 여기까지 상단



  getUserResumeIcon(resume) {
      switch (resume) {
        case 'Job':
          return 'business_center';
        case 'School':
          return 'school';
      }
  }

}