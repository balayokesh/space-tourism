import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, title: "Home" },
    { path: "destination", component: DestinationComponent, title: "Destination" },
    { path: "crew", component: CrewComponent, title: "Crew" },
    { path: "technology", component: TechnologyComponent, title: "Technology" },
];
