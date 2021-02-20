# 🌮 TGIF 🌮
_TGIF 공식 홈페이지를 다시 디자인 + 코딩해보았습니다._ 

### 📍https://sumin03.github.io/TGIF/

>저의 포트폴리오는 크롬을 기반으로 디자인+코딩 되었기 때문에 꼭 크롬을 확인해주세요! 그리고 1440px을 기준으로 디자인하였습니다. 

<img width="800" alt="main_screenshot" src="https://user-images.githubusercontent.com/77384682/107885754-597e3c00-6f3f-11eb-9d42-7c043881720c.png">




## 이 웹사이트를 바꾸고 싶었던 이유 

### 📍http://www.tgif.co.kr/main.asp 
### 📍https://www.tgifridays.com 
> This is original tgif websites (korea/State) 
> 
제가 **한국 홈페이지**를 열었을 때, 이 웹사이트는 전체 스크린을 다 사용해서 디자인했다는 느낌을 받지 못했고 그래서 그런지 컨텐츠를 한 눈에 파악하는데에 어려움이 있었습니다.<br> 
이러한 점을 보완하기 위해 저는 **전체 화면에 딱 맞게 새로 레이아웃을 디자인하였습니다** <br>
게다가, 모든 페이지들이 그냥 일반 레스토랑 메뉴와 같은 형식이라 공식 홈페이지 느낌을 받을 수 없어서 메뉴 페이지와 같은 경우에는 아예 새로운 레이어를 만들어 재 디자인하였습니다.<br>
반면에 미국 웹사이트 같은 경우에는 홈페이지가 있는 반면에 안에 컨텐츠가 거의 없고 메인페이지에는 큰 슬라이드 2~3개만이 있어 두 홈페이지의 장점만을 모아 새롭게 디자인하였습니다. 




 ## 바꾸기 위해 노력한 것들

1. 전체적이 레이아웃을 새로 재구성하여 공식적인 홈페이지의 느낌을 살렸습니다.  

2. 레이아웃을 짤 때 풀스크린으로 구성하여 자사의 메뉴를 강조하였고, 메뉴 세부페이지에는 추천하는 다른 메뉴들도 볼 수 있게 디자인 + 코딩하여 사용자들에게 편리함을 제공하였습니다.  

3. 기존의 밋밋한 디자인에서 벗어나 메인 페이지에서 사람들의 시선을 잡기 위해 도형을 이용하여 디자인하였습니다. 




## 코드에서의 변경사항 

보시면 아시다시피, 자사의 공식 홈페이지 있음에도 불구하고 제대로 된 컨텐츠가 없었습니다. (미국 홈페이지) 
저는 이러한 점에서 사용자들이 불편함을 느낄 수 있다느 생각이 들었고, 그래서 두 홈페이지의 장점만을 모아 새롭게 구성을 하였습니다. 
저는 이 홈페이지를 **반응형으로 만들었습니다**. 
보통 타사의 홈페이지를 보면 반응형 웹사이트가 아닌 경우에는 모바일 앱을 제작하여 모바일 사용자들을 배려하는데, 
TGIF같은 경우에는 반응형 웹사이트도, 모바일 앱도 없기 때문에 모바일 사용자들이 불편함을 겪고 있었기 때문입니다. 

저는 반응형 breakpoints를 아래와 같이 구성해보았습니다. 

(min-width:1024px) and (max-width:1365px)  
(min-width:768px) and (max-width:1023px) 
(max-width:420px)


#### CSS + JS 코드에서 바뀐 점 

저는 국비지원학원을 다녔었지만, **Responsive layout grid** 와 관련하여 수업을 배운 적이 없어서 스스로 공부해야했습니다. 
아래의 사이트들을 통해서 독학을 하였고, 이번 프로젝트를 통해 처음으로 사용해보았습니다.

### 📍https://material.io/design/layout/responsive-layout-grid.html
### 📍https://howto-wordpress-tips.com/responsive-breakpoints-tutorial/


마지막으로는 폰트 사이즈를 **rem**으로 바꾸어 보았습니다.<br>
처음에 사이트를 만들 때는 반응형에서 어떠한 폰트단위를 써야하는 지 잘 몰라서 마구잡이로 사용하였는데
스스로 찾아 공부를 하고 보니 **rem**을 이용하는 것이 em보다 많은 항목들을 계산해야할 경우에 더 낫다는 것을 발견하고 
**이벤트 페이지**에서 모든 폰트 사이즈를 **rem**으로 바꾸었습니다. 

<img width="800" alt="font-size" src="https://user-images.githubusercontent.com/77384682/108603469-5d043e00-73eb-11eb-9ad6-69a264c765e2.png">






## 다시 만든 홈페이지에서 가장 맘에 드는 점

1. 제가 스스로 공부해서 발견한 **Responsive layout grid**을 이용하여 반응형 웹사이트를 만든 것입니다. 

<img width="600" src=https://user-images.githubusercontent.com/77384682/108103499-603ab980-70cd-11eb-9385-83d0336d42b6.gif">
                                                                                                                           

2. 사용자가 TGIF 페이지를 열었을 때 기억에 남을 수 있게 만들 위해 많은 고민을 하였
2. I tried to make the landing page much more remarkable when users open the website. 
   So I designed top of the landing page with circle shape and also use their representative color! 


<img width="600" src="https://user-images.githubusercontent.com/77384682/108103581-7cd6f180-70cd-11eb-9ab5-06937b0b6304.png">



3. When you see the **original website** They do not have detailed page about the menu. 
So I made detailed page and also add **Other options for Appetizers** to give more options to users. 

<img width="600" src="https://user-images.githubusercontent.com/77384682/108103764-be679c80-70cd-11eb-9af8-8e19afe28cd7.png">


4. In Brand Story, Font-size, layout are densed so users hard to read. 
So I changed the layout,font and image size for users can read it much more comfortable. 

<img width="600" alt="banner" src="https://user-images.githubusercontent.com/77384682/108104391-988ec780-70ce-11eb-9587-38576edfcc76.png">


