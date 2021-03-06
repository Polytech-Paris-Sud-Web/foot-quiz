import { Injectable } from "@angular/core"
import { Game } from "../models/game"
import { Question } from "../models/question"
import { GameConfig } from "../models/game-config"
import { UtilService } from "./util.service"
import questions from "../data/questions"

@Injectable()
export class GameService {
  constructor() {}

  protected getQuestions(): Question[] {
    return UtilService.pickRandomArray(questions, GameConfig.NB_QUESTIONS)
  }

  public getGame(): Game {
    const game = {
      id: 1,
      score: 0,
      questions: this.getQuestions()
    }
    return game
  }
}
