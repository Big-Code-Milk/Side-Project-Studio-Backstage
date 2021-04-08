import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linktree-mgmt',
  templateUrl: './linktree-mgmt.component.html',
  styleUrls: ['./linktree-mgmt.component.css']
})
export class LinktreeMgmtComponent implements OnInit {

  toggle: any = {};

  TreeDate = [
    {
      NickName: '程式', Url: '', Children: [
        {
          NickName: 'Vue3基礎', Url: 'https://book.vue.tw/CH1/1-1-introduction.html', Children: [

          ]
        },
        {
          NickName: 'Vue3API', Url: 'https://uu9924079.medium.com/vue-composition-api-%E7%AD%86%E8%A8%98-%E4%B8%8A-d60eabe3f469', Children: [
            {
              NickName: '行銷', Url: '', Children: [
                {
                  NickName: 'SEO概念', Url: 'https://www.newscan.com.tw/all-seo/seo-guide.htm#', Children: [

                  ]
                },
                {
                  NickName: 'AG SEO', Url: 'https://medium.com/geekculture/seo-in-angular-without-server-side-rendering-fa7d984dd44b', Children: [
                    {
                      NickName: '行銷', Url: '', Children: [
                        {
                          NickName: 'SEO概念', Url: 'https://www.newscan.com.tw/all-seo/seo-guide.htm#', Children: [

                          ]
                        },
                        {
                          NickName: 'AG SEO', Url: 'https://medium.com/geekculture/seo-in-angular-without-server-side-rendering-fa7d984dd44b', Children: [
                            {
                              NickName: '行銷', Url: '', Children: [
                                {
                                  NickName: 'SEO概念', Url: 'https://www.newscan.com.tw/all-seo/seo-guide.htm#', Children: [

                                  ]
                                },
                                {
                                  NickName: 'AG SEO', Url: 'https://medium.com/geekculture/seo-in-angular-without-server-side-rendering-fa7d984dd44b', Children: [

                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }, {
              NickName: '行銷', Url: '', Children: [
                {
                  NickName: 'SEO概念', Url: 'https://www.newscan.com.tw/all-seo/seo-guide.htm#', Children: [

                  ]
                },
                {
                  NickName: 'AG SEO', Url: 'https://medium.com/geekculture/seo-in-angular-without-server-side-rendering-fa7d984dd44b', Children: [

                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      NickName: '行銷', Url: '', Children: [
        {
          NickName: 'SEO概念', Url: 'https://www.newscan.com.tw/all-seo/seo-guide.htm#', Children: [

          ]
        },
        {
          NickName: 'AG SEO', Url: 'https://medium.com/geekculture/seo-in-angular-without-server-side-rendering-fa7d984dd44b', Children: [

          ]
        }
      ]
    },
    {
      NickName: '業務', Url: '', Children: [

      ]
    }
  ];

  constructor() {
    console.log('TreeDate', this.TreeDate);
  }

  IsEdited: boolean = false;

  ngOnInit(): void {
    this.DataInit();
  }

  DataInit() {

  }

  Create(Event: any) {
    console.log('Event', Event);
  }

  Update() {

  }

  Delete() {

  }

}
