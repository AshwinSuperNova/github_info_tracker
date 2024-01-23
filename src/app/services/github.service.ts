
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly githubApiUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getUserData(username: string): Observable<any> {
    const url = `${this.githubApiUrl}users/${username}`;
    return this.http.get(url);
  }

  getLanguageStats(username: string): Observable<any> {
    const url = `${this.githubApiUrl}users/${username}/repos?per_page=100`;
    return this.http.get(url);
  }

  getRepositoryDetails(repoName: string): Observable<any> {
    const url = `${this.githubApiUrl}repos/${repoName}`;
    return this.http.get(url);
  }

  getUserRepositories(username: string): Observable<any> {
    const url = `${this.githubApiUrl}users/${username}/repos?per_page=5`;
    return this.http.get(url);
  }

  getUserActivities(username: string): Observable<any> {
    const url = `${this.githubApiUrl}users/${username}/events?per_page=10`;
    return this.http.get(url);
  }
}
