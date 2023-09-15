import {prisma} from '../lib/prisma';
import {TodoItem} from './components/TodoItem';
import Link from 'next/link';

function getTodo(){
  return prisma.todo.findMany()
}
async function toggleTodo(id:string,complete:boolean){
  "use server"
   await prisma.todo.update({ where :{id}, data:{complete}})
}

export default async function Home() {
  const todos = await getTodo();
  //await prisma.todo.create( { data: { title: "test",complete: false} } )
  //await prisma.todo.create( { data: { title: "abhitext",complete: true} } )
 
  return (
< div className="p-10">
  <div className="p-2">
  <Link href="/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Take Me To The New Page
  </Link>
  </div>
  <div>Looks like  Everthing is Working</div>
  <ul> 
  {todos.map(todo=>( 
    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
  
  ))}

  </ul>
  </div>
  )
}
