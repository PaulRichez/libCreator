import { Inject, Injectable, Optional } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
@Injectable({
  providedIn: 'root'
})
export class NgOpenaiService {
  private openaiObject!: OpenAIApi;
  constructor(
    @Optional() @Inject('config') private config: string) {
    if (config) this.setOpenAIAPIKey(config);
  }

  public setOpenAIAPIKey(value: string) {
    const configuration = new Configuration({
      apiKey: value,
    });
    this.openaiObject = new OpenAIApi(configuration);
  }
  openai(): OpenAIApi {
    if (!this.openaiObject) {
      console.error('NG-OpenAI is not configured');
    }
    return this.openaiObject;
  }
}
