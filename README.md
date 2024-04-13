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

/* - auth check  */
- pages: menu page, lessons learning & roadmap page done 
- navigation 

- conversation with images loaded, frame  
- reward popup,  
- game page 

 
- discuss further  
+ permission 
+ lessons stored on db   
+ game sudden attacks, limit game time 




# DEV
- Tech stack 
- Architecture 
- Question rendering from dataset
```js
export const multileChoices = [
  {
    conversations: [
      {
        from: "",
        to: "Cừu",
        content:
          "Hôm nay hãy cùng cừu lên mạng xã hội để xem có thông tin gì vui nhé!",
        decisionIdx: -1, 
        // -1 means it's a casual text, if idx != -1, load from decisions array below, 
        // for e.g decisionIdx: 2 loads decisions[2]
      }
    ],
    decisions: [
      {
        avatar: "../src/assets/sheep.png",
        question: "Bạn nhỏ ơi, Cừu có nên quét mã tham gia không?",
        answers: [
          {
            idxLetter: "A",
            answer:
              " Nút hành động 1: Tất nhiên rồi, đây là bạn cùng trường mà!",
            state: -1, // 1 correct, -1 incorrect, 0 neutral
          },
          {
            idxLetter: "B",
            answer:
              "Nút hành động 2: Tớ nghĩ là Cừu cần thêm thông tin về cuộc thi này đó!",
            state: 1,
          },
        ],
      },
    ],
  },
];
```
