This site was running in [RENDER](https://tmdb-api-refactor.onrender.com/)

## Refactor

- Added new two static sections on bottom
- Create custom Alert message for save notes and add to favorite button.
- Write comments in journal.js file
- Work on user friendly
  - Add home link to the logo in header
  - add new link "Category" in Header and its navigate to category section.

### Deployment

- Publish directory path is now
  > ./frontend/dist
- Added two Environment Variables as key and value pair

```
 API_KEY="our API key"
 PORT=3000
```

## How to deploy backed as a web service on render.com

To deploy backed on render following steps are performed

1. On render dashboard select `New -> Web Service`

![render-select-web-service](doc/images/render-select-web-service.png)

2. Select repository from `Git Provider` or `Public Git Repository` (Depends on ownership of repository) tab and click `Connect`

![render-select-repository](doc/images/render-select-repository.png)

3. Modify project `Name` if necessary and select `Region` closer to you. Backend will be deployed on the server in this region by Render. Also select render plan for `Instance Type`, in this deployment free plan is used. In free plan inactive instances may be suspended when inactive. It might take upto 50 Seconds on access to have the instance running again.

![render-general-settings](doc/images/render-general-settings.png)

4. `Repository` and `Branch` will be populated automatically, update if necessary. Give `Root Directory` as `backend` since backed code is in this directory. Specify `Build Command` as `npm install` to install the npm packages.

![render-build-and-deploy-settings-1](doc/images/render-build-and-deploy-settings-1.png)

5. Specify `Start Command` as `npm start`. This will run the npm webserver on port specified in Environment settings (Specified below). For web services Render default value of `PORT` variable is `10000`

![render-build-and-deploy-settings-2](doc/images/render-build-and-deploy-settings-2.png)

6. To specify environment variables switch to `Environment` tab and specify variables and values as `Key` and `Value` pair. In this deployment `API_KEY` of `TMDB-API` and `PORT` as `3000` is specified.

![render-environment-variables](doc/images/render-environment-variables.png)

After deployment is finished backend API URL is as following:

https://tmdb-api-refactor-3ftz.onrender.com/api/movies/popular
