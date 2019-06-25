import { Routes, RouterModule } from '@angular/router';
import { WordsComponent } from './components/words/words.component';
import { WordsAdminComponent } from './components/words-admin/words-admin.component';
import { RemoveWordsComponent } from './components/remove-words/remove-words.component';

const APP_ROUTES: Routes = [
	{
		path: 'words',
		component: WordsComponent
	},

	{
		path: 'admin-words',
		component: WordsAdminComponent
	},
	
	{
		path: 'remove-words',
		component: RemoveWordsComponent
  },

	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'words'
	}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });