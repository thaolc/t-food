/*
* @Author: th_le
* @Date:   2017-05-25 14:26:46
* @Last Modified by:   th_le
* @Last Modified time: 2017-06-08 15:18:44
*/

export class Blog {
  constructor(
    public title: string = "",
    public image: string = "",
    public content: string = "",
    public date: string = "",
    public author: string = ""
  ) {}
}