// src/app/components/user/user.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() userData: any;
  @Input() languageStats: any;
  @Input() userActivities: any;
  @Input() repositories: any[] = [];
  @Input() error: string | null = null;
  @Input() rateLimitMessage: string | null = null;

  constructor(private router: Router, private githubService: GithubService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const username = params.get('username');

      if (username) {
        this.fetchData(username);
      } else {
        console.error('Username is undefined.');
      }
    });
  }

  handleButtonClick(repo: any) {
    this.router.navigate(['/repository-details', repo.name]);
    this.fetchRepositoryDetails(repo.name);
  }

  private fetchData(username: string) {
    this.fetchLanguageStats(username);
    this.fetchUserRepositories(username);
    this.fetchUserActivities(username);
    this.fetchUserData(username);
  }

  private fetchUserData(username: string) {
    this.githubService.getUserData(username).subscribe(
      (data) => (this.userData = data),
      (error) => {
        console.error('Error fetching user data:', error);
        this.error = 'Failed to fetch user data';
      }
    );
  }

  private fetchLanguageStats(username: string) {
    this.githubService.getLanguageStats(username).subscribe(
      (stats) => (this.languageStats = stats),
      (error) => {
        console.error('Error fetching language stats:', error);
        this.error = 'Failed to fetch language stats';
      }
    );
  }

  private fetchUserRepositories(username: string) {
    this.githubService.getUserRepositories(username).subscribe(
      (repos) => (this.repositories = repos),
      (error) => {
        console.error('Error fetching user repositories:', error);
        this.error = 'Failed to fetch user repositories';
      }
    );
  }

  private fetchUserActivities(username: string) {
    this.githubService.getUserActivities(username).subscribe(
      (activities) => (this.userActivities = activities),
      (error) => {
        console.error('Error fetching user activities:', error);
        this.error = 'Failed to fetch user activities';
      }
    );
  }

  private fetchRepositoryDetails(repoName: string) {
    this.githubService.getRepositoryDetails(repoName).subscribe(
      (details: any) => console.log('Repository Details:', details),
      (error: any) => {
        console.error('Error fetching repository details:', error);
        this.error = 'Failed to fetch repository details';
      }
    );
  }
}
