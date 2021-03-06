import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from "@angular/router"

import { ServiceWorkerModule } from "@angular/service-worker"
import { AppComponent } from "./app.component"

import { environment } from "../environments/environment"
import { AnswerComponent } from "./answer/answer.component"
import { QuestionComponent } from "./question/question.component"
import { GameComponent } from "./game/game.component"
import { GameManagerComponent } from "./game-manager/game-manager.component"
import { CoutdownTimerComponent } from "./coutdown-timer/coutdown-timer.component";
import { HomeComponent } from './home/home.component';
import { EndGameComponent } from './end-game/end-game.component'
import { GameService } from "./services/game.service"
import { UtilService } from "./services/util.service";
import { SortRandomPipe } from './shared/sort-random.pipe'

const appRoutes: Routes = [
  { path: "game", component: GameManagerComponent },
  { path: "", component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    GameComponent,
    GameManagerComponent,
    CoutdownTimerComponent,
    HomeComponent,
    EndGameComponent,
    SortRandomPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [GameService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
