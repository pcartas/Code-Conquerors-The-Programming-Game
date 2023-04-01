import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Question {
  category: number;
  difficulty: string;
  number: string;
  options: string;
  question: string;
  code: string | null;
  answer: string;
  detailed_answer: string | null;
}


@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private readonly questionsFileUrl = 'assets/questions.json';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsFileUrl);
  }

  getQuestion(category: number, difficulty: string, number: string): Observable<Question> {
    return this.http.get<Question[]>(this.questionsFileUrl).pipe(
      map((questions: any[]) =>
        questions.find(
          (question) =>
            question.category === category &&
            question.difficulty === difficulty &&
            question.number === number
        )
      )
    );
  }
  
}
