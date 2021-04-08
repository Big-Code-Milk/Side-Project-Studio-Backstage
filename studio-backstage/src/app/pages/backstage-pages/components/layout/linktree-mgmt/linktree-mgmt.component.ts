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

  Create(Index: any) {
    console.log('Index', typeof (Index));
    let IndexArray: Array<string> = Index.split('.');
    console.log('IndexArray', IndexArray.length);
    // "0", "1", "0", "0" this.TreeDate[0].Children[1].Children[0].push()
    let test: any;
    IndexArray.forEach((value: string, index: number, array: string[]) => {
      console.log('index', index);
      if (index == 0) {
        test = `this.TreeDate[${value}]`;
      }
      else if (index == IndexArray.length - 1) {
        test += `.Children`;
      } else {
        test += `.Children[${value}]`;
      }
    });
    console.log(test);
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
    console.log(eval(test));
    let TestArray = eval(test);
    TestArray.push({
      NickName: 'TESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', Url: '', Children: [

      ]
    })
  }

  Update() {

  }

  Delete() {

  }

}
