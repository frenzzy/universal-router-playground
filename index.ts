import UniversalRouter from 'universal-router'

const routes = [
  { path: '', action: () => 'Home' },
  { path: '/foo', action: () => 'Foo' },
  { path: '/bar', action: () => 'Bar' },
  { path: '/baz', action: () => 'Baz' },
]

console.log(UniversalRouter)
const router = new UniversalRouter(routes)

router.resolve('/foo').then((result) => console.log(result))
