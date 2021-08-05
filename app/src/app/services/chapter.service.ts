import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
chapters = [
  {
     id: 1,
     resume: "Resumé chap 1",
     idBook: 1,
     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc. Erat imperdiet sed euismod nisi porta lorem mollis. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Sed arcu non odio euismod lacinia at quis risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Leo urna molestie at elementum. Nibh mauris cursus mattis molestie a iaculis at. Vitae nunc sed velit dignissim sodales ut eu. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Sit amet consectetur adipiscing elit duis tristique. Sed faucibus turpis in eu mi bibendum neque.

     In tellus integer feugiat scelerisque varius morbi enim nunc. Risus ultricies tristique nulla aliquet. Sit amet consectetur adipiscing elit. Ac odio tempor orci dapibus ultrices in iaculis nunc. Dolor magna eget est lorem ipsum. Tristique senectus et netus et malesuada. Sodales ut etiam sit amet nisl purus. Viverra adipiscing at in tellus. Auctor elit sed vulputate mi sit. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
     
     Senectus et netus et malesuada fames ac. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Arcu dui vivamus arcu felis bibendum. Lacus laoreet non curabitur gravida. Diam vel quam elementum pulvinar etiam non quam. Rhoncus urna neque viverra justo nec ultrices dui sapien. Condimentum vitae sapien pellentesque habitant morbi tristique. Nunc consequat interdum varius sit amet mattis. Nulla facilisi cras fermentum odio eu. Vitae congue eu consequat ac felis donec. Fermentum leo vel orci porta non pulvinar neque laoreet. Enim diam vulputate ut pharetra sit amet.
     
     Pellentesque massa placerat duis ultricies lacus sed turpis. Praesent elementum facilisis leo vel fringilla. Faucibus turpis in eu mi bibendum. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Id faucibus nisl tincidunt eget nullam non. Amet purus gravida quis blandit turpis cursus. At imperdiet dui accumsan sit amet nulla facilisi. In vitae turpis massa sed elementum tempus egestas. Aenean sed adipiscing diam donec. Consequat id porta nibh venenatis cras sed. In dictum non consectetur a. Massa tempor nec feugiat nisl pretium fusce id velit ut. Mi bibendum neque egestas congue quisque egestas diam. Cursus risus at ultrices mi. Ut pharetra sit amet aliquam id.
     
     Laoreet sit amet cursus sit amet dictum. Dui vivamus arcu felis bibendum ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Nascetur ridiculus mus mauris vitae ultricies. Donec massa sapien faucibus et molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Ultrices eros in cursus turpis massa. Blandit turpis cursus in hac habitasse. Consectetur a erat nam at lectus urna duis convallis convallis. Lorem mollis aliquam ut porttitor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nunc mi ipsum faucibus vitae aliquet. Ultricies integer quis auctor elit sed. Etiam non quam lacus suspendisse faucibus interdum. Amet nisl purus in mollis nunc sed id. Quam quisque id diam vel quam.`,
    before: [],
    after: [2,3]
    },
  {
     id: 2,
     resume: "Resumé chap 2",
     idBook: 1,
     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi tincidunt augue. Aliquam sem fringilla ut morbi. Lobortis mattis aliquam faucibus purus. Tincidunt dui ut ornare lectus sit amet est. Dolor purus non enim praesent elementum facilisis leo vel. Etiam non quam lacus suspendisse faucibus. Suspendisse potenti nullam ac tortor vitae purus. Est velit egestas dui id ornare arcu. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Morbi tristique senectus et netus et malesuada. Dictum fusce ut placerat orci nulla pellentesque dignissim. Et tortor consequat id porta nibh venenatis. Porta non pulvinar neque laoreet. Dictumst quisque sagittis purus sit amet volutpat consequat. Ut sem nulla pharetra diam sit amet.

     Vulputate dignissim suspendisse in est ante in nibh mauris. Varius sit amet mattis vulputate. Condimentum mattis pellentesque id nibh tortor. Elit ut aliquam purus sit. Odio morbi quis commodo odio. Quam pellentesque nec nam aliquam sem et tortor consequat. Est ullamcorper eget nulla facilisi etiam. Tortor posuere ac ut consequat semper viverra nam. Et netus et malesuada fames. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Tellus molestie nunc non blandit massa enim nec dui nunc. Convallis posuere morbi leo urna. Ipsum dolor sit amet consectetur adipiscing elit. Magna ac placerat vestibulum lectus mauris ultrices eros in. Morbi tincidunt ornare massa eget egestas.`,
     before: [1],
     after: [3,4]
  },
  {
     id: 3,
     resume: "La flemme d'en faire plus",
     idBook: 1,
     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel. Aliquet bibendum enim facilisis gravida neque convallis a cras. Volutpat ac tincidunt vitae semper. Lorem ipsum dolor sit amet consectetur. Eget aliquet nibh praesent tristique magna. Integer malesuada nunc vel risus commodo viverra maecenas. Lobortis elementum nibh tellus molestie nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Sed blandit libero volutpat sed cras. Porttitor eget dolor morbi non arcu risus quis. Sed libero enim sed faucibus turpis in eu mi. Scelerisque purus semper eget duis at tellus at urna condimentum. Mi tempus imperdiet nulla malesuada pellentesque elit eget.

     Morbi tristique senectus et netus. Mauris vitae ultricies leo integer malesuada nunc vel. At quis risus sed vulputate odio ut. Imperdiet nulla malesuada pellentesque elit eget. Habitant morbi tristique senectus et netus et malesuada fames ac. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sit amet nisl purus in mollis nunc. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Sit amet est placerat in egestas. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Libero enim sed faucibus turpis in eu. Sed nisi lacus sed viverra tellus.
     
     Tempor orci dapibus ultrices in iaculis nunc. Ipsum consequat nisl vel pretium. Consectetur libero id faucibus nisl tincidunt. Sed risus pretium quam vulputate dignissim suspendisse in est. Volutpat lacus laoreet non curabitur gravida arcu. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Enim sed faucibus turpis in eu mi. Pharetra diam sit amet nisl suscipit. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Ut aliquam purus sit amet luctus venenatis. Cras sed felis eget velit aliquet sagittis id consectetur.`,
     before: [1],
     after: []
  },
  {
    id: 4,
    resume: "Je t'avais prévenu",
    idBook: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel. Aliquet bibendum enim facilisis gravida neque convallis a cras. Volutpat ac tincidunt vitae semper. Lorem ipsum dolor sit amet consectetur. Eget aliquet nibh praesent tristique magna. Integer malesuada nunc vel risus commodo viverra maecenas. Lobortis elementum nibh tellus molestie nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Sed blandit libero volutpat sed cras. Porttitor eget dolor morbi non arcu risus quis. Sed libero enim sed faucibus turpis in eu mi. Scelerisque purus semper eget duis at tellus at urna condimentum. Mi tempus imperdiet nulla malesuada pellentesque elit eget.

    Morbi tristique senectus et netus. Mauris vitae ultricies leo integer malesuada nunc vel. At quis risus sed vulputate odio ut. Imperdiet nulla malesuada pellentesque elit eget. Habitant morbi tristique senectus et netus et malesuada fames ac. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sit amet nisl purus in mollis nunc. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Sit amet est placerat in egestas. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Libero enim sed faucibus turpis in eu. Sed nisi lacus sed viverra tellus.
    
    Tempor orci dapibus ultrices in iaculis nunc. Ipsum consequat nisl vel pretium. Consectetur libero id faucibus nisl tincidunt. Sed risus pretium quam vulputate dignissim suspendisse in est. Volutpat lacus laoreet non curabitur gravida arcu. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Enim sed faucibus turpis in eu mi. Pharetra diam sit amet nisl suscipit. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Ut aliquam purus sit amet luctus venenatis. Cras sed felis eget velit aliquet sagittis id consectetur.`,
    before: [],
    after: []
 }
];
baseUrl : string = "http://localhost:8020/api/book";
constructor(private http: HttpClient) { }

create(object): Observable<any> {
  return this.http.post<any>(this.baseUrl, object)
}

modify(newValues): Observable<any> {
  return this.http.put<any>(this.baseUrl + "/update", newValues)
}

select(id): Observable<any> {
  return this.http.get<any>(this.baseUrl + "/" + id)
}

selectAll(idBook): Observable<any> {
  return this.http.get<any>(this.baseUrl + "/" + idBook)
}

delete(id): Observable<any> {
  return this.http.delete<any>(this.baseUrl + "/delete/" + id)
}
}
