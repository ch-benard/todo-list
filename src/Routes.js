import Accueil from './components/Accueil';
import Contenu from './components/Contenu';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post';

export default [
  {path: '/', component: Accueil},
  {path: '/todo', component: Contenu},
  {path: '/blog', component: Blog},
  {path: '/post/:id', component: Post}
]