import { Routes } from '@angular/router';
import { AnatomyobservableComponent } from './components/anatomyobservable/anatomyobservable.component';
import { Observable1Component } from './components/observable1/observable1.component';
import { Observable2Component } from './components/observable2/observable2.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { YtvideopracticeComponent } from './components/ytvideopractice/ytvideopractice.component';
import { PromiseVsObsComponent } from './components/promise-vs-obs/promise-vs-obs.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';


export const routes: Routes = [
    {path:"anatomy", component:AnatomyobservableComponent},
    {path:"obs1", component:Observable1Component},
    {path:"obs2", component:Observable2Component},
    {path:"operators", component: OperatorsComponent},
    {path:"subjects", component: SubjectsComponent},
    {path:"ytprac", component: YtvideopracticeComponent},
    {path:"probs", component: PromiseVsObsComponent},
    {path:"todo", component: TodoappComponent},
];
