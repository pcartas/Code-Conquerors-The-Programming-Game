import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question, QuestionService } from '../services/question.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {
  question!: Question;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) {}

  ngOnInit() {
    const category =+ (this.route.snapshot.paramMap.get('category') ?? 1);
    const difficulty = this.route.snapshot.paramMap.get('difficulty') as string;
    const number = this.route.snapshot.paramMap.get('number') as string;

    this.questionService.getQuestion(category, difficulty, number).subscribe((question: Question) => {
      this.question = question;
    });
  }
}
