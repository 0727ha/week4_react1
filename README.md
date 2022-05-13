# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

4주차 개념과제

-SPA란(Single Page Application)
어떤 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하는 것
-MPA란(Multi Page application)
-SPA와 MPA의  차이 
MPA는 새로운 페이지를 요청할 때마다 정적 리소스가 다운로드 되고, 그에 맞춰 전체 페이지를 다시 렌더링한다.
인터넷 주소창에 주소를 입력하거나, 링크를 클릭하는 등 사용자가 어떤 요청을 하면, 그에 맞는 html, 이미지 등의 파일들이 전부 다운로드 되고 다시 렌더링 된다.
반면 SPA는 웹 애플리케이션에 필요한 모든 정적 리소스를 최초 한번에 다운로드한다.
그 이후 새로운 페이지 요청이 있을 경우, 페이지 갱신에 필요한 데이터만 전달받아 페이지를 갱신한다.
어떤 링크를 클릭한다고 해서 그에 관련된 모든 파일을 다운받는게 아니라, 필요한 정보만 받아서 그 정보를 기준으로 업데이트 될 뿐이다.
따라서 SPA는 개발하기 더 심플하며 빠르다는 장점이 있고, MPA는 SEO 관점에 유리하다는 장점이 있다.

-Virtual DOM이란
DOM이란 브라우저에서 다룰 HTML 문서를 파싱하여 문서의 구성요소들을 객체로 구조화하여 나타낸 것이다. 
웹브라우저 단에서 DOM변화가 일어나면 웹브라우저가 css를 다시 연산하고 레이아웃을 구성하고,페이지를 렌더링하는 과정에서 시간이 허비되는데 이런 속도적인 부분과 수행 중 버그가 발생하는 일등을 개선하고자 Virtual DOM이 나왔다.
(정리)
Virtual DOM = 가상 DOM 처리
가상에서 DOM을 처리하므로 실제 HTML, CSS DOM 트리에 영향을 주지 않는다.
Vitual DOM은 리 랜더링 과정이 필요 없기 때문에 연산 비용이 Real DOM보다 적다.
연산이 끝난 후, 최종적인 변화만 딱 한번 전달해준다
-Virtual DOM의 장점
단순하고 성능 향상에 도움이 되며,react없이 사용할 수 있다. 또한 효율적인 비교 알고리즘이며 상태 변경을 생각하지 않고 애플리케이션을 빌드할 수 있다.


-브라우저 렌더링 과정
1)HTML을 파싱하여 DOM 객체를 생성하고, CSS를 파싱하여 스타일 규칙을 만듭니다.
2)이 두개를 합쳐서 실제로 웹 브라우저에 보여져야할 요소를 표현한 "렌더 트리" 라는 것을 만듭니다.
3)이 렌더 트리를 기준으로 레이아웃을 배치하고 색을 칠하는 등의 작업을 합니다.

