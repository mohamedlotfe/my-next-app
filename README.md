## Introduction
This is a web-based restful API as a backend to execute Selenium script.

## Features
- Use Next.js 13 as a full stack framework.
- Use TypeScript to improve the code quality and maintainability.
- Use Context API to manage application state and data (if required)
- Use React Hooks to handle component state and lifecycle methods.
- Try to use Next.js features to implement the restful APIs and integrate them with frontend webpage.

## The soultion Demo
:white_square_button: you can see the local demo of the service 
[![Watch the video](https://cdn-icons-png.flaticon.com/512/2765/2765116.png)](https://watch.screencastify.com/v/zUtKQ12buwGahn289IZK)


## Functionality:
- Implement a typescript backend with Selenium script that do the following:
- Open browser and navigates to https://www.google.com o Type in side search bar “testing” word then Click on search button.
- Implement a GET API that calls the previous selenium script and return success in case the script successfully executed.
- Implement a simple webpage that contains a button and disabled field, when click the button the API fired and script executed, then the results appear inside the disabled field.

## Hints:
- use Selenium WebDriver with Chrome, first download ChromeDriver - WebDriver for Chrome. 
- This can be installed via Homebrew with ``` brew install chromedriver ```
- manually by downloading, extracting, moving and setting the PATH as follows:
```bash
$ cd $HOME/Downloads
$ wget http://chromedriver.storage.googleapis.com/2.22/chromedriver_mac32.zip
$ unzip chromedriver_mac32.zip
$ mkdir -p $HOME/bin
$ mv chromedriver $HOME/bin
$ echo "export PATH=$PATH:$HOME/bin" >> $HOME/.bash_profile
```
[Source: install and set path to chromedriver on mac or linux
](http://codrspace.com/rails4sandeep/install-and-set-path-to-chromedriver-on-mac-or-linux/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [@types/selenium-webdriver](https://www.npmjs.com/package/@types/selenium-webdriver)
- [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
