const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/typography', component: Typography },
    { path: '/colors', component: Colors },
    { path: '/grid', component: Grid },
    { path: '/toasts', component: Toasts },
    { path: '/form-elements', component: FormElements },
    { path: '/buttons', component: Buttons },
    { path: '/icons', component: Icons },
    { path: '/containers', component: Containers },
    { path: '/shadows', component: Shadows }
  ]
});

router.afterEach(() => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 10);
});
