import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import Amplify from "aws-amplify";

 Amplify.Amplify.configure({
      auth:{
        aws_region:"us-east-1",
        user_pool_id:"us-east-1_1X8wYAqHH",
        user_pool_client_id: '6uhhgjmvt2jts6mi7090di9j17'
      }
})
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
